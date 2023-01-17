# 💥 读懂zkPoS: 端到端Trustless

> 本文为Hyper Oracle撰写, English Version: [Medium](https://hyperoracle.medium.com/zkpos-end-to-end-trustless-65edccd87c5a).

## 简介

我们的[上一篇博客](https://hyperoracle.medium.com/zkwasm-the-next-chapter-of-zk-and-zkvm-471038b1fba6)谈到了 zkWASM 以及为什么 zkWASM 是通用计算的最佳基础设施. zkWASM 的通用性和灵活性, 可以 100% 支持 Hyper Oracle 的索引和自动化协议中任何用户所定义的 zkGraph.

这篇博客介绍了 zkPoS 以及 zkPoS 是如何成为 Hyper Oracle 的去中心化协议中最重要的一块拼图. zkPoS 具有通过 ZK 为共识生成证明的能力, 可以实现 Hyper Oracle 索引和自动化协议的端到端去信任与安全性.

## TLDR

- Hyper Oracle 正在开发 zkPoS (通过 ZKP 来证明 Ethereum PoS 共识). zkPoS 将使 Hyper Oracle 的 zkMiddleware 实现端到端去信任.
- 为了实现 zkPoS 证明, 我们研究了以太坊 PoS 共识的所有关键模块和逻辑 (proposer selection algorithm, committee shuffling logic…), 并列出了它们的 SNARK 化设计.
- 为了验证 zkPoS 中的 BLS 签名, 我们实现了 (可能是首个) 开源的 Halo2 Pairing 库.
- 为了进一步提高 zkPoS Attestation 的简洁性, 我们提出了针对连续区块共识的递归证明设计.

## 0. 以太坊 PoS 共识

以太坊现在所采用的是 Gasper PoS 协议.

严格意义上来说, PoS 是以太坊 2.0 抗女巫攻击的机制 ([限制谁可以参与区块生产过程](https://twitter.com/stonecoldpat0/status/1570338216946851842)). [Gasper](https://github.com/ethereum/pos-evolution/blob/master/pos-evolution.md#gasper) 是实际以太坊所使用的的 PoS 共识协议, 结合了 FFG Casper (finality gadget) 和 (a variation of) LMD-GHOST (fork choice rule).

就像 zk rollup 这个词比 validity rollup 这个词使用得更广泛一样, 在这篇文章中, 我们将把以太坊 2.0 的共识称为以太坊 PoS.

![](/img/zkpos/gasper.png)

除此之外, 你也可以深入阅读 Vitalik 所写的以太坊 PoS 共识未来路线的文章: [Paths toward single-slot finality](https://notes.ethereum.org/@vbuterin/single_slot_finality).

### a) 以太坊 PoS: 概念

现在我们可以深入了解以太坊 PoS 的实际概念.

- **区块 (Block)**: 每 12 秒产生一个区块 (或一个 Slot).
- **纪元 (Epoch)**: 一个纪元是由每 32 个连续的区块组成的, 第一个区块是一个检查点 (Checkpoint).
- **验证人和委员会 (Validator and Committee)**: 验证人的集合被划分为委员会, 每一个纪元都进行重新洗牌.
- **验证人进入 (Validator Entrance)**: 要成为一个验证者, 一个节点需要存入至少 32 个 ETH, 并处于入口队列中不少于四个纪元.
- **验证人退出 (Validator Exit)**: 要退出验证者集合并取回余额, 验证者必须在退出队列中保持不少于四个纪元. 在退出验证器集后, 仍需要等待 ~27 个小时的时间才能提取余额.

### b) 以太坊 PoS: Committee Attestation (委员会证明)

一个给定的委员会中的每个验证者被映射到一组块中, 来验证每个纪元. 委员会则被 randao_mix 分配来验证区块.

从一个委员会到一个区块的证明包含一个代表投票的 bit-string 和一个聚合的签名 (我们将在后面的章节中讨论聚合签名的内容).

当一个检查点和上一个检查点之间的区块包含了至少 2/3 的总票数时, 该检查点就是有效的 (Justified). 一个合理的检查点在其连续的检查点 (也需要是有效的) 之后, 将被视为最终完成 (Finalized). 其他区块在最近的后续检查点被证明是合理的或被最终确定后, 就被认为是合理的或最终确定.

![](/img/zkpos/committee.png)

### c) ZK Attestation (ZK 证明) 与 Committee Attestation (委员会证明)

> **zkPoS Attestation 中的 Attestation ≠ Committee Attestation 中的 Attestation**
>

为了避免混淆, 我们需要强调, 本节中的 "Attestation "本质上是对某一特定区块投票的表示, 与我们实现的全局状态的 zkPoS Attestation (ZK证明) 不同.

## 1. zkPoS Attestation (zkPoS 证明)

### a) 共识的验证

在学习 zkPoS 之前, 我们需要了解区块链节点不同定义的一些基本知识.

在以太坊 PoS 的背景下, [区块链节点的一个比较简单的定义框架](https://dinoeggs.substack.com/p/easier-framing-for-blockchain-nodes)如下:

- **验证者 (Validator)**: 构建, 提议和对有效的区块达成共识.
- **完整节点 (Full Node)**: 下载整个区块, 包括区块头和交易; 可以自行验证区块并执行状态变化.
- **轻客户端 (Light Client/Light Node)**: 只下载区块头; 可以验证 Merkle 证明以检查交易是否包含在内; 需要 "信任" 其他节点对于交易数据的共识.
- 其他类型包括 [PBS](https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance) 中的提议者 (Proposer) 和构建者 (Builder) 以及存档节点 (Archive Node).

**接下来我们将只关注轻客户端, 因为[普通用户不会运行完整节点](https://twitter.com/VitalikButerin/status/87317738216484864)**. 除了 "普通用户问题", **移动端、浏览器和链上合约场景只可能运行轻客户端节点**.

轻客户端也有[不同类型](https://twitter.com/0xdinoeggs/status/1607816984472989696). 它们可以被划分为不同用途的验证者 (Verifier).

- **共识验证者 (Consensus Verifier)**: 验证 Merkle 证明, 确保部分共识 (tx inclusion) 是有效的, 但对于整个共识仍然需要信任其他节点.
- **状态验证者 (State Verifier)**: 验证 ZK 或欺诈证明, 确保状态转换是有效的.
- **DA 验证者 (DA Verifier)**: 验证新区块交易数据的可用性.
- **完全验证者 (Full Verifier)**: 验证上述所有的共识、状态转换和 DA.

![](/img/zkpos/verifiers.png)

需要注意的是, 共识验证者轻节点仍然需要在整个共识上信任其他节点. 既然它可以验证证明, **为什么不直接让它验证以太坊 PoS 整个共识的零知识证明呢**?

### b) 无需信任, 直接验证 zkPoS Attestation

在 Hyper Oracle 的愿景中, 我们的目标是实现端到端的 Trustless.

我们需要**实现验证以太坊 PoS 整个共识的轻节点**. 在以太坊路线图 The Verge 中, 它也被称为 "[SNARK-based Light Client](https://notes.ethereum.org/@domothy/roadmap#What%E2%80%99s-next2)".

zkPoS Attestation 的优点是:

- **无需信任**: 去除以太坊轻节点对其他节点的额外信任, 实现完全无需信任.
- **去中心化**: 以太坊节点不需要依赖中心化的服务来给他们提供区块头或其他数据.
- **低开销**: 对 zkPoS Attestation 的验证是高效的, 只需要很小的开销.

ZK 化的轻客户端将验证我们的 zkPoS Attestation 的ZKP. 它可以非常容易地在 Web App 或浏览器的插件中运行.

**验证 zkPoS Attestation 将是使我们的 zkMiddleware 完全 ZK 化的重要基础**. 它将使我们的 Meta App zkIndexing (基于 GraphQL 的 Trustless 索引和查询) 和 zkAutomation (基于 GraphQL Off-chain Source 的 Trustless Automation 和 Keeper) 能够访问和同步有效的区块头.

之后, 我们可以通过有效的区块头抓取 receipt, state, 和 transaction 根. 在 zkIndexing 中, 我们获取 receiptRoot, 然后获取收据的编码数据, 最后根据收据的原始数据用 RLP 解码获得合同事件.

![](/img/zkpos/roots.png)

## 2. Hyper Oracle 的 zkPoS

以太坊 PoS 的算法非常复杂, 很难用一个简单的图表或一个段落来描述. 而且, 以 ZK 的方式实现它们需要大量的工程工作和架构设计 (就像 zkEVM). 因此, 为了实现 zkPoS, 有必要将这些组件分割开来, 逐一实践它们.

**zkPoS 最优先的算法是 Block Attestation.** 换句话说, **通过 Pairing 验证 BLS 签名是 zkPoS 最关键的部分**. 我们将在后面的章节中详细介绍这部分内容.

简而言之, 对于 Hyper Oracle 的 zkPoS, 我们将实现以太坊 PoS 的如下算法.

### a) 基于随机性的算法

- **提议者选择算法 (Proposer Selection Algorithm)**

几个纪元前的随机种子将决定每个区块的提议者.

这个算法的底层组件之一是洗牌算法, 它也将被在下一个逻辑中应用.

- **委员会洗牌算法 (Committee Shuffling Logic)**

每个纪元, 通过随机种子和洗牌算法, 整个验证者集合被重新洗牌为不同的委员会.

### b) 验证者相关算法

- **验证者进入 (Validator Entrance)**

验证者候选者: 任何节点存款 ≥32ETH 则可成为验证者候选人.

正式验证者: 在一个验证者候选者进入队列不少于 4 个纪元后, 它将被激活为正式验证者.

- **验证者退出 (Validator Exiting)**

要离开验证器集并提取余额, 一个节点必须进入退出队列时间不少于4个纪元. 这种验证器的退出可以由自愿退出或因行为不端而被 Slashing 所触发.

特别是, 有效余额低于 16ETH 的验证器将被停用.

![](/img/zkpos/queue.png)

### c) Block Attestation 算法

一个区块只有在该纪元的相应委员会成员有多数 (2/3) 赞成该区块的投票时才会被认证.

这是以集合签名和代表投票的 bit-string 的形式实现的, 其中当且仅当相应的验证人投票时, 每个 bit 都是 1.

![](/img/zkpos/attest.png)

### d) 其他逻辑

要注意的是, 本文所列出的的变量和推理过程是最重要的组成部分, 但要完全证明一个区块还需要更多的内容. 例如, 随机性和有效余额 (effective balance) 不是可以通过简单的计算直接产生的.

- 随机性

随机性是指在每个区块中, 将签名 (randao_reveal) 与随机源 (randao_mix) 混合, 以确定之后的区块中的随机数.

- 有效余额

验证者的有效余额需要不断更新, 余额不足的验证器将被视为无效.

### e) 一图看懂 zkPoS

由于以太坊现有的 PoS 共识的复杂性, 我们提供了这个总结上述逻辑的图表. 两列各代表了两个相邻区块的数据.

其中, 左边第一个区块是一个检查点. 该图包括从检查点块到其下一个块的状态转换的部分必要算法. 每个箭头都对应于至少一个对 zkPoS Attestation 的约束.

![](/img/zkpos/pos.png)

在这个图中, 为了方便理解, 我们省略了有效余额和表示索引是否有效的 Boolean 数组.

请注意:

- 委员会成员是根据一定纪元前的随机数选择的.
- 进入和出口队列是根据最新的存款、Slashing 和自愿退出从而更新的.
- 四个纪元前加入的进入/出口队列中的验证人将离开队列, 转换为激活状态中或停用的.
- 第二个区块由相应的 Committee Attestation 来证明, 这些证明存储在未来的区块中.

## 3. zkPoS: BLS

### a) [PoS 中的 BLS 签名](https://eth2book.info/bellatrix/part2/building_blocks/signatures/#the-building-blocks)

在以太坊 PoS 协议中, 使用了基于 BLS12-381 椭圆曲线的 BLS 签名, 而不是基于 secp256k1 椭圆曲线的ECDSA (用于用户交易签名).

以下是选择基于 BLS12-381 的 BLS 的一些理由:

1. 为什么是BLS? **BLS 具有 Pairing 的特殊属性**.
2. 为什么要 Pairing? **Pairing 允许签名被聚合**.
3. 为什么要聚合? 尽管与 ECDSA 相比, 配对操作让 BLS 签名的验证变得更加资源密集和昂贵, 但其好处是:
    - **时间**: 在一次签名验证操作中验证所有 Attestation. (仅用两个配对和椭圆曲线点加法来验证 N 个签名).
    - **空间**: 将所有签名的 N 个字节缩减为总签名的 1/N 个字节 (理想情况下).
    - **当签名的数量比较大时, 优化效果就会累积起来**.
4. 为什么用 BLS12-381? **BLS12-381是[一个配对友好的椭圆曲线](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-pairing-friendly-curves-10), 具有 [128 位安全性](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-pairing-friendly-curves-10#name-for-128-bit-security)**.

### b) [验证 BLS 签名](https://eth2book.info/bellatrix/part2/building_blocks/signatures/#verifying)

为了**验证 BLS 签名**, 我们需要三个输入:

- **BLS 签名本身** (将签名进行椭圆曲线点相加, 并得到代表 96 字节签名的最终点.)
- **聚合公钥** (验证者的原始公钥可以在信标链状态中找到. 然后将它们 “添加” 在一起.)
- **信息**

![](/img/zkpos/bls-sig.png)

在我们前面讨论轻客户端的部分中, 我们知道我们最常见的场景是移动端、浏览器和链上. 在这些场景中, 进行验证计算, 包括聚合公钥和验证 BLS 签名 (带 Pairing 检查的椭圆曲线加法) 是昂贵的. **幸运的是, 验证 ZKP, 或者具体来说, 验证 zkPoS Attestation 是很便宜的**.

![](/img/zkpos/verify.png)

**使用 BLS12-381 曲线验证 BLS 签名是 zkPoS Attestation 的关键组件之一**.

如此昂贵的验证所需的计算能力可以外包给 zkPoS Attestation prover. 一旦生成证明, 就不需要其他计算. 然后, **客户端只需要验证 ZKP**. 就这么简单.

### c) BLS12-381 的更多知识

[一个有趣的事实](https://eth2book.info/bellatrix/part2/building_blocks/signatures/#see-also)是 “BLS 签名” 中的 BLS 是 Boneh、Lynn 和 Shacham, 而 “BLS12-381” 的 BLS 是 Barreto、Lynn 和 Scott.

BLS12-381 中的 12 是[曲线的嵌入度](https://hackmd.io/@benjaminion/bls12-381#Motivation).

BLS12-381 中的 381 是[表示曲线上坐标所需的位数](https://hackmd.io/@benjaminion/bls12-381#Motivation).

BLS12-381 的曲线实际上是两条曲线: G1 和 G2. 除了深入研究这些曲线的数学部分, 一些 [BLS 签名工程上的设计](https://hackmd.io/@benjaminion/bls12-381#Swapping-G1-and-G2)是:

- G1 比 G2 更快, [需要更少内存](https://medium.com/asecuritysite-when-bob-met-alice/explaining-bls12-381-the-zero-knowledge-proof-curve-aa5eabec8261), 因为计算层面 field 更小.
- Zcash 选择签名使用 G1, 公钥使用 G2.
- 以太坊 PoS 选择公钥使用 G1 作为公钥, 签名使用 G2. 原因是公钥的聚合发生得更频繁, 并且公钥存储在需要更小表示的状态中.

两条曲线之间的椭圆曲线配对称为双线性映射. 本质上就是是我们映射 G1 X G2 → Gt. 你可以在 [Vitalik 的帖子](https://vitalik.ca/general/2017/01/14/exploring_ecp.html)中了解更多信息.

[以更简单的话来说](https://alonmuroch-65570.medium.com/bls-signatures-part-2-key-concepts-of-pairings-27a8a9533d0c), **Pairing 是一种验证 BLS 签名所涉及到的特殊乘法**. Pairing 是 zkPoS Attestation 的 BLS 签名的验证部分所必备的.

## 4. zkPoS: Halo2 Pairing for BLS

### a) 已有实现

有许多关于 BLS12-381 Pairing 的开源实现. 它们可以作为 BLS 签名验证的重要组成部分.

- **用于以太坊 PoS 客户端**: [blst](https://github.com/supranational/blst) by supranational
- **用于学习**: [noble-bls12-381](https://github.com/paulmillr/noble-bls12-381) by Paul Miller

另外, 还有一些用 ZK 语言实现的:

- **用于 Circom**: [circom-pairing](https://github.com/yi-sun/circom-pairing) by 0xPARC ([part1 post](https://0xparc.org/blog/zk-pairing-1), [part2 post](https://0xparc.org/blog/zk-pairing-2))

### b) Hyper Oracle 的 Halo2 Pairing

回顾一下, 我们需要用 ZK 语言来实现 Pairing, 因为我们将用我们的 zkPoS Attestation 来证明 PoS. BLS 签名验证是 zkPoS 证明的重要组成部分, 而 BLS12-381 的 Pairing 是 BLS 签名验证的基础.

如果你读了我们的[关于zkWASM的上一篇文章](https://hyperoracle.medium.com/zkwasm-the-next-chapter-of-zk-and-zkvm-471038b1fba6), 你可能会想, 为什么我们不直接使用现有的实现? 下面是我们的思考过程:

- **重复使用 Rust/C/... 的实现**: 开箱即用的解决方案, 但是在没有优化的情况下, 直接在 zkWASM 中运行它们的性能可能不是最佳的.
- **重复使用 circom 的实现** (circom-pairing): 也是开箱即用, 且[审计过的](https://medium.com/veridise/circom-pairing-a-million-dollar-zk-bug-caught-early-c5624b278f25). 更多的比较将会在下一节介绍.

### c) Halo2 Pairing 与 circom-pairing 的比较

circom-pairing 为 circom 中的 BLS12-381 曲线提供了一个很好的 Pairing PoC 实现. 在 Succinct Labs 的 [Proof of Consensus trustless bridge](https://github.com/succinctlabs/eth-proof-of-consensus) 中, 它被用于 BLS 签名验证.

而我们不使用 circom-pairing 的原因是:

- **产品方面**: circom-pairing 会让达成客制化和通用性更加难. zkIndexing 和 zkAutomation 是基于用户定义的 zkGraph (定义如何提取区块链数据, 并将其处理到 Hyper Oracle 节点中), 因此必须支持zkGraph语法中的任何逻辑. 这一点与技术栈的理由密切相关.
- **技术栈方面**: circom-pairing 与 zkWASM 的 Plonkish 约束系统不兼容. circom 实现的 circom-pairing 编译为 R1CS, 很难与我们的 Plonkish 约束系统相结合 (使用 [VampIR](https://anoma.net/blog/a-vamp-ir-s-guide-to-arithmetic-circuits-and-perfectly-boiled-eggs/) 这样的工具会增加我们系统的复杂性). 另外, R1CS 对于证明批处理 (Proof Batching) 来说并不完美 (当然是可行的).
- **性能方面**: 证明生成速度方面, 我们的 Halo2 Pairing 实现要比 circom-pairing 快得多. 在 gas fee 方面, 我们的 Halo2 Pairing 电路可以很容易地与 zkWASM 电路结合 (Halo2 Pairing 是 Plonkish, 而 circom-pairing 是 R1CS), 所以使用 Halo2 Pairing 的费用会低很多.

更简单地说, 如果我们必须使用 circom-pairing 进行 BLS 签名验证, 对我们来说, 一些缺点主要是:

1. 与我们现有的 zk 电路**不兼容**, 包括 zkWASM
2. **不利于产品在 zkGraph 上的完全通用性和定制能力**
3. 或者**给我们的系统增加了不必要的复杂性**
4. 而且**性能可能不是最佳的**

具体区别如下:

![](/img/zkpos/halo2-why.png)

**我们最终的技术栈是, zkWASM 用于定制逻辑 (zkGraph), Halo2 Pairing 作为 Foreign 电路 (BLS 与 BLS12-381)**. 它同时满足了通用性 (对于用户定义的 zkGraph) 和性能 (对于整个zk系统).

**我们很高兴我们有了自己的 Halo2 Pairing 库的实现 (可能是目前市面上第一个开源实现)**. Halo2 Pairing 将为 zkPoS Attestation 提供基础. 它是完全开源的, 你可以在[这里](https://github.com/DelphinusLab/halo2ecc-s/tree/pairing)看源码与提 PR. 下面是一些更详细的技术细节和 benchmark.

![](/img/zkpos/halo2-benchmark.png)

## 5. zkPoS: 递归证明

### a) ZK 递归

zkPoS 的另一个关键点是递归证明.

递归证明本质上是证明的证明 (证明 B 时验证证明 A ). 我们的 Halo2 Pairing 也可能会在其中发挥作用, 因为 BLS12-381 是 "[零知识证明曲线](https://medium.com/asecuritysite-when-bob-met-alice/explaining-bls12-381-the-zero-knowledge-proof-curve-aa5eabec8261)".

一般来说，递归证明的[主要优势](https://www.youtube.com/watch?v=VmYpbFxBdtM)如下:

- 压缩 **(aka 简洁)**:
    - 将更多的知识 "Rollup" 到一个输出的单一证明中.
    - 例如: 验证开销(第 N+1 个证明, 证明第 0-N 次的正确性) < 验证开销(第 0-N 个证明)

![](/img/zkpos/recursive-why.png)

### b) 为什么 zkPoS 需要递归证明?

当处理[区块链](https://bitcoin.org/bitcoin.pdf)共识时, 对递归证明的需求会变大.

**I. PoW 和 PoS 的递归证明**

对于一个 PoW 共识的网络: 从最高的区块开始, 我们将递归地检查它之前的哈希值、nonce 和难度, 直到到达我们定义的起始区块. 我们将在下一节中用公式演示该算法.

对于像以太坊这样具有 PoS 共识的网络: 情况会更复杂. 我们需要根据前一个区块的验证者集合和投票来检查每个区块的共识, 直到追溯到一个没有争议的历史区块 (如以太坊 PoS 信标链的创世区块).

**II. PoW 递归证明的效果**

下图展示了共识的递归证明在将更多信息压缩到单一证明中的效果, 以 PoW 为例.

![](/img/zkpos/recursive.png)

**III. 使用/不使用递归证明**

如果没有递归证明, 我们最终会输出 O(区块高度) 大小的证明来进行验证, 即每个块证明的公共输入和每个块的证明.

有了递归证明, 除了初始和最终状态的公共输入, 我们将有一个 O(1) 针对任何数量的块的证明, 即第一个和最后一个公共输入, 连同递归证明 $\mathsf{pk}_r$. 一个自然的问题是, 所有的中间公共输入都去哪儿了? 答案是, 它们已经成为 ZK argument 的 existential quantifiers, 因此被消除了. 简单来说, 更多的知识被递归证明压缩到了证明中.

**IV. 递归证明对 Hyper Oracle 的效果**

需要记住, 我们面对的是有更多计算和内存限制的 "轻客户端" (浏览器), 即使每个证明可以在恒定的时间内 (比如 1 或 2 秒) 验证. 如果区块和证明的数量加起来, 验证时间将非常长.

在 Hyper Oracle 的 zkAutomation 中, 可能有跨多块进行自动化操作的情况, 比如在套利策略或自动风险管理等场景下. 那么为了实现这样的应用, PoS 共识的递归证明是必须的.

### c) Hyper Oracle 的递归证明

为了便于表述和理解, 本节已被简化, 并不代表确切实现.

理论上, 对于两个连续区块的递归证明, PoW (PoS 的情况太复杂, 不能浓缩到一个共识) 的递归证明如下:

![](/img/zkpos/pok-0.png)

在将中间的公共变量 (即 h_1, pk_2, 和 preHash_2) 改为 Witness 后, 两个证明可以合并为一个证明, 如下图所示:

![](/img/zkpos/pok-1.png)

我们可以观察到, 公共输入只有 h_2、pk_1 和 preHash_1. 当有两个以上的区块时, 例如 n 个区块, 我们可以应用同样的技巧进行 n-1 次递归, 为 n 个区块最终生成一个证明, 同时只保留第一个 pk_1 和 preHash_1 的公共输入, 以及最后的区块哈希 h_n.

类似于这个 PoW 例子的递归证明的算法将被应用, 用于保证 Hyper Oracle 的 zkPoS Attestation 对任意区块数证明的简洁和恒定大小. 请注意, 在当前阶段, zkGraph 的定制逻辑不包括在这个递归证明中.

## 6. 端到端 Trustless 之路

我们即将发布的黄皮书将提供更多关于 Hyper Oracle zkPoS Attestation 的规格和实施细节.

总而言之, zkPoS 是基于我们以下独特的技术栈:

- zkWASM, 用于为用户定义的 zkGraph 提供100%的定制化通用性
- Foreign 电路, 包括 Halo2 Pairing 等
- 递归证明

Hyper Oracle 非常期待利用 zkPoS 实现端到端的无信任索引和自动化 Meta App, 以及通过我们的 zkMiddleware 使下一代应用程序做到真正去中心化.

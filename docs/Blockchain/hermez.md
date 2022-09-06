# ♦️ 读懂Polygon: Hermez zkEVM

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/i9O0vpHnkHFwVBPjNeqMUQ)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-all-about-polygon-zkevm-and-zkevm-rollup-cfdfd3bd8160).

以太坊的未来路线可谓是为 Rollup 量身打造, 而目前最被寄予厚望的方案就是采用了零知识证明技术的 zk Rollup.

通常大家的认知中, [zk Rollup 需要数年的工程开发才可以真正落地](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ), 这是由于[构建 zkEVM 的开发难度巨大](https://mp.weixin.qq.com/s/808jMXvIUqB973aVHrAzGQ). 为了让开发者能无缝移植和部署以太坊智能合约到 zk Rollup 中, 开发团队需要对兼容 EVM 的 zkEVM 进行开发与性能优化.

实现 zkEVM 一直是以太坊基金会和 Polygon 等其他 zk Rollup 团队的重点任务. 在长期视角下, zkEVM 的实现不仅能解决[以太坊主网共识瓶颈的各个方面](https://mp.weixin.qq.com/s/sl3JewEsVNZ7bhSAgd8z1g):

- I/O: 通过无状态和 enshrined zkEVMs
- 存储: 通过无状态和 enshrined zkEVMs
- 计算: 通过 enshrined zkEVMs

同时以 zkEVM 为核心组件, 可以构建一个真正完美的通用 Rollup 网络.

Polygon 就在近期带来了这么一个带有 zkEVM 的 [alpha 版本 zk Rollup](https://blog.polygon.technology/the-future-is-now-for-ethereum-scaling-introducing-polygon-zkevm), 与 Scroll, StarkNet, zkSync, Sin7Y 等的方案相比各有千秋. 这些 zkEVM 的存在是 Polygon 与以太坊生态的一个巨大飞跃, 也意味着全新且更好的 Rollup 用户体验即将到来.

![](/img/hermez/layer.png)

## 0. zkEVM

### a) zkEVM 介绍

在了解 zkEVM Rollup 如何颠覆以太坊用户体验之前, 我们需要认识 zkEVM 的概念. 如果你想更深入地了解 zk, zkVM 与 zkEVM, 欢迎阅读[我们之前的研究文章](https://medium.com/@foresightventures-zh/foresight-ventures-解读-zk-zkvm-zkevm-及其未来-6643262505b2).

zkEVM 的概念可以被拆解成两个部分:

- zk: 零知识证明技术, 可以通过一个精简的证明来证明一批次 tx 的有效性, 达成计算可信, 从而实现扩容.
- EVM: 以太坊生态的智能合约执行器. 正是 EVM 的存在才让以太坊具有智能合约运行能力, 成为全球计算网络 (相比之下比特币的功能可能只能算是计算器), 同时 EVM 也衍生出 [EVM 兼容, EVM 等同, EVM 超集](https://twitter.com/toghrulmaharram/status/1518270138876891138)的概念.

那么 zkEVM 就是一个至少在编程语言层面兼容 EVM 的 zk 虚拟机. 智能合约在 zkEVM 中运行后, 会生成一个 zk 证明, 它可以证明运行状态转换的有效性, 保证计算可信. 验证者只需对证明验证即可 (开销很小), 无需重新执行 (冗余很大).

![](/img/hermez/zkvm.png)

### b) zkEVM 意义

![](/img/hermez/zkevm.png)

zkEVM 在各个层面都具有重大的意义:

- 对于 Rollup 扩容: zkEVM 可以为批量 tx 生成证明从而在主网快速验证, 以完全可信与无需多轮复杂共识的方式借助主网安全性达成了计算可信.
- 对于 DApp 开发者: 开发者无需学习任何 zk 相关的硬核知识或 Solidity 和 Vyper 以外的新语言, 就可以借助 zkEVM 来给任意智能合约赋予 zk 的超能力.
- 对于 zkEVM 开发者: 无需为网络上的智能合约的功能编写不同的电路, 而是只需维护 zkEVM 即可.
- 对于 Layer3 搭建者: 可以尝试在 zkEVM 中搭建 Layer3 的 Verifier, 于是 Layer3 的批量交易可以进一步被同时证明且批量地打包成一条 tx 在主网验证 (L3: 1000 tx → L2: 10 tx → L1: 1 tx), 实现 App-rollup.
- 对于以太坊: 多个 zkEVM 方案的存在最终会成为重要的 Public Goods, 帮助以太坊实现下一阶段的 Enshrined zkEVM 与 zk everything 的 Roadmap.

### c) zkEVM 方案与进度对比

近期 zk Rollup 项目非常活跃. StarkNet 宣布将在未来发币, Aztec 发布了隐私 DeFi, zkSync 发布了主网上线倒计时, Scroll 发布了 Pre-Alpha 版本的 zkEVM, Polygon 开源了 zkEVM 项目的全套代码……

以太坊生态可谓是一场 zk 与 zkEVM 的军备竞赛. 而正如我们在[之前的 zkVM 与 zkEVM 文章](https://medium.com/@foresightventures-zh/foresight-ventures-解读-zk-zkvm-zkevm-及其未来-6643262505b2)中所说的, zkEVM 的方案各有千秋, 各有优势.

首先是技术大方向上的区别, 基本分为两个方向:

![](/img/hermez/evm.png)

两个方向上都有不同的选手:

- 基于原生: Polygon, AppliedZKP, Scroll, Taiko. 当然后三者都在同一个 Repo 中进行开发, 基本可以视为是同种方案.
- 基于编译: StarkNet, zkSync, OlaVM 等. 这个赛道上选手最多, 但不同项目的差别其实也比较大.

按照 [Vitalik 的分类对比方法](https://vitalik.eth.limo/general/2022/08/04/zkevm.html)的话, 分为如下类型:

![](/img/hermez/type.png)

- Type 1: 完全适配以太坊 L1 的 enshrined zkEVM. 如 AppliedZKP.
- Type 2: 完全 EVM 等同的 zkEVM, 内部结构略有区别. 如未来的 Scroll 和 Hermez.
- Type 2.5: EVM 等同, 仅 gas cost 不同 (可能会导致细微的兼容性差别) 的 zkEVM. 如加上复杂操作的 precompiles 后的 Scroll 和 Hermez.
- Type 3: 几乎 EVM 等同的 zkEVM. 如现阶段的 Scroll 和 Hermez.
- Type 4: 语言层面兼容 EVM 的 zkEVM, 特性和开发者设施会不同, 同时开发者也无法直接手写 EVM Bytecode. 如 zkSync 和 StarkNet.

在方案的取舍上, 实际上有非常多的变量. 就像游戏初始人物加点一样, 只有一定量的天赋点可以分配给每个变量, 可以说又是一个三难选择:

- 性能 (zk Prover, Verifier, 开销, 硬件加速)
- 适配性 (DApp 开发者, 基础设施, 开发工具, 矿工)
- 开发难度 (维护难度, 开发进度, 系统复杂度, 工程实现复杂度)

其中典型方案的[区别](https://twitter.com/aliatiia_/status/1422655305540902913)为:

- StarkNet: 完全实现一个全新的 zkVM (CairoVM), 性能好, 开发难度不高, 但适配性不足 (需要 Warp 转译器实现 EVM), 最大的亮点是已经形成生态, 同时具有 [storage proof](https://twitter.com/henrlihenrli/status/1559173089971146753) 和 [fractal scaling](https://twitter.com/henrlihenrli/status/1559173135789830144) 等创新.
- zkSync: IR 层面的 zkEVM (LLVM-IR 部分). 适配性好 (语言层面适配), 性能和开发难度都中等, [更加灵活](https://twitter.com/cronokirby/status/1550750051873562624), 最大的亮点是可以在编译器迭代过程中, 可以通过 LLVM 支持除了 Solidity 外的其他语言.
- Hermez 和 Scroll: 都算是 Bytecode 层面的 zkEVM (不代表完全复用 EVM Bytecode, 但两者的差别很细微). 适配性极好, 性能有所牺牲 (原始的 EVM 并不 zk 友好, 电路化之后有很多性能上的挑战需要攻克), 开发难度很高, 最大的亮点是架构安全性与最原生.

## 1. Polygon zkEVM Rollup

Polygon Hermez 此次开源的 zkEVM Rollup 网络的核心组件就是 zkEVM. 它的整体技术方案与其他方案的对比和我们前文中所述的基本一致.

### a) Polygon zkEVM Rollup 架构

Polygon zkEVM Rollup 的整体架构如下:

![](/img/hermez/architecture.png)

架构中的核心就是 zkEVM 本身. zkEVM 会执行 L2 的 tx, 并且链下证明网络会为 zkEVM 中 tx 的执行生成有效性证明, 最终状态改变和证明会被提交上以太坊主网.

Polygon zkEVM Rollup 的关键组件为: PoE 共识算法, zkNode, zkProver, STARK 与 SNARK 的 Proof Builder, Rollup 跨链桥:

- [PoE 共识算法](https://ethresear.ch/t/proof-of-efficiency-a-new-consensus-mechanism-for-zk-rollups/11988): 为了安全性, 效率, 与去中心化的提升, PoE 算法替换了 Hermez 1.0 的 PoD 算法. PoE 能与 PoS 相结合, 保证 Polygon zkEVM Rollup 出块的去中心化与高效. 任何运行 zkNode 的矿工都可以成为 Sequencer, 而任何运行 zkNode 与 zkProver 的矿工可以成为 Aggregator. 其中矿工出块权利的 gas fee 将使用 $MATIC 进行交易.

![](/img/hermez/poe.png)

- zkNode: zkNode 是任何想参与 Polygon zkEVM Rollup 网络的矿工所需要运行的软件. zkNode 会进行 tx 的同步, 排序, 与验证. 除此之外, 如果仅仅是想了解网络的运行状态, 而非参与, 就只需要运行一个 read-only 节点, 无需运行 zkNode.
- zkProver: zkProver 是任何想作为 Aggregator 角色参与 Polygon zkEVM Rollup 网络的矿工所需要运行的软件. zkProver 顾名思义是一个生成 zk 证明的证明器. 本质上, zkEVM 是多项式表示下的状态转换, zkProver 中包含了一个 Main SM Executor 和多个 Secondary State Machines, 来达到对状态转换的证明.

![](/img/hermez/zkprover.png)

- STARK 与 SNARK Proof Builder: 两个 Proof Builder 会生成 STARK 与 SNARK 两类不同证明. STARK (PIL STARK) 为状态转换批次的多项式约束的满足生成证明, 而 SNARK (SnarkJS) 会对 STARK 证明的构建生成 constant size 的证明, 从而以更低的成本发布在链上.

![](/img/hermez/recursive.png)

- Rollup 跨链桥: Polygon zkEVM Rollup 除了是一个传统的 Burn/Mint 跨链桥以外, 还可以作为与其他 L2 进行跨链的桥梁.

![](/img/hermez/bridge.png)

### b) Polygon zkEVM Rollup 设计

Polygon zkEVM Rollup 的设计核心思路就是:

- 去中心化 (任何人都可以通过 DA 来重建整个 Rollup 的状态, 没有任何 Censorship 和中心化控制的存在)
- 无需准入 (任何人都可以参与到网络中, 作为 Sequencer 或 Aggregator)
- 安全性 (继承以太坊的安全性, 通过以太坊网络来帮助 Rollup 状态更新与证明的验证)

![](/img/hermez/polygon.png)

- 性能与高效 (通过 PoE, 链下计算, 跨链桥合约的 UTXO 模式结算, 以及各种密码学优化方案进行性能提升)

### c) Polygon zkEVM Rollup 特色

真正让 Polygon 方案脱颖而出的优势有很多.

首先, Polygon 开发团队间的协作天然地形成了合力. Polygon 的 zk 宇宙中包含了 Polygon Hermez (也就是我们所说的 Polygon zkEVM 的主力开发团队), Polygon Zero, Polygon Miden, 与 Polygon Nightfall, 模块化方案中更是包括了其他的很多团队. 虽然三支 zk 队伍的方向略有不同, 但都是 zkVM 领域的顶尖团队, 在技术方案与架构上能直接地进行协作与互相帮助. [比如 Polygon Hermez 选择 64-bit 的 small field 的 STARK 证明生成就是采取了 Polygon Zero 的建议](https://youtu.be/T2fH1NlHnAc?t=516).

![](/img/hermez/zkverse.png)

此外, Polygon zkEVM Rollup 在 zk 技术上有很多创新. 比如两门 DSL zkASM 和 PIL 的创造, 可以用于解释 EVM 字节码与编码多项式承诺; STARK 与 SNARK 的结合, 发挥了 STARK 的 Scalable 和 SNARK 的 Succinct, 让证明整体更快的同时最终链上空间消耗更小; [优化上](https://twitter.com/Ingo_zk/status/1550121968904507393), 采用了[非常高效的 Goldilocks](https://blog.polygon.technology/introducing-plonky2/) 作为 base field, 实现了 Keccek 电路的并行计算, 使用 Poseidon-hash Merkle tree 作为数据结构进行系统的存储.

在证明生成去中心化与 EVM 等同性上, Polygon Hermez 与 Scroll 都以各自的方式做出了很大的努力. 要实现 EVM 等同性, 就必须要将 EVM 的操作码通过 zk 电路的形式来编写, Polygon 通过 [zkASM 来解释, 然后在 zkExecutor 中执行](https://twitter.com/toghrulmaharram/status/1549863723556282370) ([Geth 本质上一样是解释](https://twitter.com/dlubarov/status/1550491404345950216)), 而 Scroll 是直接可以[对 Geth 客户端的 Execution Trace 生成证明](https://twitter.com/yezhang1998/status/1549808592936906752). 两者在兼容性上实际没有区别 (runtime 的[解释](https://twitter.com/dlubarov/status/1550506366527086594)或者[转译不会对适配性有影响](https://twitter.com/dlubarov/status/1550491438470668290)), [对比下](https://twitter.com/toghrulmaharram/status/1550065886064779265), Polygon 的方案在 EVM 等同性上做到了对证明节点更友好, 更高效, 对比之下, Scroll 侧重于完全复用 Geth 的安全基础, [更方便审计](https://twitter.com/aliatiia_/status/1549999427791765504).

![](/img/hermez/assembly.png)

我认为 Polygon Hermez 的 zkEVM 的方案在原生 EVM 支持与性能之间击中了 Sweet Spot, 不仅通过 zkASM 对 EVM 进行解释, 避免了 EVM 底层开发复杂度极高的问题, 同时也通过不同角度的创新与优化让性能不再是 zkEVM 的致命问题.

## 2. zkEVM Rollup 方案的优势

### a) Layer 1 与 Rollup

用户苦 Layer 1 gas 已久也, 在[我们之前 MEV 的研究](https://mp.weixin.qq.com/s/Yd-umFnjhXyB7crei2lynA)里, 讨论到了一个理想的网络的形态.

**在一个[理想的网络](https://twitter.com/0xmisaka/status/1511370037306834954)里:**

- **任何人都可以发送交易 (no censorship)**
- **没有垃圾信息 (no spam)**
- **费率非常低 (low fees)**

同时在 Crypto 与区块链的语境中, 网络还需要是去中心化与性能可拓展的. 这就是一个理想区块链网络的三难格局:

- low fees with no spam
- decentralized with no permission and no censorship
- scalable with general computation

Layer 1 的单体区块链不可能同时做到以上几点, 而 Rollup 通过中心化出块, 去中心化验证做到了能最终实现性能高, 去中心化, 低费率的终局.

这也是我们在 [Rollup 文章](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)中得出的结论.

### b) Optimistic Rollup 与 zk Rollup

在长远的角度和实际的理论性能上限下, zk Rollup 相比 OP Rollup [更具有可拓展性](https://mp.weixin.qq.com/s/nGwUfCh6c3qMVcnLAQc-8A), [安全假设更加强](https://vitalik.ca/general/2020/08/20/trust.html).

![](/img/hermez/rollup.png)

Optimistic Rollup 所带有的挑战期让一个 tx 被真正 finalized 的时间特别长, 而 zk Rollup 的证明一经生成与验证, 则可以直接让 tx 完全 finalized.

Rollup 的 OP 就像 Layer 1 的 PoW 与最长链原则, zk 像 PoS 与其相关共识. 对于 Layer 1 来说, PoW 与 PoS 的机制都是可以的, 但追求性能的 Rollup 在终局中更需要更强保证 (通过质押或者密码学) 的 zk 机制来实现.

这也是我们在[模块化区块链文章](https://mp.weixin.qq.com/s/nGwUfCh6c3qMVcnLAQc-8A)中得出的结论.

### c) zk Rollup 与 zkEVM Rollup

既然 zk Rollup, 那么为什么现在火热的都是 Optimistic Rollup 呢?

因为目前运行的 zk Rollup 并没有通用计算能力, 如 Loopring 等, 仅仅是停留在单一操作的阶段, 开发者无法部署与移植智能合约到 Rollup 中.

zk 证明主要用于证明操作的正确性, 一个 zkEVM Rollup 的出现能培养像 Optimistic Rollup 一样的智能合约生态, 远远比普通的 zk Rollup 转账扩容网络灵活, 同时会比 Optimistic Rollup 更具有安全性, 用户体验更好.

## 3. zkEVM Rollup 的用户体验

### a) 天时地利人和

zkEVM Rollup 的出现是天时地利人和:

- 天时: Layer 1 扩容遭遇瓶颈, Optimistic Rollup 已探索了 Rollup 的道路.
- 地利: 以太坊所提供的安全性与社会共识为 zkEVM Rollup 的建立提供了完美土壤.
- 人和: EVM 生态占据区块链开发的主导地位, 无数 zk 开发团队为 zkEVM 方案贡献着力量.

那么 zkEVM Rollup 对于用户来说到底什么体验上的提升呢?

首先我们需要定义一下用户, 我认为, 用户包含了开发者和普通用户:

### b) 开发者的用户体验

- zkEVM ⇒ 不用学习新语言甚至不用写新合约来开发 DApp: Solidity 作为区块链合约世界的第一语言, 有着无数的资源和生态, 且是最适合区块链场景的语言, 这两个优点结合起来, 远远优于 Move 或 Rust 等.
- Rollup ⇒ 解锁更多的应用场景: 用以太坊主网来做支付或者游戏等应用由于性能和开销问题, 是不太合适的. zkEVM Rollup 能让更多的 App 以 DApp 的形态实现.

### c) 用户的用户体验

- zk ⇒ 比 PoS 网络更强的安全性和比 OP Rollup 更快的 finality: 一些 PoS 网络靠代币质押来保证安全性, 而它们的资金量较小, 所创造的安全性保证是不强的, zk 的密码学通过数学来保证绝对的安全性. OP Rollup 的挑战期让一个 tx 在一定时间内无法被确认, 而 zk Rollup 对 tx 的证明一经生成则确认了 tx.
- EVM ⇒ 完全一致的使用流程和基础设施: 除了需要在钱包和应用内切换网络以外, 用户所有的使用流程都会与在主网上一模一样, 无需额外的学习成本, 只需要像之前一样使用应用.
- Rollup ⇒  OP 和 zk Rollup 都可以提供 L2 的 instant finality: 从用户体验上来说, 基本还没反应过来, 交易就已经被执行完成. 因此用户无需再等待十几秒或者十几分钟的时间来继续发送下一个交易. 在应用使用上, 用户就可以更加无负担地进行链上活动, 进行高频的交易或者链上游戏等.

### d) Polygon zkEVM Rollup 用户体验

在未来, 用户与开发者在 zkEVM Rollup 上的体验会无限接近于以太坊主网, 同时体验会在低 gas 与快速确认的优势下更加地迅捷和流畅.

![](/img/hermez/gas.png)

Polygon zkEVM Rollup 的计划中, [ETH 始终会作为 Rollup 的 gas fee 计价单位, 而 MATIC 会作为质押所需要的代币](https://twitter.com/sandeepnailwal/status/1550009537406574593), 这是非常优秀的一个决策:

- 更好的价值捕获: Polygon 在运营 PoS 网络的经验中得出的结论是质押所带来的价值捕获优于直接使用代币作为 gas.
- 更好的使用体验: ETH 作为 Rollup 代币, 能让 L1 的用户或者跨链桥项目免于过程中额外的 Swap 步骤 (大部分人会直接跨 ETH). 同时 ETH 作为 gas 也更具有正统性.
- 更显著的差异化: Polygon zkEVM Rollup 会与 Polygon PoS 有更明显的差异, 同时机制的不同确实也需要这样的差异, 来让用户选择更适合自己的方案.

同时, Polygon 所为 zkEVM Rollup 带来的还有:

- 熟悉的 “环境”: 用户不用关心底层的技术改变, 一切都会和 Polygon PoS 非常相似, 只是各方面来说 zkEVM Rollup 会更快, 更安全, 更好用. 开发者也可以参加着熟悉的黑客松, 享受着 Polygon 所积累的丰富开发生态与社群.

## 4. zkEVM Rollup 的未来

对于 zkEVM Rollup 方案的未来, 我们会分析技术上的未来, 以及这个方案的终局形态到底是什么.

### a) zkEVM 技术

Vitalik 对这个话题有着非常深刻的见解. 在他所概括的四种 zkEVM 分类中, 没有真正的好与坏的方案, 只是有不同的技术上的取舍: 更贴近底层但更慢, 更缺少兼容性但更快.

长远来看, zkEVM 的工程化落地和优化只是时间上的问题. 所有方案都有着自己的价值. Vitalik 也说这些不同方案或许在时间的推移中慢慢转型, 直到找到适合自己定位的哪一种.

最好的未来, 就是我们拥有非常多个不同风味的 zkEVM, 从而开发者可以选择自己喜欢的那一种, 以太坊主网也可以去通过他们的创新来做自我提升. 越多创新就是越好的未来.

### b) Rollup 技术

Rollup 技术的终局会是 zkEVM Rollup, 而 Optimistic Rollup 会继续有着自己的一席之地, 甚至会有 zkEVM 与 Optimistic 混合的 Rollup (个人认为一种机制其实足矣).

zkEVM Rollup 在很多方面都比 Optimistic Rollup 好. 但是 Optimistic Rollup 最大的好处就是建立起来更简单, Optimism Bedrock 和 Geth 只有五百行代码的区别, 任何了解 Geth 的工程师都可以很轻松的搭建一条 Optimistic Rollup, 或者未来在 Celestia 上使用 Optimint 等引擎, OP Rollup 这方面的道路已经被全面探索过. 而 zkEVM Rollup 复杂度更高, 学习门槛更高, 还没有真正完全落地的经验与方案.

### c) 技术…不是最重要的

聊了很多的技术, 但是技术肯定不是最重要的. zkEVM Rollup, Rollup, 以太坊, 乃至区块链的瓶颈从来不是工程落地或者 DA 或者共识上的技术瓶颈, 而是用户.

举个 Web2 的例子 (感谢 Nelson): 苹果的 App Store. 所有的开发者都会优先考虑在 App Store 上发布应用, 但是 App Store 的审核非常不稳定, 经常会随机拒绝应用的上传. 相比之下, 安卓的应用市场, 或者亚马逊的应用市场审核就友好很多. 但是为啥大家都想发布到 App Store 呢? 因为 App Store 有成熟且稳定的用户群体! 无论安卓或者亚马逊应用市场的开发者体验做得再天花乱坠, 开发者都还是会涌向有着用户的平台.

软件开发的目标不是优雅的 API, 100% 的 Test Coverage, 最好的编程语言, 而是: 解决更多的问题和提供更多的价值. 这就意味着需要面向更多的用户.

### d) 终局形态

那么在我们的想象中, 一个真正终局的 zkEVM Rollup 会是怎么样的呢?

1. 终局的基础: 技术
    - zkEVM 层面: 所有的方案只要能落地都是好的, 但不必过于原教旨主义. 以太坊的 EVM 是一个非常 Legacy 的陈旧系统 (当然依旧是顶尖的方案), 尽管去对 zkEVM 进行更多的改善和创新. 除此之外 zkEVM 需要更多的优化, 减小 [proving overhead](https://twitter.com/sgoldfed/status/1551607983167229954) 来赶上 Optimistic 方案.
    - Rollup 层面: 保证优先满足区块链的核心价值 (去中心化, 安全性), 而不是一味对 TPS 进行军备竞赛.
2. 终局的核心: Social Consensus
    - 生态层面: 最理想的情况下就是所有以太坊主网的应用都迁移到某个 Rollup 上. 如果这个 zkEVM Rollup 本身就具有良好的生态基础, 那么在启动上就会拉开其他方案非常多. 在这个方面, 不得不说, Polygon 有着巨大的优势.
    - 开发者层面: EVM 兼容性不是决定性因素, 而是哪个 zkEVM Rollup 能最快地接触到开发者, 让开发者使用它作为网络来进行开发. 从来不是网络去顺应开发者, 而是开发者去挑一个整体最快或者最好的网络, 然后去慢慢适应这个网络的开发.
    - 用户层面: 用户的心智与社会共识非常重要. 除了 Reach 开发者, 谁最先最有效的 Reach 到用户也是最重要的因素. 一个成功的网络不应该成为技术宅对技术方案优越性的自嗨, 而是真正地为用户解决问题, 创造价值.

zkEVM Rollup 都有光明的未来.

## Related Links

[https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)

[https://mp.weixin.qq.com/s/808jMXvIUqB973aVHrAzGQ](https://mp.weixin.qq.com/s/808jMXvIUqB973aVHrAzGQ)

[https://mp.weixin.qq.com/s/sl3JewEsVNZ7bhSAgd8z1g](https://mp.weixin.qq.com/s/sl3JewEsVNZ7bhSAgd8z1g)

[https://blog.polygon.technology/the-future-is-now-for-ethereum-scaling-introducing-polygon-zkevm/](https://blog.polygon.technology/the-future-is-now-for-ethereum-scaling-introducing-polygon-zkevm/)

[https://www.youtube.com/watch?v=sokVnpaqIEc](https://www.youtube.com/watch?v=sokVnpaqIEc)

0a:

[https://medium.com/@foresightventures-zh/foresight-ventures-解读-zk-zkvm-zkevm-及其未来-6643262505b2](https://medium.com/@foresightventures-zh/foresight-ventures-%E8%A7%A3%E8%AF%BB-zk-zkvm-zkevm-%E5%8F%8A%E5%85%B6%E6%9C%AA%E6%9D%A5-6643262505b2)

[https://twitter.com/toghrulmaharram/status/1518270138876891138](https://twitter.com/toghrulmaharram/status/1518270138876891138)

[https://docs.google.com/presentation/d/1XB96F9ahIlGUevpOTdi-yx_gkrwmX4WGcCjwf3gEiYc/edit#slide=id.g13232b2e9d8_0_401](https://docs.google.com/presentation/d/1XB96F9ahIlGUevpOTdi-yx_gkrwmX4WGcCjwf3gEiYc/edit#slide=id.g13232b2e9d8_0_401)

[https://www.cryptologie.net/article/564/what-are-zkvms-and-whats-the-difference-with-a-zkevm/](https://www.cryptologie.net/article/564/what-are-zkvms-and-whats-the-difference-with-a-zkevm/)

0b:

[https://appliedzkp.org](https://appliedzkp.org/)

[https://twitter.com/0xShitTrader/status/1549816145053728769](https://twitter.com/0xShitTrader/status/1549816145053728769)

[https://twitter.com/yezhang1998/status/1549771898393100288](https://twitter.com/yezhang1998/status/1549771898393100288)

0c:

[https://vitalik.eth.limo/general/2022/08/04/zkevm.html](https://vitalik.eth.limo/general/2022/08/04/zkevm.html)

[https://medium.com/@foresightventures-zh/foresight-ventures-解读-zk-zkvm-zkevm-及其未来-6643262505b2](https://medium.com/@foresightventures-zh/foresight-ventures-%E8%A7%A3%E8%AF%BB-zk-zkvm-zkevm-%E5%8F%8A%E5%85%B6%E6%9C%AA%E6%9D%A5-6643262505b2)

[https://twitter.com/aliatiia_/status/1422655305540902913](https://twitter.com/aliatiia_/status/1422655305540902913)

[https://twitter.com/toghrulmaharram/status/1550065886064779265](https://twitter.com/toghrulmaharram/status/1550065886064779265)

[https://twitter.com/aliatiia_/status/1498647477754474502](https://twitter.com/aliatiia_/status/1498647477754474502)

[https://twitter.com/LuozhuZhang/status/1538166119785111552](https://twitter.com/LuozhuZhang/status/1538166119785111552)

[https://twitter.com/aliatiia_/status/1422655305540902913](https://twitter.com/aliatiia_/status/1422655305540902913)

[https://twitter.com/aliatiia_/status/1549999424650215430](https://twitter.com/aliatiia_/status/1549999424650215430)

[https://twitter.com/cronokirby/status/1550750051873562624](https://twitter.com/cronokirby/status/1550750051873562624)

[https://twitter.com/henrlihenrli/status/1559173089971146753](https://twitter.com/henrlihenrli/status/1559173089971146753)

[https://twitter.com/henrlihenrli/status/1559173135789830144](https://twitter.com/henrlihenrli/status/1559173135789830144)

1:

[https://github.com/0xPolygonHermez/zkevm-doc/blob/main/mkdocs/docs/zkEVM/Polygon-zkEVM-Archtectural-Overview.md](https://github.com/0xPolygonHermez/zkevm-doc/blob/main/mkdocs/docs/zkEVM/Polygon-zkEVM-Archtectural-Overview.md)

[https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/](https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/)

[https://www.youtube.com/watch?v=T2fH1NlHnAc](https://www.youtube.com/watch?v=T2fH1NlHnAc)

1b:

[https://twitter.com/0xDinoEggs/status/1544868275829571584](https://twitter.com/0xDinoEggs/status/1544868275829571584)

1c:

[https://twitter.com/Ingo_zk/status/1550121968904507393](https://twitter.com/Ingo_zk/status/1550121968904507393)

[https://blog.polygon.technology/introducing-plonky2/](https://blog.polygon.technology/introducing-plonky2/)

[https://twitter.com/_bfarmer/status/1549807101010010115](https://twitter.com/_bfarmer/status/1549807101010010115)

[https://twitter.com/toghrulmaharram/status/1549863723556282370](https://twitter.com/toghrulmaharram/status/1549863723556282370)

[https://twitter.com/dlubarov/status/1550491404345950216](https://twitter.com/dlubarov/status/1550491404345950216)

[https://twitter.com/yezhang1998/status/1549808592936906752](https://twitter.com/yezhang1998/status/1549808592936906752)

[https://twitter.com/dlubarov/status/1550506366527086594](https://twitter.com/dlubarov/status/1550506366527086594)

[https://twitter.com/dlubarov/status/1550491438470668290](https://twitter.com/dlubarov/status/1550491438470668290)

[https://twitter.com/toghrulmaharram/status/1550065886064779265](https://twitter.com/toghrulmaharram/status/1550065886064779265)

[https://twitter.com/aliatiia_/status/1549999427791765504](https://twitter.com/aliatiia_/status/1549999427791765504)

[https://twitter.com/mt_1466/status/1550490476201082880](https://twitter.com/mt_1466/status/1550490476201082880)

[https://youtu.be/T2fH1NlHnAc?t=516](https://youtu.be/T2fH1NlHnAc?t=516)

2a:

[https://mp.weixin.qq.com/s/Yd-umFnjhXyB7crei2lynA](https://mp.weixin.qq.com/s/Yd-umFnjhXyB7crei2lynA)

[https://twitter.com/0xmisaka/status/1511370037306834954](https://twitter.com/0xmisaka/status/1511370037306834954)

[https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)

2b:

[https://mp.weixin.qq.com/s/nGwUfCh6c3qMVcnLAQc-8A](https://mp.weixin.qq.com/s/nGwUfCh6c3qMVcnLAQc-8A)

[https://vitalik.ca/general/2020/08/20/trust.html](https://vitalik.ca/general/2020/08/20/trust.html)

3d:

[https://twitter.com/sandeepnailwal/status/1550009537406574593](https://twitter.com/sandeepnailwal/status/1550009537406574593)

[https://twitter.com/sreeramkannan/status/1551439980991377410](https://twitter.com/sreeramkannan/status/1551439980991377410)

4a:

[https://vitalik.eth.limo/general/2022/08/04/zkevm.html](https://vitalik.eth.limo/general/2022/08/04/zkevm.html)

4b:

[https://twitter.com/VitalikButerin/status/1553342590786813952](https://twitter.com/VitalikButerin/status/1553342590786813952)

4c:

[https://thorstenball.com/blog/2022/05/17/professional-programming-the-first-10-years/](https://thorstenball.com/blog/2022/05/17/professional-programming-the-first-10-years/)

4d:

[https://twitter.com/itamarl/status/1552616078068838401](https://twitter.com/itamarl/status/1552616078068838401)

[https://twitter.com/sgoldfed/status/1551607983167229954](https://twitter.com/sgoldfed/status/1551607983167229954)

[https://twitter.com/EdFelten/status/1555163841469841411](https://twitter.com/EdFelten/status/1555163841469841411)

[https://twitter.com/MihailoBjelic/status/1554994843851554816](https://twitter.com/MihailoBjelic/status/1554994843851554816)

[https://twitter.com/pseudotheos/status/1554937456050544641](https://twitter.com/pseudotheos/status/1554937456050544641)

Others:

[https://ethresear.ch/t/nearly-zero-cost-attack-scenario-on-optimistic-rollup/6336/3](https://ethresear.ch/t/nearly-zero-cost-attack-scenario-on-optimistic-rollup/6336/3)

[https://ethresear.ch/t/a-pre-consensus-mechanism-to-secure-instant-finality-and-long-interval-in-zkrollup/8749](https://ethresear.ch/t/a-pre-consensus-mechanism-to-secure-instant-finality-and-long-interval-in-zkrollup/8749)

[https://twitter.com/yezhang1998/status/1553785807521325057](https://twitter.com/yezhang1998/status/1553785807521325057)

[https://twitter.com/kelvinfichter/status/1553323160564404225](https://twitter.com/kelvinfichter/status/1553323160564404225)

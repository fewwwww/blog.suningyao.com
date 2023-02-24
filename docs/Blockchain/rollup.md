# 📜 读懂Rollup: 爱恨好与坏

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-almost-everything-about-rollup-95319ef0675e).

这篇文章着眼于以太坊的 Layer2 Rollup 宇宙 (仅包括 Secured rollup), 会从简单易懂的核心概念与机制设计出发, 探讨目前 Rollup 的好与坏, 畅想它们未来在去中心化, 进一步扩容, 可组合性, 以及隐私等附加功能上的潜在路线与方案各自的优劣.

一个 Secured Rollup 就是像 Arbitrum 或 Optimism 这样模式, 结算, 共识, 数据可用性均依赖以太坊等 L1, 自己仅负责执行的 Rollup.

**如果 Rollup 中结算, 共识, 数据可用性使用了除 L1 以外的方案, 那么它就不是一个纯粹的 Secured Rollup, 也就不是狭义的 Rollup.**

![](/img/rollup/rollup-architecture.jpeg)

## 0. Rollup 的本质与原理

### a) Rollup 的本质

**给区块链扩容有两种方式: 一种是优化区块链本身, 另一种是以更好的方式使用区块链.**

Rollup 就是第二种, 它真正的本质很简单, 是更快更便宜且 “可信” 地使用区块链, 来扩容区块链 (基本特指以太坊).

![](/img/rollup/rollups.png)

**Rollup 是: 链上的智能合约 + 链下的聚合器.**

就这么简单. 而这两个特性结合起来就定义了 Rollup 也丰满了它的概念.

- **链上智能合约**, 表示了它的[信任模型](https://mirror.xyz/0xaFaBa30769374EA0F971300dE79c62Bf94B464d5/k8Fr68ELdjIwJpGPpag_dnUarnypD5IUahpp6wT0qmk)就是以太坊上的一个智能合约, [借用了以太坊的安全性](https://twitter.com/bkiepuszewski/status/1532617975433502721?s=21&t=QYKPEaEdbn-_cSS6N4vcXQ), 而不是像 Alt L1 一样需要建立新的信任共识. 我们可以像信任 Uniswap 的协议 (核心是智能合约) 一样信任 Arbitrum 的协议.
- **链下聚合器**, 表示它会链下执行并聚合交易, 将大批量的交易压缩, 最终放上以太坊主网, 达成更快更便宜的目的.

以太坊的原理是, 每个节点都存储且执行用户提交给它的每笔交易, 所以这么一个去中心化网络非常昂贵.

后文是以 Aribitrum 和 Optimism 为代表的 Optimistic Rollup, 与以 zkSync 和 StarkNet 为代表的 zk Rollup 两大 Rollup 的机制原理, 可供读者简单理解.

### b) Optimistic Rollup 的原理

**Optimistic Rollup 顾名思义是乐观的, 采用的类似是无罪推定, 大家会默认相信每个执行是正确的, 通过每个批次状态可被通过欺诈证明挑战而保证安全性.**

![](/img/rollup/ovm.png)

用户在 Arbitrum 提交交易, Arbitrum 的 sequencer 对交易进行执行, 分批次将状态根与交易数据完整提交到以太坊主网上的智能合约中.

![](/img/rollup/arbitrum.jpeg)

**Optimistic Rollup 执行产生错误了怎么办?**

- **Optimistic Rollup 有一个争议验证周期**, 也就是说上了链之后的数据还要过比如一周的时间才会真正地被敲定 Finalized, 期间任何人都可以对它进行挑战, 证明批次不正确.

### c) zk Rollup 的原理

**zk Rollup 顾名思义是用了 zk 零知识证明技术 (实际上是 Validity Proof), 采用的类似是有罪推定, 大家会默认质疑每个执行都是错误的, 通过每个批次所包含的证明保证安全性.**

![](/img/rollup/eth.png)

用户在 zkSync 提交交易, zkSync 的 sequencer 对交易进行执行和存储, 分批次将状态证明和新状态完整提交到以太坊主网上的智能合约中.

![](/img/rollup/zk-architecture.png)

**zk 如何证明自己的执行不是错误的?**

- **Prover (大多数情况下就是 sequencer) 会对交易的执行生成无法伪造的证明, 证明这些新的状态和执行是正确的.** Sequencer 会把证明等数据压缩后提交到以太坊主网中的智能合约进行验证.

**它们如何压缩数据, 从而减少 gas fee?**

- **Rollup 可以在每个交易的字节数上进行压缩**, 包括 Nonce 和签名等. **对于 zk Rollup 来说, 它可以进一步压缩, 不用将与状态更新无关的数据上链**, 因为 zk 证明已经可以证明状态更新的正确性, 而 Optimistic Rollup 却由于需要能够被挑战, 因此没法忽略这部分数据.

> 2023-02-24 Update: 单纯为了有效性, 也不一定 zk 就一定是发布状态更新, 可以看下 [Can someone simply explain the tradeoffs involved in ZK rollups publishing tx calldata vs. state diffs? Is one strictly better?](https://twitter.com/0xdinoeggs/status/1625124239249383430). 当然为了下面提到的数据可用性概念, 还是要发布 tx calldata 的.

**它们俩为什么都要完整状态?**

- **因为为了防止 sequencer 跑路**, 我们可以通过以太坊上的数据来重建整个 Layer2. 这就是数据可用性的概念.

### d) 两种 Rollup 的区别

如果实在还是理解不了, 可以查看下面的图解.

![](/img/rollup/layer2-architecture.png)

Optimistic Rollup 的设计更像是 Arweave, 通过经济学和博弈来设计机制, 性能好但其实无法保证 100% 的正确.

zk Rollup 的设计则更像是 Filecoin, 通过密码学和数学来设计机制, 可以保证 100% 的正确但永远会有额外的计算和时间开销.

它们的区别就是**一个用了挑战期来保证发生错误可以被纠正, 一个用了密码学来保证错误不可能发生.**

我们在后文会通过两者的终局表现来详细对比它们.

## 1. Rollup 很优秀

首先我们来盘点一下 Rollup 网络整体的优秀之处:

- 生态: Arbitrum 跑出了 NFT 和元宇宙生态; Optimism 发了币, 有了治理和社区; StarkNet 酝酿着各种 GameFi 的创新; zkSync 有不少 DeFi 的新项目. 每个 Rollup 单拿出来都自成一派.
- 扩容: TPS 确实优异, 虽然没有理论峰值那么高, 但是 L2 的快速确认提供了一个快速且便宜的 Web3 体验.
- 体验: 对开发者和用户来说, 切换到 Rollup 上都是一件简单的事, 且体验与以太坊几乎无异. 各种跨链桥, 钱包, Uniswap 等基础设施也为用户的流畅体验服务. 这个也是良好的生态所撑起的.
- 创新: Rollup 已然是以太坊应用创新的优秀土壤, 同时也比 Polygon 的 “大型测试网” 式网络更加具有想象力.

除此之外, 如果对子网与 Rollup 的对比感兴趣的话, 可以参考[我们之前的研究](https://mp.weixin.qq.com/s/liulfJo4vg5gI7DiaYDPXw), 以及 [Toghrui 的观点](https://twitter.com/toghrulmaharram/status/1531956445490601984).

![](/img/rollup/cult.jpeg)

更细化地来说, 各大 Optimistic Rollup 和 zk Rollup 分别给出了[如下的表现](https://www.alexbeckett.xyz/a-snapshot-of-the-current-rollup-ecosystem/):

- Arbitrum: TVL 在 24 亿美元左右. [Nitro](https://medium.com/offchainlabs/arbitrum-nitro-sneak-preview-44550d9054f5) 升级已经上线测试网, 之后会用 WASM-Geth 替代掉 Arbitrum 现有的 VM, 优化性能和适配性. (之后的文章我们可以详细聊聊 WASM 的各种潜力)
- Optimism: 发币了, 在此基础上做出了很多 “开创性且无比 Optimistic 的实验” (出各种岔子, 隐瞒着事实且无动于衷, 最近经常被失望的用户质疑为是 “以太坊基金会的废太子”). [Bedrock](https://dev.optimism.io/introducing-optimism-bedrock/) 升级会让 VM 变成 MIPS-Geth, 做到 EVM 等同性. Optimism 的开发人员也一直在说 [zkMIPS](https://twitter.com/kelvinfichter/status/1522389735897022464) 的概念, 不知道他们会不会在之后往这个方向努力呢?
- StarkNet: 目前跨链桥还没完全开放. 特制语言 Cairo 和 StarkNet 开发生态打造得不错, 游戏生态值得关注. StarkEx 的 Validium 模式也做出了 dYdX, ImmutableX 等应用. 而且 StarkNet 自己也可以做结算层, 搭建 L3.
- zkSync: 最早地做出了比较完善的 zkEVM. 2.0 版本的 Volition 模式可以让用户灵活选择 zkPorter 或以太坊的数据可用性方案.
- Aztec: UTXO 模型的隐私 zk Rollup, 即将支持隐私 DeFi 生态 (但由于交易数据大小[过大](https://twitter.com/aztecnetwork/status/1535024618561363968), 目前还需要额外优化). 尽管不支持通用计算, 但是是为数不多真正 zk 的 zk Rollup.
- Fuel: V1 是一个 Optimistic Rollup, 而且非常去中心化. V2 不走寻常路, 没有去适配 EVM, 而是通过一个 UTXO 模型的高性能 VM 来支持并行 tx 处理, 致力于打造最快的执行层.

除了以以太坊为主网的 Rollup 以外, 还有[这些](https://twitter.com/epolynya/status/1532560096433033216):

- everPay: Arweave 上基于 [SCP 范式](https://mp.weixin.qq.com/s/zBwkn8q_JRyKovUKijKLMQ)的 Layer2.
- Milkomeda: Algorand 上的 EVM Rollup.
- Orbis: Cardano 上的 Validium 模式的 Rollup.

Rollup 方案不同的设计有非常多的独到之处, 真正地服务了无数的用户, 带来了更好的 Crypto 与区块链体验.

## 2. Rollup 有待提高

上面一章的表扬后, 我们会在本节指出 Rollup 一些需要解决的问题:

### a) 中心化😱

**Rollup 网络丝滑的用户体验是通过对安全性的妥协而得到的**, 网络很多组成部分是中心化的, 虽然有以下三点可以对这个问题进行 “狡辩”:

1. zk Rollup 中 zk 证明从数学上无法伪造.
2. 用户可以通过 L1 的 DA 来重建所有状态.
3. 信任模型本身就是中心化的智能合约.

但是 Rollup 的中心化仍然会导致 censorship 与安全性极低等问题. 目前它的中心化主要体现在:

- **中心化 sequencer**: 大部分的 Optimistic Rollup 和 zk Rollup 的 sequencer 都是中心化的形式存在. 也就是类似 tx 的执行, 排序, 和出块都是靠一个中心化的服务器来支撑. 之前 Arbitrum 就因为 sequencer 的硬件问题所以整个网络[宕机](https://offchain.medium.com/todays-arbitrum-sequencer-downtime-what-happened-6382a3066fbc)了…
- **中心化升级**: 大多数 Rollup 网络的升级是中心化的, 意味着实际上去黑掉整个 Rollup 的成本与网络上十几亿的 TVL 相比简直渺小到可以忽略. 比如 zkSync 就是以一个 security council 来管理升级. 回想之前 Ronin 被黑事件, 让十几亿的资金依赖于这么几个人的多签, 绝对是不安全的.
    ![](/img/rollup/zksync.png)

- **闭源组件**: 部分 Rollup 的一些关键组件是闭源的. 比如 StarkNet 的几乎所有关键组件均未开源, 依然是中心化开发, 且没有开放的开源许可证. 这不那么 Web3.

在我的设想中, 作为一个网络或者协议, 最终必须是去中心化且开源的, 否则就违背了 Crypto 和 Web3 的精神.

### b) 真实性能😱

**Rollup 目前所展现出来的超高性能是 “假的”, 真实的 Finality 并没有那么优秀, 且性能依然有提高空间. 这是一把双刃剑.**

当用户在 L2 提交交易后, 马上会得到交易成功或者失败的反馈, 但是其实这个即时的用户体验仅是在 L2 上的 Finality.

在数据没有被提交到 L1 或 Prover 还在证明或仲裁窗口期的期间, 这些数据并未取得 L1 Finality. 所以 Rollup 的用户体验那么优秀, 其实是因为用户通过 Rollup 借用了一些时间, 让用户先拿到一个 soft confirmation.

由于以上的设计, 导致如下问题:

- **假的 Finality**: 数据上了以太坊等真实的区块链才是真正的 Finality, 那么 Rollup 的真实 Finality 是多快呢, 换句话说 (当然真的要计算 TPS 的话, 一批次数据所包含的 tx 个数也应该纳入考量), 它们每隔多长时间会提交数据上以太坊呢? 这里有一个[通过链上数据真实的分析](https://twitter.com/bkiepuszewski/status/1533347287400865792).

    ![](/img/rollup/finality.png)

- **吹过头的 TPS**: 我个人认为 TPS 是一个极其糟糕的指标, 现在应该被淘汰掉. 各种 Rollup 或者公链都通过无数的预设条件以及混淆的概念来计算出一个超高或者至少比竞争对手高的 TPS, 从而体现自己的强大. 但实际使用中, 它们的性能仍然没有那么 “Web3”. 我理想中真正的 Web3 体验需要是完全无感的, 同时整个网络也必须去中心化.

### c) 经济机制😱

![](/img/rollup/token.jpeg)

我们以 Optimism 的代币为例, 管中窥豹地来研究 Layer2 Rollup 的商业和经济机制, 代币模型, 与 MEV.

- **商业模式**: Rollup 的利润 = Layer2 费用 - Layer1 区块空间费用 (在 L1 上存储和验证证明等数据的安全成本) - 节点服务器等计算成本. 其中, Layer2 费用 = gas 费用 + MEV  + Layer2 收取的一些 premium. 但这个商业模式用户无法作为节点参与, 只有 Rollup 开发者能够赚取. 以下是 Arbitrum 与 Optimism 在 Layer2 费用与 Layer1 区块空间费用上的收益与成本.

  ![](/img/rollup/business-1.png)
  ![](/img/rollup/business-2.png)

- **代币机制**:  Optimism 的网络虽然不错, 但代币经济仍然较弱. OP 有以下三个比较致命的问题: 1. 没有任何 utility, 比如无法支付网络 gas 或 PoS 质押 (当然这两个并不是好的 Rollup utility), 仅用于治理. 2. 无法捕捉网络收益和区块空间的价值, sequencer 赚多少钱都与持币者无关. 3. 流通数量非常少, 抛压很大, 做市时的事故更是让这个情况雪上加霜. 这些问题不仅仅是 Optimism 的问题, 其他 Layer2 Rollup 也很有可能需要面临这些考验.
- **MEV**: 由于现在 Rollup 均是中心化 sequencer, 因此这些收益都可以被 sequencer 捕捉. MEV 是一个两面性的东西. 往好里看, Rollup 网络可以拥抱 MEV 对于网络的价值, 让其成为网络去中心化之后经济机制和矿工激励的重要组成部分; 往坏里想, Rollup 网络需要杜绝任何 MEV 的存在, 因为它经常被认为是对用户的一笔额外的税务. Arbitrum 选择 “忽视” MEV, 采取先到先得的机制, 但这对节点性能有更高要求, 且降低了 DDoS 的成本.

开放网络的商业模式, 改善代币机制, 处理 MEV 会是 Rollup 网络在发币与去中心化的必经之路上的三座大山.

## 3. Optimistic Rollup 与 zk Rollup 的终局性能对比

![](/img/rollup/hentai.jpeg)

我不太想和其他文章一样去对比 Optimistic 和 zk Rollup 两个阵营的 TPS 等[纸面性能](https://kelvinfichter.com/pages/thoughts/tps-is-dumb/) (如果好奇的话可以详细阅读文末更多参考资料), 而是会从它们的本质和特性, 以及长期终局表现来对比:

![](/img/rollup/op-zk.png)

对这张图的详细解读和值得关注的点如下:

1. EVM 等同性实现难度: 其实无论是从 EVM 兼容, 节点配置要求, 还是优化来说, zk Rollup 整体的实现难度都是比 Optimistic Rollup 要高的. 这其实也是额外证明开销的一种存在方式… 额外证明开销不仅让网络的性能永远有一个多出来的包袱, 同时对 EVM 兼容的技术实现上来说也是一个巨大阻碍.
2. 可以更方便地做隐私等需求: 既然已经使用 zk 了, 那么在做一个真正隐私的 zk-zk Rollup 的开发难度会比 zk-Op Rollup 简单很多. 当然也有 ZKOPRU 这样的 zk-Op Rollup 项目已经上线.
3. 优化方向: 对于 Optimistic Rollup 来说, 并行化的 tx 处理是很直接且很有效的一种优化, 而 zk Rollup 用同样的方案的话 (StarkNet [下个版本](https://medium.com/starkware/starknet-alpha-0-9-0-dce43cf13490)的 sequencer 可以并行了), 长远来看还是会输给 Optimistic Rollup (又是额外的证明开销的缘故), 因此 zk Rollup 会采取 Fractal L3 scaling 的替代方案, 也就是在 Rollup 上面继续搭 Rollup. 递归的超能力不仅可以让 L2 验证 L3 的证明是正确的, 同时也能让 L1 验证 L2 对 L3 的验证的正确与否.
4. 具体优化方向: 均是从路线图与预想的设计方案中得来, 目前并无实践. 个人认为需要很长的时间才能完成这些升级. 其中一些升级是有副作用的, 比如引入一种新机制就需要额外的信任假设.

虽然这张图得出了 Optimistic Rollup 的性能会在长远角度高于 zk Rollup 的结论, 但是由数学所保证的信任是更强的. **我认为 Rollup 性能的终局是 Optimistic, 但是真正总体的终局会是 zk.**

![](/img/rollup/zk-op.jpeg)

设计上很完美, 工程实现的难度依旧巨大, 上面的对比其实依然和 TPS 的对比一样, 比较纸上谈兵. 我们还是要从实际出发, 去从一个 Rollup 网络的安全性, 去中心化, 和实际的表现与生态来观察.

## 4. Rollup 的未来

对比了 Optimistic Rollup 与 zk Rollup, 我们其实也全面了解了它们未来对性能的优化方案. 那么在其他角度, Rollup 未来的发展会是怎么样呢?

### a) 去中心化

在去中心化角度, 我们聚焦了 sequencer 和合约升级的问题, **未来, 一个 Rollup 必须是去中心化的**, 那么就需要如下的去中心化设计:

- **去中心化 sequencer**: Optimistic Rollup 的 sequencer 的机制基本会是各种魔改的 PoS (leader election, MEV auction, rotation mechanism) ; 以及 zk Rollup 的类似 Hermez 的 Proof of Efficiency 或者 Proof of Validity Proof 或者 Tendermint PoS 这样的机制. 当然如果网络是一个 PoS 的机制, 那么其实就需要额外的资金成本.
- **去中心化合约升级**: 合约升级不应该由多签管理, 而是由去中心化的治理管理 (涉及代币) 或完全放弃合约升级权限 (如 Uniswap V2 升级 V3 这种非强制性的升级).
- **多语言客户端**: 像以太坊一样, 多语言的客户端也是去中心化中的必要条件, 能保证网络的 100% uptime.

    ![](/img/rollup/multi-client.png)


这里补充一个小的资料, 通过对 Arbiturm 和 Optimism 文档的对比, 可以体会出它们对[去中心化略有不同的态度](https://twitter.com/ChainLinkGod/status/1533618278538457088).

### b) 可组合性

Rollup 的可组合性就是不同 Rollup 上的智能合约直接互相读写的能力.

对于以太坊上的 Rollup 来说, 其实**以太坊作为 settlement layer 是 Rollup 们的共享桥梁**. 未来 Rollup 间的可组合性很可能大多是通过 L2 ⇒ L1 ⇒ L2 这样来形成一个调用 (比如 StarkNet 设计的 [dAMM](https://medium.com/starkware/damm-decentralized-amm-59b329fb4cc3)).

![](/img/rollup/damm.png)

而真正的可组合性却由于 Rollup 间机制不同, 无法互相验证的问题而难以被实现, 需要更多探索.

### c) 功能

对于功能上的拓展, zk Rollup 更加有潜力. **L3 的概念让 App-specific Rollup 特别有吸引力**, Immutable X 也已经宣布自己会在 StarkNet 上额外进行协议部署, 让其能作为一个 L3 存在.

L3 的吸引力在于:

- **让应用蜕变为一个协议, 开放自己的接口与服务, 实现更大的可组合性**
- **L1 作为时针, L2 作为分针, L3 作为秒针. 在不影响 L1 脉搏的情况下进一步提升网络整体性能.**

我预想中 L3 最有趣的功能会是:

- 隐私 L3
- 纯支付 L3
- NFT 市场 L3
- 游戏引擎 L3
- DEX 与 DeFi L3

但 L3 的挑战是 DA 到底如何处理. 我们可能会采用以下几种不同的模式:

- Secured Rollup: 依然算 Rollup, 像 L2 一样将 DA 放上 L1, 但可能涉及到更复杂的退出机制.
- Validium/Optimistic Chain: 放上 L2 或 Celestia 等额外 DA 层, 需要额外信任假设.

## 5. 总结

以上就是我们对 Rollup 所需要的理解.

除此之外, Rollup 创造了无数的新话题: L3, 模块化区块链, 数据可用性方案, 账户抽象所带来的 UX 提升, 新的技术栈, 新的编程语言, 新的开发者, 新的审计机构…

Rollup 的一切都那么崭新, 那么光鲜, 但又那么稚嫩…

**如何去像 Rollup 这样, 更好地 “使用” 区块链, 是一个值得探索的问题.**

## 相关资料:

[https://twitter.com/sanjaypshah/status/1532396051075719170](https://twitter.com/sanjaypshah/status/1532396051075719170)

0a:

[https://vitalik.ca/general/2021/01/05/rollup.html](https://vitalik.ca/general/2021/01/05/rollup.html)

[https://twitter.com/bkiepuszewski/status/1532617975433502721](https://twitter.com/bkiepuszewski/status/1532617975433502721)

[https://mirror.xyz/0xaFaBa30769374EA0F971300dE79c62Bf94B464d5/k8Fr68ELdjIwJpGPpag_dnUarnypD5IUahpp6wT0qmk](https://mirror.xyz/0xaFaBa30769374EA0F971300dE79c62Bf94B464d5/k8Fr68ELdjIwJpGPpag_dnUarnypD5IUahpp6wT0qmk)

0b:

[https://www.paradigm.xyz/2021/01/how-does-optimisms-rollup-really-work](https://www.paradigm.xyz/2021/01/how-does-optimisms-rollup-really-work)

[https://www.paradigm.xyz/2021/01/almost-everything-you-need-to-know-about-optimistic-rollup](https://www.paradigm.xyz/2021/01/almost-everything-you-need-to-know-about-optimistic-rollup)

0c:

[https://blog.matter-labs.io/introducing-zk-sync-the-missing-link-to-mass-adoption-of-ethereum-14c9cea83f58](https://blog.matter-labs.io/introducing-zk-sync-the-missing-link-to-mass-adoption-of-ethereum-14c9cea83f58)

[https://www.reddit.com/r/ethereum/comments/ty4myx/how_does_zkrollup_validation_work/](https://www.reddit.com/r/ethereum/comments/ty4myx/how_does_zkrollup_validation_work/)

0d:

[https://starli.medium.com/l2-deep-dive-into-ovm-e2229052ed00](https://starli.medium.com/l2-deep-dive-into-ovm-e2229052ed00)

[https://starli.medium.com/l2-my-summary-1883a6f1368e](https://starli.medium.com/l2-my-summary-1883a6f1368e)

1:

[https://twitter.com/toghrulmaharram/status/1531956445490601984](https://twitter.com/toghrulmaharram/status/1531956445490601984)

[https://www.alexbeckett.xyz/a-snapshot-of-the-current-rollup-ecosystem/](https://www.alexbeckett.xyz/a-snapshot-of-the-current-rollup-ecosystem/)

[https://twitter.com/epolynya/status/1532560096433033216](https://twitter.com/epolynya/status/1532560096433033216)

2:

[https://offchain.medium.com/todays-arbitrum-sequencer-downtime-what-happened-6382a3066fbc](https://offchain.medium.com/todays-arbitrum-sequencer-downtime-what-happened-6382a3066fbc)

[https://twitter.com/mt_1466/status/1491403782290558977](https://twitter.com/mt_1466/status/1491403782290558977)

[https://kelvinfichter.com/pages/thoughts/tps-is-dumb/](https://kelvinfichter.com/pages/thoughts/tps-is-dumb/)

[https://twitter.com/bkiepuszewski/status/1533347316702257153](https://twitter.com/bkiepuszewski/status/1533347316702257153)

[https://twitter.com/bkiepuszewski/status/1533347287400865792](https://twitter.com/bkiepuszewski/status/1533347287400865792)

[https://newsletter.banklesshq.com/p/the-layer-2-token-endgame?s=r](https://newsletter.banklesshq.com/p/the-layer-2-token-endgame?s=r)

[https://fuel-labs.ghost.io/token-model-layer-2-block-production/](https://fuel-labs.ghost.io/token-model-layer-2-block-production/)

[https://twitter.com/norswap/status/1536071589241946112](https://twitter.com/norswap/status/1536071589241946112)

3:

[https://medium.com/starkware/starknet-alpha-0-9-0-dce43cf13490](https://medium.com/starkware/starknet-alpha-0-9-0-dce43cf13490)

[https://medium.com/offchainlabs/optimistic-rollups-the-present-and-future-of-ethereum-scaling-60fb9067ae87](https://medium.com/offchainlabs/optimistic-rollups-the-present-and-future-of-ethereum-scaling-60fb9067ae87)

[https://www.alexbeckett.xyz/the-benefits-of-optimistic-rollups-compared-to-zk-rollups/](https://www.alexbeckett.xyz/the-benefits-of-optimistic-rollups-compared-to-zk-rollups/)

[https://twitter.com/nickels_eth/status/1529947990403825676](https://twitter.com/nickels_eth/status/1529947990403825676)

[https://blog.matter-labs.io/evaluating-ethereum-l2-scaling-solutions-a-comparison-framework-b6b2f410f955](https://blog.matter-labs.io/evaluating-ethereum-l2-scaling-solutions-a-comparison-framework-b6b2f410f955)

3graph:

[https://twitter.com/sreeramkannan/status/1530778827466502144](https://twitter.com/sreeramkannan/status/1530778827466502144)

[https://twitter.com/sreeramkannan/status/1530790559064829955](https://twitter.com/sreeramkannan/status/1530790559064829955)

[https://twitter.com/sreeramkannan/status/1530773769379205120](https://twitter.com/sreeramkannan/status/1530773769379205120)

[https://twitter.com/sreeramkannan/status/1530793792361537536](https://twitter.com/sreeramkannan/status/1530793792361537536)

[https://www.alexbeckett.xyz/the-path-toward-scaling-rollups/](https://www.alexbeckett.xyz/the-path-toward-scaling-rollups/)

[https://twitter.com/yezhang1998/status/1530892694066974720](https://twitter.com/yezhang1998/status/1530892694066974720)

[https://twitter.com/sreeramkannan/status/1530773572372791296](https://twitter.com/sreeramkannan/status/1530773572372791296)

[https://medium.com/privacy-scaling-explorations/zkopru-on-testnet-ba5b2d65ffa1](https://medium.com/privacy-scaling-explorations/zkopru-on-testnet-ba5b2d65ffa1)

[https://twitter.com/sreeramkannan/status/1530807626744750080](https://twitter.com/sreeramkannan/status/1530807626744750080)

[https://twitter.com/sreeramkannan/status/1530806237691990016](https://twitter.com/sreeramkannan/status/1530806237691990016)

[https://twitter.com/henrlihenrli/status/1531894565619343361](https://twitter.com/henrlihenrli/status/1531894565619343361)

[https://www.alexbeckett.xyz/the-path-toward-scaling-rollups/](https://www.alexbeckett.xyz/the-path-toward-scaling-rollups/)

[https://kelvinfichter.com/pages/thoughts/hybrid-rollups/](https://kelvinfichter.com/pages/thoughts/hybrid-rollups/)

4a:

[https://medium.com/ethereum-optimism/our-pragmatic-path-to-decentralization-cb5805ca43c1](https://medium.com/ethereum-optimism/our-pragmatic-path-to-decentralization-cb5805ca43c1)

[https://twitter.com/StarkNet_ZH/status/1514158529665396737](https://twitter.com/StarkNet_ZH/status/1514158529665396737)

[https://polynya.medium.com/brainstorming-sequencer-consensus-mechanisms-d7304bae4765](https://polynya.medium.com/brainstorming-sequencer-consensus-mechanisms-d7304bae4765)

[https://www.alexbeckett.xyz/decentralized-sequencers-where-do-we-go-next/](https://www.alexbeckett.xyz/decentralized-sequencers-where-do-we-go-next/)

[https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/](https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/)

[https://twitter.com/ChainLinkGod/status/1533618278538457088](https://twitter.com/ChainLinkGod/status/1533618278538457088)

[https://twitter.com/jon_charb/status/1519443321206226950](https://twitter.com/jon_charb/status/1519443321206226950)

[https://twitter.com/sui414/status/1532088483296120832](https://twitter.com/sui414/status/1532088483296120832)

[https://docs.hermez.io/zkEVM/overview/#what-is-polygon-hermez-20](https://docs.hermez.io/zkEVM/overview/#what-is-polygon-hermez-20)

[https://community.starknet.io/t/starknet-decentralization-tendermint-based-suggestion/998](https://community.starknet.io/t/starknet-decentralization-tendermint-based-suggestion/998)

[https://ethresear.ch/t/proof-of-efficiency-a-new-consensus-mechanism-for-zk-rollups/11988](https://ethresear.ch/t/proof-of-efficiency-a-new-consensus-mechanism-for-zk-rollups/11988)

[https://ethresear.ch/t/a-design-of-decentralized-zk-rollups-based-on-eip-4844/12434](https://ethresear.ch/t/a-design-of-decentralized-zk-rollups-based-on-eip-4844/12434)

4b:

[https://www.alexbeckett.xyz/composability-in-a-rollup-ecosystem/](https://www.alexbeckett.xyz/composability-in-a-rollup-ecosystem/)

[https://medium.com/starkware/damm-decentralized-amm-59b329fb4cc3](https://medium.com/starkware/damm-decentralized-amm-59b329fb4cc3)

4c:

[https://twitter.com/jon_charb/status/1519443321206226950](https://twitter.com/jon_charb/status/1519443321206226950)

[https://twitter.com/sui414/status/1532088483296120832](https://twitter.com/sui414/status/1532088483296120832)

[https://twitter.com/chrisyicheng/status/1535954524145299456](https://twitter.com/chrisyicheng/status/1535954524145299456)

[https://twitter.com/toghrulmaharram/status/1536043923931598850](https://twitter.com/toghrulmaharram/status/1536043923931598850)

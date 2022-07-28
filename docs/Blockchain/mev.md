# 🤖️ 读懂MEV: 描绘, 分类, 支配

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/Yd-umFnjhXyB7crei2lynA)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-mev-definition-difference-decrease-33923783c793).

## 0. MEV?

> Maximal extractable value (MEV) refers to the maximum value that can be extracted from block production in excess of the standard block reward and gas fees by including, excluding, and changing the order of transactions in a block.
>

### a) MEV 一直都在

**以太坊区块的交易排序自始至终就没有被确定的规则约束, 而是可以根据矿工的偏好来[自由修改](https://ethereum.stackexchange.com/questions/6107/what-is-the-default-ordering-of-transactions-during-mining).** Geth 客户端的[源码](https://github.com/ethereum/go-ethereum/blob/290e851f57f5d27a1d5f0f7ad784c836e017c337/miner/worker.go)中, 提供了三种示例:

- 第一种: 仅根据 Nonce 来排序
- 第二种: 根据 gas fee 和 Nonce 来排序 (默认选项)
- 第三种: 根据 owner 排序后, 根据 gas fee 和 Nonce 来排序

其实**排序完全是个开放题, 矿工可以自由进行调整, 从而捕捉更大的利润, 也就是我们讨论的主角, MEV.**

在 MEV 被称为 MEV 之前, 它的 Alpha 就早已被矿工持续挖掘. flashfish0x 讲述了一个 [MEV 的故事](https://twitter.com/flashfish0x/status/1516378083628093447).

在 2020 年 8 月之前, Compound 的喂价由特殊的预言机 tx 来更新, 于是会有矿工监控 Mempool, 寻找可以被清算的账户, 利用闪电贷等手段进行套利. 因只有套利 tx 正好在价格更新 tx 之后执行才能套利成功, 且普通矿工 (当时) 会随机排序相同 gas fee 的套利 tx, 所以套利者会以与预言机价格更新 tx 相同的 gas fee 来发送交易, 和其他套利者博取一个随机概率.

2020 年 8 月 11 日之后, Geth 发布了新版本, 预言机价格更新 tx 后到达网络的第一个 tx 将成功套利, 于是获得 tx 信息的速度也被计入了竞争的考量中.

好景不长, 2020 年 8 月 17 日, Compound 切换到了更去中心化的预言机. 于是 MEV 捕捉者们的竞赛变成了纯粹的 gas war. 他们尽量出到比其他人更高的价格 gas, 直到这个清算操作捕捉不到任何利润, 或者某个人胜出.

**区块链网络从一开始就是这么个暗流涌动的黑暗森林, 机器人在未知的环境里和看不见的对手争夺榨取潜在利润的机会.**

### b) MEV 无处不在

在正式解读 MEV 的定义之前, 我们可以看看关于 MEV 的一些数据, 这样就能直观地感受它的存在和影响.

![](/img/mev/dune.jpeg)

2022 年 5 月, **Uniswap 上超过一半的交易量是由 MEV 机器人贡献的**, 而只有少于 20% 的交易量是来自于 Uniswap 的前端页面.

![](/img/mev/dex-guru.jpeg)

[dex.guru](http://dex.guru) 的数据也显示, 以太坊上 AMM 的交易量很大一部分都是 MEV 机器人所贡献.

**MEV 机器人在区块链的黑暗森林里无处不在, 并且始终占据着主导地位.**

### c) MEV 供应链

那么一个 MEV 活动是如何[产生](https://twitter.com/thegostep/status/1521104235114508289)的呢?

![](/img/mev/supply-chain.png)

一个 tx 在危机四伏的区块链中的生命周期如下:

- 生: 普通用户根据意图进行应用交互, 钱包与应用将意图解释成 tx, 发送到公共 tx 池等系统等待处理.
- 老: MEV 搜索者 (可能会是矿工) 挑出所有有利可图的机会, 尝试通过发送交易或对交易刻意排序捕捉 MEV.
- 病: L1 的矿工 (大多数情况下不会是 MEV 搜索者) 或者 L2 的 Sequencer 聚合交易并出块.
- 死: 验证者 (目前还是矿工) 验证区块, 交易正式被确认.

**MEV 机器人根据它们 owner 的旨意进行着链上活动, 将 tx 包装好后送给不知情的矿工出块.** 从好的角度来看, 它们是保证市场稳定和 DApp 活跃度的重要角色; 从不好的角度来看, 它们以自己天生的优势 (可以监视整个 Mempool), 对 “普通用户” 进行着不平等的剥削.

### d) MEV 的具体定义

MEV 这个词有两个官方的解释, 它全称可以是:

- **Miner Extractable Value (矿工可提取价值)**
- **Maximum Extractable Value (最大提取价值)**

当我们把两个解释结合在一起, 会得到一个最容易理解的概念: **MEV 就是矿工可提取的最大价值, 是对于在一个区块特定位置插入 tx 的 incentive.**

个人认为, 更全面的 MEV 定义指的是矿工/Validator/机器人/预言机/除了普通用户之外的角色, 利用矿工的不对称信息, 可提取的最大价值. **非普通用户的角色 (懂代码, 懂网络机制, 懂使用 MEV), 通过自己的 “特权” 来额外提取价值, 从而获利, 其实都可以算是广义的 MEV**:

- 以出块的矿工为例: 它在看到 Mempool 中的交易后, 当轮到出块时 (非常小的概率), 完全可以对区块内的交易重新按自己的意愿进行排序 (而不是正常的 nonce 和 gas fee 排序), 并发送新的交易, 从而获取除了奖励以外更大的额外利润.

![](/img/mev/miner.png)

- 以懂使用 MEV 概念的用户为例: 使用 [Flashbots Protect](https://docs.flashbots.net/flashbots-protect/rpc/quick-start/) 作为 tx 池, 避免被 MEV 机器人割且 tx 可以得到[优先执行等优势](https://twitter.com/blockworksres/status/1532782392569606145); 通过 [flashside](https://twitter.com/_anishagnihotri/status/1520579207478267905) 或者前文中的 Compound 清算例子, 监视 Mempool 来对 NFT 和链上活动进行套利, 以恰到好处的 gas fee 来让不知情的矿工帮他们捕捉 MEV; 通过 [mint.fun](http://mint.fun) 监视 Mempool 来 mint 时下最新的 NFT 项目.
- 以最受剥削的普通用户为例: 早上起床抄底 ETH, 结果第一个 tx 因为 gas 不够, 超时失败了; 中午第二个 tx 好不容易成功但是被夹子割了; 晚上熬夜, 想 mint 个看中很久的 free mint NFT, 但交易刚发送出去就被其他人监视到了, 最终没 mint 到.

MEV 提取者的额外利润源自于区块内的其他交易 (几乎就是普通用户发出的), 且挤占了每个区块的一部分空间 (尽管 gas fee 缺乏弹性需求, 他们的交易通常是区块内首个, 不会直接影响用户 tx), 因此**大多数 MEV 通常被视为加在用户身上的隐性税收**.

## 1. MEV 交易的分类

以下是 0xminion 对 MEV 活动的[清晰图解](https://twitter.com/0xminion/status/1418059536712167432):

![](/img/mev/types.jpeg)

**以目的来分的话, MEV 操作可以被分为: 各种套利, 单纯抢先交易, 夹子攻击等.**

这些操作的大部分都会是套利操作, 基本都是机器人来发起, 这些机器人都为 gas 的优化做了非常多的功夫, 比如它们通常在钱包里会有无数个代币, 每个都只有一点点数量. 这主要是[利用了 EIP-2200](https://twitter.com/libevm/status/1474870665773682692), 当用户接收 ERC-20 代币时, 如果钱包内有这个代币, 则比没有省更多的 gas. 还有就是[让地址拥有更多的零](https://medium.com/coinmonks/on-efficient-ethereum-addresses-3fef0596e263). 当然以上的套利优化操作与 MEV 本身关系不大.

MEV 本身主要分为以下六种:

### a) Front Running

Front Running 是 MEV 机器人支付稍高的 gas fee 来抢先在 Mempool 的某交易前执行交易, 比如以更低的价格 Swap 代币.

![](/img/mev/front-running.png)

当这类 MEV 活动没有造成后续的 “伤亡” 时, 可以被算作中性 (不算良性因为主要还是插了队); 但很多时候通常会让后续的交易失败或者执行出更差的效果, 因此会被算作恶性.

目前有很多服务专注于提升这类 MEV 的捕捉, 比如 [bloXroute](https://rekt.news/return-to-the-dark-forest/) (类似于黑手党征收保护费后提供更快更隐私的 Mempool, 从而加快 tx 的确认效率以及对外部 Front Running 的防御).

[问题的核心](https://medium.com/offchainlabs/five-theses-about-transaction-ordering-mev-and-front-running-5ebf52bc0cbe)主要还是这类 MEV 很直接地体现出了 MEV 捕捉者和普通用户的信息不对等. 然而, 大家不可能彻底完全公开, 透明, 和统一地对交易排序的方式和算法达成共识.

### b) Back Running

Back Running 是机器人在一笔交易造成价格大幅错位之后尝试不同的套利, 清算, 或交易.

最典型的例子就是我们之前提到的清算套利操作, 这类 MEV 活动整体可以被认为是良性的, 能保证市场的稳定和持续运转.

![](/img/mev/back-running.png)

在 Cosmos 这种多链架构的网络上, 这类 MEV 活动[尤其做好](https://twitter.com/Thyborg_/status/1547898785933639684), 因为网络非常多, 需要这样的活动来让 DeFi 应用保证时刻运转和高效.

### c) Sandwich Attack

Sandwich Attack 是前两种攻击的结合, 对交易进行前后夹击. 通常被称为夹子. 例如 MEV 机器人在交易前放一个买单, 在交易后放一个卖单, 让用户的交易在更差的价格执行.

![](/img/mev/sandwich-attack.png)

这种攻击有时候可以[非常复杂同时伤害可能会非常大](https://twitter.com/bertcmiller/status/1527757146716348416), 下图是有机器人通过 1 亿枚 DAI 来夹 Curve 的用户:

![](/img/mev/curve.png)

它可以普遍被认为是恶性的, 但某种程度上像高速公路的测速仪一样[鞭策](https://twitter.com/tarunchitra/status/1549134678036303873)着用户使用更合理的滑点, 从而提升网络整体利益.

### d) Time-Bandit Attack

时间盗贼攻击是在区块生成之后, 矿工重新挖取区块导致区块链 reorg, 同时在自己挖出的区块中提取价值. 这是最恶性的 MEV, 会导致用户交易无效. 同时这虽然微乎其微, 但也有发生的[可能性](https://twitter.com/koeppelmann/status/1529458000011972610).

![](/img/mev/time-bandit-attack.png)

中本聪共识下的区块链网络由于最长链原则, 区块 reorg 发生非常[频繁](https://www.paradigm.xyz/2021/07/ethereum-reorgs-after-the-merge) ([延迟也大](https://www.paradigm.xyz/2022/07/consensus-throughput)), 因此这类 MEV 很可能被捕获. 而在 Tendermint 或者 PoS 的以太坊中, 这类 MEV 的发生会极大程度上被减少.

![](/img/mev/consensus.png)

关于时间盗贼 MEV [很酷的点](https://twitter.com/SiegeRhino2/status/1416311471303188481)是: 未来的事件可以影响过去 (将 “未来” 的交易包含到 “过去” 的区块中).

![](/img/mev/bandit.png)

但在简单的量化下, 此类攻击的[预期回报率是不高](https://twitter.com/0x9116/status/1413687410941169666)的, 同时会因为蓄意破坏区块链网络的稳定性受到谴责 (如 [Reorg-as-a-Service](https://femboy.capital/mev-time-turner)), 所以很少会发生.

### e) Clogging

任何 NFT, 资产, 和 Rollup 交易的有效性其实都是通过购买区块链网络上某个区块的某个空间所保证的. 以下是区块链[区块空间](https://twitter.com/Leorzhang/status/1374383287309758476)市场的供需:

![](/img/mev/clogging.png)

Clogging 就是通过连续垄断区块全部的空间来赢得例如 [Fomo3D](https://www.longhash.com/en/news/2280/With-Just-$1400,-You-Can-Clog-the-$20-Billion-Ethereum-Network) 游戏的胜利.

还记得最开头的 Geth 源码吗? 由于大约 70% 的以太坊矿工都是根据默认的 gas fee 排序对交易进行排序, 因此才产生了 Clogging.

但是目前来说, 因为基础设施的完备, 如预言机和 Rollup 等都会风雨无阻地进行交易的提交, MEV 机器人在网络活跃时期进行这样的活动, 成本会比较高.

### f) Non-Broadcast Transactions

前面几种活动的发起者基本都是 MEV 机器人, 而不是出块矿工本人.

Non-Broadcast Transactions 则是出块矿工偷偷提交的 tx, 也就是在矿工知道自己能出块的时候, 瞬间去给区块塞入一些交易, 从而捕捉 MEV.

![](/img/mev/non-broadcast-tx.png)

以太坊上大约 2% 的交易都是这样的形式产生的.

## 2. MEV 是好是坏?

前面的分析中我们探讨了不同种类的 MEV, 穿插着我们对每种的评价和好坏与否的评判. 那么整体来说, 到底 MEV 是好还是坏? 我们该怎么应对它? 不同的网络会怎么以不同的方式应对它?

**MEV 的好坏:**

- **好的 MEV: 用于套利清算 (Back Running), 公开透明市场 (Flashbot, MEV Auction), 并没有影响网络或者其他用户.**
- **坏的 MEV: 用于在其他用户身上榨取价值 (Sandwich Attack), 私下发送且不广播 (Time-Bandit Attack, Non-Broadcast Transactions), 影响网络的正常运行 (Clogging).**

从分类数量来看 MEV 貌似是一个不好不坏的中立角色, 但是当考量了 MEV 的本质 (incentive to insert tx into block), 这个 incentive 过于巨大, 会导致追逐坏的 MEV 造成的伤害远大于好的 MEV 的好处. 除此之外, MEV 的产生也是源于信息和知识的不对等, 区块链网络里只有 equality 而没有 equity.

综上所述, [**MEV 的黑市原理 + 巨大利益驱使 + 复杂情况和分类 = 区块链网络的负外部性**](https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g10d8f164256_0_0).

MEV 是坏的, 需要削减.

## 3. MEV 的深入思考与处理

在分类探讨针对 MEV 的策略之前, 我们需要明确一个点, 就是任何情境下的信息不对称和外部性都是无法被完全消除的, 我们只能去更好的处理它们.

### a) 解决 MEV 黑市与其巨大 incentive

MEV 是不透明的信息和知识而造成的黑市 (或者说黑暗森林), 这个黑市创造了巨大的利益. 我们将通过这个角度来思考针对 MEV 的策略.

[整个世界的黑市估值](https://twitter.com/mohakagr/status/1417143241812561930)大约为 1.8 亿美元, 且是一种无法消除的必然邪恶. MEV 的市场也远比我们所能观测到的大.

![](/img/mev/mev-size.png)

既然这个黑市是必然存在的, 那么何不让它暴露在阳光之下, 让大家都可以自由捕捉和保护自身的 MEV, 这样普通用户就可以形成合力, 且可以削弱 MEV 捕捉者针对用户的对抗.

[Flashbots 提出了以下五种市场方案来限制 MEV 的提取](https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g45d315b027c424f1_13), 从而减小 MEV 的总体负外部性:

![](/img/mev/mev-market.png)

这些 MEV 削减方案其实类似, 但相同的缺点就是可能会导致区块空间被浪费以及出块的中心化.

### b) MEV 的复杂情况: 场景区别

- 单链场景: 本文的大部分笔墨都是在讨论单个区块链网络中的 MEV 情况, 而现实中这是过于理想化的分析.
- 跨链场景: 一个区块链网络 = 一个 trust zone. 实际中会有无数个拥有不同机制和不同 MEV 种类的区块链网络, 这些**无数个 trust zone 就让网络间的套利四处存在**. 比如就算以太坊完全没有 MEV, 但如果 Cosmos 上有套利机会, 那么桥的验证者或者跨链应用机器人就可以在 Cosmos 上捕捉 MEV, 最终以太坊也成了这个 MEV 的受害者.

![](/img/mev/cross-chain.png)

- 多链场景: 跨链场景的例子可以无缝套用到 Cosmos 或者 Polkadot 的多链架构中, MEV 的存在具有传染性.

### b) MEV 的复杂情况: 网络架构区别

在我们[探索 Rollup 网络的文章](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)中, 我们了解到了单体的 Layer1 和在其之上建立的 Layer2 Rollup 的区别.

**1. Rollup**

Rollup 作为一个 “加强版的智能合约” 以及 “中心化的可信区块链网络” 目前均有着中心化的出块和排序机制, 因此有不同的 MEV 表现. 目前中心化的 Sequencer (也就是只有一个节点) 导致所有的 MEV 都可以被 Rollup 捕捉. 随着越来越多的流动性和链上活动转移到 L2, L1 矿工所可以获得的收入 (包括 MEV) 其实就被[转移到了 L2 的 Sequencer](https://twitter.com/j0hnwang/status/1489268470973878272).

当然 Rollup 网络自己也意识到且解决了这个问题, 它们对 tx 的公平排序体现了 MEV 的处理. 不同 Rollup 对于 MEV 的策略并不相同, 对网络参与者来说意义也就完全不同:

![](/img/mev/rollup.png)

**当 L2 步入去中心化且[模块化区块链](https://www.youtube.com/watch?v=lLuHFFbYv0Y&t=10s)的实现更加盛行后, MEV 的问题需要更多的研究和思考.** 例如以太坊与 Celestia 的模块化版图就会有所不同. 目前来说, 以太坊上的 Rollup 均为 Secured Rollup, 只需构建 [n 个双向可信的跨链桥](https://twitter.com/jon_charb/status/1546501633856634880) (它们本职就是造这样的桥), 共同结算在以太坊上, 而 Celestia 所鼓励的 Sovereign Rollup 各自为政, DA 很可能各不相同, 可能需要 n^2 个桥梁或者类似 IBC 或 XCM 的协议才可以完全打通. 这样就建立了完全不同的 MEV 市场和捕捉机会.

由 L2 MEV 的问题, 我们也可以引申出对 L1 和 L2 [价值关系的思考](https://twitter.com/j0hnwang/status/1489268486358671364), 本文中不做额外展开.

![](/img/mev/value.jpeg)

**2. 较中心化的区块链**

为了更快, [Solana 是没有公开的 Mempool 的](https://twitter.com/0xmisaka/status/1489639592168988673), 而是通过一个类似只有预计将出块的矿工看得到的 Gulf Stream 来作为 Mempool ([这也是它宕机的原因](https://www.chaincatcher.com/article/2067598)…). 这就意味着 MEV Bot 是没办法捕捉 MEV 的, 只有运行一个 Validator, 且即将出块的矿工才在理论上有机会对交易进行排序或者发送新的交易从而捕捉 MEV. 但结合 Solana 的矿工利润低的情况, 这样的设计其实就导致了矿工的收入更低. 于是现在就有 [Jito Labs](https://twitter.com/jito_labs) 做类似 Flashbot 的 mev-geth 的客户端, 来让矿工对自己的区块空间进行拍卖, 让 MEV 形成公开的自由市场. 同时 Solana 也有 [QUIC 和 per account fee market](https://twitter.com/0xmisaka/status/1511370043501785091) 的解决方案.

## 3. 结语

对于 MEV 这个话题, 本文仅仅是表层的分析, 有非常多有趣的东西由于篇幅的问题没有被提及 ([SGX](https://twitter.com/bertcmiller/status/1399737488151830538), [PBS](https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance) 等), 推荐你深入阅读文末的 50 余个相关链接.

**在一个[理想的网络](https://twitter.com/0xmisaka/status/1511370037306834954)里:**

- **任何人都可以发送交易 (no censorship)**
- **没有垃圾信息 (no spam)**
- **费率非常低 (low fees)**

![](/img/mev/trilemma.png)

**而 MEV 的存在让鱼和熊掌不可兼得:**

- **no spam + low fees: Web2 一样的 Censorship 必须存在.**
- **no censorship + low fees: MEV Searcher 就会发送垃圾信息让正常交易受影响.**
- **no censorship + no spam: 你就需要一个费率市场来对交易进行排序, 也就需要高昂的 gas 来优先执行交易.**

不过不用太担心, **Web1 或者 Web2 或者现实世界一样没有彻底解决 “MEV” 的负外部性, Web3 的各种方案已经做得非常好**. MEV 一直是个开放问题, 没有完全正确的解.

那么 Web3 的我们[该咋办](https://pdaian.com/blog/mev-wat-do/)?

- L1/L2: 设计时优先考虑 MEV.
- 矿工: 放心大胆地在不影响生态的情况下捕获价值, 因为这是网络博弈论的一个部分.
- DApp 开发者: 设计应用时考虑 MEV, 以及机制是否会伤害普通用户.
- 用户: 理解 MEV, 且尽量不要使用 MEV 机制设计不足的网络或应用.
- 其他人: 鼓励 MEV 的研究, 参与到 MEV 的讨论中, [**Front run the crisis**](https://medium.com/flashbots/frontrunning-the-mev-crisis-40629a613752).

## Links

[https://thedailyape.notion.site/MEV-8713cb4c2df24f8483a02135d657a221](https://www.notion.so/MEV-8713cb4c2df24f8483a02135d657a221)

0a:

[https://ethereum.stackexchange.com/questions/6107/what-is-the-default-ordering-of-transactions-during-mining](https://ethereum.stackexchange.com/questions/6107/what-is-the-default-ordering-of-transactions-during-mining)

[https://github.com/ethereum/go-ethereum/blob/290e851f57f5d27a1d5f0f7ad784c836e017c337/miner/worker.go](https://github.com/ethereum/go-ethereum/blob/290e851f57f5d27a1d5f0f7ad784c836e017c337/miner/worker.go)

[https://twitter.com/flashfish0x/status/1516378083628093447](https://twitter.com/flashfish0x/status/1516378083628093447)

0b:

[https://twitter.com/sui414/status/1532088483296120832](https://twitter.com/sui414/status/1532088483296120832)

0c:

[https://twitter.com/thegostep/status/1521104235114508289](https://twitter.com/thegostep/status/1521104235114508289)

0d:

[https://docs.flashbots.net/flashbots-protect/rpc/quick-start/](https://docs.flashbots.net/flashbots-protect/rpc/quick-start/)

[https://twitter.com/blockworksres/status/1532782392569606145](https://twitter.com/blockworksres/status/1532782392569606145)

[https://twitter.com/_anishagnihotri/status/1520579207478267905](https://twitter.com/_anishagnihotri/status/1520579207478267905)

[http://mint.fun](http://mint.fun/)

[https://www.recvc.com/mev-2-0-the-rise-of-mpsvs/](https://www.recvc.com/mev-2-0-the-rise-of-mpsvs/)

[https://twitter.com/hasufl/status/1439938607142277121](https://twitter.com/hasufl/status/1439938607142277121)

1:

[https://rileygmi.substack.com/p/what-is-mev-a-simple-guide](https://rileygmi.substack.com/p/what-is-mev-a-simple-guide)

[https://twitter.com/0xminion/status/1418059536712167432](https://twitter.com/0xminion/status/1418059536712167432)

[https://twitter.com/libevm/status/1474870665773682692](https://twitter.com/libevm/status/1474870665773682692)

[https://medium.com/coinmonks/on-efficient-ethereum-addresses-3fef0596e263](https://medium.com/coinmonks/on-efficient-ethereum-addresses-3fef0596e263)

1a:

[https://rekt.news/return-to-the-dark-forest/](https://rekt.news/return-to-the-dark-forest/)

[https://medium.com/offchainlabs/five-theses-about-transaction-ordering-mev-and-front-running-5ebf52bc0cbe](https://medium.com/offchainlabs/five-theses-about-transaction-ordering-mev-and-front-running-5ebf52bc0cbe)

1b:

[https://twitter.com/thyborg_/status/1547898785933639684](https://twitter.com/Thyborg_/status/1547898785933639684)

1c:

[https://twitter.com/bertcmiller/status/1527757146716348416](https://twitter.com/bertcmiller/status/1527757146716348416)

[https://twitter.com/tarunchitra/status/1549134678036303873](https://twitter.com/tarunchitra/status/1549134678036303873)

1e:

[https://www.longhash.com/en/news/2280/With-Just-$1400,-You-Can-Clog-the-$20-Billion-Ethereum-Network](https://www.longhash.com/en/news/2280/With-Just-$1400,-You-Can-Clog-the-$20-Billion-Ethereum-Network)

[https://twitter.com/Leorzhang/status/1374383287309758476](https://twitter.com/Leorzhang/status/1374383287309758476)

1d:

[https://www.paradigm.xyz/2021/07/ethereum-reorgs-after-the-merge](https://www.paradigm.xyz/2021/07/ethereum-reorgs-after-the-merge)

[https://www.paradigm.xyz/2022/07/consensus-throughput](https://www.paradigm.xyz/2022/07/consensus-throughput)

[https://twitter.com/0x9116/status/1413687410941169666](https://twitter.com/0x9116/status/1413687410941169666)

[https://femboy.capital/mev-time-turner](https://femboy.capital/mev-time-turner)

[https://twitter.com/SiegeRhino2/status/1416311471303188481](https://twitter.com/SiegeRhino2/status/1416311471303188481)

1f:

[https://medium.com/blockchannel/life-cycle-of-an-ethereum-transaction-e5c66bae0f6e](https://medium.com/blockchannel/life-cycle-of-an-ethereum-transaction-e5c66bae0f6e)

2:

[https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g10d8f164256_0_0](https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g10d8f164256_0_0)

2a:

[https://twitter.com/mohakagr/status/1417143241812561930](https://twitter.com/mohakagr/status/1417143241812561930)

[https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g45d315b027c424f1_13](https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g45d315b027c424f1_13)

2b:

[https://pdaian.com/blog/mev-wat-do/](https://pdaian.com/blog/mev-wat-do/)

3a:

[https://twitter.com/mohakagr/status/1417143241812561930](https://twitter.com/mohakagr/status/1417143241812561930)

[https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g45d315b027c424f1_13](https://docs.google.com/presentation/d/13q_cmaznKdAElherLI6fsBexJILYwTj2ddQlMTGUipU/edit#slide=id.g45d315b027c424f1_13)

3b:

[https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)

[https://twitter.com/j0hnwang/status/1489268470973878272](https://twitter.com/j0hnwang/status/1489268470973878272)

[https://ethresear.ch/t/mev-auction-auctioning-transaction-ordering-rights-as-a-solution-to-miner-extractable-value/6788](https://ethresear.ch/t/mev-auction-auctioning-transaction-ordering-rights-as-a-solution-to-miner-extractable-value/6788)

[https://ethresear.ch/t/mev-resistant-zk-rollups-with-practical-vde-pvde/12677](https://ethresear.ch/t/mev-resistant-zk-rollups-with-practical-vde-pvde/12677)

[https://twitter.com/j0hnwang/status/1489268486358671364](https://twitter.com/j0hnwang/status/1489268486358671364)

[https://www.youtube.com/watch?v=lLuHFFbYv0Y&t=10s](https://www.youtube.com/watch?v=lLuHFFbYv0Y&t=10s)

[https://twitter.com/benjaminsimon97/status/1380291321286569986](https://twitter.com/benjaminsimon97/status/1380291321286569986)

[https://twitter.com/apriori0x/status/1546464783318372353](https://twitter.com/apriori0x/status/1546464783318372353)

[https://twitter.com/0xmisaka/status/1511370043501785091](https://twitter.com/0xmisaka/status/1511370043501785091)

[https://twitter.com/jon_charb/status/1546501633856634880](https://twitter.com/jon_charb/status/1546501633856634880)

[https://twitter.com/sreeramkannan/status/1550572765899472896](https://twitter.com/sreeramkannan/status/1550572765899472896)

[https://twitter.com/barnabemonnot/status/1550346797494800384](https://twitter.com/barnabemonnot/status/1550346797494800384)

4:

[https://twitter.com/bertcmiller/status/1399737488151830538](https://twitter.com/bertcmiller/status/1399737488151830538)

[https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance](https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance)

[https://twitter.com/0xmisaka/status/1511370037306834954](https://twitter.com/0xmisaka/status/1511370037306834954)

[https://pdaian.com/blog/mev-wat-do/](https://pdaian.com/blog/mev-wat-do/)

[https://medium.com/flashbots/frontrunning-the-mev-crisis-40629a613752](https://medium.com/flashbots/frontrunning-the-mev-crisis-40629a613752)

Not Included but Recommended to Read:

[https://twitter.com/0xElan/status/1547026528235429894](https://twitter.com/0xElan/status/1547026528235429894)

[https://twitter.com/uriklarman/status/1546971147018948609](https://twitter.com/uriklarman/status/1546971147018948609)

[https://twitter.com/Thyborg_/status/1547898785933639684](https://twitter.com/Thyborg_/status/1547898785933639684)

[https://twitter.com/0xcacti/status/1548470752071913472](https://twitter.com/0xcacti/status/1548470752071913472)

[https://twitter.com/sxysun1/status/1483860078331584512](https://twitter.com/sxysun1/status/1483860078331584512)

[https://theknower.substack.com/p/its-all-a-dark-forest](https://theknower.substack.com/p/its-all-a-dark-forest)

[https://flashbots.mirror.xyz/NayGRPko-vFnauN5WOn6rQHgMEUqCpmlPPDfKRXJriU](https://flashbots.mirror.xyz/NayGRPko-vFnauN5WOn6rQHgMEUqCpmlPPDfKRXJriU)

[https://learnblockchain.cn/article/3163](https://learnblockchain.cn/article/3163)

[https://ethereum.org/en/developers/docs/mev/](https://ethereum.org/en/developers/docs/mev/)

![](/img/mev/thumbnail.png)

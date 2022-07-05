# 🍱 读懂模块化: 彻底 Rollup

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/nGwUfCh6c3qMVcnLAQc-8A)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-unified-to-divided-modular-blockchain-and-data-availability-layer-459b35673381).

## 0. Rollup 的瓶颈

如果你读了上一篇[我所写的 Rollup 的文章](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ), 那么很可能会发现在 Optimistic 和 zk Rollup 的终局对比部分, 有意无意地被留了一个坑.

当时得出的结论是: 因为没有 Proving Overhead, Optimistic Rollup 在长远视角下会远胜于 zk Rollup. 但是其实在不同时间段的发展上, Optimistic 和 zk Rollup 的性能实际上会交替领先:

![](/img/modular/zk-op.png)

不同阶段不同类型的 Secured Rollup 有不同的瓶颈, 而现在对它们来说, **最主要的问题还是以太坊目前所提供的数据可用性方案限制了它们顶峰的理论性能**.

为了解决现阶段 Rollup 的这个性能问题, 我们有两种方法:

1. 提升以太坊的主网, 等它升级成功, 缺点是无法掌握主动权, 这或许需要很久时间.
2. 切换 Rollup 的类型 (如换成 Validium), 直接使用性能更优秀的数据可用性方案, 缺点是部分牺牲了安全性.

## 1. 区块链的模块化

我们现在所指的那些 Secured Rollup (Arbitrum 等), 其实就是模块化区块链的一种实现, 未来会有更多不同的模块化区块链实现, 或者说不同变种的 Rollup.

**以太坊的 Rollup 路线体现了区块链的模块化趋势**, 让区块链的层级分离, 各司其职, 让网络能够 Rollup 起来.

[之前 Rollup 的文章](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)提到了扩容的两条路线, 一条是升级区块链本身, 另一条是用 Rollup 的方式来更好地使用区块链.

**模块化区块链组合了两条路线, 1+1 > 2, 彻底切换了区块链的单体架构, 让新的模块化区块链网络成为 Rollup 最适合生长的土壤, 且赋予这些 Rollup 方案更多的模块选择和更高的性能.**

### a) 两个层级, 四个模块

一个区块链可以拆分为[两个层级, 共包括四个模块](https://typefully.com/ptrwtts/9OchbmS):

![](/img/modular/layer-module.png)

- 安全层: 保证区块链的安全性.
    - **数据可用性模块** (后文中称为 DA): 保证交易数据可以被使用 (保证存储且可验证与可用).
    - **共识模块**: 决定交易的顺序等 ([PoW 等是防攻击的机制](https://twitter.com/toghrulmaharram/status/1532327757895634944), 是共识的基础而不代表共识的全部).
- 执行环境层: 提供区块链的执行环境.
    - **结算模块**: 结算出状态承诺.
    - **执行模块**: 计算出单独的状态转换.

其中**对于每个层级来说, 两个模块采用同一方案的安全性更高, 信任假设更少**, 如结算和执行均采用以太坊的安全性 > 仅结算采用以太坊, 执行采用 Arbiturm 环境的安全性.

![](/img/modular/design.jpeg)

单体区块链的代表有 Ethereum 本身, Solana, Binance Smart Chain 等, Secured Rollup 的代表有 Arbitrum, Optimism 等, DA 层的代表有 Celestia 的 DA, Polygon Avail 等.

如果将区块链的模块和计算机结构进行类比, 那么:

- **区块链的执行模块 ⇒ 计算机的操作系统** (真正执行指令的环境)
- **区块链的 DA 模块 ⇒ 计算机的内存** (实现短期数据存取)
- **区块链的结算与共识模块 ⇒ 计算机的 CPU** (硬件保证指令执行的正确性)

后续文章中, 我们会称这些 “模块” 为 “层”, 但是它们实际上是模块.

### b) 从 Web 的发展中预测模块化趋势

我们可以从 Web 的发展中[借鉴出](https://www.notion.so/DISRUPTORS-Modular-Blockchains-for-Sovereign-Communities-With-Hacktivist-Mustafa-Al-Bassam-45087bf05e894141ba8452db3e86f908)区块链未来的模块化发展路线:

![](/img/modular/web.png)

区块链网络其实是一个更去中心化和更稳定的集群, 让节点集合算力, 形成遍布全球的大型可信计算机.

而区块链的模块化划分非常像 [Web2 中的分布式系统](https://www.jianshu.com/p/21238ae6107c) (不等于分布式数据库的分布式). 它本质上是把[业务进行拆分](http://www.dedenotes.com/html/distributed-cluster.html), 与下图 [Uber 的架构](https://towardsdatascience.com/ace-the-system-design-interview-uber-lyft-7e4c212734b3)类似, 模块各司其职.

![](/img/modular/uber.png)

Web2 的分布式系统和 Web3 的区块链的模块化带给我们两个需要思考的问题:

- **拆分**: 区块链网络已经被简约地拆分为了前文中提到的两个层级和四个模块.
- **连接**: 保证模块之间的通信以及安全性. 这也就是为什么同源的模块安全性更高, 因为不需要额外连接, 避免了过程中所暴露的危险.

拆分的问题已经被清晰定义, 但连接的问题对模块化架构有所影响. 该如何将安全性和用户体验提升或许是模块化区块链需要解决的问题.

### c) 为什么模块化?

**模块化区块链将单体区块链解耦后, 新网络结构 = 多个类似 Arbitrum 和 StarkEx 的不同 Rollup + 一个类似以太坊的底层主网.**

它们提升的重点主要是, 不用再通过因为共识与 DA 耦合的传统单体区块链导致的 Proof of Replication 来验证和保证 DA (限制性能和极大程度上提升全节点大小影响去中心化).

这意味着模块化区块链网络不用再去卷单体区块链的共识了, 而是**解耦后直接使用专门层处理 DA, 在主网安全的优先级下, 减少多余算力和存储的浪费, 提升吞吐量, 跳过共识问题瓶颈**, 从而将千级或万级的 TPS 进一步提升.

除了整体性能可以突破瓶颈, 跨越到下一个时代, 模块化区块链还有什么显著的好处?

- **更好的区块链**
    - **安全性**: Rollup 层借用 Ethereum 等底层安全层的安全性.
    - **执行性能**: 可灵活采用更快的执行或/和结算模块.
- **开发上的可组合性**
    - **迭代**: 模块解耦. 模块可以进行更激进的提案和更快速的创新.
    - **可插拔**: 更多的链开发方案和技术栈选择.

### d) 模块化的不同实现?

![](/img/modular/l1.png)

模块化的区块链网络其实可以构建出非常多类型的 “链” 的实践, 主要有三个大类和无数细分小类:

- **Rollup** (包含 Sovereign 或 Secured Rollup 等, 见[上一篇文章](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ). 如 Ethereum/Celestia 安全层 + 执行环境/或仅执行模块.)
- **Multi-Monolithic** (如 Tendermint/Substrate 安全层 + [Cevmos](https://medium.com/evmos/introducing-cevmos-an-open-scalable-and-modular-stack-for-evm-based-applications-72930ce6b85c) 栈与 Recursive Rollup 的执行环境. Celestia 本身其实属于这个架构, 是 Cosmos 生态的.)
- [**Subnet**](https://mp.weixin.qq.com/s/liulfJo4vg5gI7DiaYDPXw) (组装最自由的模块化区块链, 并非能继承安全性, 更偏重部署和开发效率.)

![](/img/modular/mono-modu.png)

这三个模块化区块链和单体区块链的[大方向不同](https://medium.com/momentum6/modular-blockchains-the-next-alpha-celestia-overview-456ca5bbf9b1), 特色也各不相同:

- Rollup: 天下武功唯快不破, 但是技术进度最慢, 最不成熟.
- Multi-Monolithic: 共享安全性, 通信可组合和可互操作, 应用链具有主权, 但是性能不一定行.
- Subnet: 秒速部署, 方案成熟, 但是安全性和去中心化程度不一定行.
- Monolithic: “完全的” 自由度, 但是方案太重, 整个系统或许过于耦合.

### e) 模块化概念的影响?

模块化区块链的时代到来之后, L1 和 L2 的传统概念或许要被[重新定义](https://www.notion.so/DISRUPTORS-Modular-Blockchains-for-Sovereign-Communities-With-Hacktivist-Mustafa-Al-Bassam-45087bf05e894141ba8452db3e86f908).

- 单体区块链: L1 指以太坊等单体区块链, L2 指基于以太坊的安全层与执行模块组合成的 Rollup.
- 模块化区块链: L0 指社会共识与对 L1 的信任假设, L1 指模块化区块链的安全层 (DA 与 Consensus), L2 指模块化区块链的执行环境层 (Settlement 与 Execution)

除此之外:

- 性能衡量: **从共识的 TPS 和 TTF 转变成 DA 的吞吐量的对比**.
- 定义: 需要注意的是, 对于如 Arbitrum 的 Rollup 来说, Arbitrum 网络 = Arbitrum 的执行环境 + 以太坊的安全层与结算模块. 对于以太坊本身来说, 以太坊网络 = 以太坊执行环境 + 以太坊的安全层与结算模块. 当方案可以被模块化解构时, 它们都可以被称为是模块化区块链的一种实践. 而如以太坊这样适合做 L1 的网络, 可以被称之为模块化区块链网络.
- 趋势: 当应用想要更多功能, 减少运营成本或加强安全性, 更大的主权时, 应用可以在一篮子的模块中, 选择适合自己的方案, 从而发展 App-chain 或 App-rollup 或 App-subnet.

**未来, 或许每个应用会选择成为一个模块化的区块链.**

## 2. DA 层

既然 Rollup 不仅保证安全性, 还提升性能, 那何不让区块链成为 Rollup 的最佳土壤? 模块化区块链就是让区块链成为 Rollup 的更好基础层.

Rollup 让大家关注了 DA 层对性能的影响, 同时 Rollup 的出现也启发了以多个 Rollup 生态为重点的模块化区块链网络概念. **模块化区块链让区块链跨越单体时代的共识瓶颈, 进入到模块化概念以 DA 为重点的时代.**

**“Rollup 是将执行层 off-chain, 下一步是将 DA off-chain.”**

### a) [DA 是什么](https://docs.google.com/presentation/d/1VUm4z-OVZgo0PQxWDbBtU4fcvZmCOYxP)?

对于模块化的区块链和 Rollup 网络来说, **完整数据需要在那里和保证可以被使用, 从而确保网络的[去中心化和安全性](https://scalability.guide/posts/maximising_light_clients_security/)**:

[Current Data Availability](https://twitter.com/bkiepuszewski/status/1520079799951183872): 为什么出块时需要最新的状态根和 tx 数据可用?

- **因为要出新的块, 就需要在 L1 揭露所有这些数据, 以便其他节点重新执行从而做到验证, 同时这个过程要保证轻客户端的安全** (它们只检查区块头! 不拒绝无效交易).

Archive Data Availability: 区块有效后, tx 数据是否还需要被保留保证可用?

- 需要. 比如你想查看几个月前的一笔交易, 或你想从头运行一个节点.

Rollup 与模块化区块链: 对于 Rollup 和未来不同的模块化区块链实践来说, Current Data Availability 意味着什么?

- Optimistic Rollup: 出新块时需要状态根数据可用, 来被验证, 挑战期内需要 tx 数据可用来使挑战 Sequencer 可行, 保证安全性.
- zk Rollup: Sequencer 跑路情况下, 需要状态根数据来重建状态和取出资金.

### b) Current Data Availability

最新数据的可用性影响着网络本身的安全性和性能.

![](/img/modular/da.png)

当我们说到 DA 时, 通常所指的都是它.

- 单体区块链时代:
    - DA 方案: 由于共识与 DA 没有解耦, 因此靠全节点 **Proof of Replication**.
    - 数据在那里: 通过一堆**全节点复制完整数据**来保证.
    - 数据可用: 通过**线性复杂度下载完整数据**来验证数据可用.
    - tx 有效性: 通过**重新执行**来验证 tx 的有效性.
    - 问题: **冗余过多**, 且若节点平均只存储一部分数据, **丢数据的概率很大** (和生日悖论类似).
- 模块化区块链时代:
    - DA 方案: 专门的**独立 DA 解决方案**.
    - 数据在那里: 通过**纠删码** (CD 和卫星所采用的数据保护方案) 保证数据可用.
    - 数据可用: 通过**数据可用性采样**来在 **sublinear** 时间内验证, 如只需下载 1% 的区块数据即可得到 99% 的区块可用保证.
    - tx 有效性: 通过**错误编码证明** (类似 Optimistic 机制) 或者**多项式承诺**甚至直接上**有效性证明** (我们通常称之为 zk 证明) 确保纠删码编码正确, tx 有效.

### c) Archived Data Availability

存档数据的可用性仅影响网络本身外的如区块链浏览器等的基础设施, 可能对网络本身来说是个可选项, 但是对用户的使用来说必须具备.

我们首先要说明的主要是, Arweave 或 Filecoin 的 Web3 存储方案无法为 Current Data Availability 提供直接的 DA:

- Arweave: SPoRA. 实质上是种摩尔定律假设和经济模型下的概率性存储 (当然一切皆概率…). 使用中通常需要等十多个区块才能确认数据 “永存”, 无法很好保证即时 DA.
- Filecoin: PoSt. 点对点的分布式存储网络. 进行数据存储的矿工可以扣留数据, 无法保证去中心化以及 DA.
- IPFS: 主要还是作为基础设施存在, 在 Polygon Avail 和 Celestia 的 DA 的网络层中都有使用.

除此之外, Arweave 和 Filecoin 依然是单体区块链的多副本冗余模式保证数据可用, 难以建立高效的采样机制.

**虽然它们不适合作为 “内存” 为最新数据提供可用性, 但适合作为 “硬盘” 为存档数据提供可用性**. 目前 Web3 仍然缺少一个更模块化更专注的专用 “硬盘”.

## 3. 模块化区块链的选择

我们现在就作为一个万级 TPS 项目的架构师, 来为我们的应用做一些抉择, 组合出合适的应用链.

![](/img/modular/design.jpeg)

### a) DA 层生态

DA 层是最近大家非常关注的方向. 但是从我们的抉择图来看, 其实没有很大概率去连续做 “对” 那么多先置选择, 最终进行到 DA 的选择.

除了**项目最可能采用的自建私有 DAC (性能 + 主权) 或侧链 DA 方案**以外, DA 方案基本有三种选择思路:

- **最高的安全性**: 与共识层一致, 比如 DA 与共识均采用以太坊或 Celestia.
- **极致的吞吐量**: 牺牲安全性, 增加额外信任假设, 比如链下数据委员会 ([安全性和多签一样, 差](https://mp.weixin.qq.com/s/s5qZFryvyJBXbMUU1KV5Iw)).
- **两者兼具**: 通过 Restaking 模式, 得到高安全性与高吞吐量, 比如 DataLayr.

DA 方案的商业格局基本会是这样:

- 商业模式: 面向应用链, 通过**提供 DA 收取应用链支付的 “保护费”**.
- 竞争: DA 的方案强弱其实就是**两个层面的对比: 安全性与吞吐量. 且吞吐量的更优者很容易获得压倒性的胜利**.
- 价值捕获: 由于实际中并没有太多实例来进行分析对比, 因此我们可以思考以下问题: **如果 DA 层市值远低于应用链 (像 Chainlink 和 DeFi 应用的关系), 整个协议是否因此有安全性短板? 单单 DA 层无法形成完整应用生态, 代币如何捕获价值?**

### b) 执行层生态

**如果把模块化区块链比作一个高度分工化的厨房, 区块链的性能是上菜速度, 那么吞吐量更大的 DA 层就是更大的锅, 更好的执行环境就是更熟练以及会做更多菜系的厨子.**

执行层方案也基本上有这么几种选择:

- 现有成熟方案: EVM 及其 ZK 或 OP 变种, WASM 及其各种变种等.
- 未来前沿方案: [FuelVM](https://twitter.com/IAmNickDodson/status/1542516357886988288) ([工作流程如下图中下方](https://twitter.com/hasufl/status/1538793436085637121), 因此更快), AltLayer 等.

![](/img/modular/fuel.png)

对于执行层来说, 我认为 EVM 依旧会因为生态优秀而保持未来的主导地位.

**对于前沿执行层方案的价值捕获来说, 它们自己可以被很容易组合成 Optimistic Rollup, 形成应用生态**, 因此在价值捕获上, 它们相比 DA 层有天然的优势.

### c) 共识层生态

对于模块化区块链来说, 共识层需要:

- 安全性优先: 保证底层的稳定和安全性.
- 智能合约环境: 方便链上验证各种输出.
- 社会与经济共识: 需要是 “德高望重” 的大公链, 这样才不用额外的信任假设.

于是我们剩下的合适的选择不多了:

- 完全合适: Ethereum, Cosmos 等.
- 勉强合适: Bitcoin, Arweave (两者链上无图灵完备的智能合约, 结算在应用链进行) 等.
- 不太合适: Solana (网络不是特别稳定) 等.
- 可能最合适: 未来的 Celestia, 未来的 Ethereum.

## 4. 模块化方案的思考

### a) 进一步探索

DA 层: **状态爆炸问题让网络的准入门槛过高, 削弱了网络的去中心化**. 我们在 DA 那一段所阐述的 [statelessness](https://www.alexbeckett.xyz/stateless-rollups/) 仅仅是 weak statelessness, 也就是只有出块者需要存储状态数据, 后面还需要更多优化, 让所有的节点都不需要存储全部状态数据.

[执行层](https://twitter.com/musalbas/status/1542290191200796674): 目前的模块化分工仅仅是开了许多个执行层 (Sharding), 而**当某个执行层满载后, 它的性能依然无法满足 Web3 需求. 那么我们所需要拓展的就更多是单个执行层的性能 (Parallelization)**, 如 Fuel 和 Solana.

### b) 需求与供给

![](/img/modular/need.png)

App-chain 的需求到底有多少?

**目前只有热门应用才会有 App-chain 的需求**. 我们或许需要 onboard 更多用户, 才会激发对模块化方案的真正大量需求.

同时, 我们也看到了无数多的模块选择, 最后到底哪些能真正被积极使用也是一个需要探索和筛选的过程.

### c) 安全性

模块化有两个方面, 拆分和连接:

- 拆分是否会导致整个区块链网络具有短板? **将攻击其短板所需的资金大量降低, 作为像 Curve 池的引线角色一样引爆 Luna 那样的惨剧**?
- 一个系统越复杂, 所暴露的可被攻击的地方也就越多. **模块间的 “连接” 是否存在被攻击的可能** (当然 Rollup 桥其实比 IBC 桥还要[安全](https://twitter.com/sreeramkannan/status/1542191816023212034)) ? (之前的文章中我们[对可组合性的危险发表了看法](https://mp.weixin.qq.com/s/6Iu-F_VO11hFtUEdEiZicQ))

![](/img/modular/connect.png)


### d) 体验

![](/img/modular/front-back.jpg)

一个分散的模块化系统可能仅仅**因执行层不同就导致用户体验与资金的割裂, 同时它是否会由于开发工具的不同, 导致开发者体验的割裂**? MEV 如何处理?

### e) 分久必合

类似 Apple 从 Intel 芯片到 m 系列 SoC 的转变, **模块化区块链较为割裂的架构是否会在几年之后因为生态或体验等问题重新统一, 单体区块链是否会重回主导地位**? **模块化区块链是否会出现类似 Cosmos IBC 一样的互通协议**?

## 5. 总结

目前模块化区块链只跑出了冰山一角, 但已经非常繁荣, 有各种基于以太坊的 Secured Rollup, Cosmos, Polkadot, Subnet 等.

**比特币是区块链的概念, 以太坊是区块链的实践, 而模块化区块链会是区块链被广泛工程化与实践的基础**.

### 关于 Foresight Ventures

Foresight Ventures 押注加密货币未来几十年的创新历程，旗下管理多支基金：VC基金、二级主动管理基金、多策略FOF、特殊目的S基金「Foresight Secondary Fund l」, 总资产管理规模超过4亿美元。Foresight Ventures 坚持“Unique, Independent, Aggressive, Long-term”的理念，通过强大的生态力量为项目提供广泛的支持。其团队来自包括红杉中国，中金公司，谷歌，比特大陆等顶级金融和技术公司的资深人士。

Website: [https://www.foresightventures.com/](https://www.foresightventures.com/)

Twitter: [https://twitter.com/ForesightVen](https://twitter.com/ForesightVen)

Medium: [](https://foresightventures.medium.com/)[https://medium.com/@foresightventures-zh](https://medium.com/@foresightventures-zh)

Substack: [https://foresightventures.substack.com](https://foresightventures.substack.com/)

Discord: [https://discord.com/invite/jYtyfxfB](https://discord.com/invite/jYtyfxfB)

Linktree: [https://linktr.ee/foresightventures](https://linktr.ee/foresightventures)

## 相关阅读

推荐精读:

CyberOrange on DA:

[https://docs.google.com/presentation/d/1VUm4z-OVZgo0PQxWDbBtU4fcvZmCOYxP](https://docs.google.com/presentation/d/1VUm4z-OVZgo0PQxWDbBtU4fcvZmCOYxP)

[https://www.youtube.com/watch?v=Oqv71IV_f4w](https://www.youtube.com/watch?v=Oqv71IV_f4w)

CFG Labs on Celestia:

[https://mp.weixin.qq.com/s/DXZ3MsK_ADUVCJjU4mNPtQ](https://mp.weixin.qq.com/s/DXZ3MsK_ADUVCJjU4mNPtQ)

[https://mp.weixin.qq.com/s/f99jWV5KIQRj-hJCBIWPMw](https://mp.weixin.qq.com/s/f99jWV5KIQRj-hJCBIWPMw)

[https://mp.weixin.qq.com/s/N2iqs5OnDJzZBmbgQQSUAA](https://mp.weixin.qq.com/s/N2iqs5OnDJzZBmbgQQSUAA)

Rain&Coffee on Modular:

[https://rainandcoffee.substack.com/p/the-modular-world](https://rainandcoffee.substack.com/p/the-modular-world)

[https://rainandcoffee.substack.com/p/the-fuel-for-fast-execution](https://rainandcoffee.substack.com/p/the-fuel-for-fast-execution)

Polynya on Modular:

[https://polynya.medium.com/the-lay-of-the-modular-blockchain-land-jan-2022-update-d38c868286f](https://polynya.medium.com/the-lay-of-the-modular-blockchain-land-jan-2022-update-d38c868286f)

[https://polynya.medium.com/modular-execution-layers-df256768ac2f](https://polynya.medium.com/modular-execution-layers-df256768ac2f)

0:

[https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)

[https://www.8btc.com/article/6736346](https://www.8btc.com/article/6736346)

[https://web3caff.com/zh/archives/14111](https://web3caff.com/zh/archives/14111)

1:

[https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)

1a:

[https://typefully.com/ptrwtts/9OchbmS](https://typefully.com/ptrwtts/9OchbmS)

[https://twitter.com/toghrulmaharram/status/1532327757895634944](https://twitter.com/toghrulmaharram/status/1532327757895634944)

1b:

[https://delphipodcast.notion.site/DISRUPTORS-Modular-Blockchains-for-Sovereign-Communities-With-Hacktivist-Mustafa-Al-Bassam-45087bf05e894141ba8452db3e86f908](https://www.notion.so/DISRUPTORS-Modular-Blockchains-for-Sovereign-Communities-With-Hacktivist-Mustafa-Al-Bassam-45087bf05e894141ba8452db3e86f908)

[https://www.jianshu.com/p/21238ae6107c](https://www.jianshu.com/p/21238ae6107c)

[http://www.dedenotes.com/html/distributed-cluster.html](http://www.dedenotes.com/html/distributed-cluster.html)

[https://towardsdatascience.com/ace-the-system-design-interview-uber-lyft-7e4c212734b3](https://towardsdatascience.com/ace-the-system-design-interview-uber-lyft-7e4c212734b3)

1d:

[https://layer2planet.substack.com/p/l2-planet-learn-celestia-and-fuel?utm_source=email](https://layer2planet.substack.com/p/l2-planet-learn-celestia-and-fuel?utm_source=email)

[https://twitter.com/mt_1466/status/1501188854878982155](https://twitter.com/mt_1466/status/1501188854878982155)

[https://typefully.com/ptrwtts/9OchbmS](https://typefully.com/ptrwtts/9OchbmS)

[https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ](https://mp.weixin.qq.com/s/GT4Yfw8VPhBikME4mKCTNQ)

[https://medium.com/evmos/introducing-cevmos-an-open-scalable-and-modular-stack-for-evm-based-applications-72930ce6b85c](https://medium.com/evmos/introducing-cevmos-an-open-scalable-and-modular-stack-for-evm-based-applications-72930ce6b85c)

[https://mp.weixin.qq.com/s/liulfJo4vg5gI7DiaYDPXw](https://mp.weixin.qq.com/s/liulfJo4vg5gI7DiaYDPXw)

1e:

[https://rainandcoffee.substack.com/p/the-modular-world](https://rainandcoffee.substack.com/p/the-modular-world)

[https://www.chaincatcher.com/article/2072817](https://www.chaincatcher.com/article/2072817)

2a:

[https://docs.google.com/presentation/d/1VUm4z-OVZgo0PQxWDbBtU4fcvZmCOYxP](https://docs.google.com/presentation/d/1VUm4z-OVZgo0PQxWDbBtU4fcvZmCOYxP)

[https://scalability.guide/posts/maximising_light_clients_security/](https://scalability.guide/posts/maximising_light_clients_security/)

[https://twitter.com/bkiepuszewski/status/1520079799951183872](https://twitter.com/bkiepuszewski/status/1520079799951183872)

2b:

[https://medium.com/blockchain-capital-blog/wtf-is-data-availability-80c2c95ded0f](https://medium.com/blockchain-capital-blog/wtf-is-data-availability-80c2c95ded0f)

3a:

[https://mp.weixin.qq.com/s/s5qZFryvyJBXbMUU1KV5Iw](https://mp.weixin.qq.com/s/s5qZFryvyJBXbMUU1KV5Iw)

3b:

[https://twitter.com/IAmNickDodson/status/1542516357886988288](https://twitter.com/IAmNickDodson/status/1542516357886988288)

[https://twitter.com/hasufl/status/1538793436085637121](https://twitter.com/hasufl/status/1538793436085637121)

[https://rainandcoffee.substack.com/p/the-fuel-for-fast-execution](https://rainandcoffee.substack.com/p/the-fuel-for-fast-execution)

[https://polynya.medium.com/the-lay-of-the-modular-blockchain-land-jan-2022-update-d38c868286f](https://polynya.medium.com/the-lay-of-the-modular-blockchain-land-jan-2022-update-d38c868286f)

[https://polynya.medium.com/modular-execution-layers-df256768ac2f](https://polynya.medium.com/modular-execution-layers-df256768ac2f)

4a:

[https://www.alexbeckett.xyz/stateless-rollups/](https://www.alexbeckett.xyz/stateless-rollups/)

[https://twitter.com/musalbas/status/1542290191200796674](https://twitter.com/musalbas/status/1542290191200796674)

4c:

[https://twitter.com/sreeramkannan/status/1542191816023212034](https://twitter.com/sreeramkannan/status/1542191816023212034)

[https://mp.weixin.qq.com/s/6Iu-F_VO11hFtUEdEiZicQ](https://mp.weixin.qq.com/s/6Iu-F_VO11hFtUEdEiZicQ)

![](/img/modular/thumbnail.png)

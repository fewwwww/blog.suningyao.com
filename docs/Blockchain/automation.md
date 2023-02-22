# 🦿 读懂Automation与Bot

> 本文为Hyper Oracle撰写, English Version: [Mirror](https://mirror.xyz/hyperoracleblog.eth/UYI8mpq6zJ8L2Hbqrliss0mg92v7dNAqz0UhO41d_dM).

## 0. 区块链, 就是 Bot

Automation, 作为一个名词, 定义是: 一种自我驱动的机器或自动遵循操作的控制机制.

正如比特币白皮书所写, **区块链网络的核心是一个去中心化的时间戳, 通过密码学和自动化保证账本的正确性**.

![](/img/automation/blockchain-bot.png)

**区块链本身就是一个自动化程序, 根据共识机制和加密规则自动无休止地生成区块, 同时将数据保存在账本中**. 我们甚至有自带 [Ticking Automation](https://therealbytes.substack.com/p/presenting-ticking-optimism) 的 Rollup (automation²).

在所有 Automation 或 Bot 类型中, [区块链最像一个机械钟表](https://www.btcstudy.org/2021/09/29/bitcoin-is-time/):

- **区块链中时间的最小粒度是 1 个区块, 而不是 1 秒**, 而且不同网络衡量 1 个区块长度的标准也不同 ([时间长度/是否为固定时间](https://mirror.xyz/msfew.eth/XxP3h9n67mvQRivwJRM-XC-vX8zoUYI1A0O7bELMuPQ)).
- **区块链中 "现在" 的确定方式取决于网络机制**, 如最长链规则.
- **区块链中的时间可以不断逆转**, 甚至[未来事件可以改变过去](https://twitter.com/SiegeRhino2/status/1416311471303188481). 网络中的[时间旅行的难度不同](https://www.paradigm.xyz/2021/07/ethereum-reorgs-after-the-merge). 还有类似于 "土拨鼠之日" 的[测试网络](https://twitter.com/tmiychao/status/1599728822085046272), 会定期返回创世区块.

在[区块链是自动化时钟](https://mp.weixin.qq.com/s/REZs6PqlY4WdUJXuBVMnbw)的叙述下, 我们了解到, Crypto 和 Web3 的开发者实际上是制表人, [通过去中心化技术建立社会机制和技术系统, 让系统以钟摆式的运动自动无休止地运作](http://prestwi.ch/we-are-the-watchmaker-gods-now/). 一旦我们让齿轮开始转动, 每次迭代都将基于我们最初的创造.

选择正确的端到端去中心化和安全的解决方案来构建 "时钟" 是至关重要的, 因此 Hyper Oracle 确保zkMiddleware Meta Apps (zkIndexing 和 zkAutomation) 通过 [zkPoS](https://hyperoracle.medium.com/zkpos-end-to-end-trustless-65edccd87c5a) 和 [zkWASM](https://hyperoracle.medium.com/zkwasm-the-next-chapter-of-zk-and-zkvm-471038b1fba6) 是完全无信任和去中心化的, 使下一代 DApps 的颠覆创新成为可能.

## 1. 区块链, 由 Bots 驱动

对于自动化、机器人、MEV、Keeper 和其他概念:

- **Automation 是所有自动化程序的总称**, 包括 MEV Automation 和 Keeper Automation.
- **Bot 是这些 Automation 运行的实例**, 包括 MEV Bots、Keeper Bots 等.
- [**MEV Bot](https://mirror.xyz/msfew.eth/exHDL1Rn32SSFT1_mnMyNgoC7hXmB3LlcYMFiW6KtRE) 是一种常见的 Bot 类型, 通过分析区块链网络活动以榨取利润**. MEV 的概念始终是模糊的, 但从广义上讲, 它可以包括所有 Bot. 想要了解更多内容, 可以看[这就是 MEV](https://www.youtube.com/watch?v=8qPpiMDz_hw) 和[这不是 MEV](https://www.youtube.com/watch?v=Lc5zxOonT0A).
- **Keeper 是一种更 "积极" 和 "有益" 的机器人**, 通常由 DApp 开发者自己部署, 定期触发一些操作 ([TWAP 更新](https://mirror.xyz/msfew.eth/qSmnIO_O0OUlvkUfzca_kOrhlaHBHaEtx40D_ZCOC9Q)或清算), 以保持 DApp 正确和健康运行. 这些操作[可能](https://twitter.com/0xSacha/status/1624102663557087247)通过链上计算则过于复杂, 通过治理则过于频繁, 通过公开执行则有安全隐患, 因此必须要 Keeper 的参与.

**区块链主要由 Automation (或MEV Bots) 驱动**.

"[这是一个恐怖的故事.](https://www.paradigm.xyz/2020/08/ethereum-is-a-dark-forest)" 在以太坊的黑暗森林中, 你的对手不仅是其他用户, 还有一群无情的自动化机器人. 它们观察你的一举一动, 在你的每一个行动中寻找错误和弱点, 从你身上获利.

以下是一些例子:

### a) ~50% Uniswap V3 交易 = Bots

![](/img/automation/uniswap-bots.png)

**Uniswap V3 上大约 50% 的交易量是由机器人贡献的**, 而大约 20% 的未标记的地址很可能也是机器人. 这意味着, Uniswap V3 上超过 2/3 的交易量可能是 Automation 的结果.

另外, 只有约 15% 的交易量来自 Uniswap V3 的前端, 这意味着可能最多只有 15% 的交易量是由真实的用户直接提交的.

别担心, 这并不是 Uniswap 或 DeFi 的重大失败, 这正是 AMM 和 DeFi 的魅力所在.

- **DeFi = Bots + AMM**

    [Uniswap 作为一个无需许可的中立协议, 以 x * y = z 的报价为基础, 不受影响地不断在曲线上移动, 然后再回落](https://medium.com/dragonfly-research/what-explains-the-rise-of-amms-7d008af1c399). Uniswap 本身就是自动化的表现, 套利者和交易者一起协作, 让价格随时保持平衡. 在这一点上, Bots 可以被认为主要是对协议的积极作用而不是消极作用, 因为保持价格 "稳定" 的效果已经实现.

- **DeFi = 池子**

    [池子是使区块链更加去中心化的方式](https://mirror.xyz/0x8B00cEE42f226B340aF806CD7aaA4c10cc5E0154/ykBrqVxAlJ1YWCuEVurUSpB80isCA1TrHVDAHXl35_s). 矿池、流动性池和借贷池都是将订单聚集在一起的池子. 这是由于技术和性能的限制, 但它也允许流动性差的 DeFi 将资本效率最大化, 因为池子里的钱可以不受限制地流向任何地方.

- [**DeFi = 更好的网络**](https://twitter.com/thiccythot_/status/1597201816675983361)

    [Bots 的存在使验证者更有利可图](https://medium.com/@uri_61495/its-your-move-defi-d693e68c1f87) (AMM Bots 的大部分收入被[分配](https://twitter.com/danrobinson/status/1603163767524556800)给区块节点). 因此, 较高的收入可以吸引更多节点, 网络也变得更加多样化和安全.

    ![](/img/automation/lps.png)


但这些 Bots 的存在确实构成了问题:

- **Bots 仍在夺取用户的利润**

    由于[占主导地位的 Toxic 订单流和区块延迟](https://medium.com/@uri_61495/its-your-move-defi-d693e68c1f87), Bots 自然可以从用户的行动中提取收入. 这与之前的想法相矛盾, 即 DeFi = Bots + AMM, 它有很多优点, 但在某些方面仍不如 CEX ([Curve 可以做到Jump 80%, 这就足够了](https://medium.com/dragonfly-research/what-explains-the-rise-of-amms-7d008af1c399)).

- **Bots 可能一直在夺取 Retail LP 的利润**

    通过 [0x94305](https://twitter.com/0x94305/status/1588539906749407232)、[0xShitTrader](https://twitter.com/0xShitTrader/status/1579510561267929089) 和 [thiccythot_](https://twitter.com/thiccythot_/status/1589022227437039616) 的分析以及 [Uniswap 的官方研究](https://twitter.com/teo_leibowitz/status/1587527337117188101), 我们发现, 作为 LP 的普通用户可能是被 Bots 收割的对象. 根据每笔交易量从小到大 ([后两者在极端市场中明显增加](https://twitter.com/CriptoSpanglish/status/1602150526392467456)), 我们得出[三种交易构成](https://twitter.com/thiccythot_/status/1597201822774886401): 普通用户的交易, Bots 的交易, 以及黑客的交易. 普通用户很好, 可以为 LP 提供正收益; 黑客在这方面也很慷慨, 最终对价格不敏感, 只想快速出手, 所以 LP 可以从这个交易中赚到很多钱. 不过, 黑客还是会认真思考如何获利, 这对 LP 来说是一种伤害 ([虽然这种只占交易的 15%](https://twitter.com/thiccythot_/status/1597201826369400832)). 我们建议深入阅读本段中 DeFi 研究员的分析.

    ![](/img/automation/flow.png)


基于上述观点, 我们可以提出以太坊上最大的 Toxic Flow 制造者: 做市商机器人 (~套利机器人).

### b) DEX 主导性 = Bots

还记得之前被黑的 Wintermute 钱包吗? Wintermute 在 5 月份作为 Market Maker Bot 启用了这个钱包. 到去年 9 月被黑的时候, 它已经是以太坊上第二个最赚钱的地址. 通过做市商, 这个机器人赚了 9000 万美元.

![](/img/automation/wintermute.png)

盈利最多的是 Alameda 的做市商机器人, 它在去年 9 月刚刚暂停运行.

那么, 这些做市商机器人是如何做市的呢? 他们在做跨域套利.

跨域意味着两种情况:

- [**跨链情况**](https://twitter.com/hasufl/status/1595492568157937665): 利用不同区块链之间的价格差异进行套利.

    ![](/img/automation/suave.png)

- **CEX 与 DEX 间场景**: 利用 CEX 和 DEX 之间的价格差异进行套利.

其中, [CEX 与 DEX 间方案占主导地位](https://twitter.com/0xShitTrader/status/1555399654828904448), 有两个渐进的原因:

1. CEX 是最快的, 而链上价格总是有一个区块延迟.
2. [CEX 的价格引领最优 DEX 的订单流](https://twitter.com/0xShitTrader/status/1555411799402504193).

**在 Hyper Oracle 的设想中, 到 DeFi 3.0 时, 所有的 CEX 都将主动或被动地升级为 DEX**. DeFi 协议已经证明了在迈向端到端无信任和安全的浪潮中去中心化的必要性. [CEX 被完全淘汰只是一个时间和过程的问题](https://twitter.com/0xdoug/status/1601601062611587072). 从长远来看, CEX 领先的价格也将被 DEX 领先的价格所取代.

![](/img/automation/cex-dex.png)

因此, 作为一个 CEX 与 DEX 间的套利 Bot, [考虑只执行 Binance 与 Ethereum 之间的交易](https://twitter.com/0x94305/status/1601337685808848901), [将获得多少收益](https://twitter.com/0x94305/status/1601337687431999489)?

- **仅 ETH/USDC 对就可以创造 4000 万美元的利润** (我们讨论的 Wintermute Bot 在大约六个月内总共赚了约 9000 万美元).
- **几乎每个区块都有套利机会** (我们讨论的 Wintermute Bot 在以太坊上每 2-3 个区块就有一次操作).

此外, 还有两个非常有趣的相关套利 (或MEV): [OEV](https://medium.com/api3/oracle-extractable-value-oev-13c1b6d53c5b) ([GMX 主要使用预言机来减少套利](https://twitter.com/thiccythot_/status/1602298869282381824)). 不过, 预言机本身也有套利空间) 和 [JIT](https://uniswap.org/blog/jit-liquidity) (一种类似三明治的套利, 与之前的 Uniswap LP 分析[高度相关](https://twitter.com/0x94305/status/1608162400049692673)), 我们可能会在以后的文章中提到.

## 2. 加入 Bot 阵营

很好, 如果它是这么赚钱, 我也想做一个 Bot.

![](/img/automation/give-me-bot.png)

首先, 建立一个套利做市商机器人的门槛很高, [需要满足以下要求](https://twitter.com/0x94305/status/1601337688950394881), 才能至少保证盈利:

- 链上和链下都有大量的资金
- 用于超快速数据访问的基础设施和 CEX API
- 优秀的风险控制能力
- [场景仅限于以太坊等 "慢速" 区块链](https://twitter.com/0x94305/status/1601337691760603136)

**那么, 我们还能建立什么其他的机器人呢?**

- **[各种MEV Bot](https://www.degatchi.com/articles/entering-the-dark-forest)** ([DEX 狙击](https://github.com/Supercycled/cake_sniper), [CEX 狙击](https://github.com/duckdegen/apebot)...)
- **[MEV Bot 狙击 Bot](https://twitter.com/Slappjakke/status/1596589979412484097)** (MEV 世界中的海龟汤策略)
- **[黑客狙击 Bot](https://twitter.com/bertcmiller/status/1613566397954621442)**
- **[DeFi 清算 Keeper Bot](https://mirror.xyz/etherael.eth/_WKdSZJnGjL348L2bpbYuFzX6H9UChz-MKZ7xp2yYQU)**
- **[各种 Keeper Bot](https://youtu.be/EE4JXOpv9TM?t=202)** ([V2 TWAP 预言机更新](https://mirror.xyz/msfew.eth/qSmnIO_O0OUlvkUfzca_kOrhlaHBHaEtx40D_ZCOC9Q))

**事实上, 制作一个机器人只有两个步骤:**

1. **设计和开发 Bot 的策略**.
2. **运行 Bot**.

### a) [Bot 设计与开发](https://www.degatchi.com/articles/how-to-build-a-mev-bot)

Bot 的策略设计和开发包括几个关键因素:

- **What**: 最终触发的目标函数 (可以是你的 Bot 合约或目标协议的合约)
- **Where**: 最终部署的网络 (由于 gas 成本和网络速度, 可能与最终收入高度相关)
- **When**: 何时触发 (基于时间/链上变量/链下计算结果......)
- **How**: 将上述要素结合起来, 形成一个完整的策略

在开发 Bot 的过程中, 需要满足几个特点:

- 策略的隐蔽性 (防止别人看到你的策略, 与你直接竞争)
- 触发结果的模拟 (确保策略的正确执行)
- 链上合约的优化 (在开销和速度方面, 例如, 下面的 [grim-reaper](https://github.com/massun-onibakuchi/grim-reaper) 是对最常见的清算 Bot 的极端优化. 总是有更多的优化可以做. 有时会涉及复杂的[数学优化](https://noxx.substack.com/p/dex-arbitrage-mathematical-optimisations).)

    ![](/img/automation/bot-optimization.png)


### b) Bot 运行

通常情况下, 为了运行 Automation 或 Keeper 服务, 我们需要第三方服务的参与. [由于以下原因](https://www.degatchi.com/articles/how-to-build-a-mev-bot):

- 需要运行很多区块链基础设施 (快速访问全局状态, 快速 RPC 或中继服务来提交 tx, 订阅智能合约事件, 监控 mempool)
- 需要 Bot 本身的托管环境 (AWS等)

运行它们的主要痛点是:

- **需要太多的区块链基础设施**

    你只是想运行一个简单的 Bot, 但你必须随着它建立一堆服务 (节点、索引服务、MEV 中继...). 如果你使用第三方服务, 你也会有开销问题, 而且速度也不一定够.

- **不稳定和不灵活的托管环境**

    为了保证自动化/机器人的正常运行时间, 托管环境需要稳定. 例如, [MIP63](https://mips.makerdao.com/mips/details/MIP63) 使用 [4 种不同的方法来 rotate](https://www.youtube.com/watch?v=EE4JXOpv9TM&t=548s), 来保证 Keeper 服务的稳定性和正常运行. 同时, [在极端情况下，我们可能需要即时修改代码](https://mirror.xyz/etherael.eth/_WKdSZJnGjL348L2bpbYuFzX6H9UChz-MKZ7xp2yYQU), 这就要求托管环境的开发友好性和部署速度.


## 3. Hyper Oracle 的 zkAutomation

现在, 我们将介绍 Automation 和 Bot 的理想平台: Hyper Oracle 的 zkAutomation.

你可以查看我们的[最新 zkAutomation Demo](https://www.hyperoracle.io/app/zkGraph/2/0xF87ab180aF2C3DdeaFedE31e27d447CE79E0549a). 它是一个基于 ETH 价格波动的机器人, 其中数据源和触发时机完全来自用户所定义的 zkGraph.

通过 [zkWASM](https://medium.com/@hyperoracle/zkwasm-thenext-chapter-of-zk-and-zkvm-471038b1fba6) 和其他 zk 电路, zkAutomation 可以用于任何用例和场景, 包括任何 Automation/Bot 和 Keeper.

![](/img/automation/zkauto-usages.png)

如果你选择加入 Bot 世界, zkAutomation 的 zkGraph 生态和工具可以帮助你:

- **在无代码/命令行的情况下定义自动化/机器人的几个元素**
- **轻松定义链外的触发条件, 并确保基于 zk 的 Automation 触发是完全无需信任和安全的**
- **实现跨巨大区块间隔的完全端到端可验证的 Automation 触发 (由 [zkPoS](https://hyperoracle.medium.com/zkpos-end-to-end-trustless-65edccd87c5a) 提供)**

zkAutomation 提供了一个托管环境, 帮助您实现 Automation/Bot:

- **无需运行额外基础设施**
- **去中心化网络中, 每个 Automation/Bot 都会有 100% 的正常运行和灵活的配置**

因此, 有了 zkAutomation, 您的 Automation/Bot 有无数的好处和新的场景.

![](/img/automation/zkauto-advantages.png)

我们很期待看到开发者将如何利用 zkAutomation 和 zkIndexing 构建端到端的去中心化应用, 并在未来绘制 DeFi 3.0 的新时代. 来和我们一起 Build! 我们很高兴一起讨论和探索新想法, 如果你有相关需求, 可以提交这个[表单](https://forms.gle/FE79m7zh9rWKFmcB7).

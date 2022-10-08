# 🏠 读懂App-chain: 优势与缺点

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/L6t0LCStQ5bRxVgtIqhFSw)上阅读).

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-app-chain-on-chain-app-14ae8d795047).

> 22/10/08: [读者所做的概括图](https://twitter.com/kiki520_eth/status/1577668703704862720)

![](/img/app-chain/rgc.jpeg)

## 0. 更多的 Rollup, 更多的链

在 Rollup 的叙事越来越吸引目光, 同时整个行业对 App-chain 性能、主权、部署的要求越来越高的过程中, StarkEx 的 App-rollup 服务、 Celestia 的可复用 Layer1 安全层、与其他高性能 DA 方案成为了搭建 App-chain 中的主流选择.

![](/img/app-chain/avax.png)

**过去 App-chain = App as an L1**: 之前, 一个应用要自己做一条链, 需要耗费很大的开发成本, 如果是 PoS 机制, 那么还得有额外的资本支出用于启动初始的节点. 虽然有各种 SDK 和共识引擎的存在, 做一条链依旧是一个非常麻烦的事情.

**现在与未来 App-chain = App as an L1 + App as a Rollup + App as a Validium…**: 光是基于以太坊的 Layer2 就有 [25 个](https://l2beat.com/scaling/tvl/). 其中包括了一半应用链 (或者叫 App-rollup, 比如以前的 dYdX) 和通用 Layer2 Rollup (比如 Arbitrum). 在 Celestia 等项目的成熟过程中, 我认为未来会有好几倍的新 Rollup 被构建出来.

![](/img/app-chain/rollup.png)

除此之外, Cosmos 上的 App-L1, Avalanche 上的 Subnet 也会层出不穷.

无论是现有的应用协议转变成 App-chain (类似 Uniswap 可以直接变成 Unichain), 还是应用直接以 App-chain 的形式启动 (dYdX 以 App-rollup 启动, 转变成 App-L1), 最终都意味着**未来一两年内可能会有几十个新的链 (L1, App-chain, App-rollup, Subnet)**.

## 1. 应用链 > 链上应用

最近, Dan Elitzer 以 Uniswap 为例, 分析了 [Uniswap 为什么一定会转变成一条单独的应用链](https://medium.com/nascent-xyz/the-inevitability-of-unichain-bc600c92c5c4).

**Uniswap 协议收取的[七日平均费用](https://cryptofees.info/)仅次于以太坊主网, 是 BSC、Aave、Bitcoin、GMX 的总和**. 作为这么一个拥有稳定收益、运行良好、人人使用的 AMM 协议, Uniswap 为什么可能会从链上 Protocol 变成 App-chain 呢?

对于 Uniswap 来说主要有四个好处:

### a) 代币价值捕获

![](/img/app-chain/uni.png)

**UNI 代币本质上是个 Meme Coin**, 目前只能用于治理. 这对 UNI 持有者来说, 极大程度上 UNI 的价值无法直接捕获 Uniswap 协议和生态的增长和收益. 根本原因我认为主要还是监管的问题. 由于产品本身的功能比较敏感, 为了合规, Uniswap 的组织架构也比较特殊.

Uniswap V2 和 V3 都有 [Protocol Fee 的概念](https://docs.uniswap.org/protocol/concepts/V3-overview/fees#protocol-fees), 但现在这个 Fee Switch 没有被通过治理方式来打开. 如果打开, 那么直观来说, 一年可以直接给 UNI 持有者带来几亿美元的收益 (不考虑对 LP 收益和流动性的副作用). 这对 UNI 代币的价值来说是一个巨大的加成.

同时 Uniswap 如果变成一条 PoS 的链, 那么 UNI 代币可以作为质押代币与 gas 代币, 对 UNI 的价值捕获可以起非常积极的作用.

### b) 协议经济机制

![](/img/app-chain/architecture.png)

**对于一个 Uniswap Pool 来说, 最直观的两个参与者就是用户和 LP, 但是对于整个协议的使用来说, 参与者还包括网络节点以及 MEV Bots.**

![](/img/app-chain/mev.jpeg)

对于一个用户来说, 进行一笔 Swap 需要很多方面透明与不透明的手续费:

- Swap Fee: 付给 Liquidity Provider. ~0.171%.
- Gas Fee: 付给以太坊网络节点. ~0.235%.
- MEV Tax: 付给 MEV Bots 与以太坊网络节点 (上图中 50% 以上的交易量都是 MEV Bot, 他们偷偷搜刮用户的收益). ~0.254%.

这些费用加在一起与中心化交易所对比, 是很高的.

对于这三个 Fee 来说, Uniswap 目前其实是没有办法直接调控的.

但是如果 Uniswap 转变成 App-chain, 那么就可以直接对 Gas Fee 与 MEV Tax 进行优化:

- Gas Fee: 付给 UNI 网络节点. < 0.235%
- MEV Tax: 付给 MEV Bots 与 UNI 网络节点. 同时可以通过新的机制来减少 MEV Tax 总和. < 0.254%

**这样之后, Uniswap 可以掌握对手续费和协议经济机制的主动权, 通过治理等手段来对经济机制进行主动调控.**

### c) 交易体验

如果作为一条独立的 App-chain, 那么 Uniswap 完全可以通过新的技术来进行协议的构建, 而不需要考虑 EVM 兼容、通用合约部署等技术维度. 所有的链上体验都直接赋能给协议的功能与协议周边生态的构建.

对于用户来说, 可以体验到:

- 更高的 TPS: 链可以专门对交易等操作进行优化.
- 更低的手续费: 更低的 MEV Tax + 更低甚至像未来的 dYdX 一样为 0 的 Gas Fee.
- 更好的整体系统: 生态会更加垂直地被构建, 一切都为了链与 Uniswap 本身.

### d) 应用主权

就像 dYdX 从 StarkEx 出逃一样, **Uniswap 如果变成一条 App-chain, 那么就可以聚集以上的优点, 对自己的代币、整个协议的功能与升级、整个网络与协议的治理、整个生态的构建与基础设施掌握更多的主动权**.

### e) App-Rollup 的附加特性

**如果 Uniswap 变成一个基于以太坊的 App-rollup, 那么就有更多的优点了, 比如性能可以更大程度地提高, 整个链的构建更加快捷与轻量级, 且也不会与以太坊的生态离得太远**.

但是对以上其他几个优点可能有削弱, 比如还是需要把大部分的价值 ([占 L2 总 Cost 的 ~60%](https://twitter.com/apolynya/status/1565173169987588096)) 都作为 DA Fee 返还给 Layer1, Gas Fee 的支出没有办法更加显著地减少, 如果单 Sequencer 的情况下, 那么就意味着大部分的 MEV Tax 都被它捕捉了.

## 2. 应用链的缺点

尽管应用链形态这么多优点, 但是相比链上应用形态也有几个小缺点, 也可以引出了我们下一节中想要讨论的互通性问题:

### a) 共识与生态

**一个链必须要有 Social Consensus. 而目前的状况下, 一个应用如果横空出世, 直接以链的形式上线, 很难有共识**. 因此非常多的应用才以协议或者 Rollup 的形式登陆到以太坊网络上, 借助以太坊已有的安全性和社会共识.

以 Uniswap 为例, 作为 Vitalik 亲自取名的应用, 它与以太坊绑定地非常深, 如果从以太坊主网内 “逃离”, 那么必然受到很多以太坊方面与用户的阻力.

同时, **Uniswap 最大的价值是在一个全球性的无需许可的最大的去中心化网络 (以太坊) 无需许可地发行资产 (ERC-20)**, 如果它变成是在自己的链上发行资产的话, 吸引力会稍微小一些. 相比之下, dYdX 这种专用的 Trading Platform 做应用链的意义更大一些.

### b) 互通性

回到我们一开始所说的观点, 之后会有几十条新的 App-L1, App-rollup, App-subnet. **如果都变成链, 形成自己的网络, 那么和 Web2 的网络的区别就更小了**…

![](/img/app-chain/walled-garden.png)

同时我认为这些 App-chain 中的 App-rollup 很多都会变成 Sovereign Rollup. 那么它们就没有了以同一个 Layer1 底层搭建自带的 Trust-minimized 桥梁 ([或者](https://twitter.com/AgoLajko/status/1536732016040869890)), 从而以其作为互通层. 它们需要通过 Cevmos 等架构来通过 Trusted Bridge 与其他 Cluster 或者带 IBC 网络实现互通, 架构上没那么简洁, 同时概念也比较新.

![](/img/app-chain/celestia.png)

这个事情我认为确实看上去非常好, 但是真正工程实现上来说会非常麻烦. 本身以太坊上的 Secured Rollup 就只需要构建自带的 L1-L2 Bridge 就可以, 但是现在却需要 Evmos Settlement Layer 与其他网络 (或者几个 Evmos 之间互相) 构建桥梁.

## 3. 应用链与多链时代的互通性解决方案

互通性问题的例子, 以 Uniswap 为例, 极端情况下, 如果它的主体变成链, 大家要获取最佳的报价可能得在 Swap 的时候先跨链到它上面再 Swap 再跨回来.

对于应用链 + 多链时代的互通性的解决方案, 我想到的最有效果几个方案:

### a) 复制粘贴

**1. 每个链上都主动 Fork 重点协议**

也就是延续现在 Uniswap 所采用的方案, 在每个链上依旧部署一个新的 Uniswap 协议. 自己的 App-chain 则作为一个专用于交易的 Add-on. 这其实也是类似 USDT, USDC 等资产的做法.

这个做法其实可以说是没解决问题, 没解决互通性, 只是把自己克隆了好几份, 每一个协议都拥有割裂的流动性和交易活动. 它们只是都以 Uniswap 的名字来运行.

然而, 这个方案其实我是比较赞同的, 并不反对. 因为 Web2 系统中流动性也是一样分散的, 或者说麦当劳也是在各个城市 Fork (虽然它肯定没必要做自己的 “App-chain”).

**2. [REDACTED]**

[REDACTED]

### b) 创建链接

**1. 每个链都接入 IBC**

![](/img/app-chain/multi-chain.png)

[每个应用链 (和链) 都接入 IBC](https://twitter.com/dystopiabreaker/status/1576328090011115520) 是一个非常简单粗暴的方案, 可以直接地解决互通性问题.

这个方案的缺点就是:

- 现有的链不一定能直接连 (比如[以太坊要连接 IBC 的话就需要 ZK](https://ethresear.ch/t/bringing-ibc-to-ethereum-using-zk-snarks/13634)), Cosmos 链性能不一定够 (所以 App-rollup)
- 用户体验实际上还不如前一个方案 (虽然 IBC 很快, 但是来来去去还是要十几秒, 所以两种方法可能需要结合)

**2. 每个链上都有 Trust-minimized Bridge**

我们直接忽略并非 Trust-minimized Bridge 的互通方案, 要做到互通且安全, 那么就需要 Light Client Bridge (本质上原理和 IBC 一致), 或者 [L3 之间的 Trustless Bridge](https://geometryresearch.xyz/notebook/the-road-to-slush).

这个方案的难点主要是各种验证 (Validator, Signatures) 的开销太大, 没法链上 (EVM) 进行. 但是验证 ZKP 的开销更小, 因此最近有[很多家在做 ZK Light Client](https://www.youtube.com/watch?v=5hO9NbtFc0g&t=21844s).

![](/img/app-chain/zk-light-client.png)

对这个方向我非常认同, 但是实现难度比上一个还要大, 是很长久的解决方案.

![](/img/app-chain/zk-bridge.jpeg)

## 4. 总结

链上应用转变为应用链绝对是大势所趋, 能带来更好的主权、代币价值捕获、链内的体验提升.

然而, 几十条新增的链会创造流动性割裂和互通性问题. 要想解决这个问题, 要么通过 Fork 基础设施到不同链上, 要么接入可信互通协议.

**应用链的火热代表着区块链或许走上了 Web2 时代应用 “各自为政” 的道路, 但依旧没有改变去中心化和公开透明的大方向.**

## Related Links

0:

[https://twitter.com/nickwh8te/status/1576683671267856384](https://twitter.com/nickwh8te/status/1576683671267856384)

[https://l2beat.com/scaling/tvl/](https://l2beat.com/scaling/tvl/)

1:

[https://medium.com/nascent-xyz/the-inevitability-of-unichain-bc600c92c5c4](https://medium.com/nascent-xyz/the-inevitability-of-unichain-bc600c92c5c4)

[https://cryptofees.info/](https://cryptofees.info/)

[https://docs.uniswap.org/protocol/concepts/V3-overview/fees#protocol-fees](https://docs.uniswap.org/protocol/concepts/V3-overview/fees#protocol-fees)

[https://twitter.com/apolynya/status/1565173169987588096](https://twitter.com/apolynya/status/1565173169987588096)

2:

[https://twitter.com/AgoLajko/status/1536732016040869890](https://twitter.com/AgoLajko/status/1536732016040869890)

[https://twitter.com/OisinKyne/status/1576180356818296832](https://twitter.com/OisinKyne/status/1576180356818296832)

[https://twitter.com/DittoJoBrr/status/1576606365040013312](https://twitter.com/DittoJoBrr/status/1576606365040013312)

[https://forum.celestia.org/t/an-open-modular-stack-for-evm-based-applications-using-celestia-evmos-and-cosmos/89](https://forum.celestia.org/t/an-open-modular-stack-for-evm-based-applications-using-celestia-evmos-and-cosmos/89)

[https://members.delphidigital.io/reports/pay-attention-to-celestia/](https://members.delphidigital.io/reports/pay-attention-to-celestia/)

3:

[https://twitter.com/dystopiabreaker/status/1576328090011115520](https://twitter.com/dystopiabreaker/status/1576328090011115520)

[https://ethresear.ch/t/bringing-ibc-to-ethereum-using-zk-snarks/13634](https://ethresear.ch/t/bringing-ibc-to-ethereum-using-zk-snarks/13634)

[https://geometryresearch.xyz/notebook/the-road-to-slush](https://geometryresearch.xyz/notebook/the-road-to-slush)

[https://www.youtube.com/watch?v=5hO9NbtFc0g&t=21844s](https://www.youtube.com/watch?v=5hO9NbtFc0g&t=21844s)

[https://twitter.com/ingo_zk/status/1576995003251195904](https://twitter.com/ingo_zk/status/1576995003251195904)

![](/img/app-chain/thumbnail.png)

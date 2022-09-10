# 🧙‍♂️ 读懂TWAP: 下一代预言机

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/N1n0my0dCEFiQdFPyy7azA)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-crypto-native-oracle-twap-250267995e4f).

## 0. Oracle 原理与问题

区块链的数据来源有两个: 一个是链上数据 (如地址持有的 ETH 的数量), 另一个是链下数据 (如 ETH 现在在交易所的价格). 要获取后者, 就需要预言机将这个数据告诉给合约.

![](/img/twap/oracle.png)

为什么互联网也需要有 “网下” 数据, 但没有预言机问题呢? 因为区块链上的数据需要经过共识, 因此预言机上传上来的数据也需要是可信的, 而互联网 (Web2) 上的数据其实本身都是中心化的.

**预言机所需要解决的是从数据源到处理到喂价的信任问题, 通常不是数据本身的问题.**

## 1. 链下 Oracle

预言机的信任问题包含了数据源与数据获取与喂价, 针对它们分别有以下解决方案:

### a) 数据源: 可信联盟/去中心化网络

我认为数据源可信是预言机信任问题最重要的一个点, 但是这些数据很多都是链下的, 链下的数据其实是无法证明是完全可信的, 就像你无法证明 ETH 的价格一定是某个值一样. 无论是采用可信联盟还是去中心化预言机网络, 都无法生成一个完全没有套利空间或者 OEV 的价格.

唯一能解决数据源可信问题的就是在未来如果流动性和经济活动大部分都聚集在链上, 而不是交易所的时候, 去完全采用链上预言机 (Uniswap TWAP), 这样可以保证数据源是 “Crypto-native” 和完全可信可验证的.

### b) 数据获取与喂价: 可信计算

Town Crier 使用 SGX 来保证数据的获取可信; Empiric 使用 StarkNet 上的合约来保证数据的获取和计算可信, 且数据源会直接讲价格数据发送到 StarkNet 上的其他合约中, 从而达到第一手数据, [保证数据源的可信度](https://medium.com/@EmpiricNetwork/empiric-network-the-next-generation-of-oracles-data-directly-from-the-source-514b46a53f3); Redstone 通过 SmartWeave 智能合约让任何人都可以成为数据处理者, 且使用 Arweave 存储价格数据从而保证数据可信和可以在事后被验证; Chainlink 使用 Chainlink 网络的链上聚合合约来计算出数据结果, 再发送到区块链上.

任何应该上链的应用最终都会被上链, 这样才能满足区块链透明化, 可验证, 无需准入门槛, 去中心化的特点.

**完全链上化的价格预言机会彻底解决数据源和数据获取与喂价问题, 让 DeFi 应用给所有人带来经济活动上的自由.**

## 2. [TWAP (Time-Weighted Average Price)](https://docs.uniswap.org/protocol/V2/concepts/core-concepts/oracles)

TWAP 是 Uniswap 所推出的价格预言机. 它的数据源完全来自 Uniswap 协议自身的交易数据, 数据的获取和处理也是完全在链上进行, 开发者也可以直接在链上使用 Uniswap TWAP 进行代币价格计算.

**TWAP 的原理是基于每个区块的最后一笔 tx 时的代币价格, 结合区块时间, 计算出协议整个历史中一个代币的价格总和, 从而使用时可以重新计算出一个平均价格.**

![](/img/twap/twap-0.png)

使用最后一笔 tx 时的价格, 是为了让攻击者的攻击成本不可预测, 从而增加预言机安全性. 因为就算攻击者在一个区块的最后一笔交易中控制了价格, 他也无法预知下一个区块中的相关活动的排序等信息. 根据[链上分析](https://arxiv.org/abs/1912.01798), 这种跨区块的攻击还没有发生过. (剧透一下, PoS 好像就不一定, 后文会说).

加入时间的变量, 是为了进一步增加攻击成本, 通过牺牲对即时价格的反映, 保持价格的整体稳定性和安全性.

## 3. [Uniswap V2 TWAP](https://mp.weixin.qq.com/s/h2D4oyq11Q2HwG0SU9SBbQ)

V2 TWAP 的使用可以是直接拿到一个时间段内的总价变化, 除以设定的时间段 t, 就可以得出一个平均价格, 作为代币的价格. 每隔一段时间 (不一定是 t, 可以用滑动窗口算法, 延迟就更小), 则重新获取最新时间段内的价格.

![](/img/twap/twap-1.png)

对于 TWAP 来说, 时间参数越长, 更新越慢, 但安全性越高, 因为价格操纵的成本基本上就是时间区间内在每个区块上套利和发送交易的开销.

## 4. [Uniswap V3 TWAP](https://mp.weixin.qq.com/s/1axeS5XLnZ9wwt4Yix3sfw)

**V2 TWAP 是用时间段内的总价 (price * time), V3 是时间段内的总 tick (tick * time).**

**V2 中我们提到了要每隔一段时间去重新获取价格, 这可能就需要 Keeper 的参与, Uniswap V3 解决了这个问题.**

V3 直接通过一个可定义长度 (视需求和网络时间戳行为不同而定) 的数组来存储区块时间戳和总 tick, 当合约产生 Swap 等交互时, 这个数组就会被更新, 无需 Keeper 的主动触发.

除此之外, 使用时还需要把 tick 转换成价格, 稍微比 V2 难用一点.

## 5. TWAP 的限制

既然 TWAP 那么好用, 那么可信且可验证, 完全去中心化, 那为什么 Chainlink 被如此广泛采用呢?

![](/img/twap/euler.png)

写本文的动机其实就是看到了[推特上有人说](https://twitter.com/ChainLinkGod/status/1567529586405310464), [Euler Finance 从 TWAP 切换到 Chainlink](https://blog.euler.finance/euler-integrates-chainlink-to-get-ready-for-the-merge-9b97a056f67f) 是一种升级 (注意此人 ID… = =).

他称 TWAP 是非常不安全的, 因为 PoS 之后可以进行多区块的预言机操控, 这个其实是可以完全被解决的.

相比之下, 我认为 TWAP 完全去中心化和完全链上操作的优点会比 Chainlink 好很多, 在长期看来, 如果没有显著的需求上的差别 (比如你要把天气数据搬到链上), 那么最好的选择还是 TWAP.

TWAP 和 Chainlink 的[对比如下](https://smartcontentpublication.medium.com/twap-oracles-vs-chainlink-price-feeds-a-comparative-analysis-8155a3483cbd):

![](/img/twap/comparison.png)

**TWAP 被全面碾压, 但我个人认为, 去中心化和安全性是 1, 而其他的因素是 0, 完全链上化是一种趋势. 任何人都可以做一条比以太坊快非常多, 便宜非常多, 支持更多语言的智能合约平台, 但却无法杀死以太坊.**

## 6. PoS 后 TWAP 的风险

ChainLinkGod 所说的 PoS 网络中对 TWAP 预言机的攻击问题, Euler Finance 的工程师自己就[知道潜在解决方案](https://ethresear.ch/t/median-prices-as-alternative-to-twap-an-optimised-proof-of-concept-analysis-and-simulation/12778), Uniswap 的工程师也[考虑到了](https://drive.google.com/file/d/1fuuKGWdaVdXQoN_d4Riq4rsSB5OtzaJA/view).

PoS 后, 因为出块者可预测了, 所以更容易结合以下方式进行多区块攻击:

- 大 Validator 可能被连续分配区块
- 通过 Flashbot 来发送 Private tx
- Multi-block bundle

PoW 和 PoS 的不同情况下, 针对 V3 ETH/USDC 交易对的 30 分钟时间窗口 (144 个区块) 的 TWAP, 要操纵价格造成 30% 的波动, 需要以下成本:

- PoW: 23.7 万亿美元
- PoS (连续控制窗口内 2 个区块情况下): 23.7 万亿美元
- PoS (连续控制窗口内 3 个区块情况下): 95 亿美元
- PoS (连续控制窗口内 5 个区块情况下): 1.03 亿美元

控制越多区块, 操纵的成本就显著地越低, 那么解决方案是啥呢?

**暂时性解决 PoS 后 TWAP 的操纵风险的方法是:**

1. **选择更大的时间窗口**
2. **选择流动性更好的池子.**

**完全解决 PoS 后 TWAP 的操纵风险的方法是:**

- **[用 Median 而不是 Average](https://ethresear.ch/t/median-prices-as-alternative-to-twap-an-optimised-proof-of-concept-analysis-and-simulation/12778).**

这样操纵者就需要控制超过半数的区块, 才能操纵价格, 对比上面的情况, 就需要控制 73 个区块, 这个数字应该大到无法表述了.

## 7. 未来的预言机

我认为在未来, 一个完美的 “预言机” 需要:

- 完全来自链上的可验证数据源 (那么就是基于 TWAP), 且支持多链.
- 通过 ZK 或完全链上可信计算进行数据获取和处理.

但是这些可能就需要处理以下几个现存或将会出现的小问题:

- 满足种类, 精度, 时效性需求的链上数据 (当然 Chainlink 等一样有价格延迟的问题, 而且本身就是为了数据安全性而牺牲时效性)
- 彻底解决 TWAP 数据源价格操纵 (更深的池子, 更大的窗口, 使用中位数而不是平均数)
- 整个预言机信任短板的消除 (多签? 网络去中心化程度? [不靠谱的 Fisherman 机制](https://ercwl.medium.com/whats-wrong-with-the-chainlink-2-0-whitepaper-for-simpletons-d50f27049464)?)
- 数据的跨链获取与喂价, 多链场景中链上数据的可信传输
- 数据源多样性 (比如只用 Uniswap V2 或者 V3 不太好)
- 可信环境下执行的 Keeper (如果需要的话)

**我相信在未来, 越来越多的经济活动会发生在链上, 越来越多的价格数据和交易对会存在于 DEX 上, Uniswap 也就可以提供更好的 TWAP, 也就会有其他方案能基于 TWAP 实现我设想中的完美预言机, 最终达成一个 100% 去中心化的金融系统.**

![](/img/twap/matt.png)

## Related Links

0:

[https://mirror.xyz/0x8B00cEE42f226B340aF806CD7aaA4c10cc5E0154/C4ik-DIDHZQ8krLB8D9t9-SrdhuTn1W8NKRLqPpoMmg](https://mirror.xyz/0x8B00cEE42f226B340aF806CD7aaA4c10cc5E0154/C4ik-DIDHZQ8krLB8D9t9-SrdhuTn1W8NKRLqPpoMmg)

1b:

[https://medium.com/@EmpiricNetwork/empiric-network-the-next-generation-of-oracles-data-directly-from-the-source-514b46a53f3](https://medium.com/@EmpiricNetwork/empiric-network-the-next-generation-of-oracles-data-directly-from-the-source-514b46a53f3)

2:

[https://docs.uniswap.org/protocol/V2/concepts/core-concepts/oracles](https://docs.uniswap.org/protocol/V2/concepts/core-concepts/oracles)

[https://arxiv.org/abs/1912.01798](https://arxiv.org/abs/1912.01798)

3:

[https://mp.weixin.qq.com/s/h2D4oyq11Q2HwG0SU9SBbQ](https://mp.weixin.qq.com/s/h2D4oyq11Q2HwG0SU9SBbQ)

4:

[https://mp.weixin.qq.com/s/1axeS5XLnZ9wwt4Yix3sfw](https://mp.weixin.qq.com/s/1axeS5XLnZ9wwt4Yix3sfw)

5:

[https://twitter.com/ChainLinkGod/status/1567529586405310464](https://twitter.com/ChainLinkGod/status/1567529586405310464)

[https://blog.euler.finance/euler-integrates-chainlink-to-get-ready-for-the-merge-9b97a056f67f](https://blog.euler.finance/euler-integrates-chainlink-to-get-ready-for-the-merge-9b97a056f67f)

[https://smartcontentpublication.medium.com/twap-oracles-vs-chainlink-price-feeds-a-comparative-analysis-8155a3483cbd](https://smartcontentpublication.medium.com/twap-oracles-vs-chainlink-price-feeds-a-comparative-analysis-8155a3483cbd)

6:

[https://ethresear.ch/t/median-prices-as-alternative-to-twap-an-optimised-proof-of-concept-analysis-and-simulation/12778](https://ethresear.ch/t/median-prices-as-alternative-to-twap-an-optimised-proof-of-concept-analysis-and-simulation/12778)

[https://drive.google.com/file/d/1fuuKGWdaVdXQoN_d4Riq4rsSB5OtzaJA/view](https://drive.google.com/file/d/1fuuKGWdaVdXQoN_d4Riq4rsSB5OtzaJA/view)

[https://ethresear.ch/t/median-prices-as-alternative-to-twap-an-optimised-proof-of-concept-analysis-and-simulation/12778](https://ethresear.ch/t/median-prices-as-alternative-to-twap-an-optimised-proof-of-concept-analysis-and-simulation/12778)

7:

[https://ercwl.medium.com/whats-wrong-with-the-chainlink-2-0-whitepaper-for-simpletons-d50f27049464](https://ercwl.medium.com/whats-wrong-with-the-chainlink-2-0-whitepaper-for-simpletons-d50f27049464)

[https://twitter.com/matthuang/status/1567383047858966528](https://twitter.com/matthuang/status/1567383047858966528)

![](/img/twap/thumbnail.png)


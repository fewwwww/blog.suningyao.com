# 📒 读懂读懂Hyper Oracle

> English Version: [Mirror](https://mirror.xyz/msfew.eth/YVSRgpXoSMD3tBkMb2JBGcR1PDgaR-WZpxzoS7yr_4g).

Hyper Oracle 白皮书发布也已经过去十天了, 本文将对 Hyper Oracle 白皮书的一些内容进行解释和补充. 原始内容来自[我的推特](https://twitter.com/msfew_eth/status/1635989290835640321).

## I/O Oracle 的命名

I/O Oracle 的数据流其实是先 Input Oracle, 再 Output Oracle. 它不叫 O/I, 因为 O/I 比 I/O 更不常用. 此外, 不会有真正输入然后输出 Oracle 的组合. 那更像是两个独立的 Oracle.

## ZK 和收据的例子

ZK 只是证明计算的有效性, 所以 “购买商品的价格” 是由数据源保证的, 而不是直接由 zk 保证. 在 Hyper Oracle 中, 数据源的安全性和有效性由链上数据 (实际来源) 和 zkPoS (来源获取方式) 来保证.

## 使用 zkIndexing 的另一个优势

在 The Graph 的 Indexer Explorer 上, 索引器每天赚取的索引奖励不到 1 美元...... 因此, 由于缺乏激励, 它基本上仍在迫使开发人员 “运行自己的节点”. zkIndexing 提供了一种无需信任且去中心化的托管服务的解决方案.

## zkGraph 的现有工具与生态

所有的 Subgraph 工具可以无缝地与 zkGraph 一起使用. 所以所有 The Graph 的东西 (如它们发的 [grant project](https://forum.thegraph.com/t/the-graph-foundation-2022-annual-grants-report/4133)) 都可以赋能于 zkGraph.

## 证明队列

网络本身被分解为单独的作业 (zkPoS、zkGraph_N...). 如果一个节点为一项工作生成证明并收集奖励. 其他人会自发地做其他证明以获得激励. 这可以让 >= 1 个节点认领所有证明和执行. 这里不考虑递归、聚合和并行化等神奇的技巧.

## Automation 的必要性

我们有 14 种方法来[转账](https://hackmd.io/@agostbiro/SksOybaJh), 但本质是某人 (人或机器人或任何东西) 必须触发链上签名. 为了保持协议运行, 开发人员需要自动化来进行触发一些智能合约调用.

## Price Feeds 总是 Input Oracle

即使数据来源是关于链上资产的数据, 价格仍然来自 CEX 之类的地方. 它仍然符合 Input Oracle 的定义, 具有来自链下的数据源 (即使是关于链上数据).

# 💬 对于 UTXOracle 的讨论

> English Version: [Discussion on A Very Cool Price Oracle](https://mirror.xyz/msfew.eth/KrQ6NKUXXFIACtATHZi9A35KM9fIrp8JN3HUNLNQPDA).

## 讨论

### 10:42 pm - me

这个挺有意思, 完全无第三方参与的价格预言机 ([UTXOracle.py](https://twitter.com/SteveSimple/status/1704864674431332503)). 原理是对比特币每个区块中的交易进行统计学分析 (eg. 用户通常会发送总价为 100 美元这样整数的 BTC 转账), 从而反推出当日的 BTC 价格.

### 10:56 pm - Fren

这个偏离多远, 而且很容易被操控, 不过确实很有趣.

### 10:59 pm - me

作者说 “it's very accurate. It's not clear which exchange price is the "right" price. But it's right in the middle of all of them. Feel free to check yourself”.. 限制还是挺多的: 1. 必须人为先设置一个 min 和 max, 所以比如 2020 年前的价格没法预测. 2. 需要足够多的 tx 样本, 因此目前只能生成每日价格.10:59 PM

### 11:00 pm - Fren

这个听起来, 就可以作为 price feed 了, 需要在统计学上算下操纵的代价.

### 11:02 pm - me

其实以太坊上的话, 直接用 uniswap 的价格好多了.... 但是这个是为了在纯比特币节点上实现, 所以用这个方案

## 相关链接

UTXOracle.py: [https://twitter.com/SteveSimple/status/1704864674431332503](https://twitter.com/SteveSimple/status/1704864674431332503)

GitHub Repo: [https://github.com/Unbesteveable/UTXOracle](https://github.com/Unbesteveable/UTXOracle)

Replicated Heatmap for Ether: [https://twitter.com/bantg/status/1705260495920341052](https://twitter.com/bantg/status/1705260495920341052)

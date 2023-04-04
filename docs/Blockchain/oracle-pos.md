# 🤔️ 预言机网络的PoS不安全

> 本文为Hyper Oracle撰写, English Version: [Mirror](https://mirror.xyz/).

## TL;DR

- 最近一次[金额为 25M 的黑客攻击](https://twitter.com/samczsun/status/1642848556590723075)揭示了应用层 MEV 捕获的收益与 PoS slashing 成本之间显著的不匹配.
- 攻击的成本与收益之间的巨大差异可能会影响网络系统本身的安全性.
- 在预言机网络中, PoS 与应用程序的安全性直接相关, 因为预言机网络提供的是数据服务, 而不是像以太坊那样托管中立的计算平台.
- Hyper Oracle 是一种使用 ZK 替代 PoS 并通过基础层区块链的安全性保护应用程序的预言机网络.

## 0. 背景

### a) 低成本 (在网络中被 slash) 和高利润 (在网络中攻击应用)

在我们[最近发布的白皮书](https://mirror.xyz/hyperoracleblog.eth/qbefsToFgFxBZBocwlkX-HXbpeUzZiv2UB5CmxcaFTM)中, 我们讨论了传统预言机网络的问题. 其中之一是 “攻击成本低, 攻击利润高”. 如果预言机网络的代币价格或质押要求过低, 攻击这些协议可能会带来非常高的潜在利润, 而攻击预言机网络的成本却很低.

这个安全问题的根本原因是[预言机网络](https://ethresear.ch/t/defining-zkoracle-for-ethereum/15131) (也称为中间件网络) 的质押和惩罚 (Stake and Slash) 机制.

### b) 质押和惩罚术语

为了保持一致, 我们将使用 “PoS” (权益证明) 来指代预言机网络的质押和惩罚机制. 然而, 传统区块链网络中的 PoS 和预言机网络的质押和惩罚机制之间存在一些小的差异.

### c) 预言机网络中的 PoS

我们在我们的文档中讨论了传统预言机网络中的 PoS 工作方式 (参见[这里](https://docs.hyperoracle.io/resources/faq#what-are-security-mechanisms-for-other-oracle-networks)). 这些网络的安全性是基于 PoS 机制的.

PoS 主要包括两个组成部分:

- 质押 (Staking): 节点必须锁定代币才能加入网络.
- 惩罚 (Slashing): 不良节点将失去抵押的代币.
    - 挑战 (Challenge): 举报不良节点并提供证据.
    - 仲裁 (Arbitration): 对挑战进行裁定.

虽然质押类似, 但与惩罚相关的机制不同.

在 Output Oracle (如The Graph) 中, PoS 中的挑战机制称为 fisherman 机制 ([文档,](https://thegraph.com/docs/en/network/indexing/#what-are-disputes-and-where-can-i-view-them) [代码](https://github.com/graphprotocol/contracts/blob/dev/contracts/disputes/DisputeManager.sol)**).** 该机制类似于 Optimistic Rollup 的欺诈证明, 但缺乏可验证性和去中心化. 具体而言, 挑战期为一周, 参与者可以通过抵押代币对节点操作者 (索引者) 的计算 (索引或查询) 和结果提出挑战, 然后由一个仲裁员委员会决定是否接受挑战, 并对挑战者或节点操作者进行惩罚.

而像 Gelato Network 和 Keep3r Network 这样的 I/O Oracle 则使用基于治理的惩罚机制来保障安全性. 然而, 其中一些目前[不是无许可的](https://docs.gelato.network/introduction/executor-operators#who-can-become-an-executor), 需要法律约束才能操作节点. 对于那些将[治理和 PoS 作为安全机制](https://docs.keep3r.network/roles/governance)的网络, 参与者必须在其治理平台上 (通常是一个论坛) 对节点操作者 (执行者) 提出挑战, 而成员将会人工审核挑战. 对我来说, 这感觉就像下面的这个[梗图](https://twitter.com/GwartyGwart/status/1642921139474411523)**.**

![](/img/oracle-pos/meme.png)

## 2. 以太坊上的 2500 万美元黑客活动

### a) 背景知识

首先, 让我们定义一些有关的术语:

- MEV: 矿工/最大可提取价值 (Miner/Maximal Extractable Value). 这是用户或网络节点通过利用其他用户的行为可以获得的额外收入.
- Flashbots: 一种软件, 允许用户在不干扰其他人正常使用网络的情况下提取 MEV. MEV 机器人使用 Flashbots 来获取 MEV, 而节点通过 Flashbots 处理 MEV 机器人发送的交易, 从中获得一定的 “贿赂”.
- Sandwich Attack: 一种针对在 AMM 上交易的用户的 “有害” MEV 活动. 它通过在多个交易中夹击用户的交易来提取利润.
- 以太坊 PoS: 将 ETH 质押以成为网络上的节点, 可以获得质押收入并通过 MEV 获得收益. 然而, 在网络上的不良行为可能导致节点的质押被削减.

### b) 黑客事件

简单来说, 一名黑客通过利用 Flashbots 的漏洞并利用以太坊 PoS 机制, 从 MEV 机器人中获得了超过 2000 万美元的利润.

如果你想对这次黑客攻击进行详细且技术性的审查, 可以查看 samczsun 的[推文](https://twitter.com/samczsun/status/1642848556590723075). 以下是简单的故事梗概.

[黑客](https://etherscan.io/address/0x3c98d617db017f51c6a73a13e80e1fe14cd1d8eb)在两周前通过质押 ETH 开了一个以太坊节点 (或者可能是[多个节点](https://twitter.com/ratedw3b/status/1642998861487546369)), 然后在一个 AMM 上[部署了流动性](https://etherscan.io/address/0x410fb10ba8af78a1e191fe3067208d3212ded961). 黑客冒充交易者, 利用这个流动性引诱其他 MEV 机器人进行 Sandwich Attack.

![](/img/oracle-pos/shoot.png)

Flashbots 遵循一个基本原则, 即节点需要相信它将从 Flashbots 获得最有利可图的区块. 为了确保恶意节点不生成恶意区块, Flashbots 采取了两种限制措施.

1. 区块的内容, 包括 MEV bot 的套利交易, 只能在节点验证和确认区块后通过签名确认解包和查看. 如果出现双重签名, 以太坊将对节点进行切割. 目前, 这一限制已被更改和[修复](https://github.com/flashbots/mev-boost-relay/pull/330).
2. 此外, 由节点自行提交的区块不太可能像由 Flashbots 提交的那样迅速到达整个网络.

黑客等待其节点轮到担任区块提议者的时候, 同时引诱这些 MEV bot. 黑客进行[测试](https://twitter.com/0xSt1ng3R/status/1642940470643900446), 并等待时机. 为了绕过上述两种限制, 黑客采取了两种对策:

1. 黑客[选择被 slash](https://twitter.com/terencechain/status/1642898595816013824), 因为它无论如何都会被切割, 只是损失了约 2000 美元.
2. 通过[利用 Flashbots 中的漏洞](https://twitter.com/samczsun/status/1642848567781105664), 黑客提议一个无效的区块. 因此, Flashbots 无法将该区块提交到网络, 黑客赢得了竞赛.

最后, 黑客窥探 MEV bot 的操作并从中提取大量 MEV 收益, 而其他人则明确地展示了他们的行动. 黑客对 Sandwich Attacker 进行 Sandwich Attack ([100y_kor 提供了很好的图解](https://twitter.com/100y_kor/status/1642902739352174592)).

![](/img/oracle-pos/sandwich.png)

### c) 启示

这次事件的导火索是 Flashbots 的漏洞. 如果没有这个漏洞, 这次事件就不会存在.

但是还有什么原因导致了这次黑客事件呢? 因为利用 MEV 比在以太坊上受到的惩罚要赚钱得多 ([25,000,000 profit for 1,800 penalty? Sure, i'll take that trade](https://twitter.com/Mudit__Gupta/status/1642848745460051969)). 实际上, 以太坊并不是真正的问题; PoS 正在按照预期安全地运作, 黑客的节点确实被削减了 (尽管这并[不能有效地阻止这种行为](https://twitter.com/ks_kulk/status/1642935358508924928)**).**

在下一章中, 我们将深入探讨为什么以太坊并未面临重大问题, 但在预言机网络中, 类似的 PoS 机制可能导致极度危险的不安全性. 因此, “低成本 (在网络中削减) 和高利润 (通过黑客攻击应用程序在网络中获取利润)” 的情景可能会成为一个问题.

## 2. L1 与预言机网络的不同商业模型

主要区别在于以太坊和预言机网络拥有不同的商业模型.

- 以太坊提供了用于运行应用程序的网络平台.
- 预言机网络提供与数据相关的服务, 以支持应用程序.

作为一个中立的网络和平台, 以太坊不对运行在其上的应用程序 (如 Flashbots 和 AMM) 负责. 协议设计只需要确保无误的共识和计算, 而不需要考虑这些应用程序.

另一方面, 预言机网络是一个服务提供商, 负责确保其自身数据的准确性和可验证性, 以及使用它的应用程序. 其协议设计和共识也与整个应用程序密切相关.

![](/img/oracle-pos/comparison-business.png)

## 3. 预言机网络的 PoS 是不安全的

### a) 以太坊没有受到太大影响.

我认为在上述黑客事件中, 以太坊没有问题, 原因是其共识层运作正常, 利润完全来自应用层. 该事件的发生是由于以下原因:

1. MEV 的机器人和节点具有追求利润的特性 (高利润).
2. 所有的人都使用 Flashbots.
3. Flashbots 有部分影响以太坊整个系统的 bug.
4. 恶意行为者愿意无视 slash (低成本) 来进行攻击.

考虑到这些商业模式的差异, 很明显, 以太坊的选择是有限的, 只能对此次黑客行为进行轻微的 slash.

### b) 预言机网络受到的影响要大得多.

![](/img/oracle-pos/comparison-slash.png)

在预言机网络中, 高利润低成本的问题可能导致大量攻击点. 如果入侵使用预言机网络的应用程序比入侵预言机网络本身的成本更有利可图, 那么就会出现忽略这些成本的攻击.

- 高利润: 基于预言机网络的 Layer 1 区块链中的应用层价值非常接近. 这意味着预言机网络的应用层存在高利润.
- 低成本: 无许可的预言机网络中的质押要求通常比以太坊低得多. 处罚成本也较低.

在预言机网络的例子中, 即使预言机网络正常运行, 如果依赖它们作为数据源或中间件的应用程序因其提供的服务而遭到入侵, 那么预言机网络本身的安全性也会受到威胁. 基于传统预言机网络的应用程序由于这个原因被攻击只是时间问题.

在以太坊的 PoS 中, 惩罚只与共识层有关, 而在预言机网络的 PoS 中, 惩罚直接与其节点计算所提供的数据和服务有关.

预言机网络对其提供的数据和服务负有责任. PoS 只能使网络本身“安全”, 但不能为这些数据和服务提供必要的有效性.

总的来说, 预言机网络及其基于其上的应用程序在以下方面受 PoS 影响较大:

- 服务提供商的商业模型
- 数据正确性和 PoS 机制的直接关联
- 具有相同的高潜在攻击利润
- 更低的质押要求和更低的处罚成本

### c) 通过 ZK 取代 PoS

我们正在构建 Hyper Oracle, 一个可编程的 zkOracle 网络.

目前的预言机网络很难创建有效的惩罚机制 (slash), 因为其无法考虑网络外的应用. 因此, 我们需要用有罪推定 (zk) 取代无罪推定 (PoS).

由于 zk 仅证明计算的有效性, 我们无法在 Layer 1 区块链中用 zk 替代 PoS 来创建新的共识. 但是, 我们可以替代预言机网络中的所有 PoS. 这将提高预言机网络的安全性, 使其达到 Layer 1 的水平.

我们将传统预言机和中间件基础设施的安全性和激励机制从 PoS 替换为 ZKP. 我们的可信任的 Meta Apps 确保了链上数据和链下计算的可验证性和安全性.

![](/img/oracle-pos/comparison-chainlink.png)

## 4. 其他值得注意的问题

### a) 可怕的黑暗森林

MEV 机器人是[以太坊黑暗森林](https://arxiv.org/abs/2101.05511)中的掠食者, 但它们也是猎物.

黑客行为的道德性质不容易定义为好或坏. 从“坏” MEV 机器人中提取收益可能被视为对 “坏人” 的惩罚, 但重要的是要记住, MEV 机器人仍然是网络的用户, 并且对链上资产价格和交易活动的稳定做出了贡献. 虽然黑客可能在遵循以太坊的规则, 但他本身却违反了 Flashbots 的规则.

越想越觉得可怕.

### b) MEV 导致的中心化

MEV 导致了中心化.

在以太坊网络上, 验证者的抵押回报远小于 MEV 的回报, 这可能[导致中心化现象](https://arxiv.org/abs/1904.05234)的出现. 较大的验证者将被[优先选择](https://twitter.com/0xdoug/status/1643059899629223938). 然而, Endgame 的[协议内 MEV](https://barnabe.substack.com/p/pbs#%C2%A7towards-in-protocol-pbs) 设计可能解决这些问题.

Flashbots 和其他服务也面临[中心化问题](https://twitter.com/pmcgoohanCrypto/status/1642973136340623362). "[MEV生态系统目前依赖于非健壮的社会共识和声誉抵押](https://twitter.com/0xShitTrader/status/1642900882281885701)". 虽然未来可能会出现像 [SUAVE](https://writings.flashbots.net/the-future-of-mev-is-suave) 这样的新系统来帮助去中心化, 但目前整个 MEV 领域非常中心化.

### c) 基于经济的系统难以衡量

经济系统可能由于诸如 MEV 等因素而难以分析, 对于预言机网络来说, 确定 PoS 所需的 slash 额度以完全保护数据和计算可能会很困难.

基于密码学的 zk 协议对于验证从底层 PoS 区块链网络中派生的数据正确性可能是更好的选择. 这种方法可以帮助[简化系统并增加信任](https://mirror.xyz/msfew.eth/gBVAvKt_G6y0ns5eA5vjZYEBgWdvPRu6KI9CujUvsek), 因为它是完全基于代码而不是其他因素的.

![](/img/oracle-pos/thumbnail.png)

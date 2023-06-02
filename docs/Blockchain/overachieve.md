---
sidebar_label: '🔍 观点: 强化以太坊'
sidebar_position: 99
---

# 强化以太坊

> English Version: [Mirror](https://mirror.xyz/hyperoracleblog.eth/n3c8QsNLCAPFqc5jisYV9zEtTCrxV3gjDFglNhiee94)

## 0. 不要过载以太坊的共识 (Don’t overload Ethereum consensus)

### a) 两种类型的共识

在讨论区块链网络中的共识时, 必须注意到有两种不同的 "共识" 类型:

- [共识算法](https://ethereum.org/en/developers/docs/consensus-mechanisms/#what-is-a-consensus-mechanism): 这包括了整个协议、激励和想法的堆栈, 使节点网络能够就区块链的状态达成一致.
- [社会共识](https://celestia.org/glossary/social-consensus/#:~:text=Social%20consensus%20is%20process,to%20attacks%20and%20network%20outages): 这是社区就将在区块链上做出的改变达成协议的过程.

这两种类型的共识在构成上也有所不同:

- 共识算法: 它是用代码编写的. 例如, 股权证明 (PoS) 机制.
- 社会共识: 它不是写在代码中的. 例如, 治理.

一般来说, 修复共识算法中的 bug 更容易完成, 例如[最近的以太坊不活动泄漏](https://www.proofoftrack.xyz/i/122110196/discussions-on-recent-inactivity-leaks), 最终通过共识协议本身的健壮性与一些代码维护来解决, 不需要社会共识参与.

如果社会共识层面需要改变, 那么就会涉及更严重的问题, 可能导致社区最终分叉. 例如, Solana 的宕机往往需要人为干预来重启网络, 这比之前以太坊的例子有更严重的后果.

### **b) 重用两种共识**

根据 [Vitalik](https://vitalik.ca/general/2023/05/21/dont_overload.html), 重用验证器组 (重用现有的共识算法的加密经济基础) 是低风险和可接受的, 而超载 (重用) 社会共识则非常危险.

Vitalik 认为, 区块链网络应该是客观的、简单的、纯数学的、中立的. 引入外界的冲突会影响网络和它的极简主义, 甚至导致社区分叉. 这最终会使区块链从一个可信的中立计算平台变成一个单纯的金融工具.

对于一个特定的用例, 基于以太坊的应用程序或协议重用以太坊验证器集 (如 [restaking primitive](https://twitter.com/sreeramkannan/status/1660388931622563840) 和 rollup) 不能期望以太坊通过分叉来承担他们的错误.

## 1. [Hyper Oracle](https://mirror.xyz/hyperoracleblog.eth/qbefsToFgFxBZBocwlkX-HXbpeUzZiv2UB5CmxcaFTM) 的例子

Hyper Oracle 是一个 zkOracle 网络, 为以太坊的智能合约提供强大的计算能力. 这允许开发人员以可编程的方式定义链外计算, 同时通过零知识证明确保计算信任.

与 ZK Rollup 类似, Hyper Oracle 网络通过智能合约验证链外计算. 这种方法利用了以太坊的验证器集和共识, 避免了对新验证器集或网络的需求. 这保持了以太坊原有的加密经济基础, 确保了可扩展性.

此外, Hyper Oracle 网络作为一个 Oracle 或中间件网络. Hyper Oracle 的计算数据源 (zkPoS, 通过 zkSNARK 证明以太坊共识) 是基于以太坊网络共识. 此外, Hyper Oracle 网络的源头依赖于以太坊的社会共识. Hyper Oracle 不会危及 以太坊共识的安全或性能, 而是像[轻客户端桥](https://ethresear.ch/t/don-t-overload-ethereum-s-consensus-a-light-client-bridge-perspective/15667)一样, 为维护以太坊共识做出贡献. 这种方法保证了整个系统是具有稳健性、中立性和客观的去中心化计算平台.

## 2. [世界超级计算机](https://ethresear.ch/t/towards-world-supercomputer/15487)的例子

世界超级计算机使用零知识证明连接了三个拓扑异构的 P2P 网络. 以太坊作为共识账本, 而 Hyper Oracle 作为计算网络, EthStorage 等 Storage Rollup 作为存储网络.

世界超级计算机提出了一个新的网络设计, 以扩大以太坊作为世界计算机的能力. 这种设计重用了与以太坊相同的加密经济和信任基础. 像 Hyper Oracle 和 EthStorage 这样的专用网络并没有引入新的加密经济机制, 而是继承了以太坊的信任假设, 以提高整个网络的计算和存储能力.

世界超级计算机的概念加强了以太坊的社会共识, 将以太坊作为共识账本, 形成前者的基础共识. 扩大的计算和存储能力使以太坊社区内的端到端去中心化程度更高, 应用更强大.

---
sidebar_label: '🔍 观点: 批评一下 L2'
sidebar_position: 99
---

# Rollup 的风险 (aka. Rollup 与 World Supercomputer 的差异)

> English Version: [Mirror](https://mirror.xyz/msfew.eth/KYcN_mB03V6cpc1LiMrHjA206LQQJkoh4zeIUjtLiC8)

> [https://ethresear.ch/t/towards-world-supercomputer/15487/2](https://ethresear.ch/t/towards-world-supercomputer/15487/2)
>

## 0. L2 Rollup 的定义

经过多年的研究和开发, L2 Rollup 已经成为增强以太坊世界计算机性能的最广泛采用的扩展解决方案. 作为建立在以太坊之上的附加层, L2 Rollup 提供了显著的好处, 并得到了社区的拥护.

![](/img/rollup-diss/l2-definitions.png)

L2 (Secured/Smart Contract) Rollup 可以用各种方式解释:

- [从验证桥的角度](https://drive.google.com/file/d/1KOEKNDGLBiLbaUDnIxCV6L1aBJblGPJs/view): L2 Rollup 的核心是一个乐观或悲观的验证桥, 它将资产从 Ethereum L1 桥接到 Ethereum L2, 以加快交易处理. 该桥由故障/欺诈或有效性证明来保证.
- [从 Rollup 本身的角度](https://www.youtube.com/watch?v=NKQz9jU0ftg): L2 Rollup 只是对输入的交易进行状态转换, 并在 L1 上提供数据, 通过排序器产生压缩输出. 该系统需要一些形式的证明 (权威、故障/有效性证明) 来说服基础层 Ethereum 区块链或其他网络.
- 从验证者的角度来看 (我的版本, 更多的是关于 L2 的): 一个 L2 是基于 Ethereum 上证明的验证者合约. 只要最终证明通过, 任何具有所有可合成创新的链下计算都可以在以太坊上结算.

在我的版本中, L2 Rollup 是一个具有的以下组件的网络:

- 链上数据可用性和结算: 历史状态或输入交易数据的公共可及性, 以及在以太坊上验证承诺.
- 链外执行: L2 层本身的交易的单一状态转换.

然而, 链外执行实际上不仅涉及单一交易的状态转换, 还涉及交易的排序. [在大多数情况下](https://twitter.com/bkiepuszewski/status/1645422967315111936), L2 Sequencer 做排序, 而 L2 Validator 为新状态进行计算.

## 1. L2 Sequencer 的中心化风险

首先, 可以说 L2 Rollups 事实上确实提高了世界计算机 (Ethereum) 的性能. 然而, L2 Rollups 的一个关键问题在于其目前的去中心化水平还不够充分.

L2 Rollups 中的交易实际上采取了独特的不同类型的 L1 交易的形式, 是以增强吞吐量的目的来执行、捆绑、压缩和摊销的. 尽管如此, 负责聚集和分类这些 L2 Rollup 交易的排序器通常扮演着一个中心化的角色.

![](/img/rollup-diss/l2-components.png)

集中式排序器可能会对以下去中心化方面产生负面影响.

- 抗审查能力较弱: 与 L1 上近乎无限的分布式节点不同, 集中式排序器可能无法确保你的交易会被纳入链上. 在法律实体控制下的集中式排序器可能会受到监管部门对特定交易的审查阻力. 虽然有额外的机制可以解决 L2 的集中化失效问题中的弱审查阻力问题 (如强制退出、[逃生舱门](https://community.starknet.io/t/starknet-escape-hatch-research/1108/2)、[包含列表](https://notes.ethereum.org/@fradamt/H1TsYRfJc), 或阈值加密), 我们仍然需要接受集中化定序器更可能具有弱审查阻力的假设.
- 弱活性: 集中式排序器的设计可能无法处理保持系统一直运行所需的计算处理和证明生成. 由于验证者或机器人的[硬件故障](https://offchain.medium.com/todays-arbitrum-sequencer-downtime-what-happened-6382a3066fbc)或[过度的垃圾邮件](https://twitter.com/kelvinfichter/status/1643056460836794373)造成的 RPC 或 Sequencer 停机, 会导致 L2 Rollup 的弱活性.
- MEV捕获: 目前 L2 Rollup 的集中式排序器[通常](https://mirror.xyz/msfew.eth/exHDL1Rn32SSFT1_mnMyNgoC7hXmB3LlcYMFiW6KtRE)遵循交易排序的先到先得规则. 需要额外的信任来确保他们不会通过节点权限从用户交易中提取 MEV, 或者确保他们采用的第三方排序服务 (如Chainlink FSS) 不会是恶意的.

[共享、外包或基于测序仪的解决方案](https://twitter.com/0xDinoEggs/status/1643252532674801667)可以通过权衡来解决这些问题, 但现在对这种解决方案来说还为时尚早. 此外, 许多分散的定序器解决方案 (如 [PoA、PoS 领导者选择、MEV 拍卖和 PoE](https://joncharbonneau.substack.com/p/rollups-arent-real)) 仍处于概念设计阶段.

![](/img/rollup-diss/sequencers.png)

目前, 去中心化 Sequencer 不是大多数 L2 Rollups 的优先事项. Arbitrum 甚至说去中心化 Sequencer 可能仅仅成为一个[可选功能](https://twitter.com/ChainLinkGod/status/1533618278538457088/photo/2).

## 2. 其他中心化风险: 节点要求、治理、App-chain 趋势

除了集中式排序器的问题, L2 Rollup 可能会出现节点硬件要求高、治理风险和 App-chain 趋势带来的中心化问题.

[运行一个完整的 L2 Rollup 节点需要同时运行一个 L1 节点](https://prestwich.substack.com/p/what-are-rollups). 这意味着 L2 节点的硬件要求比 L1 以太坊还要高, 这可能导致进一步的中心化问题. 这还不是一个问题, 因为大多数 L2 Rollup 不是完全 permissionless 的.

L2 Rollup 类似于一个专门的链上协议. 与 DeFi 和 NFT 等传统协议不同, L2 缺乏成熟的管理机制和既定的 DAO 模型. 由于大多数 L2 Rollups 的中心化性质 (甚至有时类似于中心化交易所), L2、Optimism 和 Arbitrum 的治理一直很困难. 这使得在之前没有成功的去中心化案例的情况下, 治理 L2 Rollup 具有挑战性.

关于部署 [Uniswap 作为 App-chain 或 App-rollup](https://mirror.xyz/msfew.eth/lXniX3379omelEdRBPgF-gS79zH9AJ2mD1xJ5zn9lxY) 的讨论一直在进行. 有[许多工具可用于 Rollup](https://twitter.com/musalbas/status/1639558584039079936), [包括](https://blog.blockmagnates.com/hitchhikers-guide-to-rollups-as-a-service-2e3438242ada) Rollup 框架 (OP Stack, Rollkit, Sovereign SDK) 和 RaaS (Caldera, Eclipse, Opside, AltLayer). 这些底层工具的扩散对未来充满希望, 大量新的 Rollups 即将出现. 这些 Rollups 中的每一个都需要解决上述的中心化问题. 在这些新的 Rollups 中, Sovereign Rollup 在去中心化方面特别具有挑战性. 它本质上是[解释同一个 L1 的不同视角](https://twitter.com/_prestwich/status/1548410043963305985), 或者是[天鹅绒分叉](https://eprint.iacr.org/2018/087.pdf), 或者几乎是一个单独的有[硬分叉作为一个特征](https://twitter.com/divine_economy/status/1548345842431455236) 的 L1. 此外, 我们还有 L3, 一个 L2 Rollup 上的 L2 Rollup.

现在 L2 的日交易量已经超过了 L1 以太坊. 然而, 由于中心化的排序器和其他问题, 如果我们将 L2 Rollup 视为世界计算机的一个重要方面, 我们可能无法达到性能和去中心化的理想平衡.

## 3. L2 或模块化区块链是不够的

为了创建一个世界计算机, 我们需要的不仅仅是 L2 或模块化区块链. 我们需要带有去中心化特性的性能扩展, 而不是带有性能扩展的[渐进式去中心化](https://twitter.com/adrian_brink/status/1656202217442123778).

模块化区块链 (包括 L2 Rollup) 和世界计算机架构之间的主要区别在于它们的目的:

- [模块化区块链](https://mirror.xyz/msfew.eth/3EqlfRRdRPAInmjwYvNLfcSnxe7fHN6EcVfEUGEsuiY): 旨在通过选择模块 (共识、DA、结算和执行) 来创建一个新的区块链, 将其组合成一个模块化区块链.
- 世界计算机: 旨在通过将网络 (基础层区块链、存储网络、计算网络) 组合成世界计算机, 建立一个全球去中心化的计算机/网络.

L2 Rollup 有效地实现了以下几点:

- 世界计算机的[模块化](https://notes.ethereum.org/@vbuterin/serenity_design_rationale#The-Layer-1vs-Layer-2-Tradeoff) (更多关于共识层的实验, 对中心化的排序器有一些外部信任)
- 世界计算机的吞吐量增强 (尽管它不是[严格意义上的 "扩展"](https://twitter.com/_prestwich/status/1284174486674083840))
- 世界计算机的开放创新

然而, 在以下领域, L2 Rollup 是不够的:

- 世界计算机的更多去中心化特性
- 世界计算机的更多性能提升 ([Rollup 的最大 TPS 加起来其实是不够的](https://twitter.com/monad_xyz/status/1643663169951236101), 而且 [L2 不能比 L1 有更快的终结性](https://prestwich.substack.com/p/what-are-rollups))
- 世界计算机的密集型计算 (涉及交易处理以外的计算, 如机器学习和 [Oracle](https://ethresear.ch/t/a-not-quite-cryptoeconomic-decentralized-oracle/6453))

虽然世界计算机架构可以有 L2 和模块化区块链, 但它并没有解决根本问题. L2 可以解决区块链的三难问题, 但不能解决世界计算机本身的三难问题.

我们需要一个能解决真正的通用密集型计算 (尤其是机器学习和 Oracle) 的网络, 同时保留底层区块链的完全去中心化.

# 🌈 读懂Hyper Oracle

> 本文为Hyper Oracle撰写, English Version: [Mirror](https://mirror.xyz/dashboard/edit/qbefsToFgFxBZBocwlkX-HXbpeUzZiv2UB5CmxcaFTM).

## 摘要

区块链已经彻底改变了我们对于信任和去中心化系统的认知. 然而, 在处理安全可靠的链下数据的索引和自动化方面, 去中心化应用仍旧面临着挑战. 这就是可编程的 zkOracle 出现的原因 - 一种新型的去中心化预言机网络, 利用零知识证明将链上数据带到链下环境, 为链上环境执行链下计算, 以及在任何场景中验证链下证明.

本文介绍 Hyper Oracle, 一个可编程的 zkOracle 网络, 旨在解决现有中间层解决方案的限制, 并推动新一轮的去中心化应用的发展.

## 0. zkOracle 的定义

### a) 预言机的分类

当人们听到 “预言机 (Oracle)” 这个术语时, 他们通常会将其与喂价预言机 (Price Feeds) 联系起来, 该预言机为链上智能合约提供链下数据. 然而, 这只是众多预言机类型中的一种.

这份[教育资源](https://chain.link/education/blockchain-oracles)对预言机概念进行了简单解释, 并将其分为两种主要类型:

- 输入预言机 (Input Oracle): 将链下数据传递到链上环境 (例如: Chainlink Price Feeds).
- 输出预言机 (Output Oracle): 将链上数据传递到链下环境进行复杂计算 (例如: Hyper Oracle zkIndexing).

![](/img/hyper-oracle/oracle.png)

在区块链领域, 术语 “输入” 和 “输出” 用于区分两种类型的预言机: 输入预言机和输出预言机. 此外, Hyper Oracle 定义了 I/O 预言机, 这是一种同时集成了输入和输出预言机的预言机类型, 首先遵循输出预言机的流程, 然后再遵循输入预言机的流程. 每个预言机可以进一步分为三个组件: 数据源, 计算和输出.

- 输入预言机
    - 数据源: 链下数据（例如中心化交易所中的交易价格, 真实世界天气数据）
    - 计算: 链下数据的聚合和 “上传”
    - 输出: 链上数据 (与数据源数据相同, 但存储在链上)
- 输出预言机
    - 数据源: 链上数据 (例如智能合约交互或事件, 如 ERC-20 转账或 ERC-721 铸造记录)
    - 计算: 索引、聚合、过滤或其他复杂计算
    - 输出: 以有组织且易于使用的形式呈现的链下数据
- I/O 预言机
    - 结合了输入预言机和输出预言机, 先进行输出预言机的流程, 然后进行输入预言机的流程.

总之, 预言机是处理区块链数据的程序. 关于 Hyper Oracle zkAutomation 和 zkIndexing 的更多信息将在后续章节中讨论.

![](/img/hyper-oracle/oracle-types.png)

### b) ZK (零知识证明技术)

> '[无需信任](https://www.bcbgroup.com/what-does-trustless-mean-in-crypto/#:~:text='Trustless'%20refers%20to%20a%20quality,trust%20in%20a%20third%20party.%20.)' 是指去中心化区块链的一种性质, 即在使用网络时, 不需要依赖对第三方的信任.
>

零知识协议或证明确保了计算的有效性, 就像这篇[文章](https://medium.com/starkware/how-can-cryptographic-proofs-provide-a-guarantee-of-financial-solvency-79ddc333116f)中所解释的那样. 它们使我们能够在不依赖外部信任的情况下证明计算的正确性. 作为验证者, 我们可以确定输出数据也是正确的.

使用零知识技术, 计算输出了最终的计算结果和一个零知识证明. 你可以将零知识证明视为永远正确的收据. 我们可以验证一个很短的短收据, 以确保所有数据 (购买的物品) 和计算 (物品成本的总和) 都是正确的.

零知识证明的好处是:

- 易于验证 (无需复杂的机制来达成数据共识或基于完整数据重新运行计算; 验证可以在任何环境下进行, 从而带来了互操作性和组合性的可能性)
- 更快的终局性 (Finality) (一旦数据和零知识证明被验证, 它们就可以被认为是完全正确和最终的 (Finalized))
- 最高的安全性 (纯粹基于密码学和数学)
- [更简单的系统和机制](https://mirror.xyz/msfew.eth/gBVAvKt_G6y0ns5eA5vjZYEBgWdvPRu6KI9CujUvsek) (无需了解复杂的代币经济学或机制)
- [可用于任何计算](https://dl.acm.org/doi/pdf/10.5555/88314.88333)

总之, 零知识技术是一种强大的加密技术栈, 用于无需信任和安全的计算.

### c) 传统预言机网络的问题

传统的预言机网络 (例如 Chainlink 或 The Graph) 通常创建新的质押网络, 而不是直接扩展基础层. 这些网络依靠代币经济学和质押机制来确保整体安全性和去中心化. 然而, 这种方法会带来一些问题:

- 安全性
    - 与基础层区块链缺乏一致性:

        这些网络在基础层区块链之外创建了单独的新网络. 它们无法继承以太坊等基础层区块链的已经建立的安全水平和成熟的生态模型. 在实践中, 它们比基础层区块链 (如以太坊) 的安全性要低得多.

    - 通过代币经济学建立的不确定信任:

        这些网络的安全性依赖于节点数量和网络中诚实运营者的数量等变量, 很难确定预言机网络的实际信任和安全水平. 此外, 网络的安全性与代币经济学相关联 (通常与网络代币的频繁交易活动相关), 引入了另一个风险因素.

    - 低成本和高攻击利润:

        这些网络通常是去中心化应用程序的主要组成部分, 其价值高度累积. 通过攻击预言机网络来攻击这些协议的潜在利润很高, 而如果其代币价格或质押要求过低, 则攻击预言机网络的成本很低.

- 去中心化
    - 高网络参与门槛:

        网络中参与方或节点越多, 去中心化水平越高. 但是, 在某些传统的预言机网络中, 最低的质押金额或门槛对于普通用户来说太高了. 例如, The Graph 要求质押大约 [100K GRT (截至 3/1 约合 16000 美元) 才能开始索引器节点](https://thegraph.com/docs/en/network/indexing/#what-is-the-minimum-stake-required-to-be-an-indexer-on-the-network), 这还没有考虑硬件要求, 以及 [10K GRT (截至 3/1 约合 1600 美元) 才能挑战和报告错误行为](https://thegraph.com/docs/en/network/indexing/#what-are-disputes-and-where-can-i-view-them). 这些高门槛使得自发的诚实节点参与网络活动变得困难. 此外, 启动一个新网络需要大量的初始质押资本.

    - 代币分配集中化：

        通常, 这些网络背后的实体控制着大部分代币供应. 衡量网络去中心化水平的一个指标是 Nakamoto 系数. 它表示可以集体关闭区块链的最小独立实体数量. 较大的系数可能表示更加去中心化的网络. 然而, [只需要控制 4 个实体就可以关闭 The Graph 的网络](https://nakaflow.io/)**.**代币分配的集中化使得代币经济学和整体机制变得集中化.

- 效率
    - 性能开销:

        预言机网络最重要的因素是性能. 传统的分布式网络通常会随着网络中节点数量的增加而增加延迟. 如果不是像 zk 网络这样的 1-of-N 信任模型 (“[只要其中至少一个节点按照期望的行为操作，系统就可以正常工作](https://vitalik.ca/general/2020/08/20/trust.html)”). 要同时实现去中心化 (更多的节点) 和性能 (相对较少的节点) 是很困难的.

    - 计算能力浪费:

        具有 PoW 机制的传统去中心化网络在共识生成过程中会有大量冗余计算和浪费的计算能力. 这些用于保护网络的整体安全性. 然而, 这种浪费的计算能力也代表了更高的运营和服务使用成本.


### d) zkOracle

zkOracle 通过以下解决方案来解决上述问题, 包括:

- 提供一个不可停止的自治网络
- 数学作为共识
- 继承基础层的安全性
- 1-of-N 信任模型
- 最优的基于密码学的去中心化
- 高效的计算能力分配 (理想情况下没有多余的浪费)

在后面的章节中, 我们将比较传统的预言机网络与 Hyper Oracle zkOracle 网络, 详细说明它们之间的区别.

作为处理数据的组件, 预言机必须确保计算的准确性和安全性. 确认输出有效和正确, 并且验证过程快速 (亚线性) 是很重要的.

![](/img/hyper-oracle/traditional-oracle.png)

为了实现无需信任和安全的预言机, 我们需要把它变成一个 zkOracle.

Hyper Oracle zkOracle 被原生地分为输出 zkOracle 和 I/O zkOracle.

**I. 输出 zkOracle**

一个输出 zkOracle 是一种使用 zk 来证明其计算有效性的输出预言机. 其中 Hyper Oracle zkIndexing Meta App 是一个例子.

![](/img/hyper-oracle/output-zkoracle.png)

- 数据源: 链上数据

    直截了当的解决方案是使用链上数据作为数据源. 这些数据已经被区块链验证和保护. 目前来说, 链下数据源无法高效地达到链上数据的信任级别 (至少根据[这个来源](https://andrecronje.medium.com/oracle-evolution-ab7ce23da15b)是这样). 链上数据源解决方案需要 zkOracle 作为输出预言机.

- 计算: 执行和零知识证明生成

    解决方案是创建计算 (通常是索引、聚合和筛选) 的 zk 证明, 并以零知识方式访问数据源. 这样为计算添加了一层有效性和无需信任. 现在的输出将附带一个 zk 证明, 使计算和输出可验证.

- 输出: 执行输出和可在链上验证的 zk证明

    计算的输出将同时包括执行输出和可验证的 zk 证明. 该证明可以轻松在智能合约或任何其他环境中验证. 验证组件可以确认 zkOracle 的执行的有效性.


**II. I/O zkOracle (输出 + 输入)**

一个 I/O zkOracle 是既有 zk 作为计算的输出预言机, 也有 zk 作为计算的输入预言机. 一个例子是 Hyper Oracle zkAutomation Meta App.

![](/img/hyper-oracle/io-zkoracle.png)

在这种情况下，zkOracle 将作为两个预言机的组合, 分为两个阶段:

- 数据源: 链上数据

    I/O zkOracle 的数据源与输出 zkOracle 相同.

- 计算: 执行和零知识证明生成

    I/O zkOracle 的计算包括输出 zkOracle (通常是索引、聚合和筛选) 和输入 zkOracle (包含将链下计算结果设置为智能合约调用的调用数据 (calldata)). 两部分的结合可以实现使智能合约自动化的复杂链下计算.

- 输出: 链上数据和可验证的 zk 证明

    此阶段的输出包括链上数据, 即作为调用数据提供的执行输出, 以及可验证的 zk 证明. 这个证明在智能合约或其他环境中很容易验证. 验证组件可以确认 I/O zkOracle 的执行的有效性.


**III. 定义**

从技术上讲, zkOracle 是具有可验证预提交计算的预言机.

从功能上讲, zkOracle 利用 zk 确保预言机节点的计算完整性, 从而保障预言机网络的安全性, 而不是使用质押和惩罚机制.

本质上, zkOracle 是一个预言机, 它利用 zk 进行计算和数据访问, 同时使用链上数据作为数据源, 以在无信任的情况下保护预言机的安全性.

## 1. 针对以太坊的 zkOracle 网络

> zkOracle = zkPoS + 运行在 zkWASM 中的 zkGraph
>

### a) zkOracle 架构概述

Hyper Oracle 是专为区块链设计的 zkOracle 网络. 目前, zkOracle 网络仅支持以太坊区块链. 它使用 zkPoS 从区块链的每个区块中检索数据作为数据源, 并使用运行在 zkWASM 上的可编程 zkGraph 来处理数据, 所有操作都以无需信任和安全为基础.

以下是以太坊区块链的 zkOracle 设计, 包含了 zkOracle 的基础设计与所有必要的组件.

![](/img/hyper-oracle/zkoracle-ethereum.png)

zkPoS 使用单个 zk 证明验证以太坊共识, 该证明可以在任何地方被验证与使用. 这使得 zkOracle 能够获得一个有效的区块头作为数据源进行进一步处理.

zkWASM (图表中的zkVM) 是 zkGraph 的运行时, 为 Hyper Oracle 网络中的任何 zkGraph 提供 zk 的能力. 它类似于 ZK Rollup 中使用的 zkEVM.

zkGraph (在 zkWASM 中运行) 定义了 zkOracle 节点行为和 Meta Apps 的可定制和可编程的链下计算. 它可以被视为 Hyper Oracle 网络的智能合约.

### b) zkPoS

> 无需信任的区块头数据获取, Hyper Oracle 网络中的 “数据源”
>

在实现 zkOracle 的关键步骤之一是为数据源检索区块链数据, 特别是区块头数据. 区块头数据作为获取 zkOracle 所需的实际数据 (三个 roots) 的入口. 因此, 如何获取区块头数据非常重要. 在 Hyper Oracle 网络中, 实现了可信的区块头获取来保证 zkOracle 的可信性和安全性.

![](/img/hyper-oracle/block-header.png)

获取区块头数据的方法有多种, 但最简单、最不安全或去中心化的方法是从第三方来源 (例如Infura) 获取. 另一个选择是使用轻客户端, 比如 [Helios](https://a16zcrypto.com/building-helios-ethereum-light-client/).

解决信任最小化的区块头数据获取最佳方案是 zkPoS, 它使用 zk 来证明以太坊的共识. 结合 zkPoS 与例如 Helios 这样的轻客户端, 可以构建基于 SNARK 的轻客户端, 使用证明计算来消除大部分客户端验证的计算.

为了保持其无需信任的特性, 用于 zkOracle 的 zkPoS 需要解决以下挑战:

- 恒定的 (短) 验证时间
- 恒定的 (小) 证明大小
- 高性能证明生成
- 无需对第三方进行外部信任

Hyper Oracle zkPoS 将提供 zk 轻客户端, 并通过以下方式解决上述挑战:

- 将以太坊共识的区块认证等逻辑 SNARK 化 (见下图)
- 递归证明多个区块的以太坊共识

![](/img/hyper-oracle/zkpos.png)

请参考我们以前的博客文章: [zkPoS: End-to-end Trustless](https://mirror.xyz/hyperoracleblog.eth/lAE9erAz5eIlQZ346PG6tfh7Q6xy59bmA_kFNr-l6dE), 以获取更多详细信息.

zkPoS 将通过提供可信的数据源作为预言机的输入, 增强 Hyper Oracle zkOracle 的端到端无需信任.

### c) zkGraph

> 可自定义的链下计算, Hyper Oracle 网络中的 “智能合约”
>

**I. zkGraph 介绍**

zkGraph 定义了 Hyper Oracle 节点的链下计算, 包括与数据相关的行为和 zk 证明生成, 就像智能合约定义了以太坊节点的 EVM 计算一样.

![](/img/hyper-oracle/zkgraph-smart-contract.png)

智能合约开发人员可以同时构建智能合约和 zkGraph. 用户可以与两者交互.

要利用 Hyper Oracle Meta Apps 的基础设施, 开发人员必须配置和编写他们的 zkGraph, 以指定他们想要如何处理数据. 然后, Hyper Oracle 节点将处理数据并基于指定的定义生成 zk 证明.

总之, zkGraph 是一个程序, 定义了数据的映射 (经过 zkPoS 的数据预处理) 和配置 Meta Apps.

**II. 开发 zkGraph**

zkGraph 是可定制和可编程的, 由三个主要组件组成:

- Manifest (zkgraph.yaml): 数据源, 用于配置信息, 例如使用的 Meta App, 目标区块链网络和目标智能合约.
- Schema (schema.graphql): 数据结构, 用于定义数据的存储和访问方式.
- Mapping (mapping.ts): 数据映射 (链下计算), 用于将区块链数据计算为其他形式.

![](/img/hyper-oracle/zkgraph-components.png)

zkGraph 的核心是 mapping.ts 文件. 其中的代码定义了链下计算程序.

mapping 文件通常定义了用于处理链上事件或设置智能合约自动化的程序. 这些筛选器在 zkWASM 中运行 (详见下一节), 并生成 zk 证明以确保计算完整性和有效性.

在部署时, zkGraph 的所有代码文件都将存储在 EthStorage 中, 这是以太坊 ESP 支持的存储扩展层. 这将确保 zkGraph 的开发流程完全去中心化.

以下是 zkGraph 的示例代码 (仅供说明用途):

![](/img/hyper-oracle/zkgraph.png)

**III. zkGraph 的 Subgraph 等同性**

最好的做法是[利用现有生态系统](https://twitter.com/0xzuberg/status/1613912873486651393), 而不是避免重复造轮子. zkGraph 完全等同于 The Graph 的 Subgraph.

将现有的 Subgraph (超过 600 个且还在增长) 迁移到 zkGraph 仅需要修改 10 行代码. 开发过程中可以使用现有实现, 例如 [Standardized Subgraph](https://github.com/messari/subgraphs) 和生态系统工具, 例如 [Instant Subgraph](https://docs.goldsky.com/indexing/instant-subgraphs) 和 [Subgraph Uncrashable](https://thegraph.academy/developers/subgraph-uncrashable/).

使用 zkWASM, zkGraph 支持任何 AssemblyScript (~TypeScript) 语法的通用计算. 换句话说, Hyper Oracle Meta Apps 是完全可定制和可编程的.

### d) zkWASM

> 将 ZK 赋予 zkGraph
>

由于 zkGraph 是完全可自定义和可编程的, 因此它需要一个通用的运行时环境来执行. 类似于 EVM 运行智能合约一样, zkWASM (基于 WebAssembly 的 zkVM) 运行 zkGraph.

作为 Subgraph 等同性的一部分, zkGraph 还采用基于 WASM 的 mapping. 它被 “翻译” 成 AssemblyScript, 这是一种专门设计用于在 WebAssembly 运行时环境中运行的语言.

The Graph 使用 wasmtime 作为 Subgraph 的 WebAssembly 运行时, 而 Hyper Oracle 使用 zkWASM 作为 zkGraph 的 WebAssembly 运行时. 这种执行引擎的差异使得 zkGraph 是 zk 的, 且不会牺牲任何通用计算能力. 用 zkWASM 替换 wasmtime 就像用 zkEVM 替换 EVM 一样. 在 zkWASM 中运行的任何程序都具有 zk 的超能力, 包括可验证性、无需信任、去中心化和计算完整性.

![](/img/hyper-oracle/zkwasm.png)

Hyper Oracle 的 zkGraph 并不仅限于在 zkWASM 中运行. 我们重视证明者/客户端的多样性和去中心化, 不断探索用 zk 强化 zkGraph 的新方法.

如想了解有关 zkWASM 的更多信息, 请参阅我们之前的博客文章: [zkWASM, The Next Chapter of ZK and zkVM](https://mirror.xyz/hyperoracleblog.eth/abKqUB4iEJ4kRsGqq8baIFUnhV_eY-lblmhCrwRm31E). 有关更多技术细节, 你可以参考题为 **[**ZAWA: A ZKSNARK WASM Emulator](https://jhc.sjtu.edu.cn/~hongfeifu/manuscriptb.pdf) ****的论文.

zkWASM 将使 Hyper Oracle zkGraph 能够实现可编程、通用计算、Subgraph 等同和零知识证明的超能力。

### e) Hyper Oracle 网络中的 zkOracle

以下是 Hyper Oracle 网络中运行 zkOracle 节点的概念架构图.

本节开始的设计与之前的设计类似, 但进行了一些更改以突出某些细节.

![](/img/hyper-oracle/zkoracle-node.png)

为了讨论设计, 让我们从左到右、从上到下地看:

1. 以太坊区块链作为 zkOracle 的原始链上数据源, 但在将来, 任何网络都可以被使用.
2. Hyper Oracle zkOracle 节点由两个主要组件组成: zkPoS 和 zkWASM.
    - zkPoS 通过使用 zk 来证明以太坊的共识, 获取以太坊区块链的区块头和数据根.  zk 证明生成过程可以外包给去中心化的证明者网络. zkPoS 作为 zkWASM 的外部电路运行.
    - zkPoS 将区块头和数据根提供给 zkWASM. zkWASM 将这些数据作为运行 zkGraph 的必要输入.
    - zkWASM 运行由 zkGraph 定义的自定义数据映射, 并生成这些操作的 zk 证明. zkOracle 节点可以选择他们希望运行的 zkGraph 的数量 (从一个到所有已部署的 zkGraph). zk 证明生成过程可以外包给去中心化的证明者网络.
3. zkOracle 的输出是链下数据, 开发者可以通过 Hyper Oracle Meta Apps 使用这些数据 (这将在后面的章节中介绍). 该数据还附带了证明其有效性和计算的 zk 证明.

只需要一个 zkOracle 节点来维护网络安全. 在 Hyper Oracle 网络中, 仍然可以有多个 zkOracle 节点针对 zkPoS 和每个 zkGraph. 这可以并行生成 zk 证明, 从而显著提高性能.

## 2. Meta Apps

> Meta Apps = zkIndexing + zkAutomation, 均基于 zkGraph
>

zkOracle 网络是 Hyper Oracle 的技术架构. Meta Apps (或 zkOracle 服务) 是 Hyper Oracle 的 “产品”.

Hyper Oracle Meta Apps 提供一系列基础设施服务, 可供任何 DApp 开发人员使用. 由于每个 DApp 都需要特定的基础设施, Meta Apps 为 DApp 提供了完全去中心化和安全的选择.

### **a) 革新基础设施**

> 注: 更好且更准确的术语是 “中间件”. 这里我们使用 “基础设施” 这个通用术语以便于理解.
>

去中心化应用程序 (DApp) 比智能合约更为复杂. 完整的 DApp 至少应包括:

- 交互界面 (通常是作为前端的网站)
- 基础设施/中间件组件 (可能包括索引服务来整理数据, 自动调用函数的自动化/Keeper 网络, 提供数据的价格预言机, 或所有这些)
- 智能合约

![](/img/hyper-oracle/dapp-arch.png)

自从智能合约问世以来, 共识研究人员和网络工程师一直在探索如何扩展网络并增加智能合约的计算能力.

为了在不牺牲区块链去中心化的情况下实现更好的性能, 目前可用的最佳方法是使用 Rollup 技术, 例如 Optimistic Rollup 和 ZK Rollup.

![](/img/hyper-oracle/dapp-arch-layer2.png)

接着, 我们还必须加强 DApps 的基础设施. 需要注意的是, 当前基础设施协议的问题不仅仅局限于可扩展性, 还包括去中心化、无需信任和安全性方面的问题. 由于基础设施并非内置于区块链网络中, 因此无法充分利用区块链技术的现有优势. 但是, 有没有解决方案呢?

通过扩展 DApps 的功能, 基础设施可以成为智能合约原始功能的扩展, 这些功能目前在区块链上是独立的.

为了实现所需的去中心化水平, 基础设施必须让区块链网络 (并不知道它的存在) 相信基础设施的链下计算. 这可以通过两种有效的方法来实现:

首先, 说服 L1. 然后升级基础设施以实现去中心化:

- ~~运行在智能合约中~~ (然而, 基础设施是智能合约的扩展, 因此根据定义无法在智能合约中运行).
- 提供某种证明 (包括 Optimistic、ZK、[CK](https://medium.com/initc3org/complete-knowledge-eecdda172a81) 或 [Modular Hybrid](https://twitter.com/jon_charb/status/1620101172739846147)…)

我们将在后面的章节中介绍 ZK 相对于 Optimistic 在基础设施方面的优势. 现在, 我们来看一个更适合的解决方案 —— Hyper Oracle Meta Apps:

1. 通过 zk 证明说服 L1 ([一个简短的收据确保计算完整性](https://twitter.com/backaes/status/1613856760657231872))
2. 提供去中心化的基础设施
3. 构建下一代 DApps

![](/img/hyper-oracle/dapp-arch-meta-apps.png)

从本质上讲, Hyper Oracle Meta Apps 为基础设施带来了创新, 类似于 ZK Rollup 为区块链带来创新的方式.

### b) zkAutomation

> 智能合约无需信任的自动化
>

**I. zkAutomation 介绍**

[自动化、机器人和 Keeper 推动着区块链世界](https://mirror.xyz/hyperoracleblog.eth/UYI8mpq6zJ8L2Hbqrliss0mg92v7dNAqz0UhO41d_dM). 自动程序需要定期调用智能合约来维护 AMM 的最佳价格流动或通过避免坏账来保持借贷协议的健康状态. [有时, 这些自动调用对于链上计算来说过于复杂, 对于治理投票来说太频繁, 对于开放系统来说则太重要](https://twitter.com/0xSacha/status/1624102663557087247). 在这种情况下, 开发人员需要自动化协议来提供这些服务, 以便他们不必构建和运行自己的自动化系统.

然而, 仅有一个通用的自动化和 Keeper 的协议是不足够的. 自动化执行和链下数据源计算必须是安全的. 如果这些计算无效, 操作节点必须在自动化网络上被标记并受到惩罚.

zkAutomation 是市场上唯一能够执行零知识证明的自动化基础设施. zkAutomation 不仅是一个输出zkOracle Meta Apps, 还是一个 I/O zkOracle, 因为数据从链上 (原始数据) 流向链下 (zkGraph 源)， 再返回链上 (触发自动化).

zkAutomation 是基于零知识证明的 Hyper Oracle 信任自动化协议. zkAutomation 的自动化执行完全由 zk 保护, 自动化源 (触发自动化的数据源) 可以完全使用 zkGraph 进行自定义. 开发人员可以构建机器人 (例如套利机器人) 来进行链上交易以获取利润, 像清算 Keeper 这样的 Keeper 程序来保护协议健康, 甚至构建像链上 ETF 或链上稳定币这样的自动化协议, 以实现完全去中心化的金融应用程序.

![](/img/hyper-oracle/zkautomation.png)

**II. zkAutomation 使用**

开发者可以通过部署他们的自动化程序来使用 zkAutomation, 方法是通过 Hyper Oracle 的 Web 应用程序指定目标合约、目标函数和来源 (何时触发). 对于更复杂的触发条件, 开发者可以选择每 N 个区块触发自动化 (在像 Keeper 机器人这样的场景中) , 或使用 zkGraph 作为链下来源.

zkAutomation 的 zkGraph 可以从头开始构建, 从 zkIndexing 的 zkGraph 迁移或重用已部署的zkGraph. 如果开发者选择从现有的 zkIndexing 的 zkGraph 迁移, 则只需更改该 zkGraph 的元应用程序类型即可使其成为 zkAutomation 的有效源.

一旦 zkAutomation job 已注册 (并且已经可选地部署了 zkGraph), 相应的 zkAutomation 服务将启动, 并在满足触发条件时执行自动化作业.

### c) zkIndexing

> 区块链数据无需信任的索引和获取
>

**I. zkIndexing 介绍**

访问大多数区块链数据会对开发人员构成挑战. 开发人员可以运行自己的索引器来将数据组织成更易于搜索的格式, 但这可能是一个[困难且耗时](https://twitter.com/DennisonBertram/status/1621657835334402050)的过程, 因为它涉及重新构建整个区块链状态并索引智能合约事件. 这就是像 The Graph 这样的索引协议有用的地方.

但是, 拥有通用的索引和查询协议是不够的, 确保[索引数据的准确性和可靠性](https://twitter.com/DennisonBertram/status/1621665717274775557)同样重要. 因为不正确的数据可能比[没有索引器](https://twitter.com/0xngmi/status/1567594375357546496)更为问题严重. 换句话说, 确保索引过程的计算完整性和安全性至关重要.

zkIndexing 是一种独特的索引基础设施, 使用零知识证明让其在准确性和安全性方面获得提升. zkIndexing 是一个典型的输出 zkOracle Meta App, 数据从链上 (原始区块链数据) 流向链下 (zkGraph索引数据).

zkIndexing 是 Hyper Oracle 基于零知识证明的无需信任的索引协议. zkIndexing 的索引和查询模式可以使用 zkGraph 完全自定义. 开发人员可以使用 zkIndexing 构建任何端到端的去中心化应用程序.

![](/img/hyper-oracle/zkindexing.png)

**II. zkIndexing 使用**

zkGraph 部署后, 相应的 zkIndexing 服务将开始索引区块链, 并且任何开发者都可以查询数据.

要使用 zkIndexing, 开发者需要利用 zkGraph 定义索引行为和查询架构.

开发者可以从头开始构建 zkIndexing 的 zkGraph, 从现有子图迁移它们, 或者重用已部署的 zkGraph. 对于 Uniswap、AAVE 或 Curve 等现有协议, 有多个开源实现可用.

一旦 zkGraph 被部署, 相应的 zkIndexing 服务将开始索引区块链, 数据将对任何开发者可查询.

## 3. 对比

### a) zkOracle 网络 vs. 其他预言机网络

创建一个去中心化的预言机时, zkOracle 网络与传统网络有显著的区别.

首先, 工作流程和架构是不同的. zkOracle 网络更加简化, 因为所有的计算都是在安全和无需信任的情况下使用 ZK 链下进行的. 相比之下, 传统的预言机被限制于通过智能合约的有限计算能力进行无需信任的聚合和 “可信” 计算.

![](/img/hyper-oracle/comparison-chainlink.png)

基于上面显示的图表, 我们可以比较 zkOracle 网络与传统预言机网络的优势:

- 去中心化 (无需信任, 安全性和抗审查)

    zkOracle 网络 Hyper Oracle 在不需要外部信任第三方的情况下运行, 使其成为一个无需信任的网络. 相反, 传统的预言机网络依赖于可信第三方和网络. zkOracle 网络遵循 Vitalik Buterin 在[信任模型](https://vitalik.ca/general/2020/08/20/trust.html)的文章中定义的 1-of-N 信任模型, 只需要一个节点来维护网络的健康和运行时间. 另一方面, 只有当传统的预言机网络达到极大的节点数量时, 才被认为是去中心化的. zkOracle 网络的安全性完全基于数学和密码学, 它继承了以太坊的安全性, 以太坊作为它的数据源.

- 性能和最终性

    根据[广泛接受的关于 Rollups 最终性的定义](https://twitter.com/norswap/status/1613329330410504193), 在挑战期结束时实现最终性. 传统的预言机和 zkOracle 网络可以分别与 Optimistic 和 ZK Rollups 进行比较, 因此我们可以使用这个定义来进行性能比较. 输入预言机 (如 Chainlink Price Feeds) 和输出预言机 (如 The Graph Protocol) 依赖于 Slashing 或挑战期, 这可能需要数天甚至数周的时间. 然而, 像 Hyper Oracle 这样的 zkOracle 网络则基于 zk 证明生成时间. 虽然 zk 证明生成与纯计算相比具有开销, 但预言机的性能仍然可以从挑战期的数天或数周的时间下降到几分钟或几秒, 即使不考虑并行证明. 由于 zk 的本质, 向 zkOracle 网络添加更多的节点几乎可以[线性提升](https://twitter.com/toghrulmaharram/status/1629356500555628546)它的性能, 而不仅仅是在网络中创建冗余.

- 成本

    zkOracle 网络采用 1-of-N 信任模型, 这意味着只需要一个诚实的节点即可创建一个安全网络. 这消除了传统预言机网络中发现的冗余, 使其成为更安全的选择. 尽管 zk 证明的成本增加了成本 (在 zkEVM 的情况下，大批量交易的证明成本只有 0.06 美元), 因此 zkOracle 网络产生的费用比传统的 Oracle 网络要低.

- 机制与架构

    传统的预言机网络具有涉及多个具有不同机制的组件的复杂架构. 它们涉及许多依赖关系, 例如复杂的代币经济学和不确定的第三方信誉. 相比之下, zkOracle 网络具有更简单的架构和更直接的机制. 只要有一个诚实的 zkOracle 节点生成并验证了zk证明, 所有相关的数据就是正确的.


### b) zkAutomation vs. 其他自动化协议

zkAutomation 提供了 zkOracle 网络的所有优势, 与其他自动化协议 (如 Keep3r Network、Chainlink Automation 和 Gelato Network) 相比, 还提供了特定的优点. 除了具有这些自动化协议的所有功能外, zkAutomation 还提供:

- 无需信任的链下源

    zkAutomation 的无需信任自动化, 提供基于可编程的 zkGraph 的链下源. 这允许基于链下计算结果触发灵活的自动化, 同时保持安全.

- 基于 ZKP 的可验证性和安全性

    zkAutomation 的 zk 证明使全面的可验证性成为可能. 其他自动化协议通常依赖于 DAO、"社会共识" 甚至法律文件来预防不良行为, 这可能会为保护网络健康带来不确定性和额外的时间或功率负担. 相比之下, zkAutomation 的网络是自主和自动的, 具有纯基于密码学的证明生成和验证, 无需人为干预.


### c) zkIndexing vs. 其他索引协议

zkIndexing 提供了 zkOracle 网络的所有优点, 以及相比其他索引协议 (如 The Graph) 的几个优势, 包括:

- 通过无需信任特性提高性能

    索引和查询服务的性能是一个关键指标, 请求和响应的延迟很大程度上取决于节点和请求者之间的地理距离. 传统的去中心化索引网络由于诚实多数假设而面临性能问题. 虽然请求者可以相信整个网络的结果, 但他们不能相信单个节点, 这可能会影响性能.  zkIndexing 通过 zk 证明解决了这个问题. 开发人员可以从最接近和最快的 Hyper Oracle zkOracle 节点中可信地请求数据.

- 使用 ZKP 的可验证性和安全性

    传统的索引网络目前只服务于某些不将数据正确性视为关键组成部分的去中心化应用, 例如仪表盘. 这不是由于开发人员不希望将这些索引服务作为核心组件集成, 而是因为这些索引网络尚未通过多重签名控制的争议委员会变得足够安全. zkIndexing 通过 zk 证明的数学和密码学来解决这个问题, 并为开发人员构建任何类型的去中心化应用提供了可验证性和安全性.


## **概述**

本白皮书介绍了 Hyper Oracle, 这是一个可编程的 zkOracle 网络, 旨在保护区块链的安全性和去中心化.

Hyper Oracle 有三个主要组成部分: zkPoS、zkGraph 和 zkWASM. zkPoS 安全地从以太坊区块链检索区块头和数据根; zkWASM 运行可编程的定制化链下计算和由 zkGrap h定义的数据映射. 此外, Hyper Oracle Meta Apps - zkAutomation 和 zkIndexing - 提供了安全的智能合约自动化和由 zkGraph 定义的区块链数据索引/查询. 与其他传统的预言机网络相比, Hyper Oracle 通过提出一个可信任的 zk 驱动的基础设施解决了现有的安全、去中心化和性能问题.

随着区块链行业的发展和对下一代去中心化应用程序的需求的增加, Hyper Oracle 将凭借其先进的预言机技术作为 DApps 的关键支撑, 并为可编程基础设施建立新的范例.

![](/img/hyper-oracle/thumbnail.png)

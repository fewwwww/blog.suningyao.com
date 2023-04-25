---
sidebar_label: '😤 观点: 批评一下 ZK'
sidebar_position: 99
---

# 😤 观点: 批评一下 ZK

> 媒体发布: [TechFlow](https://www.techflowpost.com/article/detail_11741.html)

> English Version: [Mirror](https://mirror.xyz/msfew.eth/Q0NQDYIerEqqK4N7tMDX4OTIJ0flpPMgdH-XCNociEU)

> 首先, 这是一个用一个小时写的草稿. 主要是为了快速收集信息, 所以可能存在非常多的潜在错误和不完整的信息.

对 ZK 的主要批评包括两个, 一是证明时间长 (因此有各种 benchmark、各种新的 ZK 协议和各种硬件优化, 一是系统和应用程序安全性仍然需要测试.

## 0. 证明生成性能

零知识证明是区块链领域非常流行的技术. 由于链上计算资源稀缺且昂贵, 零知识证明允许这些计算在链下进行, 虽然链下证明生成的总时间消耗非常高, 但它仍然压缩了最终证明和相关的计算验证, 从而允许计算“在链上”.

ZK 证明生成时间过长的问题往往被研究者和开发者所忽视, 因为这本质上是 ZK 需要做出的权衡.

虽然他们没有直接批评ZK的这个缺点, 但是他们有很多从对面解决这个缺点的方法和讨论. 也就是说, 他们通过提出各种解决方案并进行大量基准测试来隐含地谈论 ZK 的极长证明时间/

### a) Benchmark

在衡量 ZK 应用之前，我们首先要测试 ZK 协议底层 commitment (https://2π.com/23/pc-bench/index.html) 的性能. 因为比如, FRI 导致 STARK，KZG 导致常规 SNARK，IPA 导致 Bulletproof (https://blockdoc.substack.com/p/an-introduction-to-commitment-schemes). 底层承诺的性能测试对于 ZK 应用的性能并不直观, 但对于理解 ZK 证明时间长的问题很有帮助.

从上面的链接我们可以看出, 这些底层承诺协议不仅计算复杂 (可能导致证明时间长), 而且还存在内存消耗非常大的问题. 当然, 内存消耗其实更多的是跟硬件配置要求有关, 这跟我们今天要讨论的话题是不一样的.

对于具体的 SNARK 性能测试, a16z crypto 将它们分为前端和后端 (https://a16zcrypto.com/content/article/measuring-snark-performance-frontends-backends-and-the-future/). 前端通常是 ZK 应用开发者接触到的 Cairo 语言/ zkVM 高级语言等, 而后端是更接近 SNARK 证明生成时间的承诺等底层密码学操作. 其中, 作者提到 SNARK 证明生成具有大约 100 倍的计算开销, 并且每个 ZK 协议都有额外的开销, 例如 “In Groth16, P must work over a pairing-friendly group, whose operations are typically at least 2x slower than groups In Groth16, P must work over a pairing-friendly group, whose operations are typically at least 2x slower than groups that aren't pairing friendly. , this results in at least an additional factor-6 slow down relative to the 100-|C| estimate above.”. 总体而言, 可以说 zk-SNARK 的额外性能开销在 200 - 1000 倍的范围内. 此外, 文章还提到了 zk-SNARK 的其他限制, 例如可信设置和内存使用.

Modulus Labs 文章 (https://medium.com/@ModulusLabs/chapter-5-the-cost-of-intelligence-da26dbf93307) 测量了一些 ZK 协议的实际性能. 有些基准是针对参数数量的, 这对我们来说不是很直观. 然而, 在应用中, 文章提到在 Worldcoin 用例中, 即使使用 “最快” 的 Plonky2, 仍然需要几分钟的证明生成时间和数十 GB 的内存消耗, 无法在个人电脑上运行.

### b) 递归和批处理

为了减少证明生成时间, 我们可以并行证明多个证明. 通常, 有两种方法可以做到这一点, 一种是批处理, 另一种是递归. 简单来说, 批处理是同时证明一批证明, 最后将它们聚合在一起, 而递归是在一个证明中验证其他证明. 一般而言, 递归方法具有更小证明大小 (https://twitter.com/bobbinth/status/1608690628652838915) 的额外优势.

一些更常见的聚合方法包括 Halo2、Plonky2 (https://www.youtube.com/watch?v=HE06BAsoWjw&list=PLlcfbEGVTa-gfVw5oz6a3BxAaUvstvxzf)、Nova. 他们每个人都以不同的方式执行批处理和递归, 从而减少了证明时间. (https://kb.delendum.xyz/zk-knowledge#proof-aggregation)

除了ZK的协议层, ZK的应用层 (https://www.youtube.com/watch?v=VmYpbFxBdtM) 也可以有针对性的优化. 例如, 可以同时使用多个 ZK 协议 (STARK + SNARK (https://www.youtube.com/watch?v=ZwG3UI_iDAs)), 或者针对宏观采取递归策略 (https://ethresear.ch/t/proving-a-chain-of-hashes-using-plonky2/15246、 https://www.youtube.com/watch?v=t34Pt40COKg) 进行特定于应用程序的调优.

一般来说, 这实际上减少了协议和证明分配方面的证明生成时间. 在探索新的 ZK 协议时, 减少证明时间是最重要的考虑因素.

### c) 硬件加速

此外, 从硬件角度进一步减少 ZK 应用在物理和节点层面的证明时间也做了很多努力.

首先, 与前面提到的新协议一样, ZK 协议被设计为尽可能对硬件友好, 例如 HyperPlonk (https://hackmd.io/@omershlo/rJhgKJPtj).

Paradigm 提到 (https://www.paradigm.xyz/2022/04/zk-hardware), ZK 的证明生成速度慢主要是由于涉及大量的 MSM 和 FFT, 它们对硬件不友好, 导致由于随机内存访问等问题导致最终证明生成速度慢. 对于这些底层加密计算, ZK 协议需要在它们的组成和规模 (https://www.youtube.com/watch?v=5hO9NbtFc0g&t=3882s) 上进行一些权衡, 以使其对硬件更加友好.

几家 ZK 硬件加速厂商 (https://www.youtube.com/watch?v=3wLYtzHuu5U&list=PLlcfbEGVTa-gfVw5oz6a3BxAaUvstvxzf) 和研究人员 (https://trapdoortech.medium.com/zero-knowledge-proof-fpga-or-gpu-97b96ffbf0f) 表示, GPU 实际上是目前最经济和可配置的硬件选择, 我们最终将有 FPGA 过渡到 ASIC 阶段. 根据 zk 硬件公司的说法, 他们的第一版 ASIC 可以直接减少至少 30% 的 ZK 证明生成时间.

此外, 由于不同的服务器配置 (https://twitter.com/ingo_zk/status/1597963357772214272), 将不同的云服务器作为节点运行可能涉及不同的硬件特定优化.

## 1. Security

ZK 现在的另一个批评是电路代码仍然需要正确 (没有 bug). 如果 ZK 协议从健全性、完整性、零知识的角度受到攻击, 我们将不再拥有有效的 ZK 系统. 我们可以在这个链接 (https://kb.delendum.xyz/zk-knowledge#vulnerabilities) 中看到各种角度的攻击示例.

虽然 ZK 应用可以被称为 trustless, 但我们仍然需要确保项目的 ZK 协议和应用的代码和架构是正确的. 区块链领域 (https://www.youtube.com/watch?v=FMXTvxo3NsI) 中存在多种 ZK 错误. 例如, 由于 zkEVM (https://youtu.be/6hfVzCWT6YI?t=164) 的 ZK 电路代码库庞大的问题, Vitalik 谈到了 ZK 应用程序的多证明者的需求.

因此, ZK 系统可能需要与形式验证 (https://medium.com/delendum/formal-verification-of-zk-constraint-systems-ab22f17b0525) 等安全工具或 Ecne (https://github.com/franklynwang/EcneProject) 等其他安全相关工具搭配使用. 应用程序级别, 它需要更多的审计, 特别是对于像 zkEVM (https://www.youtube.com/watch?v=WJewE8fdlmU) 这样的大项目.

在实践中 (https://mirror.xyz/privacy-scaling-explorations.eth/BaqGMfBhEZR1cvTJlA9E3Xu5ZhD7IthLiUK-Q75rQMM), Ethereum PSE 维护了 zk bug tracker repo (https://github.com/0xPARC/zk-bug-tracker), 追踪 bug, 帮助审计人员快速找到 zk 应用中的常见漏洞. Veridise 在 zk 电路的形式化验证方面做了大量的研究和开发 (zk 电路原生地可以很容易地用数学公式来表达, 这很适合形式化验证), 以及 zk 静态分析的通用工具.

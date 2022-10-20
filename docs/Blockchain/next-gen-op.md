# 👨‍⚖️ 读懂OP: OP第二代架构

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/MQGwTzd9o4eFSbXTGHGTmQ)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-the-second-generation-optimistic-rollups-eb6ae71b9712).

## 0. 为什么还需要看 Optimistic Rollup?

### a) OP 还是 ZK?

尽管 Vitalik 早在几年前就认定了 zkEVM Rollup 是未来, 同时各家 zkEVM (Scroll, zkSync, Hermez, Consensys) 也如雨后春笋一般冒出来, 但 **Optimistic Rollup 仍是目前 Rollup 生态的绝对主力, 拥有 80% Layer2 的市场占有率以及前十 Layer2 方案的半壁江山**.

![](/img/next-gen-op/l2s.png)

zkEVM Rollup 的终局性扩容方案的存在, 会让 Optimistic Rollup 完全被淘汰吗?

- **Optimistic Rollup 和 zkEVM Rollup 并非水火不容的存在, 而是在长期内 (甚至永久性的时间内) 会是互补的方案**.
- **对于 App-rollup 来说, Optimistic 机制在开发与部署上仍然是最简洁易用的方案**.

### b) [OP 和 ZK 未成熟](https://hackmd.io/@vbuterin/zk_slides_20221010#/1)

Optimistic Rollup 的开发进度领先 zkEVM Rollup 两年左右. 但我们 Optimistic Rollup 的标杆 Arbitrum 与 Optimism 都没有在主网完全上线开放的正式版 Fraud Proof.

据 Vitalik 所说, 以太坊基金会 PSE 的 zkEVM 电路有 34469 行代码. 这庞大的代码量需要非常漫长的开发和持续的测试来进行打磨. **我们在几年内都无法完全依赖 ZK 系统所带来的安全性**.

### c) OP + ZK

早在半年以前, Optimism 的 Kelvin 就开始在推特上频繁地讨论 Optimism 结合 zkVM 的可行性.

[他说](https://twitter.com/kelvinfichter/status/1553323106030260224) Optimism 的 Bedrock 不会只是 Optimistic Rollup 的客户端, 而是 Rollup 客户端. **为了完全保证 Rollup 的整体安全性, 客户端 (或许和 Arbitrum 最近的收购有关系?) 与证明的多样性 (Validity Proof 与 Fraud Proof) 才是 Rollup 真正的未来**.

**Vitalik 则完善了 Kelvin 的方案, 认为可以通过 (OP + ZK) + Governance 的 [2 + 1 组合](https://hackmd.io/@vbuterin/zk_slides_20221010#/7)来实现可靠的 Rollup**.

![](/img/next-gen-op/2-of-3.png)

在 zkEVM 完全稳定和成熟前, 工作流程如下:

1. 发布区块
2. 等待 24 小时
3. a) 如果期间没有欺诈挑战, 发布 ZKP, 完全 Finalize 区块. b) 如果有挑战, 则引入 Governance 通过 2 of 3 的模型来裁定最终结果.

在 zkEVM 稳定与成熟后:

1. 发布区块
2. 定期发布 ZKP.
3. a) 如果 ZKP 在指定期间正常发布, 则依其为准. b) 如果 ZKP 并未在期间正常发布 (Prover failure 或有 bug), 则先引入 Optimistic 机制, 直到 ZK 机制恢复.

这两种方案都需要 Optimistic 机制的存在, 从而保证整个 Rollup 系统的 liveness 和 safety.

因此 Optimistic 机制的发展仍然是 Rollup 宇宙版图中的重头戏.

## 1. 第二代 Optimistic Rollup

第二代 Optimistic Rollup 一词源于 [Arbitrum Nitro 的白皮书](https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf)标题. 略早与 Nitro 发布的 Optimism Bedrock 也算是第二代 Optimistic Rollup.

两者的整体差异其实不大 (如果你读 [Arbitrum](https://medium.com/offchainlabs/arbitrum-nitro-one-small-step-for-l2-one-giant-leap-for-ethereum-bc9108047450) 和 [Optimism](https://dev.optimism.io/introducing-optimism-bedrock/) 的 blog, 甚至会觉得是不是一样的), 本质上都是与自己的一个新的 major release. 第二代与第一代的差别也无外乎是如下优化:

- **开发者体验**: 更强的 EVM 等效性和兼容性, L1 互操作性…
- **用户体验**: 更高的吞吐量, 更低的 gas…

但是在设计细节上仍然有取舍的不同, 我们可以在这些差异上看到 Arbitrum 与 Optimism 在构建下一代 Optimistic Rollup 上的推敲.

![](/img/next-gen-op/op-vs.png)

## 2. 第二代 Optimistic Rollup 设计选型对比

[Arbitrum](https://twitter.com/PlasmaPower0/status/1578804117027184641) 与 [Optimism](https://norswap.com/bedrock-vs-nitro/) 的开发人员分别对两者的架构进行了比较和对比, 这里我们就仅讨论与用户或应用开发者有关的点:

### a) 区块时间

区块时间设计的选择主要是两种: 固定时间或者可变时间. 可以理解成 PoS 和 PoW 的以太坊的区别.

- **Optimism: 固定时间 (2 秒)**.

    固定时间可以保证使用区块 (block.number) 来作为时间戳的合约的稳定性, 比如 Sushiswap 的 Masterchef 合约. 这些合约不用时间戳可能是考虑到矿工对时间戳有控制权 ([算是 Selfish mining 或者 MEV?](https://twitter.com/yaish_aviv/status/1555445520646250496)).

    第一代的 Optimism 采用了可变时间 + 1 tx/block 的设计, 因此由于时间计算的问题, Stargate 的奖励发放就出现了一些问题.

    对于 1tx/block 的老设计, Optimism 认为由于区块头的存在, 存储链的开销太大了, 除此之外状态根也需要频繁更新, 成本过高.

- **Arbitrum: 可变时间**.

    可变时间设计主要是为了减小 tx 确认的延迟. 目前一秒最多可以创建 4 个区块, 如果没有 tx 则跳过, 因此是可变时间.

    对于以 block.number 进行计时的合约, Arbitrum 上 block.number 会直接返回以太坊的区块编号, 因此不会有稳定性和适配上的问题. 除此之外 Arbitrum 也提供了相应的预编译来提供 L2 的区块编号.


### b) Geth 的定位

Geth 是以太坊的执行客户端, 占据了约 80% 的节点总量.

- **Optimism: 作为独立引擎**.

    将 Geth 作为独立执行引擎, 而非库处理. 好处就是可以完全重用之前的基础设施, 同时可以无缝切换到其他执行客户端.

- **Arbitrum: 作为库**.

    由于 Arbitrum 有更多的 L2 特定状态, 例如 L1 和 L2 的 gas 定价, 以及 retryable ticket, 因此将 Geth 作为库处理, 使用 hooks 进行调用.


### c) L1-L2 消息 inclusion 延迟

- **Optimism: ~2 分钟**.

    Bedrock 的延迟是几个 L1 块的长度, 最坏的情况是延迟十分钟.

    Bedrock 的架构更像一个 L1, 极端情况下可以通过 reorg 自己来应对 L1 的 reorg.

    超过 10 分钟没被 L2 包含的 tx 就直接被判定为无效了.

- **Arbitrum: 10 分钟**.

    Nitro 延迟十分钟处理, 如果超过十分钟, 可以通过 L1 调用来强制包含 tx.

    Nitro 的目标是为了用户体验, 让 L2 永远不需要 reorg.


两者都是在不同角度对用户体验进行了取舍.

### d) L1-L2 消息重试机制

消息重试机制主要就是为了解决 L1-L2 跨链过程中, L1 确认了, L2 失败的问题.

- **Optimism: 合约中实现**.

    开发者可以参考 L1 Optimism Portal 的实现, 或者在合约内定义自己的重试机制.

- **Arbitrum: 节点中实现**.

    重试机制在 ArbOS 节点中实现.


### e) L2 费用算法

L2 的 gas 计算基本上就是 L2 execution gas + L1 calldata cost.

- **Optimism: 重用 EIP-1559**.

    好处就是钱包和其他基础设施可以无缝接入.

    Optimism 对 L2 gas 的计算基本上是将 L2 execution gas 的成本压到了最低 (99% 都是 calldata cost).

- **Arbitrum: 使用定制系统**.

    由于之前提到的可变区块时间设计, 因此 gas 定价更加复杂, 所以没有采用 EIP-1559.


### f) L1 费用算法

- Optimism:

    L1 gas 水平到 L2 的传输几乎是即时的. 目前 Sequencer 的收益基本完全来源于 L1 gas 费用的乘数, EIP-4844 后, 它们的收入会来自 MEV.

    未来会通过 L1-L2 的消息传递来传输这部分数据, 从而保证安全性 (成为协议一部分, 且可被挑战).

- Arbitrum:

    Arbitrum 的 L1 费用算法通过 L1 gas 的平均值来收取费用, 且通过自己的控制系统来从实际支付的费用中来获取反馈, 从而保证 L1 gas 收取和支出的稳定.

    整体策略中也包括, 为了避免 Sequencer 过度收费, 因此在 gas 价格低时才发布 batch.


除此之外, 两者也探讨了很多具体架构和技术细节上的区别, 但内容过于 domain-specific 且与用户和应用开发者无关, 因此大家可以自行观看.

## 3. Rollup 的未来依然是 Optimistic 的

最近 zkEVM Rollup 以及整个 ZK 生态的热度确实非常高 (Devcon Bogota 基本是 ZK + MEV + 其他), 以至于大多数以太坊研究者或多或少忽视了 Optimistic Rollup 的发展, 以及在第二代中这些有趣的设计细节.

Optimistic 作为 Rollup 的领头部队, 正在 L2 UX 和 DX 上进行试验性的开拓和开创性的创新. 它们所做的可以为 zkEVM Rollup 铺好地基.

在未来两到三年, 甚至更长的时间内, zkEVM Rollup 完全可用之前, Rollup 的主导地位仍会是由 Optimistic 占据, 且 80% 的新 Rollup (App-rollup) 则会采用更为成熟和可用的 Optimistic 机制.

即使是在长期 zkEVM Rollup 成熟后, 为了 Rollup 的整体 liveness 和 safety, Optimistic 依旧会是整个系统中的重要基石.

**The future of rollup is (still) optimistic**.

## Links:

0:

[https://hackmd.io/@vbuterin/zk_slides_20221010#/1](https://hackmd.io/@vbuterin/zk_slides_20221010#/1)

[https://twitter.com/kelvinfichter/status/1553323106030260224](https://twitter.com/kelvinfichter/status/1553323106030260224)

[https://hackmd.io/@vbuterin/zk_slides_20221010#/7](https://hackmd.io/@vbuterin/zk_slides_20221010#/7)

1:

[https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf](https://github.com/OffchainLabs/nitro/blob/master/docs/Nitro-whitepaper.pdf)

[https://medium.com/offchainlabs/arbitrum-nitro-one-small-step-for-l2-one-giant-leap-for-ethereum-bc9108047450](https://medium.com/offchainlabs/arbitrum-nitro-one-small-step-for-l2-one-giant-leap-for-ethereum-bc9108047450)

[https://dev.optimism.io/introducing-optimism-bedrock/](https://dev.optimism.io/introducing-optimism-bedrock/)

2:

[https://twitter.com/PlasmaPower0/status/1578804117027184641](https://twitter.com/PlasmaPower0/status/1578804117027184641)

[https://norswap.com/bedrock-vs-nitro/](https://norswap.com/bedrock-vs-nitro/)

[https://twitter.com/yaish_aviv/status/1555445520646250496](https://twitter.com/yaish_aviv/status/1555445520646250496)

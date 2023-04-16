# 🤯 观点: AI Rollup

> English Version: [ethresear.ch](https://ethresear.ch/t/ai-rollup-replacing-fault-validity-proof-with-ai-oracle-proof/15320), [Mirror](https://mirror.xyz/dashboard/edit/NS4g2NzrFkdGK93KpIhMYB0BLnlZCmsxmhx4V48rZSg)

## Rollup 中的证明

为了[证明 "Rollup的程序" 正在正确执行](https://kelvinfichter.com/pages/thoughts/hybrid-rollups/), 我们需要提供一些承诺 (commitment). 这些承诺可以是在 Optimistic 和 ZK Rollup 中的 Fault Proof 或者 Validity Proof.

为了证明和说服 (convince L1), 我们有[其他几种方式](https://youtu.be/NKQz9jU0ftg?t=696):

- 权威机构 Authority (例如 Coinbase)
- 多签名 Multi-sig (或多权威机构 Multi-Authority)
- 轻客户端 Light Client

## AI 作为 Rollup 中的证明

当前的 AI 模型, 例如 GPT-4, 非常类似于[超计算](https://en.wikipedia.org/wiki/Hypercomputation)或超图灵计算模型. 更具体地说, 它们就像一个 [Oracle Machine](https://en.wikipedia.org/wiki/Oracle_machine), 可以在单个操作中解决某些复杂问题, 就像一个黑匣子.

因此, 我们可以将 AI 用作类似于权威机构的东西, 并让它揭示 Rollup 程序是否被正确执行.

```
Rollup:
Here's pre_state...
Here's rollup programs...
Here's transactions...
Here's my output...
Evaluate whether it's correct.

ChatGPT:
.......
```

## 不同风格的 AI Oracle 证明

除了应该证明 Rollup 程序正在正确执行的承诺之外, 我们可能仍然需要展示承诺是如何正确生成的.

### Optimistic 风格

当挑战被提交到声明时, 我们进行互动游戏, 最终确认出谁是正确的.

互动游戏将在链上执行, 大约需要十次来回步骤 (类似于五个问题，五个ChatGPT的答案).

### ZK 风格

我们需要使整个 AI 模型具有 ZK 化, 以便承诺本身可以被正确执行, 并且模型的版本等可以得到保证.

## 限制

- AI 本身的准确性: 很难测试像 ChatGPT 这样的生成模型的准确性. 如果我们无法保证 AI 本身的准确性, 或者进一步使准确性达到100%, 那么我们无法真正在实践中使用类似的解决方案. 或者我们可以将 AI Oracle 证明包含到 [multi-prover rollup 架构](https://hackmd.io/@vbuterin/zk_slides_20221010#/7)中, 这样我们可以获得 3/4 的多签名...
- On-chain AI 和 zkML 的发展: zkML 和链上 AI 可以结合在一起, 已经有可以执行 GPT-2 的 zkML. 将来, 如果可以使用类似高性能的解决方案来实现 GPT-5 zkML, 那么不同风格的 AI Oracle 证明将成为可能.

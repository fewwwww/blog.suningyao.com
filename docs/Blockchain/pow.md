# ⚒️ 读懂 PoW: 无处不在

> English Version: [Mirror](https://mirror.xyz/msfew.eth/xXnAvKq5WNI1VCA2uqwAdeOcLI-1e1WmwyibtNSZ5rI).

## 0. PoW 简介

工作量证明 (PoW, "一个 CPU 一票") 是一种性感的机制.

它实现了许多功能, 解决了许多问题, 包括

- 去中心化和无需许可的系统 (比特币)
- 总计算能力大时, 安全性高
- 真正干净的私人货币 ([干净的 ETH](https://twitter.com/_hrkrshnn/status/1667874271064989698))
- 相对公平的代币发布 (又是比特币)

唯一的缺点可能是 "潜在垄断" 和 "能源消耗".

但在我看来 (我去年大二上了一门关于废物和能源的课, 并做了关于比特币和废物的研究), 用一些能源来支持一个去中心化的全球金融系统是可以接受的.

总的来说, PoW 是一个很好的机制. 尽管以太坊多年来一直在努力将 PoW 转换为 PoS, 但在以太坊的整体系统和网络或应用层中, PoW [仍占主导地位](https://twitter.com/FrankieIsLost/status/1677012421779787777).

PoW 无处不在, 它们都是 PoW.

## 1. PoW 地址

### EOA & 合约

地址字符串 (EOA 地址或合约地址) 是完全随机生成的, 因此要生成[好看的地址](https://twitter.com/spencecoin/status/1353878002405314560) (如 0xdef1...) 或[更有效的地址](https://medium.com/coinmonks/on-efficient-ethereum-addresses-3fef0596e263) (如带有更多 0 的地址), 需要进行大量随机计算, 就像 PoW 一样.

![](/img/pow/1inch.png)

一些挖掘地址的工具:

- [profanity](https://github.com/johguse/profanity): 臭名昭著的 [hacked](https://twitter.com/0xtuba/status/1572153573605281792) 虚荣地址挖掘工具
- [VanityEth](https://github.com/MyEtherWallet/VanityEth): 另一种常见的虚荣地址挖掘工具
- [maldon](https://github.com/flood-protocol/maldon): 快速 CREATE2 盐挖掘工具

### Function Selector

另一种 "地址" 是 EVM 函数选择器. 通常, 开发人员 (尤其是 MEV 开发者) 会寻找一个有效的、包含更多 0 的地址, 以节省气体. 还有一个函数选择器数据库 ([4byte.directory](https://www.4byte.directory/) 和 [samczsun's eth sig](https://sig.eth.samczsun.com/reference)).

![](/img/pow/selector.png)

一些用于挖掘函数选择器的工具:

- [function-selector-miner](https://github.com/kadenzipfel/function-selector-miner): 用 Rust 编写的函数选择器挖掘工具

### Uniswap v4 Hooks

一个较新的需要 PoW 的 "地址" 是 [Uniswap v4 钩子](https://twitter.com/bantg/status/1668964281277136898). "[钩子的权限由钩子地址决定, 因此你必须磨一个具有所需权限的地址](https://twitter.com/danrobinson/status/1677017661463748608)". 这非常 ["肮脏而聪明"](https://twitter.com/tarunchitra/status/1668990813823533063).

![](/img/pow/hooks.png)

## 2. PoW 防 DDoS

[在理想世界中](https://twitter.com/0xmisaka/status/1511370037306834954), 最高的交易质量意味着: 任何人都可以发送交易 (无审查); 无垃圾邮件; 低费用.

然而, 我们无法实现完美的网络. PoW 是一种简单而优雅的方法, 通过增加额外的计算层来防止垃圾邮件.

### 测试网水龙头

我在日常开发和测试中经常使用 [Goerli PoW Faucet](https://goerli-faucet.pk910.de/).

通常的测试网龙头是注册一个账户, 然后接收固定数量的测试网 ETH, 而 PoW 测试网龙头则允许你根据消耗的工作量来接收更多的测试网 ETH. 更灵活.

### PoW NFT 合约

在流行的 NFT 项目 mint 的初期, gas 通常会飙升到一个非常高的水平, 因为很多人都在进行相同的 mint 操作, 使得网络的整体使用率非常高.

[该 NFT 合约](https://twitter.com/0xCygaar/status/1676699126682075136) 在合约中加入了类似于 "PoW" 的功能, 从而增加了节点方面的 gas 使用量和 mint 成本. 这可以防止 DDoS, 让更多合适的人获得 NFT.

### Arbitrum Sequencer PoW Connection

Rollup 的单一排序器模式总是[面临可靠性和垃圾邮件问题](https://twitter.com/kelvinfichter/status/1643056460836794373). 有多种 Rollup 排序器宕机的情况: [Arbitrum Token Launch](https://twitter.com/kevinsekniqi/status/1638900081339293697) 和 [Optimism Delay](https://github.com/ethereum-optimism/optimism/blob/develop/technical-documents/postmortems/2023-04-26-transaction-delays.md).

Arbitrum 曾[提议通过 PoW 对连接进行评分](https://research.arbitrum.io/t/thoughts-on-arbitrums-proposal-to-score-connections-by-pow/8121), 以阻止 MEV 搜索者对 Arbitrum 排序器进行大规模的 spam attack.

## 3. 结语

在金融领域, 要想获胜, 你必须成为第一、更聪明或作弊.

而 PoW 只要求你成为第一. 也许这样更公平.

![](/img/pow/cheat.png)

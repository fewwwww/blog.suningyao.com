# 😡 锐评 graph-ts

> English Version: [Mirror](https://mirror.xyz/msfew.eth/UwURflJxhm9mzkB3Hq3XOX5ONcLU8F8FNWiwxSS7E2s).

## 前情提要

我们 Hyper Oracle 最近正在构建一个类似 Subgraph 的 zkGraph, 供开发人员编写可转换为 ZK 电路的程序.

在开发 [zkGraph](https://github.com/hyperoracle/zkgraph)的过程中, 我从 The Graph 的许多组件中汲取了灵感和经验, 并试图使其向后兼容 Subgraph.

我仔细研究了为 Subgraph 开发的库 [graph-ts](https://github.com/graphprotocol/graph-tooling/tree/main/packages/ts), 有了一些想法.

### 1. 使用

如果你按照他们软件仓库中的文档下载 npm 库并在 AssemblyScript 项目中使用它, 你会发现没有其他 graph-cli 就无法直接使用.

这与下面的一点有关. 我们无法单独使用该库, 这有点令人困惑.

### 2. 实现语言

graph-ts 的大部分功能都是用 AssemblyScript 实现的, 但也有[大量函数](https://github.com/graphprotocol/graph-tooling/blob/main/packages/ts/common/conversion.ts)只是在 AssemblyScript 中定义, 并未实现. 实现是在使用 Rust 的 [Graph Node](https://github.com/graphprotocol/graph-node/blob/aeacbebd09603fae485430d9ce169cee94fe6f90/runtime/wasm/src/module/mod.rs#L1552) 中进行的.

造成这种情况的主要原因可能是性能问题, 也可能是 AssemblyScript 语言早期存在的问题. 参见[此处的讨论](https://github.com/graphprotocol/graph-tooling/discussions/1387). 题外话: AssemblyScript 由 Near、The Graph 和 Shopify 赞助, 所以他们基本上是早期和唯一的采用者.

由于有多种实现语言, 你无法单独编译整个 graph-ts. 此外, 对于像我这样希望实现 Subgraph 兼容性的开发人员来说, 要猜出所有功能和行为是非常困难的.

### 3. 数学运算符的命名

人们说 [BigInt api 不酷](https://github.com/graphprotocol/graph-tooling/issues/1112). BigInt 的数学运算为 plus、minus、times, 而不是正常的 JS 惯例中的 add、sub、mul. 我们可以直接使用 "+、-、*" 等运算符, 但 IDE 往往会 "报错".

在 zkGraph 的实现中, 我们同时支持数学运算的 plus 和 add, 因此这两种运算符都可以使用.

### 4. Endian

little-endian is the [default](https://github.com/graphprotocol/graph-tooling/blob/c256cb30bb9febf866b48b4fbb21bcaa67c55175/packages/ts/common/collections.ts#L10) in graph-ts. But in reality, all of Ethereum's scenarios use big-endian. I think The Graph may have adopted little-endian, which is more common in all scenarios, for the sake of generality.

In zkGraph, we have implemented a similar little-endian function and an additional big-endian version.

在 graph-ts 中, little-endian 是[默认](https://github.com/graphprotocol/graph-tooling/blob/c256cb30bb9febf866b48b4fbb21bcaa67c55175/packages/ts/common/collections.ts#L10)的. 但实际上, 以太坊的应用场景都使用 big-endian. 我认为, 为了通用性起见, The Graph 可能采用了在所有场景中更为常见的 little-endian.

在 zkGraph 中, 我们实现了一个默认的 little-endian 函数和一个额外的 big-endian 版本.

### 5. 转换

有些转换函数很奇怪. 例如, toHex 和 toHexString 的行为相同, 这是多余的. 这可能又是 AssemblyScript 的遗留问题.

我[提交了一个 pr](https://github.com/graphprotocol/graph-tooling/pull/1389), 但还没合进去. 在 zkGraph 中, toHexString 可以将前缀作为输入, 如果没有输入, 则与 toHex 相同.

### 6. 文档

总的来说, 文档非常不错, 但总感觉它只是在第一版时很好, 并没有进行相应的更新.

例如, 有许多功能在代码实现中, 但在文档中却没有.

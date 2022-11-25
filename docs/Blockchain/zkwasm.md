# 💥 读懂zkWASM: zkVM的未来

> 本文为Hyper Oracle撰写, English Version: [Medium](https://hyperoracle.medium.com/zkwasm-the-next-chapter-of-zk-and-zkvm-471038b1fba6).

## 0. ZK 与 zkVM

### a) 零知识证明的魔法

> [A so-called zero-knowledge protocol is a set of mathematical rules by which one party, usually called the prover, can convince another party, usually called the verifier, that given some instance, the prover knows some witness for that instance.](https://leastauthority.com/static/publications/MoonMath080822.pdf)
>

零知识证明技术正在颠覆和重新定义区块链和 Web3.

零知识证明技术通过密码学和不同的复杂 Moon Math [解决了各种问题](https://zkdeconstructions.substack.com/p/zk-has-nothing-to-do-with-blockchains), 这些问题是区块链自诞生以来由于所固有的.

![](/img/zkwasm/zk-usage.png)

一个 Side Note, Hyper Oracle 将在未来用到 ZK 的所有四个用途.

### b) ZK 应用开发

既然一个以 ZK 技术为核心的应用程序, 协议或网络是如此强大, 你如何开发它呢? 就像任何其他软件开发领域一样, 你需要写代码, 而这取决于[编程语言和工具链](https://www.youtube.com/watch?v=ru-fCNOWals).

简而言之, 对于一个ZK应用开发者来说, 有[两个不同的主要方向](https://www.youtube.com/watch?v=wyBNZzLEgkA).

![](/img/zkwasm/dsl.png)

[我们相信 zkVM 将是 ZK 开发的圣杯](https://mirror.xyz/msfew.eth/Yl64OK3lLG48eJpVB3GxqFEhmWOm6yMlAo9sc1VrQP4), 因为它将帮助所有开发人员快速无缝进入ZK领域.

开发者不需要学习新的语言和硬核密码学, 也不需要担心新的工具链, 证明系统和代数对象, 而是利用他们在 Solidity、Rust、C++ 和所有工具的专业知识即可.

### c) zkVM 如何运作？

zkVM 是一个虚拟机, 通过零知识证明来保证安全和可验证的可信. [zkVM 以无信任的方式输出新状态和证明](https://docs.google.com/presentation/d/1XB96F9ahIlGUevpOTdi-yx_gkrwmX4WGcCjwf3gEiYc/edit#slide=id.g13232b2e9d8_0_401).

![](/img/zkwasm/zkvm.png)

它允许所有在虚拟机中运行的应用程序被赋予零知识证明的超能力. 开发者只需要一个可以在 zkVM 中运行的程序, 而 zkVM 将负责其他所有的事情.

如果用一个简单且可能不确切的例子来说明. zkVM 的构造是[实质上是一个三步的过程](https://www.youtube.com/watch?v=Nz4OYntBVMg).

1. 做一个虚拟机 (实现虚拟机的所有指令集)
2. 加入 SNARK/STARK 引擎 (加入证明系统)
3. 在 SNARK/STARK 引擎中加入 zk (启用隐私)

![](/img/zkwasm/zkvm-architecture.png)

目前最受关注的 zkVM 可能是 Ethereum Layer2 的 zkEVM.

## 1. zkWASM

### a) zkVM 竞赛

还记得构建 zkVM 的第一步吗? 我们有很多指令集的选择.

![](/img/zkwasm/instruction-set.png)

我在 [zk、zkEVM 和 zkVM](https://mirror.xyz/msfew.eth/Yl64OK3lLG48eJpVB3GxqFEhmWOm6yMlAo9sc1VrQP4) 中总结说:"通用 zkVM 是 Web3 的未来." 这就是代表了主流指令集的流派.

zkEVM 受欢迎的原因是, zkEVM 复用了 EVM 在区块链开发者社区中的重要性.

然而, 当我们从宏观来看, 我们看到通用的 zkVM 不仅可以做 zkEVM 能做的事 (便于Web3开发者入门), 还可以从 Web2 的所有成熟生态系统和工具链中获得加成.

![](/img/zkwasm/zkvm-race.png)

### b) WASM

WASM 本质上是一种基于堆栈的虚拟机的二进制指令格式. 它与其他的方案不同之处在于:

- Web 原生:

    ![](/img/zkwasm/web.png)

    - WASM 是[仅有的 4 种 Web 原生语言之一.](https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en) 其他三种是HTML, CSS 和 JavaScript.
    - WASM 是[被所有主流网络引擎所支持](https://webassembly.org/roadmap/).
    - WASM 使任何编程语言都可以在浏览器环境中运行.
- 通用格式:

    ![](/img/zkwasm/compiler.png)

    - WASM 是任何编程语言的编译目标. WASM 生态有像 [emscripten](https://github.com/emscripten-core/emscripten) 这样的编译器 (LLVM-to-WASM).
    - WASM 是[一个以标准化方式运行代码的虚拟化容器](https://aws.amazon.com/docker/). Docker 的创始人[甚至说](https://twitter.com/solomonstre/status/1111004913222324225)如果当时有 WASM, 他就不会创建Docker.
    - WASM 是[一种通用二进制格式](https://wasmer.io/posts/wasm-as-universal-binary-format-part-1-native-executables). 这意味着它可以为任何平台创建本地可执行文件.

WASM 正在通过[以下方式](https://mp.weixin.qq.com/s/MlNDNOChyWAJkeNbts2aIQ)使网络、云、编程语言和游戏生态更加繁荣:

- 通过 [ogv.js](https://github.com/brion/ogv.js/) 或任何其他对性能敏感的模块的 WASM 版本加速媒体解码
- 使用 [yew](https://github.com/yewstack/yew), [seed](https://github.com/seed-rs/seed), [vecty](https://github.com/hexops/vecty) 等创建 Rust 和 Go Web 框架
- 利用 [wasmer](https://wasmer.io/), [Wasmtime](https://wasmtime.dev/), [WasmEdge](https://wasmedge.org/) 等革新云原生和无服务器应用程序范式
- 通过 [wasmboy](https://github.com/torch2424/wasmboy) 和 [pinky](https://github.com/koute/pinky) 提升模拟器性能
- 创建出 [ammo.js](https://github.com/kripken/ammo.js/) 和 [defold](https://github.com/defold/defold) 等游戏引擎
- 创建出新的编程语言, 包括 [AssemblyScript](https://github.com/AssemblyScript), [walt](https://github.com/ballercat/walt), [grain](https://github.com/grain-lang/grain) 等

此外，WASM还[在区块链领域被广泛采用](https://blog.devgenius.io/webassembly-wasm-in-blockchain-f651a8ac767b):

- Polkadot [认为 WASM 是去中心化系统开发的基础](https://www.parity.io/blog/wasm-smart-contract-development/). 他们 all in WASM, 并[认为 WASM 是 lesser evil than EVM](http://troubles.md/why-wasm/).
- Cosmos 将 [CosmWasm](https://cosmwasm.com/) 定位为构建 dApp 的主要引擎.
- Near 认为 [WebAssembly是去中心化网络的核心](https://www.youtube.com/watch?v=s6-DtXFLeyE). Near [使用 AssemblyScript 作为其智能合约的首选语言](https://madewithwebassembly.com/showcase/near-protocol/%EF%BC%89%E3%80%82).
- 即使 Ethereum 没有使用 WASM, [Solang](https://github.com/hyperledger/solang) 也可以将 Solidity 代码编译成 WASM (EVM→WASM).

### c) zkWASM

zkWASM 是一个 zkVM, 它的整个 WASM虚拟机 是用 zkSNARK 电路编写的.

zkWASM 将赋予任何运行在 WASM runtime 中的程序 trustless 计算的能力. 简单地说, zkWASM 结合了 zkVM 的最佳优势以及 WASM 的丰富生态系统.

近年来, WASM一直在[从浏览器走向云端](https://pradeepl.com/blog/webassembly-from-browser-to-cloud/%EF%BC%89%E5%92%8C%E5%8C%BA%E5%9D%97%E9%93%BE%E3%80%82%E7%8E%B0%E5%9C%A8%EF%BC%8CzkWASM%E5%B0%86zkVM+WASM%E7%9A%84%E6%96%B0%E6%A8%A1%E5%BC%8F%E5%B8%A6%E5%88%B0%E4%BA%86%E5%8C%BA%E5%9D%97%E9%93%BE%E8%83%8C%E6%99%AF%E4%B8%8B%EF%BC%8C%E8%A7%A3%E5%86%B3%E4%BA%86%E5%8A%A0%E5%AF%86%E5%8E%9F%E7%94%9F%E5%AE%89%E5%85%A8%E3%80%81%E4%BF%A1%E4%BB%BB%E5%92%8C%E9%9A%90%E7%A7%81%E9%97%AE%E9%A2%98%E3%80%82)和区块链. 现在, zkWASM 将 zkVM+WASM 的新模式带到了区块链背景下, 解决了加密原生安全、信任和隐私问题.

![](/img/zkwasm/panda.jpg)

## 2. zkWASM 优势

## a) zkWASM 是 Adoption

之所以 zkEVM 会在 ZK 战争中获得巨大优势, 是因为 [EVM 是智能合约最常用的分布式运行环境](https://twitter.com/toghrulmaharram/status/1595503593192362007%EF%BC%89%E3%80%82).

EVM 和 Solidity 有详细的技术文档, 有庞大的工具库、教程和开源项目的生态系统, 这些资源任何人都可以访问. 其他解决方案无法与 EVM 的主导地位相匹敌. 因此, 这种 adoption 使得 zkEVM 成为以太坊扩展的皇冠.

我在[前一篇文章](https://mirror.xyz/msfew.eth/JJudP_Kf-IS6VhbF-qU0BUor1Ap6SFEb0TzYOHZ34Rc)中提到, Polygon zkEVM 是我最期待的 zkEVM 解决方案. 这也是由于 adoption.

Polygon zkEVM 可能不是最 "[Type-1](https://vitalik.ca/general/2022/08/04/zkevm.html)" 和原生的, 可能没有最好的性能. 不过, Polygon 的优势在于其 PoS 链具有巨大的先发优势, 拥有忠实的开发者社区、生态伙伴和各种黑客松资源. 在 zkEVM 的采用层之上, Polygon zkEVM 还有一个额外的 adoption layer.

那么, zkWASM 拥有的潜在采用将是空前的.

它有一个比整个 Web3 生态系统大得多的 WASM 生态系统, 而 Web3 生态系统的大部分是 WASM 生态系统的直接延伸. zkWASM 所拥有的生态系统将使它从一开始就是一个成熟的应用.

![](/img/zkwasm/adoption.png)

## b) zkWASM 是 Composability

在 Web3 的世界里, 可组合性与开源共同使得生产力和创新的指数式增长. [可组合性对软件来说就像复利对金融一样](https://twitter.com/cdixon/status/1448528513745760261).

在 Cairo VM 中, 我们看到社区正在构建 [Kakarot zkEVM](https://github.com/sayajin-labs/kakarot); 在 RISC0 RISC-V zkVM 中, 我们看到 [Sovereign Labs](https://github.com/Sovereign-Labs) 试图用RISC0 的 zkVM 和 Rust 语言的 EVM 构建一个 zkEVM; 在 EVM 中, 我们也看到了许多 EVM 中的 EVM, 如 [evm2](https://github.com/hananbeer/evm2) 和 [HyVM](https://github.com/oguimbal/HyVM), 甚至 [Python解释器在EVM中的概念](https://twitter.com/high_byte/status/1576576874012348421).

作为一个图灵完备的虚拟机, zkWASM可以做任何以上的事情, 而 WASM 将使这些事情更有可能, 更容易实现.

这些只是你可以在 zkWASM 上建立的一部份创新, 但它们足以为 Layer3 概念开辟新的叙述和可能性.

我们很高兴看到开发者如何在 zkWASM 上建立激动人心和富有创造性的新应用, 并通过 zkWASM 运行时将现有的成熟应用升级到 zk 化的新时代.

## c) zkWASM 是 All-around

记得 zk 是关于安全、可扩展性、互操作性和隐私四个方面的提升吗?

- zkWASM 可以利用所有这些方面的优势.

记得 [Crypto-Native DApp Architecture](https://mirror.xyz/msfew.eth/nA0_f-ef_dN1tE0DACDi6TLN9EM4hJn27H7SHYKX0qU) 吗?

- zkWASM 是解决 dApps (RPC, 索引, Oracle, 自动化) 的链下中心化和安全问题的最优方案.

记得 zkWASM 的 WASM 运行时是作为 Web 的一个巨大组成部分的吗?

- zkWASM 不仅仅解决区块链和 dApp 的问题. 例如, ZK-ML和链上 ML 的实现可以因为 zkWASM 的存在而得到加速。

## d) zkWASM 是 Decentralization

Hyper Oracle 的首要任务是让所有 DApps 实现端到端的去中心化. 我们也将使我们的协议最大限度地去中心化.

还记得 WASM 是网络上唯四的可运行的语言吗? zkWASM 在未来可能在浏览器中运行. Hyper Oracle 将探索在网络上运行 ZK Prover 的可能性. 像 [mina-rs](https://github.com/ChainSafe/mina-rs) 一样, 你可以点击一个链接, 就可以成为一个节点, 参与网络和采矿.

为什么这很重要?

- Permissionless: 任何人都可以成为一个节点. 节点没有中心化 Sequencer 或者超高的硬件要求.
- Sovereignty: 任何人都可以运行自己的节点. 这有助于保护隐私, 并防止审查制度.
- Diversity: 任何人都可以为网络的客户端和地理多样性作出贡献. 这是一个连以太坊都在努力解决的问题.
- Performance: 任何人都可以通过运行节点提高网络的性能.

另外，甚至可能[在你的洗衣机里运行 zkWASM](https://github.com/piranna/wasmachine)？

## e) zkWASM 是 Performance

有声音认为, 通用的 zkVM 可能比特制的 zkVM 的性能更差. 但这其实不太正确.

[更好的做法](https://kelvinfichter.com/pages/thoughts/hybrid-rollups/)是先建立一个像 zkWASM 这样的通用解决方案, 然后再对它进行优化. 我们不应该用战术上的勤奋来掩盖战略上的妥协.

这是一个简单的选择题, 是放弃 WASM 的巨大好处, 还是节省额外的性能优化?

对于优化, 有非常多的角度可以切入, 每一个 [Taiko](https://mirror.xyz/labs.taiko.eth/w7NSKDeKfJoEy0p89I9feixKfdK-20JgWF9HZzxfeBo) 和 [ZKonduit](https://www.youtube.com/watch?v=r-tlqdO1bRs&t=573s) 提到的点都可以带来巨大的优化水平:

- 像 Hyperplonk 和 Caulk 这样的系统级别的优化
- ZKP 专用硬件 (FPGA/ASIC)
- 证明系统的 Composition
- [常用的优化和技巧](https://docs.google.com/presentation/d/1eHVzLPRIEziCJ_oDuJG0yZ-5klNj_daqioC0UaGDaiw/edit?usp=sharing)
- 代码层面的调整
- 聚合和递归
- 融合与抽象

## 3. 谁在使用 zkWASM

Hyper Oracle 正在与 [Delphinus Lab](https://delphinuslab.com/) 合作, 探索 zkWASM 在索引和自动化中间件协议方面的前沿研究和开发.

zkWASM 所带来的通用性和 WASM 生态系统, 允许开发者在不需要任何修改的情况下, 将零知识证明的超能力赋予任何自定义逻辑的程序.

zkWASM 正在完成对 Hyper Oracle 的一些基础设施组件的全面支持. 之后, Hyper Oracle 会将这些基础设施组件作为 Public Goods 并且完全开源.

## 4. 什么是 zkWASM

最后，让我们总结一下 zkWASM 是什么.

从架构上, zkWASM 是:

- zk 虚拟机
- WASM 仿真器

从功能上, zkWASM 意味着:

- Adoption
- Composability
- All-around
- Decentralization
- Performance

从愿景来看, zkWASM 是 ZK 和 zkVM 的下一章节和未来.

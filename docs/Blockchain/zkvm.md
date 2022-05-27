# 🧮 读懂zk: zk, zkEVM, zkVM

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/808jMXvIUqB973aVHrAzGQ)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-zk-zkvm-zkevm-and-their-future-6fb4b8b527d8).

> 在推特上受到了 ZKFM、Scroll、Veridise、DCG、Bain Crypto 等机构以及密码学研究者 @ZKcommunity、@VeridiseInc、@captain8299、@OrestTa、@tkhrypto、@BenarrochDaniel、@kobigurk、@daddysether、@SandyPeng1、@_weidai 等的支持与讨论. 在中文社交圈受到了 TrapdoorTech、量子链等零知识证明研究与开发机构的支持.

## TL; DR

- 零知识证明技术, 可以保证计算的完整性、正确性和隐私, 在区块链扩容和隐私中有应用.
- zk-SNARK 和 zk-STARK 各有优点, 而它们的合理结合更加有潜力.
- zkVM 能赋予应用零知识证明能力, zkVM 分为使用主流、EVM 或全新指令集.
- EVM 的适配包括 EVM 兼容性、等同性和 Specification 上的适配.
- zkEVM 是兼容 EVM 而又零知识证明友好的环境, 主要分为原生和编译流派.
- 基于原生的 zkEVM 是以太坊和区块链的未来.
- 支持 Solidity 生态的通用 zkVM 是 Web3 的未来.

## 0. 零知识证明

不严谨但简单易懂地来介绍一下零知识证明:

你在上小学. 老师是验证者, 你作为学生是证明者. 你如何证明你掌握了一元二次方程的求解公式呢? 那就需要数学考试.

老师会随机出 10 道相关的题目, 而你如果掌握了, 则可以把他们都做出来. 在这个过程中, 你没有背诵或者默写求解公式的具体内容, 但是老师却可以很简单地验证你的知识掌握程度.

![](/img/zkvm/fight.png)

其实这就是 [Tartaglia 与 Cardano](https://brewminate.com/a-mathematical-duel-in-16th-century-renaissance-venice/) (对的, 就是这个名字) 争夺谁是一元三次方程发现者时所采用的方法. 他们都不想告诉对方自己公式的内容, 但是通过做题, 就可以很容易地验证且过程中不透露知识地, 判断他们是否掌握了这一知识.

零知识证明有什么用呢? 用处就是, 整个过程可以节省计算算力和压缩链上空间, 同时也可以对隐私有保护, 符合区块链去信任的特点以及密码学的基因.

## 1. SNARK 和 STARK

> 区块链领域中所用到或者提到的 “zk” 通常不是真正的零知识证明, 而经常是 Validity Proof. 由于相关词汇的混乱, 所以本文中的某些地方会延续这些 “误用”.
>

![](/img/zkvm/proof.jpeg)

在目前的区块链版图中, zk 可以说是区块链扩容 (不 zk 的 Validity Proof) 与隐私技术 (真正的 zk) 的最前沿与最优解决方案, 在 [Tornado.cash](http://Tornado.cash), ZCash, zkSync, [zk.money](http://zk.money), Filecoin, 和 Mina 等项目中都有使用.

目前的技术方案主要分为 SNARK 以及 STARK 两类. [STARK 中的 S 代表可扩展的, 意味着被证明的语句有重复的结构, 且验证算法更快更加 Scalable, 而 SNARK 支持任意的电路, 这些电路被预处理以实现简洁的证明.](https://twitter.com/_bfarmer/status/1520091937444925440) 其中对 SNARK 的技术实践占据了主导地位, STARK 主要有 StarkWare 在已上线的产品中大规模采用. 以下是它们之间的对比.

![](/img/zkvm/snark-stark.png)

[从 Meme 的角度而言](https://twitter.com/EliBenSasson/status/1514242653671546890), STARK 比 SNARK 优秀 (😊, Star Wars, Star Trek).

如果 SNARK 是以太坊 2.0 的未来, 那么 STARK 就会是以太坊 3.0 的未来. 正经的来说, STARK 的优势[在于](https://medium.com/starkware/the-cambrian-explosion-of-crypto-proofs-7ac080ac9aed)

- 更低的 gas (更能 scale)
- 更大的 batch size (更能 scale * 2)
- 更快的证明 (更能 scale * 3)
- 没有 trusted setup (生成的参数仅对当前的应用有效, 若出现了修改需要重新 setup)
- 后量子安全

但是 STARK 生成的证明的体积更大, 并且还大不少, 由于比如 WASM 的一些限制, 可能会在构建时需要[额外的操作](https://hackmd.io/V-7Aal05Tiy-ozmzTGBYPA?view=) (这里是 SNARK). Mir 前段时间在 Starky 给出了一个 [AIR-based STARK](https://twitter.com/_bfarmer/status/1511486435077017607) 的[实践](https://github.com/mir-protocol/plonky2/tree/main/starky), 是 [Plonky2](https://blog.polygon.technology/introducing-plonky2/) 的一部分(Plonky2 和 Starky 的关系[比较复杂](https://twitter.com/dlubarov/status/1520090852093091840)...). 我个人认为, 体积大可以通过各种手法来优化, 但是算法本身的时间复杂度是很难再进一步压缩的.

这些零知识证明技术可以通过合理的结合来构建更强大的应用. 比如 Polygon Hermez 就[通过 SNARK 来证实 STARK 的正确性](https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/), 从而减少最终发布证明时的 gas fee.

总结来说, SNARK 和 STARK 都是优秀的零知识证明技术, 各有千秋, 而它们的合理结合更加有潜力.

## 2. zkVM

前面所说到的 [Tornado.cash](http://Tornado.cash) 和 [zk.money](http://zk.money) 类似都是仅支持转账操作的零知识证明应用, 不支持通用的计算. 类比来说, 这些应用都只有比特币的功能, 远远不及以太坊的图灵完备, 更不要说建生态了 (比特币上的智能合约一直没做出生态来).

![](/img/zkvm/radius.jpeg)

zkVM 就是一个由零知识证明来保证安全可验证可信特性的虚拟机, 简单来说就是, 输入旧状态和程序, 返回新状态. 它能让所有的应用都被赋予零知识证明的超能力.

[Miden 在 ETH Amsterdam 的演讲](https://www.youtube.com/watch?v=81UAaiIgIYA)用一张图很好概括了 zkVM 到底是什么.

![](/img/zkvm/zkvm.png)

zkVM 的优点:

- 易用: 开发者不用学密码学或者零知识开发就可以使用 zkVM 来运行程序保证计算安全 (不代表完全无门槛)
- 通用: zkVM 可以给任何程序和计算生成证明.
- 简洁: 相对比较少量 constraints 就可以描述整个 VM (不用重复生成整个 VM 的电路).
- 递归: 免费的递归特性. 和通用性一样, 对 VM 的验证可以通过 VM 来进行. 这个就挺好玩, 比如你可以在 zkVM 里放一个 zkVM, 就类似 StarkWare 说的 [L3 的概念](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f).

zkVM 的缺点:

- 计算架构特殊: 并非所有零知识证明系统可以被用来做 zkVM.
- 性能问题: 电路需要优化, 可以为特定计算进行针对性优化.

现在主流的 zkVM 有三大类, 括号中是它们的指令集: 主流 (WASM, RISC-V)、EVM (EVM bytecode)、ZK-Optimized (全新指令集, 针对零知识证明所优化, 比如 Cairo 和 zkSync). 以下是根据 Miden 在 ETH Amsterdam 的演讲所整理的类型对比图:

![](/img/zkvm/zkvm-type.png)

很多零知识证明开发生态所做的事情大多是让开发者能用 Circom 库 (以及 snarkyjs 这种) 或者其他新创造的语言 (Leo 或者 Cairo 这种语言都有[奇奇怪怪的限制](https://trapdoor-tech.github.io/zkstark-book/Cairo_example/frame.html)) 来做通用 zk DApp 的开发, 但是没有像以太坊上用 Solidity 那么直接和易学.

除此之外, 还有很多项目, 比如 zkSync, Scroll, 或者 Polygon 旗下的好多家都在尝试做 zkEVM 或者其他的 zkVM.

## 3. EVM

EVM 就是以太坊的虚拟机, 也可以理解为运行智能合约的一套执行环境.

数年来, 各个公链都在不停尝试着去兼容 EVM, 从而接入到以太坊的开发生态当中. 对于这个概念, 衍生出了 EVM 兼容, 等同和其他一些[定义](https://twitter.com/toghrulmaharram/status/1518270138876891138).

- EVM 兼容性: Solidity 等语言层面的适配.
- EVM 等同性: EVM 字节码层面的适配.
- EVM Specification 适配: 也就是通常所说的真正的 zkEVM, 大多情况下甚至是向后兼容的[优化后的超集](https://twitter.com/gluk64/status/1518617582420611072), 能提供账户抽象 (就是每个账户都是一个智能合约) 等 EVM 没有提供的特性.

## 4. zkEVM

我们再来解读一下 zkEVM. 定义上来说, zkEVM 是一种兼容 EVM 同时又对零知识证明友好的虚拟机, 能保证程序, 操作, 和输入输出等的完全正确性.

对于实现通用计算来说, 要做 zkEVM 主要需要解决两个难点:

### a) 电路复杂

不同的合约需要生成不同的电路, 而且这些电路很 “复杂”.

这方面主要就要靠各种优化了, 比如 Aleo (不过它不是 direct ZK 这一类... 只是为了举例说明优化) 通过分布式 Cluster 来并发计算 Proof, 或者通过各种硬件上的优化来加速.

### b) 设计困难

zkEVM 不止要对 EVM 进行重构, 对[以太坊的整体状态转换都要用零知识证明技术进行重构](https://twitter.com/kelvinfichter/status/1522389737021001734).

EVM 设计的时候就没想到后面要做 zkEVM, 造成了非常大的困难. 导致了有两个门派的路线, 都在图里了.

![](/img/zkvm/zkevm.png)

或者说按 VM 的架构来分, 就长这样 (超级感谢 Scroll Tech 的原图总结!). Opcode 指的是 EVM Opcode. 其中 StarkWare 部分是用 Warp 来将 Solidity 转成 Cairo 合约, 或者直接用 Cairo 写合约, 一样能获得不错的开发体验和全套工具.

![](/img/zkvm/zkevm-type.png)

在开发者和用户层面, 这几个方案其实我认为是基本无差别的, 但是在基础设施上, 越靠右的方案 EVM 兼容性越好, 可以无缝接入 Geth 等基础设施, 但开发进度基本上也越慢.

## 5. zkEVM 和 zkVM

zkEVM 的存在我认为是在以太坊生态上去翻新和打补丁, 能为以太坊及其生态的繁荣添砖加瓦, 而 zkVM 的存在却不一定是给以太坊做加强, 同时也具有更大的想象力.

StarkNet 的 Cairo VM 尽管可能不是我想象中最完美的 zkVM, 但它能比 EVM 或者 zkEVM 干更多的事, 同时这些不止是停留在 EIP 级别的功能拓展. Cairo VM 上可以[跑机器学习模型](https://twitter.com/guiltygyoza/status/1458494941684850688), 甚至现在还有机器学习模型平台正在 StarkNet 上[建设](https://gizatech.xyz).

相比 zkEVM, 一个 zkVM 会更加容易被构建 (无需担心 EVM 的技术债), 更加灵活 (无需担心 EVM 的更新), 更加容易优化 (电路和证明器的软硬件优化比构建 zkEVM 简单和便宜非常多).

当然 zkVM 的一个最微小但很致命的缺点就是, 如果 zkVM 无法支持 EVM 兼容 (Solidity 语言层面), 那么 zkVM 就很难像 EVM 一样有最完备和成熟的 Web3 开发生态.

zkVM 或许是更大的趋势, 能让对 EVM 的纵向优化, 变成 EVM 生态的横向拓展, 跳出了 EVM 的限制.

## 6. zkVM 的未来

如果能有一种通用的 zkVM 能够让所有编程语言的智能合约, 不止是 Solidity, 不止是 Cairo, 而是 Rust, C++, Go,在零知识证明的加持下安全运行呢? ([Stellar 尝试过, 但失败了](https://www.reddit.com/r/Stellar/comments/q6ar3w/what_happened_to_zkvm_on_stellar/).)

正如 [@kelvinfichter](https://twitter.com/kelvinfichter) 所说的: [Why zkEVM if zkMIPS](https://twitter.com/kelvinfichter/status/1516509144068464644)? 正如 [@KyleSamani](https://twitter.com/KyleSamani) 所说的: [EVM is a bug not a feature](https://twitter.com/KyleSamani/status/1511683267770163200). Why zkEVM if zkVM?

[Winterfall](https://github.com/novifinancial/winterfell#Usage) 或者 [Distaff](https://github.com/GuildOfWeavers/distaff) 或者 [Miden VM](https://github.com/maticnetwork/miden) 等 zkVM 都没有做到非常好的开发友好度. Nervos 有 RISC-V 的 [VM](https://docs.nervos.org/docs/basics/concepts/ckb-vm/), 但是 Nervos 没有用零知识证明技术.

现状下最优解的方案就是构建一个 WASM 或者 RISC-V 的 zkVM, 最好能支持 Rust, Go, C++, 甚至 Solidity (zkSync 好像可以立大功) 等语言. 如果有这么一个通用 zkVM, 那么对于 zkEVM 会是降维打击.

Web3 开发者的数量大概占所有开发者的 0.07%, 也就可以推断出, Solidity 开发者的数量实际上会比 0.07% 更少, 会用 Cairo 写合约或者用 Leo 写电路就更少了. 这样完美的 zkVM 所针对的是几乎 100% 的开发者, 任何开发者用几乎任何语言都可以得到一个完美的零知识运行环境.

![](/img/zkvm/eco.jpeg)

如果 Web3 和 Crypto 有统治世界的一天, 我认为绝对不会是 EVM 生态占据 100% 的所有开发者, 而是所有的开发者会慢慢转化为 Web3 和 Crypto 开发者. 这就是通用的 zkVM 的绝妙之处.

原生 zkEVM 是区块链的未来.

通用 zkVM 是 Web3 的未来.

> Scroll Ye Zhang 补充: STARK 算法复杂度也不低的, 我觉得普遍意义上因为 STARK 被 StarkWare 过度 market 大家对他的性能有很深的误解.... 其实 STARK 跟 SNARK 的[界限已经没那么分明](https://twitter.com/izmeckler/status/1527794750190800896)了, STARK 快主要是避开了椭圆曲线的计算 (我补充: 数学工具用的不一样), 选择有限域的时候也更灵活, 但是实际也得用大量的 FFT.

> 我补充: 用户的需求要优先满足. 太少的功能 + 更高 TPS + 更低 gas = 还是没人用. 用户心智很重要. 比如一个抗 MEV 的 zk Rollup (架构如下图, zk 用于保护时间锁的有效性, 抗 DoS 供给) 仅支持转账, 没用. 因为对于抗 MEV, 用户可能更感兴趣怎么赚 MEV 的钱. 抗 MEV 的 AMM 也没啥用.

> [Podcast](https://twitter.com/i/spaces/1OwxWzkDQmZJQ) Eli 补充: zk Rollup 的去中心化不是必要的, 因为 1. 证明从数学上无法伪造 (zk: 有罪推定, based on Math; op: 无罪推定, based on game theory), 2. 用户可以通过 L1 的 DA 来重建所有状态, 3. 信任模型本身就是智能合约, 中心化性能更好. 但是会导致 censorship 等问题, 所以需要去中心化的 sequencer、prover、da.

> [Podcast](https://twitter.com/i/spaces/1OwxWzkDQmZJQ) Eli 补充: Cairo VM 就一个 pc 和两个 register, 能跑就行.

> 冰链科技张老师补充: 从计算机体系结构角度讲, 一般不太会说专门支持语言的 VM, 而是支持指令集. EVM 指令集就是专门为 Solidity 设计. 通用 VM 是因为可以把各种语言编译成可运行的指令集而通用.

## 相关文章

[https://brewminate.com/a-mathematical-duel-in-16th-century-renaissance-venice/](https://brewminate.com/a-mathematical-duel-in-16th-century-renaissance-venice/)

[https://twitter.com/_bfarmer/status/1520091937444925440](https://twitter.com/_bfarmer/status/1520091937444925440)

[https://twitter.com/EliBenSasson/status/1514242653671546890](https://twitter.com/EliBenSasson/status/1514242653671546890)

[https://hackmd.io/V-7Aal05Tiy-ozmzTGBYPA?view=](https://hackmd.io/V-7Aal05Tiy-ozmzTGBYPA?view=)

[https://twitter.com/_bfarmer/status/1511486435077017607](https://twitter.com/_bfarmer/status/1511486435077017607)

[https://github.com/mir-protocol/plonky2/tree/main/starky](https://github.com/mir-protocol/plonky2/tree/main/starky)

[https://blog.polygon.technology/introducing-plonky2/](https://blog.polygon.technology/introducing-plonky2/)

[https://twitter.com/dlubarov/status/1520090852093091840](https://twitter.com/dlubarov/status/1520090852093091840)

[https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/](https://blog.polygon.technology/zkverse-deep-dive-into-polygon-hermez-2-0/)

[https://www.youtube.com/watch?v=81UAaiIgIYA](https://www.youtube.com/watch?v=81UAaiIgIYA)

[https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)

[https://trapdoor-tech.github.io/zkstark-book/Cairo_example/frame.html](https://trapdoor-tech.github.io/zkstark-book/Cairo_example/frame.html)

[https://twitter.com/toghrulmaharram/status/1518270138876891138](https://twitter.com/toghrulmaharram/status/1518270138876891138)

[https://twitter.com/gluk64/status/1518617582420611072](https://twitter.com/gluk64/status/1518617582420611072)

[https://twitter.com/kelvinfichter/status/1522389737021001734](https://twitter.com/kelvinfichter/status/1522389737021001734)

[https://twitter.com/guiltygyoza/status/1458494941684850688](https://twitter.com/guiltygyoza/status/1458494941684850688)

[https://gizatech.xyz](https://gizatech.xyz/)

[https://www.reddit.com/r/Stellar/comments/q6ar3w/what_happened_to_zkvm_on_stellar/](https://www.reddit.com/r/Stellar/comments/q6ar3w/what_happened_to_zkvm_on_stellar/)

[https://twitter.com/kelvinfichter/status/1516509144068464644](https://twitter.com/kelvinfichter/status/1516509144068464644)

[https://twitter.com/KyleSamani/status/1511683267770163200](https://twitter.com/KyleSamani/status/1511683267770163200)

[https://github.com/novifinancial/winterfell#Usage](https://github.com/novifinancial/winterfell#Usage)

[https://github.com/GuildOfWeavers/distaff](https://github.com/GuildOfWeavers/distaff)

[https://github.com/maticnetwork/miden](https://github.com/maticnetwork/miden)

[https://docs.nervos.org/docs/basics/concepts/ckb-vm/](https://docs.nervos.org/docs/basics/concepts/ckb-vm/)
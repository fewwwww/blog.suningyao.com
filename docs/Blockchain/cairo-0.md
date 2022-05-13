---
sidebar_position: 50
---

# 学习Cairo智能合约开发 (零) 🇪🇬

## 什么是 Cairo? 为什么学习 Cairo?

在介绍 Cairo 之前, 我们首先要知道 StarkNet.

StarkNet 是 StarkWare 推出的一个以太坊的 ZK-Rollup Layer 2, 它的安全性是通过 STARK 的零知识证明技术来保证, 也就是通过密码学与数学来确保计算的安全性与可靠性. StarkNet 的优点就在于比 Optimistic Rollup 更优异的性能, 更低的 gas fee, 以及更可靠的安全性 (由数学保证).

Cairo 则是 StarkNet 中所使用的智能合约语言. 你可能想问, 为什么需要一个新的语言, 而不是用 Solidity 直接来写呢? 这是因为 EVM 的设计对生成零知识证明并没有那么友好, 所以想要为通用计算生成证明从而达到计算可靠性, 最有性价比的方案就是设计一个对零知识证明友好的新的 ZKVM.

## [Cairo VM 的设计](https://trapdoor-tech.github.io/zkstark-book/chapter_2.html)

我们上文中提到的 ZKVM 就是 Cairo 的 VM. 它是一个非常精简的虚拟机模型, 有以下几个比较好玩的特性:

- 只支持在有限域 Fp 上进行乘法和加法, 其他操作都基于乘法和加法实现

- 没有类似 x86 的通用寄存器

- 内存是只读, 无法修改, 不是放在 stack 里, 也不是放在寄存器中.

这些都是为了零知识证明特性而做的一些取舍. Cairo 的汇编代码其实是比较简陋的, 所以我们没办法手写汇编, 因此开发应用时我们会使用 Cairo 语言.

## Cairo 的生态与工具

生态方面, 目前 StarkNet 生态上线仅几个月, 已经有非常多独特的项目. 你可以查看 [starknet-ecosystem 网站上的生态项目](https://www.starknet-ecosystem.com).

工具方面, 如果你会 Solidity 语言的合约开发的话, 甚至可以不用学习 Cairo, 而是使用 [Warp transpiler](https://github.com/NethermindEth/warp), 将 Solidity 合约转换成 Cairo 合约, 但是这会有一些限制.

模版方面, OpenZeppelin 也给出了 [Cairo 合约的实践](https://github.com/OpenZeppelin/cairo-contracts). 甚至还推出了 [Cairo 语言的无代码编辑器](https://wizard.openzeppelin.com/cairo).

标准方面, Cairo 继承了 Solidity 开发的标准和习惯.

钱包方面, [Argent](https://www.argent.xyz) 是移动端和网页端支持 StarkNet 的一款钱包, 目前 Argent 对 StarkNet 有单独的应用版本支持.

工具链 IDE 方面, Cairo 和 Solidity 不是直接无缝切换的, 但从 OpenZeppelin 等组织的行动来看, 其他开发工具应该很快给 Cairo 做支持. 目前我们可以使用 Nile、HardHat、StarkNet CLI 来进行开发.

## Cairo 合约的特性

### 文件结构

Cairo 合约的每个文件对应 Solidity 合约的每个 contract 类, 也就是说 Solidity 合约里有三个 contract 类的话, 就需要分三个 Cairo 文件. Cairo “contract 类” 之间的 import 等标准还在社区的讨论阶段, 各种行为没有被编译器 enforce. Cairo 合约会有前端合约, 前端合约会引入 base 合约中的内部方程, 然后 wrap 这些方程为外部方程.

### 账户抽象

StarkNet 上的交易和以太坊上是不一样的, 没有 originator 的概念 (“From”). 而是被发送到一个 “entry point”, 也就是对应账号的智能合约, 能够做用户认证、进行资金防护和其他很多在建设中的不同 UX.

目前这个概念也没有被 enforce. 交易可以被发送到任何合约, 这时候在 receiver 的视角 sender 是 0.

## 环境搭建

1. 安装 Cairo 环境

    创建 python 虚拟环境并安装 cairo-lang

    ```
    python3 -m venv ~/cairo_venv
    source ~/cairo_venv/bin/activate
    brew install gmp
    pip3 install ecdsa fastecdsa sympy
    pip3 install cairo-lang
    ```

2. 创建测试程序

    创建一个名为 test.cairo 的程序, 代码内容如下:

    ```python
    func main():
        [ap] = 1000; ap++
        [ap] = 2000; ap++
        [ap] = [ap - 2] + [ap - 1]; ap++
        ret
    end
    ```

3. 编译 Cairo 程序

    在虚拟环境中运行以下指令

    ```
    cairo-compile test.cairo --output test_compiled.json
    ```
    之后会生成一个 json 文件, 包含了很多数据.

4. 运行 Cairo 程序

    ```
    cairo-run \
      --program=test_compiled.json --print_output \
      --print_info --relocate_prints
    ```

    之后会打印出程序的运行步数, 使用的内存大小和一些寄存器执行后的值.

5. 使用 tracer 查看程序具体执行

    加上 tracer flag.

    ```
    cairo-run \
      --program=test_compiled.json --print_output \
      --print_info --relocate_prints \
      --tracer
    ```

    浏览器进入 `http://localhost:8100/` 即可查看程序的具体执行和中间状态.

6. 除了在本地进行运行以外, 你还可以在 [Cairo Playground](https://www.cairo-lang.org/playground/) 进行实验.

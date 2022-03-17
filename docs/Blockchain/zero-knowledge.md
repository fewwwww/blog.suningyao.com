---
sidebar_label: '从零知识到零知识证明 🎭'
sidebar_position: 1
---

# 从零知识到零知识证明 🎭

> 全文都是对以下文章的精准概括抄袭, 如果大家想好好学习的话可以搜索他们的公众号和 GitHub, 看真正的真知识.
>
> https://learnblockchain.cn/article/1078
>
> https://learnblockchain.cn/article/270
>
> https://learnblockchain.cn/article/271
>
> https://kndrck.co/posts/practical_guide_build_zk_dapps/

## 0. 好玩的小资料

首先咱不聊难的, 列点几个相关的小资料, 大家平常肯定也看过, 但是对之后的理解会有帮助. 大家有兴趣可以看下, 不看也没事其实, 如果真的去看了估计这篇文章看不完了, 挑点短的看就行, 或者看下短视频平台解说版的.

1. 柏拉图的洞穴寓言

2. 庄生梦蝶 (也叫庄周梦蝶)

3. 黑客帝国 (看第一部就行).

4. [知乎问题: 如果世界是虚拟的，有哪些实例可以证明？](https://www.zhihu.com/question/34642204)

5. [知乎回答: 有没有比图灵机能力更强的计算模型？](https://www.zhihu.com/question/21579465/answer/1515850944) (这个没啥关系, 就是好玩所以放在这里)

6. 《1984》

7. 《The Private Eye》

## 1. 背景知识

### 相关概念

- 证明的定义与发展

    证明的定义是“根据确实的材料判明人或事物的真实性”. 如果大家有幸上过小学的话会在高年级学到证明相关的数学题.

    在各个时代, 证明的概念和方法都有所演变.

    - 在古希腊时期, `证明 === 拍大腿得出结论`, 证明全靠蒙;
    - 到了二十世纪初, 形式化的符号逻辑出现了! `证明 === 符号推理`. 比如证明 a + b = c, 得一步步推导;
    - 二十世纪六十年代, 科学家发现, 我们自己推个啥啊, 让电脑推就好了! `证明 === 程序`. 但是要注意, 寻找证明 (“算法”) 仍然是个抠出迪士尼城堡都想不出的难题, 就像初中时候数学老师魔术师般地画一条辅助线就证出来了, 但是我们就是想不出画那条辅助线 (举初中的例子是因为本人没高考过, 没正经学过高中数学, 大家笑一笑就好). 所以这里计算机起到的作用是帮助验证证明.
    - 二十世纪八十年代, 大的来了, `证明 === 交互`. 俩电脑互相一问一答, 对口相声一下就能进行证明.

    用通俗的话来说, 证明就是通过一些材料来把事情的真实与否判断出来, 比如说通过带金链子来证明自己很富有, 通过穿背心且时刻展背来证明自己很强壮, 通过去跳伞蹦极来证明自己很勇.

- 计算, 逻辑, 验证, 证明大杂烩

    证明体现了证明与验证的不对称性.

    证明可能是一个非常耗费算力的活动 (费马大定理, PoW), 但是验证一定 (最好) 是非常简单机械并且在一定时间内能结束的活动.

    逻辑与计算密不可分, 证明是逻辑的产物.

- 知识的定义

    谷歌告诉我们知识的定义是 “一个人在经历或学习中学到的事实, 信息或者技艺”.

    为什么我们正在讨论的“零知识证明 (Zero-Knowledge Proof)”不叫零数据证明, 零信息证明呢?

    如果叫做零数据或者零信息的话, 那就扯淡了, 可以是要有信息或者数据的交换才能达成证明的. 就算心灵感应也会有数据的交换. 零知识证明强调的更多是验证者并没有拿到有效和有用的数据 (知识), 因此验证者只能去推测证明者证明得出来.

    例如在医疗领域, 数据可以被大量地交换, 而只要保证关于患者的个人信息这一类的 “知识” 不被泄露, 就可以说用零知识证明很好地实现了隐私的存在.

### 零知识证明的定义

零知识证明中有证明者 (Prover) 和验证者 (Verifier) 以及可能有更多方. 证明者能够不向验证者提供任何有用的信息, 使验证者相信某个事情是正确的.

这个听起来很反直觉, 但是其实举个例子就懂了. 我不 (手动断句) 举难的例子(比如三色地图这种, 还有那个一条线画桥的). 如果大家有幸上过小学或者其他高等学府的话, 就很可能体验过数学考试. 比如老师上课教了一个勾股定理的概念, 这是个非常好的知识的例子. 然后考试的时候, 考题会是让你默写勾股定理的公式吗? 那肯定不是, 而是会基于这个知识, 来出一道考题. 比如考你一个直角三角形, 两边分别长 3 和 4, 求剩下一条边. 你作为验证者, 可以回答出来剩下一条边长 == 5. 那么其实在老师作为验证者验证 (批改) 后, 你拿到分, 就成功通过零知识证明的方式你是一个学会了勾股定理的小朋友. 可能你会有疑问, 万一是蒙对的呢, 那问题不大, 多出几道题, 多考几次试就可以啦. 这下懂零知识证明了吧.

我们之后都用数学老师和你这两个人物来分别代表验证者和证明者吧. 比较有代入感, 相比爱丽丝与鲍勃.

### 零知识证明的性质

1. 正确性: 你没法骗数学老师. 不会发生你骗他, 你蒙答案, 让他觉得你学会了的情况.
2. 完备性: 数学老师没法骗你. 不会发生他骗你, 她强行为难你, 觉得你没学会的情况.
3. 零知识性. 这个就原地 TP 了. 零知识证明肯定是零知识的, 不透露有效的信息.

### 零知识证明的用处

  - 数据的隐私保护: 不透露真实年龄的情况下证明自己成年了.
  - 通过压缩计算来进行区块链扩容: 通过计算证明来避免 “100个节点重复做一件事”.
  - 身份认证: 隐私 DID. 无需出示私钥即可证明身份.
  - 去中心化存储计算: 不泄露数据内容的情况下确保服务器妥善保存和计算数据.

这下明白了吧.

## 2. zk-SNARK 的开发小教程

> Rust 已经入门了好几次了, 还在门外. C++ 我也是半吊子水平. 所以就先用 JS 的两个库来体验一下 SNARK 的开发.

> 另一个用 JS 的原因是因为 JS 最灵活 (最方便构建屎山, 坑最多).

zk-SNARK 是一种 zk 的技术. 它的全称和概念之类的其实也不必了解. 跟着开发一遍自然就能理解了. 或者可以自行搜索搜索.

### a) 安装工具和库

zk-SNARK 不能直接应用于计算问题. 我们首先需要将问题转换为正确的形式. 转换的第一步是将其转换为代数电路. 所以这波做 zk-SNARK 的开发, 需要用到两个库 [circom](https://github.com/iden3/circom) 和 [snarkjs](https://github.com/iden3/snarkjs).

![](/img/zero-knowledge/pipeline.png)

circom 是构建袋鼠电路的库, snarkjs 是纯 js 编写的对 zk-SNARK 协议的实现. 这两个库设计的时候就是互相搭配着使用的, 所以在 circom 里面构建的电路可以直接在 snarkjs 里使用.

- 安装 node

    ```
    去 https://nodejs.org/en/ 装 LTS 版本的
    ```

- 打开终端, 安装 circom 和 snarkjs. (不行就 sudo

    ```
    npm install -g circom
    npm install -g snarkjs
    ```

### b) 理清应用原理

> [这篇文章](https://learnblockchain.cn/article/1078)写得七颠八倒, 错误百出. 所以我们直接干一个混币应用出来.

#### 什么混币?

通常链上交易都是可溯源的, 可以被追踪.

混币的目的是切断加密货币中交易发送方和接收方的联系, 做到隐私交易, 使第三方更难追踪加密货币的用途以及走向.

> 太忙了以后有空写.
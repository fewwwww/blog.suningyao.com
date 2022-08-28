# ㊙️ 读懂DApp: Web3原生架构

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体平台, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/J6NIDPM9vx1R3sAnp8bLBA)上阅读.

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-crypto-native-dapp-architecture-2793412bd0e0).

## 0. Web2 App 架构

当我们开发一个现代化 toC 应用程序的时候, 无论是 Web App 还是 Mobile App 还是 Desktop App, 他们的基本架构都可以用以下三端来概括:

![](/img/architecture/ends.png)

从左到右分别是:

- 前端: 也叫客户端. 应用的前端是用户在浏览器内看到的页面, 或者移动设备里使用的 App. 前端掌控了视图和展示.
- 后端: 也叫服务器端. 应用的后端存在的意义主要就是为前端提供接口和数据, 通常应用的主要业务逻辑会在后端中.
- 数据库: 数据库顾名思义, 专门存储数据的. 后端会读取或者修改数据库的内容.

为什么软件都需要这三端? 为什么前端不直接连数据库呢? 中间为什么还要有一个后端? 这其实有很多方面的原因:

### a) 工程化

开发者角度: 现代化应用的前端没有精力同时处理复杂的数据模型以及视图的状态管理. 工程化的角度而言, 让每个工程师都全知全能地维护一套臃肿的系统是不好的. 除此之外很多的逻辑是不需要前端参与展示的, 比如电商平台的库存等.

架构角度: 每个端都有自己的一套规则和语言去描述数据. 前端用人类能理解的思路来构建页面, 后端用面向对象的语言来操作数据, 数据库使用关系代数语言来访问物理存储. 没有办法规定一套万金油的规则来统一三端. 同时由于语言各司其职, 所以性能侧重点也不同.

### b) 通信

协议角度: 观察图中, 可以看到连接三端的两个连接方式是不一样的. 通常 toC 的应用程序前端和后端沟通使用 HTTP 协议, 而后端和数据库则有不同的协议, 如 MySQL 就和 MongoDB 有着不同的协议. 我们可以通过一层很薄的后端 (GraphQL + [Hasura](https://hasura.io/)) 或者规定新的协议 ([OData](https://www.odata.org/)) 来达到类似前端直连数据库的效果, 也有 CouchDB 这样为这样的通信而生的协议, 但依然没有解决其他的缺点.

数据映射角度: 前端处理 UI, 后端处理对象, 数据库处理数据. 前端与后端的连接使用了 UI 与对象的映射, 后端与数据库的连接需要使用对象关系进行映射.

### c) 安全性

数据角度: 因为在目前, 我们所使用的应用越来越多是基于 Web 的应用, 所以如果让前端直连数据库, 那么在浏览器这个不安全且开放的环境下, 很难防住数据泄露和黑客攻击. 数据库理论上可以通过各种鉴权等手段控制数据可见度, 但是后端存在的另一个巨大意义就是确保在可信的环境中, 以设计好的方式运行, 并排除已知的安全性问题.

### d) Web2 应用架构给 DApp 的启示

从以上三个角度, 我们分析了为什么 Web2 应用是三端架构, 而这也带给了我们对区块链 DApp 的一些思考:

1. 工程化: 对应了区块链中的模块化思想. 各个组件各司其职, 存储则可以用存储链, 用户数据则用传统的公链存储. 开发者无需太高的开发心智负担.
2. 通信: 对应了区块链网络不同的共识机制. 这些不同的机制也让区块链的互通变成难题, 但也有 诸如 Cosmos 和 Polkadot 的互通协议, 尝试去链接整个网络. 但从 Web2 应用的角度来说, 这并不意味着是最佳的解决方案. 数据映射则可以对应面向账户或者 UTXO 的设计模式, 两者在性能, 隐私, 和开发复杂度上各有优劣.
3. 安全性: 对应了区块链的去中心化与 Verify, Not Trust 思想. 安全性在区块链领域中更为重要, 因此需要可验证, 甚至完全透明公开的方式来对数据的处理和数据的可见度进行调整, 从而实现透明和 Permissionless 的 DeFi, 公开且具有所有权的 NFT, 以及 DApp 最重要的可组合性.

## 1. Web3 DApp 架构

![](/img/architecture/web3.png)

大多数的 Web3 DApp 都遵循了如下的架构:

- 简单应用 (纯链上数据且交互并不复杂), 例如: Uniswap 以及纯链上存储的 NFT 项目.
- 前端与 Web2 App 没有区别.
- 无后端 (链上智能合约作为后端).
- 区块链作为数据库.

### a) Web3 DApp 细化组件

更细化地来说, 完整的 Web3 DApp 的工作流程涉及到[更多的组件](https://twitter.com/suhailkakar/status/1555894207570513920):

- 前端: 浏览器, 钱包, 页面.
- 前后端通信: 节点 Provider, 索引协议.
- 概念上的后端: 区块链网络上的智能合约.
- 后端数据库通信: 节点 Provider, 存储网络网关.
- 数据库: 智能合约状态和去中心化存储网络.

![](/img/architecture/work.png)

### b) Web3 DApp 如何做到无后端?

区块链网络上的图灵完备的智能合约的存在, [让区块链能成为最好的 Serverless 平台](https://www.informit.com/articles/article.aspx?p=3006828), 或者说是可以被视作 Trustware 的 World Computer. 应用的数据和后端逻辑都可以在智能合约中实现.

![](/img/architecture/serverless.png)

和 Serverless 函数相比, 智能合约更加优秀, 也造就了比 Web2 应用更加优秀的架构和模式:

- 付费方式: Serverless 函数通常是开发者支付费用, 而智能合约大部分交互费用都是由用户来支付, 且用户也会心甘情愿地为链上空间而付费.
- 执行环境: Serverless 函数有非常灵活的执行环境, 而智能合约的执行环境虽然选择很少, 但非常轻量级.
- 部署环境: Serverless 函数部署在中心化云服务平台, 而智能合约部署在去中心化和无需许可的去中心化网络上. 除此之外, 网络的运营成本也是从中心化平台转嫁到了矿工, 经济系统会更加具有自主性.

但是, 对于一个真正完整的应用来说, 只通过智能合约作为后端, 是无法实现完整的功能的, 因此会需要有 Keeper 网络或预言机等其他组件.

## 2. Web3 Crypto-native DApp 架构

Web3 DApp 指的是通过智能合约作为后端实现的, 简单的去中心化应用. 要完成一个复杂应用, 可能或多或少会引入中心化的服务, 真正要实现一个 Crypto-native 且 trustless 的 DApp, 则需要在架构上加入新的变化.

Web2 的复杂应用其实也远远不止是我们之前所概括的三端了, 需要非常多模块化, 中间层以及水平拓展的[架构拆分](https://mp.weixin.qq.com/s/1h6yqCWyzYLM8WPGlGdtVA).

![](/img/architecture/web2.png)

### a) 前端 ⇒ 开源 + Self-hosted 前端

Web3 前端的触发逻辑其实和 Web2 本身就不太一样. Web3 的操作都是用户进行通过和确认的, 且以链上地址为核心, 而不是 Web2 中, 客户端直接发送到服务器和数据库触发数据更新.

![](/img/architecture/p2p.png)

对于 Web3 前端的发展, 我认为有两个大的趋势:

- 框架的选择: 前端的两大框架 React 与 Vue 中, React 占了 Web3 的主导地位, 主要就是因为生态与各种组件的积累, 比如 [web3-react](https://github.com/Uniswap/web3-react) 与 [Center.dev](https://center.dev). 但是我个人感觉 React 项目的主导权始终还是在 Meta 手里的, [开源协议的更改](https://www.codemag.com/article/1701041/Legal-Notes-What’s-the-Deal-with-ReactJS’s-Licensing-Scheme)也多次引起争议, 所以如果有机会使用 Vue 框架搭配一些[依赖尽量少](https://twitter.com/paulmillr/status/1558578060940791809)的第三方库来进行前端开发的话, 还是比 React 更加好的.
- 前端的 Hosting: 前端是 DApp 被黑 (恶意劫持或脚本注入) 以及被 censor (Uniswap 和 Flashbots 的源码中都有 [OFAC 的黑名单](https://github.com/Nemusonaneko/projects-with-restrictions/)) 的重灾区. Yearn Finance 很早就[鼓励用户自己托管 DApp 的前端](https://medium.com/iearn/self-hosting-web3-services-299306b706ee); [在 Arweave 这样的永久存储网络上托管前端](https://twitter.com/samecwilliams/status/1561127191106158592)也能保证每个版本的前端都不会被删除, 永久可访问; [Trustless.fi](http://Trustless.fi) 也提出了前端 Marketplace 的概念, 让用户在多个社区托管的前端中选择, 这也能保证中立性和 “前端多样性”; Etherscan 等其他区块链浏览器其实也算是[中立的前端](https://twitter.com/forgivenever/status/1556820240993882112), 用户可以通过它来直接进行交互, 或者也有专门的应用给合约生成前端, 如 [okcontract](https://okcontract.com/whitelist); 最近 Tornado 被 censor, 也有很多社区 (比如 [codeisspeech](https://twitter.com/lickitungxbt/status/1558477975292715016) 和 [theshake](https://twitter.com/DotTheShake/status/1557703404574707717)) 在自发托管它的前端.

    ![](/img/architecture/self-hosted.png)


这两个点的发展会让 DApp 的[前端有 censorship resistence](https://twitter.com/mallowsxyz/status/1560655467613143040), 大大地提升 DApp 整体的安全性和去中心化程度.

![](/img/architecture/ipfs-host.png)

### b) 后端 ⇒ ZKP + 智能合约

App 架构的演进过程会是这样的:

1. Web2 应用: 前端 ⇒ 后端 ⇒ 数据库
2. Web3 简单应用: 前端 ⇒ 智能合约
3. Web3 复杂应用: 前端 ⇒ ZKP ⇒ 智能合约

![](/img/architecture/zkp.png)

智能合约虽然让整个应用变得去中心化, 但用一个公开网络上的智能合约去处理应用的逻辑是一把双刃剑. 数据与代码公开了, 保证了透明可查与可组合性, 但也把隐私和安全风险完全暴露, 同时链上空间与计算的成本非常高.

ZKP 会成为 Web3 时代的 RSA, 消除应用的通信安全性短板, 和去中心化短板, 真正实现 trusted 且 trustless 的 DApp.

ZKP 的加入作为一个前后端之间的中间层与通信方式, 又一次非常好地发挥了它的两大优点:

- 隐私: Web2 应用中, 隐私一直算是默认选项, 但区块链网络的性质让 DApp 一直拥有着形同虚设的 “隐私”, ZKP 作为中间层, 可以将敏感数据在链下处理, 从而解决这一个问题.
- 扩容: 链上空间有限, 因此很多 Web2 应用中的复杂算法无法实现, ZKP 能在保证计算可信的情况下, 将算法在链下执行, 链上验证.

有无数项目正在朝着这两个方向努力, 这里就不列举了. 主要需要攻克两个难点:

- 计算可行性: ZKP 的计算种类是受限制的, 并非所有的计算可以通过 ZKP 来解决.
- 优化: 当操作的复杂度提高时, 计算时间和空间会显著提高, 这就需要非常多的软硬件优化. 同时很多情况下只能在吞吐量上进行显著提升, 整体 Proving 的 overhead 很难削减.

### c) 数据库 ⇒ 去中心化节点服务

我们之前讲述了 DApp 如何用区块链来作为后端与数据库. 要让 DApp 连接上区块链网络, 就需要节点服务.

目前来说, DApp 常用的都是中心化的 NaaS, 比如 Alchemy 与 Infura, 未来在我的构想里有三个更好的方向:

- 去中心化 NaaS, 协议化 Infura, 但是这个其实没有特别大的必要和可行性, NaaS 去中心化的目的主要是为了抗审查而已, 不用其他的需求.
- 多中心 NaaS, 使用多个中心化 NaaS 作为备选 (类似 Chainlink + Uniswap 的预言机组合). 这是一个更加可行且靠谱的方案, 能保证抗审查和 uptime.
- 自托管 NaaS. 终极方案, 不仅可以保证 “数据库” 连接的可信与各种数据的隐私和抗审查, 也可以增加网络的去中心化程度. 搭配上自托管前端, 整个 DApp 就会无比去中心化.

    ![](/img/architecture/naas.png)


### d) Crypto-native DApp 实例

最近刚被制裁的 [Tornado.cash](http://Tornado.cash) (尤其是老版本) 是一个非常 Crypto-native 的 DApp, 它满足了我们很多的定义:

- 前端使用了 NuxtJS 的 Vue 框架, 而不是常用的 React 框架.
- 完全使用前端代码中的 ZK 电路和智能合约实现, 没有任何服务器端代码.
- 代码完全开源, [托管在 IPFS 中](https://ipfs.io/ipfs/QmTFnDJbfZLbopwjowmwNE9LFvK599sxhktAArQUvH7Tex).
- 旧版本无私钥或多签控制.

我相信未来会有更多应用以 [Tornado.cash](http://Tornado.cash) 的范式来进行架构的打造, 这是目前我心目中最完美的去中心化的 Web3 应用架构.

## 3. Web3 Infra

上述只是简化版的架构, 以下是较为具体的一个实际 DeFi 应用的架构:

![](/img/architecture/architecture.png)

其中包含了除了节点服务以外的几个[补充的基础设施](https://mp.weixin.qq.com/s/ifaVkhdgmh41zxDKVE68Kw):

- Indexer: 左侧的 The Graph. 链上数据没有办法方便地查询, 所以需要 indexer 对合约相关数据进行组装.
- Oracle: 右下角的 Chainlink. 链上需要拿到合约或者网络以外的价格等数据, 因此需要链上 (Uniswap TWAP) 或者链下预言机 (Chainlink) 喂价.
- Keeper: 右下角的 Keep3r Network. 智能合约本身没有自动触发执行任务能力, 因此需要外部触发器进行协助.

这几个基础设施在一个 DApp 的搭建中至关重要, 我们会在未来的文章中详细介绍 Oracle 与 Indexer 的问题与革新机会.

![](/img/architecture/infra-stack.png)

为什么只有这几个基础设施被纳入考量中, 而诸如 NFT 创作工具, No-Code 合约生成工具, 和合约前端生成器没有被考虑到呢? 因为我个人认为, 一个好的 Web3 基础设施需要有不断的价值捕获的能力, 持续和使用它的应用一起增长, 而不是一次付费就结束了, 这也是 Web2 SaaS 和 Web3 Protocol 中得出的经验.

熊市是一个非常好的搭建和提升基础设施的机会. 我相信这些革新的 Fat Infra 会撑起下一轮 DApp 的创新, 并且作为 Base Layer 捕获到巨大的价值.

在未来的文章中, 我们会详细讨论这些基础设施的最佳潜在优化方案.

## Related Links

0:

[https://learnblockchain.cn/article/4338](https://learnblockchain.cn/article/4338)

[https://www.zhihu.com/question/457087098](https://www.zhihu.com/question/457087098)

0a:

[https://www.zhihu.com/question/457087098/answer/1864992254](https://www.zhihu.com/question/457087098/answer/1864992254)

[https://www.zhihu.com/question/457087098/answer/1863665807](https://www.zhihu.com/question/457087098/answer/1863665807)

0b:
[https://www.zhihu.com/question/457087098/answer/1911173154](https://www.zhihu.com/question/457087098/answer/1911173154)

0c:

[https://www.zhihu.com/question/457087098/answer/1864258142](https://www.zhihu.com/question/457087098/answer/1864258142)

[https://www.zhihu.com/question/457087098/answer/1910852580](https://www.zhihu.com/question/457087098/answer/1910852580)

1:

[https://medium.com/iearn/self-hosting-web3-services-299306b706ee](https://medium.com/iearn/self-hosting-web3-services-299306b706ee)

1a:

[https://twitter.com/suhailkakar/status/1555894207570513920](https://twitter.com/suhailkakar/status/1555894207570513920)

1b:

[https://www.informit.com/articles/article.aspx?p=3006828](https://www.informit.com/articles/article.aspx?p=3006828)

2:

[https://mp.weixin.qq.com/s/1h6yqCWyzYLM8WPGlGdtVA](https://mp.weixin.qq.com/s/1h6yqCWyzYLM8WPGlGdtVA)

2a:

[https://twitter.com/ChainLinkGod/status/1562125152506195969](https://twitter.com/ChainLinkGod/status/1562125152506195969)

[https://github.com/Uniswap/web3-react](https://github.com/Uniswap/web3-react)

[https://center.dev](https://center.dev/)

[https://www.codemag.com/article/1701041/Legal-Notes-What’s-the-Deal-with-ReactJS’s-Licensing-Scheme](https://www.codemag.com/article/1701041/Legal-Notes-What%E2%80%99s-the-Deal-with-ReactJS%E2%80%99s-Licensing-Scheme)

[https://twitter.com/paulmillr/status/1558578060940791809](https://twitter.com/paulmillr/status/1558578060940791809)

[https://github.com/Nemusonaneko/projects-with-restrictions/](https://github.com/Nemusonaneko/projects-with-restrictions/)

[https://medium.com/iearn/self-hosting-web3-services-299306b706ee](https://medium.com/iearn/self-hosting-web3-services-299306b706ee)

[https://twitter.com/samecwilliams/status/1561127191106158592](https://twitter.com/samecwilliams/status/1561127191106158592)

[http://Trustless.fi](http://trustless.fi/)

[https://twitter.com/forgivenever/status/1556820240993882112](https://twitter.com/forgivenever/status/1556820240993882112)

[https://okcontract.com/whitelist](https://okcontract.com/whitelist)

[https://twitter.com/lickitungxbt/status/1558477975292715016](https://twitter.com/lickitungxbt/status/1558477975292715016)

[https://twitter.com/DotTheShake/status/1557703404574707717](https://twitter.com/DotTheShake/status/1557703404574707717)

[https://twitter.com/mallowsxyz/status/1560655467613143040](https://twitter.com/mallowsxyz/status/1560655467613143040)

2b:

[https://twitter.com/LeopoldSayous/status/1515982366635966466](https://twitter.com/LeopoldSayous/status/1515982366635966466)

2c:

[https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/)

2d:

[https://mp.weixin.qq.com/s/USa7y6IZRjYXa8mWK4t2Lg](https://mp.weixin.qq.com/s/USa7y6IZRjYXa8mWK4t2Lg)

[https://ipfs.io/ipfs/QmTFnDJbfZLbopwjowmwNE9LFvK599sxhktAArQUvH7Tex](https://ipfs.io/ipfs/QmTFnDJbfZLbopwjowmwNE9LFvK599sxhktAArQUvH7Tex)

3:

[https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application)

[https://mp.weixin.qq.com/s/ifaVkhdgmh41zxDKVE68Kw](https://mp.weixin.qq.com/s/ifaVkhdgmh41zxDKVE68Kw)

[https://www.usv.com/writing/2018/10/the-myth-of-the-infrastructure-phase/](https://www.usv.com/writing/2018/10/the-myth-of-the-infrastructure-phase/)

[https://www.usv.com/writing/2016/08/fat-protocols/](https://www.usv.com/writing/2016/08/fat-protocols/)

![](/img/architecture/thumbnail.png)

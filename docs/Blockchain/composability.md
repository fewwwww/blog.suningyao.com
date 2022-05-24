---
sidebar_position: 99
---

# 观点: Crypto 破碎的可组合性 🧩

> 本文为Foresight Ventures撰写, 已以机构身份发布于各大区块链媒体, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/6Iu-F_VO11hFtUEdEiZicQ)上阅读).

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-composability-is-decomposing-2fdfcd9b1971).

> 可组合性是指一种能力, 让组件能够重新组合成更大的结构, 并且一个组件的输出能够成为另一个组件的输入. 最好的例子就是每一块都可以连接到另一块的乐高.
>

## 伟大的可组合性...吗?

神圣的可组合性! 可组合性为我们带来了金钱乐高 (ERC-20 和 OpenZepplin 等标准), 为我们带来了金融乐高 (DeFi 协议的各种组合), 为我们带来了[媒体乐高](https://variant.mirror.xyz/T8kdtZRIgy_srXB5B06L8vBqFHYlEBcv6ae2zR6Y_eo) (NFT).

[可组合性就是创新](https://future.a16z.com/how-composability-unlocks-crypto-and-everything-else/)! 开发者可以像搭乐高一样, 把别人的乐高 (合约源码) 拿过来, 修修补补, 创建出一个新的产品.

[可组合性就是复利](https://twitter.com/cdixon/status/1448528513745760261?lang=en)! 用户还可以通过在创作出的不同新产品之间互相交互, 来释放资产的无限可能性.

![](/img/composability/legos.png)

Web3 的可组合性类似一个并非拷贝乐高, 而是引用乐高的微服务架构, 更强大但也更危险 (木板效应明显且致命).

Crypto = 可组合性 (开源数据与代码 + 互操作性 + 流动性整合) + 激励, 但是作为 Crypto 的重要组成部分, 一个可以无限次方的重要变量, 可组合性的乐高其实是一个随时摇摇欲坠的危房.

## 可组合性 === 开发与使用的复杂性

![](/img/composability/knots.jpg)

一个例子就是, 每个代码库 (无一例外) 都是屎山 ([Web2 时代的成熟项目, 光是代码行数的数字就已经很复杂](https://www.informationisbeautiful.net/visualizations/million-lines-of-code/)).

越多组合就意味着越高的复杂性, 也就是意味着在开发或使用时更多出错的可能, 更多的 Bug.

比如让你阅读这篇文章并点赞转发, 你可以轻松完成; 但如果让你关注比特币的币价的同时切苹果皮还要骑自行车, 你就很难同时完成这些任务了. 你确实同时做了很多事, 效率很高, 但是你非常容易出错.

![](/img/composability/sharding.png)

上图是以太坊 Sharding 方案的变化. EVM 的设计目标就包括[简单性和更少的外部依赖](https://eth.wiki/en/fundamentals/design-rationale). 即使是非常复杂的想法, 也往往具有“合理简单”的版本. 有时候真的未必需要那么多的组合和工程化, 让事情过于复杂.

## 可组合性 === 软件依赖的风险

可组合性很多时候就预示着某些项目必需与其他项目组合, 才可以运行, 这就是软件依赖的风险.

![](/img/composability/blocks.png)

试想一下, 你要做个 DEX 聚合器, 那么你就不得不去等待被聚合的 DEX 上线到网络, 你必须组合他们, 才能发挥美好的可组合性. 但这也意味着你得等 Uniswap 提出提案, 通过提案, 部署之后才能上线你的聚合器 (话说[较多情况下](https://mp.weixin.qq.com/s/dX9xMatzl2Np-hRIvSLrIQ)直接用 Uniswap 是比聚合器更好的).

另一个例子, 比如 [Rune 和 Chainflip](https://twitter.com/Wuhuoqiu/status/1506263655796465669), 就是用户得下载非常好用 (而不成熟) 的多链钱包 (或者好多个单链钱包) 才能使用可组合性满满的应用.

更明显的可组合性造成依赖的例子, 就是, 网络没有 EVM, 应用就上不了线了. EVM 成为可组合性不可缺少的一环了, 正是因此, 对很多生态, EVM 才如此重要.

有时候, 开发者和用户太过于依赖可组合性. 可组合性给开发者带来了快速的接入, 但是或许更长的等待时间; 也带来了现有的代码, 但是可能会坍塌的多米诺.

## 可组合性 === 开源项目的多米诺

书接前文的可组合性依赖问题, 这一长串的依赖其实让可组合性的乐高变成了多米诺.

![](/img/composability/domino.png)

开源供应链投毒的例子在最近也屡见不鲜, 比如主动投毒 (尽管本意可能是好的) 的 Faker.js 和 node-ipc, 还有不小心危害了整个互联网安全的 Log4j (最近 Java 好像又出事了).

![](/img/composability/fakerjs.png)

这些问题的根本原因还是:

1. 开发者不会看所有的源码, 只会[复制粘贴](https://twitter.com/zachobront/status/1508651180188213250?s=21&t=943scH-IadETf586uKT6BQ) (Can devs do something?)

    ![](/img/composability/code-is-law.jpeg)

2. 普通开源社区的激励不足以支持持久开发. (一个贡献者得喂饱八万个使用者)

    ![](/img/composability/1-80000.png)

为了解决这两个源头, 我们需要第三方审计服务, 去中心化的开发社区, 合理激励的 DAO, 更多的 Gitcoin 捐献, 更多分配到基础设施上的资金.

同时, 从问题中, 我们也看出全权交给社区开发也是不可取的 ([JavaScript 社区](https://www.zhihu.com/question/522144107/answer/2392355831)), 同时不能太过于依赖社区贡献, 可能会导致缺乏标准库, 而且通常激励下社区开发很可能无法保证长久支持. 我们还是需要一些中立和有效的组织来决定纳入一些标准, 以及引导对开发社区的资金激励.

(顺便一提, Ethers 是 EVM 生态被使用最多的第三方库, 周下载量在 68 万左右, 但是只是 “Web2” 前端框架 react 的 5% 左右; 根据 Electric Capital 的数据, Web3 开发者的数量大概占所有开发者的 0.07%. Web3 开发还有很长的路要走.)

再回到 Web3, 如果 OpenZepplin 出点风险, 那受害的就不只是我们的软件了, 而是我们最宝贵的资金, 这是很可怕的.

## 可组合性 === 缺点更明显的 DAO

今年[又是 DAO 元年](https://mirror.xyz/0xAeC7fC4A0C7e73028dBcf1EB9BFF6eb2d73D6F16/NNnJCOhQ06Ma6ax_JU1x4FxGSICn4Bvk23uaJW8TTJA). DAO 已经成为了社区的默认实践.

DAO 的可组合性确实可以让组织之间[像嫁接一样](https://thedaoist.mirror.xyz/8jKbVJCJgUFk5BT6RqE4UjGcWY3Qjr1ZnzVZVnvurIc), 共同繁荣生长.

![](/img/composability/grafting.png)

但是作为一个分散组织, [DAO 的缺点](https://thecontrol.co/the-slow-death-of-the-firm-1bd6cc81286b)就是更慢更难的决策, 无法衡量工作的贡献, 以及有时候权力的滥用.

充满可组合性的 DAO 让 DAO 过于去中心化和复杂了, 以上的三个缺点被几何级数地放大.

![](/img/composability/network-effects.png)

可组合性让 DAO 的缺点更加缺点了.

## 可组合性 === 膨胀的金融泡沫

传统意义上的金融泡沫的可组合性的危害, 我相信不用多说了.

以 NFT 衍生品等举例, NFT 的金融项目在不断搭积木, 让整个 NFT 产业越来越复杂, 套利攻击等攻击机会也就越多. 而这些金融产品套上加套, 这些产品被保险公司认可 (就想到了审计机构), 风险被从买得起 BAYC 的富人转嫁给大众消费者. 最后当泡沫破裂的时候, 受伤最大的就是普通用户.

还记得比特币创世区块诞生的那一年发生了啥吗?

## 总结

对于可组合性, 我们需要知其优点, 也要知其缺点. 对于我文中提到的每个缺点, 我都可以用可组合性的优点来对其一一反驳, 但是我们仍然需要知道这些缺点, 而不是让可组合性变成一个任人打扮的玩偶.

可组合性仍然有很多的提高空间, 尽管它已经帮我们创造了无限庞大和美好的各种杰作 (Web1 + Web2 + Web3). 我们需要更多更好更受关注的[胖协议](https://www.usv.com/writing/2016/08/fat-protocols/) (我知道胖协议理论有些[不合理](https://messyproblems.substack.com/p/cracks-in-the-fat-protocol-theory?s=r)了...), [可信中立性](https://nakamoto.com/credible-neutrality/), 和[认受性](https://vitalik.ca/general/2021/03/23/legitimacy.html).

可组合性是 99% 的组合和 1% 的破碎.
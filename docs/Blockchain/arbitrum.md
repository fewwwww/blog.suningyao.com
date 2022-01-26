# 读懂Arbitrum: L2 第一生态 ⛰️

## 0. 概要

- 在短短半年时间里, Arbitrum 生态飞速生长, 已经在各个赛道上都拥有成熟并且出圈的特色项目, Arbitrum 的潜力被初步兑现, 在未来的时间里, Arbitrum 会继续高速发展霸占 L2 的前列.
- 得益于 Arbitrum 的特性, Arbitrum 的基础设施无比完备, 钱包与交易所支持也在 Layer2 解决方案中十分亮眼, 为生态的发展打下了坚实的地基.
- Arbitrum 的 DEX 与 DeFi 协议非常多样化, 接入 Arbitrum 几乎成为了这类应用的默认选择. Arbitrum 的 TVL 在所有 Layer2 生态中名列前茅, 同时在生态中涌现出了 GMX 等的特色去中心化交易所.
- 在 NFT 与元宇宙赛道上, Arbitrum 拥有 Treasure DAO 这个极其亮眼的优秀项目, Treasure DAO 完整的故事线, 宏大的叙事和积极的社区让 Arbitrum 拥有了自己独特的元宇宙基因.

## 1. Arbitrum 简介

![](/img/arbitrum/arbitrum.jpg)

Arbitrum 是 Offchain Labs 团队基于 Optimistic Rollup 技术创建的以太坊 Layer2 扩容方案. Arbitrum 利用 L1 与 L2 之间的通信能力, 无须信任地让任意形式的以太坊资产在一层和二层之间转移. 虽然 Arbitrum 的交易仍然在以太坊上结算, 但 Arbitrum 只将原始交易数据提交到以太坊, 执行和合约存储则发生在链下, 所以相比以太坊主网, 在 Arbitrum 上所需花费的 gas fee 非常少, 并且合约完全兼容, 无 gas limit.

在以太坊扩容明星项目 Arbitrum 上线主网半年后, Arbitrum 的生态在开发者的建设下慢慢成熟. 相比 Vitalik 最近点名表扬的 StarkWare 和 zkSync 的 zk-Rollup, 背景强大的 Optimism, 和靠农村包围城市来野蛮生长的 Polygon, Arbitrum 的生态一直在更加低调地默默发展.

一年以前, Arbitrum 什么都没有;  一年后的如今, Arbitrum 拥有 2.53B TVL, 250+ 上线项目, 330000+ 地址数, 4M + txns. Arbitrum 已经打造出了生态的梦之队.

![](/img/arbitrum/dream-team.png)

### Arbitrum 的生态决定了网络未来的价值

在我们判断一个网络的价值的时候, 最直观的数据就是 TVL, 使用者的数量基本上直接决定了 TVL 的数量. 除去对资金安全性的保证, 很多时候对于用户来说, 区块链网络或 Layer2 扩容方案的具体技术细节并不是特别重要, 最吸引用户的会是体验的完整性和便捷性, 而这样的用户体验正是由生态的成熟度和繁荣所直接带来的. 因此对于一个新兴的潜力网络, 我们很有必要去关注它生态的建设, 以此来判断它的发展潜力.

## 2. Arbitrum 基础设施

基础设施的建设决定了生态的地基是否牢固, 是生态建设起步阶段不可缺少的一环. 对于一个 Layer2 或者所有的网络生态来说, 包含了钱包适配支持、跨链桥、开发者工具的基础设施是必要的. 这些设施决定了网络的基本可用性.

作为一个完全 EVM 兼容的方案来说, Arbitrum 有着天生的优势, 并且甚至还在某些开发方面比以太坊更灵活. 对于每个网络来说, 开发者会是第一批用户, 一个 EVM 兼容的网络会大大加速开发者的涌入和基础设施的建设. Arbitrum 从最开始就拥有了完整的基础设施支持.

### a. 跨链桥

除了[官方的跨链桥](https://bridge.arbitrum.io)以外, Anyswap、Hop、Celer 等跨链桥都添加了对 Arbitrum 网络的支持. 除此之外, 各大主流交易所也支持了 Arbitrum 主网的充值和提现, 这意味着它们不仅可以作为跨链桥来连通 Arbitrum 与以太坊主网以及其他网络, 也可以为 Arbitrum 进行 direct fiat on-ramps. 交易所的支持是非常重要的, 正是因此, Arbitrum 的 TVL 才能远远甩开 Optimism 等类似的竞争对手.

### b. 钱包

根据 Arbitrum 的生态门户, 我们可以看到基本所有的主流钱包或者资管工具都集成了 Arbitrum 网络, 对用户来说可以使用他们常用的钱包来直接地在 Arbitrum 上进行各种不同的应用交互操作.

### c. 工具

- 开发工具

    对于开发者来说, 常用的以太坊开发工具和套件 (Web3.js、Truffle、Hardhat、Infura、Moralis) 都有对 Arbitrum 网络的支持. 开发者完全可以正常使用这些工具, 并且开发流程基本和以太坊上的开发没有任何区别.

    为了丰富和完备去中心化应用的功能, The Graph 和 Chainlink 也是开发当中不可或缺的一环, 两者均支持 Arbitrum 网络.

    拥有这些基础工具的情况下, 开发者作为 Arbitrum 的第一批用户可以几乎无缝切换到 Arbitrum 的生态建设中, 并且能获得与以太坊网络一样的开发体验, 能开发出功能完整的去中心化应用.

    值得注意的是, 虽然这些工具全部支持 Arbitrum 网络, 但是还是由于高时延的问题, 会和 Layer1 主网有细微区别, 比如可能会遇到获取区块高度和区块时间的坑. 因此在一些需要低时延的应用上还需要针对 Arbitrum 做一些优化或等待官方出手解决问题.

- 用户工具

    除了钱包以外, 其他的用户工具也是生态中重要的一环. Arbitrum 的用户工具包括了 Arbiscan 区块链浏览器、Nansen、Token Multisender (可以批量进行 NFT 转账)、Gnosis Safe (多签钱包, 可以用作团队的共有钱包或个人的多设备钱包管理工具). 这些工具不仅保证了基础用户的查看交易信息等的需求, 也为了部分用户提供了数据分析和特殊交互的功能, 让 Arbitrum 的使用能拓展出去.

- 基础代币

    Arbitrum 作为一个以太坊网络, 自然是支持 ETH 原生代币的. 此外, WBTC、USDT、USDC 等的常用代币也已在 Arbitrum 上线, 能充分满足 DeFi 需求.


## 3. Arbitrum DeFi

### a. DEX 与交易平台

在 Layer1 链上进行 Swap 或领空投时, 高昂的手续费很多时候都是用户所要考虑的成本. Arbitrum 网络的出现很好地解决了这个痛点, 让 DEX 和合约等的交易真正做到无“手续费磨损”.

Arbitrum 在开放之前就已将 400 多个应用列入白名单, 数十个早已上线, 早早做好了 locked and loaded 的准备. 目前多个 DEX, 包括 Uniswap, 1inch, DODO, Sushiswap 等均支持了 Arbitrum 网络. 这些 DEX 作为已经在生态中站稳脚步的重要基础设施, 一直对于 Arbitrum 等类似扩容网络抱有积极的态度, 是第一批登陆的生态应用. 而合约交易所等对清算效率和手续费价格都有非常高的要求, 因此会有很多交易所选择 Layer2, 而 Arbitrum 基础设施完善以及去中心化的特点更是吸引了他们登陆到 Arbitrum. 这些 DEX 和交易所虽然在本质上几乎没有差别, 但是在这条细分赛道下可以说各有特色. 对于 Arbitrum 生态来说, DEX 和交易所的数量是多多益善的.

### Dfyn

Dfyn 是一个 AMM DEX. Dfyn 的特色主要是无 gas fee 交易功能, 未来跨链 Swap 的功能, 多链支持 (Arbitrum, Polygon...), 和可定制化的 Toolkit. 我们着重来看一下无 gas fee 交易以及跨链 Swap 的特点.

Dfyn 是首个推出 gasless 交易的 DEX. 顾名思义, 用户在 Swap 的时候不需要付 gas. gasless 主要是通过 Biconomy 的中继器来达成的. 在交易时, 用户只需要对交易进行签名, 之后 Biconomy 的中继器会支付 gas, 把交易转发回 Dfyn 的合约, 最后合约更新链上状态. 实际使用中, Approve 等操作还是需要用到 gas 的, 同时目前也只有 Polygon 链上有 gasless 模式. 但是这个 gasless 的模式还是非常新颖, 令人眼前一亮.

![](/img/arbitrum/dfyn.png)

Dfyn 的跨链 Swap 也很有特色. 其愿景中的跨链资产 Swap 是通过 Router Protocol 来实现的. Router Protocol 与 Dfyn 背后是同一支团队. Router Protocol 所做的主要是通过多个链的单独 Router 和一个总 Router 来实现资产跨链 Swap, 资产会先进入原始链的 Router, 然后再到总 Router, 最后目标链 Router 放行. 具体的[白皮书](https://global-uploads.webflow.com/61d1382fe0e915f2953f9500/61e182836f83a930fdc60f53_Router-Litepaper.pdf)中并没有披露过多的细节, 但是这样的跨链 Swap 确实是一个很简单粗暴并且容易理解的方案. 除了 Dfyn 的 Router Protocol, 跨链 Swap 这条赛道上还有 THORchain 和 Chainflip 等方案, 它们所提供的方案可能相比 Router Protocol 更加去中心化.

Router Protocol 会在这周正式上线主网, 我们非常期待这样的创新是否能打破链间的断层, 让资产流动起来.

### GMX

GMX 是一个去中心化的现货和永续合约交易所, 特色是低 Swap 费和零滑点交易, 目前部署在 Arbitrum 与 Avalanche 网络.

与传统的订单簿或者 AMM 交易所不同, GMX 所使用的不是交易对形式的池子, 而是用一个多资产的 GLP (GMX Liquidity Provider) 供执行 Swap 以及杠杆交易. 流动性提供者会把 [ETH, BTC 等代币](https://gmx.io/dashboard)充入到 GLP 池子中. 而所交易的 ETH 等币种的价格则是由 Chainlink 预言机和其他几个主流 DEX 的均价而结合得来的. 正是以上的设计让 GMX 达成了 0 滑点且低费率的交易.

GLP 代币的价格则是由 GLP 池中资产的总价值/ GLP 供应量得来的. 流动性提供者给 GLP 注入资产时, 铸造了一定数额的 GLP 代币, 撤出流动性时则燃烧掉对应的 GLP 代币. 在这个过程中, 如果 GLP 池子中的 ETH 代币数量少, 那么添加 ETH 的对应手续费会降低, 以此来激励提供者提供对池子最有利的资产.

同时 GLP 的持有者会受到这两种激励: 一种是他们会收到一年后可完全转换为 GMX 的 esGMX, 另一种是 70% 的平台收益会分成给持有者 (以区块链网络原生的代币来发放).

GMX 代币则是平台的实用和治理代币, 可用于质押. 质押后的奖励为: 前文中提到过的 esGMX, 30% 的平台收益分成, 以每秒 100% APR 产生的积分 (Multiplier Points, 可与 GMX 获得同样的原生代币手续费收益).

GMX 的 GLP 设计以及池子的深度保证了无滑点的交易, GMX 的质押设计保证了持币者长期的持币. GMX 的总交易量以及总手续费在良好的代币系统设计下飞速上升. Arbitrum 在 GMX 这里起到的作用主要就是保证手续费够低, 保证了去中心化合约交易所的可行性.

![](/img/arbitrum/gmx.png)

### Dopex

Dopex 也是最近一个比较热门的去中心化期权交易平台, 上线于 Arbitrum 和 BSC. Dopex 的基本设计和 Opyn 非常相似. Dopex 的特色在于: 期权池概念, 定价模型 (BS 方程式), 双代币模型 (期权卖家可在损失情况下获得 rDPX 回扣, rDPX 还可以作为抵押物铸造其他衍生品). 在最近很热门的 Curve War 系列文章中, Dopex 也因为 gOHM 的期权池而被广泛讨论.

![](/img/arbitrum/gohm.png)

除此之外, Arbitrum 上还有 Swapr, HaloDAO, OpenOcean, O3Swap, Saddle, Warden 等 DEX, 以及 MCDEX, Antimatter.finance, Balancer, DGate, Tracer 等交易所.

### b. DeFi Protocol

主流的 DeFi 协议也纷纷选择站队 Arbitrum, 扩张自己的版图和潜在用户群体. 近期 Aave 在 99.99% 的支持率下也通过了在 Arbitrum 上部署的提案.

![](/img/arbitrum/tvl.png)

DeFi 协议对 Arbitrum 的积极支持主要是源于对其他 DeFi 协议的竞争意识, 协议希望通过尽可能多的支持来获得更多网络使用者的支持, 提高自身的竞争力.

当然, 打铁还需自身硬. Arbitrum 优秀的基础设施和现有生态让这些协议很难不支持. 最近 Curve 在 Optimism 上线后的 4 小时内锁仓量仅有 77 美元, 这可能就是生态不完善, 使用者少的体现. 在这方面, Arbitrum 已经很成熟.

Arbitrum 的 DeFi 生态中有 Badger, Beefy Finance, Curve, Olympus DAO 等项目.

### Dev Protocol

![](/img/arbitrum/dev-protocol.png)

Dev Protocol 是 Arbitrum 的 DeFi 生态中一个比较有意思的项目. [Stakes.social](http://Stakes.social) 是基于 Dev Protocol 的一个与 GitCoin 类似的去中心化的开源项目资助平台. Dev Protocol 目前有 DEV 和 Creator 两种代币.

DEV 代币可以质押给开源项目, 获取收益, 同时是平台中的效用代币, 可以用来支付认证等交互所产生的费用. Creator 代币则是开源项目可以自己创建的项目代币, 可以在 [Stakes.social](http://Stakes.social) 上进行代币的分配管理和所有权证明, 同时这些不同的 Creator 代币可以获取支持者所质押到项目中的 Dev 代币的部分收益. 关于 Creator 代币, [Stakes.social](http://stakes.social) 还内置了一个独特的预言机 Khaos, 通过监听用户签名 (也可以为其他链上事件) 的方式来将所有权证明导出到 GitHub 等平台.

[Stakes.social](http://Stakes.social) 目前部署在以太坊主网, Arbitrum 以及 Polygon 上, 不同网络中有不同的开源项目. 其中有 Vyper 等 Web3 项目, 同时也有很多 Web2 的项目, 包括 Mandane (苹果M系列芯片的 Lisp Hypervisor), Sindre Sorhus 的一系列开源项目 (GitHub 46k followers), Redux-toolkit (GitHub 7k star) 等.

在平台上, 我们不仅可以看到一些熟悉的 Web3 开源项目, 也能看到 NFT 艺术相关的各种项目, 除此之外也有 Web2 的开源项目. 尤其对于 Web2 开发者来说, 开源的资助问题一直是个痛点. 尽管现在有了 GitHub Sponsor 等方式能直接获取收益, 但是比如 Faker.js 的作者依旧是拿着微薄的工资来为爱发电, 为了大公司的使用, 免费维护自己的开源库. Dev Protocol 这样的协议不仅为 Token 正明, 同时也实实在在地帮助了一些需要帮助的开发者.

### c. GameFi

在 GameFi 领域, Arbitrum 上也有很多比较有特色的项目, 包括 Cudl Pet, Farmland, Kaki, Cometh, OpenBlox 等.

## 4. Arbitrum DApp

### a. NFT

虽然 NFT 的项目大多会直接建设在以太坊主网上, 但是随着 NFT 的种类和交互功能越来越复杂, 在 Arbitrum 等低 gas 的 L2 网络上也涌现了很多 NFT 相关的应用. Arbitrum 上的 NFT Marketplace 包括: Out Of Orbit, Arbazaar, xNFT, Agora; 以及其他类型的 NFT 相关项目: NFT Alliance (一系列 Arbitrum NFT 项目组成的 NFT 联盟), Random Walk NFT, 还有最近非常亮眼的 Treasure DAO.

### Treasure DAO

Treasure DAO 是 Arbitrum 上的去中心化 NFT 生态系统, 为元宇宙而构建. 项目是一个元宇宙基础层平台, 用来支持其他元宇宙项目搭建生态系统, 同时也建设了生态内项目的 NFT 市场.

![](/img/arbitrum/treasure.png)

Treasure DAO 的元宇宙中心是 Bridge World. Bridge World 是一款以社区为中心的元宇宙游戏, 通过公会和 sub-DAO 来激励社区协作, 实现围绕资源积累、资源效率优化、吸引玩家为主导的发展战略. Bridge World 中包括 Magic (元宇宙的通用货币, 治理代币), Treasure (元宇宙的游戏资源以及背景叙事基石, Treasure 的原生 NFT), Legions (元宇宙的军团).

![](/img/arbitrum/treasures.png)

Treasure DAO 的社区属性非常强, 不止是通过代币投票治理这样的方式来凸显社区功能, 而是有大量的社区二次创作以及对社区的回馈, 比如某些 Treasure 衍生出了[独立的 DAO](https://twitter.com/DonkeyDAOGuild), 用户可以通过提案对 Treasure 进行背景故事的创作, subDAO 的概念也深入社区...

Treasure DAO 的市场上的 Smol Brains 也从一个免费 Mint 的 NFT 慢慢进化成了 Arbitrum 上的 “CryptoPunks”. Treasure DAO 在不断更新地白皮书, 在接下来几周内将会发布 Bridge World 游戏, 类似 OpenSea 的 NFT 市场, 以及非常多其他的新项目, 可以说是在社区的共同帮助下飞速发展, 值得关注. Treasure DAO 全面的世界观, 多样化的玩法和社区的繁荣让我们看到了链游真正的发展方向.

Arbitrum 的 NFT 生态在 Treasure DAO 的带领下不断前进. 我认为每个网络都会构造出自己独特的 NFT 生态以及独立的元宇宙, 最后会在生态间的联合下, 形成一个完整的统一的元宇宙. 我们将会持续关注 Arbitrum 的 NFT 生态.

### b. 支付

在支付赛道上, Arbitrum 的低手续费和 EVM 兼容也为支付相关的智能合约应用带来了非常好的解决方案. Arbitrum 上主要有 Zippie (非洲市场的支付解决方案) 和 Superfluid (即将登陆 Arbitrum).

### Superfluid

Superfluid 是一个支付协议和新的代币标准, 能实现真正的现金“流”支付, 可以应用到工资, 订阅, 或奖励这些通常以月来支付的资金上. Superfluid 通过区块链的时间戳实现实时结算, 增加了资本效率. 用户的余额会实时变化, 也就意味着用户可以随时动用一部分平常以月来发放的工资, 十分灵活. 举个例子就是 2022 年 1 月 20 号如果大跌了, 那么我们随时可以动用这个月收到的流式发放的资金来抄底. 资金的流式发放的安全性是由区块链来保证的. Superfluid 目前上线了 Polygon 和 xDAI 网络, 即将登陆 Arbitrum 网络.

![](/img/arbitrum/cashflow.gif)

MakerDAO 团队, Delphi Digital, 甚至 Visa 的成员都使用了 Superfluid 进行流式工资的支付. Superfluid 也赞助了非常多的黑客松, 2021 年有 250 多个项目基于 Superfluid 来开发. 其中有 Diagonla (流式 Web3 订阅服务), Streamroll (让 DAO 能够通过流式支付来做借贷), TokenVesting (顾名思义, 用流式支付来做代币 Vesting)...

用户在其基础上部署了超过 100 个 Superfluid 代币. Superfluid 吸引了 120 Million 的 TVL, 这对于 Superfluid 的机制来说已经很高了, 因为例如 Ricochet Exchange 只需要 200 刀的 TVL 就可以操作自己每个月总量 2.3 Million 的资金. Superfluid 的 TVL 主要是通过 Treasury, Vesting, 和原生的 Superfluid 代币这几个用例来推动的.

在流式支付的创新下, Superfluid 完美地利用了区块链与智能合约的特性, 并且不断推动开发者社区的建设, 非常好地革新了支付方式, 为多个用例打开了无限的可能性.

在流式支付的领域中, 还有 [Zebec](https://zebec.io) 等产品, 更加往 Web2 领域去拓展, 更加着重于提升对普通用户的影响, 与 Superfluid 的 Crypto Native 定位相比是非常不同的打法, 也十分值得关注.

### c. DAO

除了前文中提到的 Dev Protocol 算是一个 DAO 组织的管理平台, Arbitrum 上还有 DAOHaus 这个 DAO 应用. DAOHaus 可以创建 (DAOHaus 称之为召唤) DAO,  管理成员是否有投票权, 对合约或 Discord 部署 Bot, 这些基本上就满足了 DAO 组织所有的需求.

## 5. 总结

Arbitrum 的生态在完备基础设施的情况下不断生长. 在 EVM 兼容和低手续费的优点加持下, Arbitrum 上不仅有各个早已热门的 DeFi 协议部署到网络上, 而且也有创新应用在 Arbitrum 网络上迸发. 在区块链的未来中, 更多的应用会选择在以太坊的二层网络进行部署, 现在我们最为聚焦的公链之争可能会越发成为二层之争, Arbitrum 一直会是这个竞争中非常强劲的一个选手.

## 6. 相关链接

Arbitrum:

- [https://chainnews-archive.org/posts/797532600948/](https://chainnews-archive.org/posts/797532600948/)
- [https://medium.com/@winkryptocom/链闻精选-读懂以太坊扩容热门选手-arbitrum-870110443f7e](https://medium.com/@winkryptocom/%E9%93%BE%E9%97%BB%E7%B2%BE%E9%80%89-%E8%AF%BB%E6%87%82%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%89%A9%E5%AE%B9%E7%83%AD%E9%97%A8%E9%80%89%E6%89%8B-arbitrum-870110443f7e)
- [https://www.geekmeta.com/article/3371504.html](https://www.geekmeta.com/article/3371504.html)
- [https://www.sohu.com/a/496338097_100217347](https://www.sohu.com/a/496338097_100217347)
- [https://www.arbiproject.io](https://www.arbiproject.io/)

Ecosystem:

- [https://portal.arbitrum.one](https://portal.arbitrum.one/)
- [https://www.tmtpost.com/5366076.html](https://www.tmtpost.com/5366076.html)
- [https://learnblockchain.cn/article/2162](https://learnblockchain.cn/article/2162)
- [https://thedefiant.io/arbitrum-launch-11-largest-layer-2/](https://thedefiant.io/arbitrum-launch-11-largest-layer-2/)

Dev:

- [https://mp.weixin.qq.com/s/cc-LJOUzNuoBE0p1y1CFeA](https://mp.weixin.qq.com/s/cc-LJOUzNuoBE0p1y1CFeA)
- [https://www.163.com/dy/article/GDQOK9T90519SM7A.html](https://www.163.com/dy/article/GDQOK9T90519SM7A.html)

DEX:

- [https://www.jiemian.com/article/5898208.html](https://www.jiemian.com/article/5898208.html)
- [https://new.qq.com/omn/20210621/20210621A0BT4F00.html](https://new.qq.com/omn/20210621/20210621A0BT4F00.html)
- [https://techcrunch.com/2021/12/10/coinbase-ventures-backs-cross-chain-infra-router-protocol/](https://techcrunch.com/2021/12/10/coinbase-ventures-backs-cross-chain-infra-router-protocol/)
- [https://medium.com/mcdex/why-arbitrum-our-response-to-a-frequently-asked-question-c6243b2e43a6](https://medium.com/mcdex/why-arbitrum-our-response-to-a-frequently-asked-question-c6243b2e43a6)
- [https://twitter.com/0xPEZ/status/1482530602817576974](https://twitter.com/0xPEZ/status/1482530602817576974)

NFT:

- [https://blog.personalitynft.com/arbitrum-nft-marketplaces-b0037268f631](https://blog.personalitynft.com/arbitrum-nft-marketplaces-b0037268f631)
- [https://mirror.xyz/bimeng.eth/4ucgGF0llKIUbwsPAS8tqVaZkmuEfUt2Dlk2uL2pxnQ](https://mirror.xyz/bimeng.eth/4ucgGF0llKIUbwsPAS8tqVaZkmuEfUt2Dlk2uL2pxnQ)
- [https://metaversal.banklesshq.com/p/a-quick-guide-to-treasure](https://metaversal.banklesshq.com/p/a-quick-guide-to-treasure)

Payment:

- [https://medium.com/superfluid-blog/2021-the-rise-of-real-time-finance-e50e6b367291](https://medium.com/superfluid-blog/2021-the-rise-of-real-time-finance-e50e6b367291)
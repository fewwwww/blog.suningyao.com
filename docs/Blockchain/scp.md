# 读懂SCP: 基于存储设计范式🎲

> 本文为Foresight Ventures撰写, 已以机构身份发布于[巴比特](https://www.defidaonews.com/media/6714782)等平台 (近期区块链媒体官网被封, 推荐在[Foresight Research 公众号](https://mp.weixin.qq.com/s/zBwkn8q_JRyKovUKijKLMQ)上阅读).

> English Version: [Medium](https://foresightventures.medium.com/foresight-ventures-think-outside-the-block-arweave-and-bitcoin-smart-contracts-e6a4e5bb5b23).

## 概要

- **基于存储共识 (Storage-based Consensus Paradigm) 的智能合约是 Web3 时代的去中心化应用的最优解, 能提供近乎无上限的 TPS 的高性能, 同时保证数据的可溯源和不受垄断.**
- **智能合约的本质并不是避免风险, 而是去让合约涉及到的人员合理的分配风险. 智能合约的监督问题可以通过 DAO 以及开源的方式来解决.**
- **Arweave 作为一个永久存储的 Layer0 网络, 在其基础上构建的 SCP 应用不仅能做到数据以及数据交互存储可信, 还可以做到前端页面托管可信, 并且有不受审查和性能不受区块链限制的特点.**

![taproot](/img/scp/taproot.jpg)

**"打败EVM的一定不会是EVM"**

在比特币 11 月的 Taproot 升级之后, 比特币上的智能合约也开始吸引大家的目光. Taproot 升级给比特币带来了默克尔化抽象语法树和 Schnorr 签名等新特性, 让闪电网络的交易也和普通交易看上去完全一致, 不仅让比特币的安全性和隐私性得到了提升, 也让比特币的智能合约功能受到了更多人的关注.

实际上, 比特币早已支持"智能合约", 虽然并非像以太坊的智能合约那样完整, 但是通过各个功能模块的组合, 一样能做出一个比较完备的应用. 早在比特币诞生的最初几年, 就已经有开发者去用比特币简陋的脚本语言来探索去中心化应用的可能性.

正是这样的"条件简陋和不完备", 才让开发者发挥想象力, 有了无数的奇思妙想, 也让此篇文章中着重讨论的"基于存储的智能合约"在比特币上慢慢孕育形成雏形, 在 Arweave 上得以壮大.

**基于存储共识的智能合约或许是 Web3 时代的去中心化应用的最优解, 能提供近乎无上限的 TPS 的高性能, 同时保证数据的可溯源和不受垄断.**

## 智能合约

### 最初的定义

![smart contract](/img/scp/smart-contract.jpg)

根据 Nick Szabos 在 1996 年创造"智能合约"时的定义, 智能合约应该有以下特点: 一组承诺, 以数字形式指定, 包含协定, 合约涉及到的人员履行承诺.

神圣罗马帝国既不神圣, 也不罗马, 更非帝国. 智能合约也既不智能, 也不是合约. 智能合约中的智能并不是像 AI 与机器学习里的那种智能, 而是代表了合约会去机械性地执行规定好的算法. 同时, 智能合约也不算真正法律等意义上的"合约".

- **智能合约是有隐含条件的.**

    我们可以举自动售货机的例子. 用户通过 1000 个比特币买了个披萨, 合约的条款就是一定量的比特币换一定量的披萨. 而隐含条款就是这个披萨你吃了之后不会上吐下泻. 这些隐含条款是由售货机所在的国家的食品安全法等法律条款作为监督者而存在的. 而在区块链领域, 我们的监督者就是整个区块链网络.

- **智能合约的本质并不是为了避免风险, 比如完全避免计算环境不可信, 存储不可信等的风险. 而是去让合约涉及到的人员合理的分配风险.**

    智能合约的风险分配只有在一定的前提下才有效. 前提就是必须存在一个处理违约的机制. 在区块链领域, 这个处理违约的机制自然还是以太坊等区块链网络. 我们会在后文详细叙述相关内容.

- **智能合约的另一个优点就是透明性.**

    我们能通过公开开源的代码去把繁杂的合约细节统统考虑进去, 避免我们为了一个只有 0.1% 概率出现的事件而去来来回回敲定合约细节.


### 现在的智能合约

当我们现在讨论到智能合约时, 通常我们都在讨论以太坊上或者类似架构的智能合约.

这样语境中的智能合约是一种运行在以太坊链上的程序, 是位于以太坊区块链上一个特定地址的一系列代码 (函数) 和数据 (状态). 通常这些智能合约是通过 Solidity 等图灵完备的编程语言来编写的, 在 EVM 等虚拟机中运行并且得到最终的状态数据. 通过链上数据的公开性和智能合约的特定统一运算环境, 以太坊等链上的智能合约满足了智能合约中的定义和特点.

而这样的整体网络设计是有比较大的问题的. 要去升级 EVM, 来做到升级智能合约的执行性能, 是非常困难的, 需要[漫长的开发和测试时间](https://twitter.com/VitalikButerin/status/1466411377107558402) (虽然以太坊升级进展已经算是神速了). 同时, 一个被固定在链上的 EVM 的链内链外交互是非常麻烦的, 需要依靠预言机等. 除此之外, EVM [过于简洁的设计](https://eth.wiki/en/fundamentals/design-rationale)也局限了它自己的功能, 复杂的数据计算是做不到的, 甚至连[计算个三角函数都很麻烦](https://github.com/mds1/solidity-trigonometry/blob/main/src/Trigonometry.sol). 最后, 要去升级 EVM 也是很困难的, 毕竟 EVM 是在以太坊节点不断运行的, 修复和升级它就仿佛在一架飞机飞行的时候去修引擎. 然而这些问题都是双刃剑, 要解决它们或多或少都需要舍弃安全性等因素.

在 EVM 里用图灵完备的 Solidity 去编写智能合约, 除去一些复杂操作来说, 是能实现很完整的, 比如 AMM 等应用. 而比特币或者 Arweave 链上是没有这样的图灵完备编程语言的.

![bitcoin script](/img/scp/bitcoin-script.jpg)

那么链外呢? 链外我们有无数的图灵完备编程语言, 我们甚至都不用去专门定制一个, 直接抓一个来用就行. 你可能会有疑问, 如果计算进行在链外, 那么区块链的意义何在呢? 但是其实, 以太坊的 Layer2 也是靠各种的链外升级, 来优化网络的效率. 与其在链外去创建无数个 Layer2, 来以年的时间来逐步提高 TPS, 不如直接在保证计算和存储可信的情况下, 把 TPS 提高到物理层面的上限, 让区块链成为一个存储层, 毕竟在 StarkWare 等的解决方案中, 以太坊基本就是一个存数据的地方而已. 那么这个解决方案其实就是本文所要讨论的: 基于存储共识的智能合约.

**Web3.0 的前提是要 Web.** 最好的是, 原生的整套方案就具有和 Web2.0 一样的性能 (比如像 @muneeb [所说的](https://twitter.com/muneeb/status/1460039004997525510): 如果喜欢 EVM 这样的方案, 那么去重新做一个以太坊. 而不是在遵循奥卡姆剃刀设计的比特币上塞入一个 EVM), 不应该是在各种缝缝补补后重新回到了 Web2.0, 才拥有 Web2.0 的性能.

## 彩色币 Colored Coins

**目前来看唯一一个能做到传统应用一样性能的去中心化应用就是使用基于存储的设计.** 这样的去中心化应用将区块链作为图灵机的纸带, 将状态以及状态的改变存储在区块链上, 同时合约的最新状态计算可以在链下用户的客户端内进行. 这样的设计可以让去中心化应用的性能上限直接提高到网络的带宽或者用户自己硬件的性能, 是目前来说的最高效的解决方案.

很早就采用基于存储设计思想的一个典型应用就是: 彩色币.

### 彩色币简介

![colored coins](/img/scp/colored-coin.jpg)

正如我们之前所提到的那样, 中本聪设计比特币的时候, 想到或许就是做一个全球账本. 一个账本, 是不需要图灵完备的语言和语言运行环境的 (中本聪不是傻子, 我相信[他肯定知道](https://bitcointalk.org/index.php?topic=532.msg6306#msg6306)可以做类似以太坊一样的设计 ). 作为一种货币, 比特币简陋的脚本语言能做到在链上存储一些简单的 Metadata, 比如比特币的[第 0 个区块](https://blockchair.com/bitcoin/block/0)有着中本聪那句著名的 "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks".

既然比特币的脚本语言允许存储少量的 Metadata, 那么这段 Metadata 就可以用来代表现实生活中的实物, 把现实生活中的实物和比特币链上的某些包含了特定 Metadata 的区块联系起来. 比如我们在第 6324 个区块的 Metadata 中写下: "本区块生成了 100 股小卖铺的股票", 那么可以说这个区块就是小卖铺股票的彩色币的第一个区块, 这个包含了 Metadata 的区块被彩色币 "染色了". 之后其他包含小卖铺股票交易 (比如 "Alice 卖给 Bob 10 股小卖铺股票") 的区块都被染色了, 都是存储彩色币交易信息的区块.

### 彩色币的特点

- **搭了比特币的顺风车:**

    彩色币使用比特币区块链作为主干, 采用基于存储的共识, 把比特币的 Metadata 作为存储交易的数据库. 它充分利用了比特币的优势, 如不可伪造性, 易于转让, 稳健性和透明度, 从而以前所未有的安全性和轻松操作真实世界的资产.

    比特币的所有优点, 彩色币都得到了. 当矿工用无数的算力维护比特币网络的同时, 彩色币项目的安全性也得到了保证. 同时彩色币 "智能合约" 的运算也是在链下进行的, 完全没有性能上的问题, 唯一的瑕疵可能就是, 比特币这个 "数据库" 的数据读写可能有点慢.

- **可能是最早的证券 NFT 的例子:**

    彩色币诞生于 2012 年. 虽然彩色币是由比特币组成的, 但是却可以代表多种资产并具有多样用途, 包括财产, 优惠券, 发行公司股份等. 每一个彩色币也各不相同, 可能代表了不同的份额. 从这样的角度而言, 彩色币完全就是 NFT.

    而这**原始但五脏俱全的 NFT 都是通过比特币简陋的脚本语言 + Metadata + 基于存储的共识来做到的**. 试想一下, 通过这样的设计, 我们完全可以把各种头像的 NFT 项目在比特币链上就复刻出来. 这其中的革命性就是彩色币 2012 年就诞生了, 一年后, 有图灵完备语言和 EVM 的以太坊才刚刚被 Vitalik 构想出来. 这是非常超前的.


### RIP 彩色币

在 2021 年, 我们在彩色币的 [wiki](https://en.bitcoin.it/wiki/Colored_Coins#Smarts_Contracts_capabilities) 上所浏览到的很多链接都已经无法访问了, 可以说彩色币的活跃度已经消退了 (当然我们仍然可以看看当初彩色币的 [pitch deck](https://docs.google.com/presentation/d/1geJOeTkIvrIsZMBemJl-Iw5eYalG4w0ftIxsEVRp6lc/edit#slide=id.g6657b0013_1_31)). 彩色币先驱般的尝试, 通过链下计算, 简陋的比特币脚本语言以及基于存储的共识的思想启发了后文中我们提到的 RGB 以及 Arweave 的 SCP.

## RGB 与 Taproot

### RGB 简介

RGB 是比特币和闪电网络上运行的 Layer2 以及 Layer3 的客户端验证的智能合约系统. RGB 受到彩色币的启发, 将比特币作为状态承诺层, 采取基于存储的设计范式, 由 Giacomo Zucco 和 Peter Todd 在 2016 年提出, 2019年早期获得 Tether公司, Bitfinex 的支持.

RGB 代表 "后区块链", 图灵完整的无信任分布式计算形式. RGB 把智能合约的发行方, 状态拥有者, 和状态改变互相隔离. 同时, RGB 采取了将智能合约代码和数据运算放在链下的方案. RGB 将区块链作为状态承诺层, 将比特币脚本作为所有权控制系统, 而智能合约的更新换代在链外被定义.

![rgb](/img/scp/rgb.png)

简而言之, RGB 就是加强版的彩色币. RGB 类似一个非常完整的 Layer2, 将区块链作为承诺层, 在链外进行运算和状态管理, 极大程度上提高了智能合约和去中心化应用的性能. 同时借助智能合约在链下计算这一设计, 扬长避短, 让比特币的脚本语言做了它能做且该做的状态承诺操作, 让链外的图灵完备编程语言进行了复杂的状态管理与运算.

### Taproot 与 RGB 相结合

Taproot 所做的是减少一些复杂操作的复杂度, 并提升这些复杂操作的隐私. Taproot 没有带来完全富有表现力的如同以太坊上一样准图灵完备的智能合约, 比特币脚本语言的限制依然存在.

而 RGB 本身不必须依赖于 Taproot. 但在 Taproot 存在的情况下, 很多 RGB 的操作可以更简单地实现, 这对 RGB 来说其实可能是很有帮助的升级.

## 基于存储共识的设计范式 (SCP)

说完了古早的彩色币以及 RGB, 我们可以谈谈更加新颖的生态 Arweave 上的基于存储的智能合约的设计. 我们终于可以引出一个比较官方并且规范化的术语: 基于存储共识的设计范式 (Storage-based Consensus Paradigm). 我们将在本节深入讨论这一类设计的优点以及潜在的问题.

### SCP 简介

Arweave 是一个为存储而生的区块链, 相比之下, 比特币的定位就和基于存储共识有些许的偏离. 自下而上, 比特币可以说有着: 比特币 (账本记录层) → 闪电网络 (应用运行层) 的架构, 同时 Arweave 也有类似的架构: Arweave (存储层) → Permaweb (应用运行层). **在 Arweave 上, 我们可以更专注于让智能合约保持状态, 而 Arweave 就作为图灵机的纸带, 在底层记录这些状态以及各个修改状态的交易.** 很有趣的是, Vitalik 在[最新的博客文章](https://vitalik.ca/general/2021/12/06/endgame.html)里也表现出了想成为 Web3 纸带的意向. 而在 EIP-4444 的讨论区里, 一位网友这么[以太坊评价旧数据的存储问题](https://ethereum-magicians.org/t/eip-4444-bound-historical-data-in-execution-clients/7450/19).

![scp](/img/scp/scp.png)

基于存储共识的设计范式是由 everFinance 的 Founder outprog 所提出的, 灵感来源于 Arweave 的 SmartWeave 以及以太坊的二层 Rollup. 在 everPay 的白皮书中这样描述它: 以太坊中, 计算会被区块链网络中的所有节点执行, 所有节点都会生成和存储全局状态以供查询. 不同于以太坊模型, SCP 分离了计算和存储, 区块链不进行任何计算仅进行数据存储, 所有计算由链下的用户客户端或服务器执行, 生成的状态也由链下客户端或服务器进行保存. SCP 使用了链下智能合约, 智能合约可以使用任何的语言进行编写, 这些程序的所有输入参数都来自存储型区块链. 在范式中，区块链更像是计算机的硬盘, 链下智能合约可以在任何具备计算能力的机器上进行.

简而言之, **SCP 就是用比特币或者 Arweave 来存储状态的结果, 或者再存储链外智能合约的内容, 来保证存储的可信, 实现一个与底层区块链分层的高性能 Layer2 网络.** 这里所说的 Layer2 实际上可以算是 Layer1, 因为比特币或 Arweave 链上是没有智能合约运算能力的, 它们可以说是更底层的 Layer0.

### SCP 优势

![everpay](/img/scp/ever.png)

- **性能无限制**

    智能合约在链下进行计算, 其性能跟传统应用一样. 链下服务器可以承载大量复杂的交易. TPS 取决于提供计算服务的机器性能和构建应用的技术架构, 而无需担心区块链本身的性能限制.

- **数据可信**

    借助底层区块链的特点, SCP 的数据都保存在区块链上, 将区块链作为硬盘, 获得了数据不可篡改和可追溯的特性. 因此区块链为数据赋予了可信的特性.

- **开发生态 0 门槛**

    任何语言都可以进行链下智能合约的开发, 对于开发者来说无需额外的学习成本 (比如学习使用 Arweave HTTP API 或者比特币脚本肯定不算). 同时这也避免了比特币或 Arweave 链上没有或者只有简陋编程语言的劣势.

- **拥有可组合性**

    将智能合约彻底放在链外, 不会污染区块链的本质, 保持了区块链的 by design. 同时通过功能分层, 让 SCP 的智能合约拥有了可组合性. SCP 未必必须在 Arweave 上, 而是可以稍加修改接入另一条链, 比如从 Arweave 的 Permaweb 直接到了比特币的闪电网络. 这在多链互联的未来是十分重要的, 毕竟[**软件时代的可组合行就和金融的复利一样具有庞大的力量**](https://www.notboring.co/p/idea-legos).


### 关于 SCP 潜在的疑问

不得不说, 这样的 SCP 是和大家理解上的传统智能合约有很大区别的, 同时当然也存在很多潜在的疑问.

- **SCP 的生态现在是否太年轻?**

    我们之前提到 SCP 的灵感是来源于 SmartWeave. SmartWeave 的核心是 Lazy-execution, 在不得不获取最新状态的时候, 会去将存储在链上的所有交易在客户端运行一遍. SmartWeave 是 Arweave 官方的智能合约方案, 而 SmartWeave 是 SCP 的一种具体实现, 因此任何使用了 SmartWeave 的项目实际上都是使用了 SCP, 包括前文中的彩色币和 RGB 都是 SCP 的实现.

    **目前来说, 几乎所有 Arweave 生态上的项目都是采取了 SCP 的设计.** 有趣的是, 近期 KYVE 从 SmartWeave [转移到了 EVM 的智能合约](https://blog.kyve.network/protocol-update-2-e8b93438ee38), 主要原因是它们的业务本身就是跨链的, 因此要去赶紧抱团 EVM 链的生态, 或许次要原因就是它们认为 Arweave 生态的年轻. 但是实际上近期 everPay, Pianity, Verto, redstone.finance 都在 SCP 生态方面有大动作, 我们会在后文稍微详细的讨论它们.

- **智能合约定义中的合约执行监督者与计算可信?**

    在文章的一开始, 我们探讨智能合约定义时就卖了个关子, 没有详细解释 SCP 执行中的监督问题和计算可信问题. 在 EVM 的智能合约里, 监督者是整个以太坊网络. **而到了 SCP 中, 由于智能合约是在链下运行的, 那么区块链网络肯定无法监督智能合约的执行. 但是在 Web3 时代, 我们有很契合的解决方案: DAO + 开源.**

    我们可以用 DAO 来决定和监督链下智能合约的执行和上链, 同时所有人都可以通过开源的智能合约内容以及公开的链上数据, 都可以去试着运行一遍所有的结果 (链下智能合约是通过"正常"编程语言来写的, 几乎所有的设备都可以有JS之于浏览器, Java之于JVM来运行), 来比对结果是否正确. 在这样的保驾护航下, 绝对能保证智能合约的监督和计算可信, 毕竟和某些中心化程度很高的链以及某个中心化商业闭源的 Layer2 方案相比, 是非常 Web3 的.

- **SCP 的去中心化程度? 链下智能合约还是智能合约吗?**

    **其实自始至终智能合约都没有存储可信和计算可信的要求. 在定义上来说, SCP 是完全符合每一条概念的**, 只是说相比以太坊的 Layer1 智能合约来说, 没有一个完全统一的 EVM. 我们不能局限于链上 VM. 总的来说, 智能合约虽然是去中心化网络上的程序, 但本身在某些角度还是比较中心化的. 链上合约的 owner 本身就可以有高权限去做一些危险的操作.

    除此之外, 几乎没有人会去一行行仔细看智能合约的内容, 也不关心执行或存储的可信. 这就涉及到技术道德平衡的问题. 在 Web3 时代, 懂代码的程序员是否可以割普通用户的韭菜呢? 我们已经在 Web2 被割过一遍了. 所以一个拥有 DAO 监督, 合约内容开源可被用户反复运行的链下智能合约不只是智能合约, 还是非常安全可信以及去中心化的智能合约.


## Arweave 上的 SCP 智能合约生态

正如我之前所提到的, SmartWeave 是 SCP 的一种具体实现, 因此在 Arweave 上用到 SmartWeave 的项目也都是 SCP 智能合约生态中的一部分.

![ar scp eco](/img/scp/eco.jpeg)

### 重点项目

- **[everPay](https://everpay.io): 实时跨链支付协议**

    作为 SCP 的提出者, everPay 一直在开发者生态以及 Arweave 官方中推行这种智能合约设计模式, 并且 everPay 本身就是这种设计模式的高性能实现. everPay 并没有直接用 SmartWeave 来实现 SCP, 而是使用了其他的高性能实现, 同时也在积极安排链下智能合约的 DAO 组织与节点等.

    最近 everPay 发布了 golang 并发编程的高性能 Arweave txs 同步器 [Arsyncer](https://medium.com/everfinance/arsyncer-arweave-transaction-synchroniser-3ebcf0e741ec). 同时 everPay 近期也在宣传一种[以 SCP 为设计模式的 AMM](https://medium.com/everfinance/how-to-build-your-own-scp-app-a-prototype-for-next-generation-blockchainless-dexs-87a6577fbd4). everPay 通过非常前沿的设计与技术, 不断引领着 Arweave SCP 生态技术的前进.

- **[redstone.finance](https://twitter.com/redstone_defi): DeFi 的数据生态系统**

    redstone.finance 在 Arweave 生态中, 一直在通过优秀的架构和前沿的技术不断优化 SmartWeave. 他们通过[多层设计以及浏览器多层缓存](https://github.com/redstone-finance/redstone-smartcontracts)来减少不必要的交易数据的重复加载与运行, 可以大大优化客户端的合约性能. 或者由可信的用户来生成交易状态快照, 减少交易的运算. 最近他们也在通过[将 WebAssembly 技术融入到 SmartWeave 中](https://twitter.com/redstone_defi/status/1463533757286297610),  来提高 SmartWeave 的安全性, 性能以及可读性等.

- **[Pianity](https://pianity.com): 音乐 NFT 交易市场**

    Pianity 是一个音乐 NFT 平台, 提出了一种可带给收藏者一定年化收益的模式. Pianity 平台通过音乐 NFT 的一级销售和二级交易获取一定手续费收入, 然后按照用户购买 NFT 时的价值和全体 NFT 总价值的比率将收益分配到每一个持有NFT的用户手中. 由于占比计算方式是购买 NFT 时的价格, 就可能导致用户为获得更高分配占比而刻意抬高 NFT 价格, 反向刺激市场可分配收益也逐渐增加, 吸引流量关注.

    在音乐 NFT 的相对蓝海市场中, Pianity 通过永久存储和双收益模型, 有机会脱颖而出.

- **[Verto](https://www.verto.exchange): 利润分享代币的 DEX**

    Arweave 中有特殊的代币类型: 利润分享代币 (PST). 持有 PST 能收取用户使用 DApp 时所花费的一定 AR 手续费. 而 Verto 就是这些利润分享代币的 DEX. 其代币 VRT 可以获得全部 PST 交易费用 0.5% 手续费抽成. (更多 PST 相关的内容, 请参考 [我们的上篇文章](https://foresightventures.medium.com/arweave-explained-the-in-the-room-of-web3-0-777fd9060493))

    在上篇文章中, 我们提到了 Verto 在进行 SmartWeave 合约代码的重构, 因此最近没有交易, 但是可以体现出 Verto 在 Arweave SmartWeave 生态中的积极以及对发展的推动. 我们非常期待 Verto 新版本上线以后能够去交易这些利润分享代币.


### Arweave 的独特优势

除以上所述的几个方面之外, Arweave 上的 SCP 也有独特的优势.

1. **Arweave 不仅能做到数据以及数据交互存储可信, 还可以做到前端页面托管可信.**

近期 [BadgerDAO 的被盗](https://twitter.com/ChrisBlec/status/1466417748213477377) 以及之前 Uniswap 从前端下架了某些代币, 都是因为前端的中心化, 导致了前端页面被篡改或者受审查和监管压力而被迫修改 (比如[链闻](https://www.chainnews.com), 很幸运的是我们有 Arweave 上的[存档](https://chainnews-archive.org)). 在这样的情况下, 一个去中心化的应用是不完全去中心化的, 只做到了智能合约的去中心化, 而前端是中心化的.

Arweave 的前端托管就可以解决这个问题. 将一个应用的前端托管到 Arweave 上, 在访问交易存储的源文件的同时就可以让浏览器将整个页面渲染出来. 这就保证了页面不会被人轻易篡改, 因为一条 transaction 是永久不可变地被存储到区块链上的.

![uniswap ar](/img/scp/uni.png)

这保证了前端页面存储的去中心化, 前端页面的不可篡改, 以及一定程度上避免了审查. **在 Arweave 上进行前端托管能让一个去中心化应用成为一个真正完全的去中心化应用.** 目前你可以通过 Arweave 上的 [Argoapp](https://argoapp.net) 等来进行各种前端项目的托管.

2. **只有在 Arweave 上使用 SCP 才能获得最上限的性能以及去中心化**

根据 SCP 的发明者 outprog 所说: "TPS 阻塞主要在 L1, 就算 L2 再快, 上不了链也不行. 多个 L2 会同态竞争同一个资源. 这是链上计算和验证的终局, 无法扩展, 最多就到万级 TPS. 造成这样的原因是受限在链上计算和验证的思维. 很难做真正的 Web3. " 而在一个 Layer0 定位并且能做到永久存储的 Arweave 上做 SCP 的去中心化应用不受这样的限制. 这是性能方面的考量.

以太坊的 Layer2 各种 Rollup 方案也可以看作以太坊上的一种 SCP 思想. 以太坊 Layer2 的飞速进展让人期待 ETH 2.0. 然而以太坊的 Layer2 现在的情况令人担忧, 是否一切都发展的太快了, 以至于导致以太坊现在有了高性能的 Layer2 的同时还有了: 比较商业化的 StarkWare (和 zkSync 团队相比较而言), ["专"为 StarkWare 打造的 Layer2 钱包](https://twitter.com/EliBenSasson/status/1465737968166092803), 没有 fraud proof system 的Optimism (以前其实有, 现在正在有). 这些情况越来越像是在向 Web2 时代飞速开倒车. 要想成就 Web3, 就必须要重新开始. 技术债是很可怕的事情, 同时会越来越可怕.

## 总结

**从比特币到 Arweave, 基于存储共识的设计范式采用了链外验证的链下智能合约, 实现了真正具有不受限的性能, 不受审查以及安全性的完全去中心化应用.** 这或许更能建设一个数据开源以及用户拥有数据和应用所有权的 Web3.

当面对"异步网络中的拜占庭将军问题不可解"这样一个命题的时候, 中本聪并没有纠结于"拜占庭将军问题"本身上, 而是 think out of the box, 想出了带有 PoW 的区块链这个解法, 也就是比特币. 当我们思考智能合约的优化时, 也不必纠结于各种 Layer2 加密和证明, 而是要 think outside the box, 大胆地将智能合约放在链下, 让存储共识得到满足的同时, 也满足了数据开源以及监督可信的特点, 得到完全和 Web2 一样优异的性能, 这就是 SCP.

![think outside the block](/img/scp/think.png)

最后 [Messari 2022 年的年度报告](https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf) 中有一句话, "Development on bitcoin is like building a rocket, while development on Ethereum has historically been more similar to building a Silicon Valley startup." 在比特币(或者 Arweave )上开发就像造一个火箭, 因为它们都更底层, 没有智能合约的执行环境, 因此才需要像彩色币那样, 去通过镰刀和锄头造火箭; 而以太坊就是一台完整的计算机, 拥有所有软件开发的能力和工具, 在它上面开发就和正常的软件开发类似. 所以这篇文章最后的问题就是你想在以太坊上做一个 Startup, 还是在比特币或者 Arweave 上造火箭, 做 Web3, 然后 to the moon 呢? Think outside the block.

## 相关阅读

General:

- [https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf](https://messari.io/pdf/messari-report-crypto-theses-for-2022.pdf)

智能合约:

- [https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/video-lectures/session-6-smart-contracts-and-dapps/](https://ocw.mit.edu/courses/sloan-school-of-management/15-s12-blockchain-and-money-fall-2018/video-lectures/session-6-smart-contracts-and-dapps/)
- [https://twitter.com/muneeb/status/1460036412275896328?s=11](https://twitter.com/muneeb/status/1460036412275896328?s=11)

彩色币:

- [https://www.chainnode.com/tutorial/223](https://www.chainnode.com/tutorial/223)
- [https://www.zhihu.com/question/56041955](https://www.zhihu.com/question/56041955)
- [http://www.woshipm.com/blockchain/953728.html](http://www.woshipm.com/blockchain/953728.html)
- [https://new.qq.com/omn/20210911/20210911A07JFI00.html](https://new.qq.com/omn/20210911/20210911A07JFI00.html)
- [https://docs.google.com/presentation/d/1geJOeTkIvrIsZMBemJl-Iw5eYalG4w0ftIxsEVRp6lc/edit#slide=id.g6657b0013_1_31](https://docs.google.com/presentation/d/1geJOeTkIvrIsZMBemJl-Iw5eYalG4w0ftIxsEVRp6lc/edit#slide=id.g6657b0013_1_31)

RGB:

- [https://rgb-org.github.io](https://rgb-org.github.io/)

Taproot:

- [https://github.com/PrimitivesLane/Publications/blob/main/bitcoinops_zh/2021-11-17-newsletter-zh.md](https://github.com/PrimitivesLane/Publications/blob/main/bitcoinops_zh/2021-11-17-newsletter-zh.md)
- [https://mp.weixin.qq.com/s/VjU1BtmIG_a3ETt42ALoDw](https://mp.weixin.qq.com/s/VjU1BtmIG_a3ETt42ALoDw)
- [https://twitter.com/muneeb/status/1459965496061739009?s=11](https://twitter.com/muneeb/status/1459965496061739009?s=11)

SCP:

- [https://medium.com/everfinance/storage-based-consensus-paradigm-a85c7a398a53](https://medium.com/everfinance/storage-based-consensus-paradigm-a85c7a398a53)
- [https://medium.com/everfinance/introducing-arweaves-tech-ecosystem-part-1-e52c7d5818b](https://medium.com/everfinance/introducing-arweaves-tech-ecosystem-part-1-e52c7d5818b)
- [https://medium.com/everfinance/introducing-arweaves-tech-ecosystem-part-2-fd372a35100a](https://medium.com/everfinance/introducing-arweaves-tech-ecosystem-part-2-fd372a35100a)
- [https://twitter.com/ForesightVen/status/1466521023579316227](https://twitter.com/ForesightVen/status/1466521023579316227)

Arweave:

- [https://mirror.xyz/0xE43a21Ee76b591fe6E479da8a8a388FCfea6F77F/KlnOtrlg2Yhfiv9G7HBRx1vPnCHbgGpSydG8YLy-x2E](https://mirror.xyz/0xE43a21Ee76b591fe6E479da8a8a388FCfea6F77F/KlnOtrlg2Yhfiv9G7HBRx1vPnCHbgGpSydG8YLy-x2E)
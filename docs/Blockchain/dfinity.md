# 浅谈Dfinity的云计算+区块链☁️

> 本文为Foresight Ventures撰写, 已以机构身份发布于[链闻](https://www.chainnews.com/articles/385405770506.htm), [火星财经](https://news.huoxing24.com/20210930133115842687.html)等平台.

> English Version: [Medium](https://foresightventures.medium.com/dfinity-explained-serverless-blockchain-6766da343e32).

## Dfinity 概览

### Dfinity 基金会

---

Dfinity 是一个非营利性组织，致力于将互联网重塑为能承载具有超高能力并具有安全性的计算机。Dfinity所主导的互联网计算机「ICP」采取 WASM 等新技术与新架构，具有防篡改、速度快、规模可达全球数十亿用户的特点，同时支持软件的自主构建，有望扭转科技巨头垄断互联网的现状。

### 互联网计算机「ICP」

---

ICP 是 Dfinity 基金会主导的 Layer1 区块链项目，致力于构建一个公开区块链网络。ICP 为智能合约提供了一个无限制的运行环境，智能合约能够以近乎正常中心化网络的速度运行。借助 ICP ，可以构建任何应用和服务，例如 DeFi ，例如链上运行的社交媒体网站，同时也可以扩展传统意义上的 DApp。

- GitHub

    [https://github.com/dfinity/ic](https://github.com/dfinity/ic)

- 技术文档

    [https://sdk.dfinity.org/docs/introduction/welcome.html](https://sdk.dfinity.org/docs/introduction/welcome.html)

- 社区资源

    [https://github.com/dfinity/awesome-dfinity](https://github.com/dfinity/awesome-dfinity)


## ICP 的特点

---

`重点特点：部署方便、去中心化、容灾备份`

ICP 扩展了普通互联网的功能，使其可以托管后端软件，将整个 ICP 网络转变为全球计算平台。

使用 ICP ，开发人员可以通过直接在 ICP 网络上快捷地部署代码来创建应用和服务，而无需进行繁琐的服务器计算机部署和商业云服务购买。

简而言之也就是说，ICP 把软件开发方面的部署、架构问题、拓展问题都解决好了，应用开发人员要做的仅仅就是写代码就好。

### 1. 定位

- 对标 Serverless

    ICP 并没有特别标榜自己是类似以太坊的公链，而是说自己是互联网计算机。ICP的定位就类似区块链版的中心化云平台（如亚马逊的 AWS ，微软的 Azure ，或者几乎纯做 Serverless 的 Heroku (母公司为 Salesforce )）上的 Serverless（无服务）。

    Serverless 直译就是“不用担心服务器”，顾名思义就是当开发者部署一个应用时，不用担心服务器配置问题，而是类似直接把代码上传上去就可以完成部署。Serverless 除了不用担心服务器、交付速度快以外还有几个特点，一是自动弹性，比如在双十一的时候，淘宝需要大幅增加服务器数量，如果采用 Serverless ，就无需去手动调整服务器，云平台会自动拓展应用的资源；二是按实际使用资源计费，传统服务器是按月或年进行租用，Serverless 是按照调用的次数来计费，ICP 也如此，因此性价比较高，不会产生闲置服务器浪费资源的情况。

    Serverless 的最大优点和卖点就是开发方便快捷，整体性价比高。云平台现在所做的就是不断支持更多的编程语言（比如支持 Nodejs ，不仅吸引 Nodejs 的开发者使用 Serverless 服务，也逐渐让 Nodejs 的生态也更加繁荣），简化软件开发人员使用 Serverless 的步骤。而 ICP 的生态相对于传统云平台 Serverless 的生态，就显得有些不那么繁荣。Serverless 原生支持几乎所有的热门编程语言，而 ICP 采用的是 WASM (后文会深入分析 WASM )以及一门自研的编程语言。对于这门自研的编程语言，虽然功能十分丰富，但是它的生态必然是不如 Java 、Nodejs 这类语言的。而 WASM 生态也是非常新的一个东西，目前落地还尚早，在 WASM 的主战场浏览器，API 也还没定稿。所以是现阶段需要一些发展时间，未来各个生态繁荣后大有可为。

    Serverless 是未来的趋势，据 AWS 的调查，百分之40的组织都在使用 Serverless。据阿里巴巴所说，Serverless 给阿里的人力成本降低了48%，未来对 Serverless 的需求会越来越大。在 Serverless 这条大赛道上，ICP 的对手有 AWS 、微软 Azure 等巨头。但是现在 Serverless 还处于各家混战的情况，没有统一的标准，因此ICP还是有机会通过高性能和高安全性抢占市场份额的。

- 对比云平台

    实际上，ICP 所说的“云平台太过于中心化”未必是完全正确的。对于单个云平台来说，中心化是必然的；但是目前有很多开源项目比如 [Terraform](https://github.com/hashicorp/terraform) 或者 Serverless Framework 等各种库与插件，可以做到部分地串联云平台，做到统一运维和部署，通过同时使用多个云平台，可以部分解决云平台过于中心化的问题。但是当选择使用特定的一个云平台的服务后，确实会造成转换平台困难的问题。ICP 同样存在这样的问题，并且可能因为生态封闭而更加严重。ICP 所强调的去中心化实际上依然是区块链的特性中的共识以及节点做到的去中心化。

- 对比以太坊

    回到开发的流程，在 ICP 上开发实质上和在以太坊上开发没有特别大的区别，甚至可以说更加困难（文档、社区支持相对少）。作为一个新的开发者，开发者需要更多的理由才能说服自己去选择 ICP。既然以太坊上的受众更大，开发也能找到更多帮助，那开发、发布到 ICP 乃至其他公链的优势是否真的更大呢？这是每个“以太坊杀手”公链应该思考的问题。但是 ICP 很机智地选择避免正面和以太坊竞争，而是偏向于对标云平台上的 Serverless。


### 2. 编程语言

1. WASM：

    ICP 所推荐的 Motoko 能编译为 WebAssembly (WASM)。ICP 的运行过程中利用了 WASM 容器来存储数据并执行代码。WASM 是一种用于基于堆栈的虚拟机的二进制指令格式。它支持在 Web 上部署客户端和服务器应用程序。WASM 容器就类似以太坊的 EVM，相对 EVM，WASM 更加强调执行效率和性能。在以太坊2.0当中，以太坊也有计划从 EVM 移植到 WASM。

    WASM 的优点就是性能强、安全性（在内存安全的沙盒里运行、会执行浏览器的安全策略）、生态拓展（可以直接嵌入到 Web，但是浏览器暂时没完全支持）。

2. Motoko：

    Dfinity 自研的编程语言，类似以太坊自研的 Solidity。Motoko 拥有很多对于应用的特定优化（后文会进行深入分析）。

    [https://github.com/dfinity/motoko](https://github.com/dfinity/motoko)

3. Rust：

    ICP 提供 SDK 的语言，适合在 WASM 容器中运行。

4. 其他的语言由于没有 SDK 以及官方开发文档，可能还是需要 Motoko 或 Rust 作为胶水来实现与ICP直接交互的部分，因此开发基本还是只能选择 Motoko 或者 Rust。

### 3. 生态

从生态和开发者体验上来说，Dfinity 提供的示例程序源码、技术文档、开发工具（VSCode 插件、NPM 库、DFX 脚手架）都很全面。

## 共识协议

---

### 特点

PoS 提速并解决计算冗余、随机数信标保证去中心化、staking 保证安全性、周期性最终确认保证轻量。

### 共识过程

不同于以太坊的 DApp 只是适时调用合约，ICP 设想的软件是完全依靠智能合约来驱动服务的。综上来讲，ICP 需要非常高的计算性能、减少计算冗余，因此 ICP 但同时还得在保证区块链网络去中心化的情况下的足够安全，因此这对它的共识算法提出了苛刻的要求。

1. 开始前的节点准备：
    1. 节点创建私钥公钥，建立匿名的永久身份。
    2. 节点加入网络需要抵押固定的 token 作为 staking。
    3. 节点随机的与其他节点组成阀值组（完全随机，一个节点可存在于多个阀值组）
    4. 阀值组中，运行分布式密钥协议（DKG），每个节点获取该组的「验证签名」密钥（不同于个人密钥，有一组的私钥数学拆分而来）。
    5. 系统还是根据 DKG 产生阀值组的共同公钥，并对阀值组进行注册。
    6. 准备就绪，开始等待参与共识。
2. 共识过程：
    1. 选择本轮委员会组 *注1 *注4
    2. 提案委员会打包出块
    3. 公证委员会持续接收并验证区块
    4. 随机数信标收集签名；等待阀值，产出公证与随机数 *注2
    5. R+1 step0 同步正确区块，R+1 轮开始，回到 step1 *注3
- *注1

    重点：非交互式。

    DFINITY 首先由随机数公开的选出了 400 个客户端一组的出块组，来打包交易并出块。每一个客户端都会出块，还有一组同时随机数选出的验证者，他们会接受区块，同时运行一个根据随机数判断区块权重的协议，验证者只签名权重最高的节点，期间大家不会交互，不会进行拜占庭共识互相发送签名数据，主要是固定区块时间里不断寻找权重最高的区块即可。在一个区块接受到了超过 50% 个验证者的签名后（是单独签名的，不是一起联合签名的），系统会自动聚合区块上的签名，并确认区块为唯一，一但客户端观察到聚合的签名，就会进入下一轮共识。

    可以看到，整个过程都没有进行拜占庭协议，只是遵序三个原则：

    - 客户端遵序最高权限的原则对区块签名，权重越高的链越会被确认
    - 系统遵循 50% 以上签名产出随机数信标的原则
    - 大家遵序一看到新的随机数信标马上进入下一轮共识的原则

    三个原则剔除了多余的无效区块，获得了唯一的区块，从而近似的达成了一致性共识（说近似是因为可能有同时存在两个被公证区块）。整个通讯过程几乎为零，在广播 gossip 协议的网络中，一个有 400 个节点的组网，只需转发大约 20KB 的通信数据，即可产生阈值签名。而一个小组的分布式签名密钥的生成，是在小组创建时就分配好的，不需要在共识阶段产生，一次生成多次使用。

    类比一下非常相似但由两轮拜占庭共识交互的 Algorand。Algo 的随机数抽签过程是隐秘式的，也就是说节点只知道自己被选择与否，它却不知道全网中有多少节点被选中。因此 Alogo 共识前必须遍历一编全部网络，进行一次拜占庭才能知道全部的被选取的验证组，因此这里的延迟时间与带宽使用就很高了。再加上前面讲的超大验证组（2000 人到 4000 人）的拜占庭通讯轮次与签名数据的问题，Algo 共识下带宽使用非常爆炸，这种人是没这个能力参与的。

- *注2

    重点：性能和安全性都很高的随机数算法。

    Dfinity所用的随机数算法是VRF。VRF涉及很多数学演算，我们可以将其视为一个黑箱子，一段是输入，一段是输出。输入是一组客户端的签名，输出是一个准确的随机数。只有在获取了足够多的客户端签名，黑箱子才能输出随机数，再此之前，没有任何一个客户端能知道或预测它的输出。「足够多」签名的阀值为 50%，因此这个 VRF 的过程也叫做「阀值签名」。

    这个 VRF 具备三个特点：

    - 可验证：一但输出了随机数，大家都可以拿着客户端的签名对其进行验证。VRF的V就体现在这里。
    - 唯一确定性：一但有超过 50% 的客户端发送了签名，黑箱子接受到后会获得唯一的一个确定的随机数。这里是因为使用的私钥签名算法具有唯一性，也就是统一密钥对统一数据的多次签名的结果都不相同，只有一个可以合法的验证。
    - 非交互：在产生随机数的过程中，虽然黑箱子需要收集大家的签名，但是客户端之间不需要进行交流，更没法干扰到随机数的从产生。

    在已知的密码学算法里，只有 BLS 算法能做到以上三点，而 BLS 算法的提出者之一「L」Lynn 正是 DFINITY 的高级工程师。其他的随机数方案，要么验证起来难度极高（连续哈希），要么无法保证唯一性，要么就是没有阀值的设计，必须进行交互，存在「最后一个参与者」就能间接影响随机数偏差的情况（以太坊的 RANDAO 与 VDF）。

    当然这个 VRF 还是一点问题，选取的一组共识者中如果有超过 50% 被攻击者掌握，那么他可以间接的干扰到随机数的生成，当然来预测随机数还是基本不可能的，没法直接控制。攻击者还可以不发送签名，让随机数生成过程停止，从而让整个系统宕机。（这个其实没有任何共识协议能顶得住）

- *注3

    重点：超快的最终确认。

    DFINITY 的共识是按轮次进行的，每一轮共识的开始与结束的标志，都是观察到随机数信标产生新的随机数，而这个随机数是系统聚合签名产生公证的同时更新的。因此这 DFINITY 的区块高度必须与轮次一致，每一轮中生产的区块，必须是引用了上一轮的公证签名，不然视为非法。同时公正组只会签名本轮产生的区块，不会对之前轮次的区块签名。

    总结为两个强制：

    - 只有本轮发布的区块才能被公证；
    - 只有引用上一轮被公证的本轮区块才是合法的；

    这保证了出块与公证两个过程，都没法被恶意扣留，因此攻击者没办法偷偷来准备一条比主链更长的影子链，来做双花攻击，因为从影子链的第一个区块起就不合法了。

    因为存在上述「验证者组单独签名，系统聚合签名产生公证」的公证过程，因此每一轮后基本可以做出唯一性的确认。但也有会出现两个或以上区块同时通过公证的情况，因此一轮结束后还不能做到最终确认，这时就需要在下一轮中继续判断。此时等待出块过程完成，因为出块者可能选择在上一轮同时被公证的区块后面继续生产，所以同时存在几条分叉。

    验证者会计算权重来判断唯一区块，权重高的一条链就作为唯一确认链，然后验证者才会对他进行签名。因此当本轮出现了新随机数时，也就意味着分叉已经被剪除，而上一轮的区块，包括其中的交易，都获得了最终的确认。

    快速确认不仅提高了性能，剪除了分叉，降低了系统的冗余度，并且可以让客户端不用存储全部要历史区块数据，任何一个新加入的区块，只要从最近的确认区块开始即可。

- *注4

    重点：弹性拓展性能。

    优秀的随机数给 DFINITY 的网络带来近乎无限的扩展可能性，因为整个随机数的产出，包括出块与公证，都是由固定数目的委员会组来执行的，客户端新节点的加入不会影响到运行的速度。DFINITY 随机产生多个阀值组的，因此多组间并行运行，从而实现分片，是相当轻松的。以太坊 2.0 的分片方式也非常近似。但是Dfinity的存储和网络拓展性也是需要拓展的，这方面上节点与节点、存储之间的传输也是有损耗的，带宽未必受得了，如果这个方面无法扩展，仅仅是做到分片的话可能只是表面的优化。


## 计算与存储

---

### 应用架构

![CanCan](/img/dfinity/cancan.gif)

从底层开始：P2P 层(收集分发数据) → 共识层(整理消息，验证后写入区块) → 消息路由层(传输信息到目的地) → 应用执行层(通过 WASM 安全沙盒环境进行计算)

开发阶段，Dfinity 的开发者工具都会把各个层级抽象出来，复制给开发者一个本地版来方便开发。

### 应用运行机制

代码编译为 WASM 模块，部署到 ICP 的 Canister 容器(容器中包括了程序本身、状态、用户交互记录)中。

[https://zhuanlan.zhihu.com/p/372441370](https://zhuanlan.zhihu.com/p/372441370)

### Canister

类似以太坊中的智能合约，除了运行环境是 WASM 的沙盒以外本质上没有其他大区别。正如之前提到的，一个很重要的特点就是 ICP 作为一个类似 Serverless 的服务提供商，上面的应用相比以太坊应用是需要具有更高的实时性的，比如 ICP 版抖音，因此 Canister 需要做更多的交互，同时也要保证不宕机、不拥挤卡顿。

### 存储

`ICP的应用状态是存储在内存里的，通过共识阶段来进行管理和确认修改。`

在 Dfinity 的博客上有个经常被提及的词就是正交持久性(orthogonal persistence)。它所指的依然是 Serverless 的特点，开发者不用担心数据丢失，不用担心数据存在哪里。这就说明 ICP 和中心化的云平台是类似的，也有容灾备份等操作。

我们可以看一份 Dfinity 提供的节点服务器硬件要求。

![hardware](/img/dfinity/hardware.png)

我们可以看到节点服务器要求16条32GB的内存和3.2TB的 SSD。相比与以太坊验证节点4GB内存和290GB SSD([https://nimbus.guide/hardware.html](https://nimbus.guide/hardware.html))的配置要求来说算是比较夸张了。当然对于存储来说，更夸张的是 Filecoin，需要1TB内存和16TB SSD的配置([https://zhuanlan.zhihu.com/p/337597732](https://zhuanlan.zhihu.com/p/337597732))。

ICP 的计算和状态存储基本都是跑在内存上的(类似比如中心化云平台 SAP 的 HANA)，硬盘可能只是起到一个镜像存储的作用，因此对内存的要求比较高。这就类似游戏服务器和网页服务器的关系，游戏服务器（类似ICP上以及传统中心化应用）需要处理应用无数多的状态（聊天、装备、伤害、血量等）；网页服务器（类似以太坊上的应用）相比之下就比较无状态，可能更多的是每次去数据库读取不同的数据就可以。和 Filecoin 相比，ICP 并不是专注于存储，而是 Serverless，存储的数据可能就是常规的应用数据、应用状态以及应用代码本身，所以也不需要那么夸张的存储要求。

## 链上应用实现方法

---

链上应用的项目结构非常类似以太坊。

- 前端：Web 端 React 或 Vue 等框架，手机端 React Native 或 Flutter
- 后端：Motoko(Dfinity 开发的编程语言)或其他任何能打包编译成 WASM 的语言(比如 Rust)
- 数据结构: Canister(Dfinity 为此开发了类似 JSON 的接口描述语言 Candid)

### 1. Cancan (类似抖音的短视频平台)

源码网址：[https://github.com/dfinity/cancan](https://github.com/dfinity/cancan)

![dev](/img/dfinity/dev.jpg)

Cancan 类似 ICP 平台上的抖音。Cancan 的前端是用了 Web 端 React 框架，后端是用了 Dfinity 自研的 Motoko 语言。Motoko 的部分还用到了 Motoko Package Manager Vessel 这样的高级功能。除此之外也用到了系统的一些 API，包含了测试和持续集成，而且注释也写得非常详细。Cancan 可以说是在很少的代码量里实现了一个非常标准化的 ICP 全栈应用，值得 ICP 开发者学习。

整个应用的状态都是使用了 Canister 容器和 ICP 来取代服务器、CDN、数据库等。

- 前端：React 框架的资源都是在一个单独的 Canister 里([https://github.com/dfinity/cancan/tree/main/src/utils/canister](https://github.com/dfinity/cancan/tree/main/src/utils/canister))。
- 后端与数据库：视频数据和点赞等数据全部都在 Canister 定义了类型([https://github.com/dfinity/cancan/blob/main/backend/State.mo](https://github.com/dfinity/cancan/blob/main/backend/State.mo))。同时要应对百万用户级别的访问，Cancan 用了一个 Motoko 里的高级数据类型：分布式哈希表。由于是类似 Serverless 的架构，Cancan 不用像传统前后端交互一样运作，而是类似能直接在数据库上进行 get 和 post 方法(类似谷歌的 Firebase)。

总之，从 Cancan 的例子来看，当学会了 Motoko 并且熟练掌握这门语言以后，在 ICP 上的开发会无比高效而且完全不用担心最恼人的部署等问题。

### 2. Portal (直播平台)

项目网址：[https://ja7sy-daaaa-aaaai-qaguq-cai.raw.ic0.app](https://ja7sy-daaaa-aaaai-qaguq-cai.raw.ic0.app/)

Portal 是一个比较新的 ICP 上的边看边赚，边播边赚的直播平台，目前正在 Alpha test。Portal 的源码暂时找不到，但是可以看出来前端用的是 React 框架。经过和开发人员的交流，可以知道 Portal 的关键的用户或代币数据都是在 ICP 上，视频的流媒体等数据的存储和分发是用的 Livepeer 协议。

- 前端：React 框架，目前来看客户端比较简陋。
- 数据库：没那么复杂的数据都在 ICP 上，而最难处理的流媒体视频等数据不在 ICP 上，而是用的Livepeer。ICP 上的数据部分不再赘述。Livepeer 自称是一个基于以太坊的视频直播平台，本质上是一个分布式节点的视频流媒体解决方案提供商，只是经济系统基于以太坊。Portal 使用 Livepeer，就类似冷存储使用 Filecoin 平台，并不能体现出技术上特别大的创新。

总而言之，Portal 作为一个直播平台，最关键和难处理的视频分发以及存储都是选择用的 Livepeer，和 ICP 没有关系。Portal 与 ICP 的关系仅仅是部分简单的数据使用 ICP 存储以及修改。这实际上就是 Portal 抱 ICP 的大腿，在宣传其生态的同时，也能给自己打上这么一个 ICP 平台第一直播网站的标签。

## ICP 到底强在哪里？

---

### 用户角度

抽象的来说，ICP 已经足够“快”了，以至于用户都无法感知到它在后端是区块链。可以说 ICP 和其他云平台在使用上是感受不出区别的。在传统区块链，比如以太坊上部署智能合约的应用会让用户体验非常差，由于要各种确认交易支付手续费，以及网络确认的缓慢。但是在 ICP 上，由于其 POS + 随机数的共识协议，TPS 高，同时有数据结构的各种优化，可以支撑起流畅的用户体验。因此才有各种应用的 ICP 版，比如 LinkedUp、Distrikt。

### 开发者角度

- 读取数据：目前普遍是在250ms以下。这个速度基本上是人按下鼠标并放开的时间长短，人基本体验不出来。
- 写入数据： 因为需要达成共识，所以比读取需要更多时间。目前通常是 2-5 秒。 与 BTC 或 ETH 相比，这要快了无数数量级。 与中心化云平台相比，这可能看起来很慢，但实际上这个速度是还可以接受的。
- 目前Canister是单线程的，之后 Canister 如果升级成多线程，那读取和写入的速度也能大幅度提升。从开发应用的角度而言，这个速度不算快，但是对于做一个普通的WebApp绝对够用了。

### 区块链角度

ICP 的架构设计，类似云平台，有更多的节点意味着节点与用户之间的物理距离可能更短，网络会更快，可以做到“更多节点=更多子网=更大的网络容量=应用更高的性能”。具体的技术实现可以参考这篇详细的博客：[https://medium.com/dfinity/a-technical-overview-of-the-internet-computer-f57c62abc20f](https://medium.com/dfinity/a-technical-overview-of-the-internet-computer-f57c62abc20f)。

## ICP的缺点

---

[https://dfinity.org/roadmap/](https://dfinity.org/roadmap/)

### Canister 优化

目前，Canister 能给其他 Canister 发更新请求。如果有A、B、C三个 Canister，A要通过B去和C交互，那么就需要A发更新请求给B → B发更新请求给C → C接收请求。但是问题就是这样的响应时间大概需要4秒，对用户体验来说很慢。如果是跨不同子网的话就可能更慢。如果要是有10个 Canister 需要交互的话，那一个请求需要20秒就是很恐怖的。在 ICP 里有查询请求，性能是很快的，一次只需要200微秒，但是跨 Canister 的链式请求没有原生支持。所以为了避免未来跨应用间请求的性能问题， ICP 需要更新，提供原生的高性能 API。

还有一点就是目前 Canister 的执行是单线程的，虽然 Canister 中可以“打包”执行一些指令，但是如果支持多线程的话，也会大大改善性能。但是这些更新和生态中的其他部分息息相关，比如 ICP 所支持的 Rust SDK 也和 Rust 这门语言自己的生态发展息息相关，所以技术上或许需要多方努力才能改进完成。

### 自定义域名

目前在 ICP 上部署的 APP 的域名都是 Canister 的 id 在加上 ic0.app，比如[https://ja7sy-daaaa-aaaai-qaguq-cai.raw.ic0.app](https://ja7sy-daaaa-aaaai-qaguq-cai.raw.ic0.app/)。虽然开发者可以自行通过购买其他的域名来重定向到 Canister 的长域名，但是在使用过程中，那么长的域名还是会对用户体验有很大的影响。同时 Dfinity 论坛里的开发者以及他的客户也对这个问题很有意见，认为是开发过程中的巨大阻碍。这或许是很小的一点缺陷，但是也能展现出 Dfinity 还需要努力完善这些细节。除此之外，在与Dfinity的开发者交流之后得知，在ICP上创建账户会有两个账号，这对于区块链应用使用者来说是很反直觉的，所以应用开发者通常会单独再创建一个账号。这也是Dfinity在用户体验上能提高的地方。

### 没有杀手级应用

[https://github.com/dfinity/awesome-dfinity](https://github.com/dfinity/awesome-dfinity)

从 Dfinity 的官方生态 Repo 中可以看出 Dfinity 的生态还是不那么繁荣的，没有一个耳熟能详的杀手级应用。虽然 ICP 的技术很强，但是就是没有爆款产品出现在这个平台上，这样可能就会形成恶性循环，导致生态越来越差。生态的不完善实际上也和一些标准还未推进有关系，比如下一点提到的代币标准。

### 代币标准

ICP 目前是没有同质化代币以及非同质化代币标准的，这是一件很可怕的事情。作为一个区块链的公链，链上应用最吸引人的就是其代币的经济系统，而 ICP 却还没有标准化的提案。对一个开发者来说，没有标准化的提案就意味着开发者的应用可能会在未来，因为不满足标准化而被生态所抛弃。所以这也导致了大多开发者还在观望，可能宁愿在波场做一个应用，拥抱波场生态，也不愿意在 ICP 做。

## 总结

---

Dfinity 的 ICP 是一个高性能，有着云平台 Serverless 定位的区块链网络。通过优秀的共识算法与架构设计，以及经过各种优化后打磨出的自研编程语言，ICP 能保证网络上应用的安全性和高性能。尽管在应用生态和标准制定上，ICP 还略有仍需建设，但目前 ICP 已经是一个成熟的专注于 Serverless 功能的区块链网络，能帮助 DApp 开发者更快地搭建更高性能的应用。

相关资料与引用

- [https://medium.com/dfinity/a-technical-overview-of-the-internet-computer-f57c62abc20f](https://medium.com/dfinity/a-technical-overview-of-the-internet-computer-f57c62abc20f)
- [https://www.chainnews.com/articles/465260109330.htm](https://www.chainnews.com/articles/465260109330.htm)
- [https://forum.dfinity.org/t/how-does-the-storage-mechanism-in-dfinity-works/2733](https://forum.dfinity.org/t/how-does-the-storage-mechanism-in-dfinity-works/2733)
- [https://medium.com/dfinity/software-canisters-an-evolution-of-smart-contracts-internet-computer-f1f92f1bfffb](https://medium.com/dfinity/software-canisters-an-evolution-of-smart-contracts-internet-computer-f1f92f1bfffb)
- [https://support.internetcomputer.org/hc/en-us/articles/4402245887764-What-are-the-Hardware-Requirements-to-be-a-Node-Provider-](https://support.internetcomputer.org/hc/en-us/articles/4402245887764-What-are-the-Hardware-Requirements-to-be-a-Node-Provider-)
- [https://forum.dfinity.org/t/few-general-noob-questions-about-the-internet-computer/1938/3](https://forum.dfinity.org/t/few-general-noob-questions-about-the-internet-computer/1938/3)
- [https://www.chainnews.com/zh-hant/articles/626831391302.htm](https://www.chainnews.com/zh-hant/articles/626831391302.htm)
- [https://www.zhihu.com/question/275674226](https://www.zhihu.com/question/275674226)
- [https://medium.com/dfinity/cancan-the-internet-computers-decentralized-tiktok-is-now-open-source-5eed04547aa1](https://medium.com/dfinity/cancan-the-internet-computers-decentralized-tiktok-is-now-open-source-5eed04547aa1)
- [https://www.reddit.com/r/dfinity/comments/mum43f/how_fast_is_dfinity_exatcly/](https://www.reddit.com/r/dfinity/comments/mum43f/how_fast_is_dfinity_exatcly/)
- [https://forum.dfinity.org/t/custom-domains-for-ic0-app-community-consideration/6162/18](https://forum.dfinity.org/t/custom-domains-for-ic0-app-community-consideration/6162/18)
- [https://forum.dfinity.org/t/inter-canister-query-calls-community-consideration/6754](https://forum.dfinity.org/t/inter-canister-query-calls-community-consideration/6754)
- [https://academy.ivanontech.com/blog/breaking-down-eth-2-0-ewasm-and-evm-explained](https://academy.ivanontech.com/blog/breaking-down-eth-2-0-ewasm-and-evm-explained)
# 读懂Feed: 回到过去的 Web3 🥄

## 前言

在Web3时代，用户的数据具有公开开源的特点，开发者可以免费并且快捷地去区块链这样一个公共数据库中拿取用户所拥有的NFT、足迹、DAO成员等公开数据。

Web2的社交媒体，比如Twitter，也在积极拥抱Web3的NFT艺术品的新型交互和社交方式。而在区块链交易费居高不下，智能合约运行环境较局限的背景下，我们在现阶段的以太坊或其他链上很难拥有一个完整的去中心化的社交应用。

OpenSea所提供的只有NFT展示的个人空间，Twitter提供的只有Web2推文的个人空间，Mirror提供的只有文章的展示，甚至没有原生的订阅功能。正因如此，开发者便从Feed流入手，创造了Web3内容的聚合器，将各个平台聚合到一处，将二次交互带入到区块链中，逐渐探索去中心化社交的可能性。

我们的文章中会主要介绍以下几个Web3 Feed项目：RSS3、CyberConnect、Project Galaxy、Showme。

## 疑问

对于各个项目我们可以提出以下几个疑问：
1. 项目是否足够Web3（去中心化、开源、开放数据）？
2. 项目的现有生态和进展？
3. 项目是否能满足用户的社交需求？

## RSS3

> "The feed of Web3"

[白皮书](https://rss3.io/RSS3-Whitepaper.pdf)

在介绍RSS3之前，我们需要先了解一下RSS。

### RSS

RSS是一种信息聚合协议，统一了信息的发布和内容同步格式。用户可以通过订阅网站的RSS源来接收以时间线排序的内容更新，从而聚合所有网站的内容。

RSS的特征是开放和中立。在Web2时代，RSS随着中心化平台的产生而逐渐对普通用户失去了吸引力。一个中心化的平台在用户数据的“圈地运动”中开始作恶，导致侵犯隐私、算法滥用和数据垄断等问题。

### RSS3简介

RSS3是一个底层的索引和聚合协议，在RSS的基础上将Web2和Web3的内容都聚合到了一起。RSS3标准可以实现高效和中心化的内容分发。同时RSS3标准能在用户自己的控制下，拥有冗余和容错能力。

RSS3与Facebook等传统社交媒体的区别在于，它把用户的Feed掌控权还给了用户。用户可以决定自己所接收的内容的自主权，而不是被推荐系统所“洗脑”。

RSS3的团队成员都对去中心化有很强的信念，在很多成员的博客中都对此有很深刻的见解。除此之外，著名开源项目RSSHub的开发者DIYgod也在RSS3的团队中，为RSS3所采用的索引和聚合技术提供了强有力的背书。

### RSS3产品

- rss3.bio

rss3.bio（原pass3.me）是RSS3的首个应用产品。rss3.bio类似Web3时代的QQ空间，能展示一个用户的所有链上足迹，包括NFT记录，Gitcoin捐赠记录，和Twitter以及Mirror的发表记录。用户可以通过$PASS代币来获取自己的RNS，创建如leeduckgo.rss3.bio的个性化的域名。

rss3.bio是一个非常小而精的Web3个人名片，可以在一个页面下展示用户对Web3的参与度。rss3.bio的功能较为简单，目前只能做到按域名来分享名片以及关注的功能。

- revery.so

revery.so是在rss3.bio基础上功能更加完整的应用。revery.so提供了完整的RSS3信息聚合功能，每个用户都可以将rss3.bio的社交关系带到revery.so当中，获得属于自己的Feed流。

### RSS3技术实现

RSS3的技术实现包括了协议的实现以及使用协议所实现的应用的实现。

- RSS3协议技术实现

[RSS3协议](https://github.com/NaturalSelectionLabs/RSS3)为每个地址定义了接口和数据结构，将地址的个人信息以及所拥有的NFT资产等链上数据进行了索引，方便在网络架构中进行快速地数据获取和接口适配。

其中，每个地址都会拥有如id，profile头像，个人链接等属性。

- RSS3网络架构

基于每个地址独立的RSS3文件，整个数据网络将每个地址的RSS3文件解析，并整理出关系网络，最后索引称加密或非加密的账户，将这些数据存储在一个区块链网络上。RSS3的区块链网络由DAO以及分布的节点来监督。

用户与应用交互，并从RSS3的网络中接收Feed流，应用则会和RSS3网络直接交互，将需要更新的用户数据提交到网络中。

- rss3.bio和revery.so技术实现

rss3.bio和revery.so源码均在RSS3开发组的GitHub账号中，均是采用了TypeScript语言以及Vue或NextJS框架的前端应用。应用结构并不复杂，简而言之就是主要包括了拿数据和做样式的两部分。

由于RSS3协议已经将数据很规整地整理出来了，因此通过这一套同样的数据，前端应用可以快速构建Web3的社交应用。我们可以通过类似的如下function来非常简便快捷地拿到RSS3网络上的用户数据：

```ts
async function getRecommendGroupMembers(type: string) {
    try {
        const res: RecommendationUsersResponse = (
            await axios.get('/recommendation/list', {
                baseURL: config.recommendations.endpoint,
                params: {
                    type,
                    limit: config.recommendations.userLimit,
                },
            })
        ).data;
        return <RSS3Index[]>res.response.filter((member) => member !== null); // What's wrong with you dude?
    } catch (e) {
        console.log(e);
    }
    return [];
}
```

然后在拿到数据后，在页面组件中渲染出来即可：

```ts
    const getRecommendationGroups = async (type: string) => {
        setIsLoadingRecommendGroupMembers(true);
        const recommendGroupMemberIndexes = await RSS3.getRecommendGroupMembers(type);
...
```

在开放和中立的RSS3协议的规定下，开发社交应用非常方便。

### 疑问解答

1. 项目是否足够Web3（去中心化、开源、开放数据）？

RSS本身就是一套非常中立和开放的协议，但在快餐式的网络文化下，RSS的生存空间越来越小。RSS3的出现让RSS在Web3时代得到了加强和重生。RSS3作为一套开放和统一的协议，能非常好地帮助应用去获得统一的数据，会和以太坊的ERC标准一样促进整个生态的发展。

对于RSS3的去中心化属性，个人认为团队的理念与区块链网络的架构都非常好。但是对于区块链网络的DAO架构以及节点，我没有查阅到具体的信息。如果这些信息也能公布出来，那么会达到真正的去中心化网络特性。

对于开源，RSS3的成员本身就是GitHub上的活跃贡献者，并且几乎所有的项目都开源可供开发者学习和查看，这是非常有Web3基因的一件事。

对于开放数据，目前我没有查阅到开发者文档和可使用的开放接口。我觉得一个更好的方法是先将数据开放出去供开发者去使用和构建应用，而不是将数据通过自用的方式来先行构造应用。当然在未来当RSS3自行研发的采用其协议的项目在Web3中立足后，RSS3肯定会把数据公开出去，这是非常好的一件事。

2. 项目的现有生态和进展？

目前RSS3协议的GitHub repo有1k star。2021年9月上线的Web3Pass目前有35000个个人主页。在2022年1月份，RSS3的正式白皮书发布。

3. 项目是否能满足用户的社交需求？

从目前来看，RSS3所做的RSS3Bio非常接近一个完整的链上名片或链上简历。目前有很多Web3公司或组织接收RSS3Bio作为简历的投递，这些链上数据公开透明，并且都集中聚合到了一起，可以方便组织对成员的选拔。

Revery.so是一个非常优秀简洁的加强版Feed流阅读器，可以同时阅读Web2和Web3的内容。但美中不足的是Revery上的交互还是太局限了，目前只能进行订阅和取消订阅，没有别的功能。

在一个健全的社交应用中，除了内容的输入之外，我们还是需要进行内容的对外输出的，因此这些交互还是必需的。

## CyberConnect

> "Connect everyone on Web3"

### CyberConnect简介

CyberConnect也是一个内容聚合和索引协议。CyberConnect的使命是为Web3构建社交的关系图基础设施，将社交数据的所有权返还给用户，同时为所有Web3开发人员提供集成和构建的基础设施。

CyberConnect所强调的不止是将链上数据聚合到一起，更重要的是将Web3社交的关系通过去中心化存储的方式，赋予给用户。这就如同用户地址所拥有的链上交互记录一样，用户可以带着这些自己所拥有的数据随意穿梭在Web3世界中。例如：在Twitter中所拥有的粉丝和关注可以直接带到CyberConnect的应用中，在CyberConnect中所拥有的交互可以带到其他的社交应用中。

CyberConnect认为Web3将会是由开发者主导的，因此他们所做的主要是将去中心化的社交关系所聚合与索引，最后交给不同的项目来呈现在前端。

### Cyberconnect产品

- cyberconnect.me

Cyberconnect.me与RSS3的两款产品类似，均为链上数据的聚合以及社交关系的展现。

Cyberconnect.me通过推荐引擎来更好地进行了用户潜在交互的推荐，更符合大部分用户的使用习惯。同时它也提供了对用户主页的评论功能，让二次交互真正体现在Web3 Feed产品中。

- CyberChat

CyberChat是一个基于CyberConnect的好友关系的实时通信应用，目前还在开发当中。

### CyberConnect技术实现

- CyberConnect Indexer

此项目的开源代码在[此仓库](https://github.com/cyberconnecthq/indexer)。Indexer中将从各个社交网络中聚合和索引数据的方法开源了出来。我们可以通过各个不同平台的合约地址和API来获取我们所需的数据：

```js
const (
	SuperrareContractAddress  = "0x41a322b28d0ff354040e2cbc676f0320d8c8850d"
	OpenSeaContractAddress    = "0x495f947276749ce646f68ac8c248420045cb7b5e"
	RaribleContractAddress    = "0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
	FoundationContractAddress = "0x3b3ee1931dc30c1957379fac9aba94d1c48a5405"
	ZoraContractAddress       = "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7"
	ContextContractAddress    = "ctx"
)

const (
	ContextUrl          = "https://context.app/api/profile/%s"
	SuperrareUrl        = "https://superrare.com/api/v2/user?address=%s"
	RaribleFollowingUrl = "https://api-mainnet.rarible.com/marketplace/api/v4/followings?owner=%s"
	RaribleFollowerUrl  = "https://api-mainnet.rarible.com/marketplace/api/v4/followers?user=%s"
)
```

```js
func sendRequest(client *http.Client, args RequestArgs) ([]byte, error) {
	var req *http.Request
	var err error

	switch args.method {
	case "GET":
		req, err = http.NewRequest(args.method, args.url, nil)
		if err != nil {
			return nil, err
		}
		for k, v := range args.header {
			req.Header.Add(k, v)
		}
		query := req.URL.Query()
		for k, v := range args.params {
			query.Add(k, v)
		}
		req.URL.RawQuery = query.Encode()
...
```

这样的方法相比RSS3来说更加客制化，更加灵活，但并没有RSS3那么开箱即用，可能需要开发者手动部署和调试。

- CyberConnect开发库

CyberConnect的npm库的源码在[这个仓库](https://github.com/cyberconnecthq/js-cyberconnect). 这个库提供了CyberConnect类，包括了DID和交互社交图数据的功能，将复杂的认证逻辑封装成易于使用的函数。开发者可以通过使用这个库来进行社交软件的开发。

### 疑问解答

1. 项目是否足够Web3（去中心化、开源、开放数据）？

CyberConnect更多是面向开发者的一个项目，相比于RSS3，它更快地开放出了可供开发者使用去连接ceramic网络的接口。

对于去中心化，CyberConnect所使用的Ceramic是一个去中心化的网络，采用了IPFS做存储。

对于开源，CyberConnect的项目的第三方库和indexer是开源的，其余的客户端代码并没有开源。

对于开放数据，CyberConnect开放了自己的数据，可供开发者使用。

2. 项目的现有生态和进展？

目前CyberConnect的客户端有38w用户，粉丝最多的账号有1w多粉丝。

3. 项目是否能满足用户的社交需求？

CyberConnect的产品相比RSS3的来说，多了推荐用户和评论用户的功能。推荐用户的功能是在RSS3随机推荐的基础上，通过对社交网络图的关系分析来进一步得出的。评论用户的功能是CyberConnect产品上唯一的对外输出环境，但是也给了用户一些窗口，去发布内容。但是光有这个，我觉得还是无法满足社交需求的。但是CyberConnect明确表示现在在做好友实时聊天的功能，我觉得这是一个非常好的方向。

## Project Galaxy

> "Build better communities in Web3"

Project Galaxy是NFT-as-a-service的基础架构平台，允许任何人使用自定义的链上数据随意创建、分发或者将NFT游戏化，开发人员可以创建客制化的忠诚度计划，而个人可以发行和认领 NFT。

Project Galaxy与OpenSea类似，聚合了各个系列的NFT，具有NFT展示以及关注用户等的功能。除此之外还包括了AMA等活动的聚合页面，能让人更加直观和方便地去关注各个生态社区的动向和进度。

## Showme

> "A subscription NFT social network built on Web3"

Showme提供了NFT等社区的订阅关注，让用户能够更加紧密地去参与和了解到社区的最新动向。每当用户订阅一个新的社区后，就会Mint一个新的NFT，作为链上凭证。同时不同链上的社区凭证和社区本身是独立分开的。

Showme的链上足迹索引采用了RSS3所提供的协议来进行抓取。

## RSS3、CyberConnect、Project Galaxy、Showme对比

RSS3与CyberConnect均是通过抓取链上与链下数据的协议，来做到打通Web3各个区块链网络数据的孤岛。它们所形成的社交数据网络完全属于用户，并且采用去中心化的存储，可以为不同项目所用。

RSS3的数据网络目前在测试开发当中，仅RSS3自己可用；CyberConnect更加面向开发者，拥有可用的开发工具来供开发者构建自己的Web3社交应用。

CyberConnect相较于RSS3进度较快，更加偏Web2社交，拥有个人主页点赞以及即将拥有实时聊天功能。

它们的区别还有就是RSS3的主要组成部分是RSS，这就意味着RSS3与推荐系统有着天然的矛盾，并且revery.so上的推荐关注列表也是随机生成的；Cyberconnect则更加灵活，采用了推荐系统，来更好的捕捉用户可能的喜好以及预计用户下一步的操作。

NFT是Web3时代社交的重要组成部分，Project Galaxy与Showme相对应地更加着重于NFT社群的培养，其中Project Galaxy与Cyberconnect合作紧密，Showme与RSS3合作紧密。Project Galaxy着重于服务项目的AMA等社群活动，而Showme着重于服务社群自发的一些交流和公告。

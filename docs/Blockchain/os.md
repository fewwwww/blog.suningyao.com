---
sidebar_label: 'WeLightOS开发的心路历程❤️'
sidebar_position: 2
---

# WeLightBlockchainOS开发的心路历程(as a tech lead)❤️

我在很多篇博客和朋友圈里都提到了[WeLightBlockchainOS](https://github.com/WeLightProject/WeLightBlockchainOS). 这个由我主导开发的项目, 目前我们组队代表上贸大—湖工程微芒区块链小队在参加电标院组织的[第五届中国区块链开发大赛](http://www.cbdforum.cn/bcweb/contest-mat.html), 已经获得了[华北赛区的奖项](https://mp.weixin.qq.com/s/ToNyplwYGREn6w0VJI8fUA), 之后或许能获得全国性奖项. 这里就稍微聊一下比赛的心路历程.

## 链接

---

- Demo: [os.doge.university](http://os.doge.university)

- Repo: [WeLightProject/WeLightBlockchainOS](https://github.com/WeLightProject/WeLightBlockchainOS)

- Doc: [下载pdf](https://github.com/fewwwww/blog.suningyao.com/raw/master/static/os-doc.pdf)

- PPT: [下载pdf](https://github.com/fewwwww/blog.suningyao.com/raw/master/static/os-ppt.pdf)

![os-empty](/img/os/os-empty.png)

![os-full](/img/os/os-full.png)

## 构思阶段

---

大约7月底, [大狗老师](https://github.com/leeduckgo) 提出了一个概念, 虚拟多链支持的区块链开发OS. 当时我看到的时候还在银联实习, 当时下班眼睛都花了, 但是在车上看到这个想法还是有点激动的. 之前就看到有人用Web端做长得像Win95或者MacOS一样的WebApp, 感觉特别有意思. 我就把其他类似的项目发了出来. 这个东西我第一次见的时候就很想做, 但是只能想到做做博客, 所以没投入时间去研究. 大狗老师的想象力确实是丰富, 我看到这个项目只能想到是很酷的博客, 而他却能心系下一代区块链开发的基础建设.

![1](/img/os/1.png)

时间到了8月份, 大狗老师突然在群里问我是不是前端大佬. 我当然不是啊! 但是已经被拉了进群, 参与了这个项目. 这里就整体介绍一下项目吧, 项目是一个WebApp, 用了海量窗口样式的iframe作为子应用, 来做到在一个页面内操作多个ide, 终端, Web页面的功能, 解决了区块链开发工具链复杂与开发合作困难的问题.

![2](/img/os/2.png)

接下去就是选原型的讨论过程了. 我们需要选一个项目, 以它为基础开始开发, 这样就能避免重复造轮子, 尽快专注到区块链相关工具的适配上. 我看到类似的项目挺多, 有[MacOS的](https://github.com/Renovamen/playground-macos), [Ubuntu的](https://github.com/vivek9patel/vivek9patel.github.io), [Win95的](https://github.com/AshKyd/ui95). 我们看了源码以及设计风格以后还是选择了[Ubuntu的那个项目](https://github.com/vivek9patel/vivek9patel.github.io). 事后证明是个非常正确的选择. 中间还有一个小插曲, 就是我们联系了做MacOS项目的那个大佬, 想拉他入伙, 但是他刚来美国读研, 所以实在没时间, 同时专注的是算法领域, 所以我们选择了更加灵活的Ubuntu的那个项目.

![3](/img/os/3.png)

![4](/img/os/4.png)

## 开发阶段

---

1. 熟悉项目

    刚开始拿到这个项目的时候, 感觉还是很虚的. 因为从来没接触这么大的项目, 但是npm i, npm start二连之后还是熟悉了. 项目是用的React和TailwindCSS, 完全纯前端, 缓存是通过react-ga这个库来存到localStorage里的. TailwindCSS简单啊, React也简单啊, 但是就是用的Class Component, 这个很难受. 我当时在银联, 花了一天时间重构到Functional Component, 但是完全大失败. 所以把能改的改了, 不能改的复杂组件就留着不动.

    接到的第一个issue就是把原repo作者的个人信息去掉. 这个简单啊! 这个我在做我[自己的portfolio](https://suningyao.com)的时候就已经熟练了. 当时各种全局字符串搜索, 把原来的[印度大佬的portfolio](https://github.com/dhruvkb/portfolio)改成了我的. 非常感谢他当时允许我用他的项目. 言归正传, 我之后就又是在银联花了一天(对不起)去改各种链接和原repo的链接.

    第二个issue就是把iframe里面的链接全部弄一个配置文件单独拎出来. 于是我在银联(...对不起)尝试了很久, 想在根目录搞一个config文件, 但是这样的话需要把这个文件作为一个库, npm install进去(因为src外的文件webpack之类的东西不会打包📦). 但考虑到后续开发者开发不方便(其实我懒), 所以还是在src里面弄了个config. 自此之后就确立了子应用的修改和添加(详细内容可以看Repo的README). 之后队友第一次接触的时候也说挺方便的, 成就感满满.

2. 修修改改

    首先哈, 我给原作者的Repo也贡献了不少[issue](https://github.com/vivek9patel/vivek9patel.github.io/pull/67)和[pr](https://github.com/vivek9patel/vivek9patel.github.io/pull/64). 这都是开发过程中踩到的坑, 我也不想回忆(懒得去截图和在这里写注释).

    第三个issue做的就是加入网易云音乐等子应用. 网易云真的很坑, 17年开始就有人说它的iframe播放器有问题, 21年了还是有问题. 网页版的大iframe点击不了, 不能放歌; 播放器版的iframe能放, 但是貌似就只能放电台的了. 于是我就找了嘉然的电台歌单, 让它背景是网页版的大iframe, 右下角是一个播放器版iframe. 这期间我记得我还修了不少窗口的bug. 之后就是轻轻松松按照改config, 加组件的流程加入了eth-build, 抖音, remix等应用.

    第四个issue, 大的来了, 这个issue是我自己提的, 要做一个窗口放大缩小的功能. 唉, 说不动了, 看[这篇](https://blog.suningyao.com/docs/Frontend/draggable)就行了. 还有就是在VSCode子应用上反复横跳了好久才决定用webContainer的方案. 反正是学到了, 写代码之前一定要规划好逻辑, 想清楚算法, 不然真的会浪费很多无谓的时间.

    第五个issue, [加个GitHub和MetaMask登录](https://blog.suningyao.com/docs/Frontend/auth), 看这个就可以啦.

    第六个没解决的issue, 给窗口加个好一点的拖拽功能, 现在的实在太卡了. 这个可能会这学期问下Web Dev的老师, 她的官网上有可拖动的组件.

3. 学到了很多

    这个项目算是我自己主导的第一个前端大项目, 学到了很多. 学到了GitHub团队的工作流, Webpack的配置, React的各种操作, 熟练了React的部署和域名配置... 除了技术上, 我也学到了如何去和团队沟通, 搞清楚需求以及ddl, 算是不留遗憾的圆满完成✅!

## 比赛阶段

---

我们10月10号之前出了个比赛文档, 链接在最上面, 初稿是我写的, 其中精美的架构图和功能图都是大狗老师做的, 其他的团队同学也特别给力, 把我砖一般的初稿搞得抛砖引玉, 写的精美绝伦.

之后就是得到了信息拿了华北赛区的决赛资格, 之后的团队同学会带着PPT去一趟北京参赛, 辛苦他们了, 希望他们多多拍照, 让我好发朋友圈.

## 获奖留念

---

### 华东赛区一等奖

> 很遗憾人在美国, 没能去线下比赛😭.

![1](/img/os/regional1.JPG)
![2](/img/os/regional2.JPG)
![3](/img/os/regional3.JPG)


## 总结

---

- 感谢共同战斗的大狗老师、会枫、宁波、杨博!

- 写代码的能力其实没有天马行空的想法重要

- 多多关注机会, 多多参与开源, 多多结识厉害的大佬, 多多比赛

- 华北赛区决赛顺利! 全国决赛顺利!

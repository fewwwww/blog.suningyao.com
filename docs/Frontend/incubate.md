---
sidebar_label: '对投后项目的改 Bug 等服务 💁‍♂️'
sidebar_position: 1
---
# 对投后项目的改 Bug 等服务 💁‍♂️

> 这篇文档里主要记录了在 Foresight Ventures 期间对投后项目的一些 PR. 主要也是自己对投后的项目的一些兴趣, 很喜欢去上手玩他们的项目, 同时改 Bug 也能收点外快.

## GitHub PR

### 1. decentdotland/weave-aggregator

[#3 修复 import 路径错误](https://github.com/decentldotland/weave-aggregator/pull/3), [#4 添加对 React 专门的文档提示](https://github.com/decentldotland/weave-aggregator/pull/4)

这两个都是在使用这个库的时候遇到的问题. 第一个估计就是纯粹写错了. 第二个估计是 webpack 的问题, 会显示 xxx.WEBPACK XXX.xxx is not a function. 挺奇怪的, 最后寻思了半天用的时候加一个 default 单词就行了. 之后再琢磨一下, 没搞懂原理. Node 环境里可以, React 使用就不行了, 和 CRA 的脚手架可能也有问题. Webpack 坑真是多啊...

### 2. Permaweb DAO/permacast

[#29 尝试修复主页布局和过滤非正方形图片上传](https://github.com/Parallel-news/permacast/pull/29), [#34 修复主页布局](https://github.com/Parallel-news/permacast/pull/34), [#35 添加提交图片前禁止用户上传非正方形图片](https://github.com/Parallel-news/permacast/pull/35)

这几个 PR 都是为了领 permacast 在推特上发的 [bounty](https://twitter.com/permacastapp/status/1488931263079714823). permacast 的需求很简单, 一个是把主页搞得整齐一点, 另一个是禁止非正方形封面的上传. 两个其实都是为了主页整齐一点.

一开始我看到它主页的时候, 我还以为是故意的, 就那种瀑布流布局. 结果仔细一看, 原来是 React Bootstrap 的组件用的不好, 卡片是竖着排得. 加上文字的字数是没有限制的, 就导致了主页变成了这样.

![](/img/incubate/permacast-before.png)

我不想动原来的样式代码. 所以我一开始的改法是去直接规定定死一个大小, 但是这样的做法让单独的页面也被定死了, 而且响应式方面不行. 所以我就用了比较麻烦的办法, 弄了一个下午. 代码量比较多, 就不放了.

总体的思路是: 先是通过 useRef 拿到组件隐身 (display: none 和 opacity: 0 应该变不回来) 渲染后的高度, 然后通过 componentDidUpdate 获取渲染后的每个子组件传过来的高度, 接着判断是否收集全了, 最后把组件的隐身取消掉, 都渲染成组件中最高的那个的高度. 总之效果就很好. 有个小坑就是在单独的卡片页面里可能会抛错误, 所以我们需要在传到子组件的函数在子组件的回调里面加一个判断, 判断拿到了这个传来的函数再去操作.

![](/img/incubate/permacast-after.png)

这个出成面试题感觉很好, 涉及到 useRef, opacity display visibility 的区别, react 的生命周期, class 和 component 组件的区别...

还有就是禁止正方形页面封面上传的问题. 这个没啥, 稍微谷歌了下, 把组件扔上主页测试几下就行, 长宽不相等就直接 sweetalert2. 但是不知道为啥时不时抛错误. 更新了下, 加了个 if, 但是 permacast 的人还没 review. 下面是代码. 大家看下就好.

```js
// ...
export default function UploadShow()  {
    // ...
    const podcastCoverRef = useRef()

    const resetPodcastCover = () => {
        podcastCoverRef.current.value = ""
        Swal.fire({
        text: 'Podcast cover image is not squared (1:1 aspect ratio)!',
        icon: 'warning',
        confirmButtonText: 'Continue'
        })
    }

    const isPodcastCoverSquared = (event) => {
        if (event.target.files.length !== 0) {
        const podcastCoverImage = new Image()
        podcastCoverImage.src = window.URL.createObjectURL(event.target.files[0])
        podcastCoverImage.onload = () => {
            if (podcastCoverImage.width !== podcastCoverImage.height) {
            resetPodcastCover()
            }
        }
        }
    }

    return (
        <>
            // ...
            <Form.Control
                required type="file"
                ref={podcastCoverRef}
                onChange={ e => isPodcastCoverSquared(e) }
                name="podcastCover"
            />
            // ...
        </>
    )
}
```

### 3. neonlabsorg/

[#140 修正挂了的链接](https://github.com/neonlabsorg/neon-evm.docs/pull/140)

在做 Neon Labs 的 DD 的时候, 发现文档的链接很多都挂了. 看了下发现应该是 base url 从 neonlabs 改成 neon-labs 了, 但是文档里用了绝对路径, 没改. 所以手动改了下链接, 依旧用了绝对路径, 但是应该是最好用相对路径就不怕 url 变了.

```
- https://doc.neonlabs.org/docs/glossary#remix
+ https://doc.neon-labs.org/docs/glossary#remix
```

## 文档翻译

### 1. everFinance/medium

[How to Build Your Own SCP App: Decentralized News Media 中翻英](https://medium.com/everfinance/how-to-build-your-own-scp-app-domain-oriented-pos-design-token-dao-2cd57cf25e5a)

### 2. everFinance/medium

[How to Build Your Own SCP App: Domain-oriented PoS Design — Token DAO 中翻英](https://medium.com/everfinance/how-to-build-your-own-scp-app-decentralized-news-media-45da1127c5fe)

上面这两篇文章都是在 2022 年寒假期间在弗吉尼亚奶奶家翻译的. 当时每天都中午才起, 晚上发奋工作. 两篇文章让我有机会抢先阅读 everFinance 的先进设计, 学到不少. 挣了一点 AR 哈哈.

## 社群运营

### 1. ardrive/discord

[Ardrive Discord 中文频道管理](/img/incubate/ardrive.png)

之前一直在积极参加 Ardrive 的 [Public Drive Bounty](https://ardrive.io/pdb/). 后面就专门联系我让我做中文频道社群了, 还分配了个粉色 name tag, 很酷. Ardrive 和 AR I/O 团队很牛逼.
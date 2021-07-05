---
sidebar_label: 'Vue项目首屏打开速度的优化⚡️'
sidebar_position: 2
---

# Vue项目首屏打开速度的优化

## 项目的情况

我最近几个月一直在参与[VioLegacy](https://violegacy.org/)网站的建设. 前端的技术栈是`Vue`. 说实话一开始参与的时候我是懵的, 因为没怎么用过`Vue`, 平常大多是用`React`,
后来我边看边学边写, 同时把样式的部分所有的活都揽下来了, 这才到现在一直显得很会写`Vue`. 

这几周大家一直在搞SEO的事情, 我加了几个`<meta>`标签, 把SEO的评分算是完全拉满了.

但是一跑`Lighthouse`发现, SEO比较差的缘故很可能主要是首页打开的性能问题...

![before optimize](/img/vue-performance/1.png)

原本以为会很低, 没想到会这么低. 这么低的原因有两个点:

- 我们首页有十几张团队成员的照片

- 我们所用的Vue框架, 是需要加载JS然后注入到HTML里的

## 图片加载导致的性能问题

网站的底部有每个团队成员的照片, 代码结构类似这样:

```
<div class="team-member">
  <img
    class="round-image"
    src="@/images/VL-XXXXX.jpg"
    alt="VL-Edward.jpg"
    loading="lazy"
  />
  <h4>XXXX XXX XXX</h4>
  <p>XXX XXXXX, 2020</p>
  <p>University of XXX, 2021</p>
  </div>
```

像这样的部分还有十几个, 而且由于都是自发上传的照片, 有些相机拍摄的照片特别大. 这绝对是一个网站加载时的大隐患.

### 懒加载Lazy Loading

在`img`标签内, 加上`loading="lazy"`, 这样可以让图片只有在视窗内的时候才加载.

这样能够减少不需要的加载时间.

但是由于我们的代码中, 已经将图片进行了分批展示, 所以优化效果不明显

### 图片大小压缩

之前提到一些相机拍摄的照片很大, 所以我直接想到了用[tinypng](https://tinypng.com)来压缩图片的大小.

> png是无损的图片格式, 可以无损压缩; jpg是有损的, 压缩时可能会受到一些小破坏. 同时也可以手动修改图片尺寸来减少图片大小.

直接把十几张图片拖进去压缩后下载替换即可. 这一步让我们网站的图片总大小减少了50%. 但是还是优化不明显.

## JS加载导致的性能问题

经过图片资源大小的优化, 我们发现好像并没有什么用. 大头依然是JS的加载.

### Prerender?

`Vue`的团队成员做过一个[预先渲染的插件](https://github.com/chrisvfritz/prerender-spa-plugin). 这个插件配置很方便, 可以预先渲染一些文件, 然后提高加载速度.

`Prerender`与`SSR`不同. 
1. - `SSR`是用户进入网址后, 把JS先送到服务器渲染完HTML再给客户端; 
  
   - `Prerender`是构建时通过一个无头浏览器去渲染出HTML. 
2. - `SSR`会增加服务器的压力, 配置麻烦; 
  
   - `Prerender`会很大拖慢构建的速度, 就连渲染一个网址也需要十秒左右的时间.

由于我们的需求只是渲染首页, 所以我选择了`Prerender`.

经过简单的配置, 生成了一个充满内容的HTML文件, 但是一运行, 怎么还是需要加载那么多JS. 于是我看了下生成的文件, 发现里面数据都是缺失的, 而且样式也是.
问题大了. 

因为`Prerender`还有一个问题是不怎么适用于动态数据很多的页面... 如果想要把动态数据也带上, 需要给根组件设置一个定时器, 让它把数据拿完再渲染.
那么可能就意味着, 开发时每次构建都得额外等个5秒等数据, 这就有点得不偿失了, 甚至还不如咬咬牙上`SSR`.

### Code Splitting

之后我搜索了一些优化相关的内容, 发现可以通过修改`router`来做到组件的按需加载. 

我清晰地记得之前有看到过我们的`router`, 因为它是长这样的.

```
import Official from '../views/Official.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import StudentSignUp from '../views/SignUp/StudentSignUp.vue'
import AlumniSignUp from '../views/SignUp/AlumniSignUp.vue'
import Verification from '../views/Verification.vue'
import Main from '../views/Main.vue'
import Home from '../views/Main/Home.vue'
import MyWishesDetail from '../views/Main/MyWishesDetail.vue'
import WishList from '../views/Main/WishList.vue'
import WishListSenior from '../views/Main/WishListSenior.vue'
import WishCompany from '../views/Main/WishCompany.vue'
import Opportunities from '../views/Main/Opportunities.vue'
import Messages from '../views/Main/Messages.vue'
import OppDetail from '../views/Main/OppDetail.vue'
import FAQ from '../views/Main/FAQ.vue'
import AccountSettings from '../views/Main/AccountSettings.vue'
import Dashboard from '../views/Main/Dashboard.vue'
import PostOppDetail from '../views/Main/PostOppDetail.vue'
import PostNewOpp from '../views/Main/PostNewOpp.vue'
import EditPostOpp from '../views/Main/EditPostOpp.vue'
import AdminPage from '../views/Main/AdminPage.vue'
import Report from '../views/Main/Report.vue'
```

我不会用`router`, 但是我大受震撼. 这会导致一个很可怕的问题, 就是一开始加载到`router`的时候, 会把所有的东西都`import`过来, 形成的bundle会巨大.

为了优化这个情况, 可以[这样做](https://www.bacancytechnology.com/blog/vuejs-app-performance-optimization#3):

```
const routes = [
  {
    path: '/',
    name: 'Official',
    component: () => import('../views/Official.vue')
  }
......
```

把每个`import`修改成这样, 就可以做到通过一个回调函数, 按需import外部文件来加载, 大大减少Bundle的大小.

> React的`router`[优化](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html#:~:text=Code%20Splitting%20in%20Create%20React%20App%201%20Code,the%20Async%20Component.%20...%205%20Next%20Steps.%20) 也类似.

### 分割大文件

通过观察Console内Network里的加载进度我们发现, 最后等的就是一个巨大的2MB的js文件, 其他资源都空闲着.

> chrome等浏览器同域名可同时加载的文件大约都是6个.

那么我们就可以拆分大文件, 做到浏览器空闲的时候也有东西可下载. 这样并发连接可以更有效率. 最理想的情况就是所有线程同时结束.

```
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 25000,
      }
    }
  }
```

> 因为最小最大其实也只能是node_module里单独依赖包的大小, 所以数值可以通过不停炼丹来调整.

通过不断地尝试, 我们的加载时间少了1秒.

## 优化成果

![after optimize](/img/vue-performance/2.png)

通过我们强硬的手段, 网站性能从❤️提高到了💛, 从**37**提高到了**52**, 提升了**40%**. 渲染时间从**4.6s**到**2.6s**, 减少了77%.

网站的性能大大提高, 用户的交互也将大大提升.

## 课代表总结

1. 懒加载`img`标签.
2. 用[tinypng](https://tinypng.com)来压缩图片的大小.
3. 通过修改`router`来懒加载组件.
4. 配置`splitChunks`分割大js文件
4. 使用`Prerender`或者`SSR`.

---
sidebar_label: 'Vue爬取并绑定公司Logo图片🏢'
sidebar_position: 1
---

# Vue项目批量爬取并绑定大公司Logo图片

![done effect](/img/vue-logo/1.png)

## 为什么要做?

我们的 [VioLegacy](https://violegacy.org/) 是一个求职内推网站, 所以一些页面需要显示大量的公司Logo图片. 

在最初Logo图片全都是默认的, 由于密密麻麻全是同样的图片, 所以看多了会有点厌倦. 

我开始采用了 [simple icons](https://simpleicons.org/) 的方法解决. 通过拉取全部Logo名称弄一个map, 然后`v-if: "company in iconsList"`, then `:src="...simpleicons/apple.svg"`, 但是由于是svg, 所以颜色都是黑色, 不太好看.

之后经过讨论, 我们想到了要去爬取公司的Logo图片. 我们的页面里的Logo图都是圆形的显示, 必须标准化图片的比例大小等, 应该爬取哪些图片呢? 答案是Favicon.

## 怎么做?

> 具体代码在底部

### 爬取Favicon?
---

Favicon就是每个窗口标签页里标题左侧的小图标, 比如你现在看的这个窗口标签页里的小恐龙🦖, 其实就是 [docusaurus](https://docusaurus.io/) 自带的Favicon, 我懒所以没改.

#### 优点

- 每个公司网站都有, 好爬
- 不用担心图片太过于大, 影响性能
- 尺寸比例比较统一, 基本都是严格的方形

#### 缺点

- 有些成立时间久的大公司, 比如`alibaba`或者`google`有时候用的是万年不变的老logo
- 图片质量不高, 放大会模糊

当然除了这些, 还有一个很重要的优点, 就是根本不用真的动手爬, 有现成的爬虫API! [Favicon grabber](https://favicongrabber.com/) !

### Favicon grabber!
---

[Favicon grabber](https://favicongrabber.com/) 的使用非常简单. 向`https://favicongrabber.com/api/grab/:domain` 发一个GET请求就可以返回一个充满了Favicon的src的列表. 这里的`:domain`就是网站的url. 我们想要公司的Logo, 那么直接把公司名拼接成`${companyName}.com`就好了, 毕竟大公司肯定是有同名的官网. 但是之后遇到了几个坑.

### 怎么绑定不上...
---

#### 1. Vue中src字符串拼接

要注意, 在`Vue`的`:src=''`里是直接拼接字符串src, 图片是无法正常显示的(或许是因为webpack), 必须通过调用组件内的函数来获取. 比如`:src='suning.com/${hi}'`是不能正常工作的, 最好要用`:src='connectString(suningyao.com/)'`去调用函数返回完整url来做到拼接的效果. 当然还有其他[几种方法](https://stackoverflow.com/questions/40255291/vue-js-img-src-concatenate-variable-and-text).

> 这里因为markdown语法的问题所以只能写单引号, 应该是反引号.

#### 2. 正则表达处理字符串

发了几次请求都是404. 最后一看原来忘记把字符大小写和空格处理掉了. 这个好弄, 用生成器生成就行.
```
companyName = companyName.toLowerCase().replace(/ /g,'');
companyName = companyName.replace(/\./g, '');
companyName = companyName.replace(/\&/g, 'and');
```
之后在组件内部我们也要把`company.name`做同样的处理.

#### 3. Vue的:src属性绑定异步函数

之后就直接绑上去不就好了.

只要`v-if='返回200'`, 我们就`:src='fetch()'`. 其余返回错误的就直接用默认图片. 可是很遗憾, [还是不行](https://stackoverflow.com/questions/58682247/loading-images-in-vue-js-from-an-api). `Vue`去异步地绑定图片src是不太行的, 渲染出来的时候不一定就拿到了src.

#### 4. console.log(很长的object)

经过几次尝试, 发现还是先用爬虫爬完再去绑定比较好. 因为如果当场爬当场存当场绑会有很大的速度问题, 不如事先爬完存一个object. 于是我们就动手爬了, setTimeout几十秒以后log出来的object就是我们想要的. 可是console里object属性的数量超过100个就看不到完整的了...

![console.log is overflowed](/img/vue-logo/2.png)

这里就有个很神奇的解决方法: `JSON.stringnify` ! 这样处理过以后就可以完全显示出来了. 之后甚至不用再parse回去. `JSON.stringnify` 还可以解决很多其他的问题, 比如要在属性里配对, 就可以先用`JSON.stringnify`全转成字符串再去includes.

> 注意object使用时的语法小区别: Obj.key=val或者Obj['key']=val都可以赋值, 但是如果循环里要用数字做key的话, 最好用没有引号的Obj[numberKey], 防止数字变量全被解析成字符串.

#### 5. 有些icon还是不能显示

查看console后发现, 有些icon报了403错误. 我们虽然拿到了src, 可能是跨域的缘故, 公司的网站不一定让我们访问. 于是我们就直接手动删除这几个403的公司...

## 完整解决方案!

### 工作流程

1. 手动爬虫, 爬一个object, 存储爬得到favicon的公司, key是公司名, value是对应的favicon路径
2. favicon object通过JSON.stringnify完整显示后粘贴放到组件里作为变量
3. 注释掉手动爬虫的代码
4. v-if='元素的公司名在favicon object里', src='value对应的路径', 否则就用默认图片
5. 剔除403报错的路径

### 完整代码

`getCompanyIcons.js`

```
const getCompanyIcons = (companyNames) => {
  let companyIcons = {}
  for (let companyName of companyNames) {
    companyName = companyName.toLowerCase().replace(/ /g,'');
    companyName = companyName.replace(/\./g, '');
    companyName = companyName.replace(/\&/g, 'and');
    fetch(`https://favicongrabber.com/api/grab/${companyName}.com`)
      .then(response => response.json())
      .then(res => {
          if (!('error' in res)) {
            companyIcons[companyName] = res.icons[0].src
          }
        })
  }
  return companyIcons
}

export default getCompanyIcons;
```

`allCompanies.vue` (手动爬虫部分, 完成后注释掉)

```
...

const getAllCompanyNames = (companies) => {
  for (let company of companies) {
    companyNames.value.push(company.name)
    }
  }

getAllCompanyNames(companies.value)

const companiesCanGetIcons = await getCompanyIcons(companyNames.value)
  setTimeout(()=>{
  console.log(JSON.stringify(companiesCanGetIcons))
}, 70000)

...
```

`companyList.vue`(显示图片的组件)

```
...

  <div
    class="round-image-container"
    v-if="removeSpecial(company.name) in companiesCanGetIcons">
    <img
      class="round-image"
      :src="companiesCanGetIcons[removeSpecial(company.name)]"
      :alt="company.name"
    />
  </div>

  <div
    v-else>
    <img
      class="default-image"
      src="@/images/default-company-logo.png"
      :alt="company.name"
    />
  </div>

...  

  const companiesCanGetIcons = {"akqa":"https://www.akqa.com/assets/images/favicon/favicon-32x32.png", .......}

  const removeSpecial = (companyName) => {
    companyName = companyName.toLowerCase().replace(/ /g,'');
    companyName = companyName.replace(/\./g, '');
    companyName = companyName.replace(/\&/g, 'and');
    return companyName
  }
```

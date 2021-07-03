---
sidebar_label: 'CSS加粗字体但不改变字符大小'
sidebar_position: 1
---
# CSS增粗`<b>`字体但不改变字符大小

## 起因

---

### 怎么遇到问题的

我今天晚上闲着没事, 想把我的简历通过HTML写一遍. 其中pdf格式简历源文件有一部分内容是这样的.

![resume pdf section](/img/css-bold/1.png)

于是我是这么通过HTML和CSS实现的

```
<div style="display: flex;">
  <div style="text-align: right; width: 11ch;">Programming</div>
  <div style="margin-left: 2ch;">
    ......
  </div>
</div>
<div style="display: flex;">
  <div style="text-align: right; width: 11ch;">Front end</div>
  <div style="margin-left: 2ch;">
    ......
  </div>
</div>
```

> 这里的`ch`单位是character width, 代表了每个字体里`0`的宽度. 因为programming
> 这个单词是11个字符, 所以我把每个小标题的容器宽度(programming, front end, back end)
> 设置为了其中最长的programming单词的11个字符宽度, 来达到pdf内的样式.

CSS实现的效果是这样的:

![first CSS implementation](/img/css-bold/2.png)

看起来很对啊有没有!

但是我们要把小标题(programming, front end)加粗

于是给小标题加上`<b>`加粗后发生了这样的一幕:

![fucked](/img/css-bold/3.png)

### 为什么出bug呢?

这不坑人吗这不是. Programming加粗前好好的是11个字符的宽度, 加粗后超出去了. 

我快速地想到了一个办法, 那实在不行就稍微宽一点, 设置成12ch不就好了.

**结果是: 真的就好了, 而且天衣无缝般, 11个字符的Programming加粗后正好就是12个字符的宽度.**

![worked?](/img/css-bold/4.png)

你可能想问那设置再宽一点不就好了, 但是要记得我们CSS里设置了文字右对齐. 如果强行放宽的话左边会有不必要的空.

![15ch not working](/img/css-bold/5.png)

### 为什么不出bug呢?

虽然我们通过将宽度设置为12ch解决了11ch的文字加粗后大小变大的问题. 

但是为什么11个字符加粗后是12个字符的宽度呢?

这有什么计算公式或者原理吗?

我们得知道这是怎么计算出来的才能解决这个问题啊.

于是我去进行了搜索.

### 如何正确解决bug

很遗憾, 没找到相关的官方资料, 但是我个人猜测这和每套字体有关系. 不同的字体有不同的规则, 甚至我记得有时候 [有些字体](https://community.adobe.com/t5/acrobat/one-of-my-fonts-not-in-bold-when-making-a-pdf/td-p/10215515) 是没有粗体的. 所以这个问题好像没法通过官方的标准解决.

但是我找到了很多和我遇到相同问题的人.

这个 [贴主](https://stackoverflow.com/questions/5687035/css-bolding-some-text-without-changing-its-containers-size) 的ul元素一hover上去粗体就宽了;
这个 [贴主](https://stackoverflow.com/questions/556153/inline-elements-shifting-when-made-bold-on-hover) 的行内元素一hover上去粗体就宽了; 
[这位](https://stackoverflow.com/questions/17650360/change-of-font-weight-to-bold-is-unwantingly-changing-width-of-element) 也是; 
[这位](https://bbs.csdn.net/topics/90395001?list=1569273) 更是重量级, 2006年发的帖子到现在没回复(他的帖子中不是HTML和CSS, 应该是某个桌面App开发时的问题, 这侧面印证了可能就是单纯字体的问题).

从大家的讨论中我找到了几个好的解决方案:

- 最好的解决方法:
  通过`text-shadow`来给字体加个阴影
  ```
  li:hover { 
    text-shadow: -0.06ex 0 black, 0.06ex 0 black; 
  }
  ```
  ![nice text bold](/img/css-bold/6.png)
  
  左侧为normal, 中间为text-shadow, 右侧为bold.
  
  > 这是万能解决方法, 浏览器适配比较完美, 但是放大稍微有点晕影. 

- 未来的解决方法:
  
  通过`font-variation-settings`
  ```
  li:hover { 
   font-variation-settings: 'GRAD' 150; 
  }
  ```
  效果也非常好
  ![future text bold](https://i.stack.imgur.com/U9wko.gif)

  看了下 [谷歌的开发者文档](https://web.dev/variable-fonts/#axes_definitions) 发现是2018年出来的更新. 但查了[Mozilla的文档](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide), 
  发现这个属性需要比较新的操作系统; 同时在[caniuse上](https://caniuse.com/?search=font-variation-settings), 这个属性的
  适配也暂时不太好. 相较于前一种方法没有本质区别. 
  
  > 所以在本文完成的当下(2021.07), 还不太能放心使用. 

- 有限制的解决方法:
  ```
  直接把容器搞宽一点. 宽度按照Bold之后的文字宽度设置.
  ```

  > 但是如果像我一样需要文字右侧对齐, 可能需要更多的调整

## 课代表笔记

1. ch单位: 字体中`0`的宽度; ex单位: 字体中`x`的高度.

2. 加粗字符同时不改变大小: 通过`text-shadow`或`font-variation-settings`

---
sidebar_label: 'CSS隐藏iframe与窗口滚动条 🥷'
sidebar_position: 1
---
# CSS隐藏iframe与窗口滚动条 🥷

今天在前端交流群里面遇到一位群友提出的问题蛮有意思的.

群友的问题是`请问一个问题，怎么隐藏iframe的滚动条啊，`.

我看到了以后是比较不耐烦的, 因为之前实现过, 而且不难, 但是为了确保不会装逼失败, 还是去谷歌了一下.

于是找到两种方法, 可以隐藏iframe滚动条.

> Fun fact: iframe可以[无视cors的限制](https://benohead.com/blog/2015/12/07/cross-document-communication-with-iframes/#Same_Origin_Policy), script/link/img/video/audio/object/embed标签以及@font-face[也可以](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

## 直接禁用iframe的滚动条

---

由于我不知道他的具体意思, 所以我猜测可能他是想彻底不要iframe里的滚动条.

这种方法会彻底禁用滚动的功能, 实现如下:

```html
<iframe
  src="..."
  scrolling="no"
  style="overflow: hidden;"
  ...
>
</iframe>
```

当然这是个治标不治本的方法, 为了不要滚动条, 连滚动功能都没了, 相当于一张静态的图片, 不太好.

> 如果遇到了其他问题, 可以参考[这个](https://stackoverflow.com/questions/7398142/overflow-hidden-doesnt-work-on-chrome-with-iframes/7398202), 或者[这个帖子](https://stackoverflow.com/questions/10082155/remove-scrollbar-from-iframe).

## 父元素包裹覆盖掉iframe滚动条

---

首先, 我们的iframe是长这样的.

![1](/img/css-scrollbar/1.png)

因为我们设置iframe的时候会给定它宽度和高度, 所以我们可以在它外部包一个`<div>`, 通过`overflow: hidden`把iframe右边滚动条的地方盖掉.

实现如下:

```html
<div style="width: 400px; overflow: hidden">
  <iframe src="https://blog.suningyao.com" width="407"height="480">
</div>
```

注意这里父元素是400px, iframe是407px, 这样相差的7px就正好覆盖掉了滚动条.

效果如下:
![2](/img/css-scrollbar/2.png)

## 浏览器窗口隐藏滚动条

---

当然仅仅让iframe的滚动条隐藏是不太够的, 经过热心群友的提示, 我们找到了这个新特性: [CSS滚动条选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar).

通过这个选择器隐藏滚动条很方便, 实现如下:

```html
<head>
  <style>
    ::-webkit-scrollbar {
      display: none;
    }
  </style>
</head>
```

这样之后窗口整体的滚动条就没了, 无敌神奇.

如果你想只隐藏iframe的滚动条的话, 当然可以通过`iframe::-webkit-scrollbar`实现.

当然这个功能也是有危险的⚠️, 目前还处于草案阶段, 文章发布的两天前还在进行修改, 不能放心大胆地用到生产里. 此选择器只能在支持WebKit的浏览器(Safari, Chrome, 群友说小程序也行)上使用.

## 设置滚动条宽度为0

---

直接
```
html {
  scrollbar-width: none;
}
```

> 几个有趣的滚动条样式: scrollbar-width: thin/normal; scrollbar-color: red green. (和上面伪元素差不多, 但是写起来方便一点, 适配更好)

## 课代表总结

---

1. 禁用iframe滚动条:
```html
<iframe
  src="..."
  scrolling="no"
  style="overflow: hidden;"
  ...
>
</iframe>
```
2. 遮掉iframe滚动条:
```html
<div style="width: 400px; overflow: hidden">
  <iframe src="https://blog.suningyao.com" width="407"height="480">
</div>
```
3. 新选择器原生移除滚动条:
```html
<head>
  <style>
    ::-webkit-scrollbar {
      display: none;
    }
  </style>
</head>
```
4. scrollbar-width隐藏滚动条:
```css
html {
  scrollbar-width: none;
}
```

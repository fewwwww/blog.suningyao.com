---
sidebar_label: 'CSS帧框内部内容过大和滤镜 🔬'
sidebar_position: 2
---
# CSS解决帧框内元素由于vw或vh而过大或过小以及CSS3的grayscale滤镜 🔬

## 起因

---

为了交设计课的作业, 所以我做了[这么个网站](https://fewwwww.github.io/xop/). 有个部分的内容我想用`<iframe>`来把[另一个作业做的网站](https://fewwwww.github.io/xop-app/)显示进去. (其实第一个网站是第二个网站的推广页, 所以嵌入进去做个预览就很合理)

但是直接嵌入进去的话会变成这样:

![before](/img/iframe-size/before.gif)

### 为什么?

因为`<iframe>`里的有些元素是用相对单位来做大小的, 另一些不是. 而相对单位的元素vw和vh是按照`<html>`的宽度高度来计算的, 而不是按照这个`<iframe>`的来算, 所以会显得这么大.

## 解决问题

---

### 如果, 可以用JS

1. 那么我们可以尝试直接去修改`<iframe>`标签里的内容, 把不对的单位都改对

    ```js
    const node = contentRef?.contentWindow?.document?.body
    ```

    > iframe里的东西其实就是另一个`<html>`.

2. 或者直接把html文件下载下来, 直接在`<iframe>`里展示

    ```js
    <iframe src={"data:text/html,"+encodeURIComponent(content)}/>
    ```

    > content的最长长度是32768个字符

3. 也可以下载下来后使用`srcdoc`

    这个attribute可以嵌入inline html. 如果浏览器不支持的话, 会fall back到src.

    ```html
    <iframe srcdoc="<html>嘉然今天吃什么</html>" />
    ```

这部分参考了[这个帖子](https://stackoverflow.com/questions/34743264/how-to-set-iframe-content-of-a-react-component).

### 但是不能用JS

因为我上的是设计课, 理论上我们是没学过JS的. 所以只能用CSS解决.

先贴一下完整代码:

```css
iframe {
  width: 2560px;
  height: 1200px;
  transform: scale(0.12);
  position: absolute;
  left: -1120px;
  top: -520px;
}
```

容我解释一下这丑陋的CSS. 首先我们要让`<iframe>`里的内容都按正常大小显示, 那么我们想到的就是把整个iframe
按照正常屏幕大小铺开来. 我们把高度宽度设置为屏幕的大小.

![after](/img/iframe-size/after.gif)

然后我们要把iframe缩小到我们想要的大小. 这里我们就用到了`transform: scale()`来做一个变换.

最后是这样的, 虽然用了transform缩小元素, 但是元素其实占的位置和大小还是原来的2560px和1200px.
所以我们要用position去修改一下定位, 这部分其实也没找到特别好的解决方法, 只能慢慢left和top来调整.

## 还有一些问题..

---

1. 定位不适配所有设备

    因为我们的position是通过不断的调整试出来的, 所以只针对我们屏幕大小这一种case. 如果移动端或者平板的话还得再调整. 而且我们iframe的height和width也是只包含了一种情况, 不过这个不急,因为只是涉及iframe内的元素排版和显示.

2. 性能好差

    我们用的transform的特性貌似会一帧帧去用GPU计算->"截图"->渲染 (这是我学设计的老师说的). 所以性能特别差, 尤其我们还是嵌入了多个页面.

## BONUS!

在解决这个问题的时候发现另一个CSS有关的小坑, 简要说一下.

CSS有个filter是grayscale(n). 如果n是1, 那么图就只有黑白了; 如果n是0, 那么图正常显示.

我做的网站是报纸的那种排版, 所以我把整个html标签都设置成了grayscale(1). 但是我想让iframe留下原来的彩色, 就给它设置了grayscale(0), 希望把它掰回彩色. 但是无济于事.

```css
/* not working! */
html {
  filter: grayscale(1);
}

iframe {
  filter: grayscale(0);
}
```

这个情况的原因其实是这样的, iframe确实回到grayscale(0)了, 但是html依旧是grayscale(1)的!

要解决这个问题有两种方法: 一个是用:not()的CSS选择器(要注意如果父标签还是grayscale(1)的话这个问题可能还是会发生), 还有就是只给img等标签加grayscale(1).

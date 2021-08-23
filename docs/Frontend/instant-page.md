---
sidebar_label: '通过预加载提高页面加载速度💫'
---

# 通过instant.page进行预加载提高页面加载速度💫

## 简介

看到了一个开源项目[instant.page](https://instant.page)可以瞬间让你的页面加载更加快. 源码在[这里](https://github.com/instantpage/instant.page). 用上就可以, 其他的事情不用担心.

## 使用

把这段代码放在`</body>`前面. 完事.

```
<script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script>
```

## 原理

hover并点击按钮的这段时间几乎都是大大超过65ms的(可以在`instant.page`上试试). 所以这段时间就可以用来`preload`资源. 你也可以选择onmousedown的瞬间开始预加载, 保证不会错杀任何一次. 这就是`instant.page`让网站更快的原理.

> 相关的一个[字体加载优秀实践](https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/)
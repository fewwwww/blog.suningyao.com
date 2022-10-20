# 🎵 音频可视化与ThreeJS的开发

Demo: [music.suningyao.com](https://music.suningyao.com/)

Repo: [github.com/fewwwww/music.suningyao.com](https://github.com/fewwwww/music.suningyao.com)

## 前言

Gonsa 这个项目是我在 NYU IDM 的 WebGL 课程的期末作业, 为一个音频可视化网站, 对我的多首精选原创音乐进行了可视化.

网站采用了 ThreeJS 作为 3D 引擎, TypeScript 作为语言, Vite 作为工具链, MVC 作为设计模式, Web Audio API 作为音频处理, SimplexNoise 辅助可视化生成.

## 设计

设计上, 由于对自己的设计功力的不自信, 我一开始就决定减少不必要的设计, 只保留最少的元素. 同时没有做额外的音乐播放器等样式.

![](/img/gonsa/1.png)

颜色上, 我选择了黑与白两种颜色, 让视觉更加清晰. 布局上, 整个项目仅有一个按钮, 以及两个页面中的不同 3D 图形. 交互上, 我为唯一的按钮设计上了点击效果以及悬停效果.

![](/img/gonsa/2.png)

图形的构建上, 我采用了非常多的线条, 虽然都是 3D 图形, 但没有任何大的色块, 而是仅剩一个核心的骨架, 为画面添加了更多的留白.

![](/img/gonsa/3.png)

图形的动效上, 我让起始页的图形随机变化长度, 主页面的球形随着音乐变化律动.

![](/img/gonsa/4.png)

交互上, 用户的鼠标位置会引起视角的变化.

音乐上, 我并没有选择用户上传自己的音乐, 而是指定了我的音乐, 这是为了避免过多的用户操作以及风格的统一. 音乐的选取我初步选择了一些自己喜欢的原创的音乐, 并且挑选出了几个展示效果明显的.

代码上, 我尽力简化了代码行数, 文件数等.

## 细节

### 1. 起始页图形形状

虽然是用的 ThreeJS 的 3D 框架, 但是起始页的图形看着像是线条, 这是因为为了设计上的美观, 我让这几个长方体的宽度和深度都变成 0 了.

```js
// add one bar
addBar(x: number): void {
    const bar = new BoxGeometry(0, 50, 0);
    const material = new MeshPhongMaterial({ color: 0xffffff, wireframe: true });
    const tempBar = new Mesh(bar, material);
// ...
```

### 2. 起始页图形动效

由于如果完全正经随机的话, 很多情况下, 会有一些图形很幸运地越变越长直到充满屏幕. 所以变大变小的机率并非是 50%, 而是变小的几率会略大于变大, 这样图形就会和音波一样越来越小, 直到消散.

```js
// updating the bars size
update(): void {
    this.bars.forEach((bar) => {
        if (Math.random() > 0.7) {
            // random number between 0 and 1
            // it is 0.501 because we need the bars lower in general after a lot of trials
            Math.random() > 0.501 ? this.up(bar) : this.down(bar);
        }
    });
}
```

还有就是切页面的时候要 call 一下 onPointerMove, 这样避免切的渲染时候突然会从 (0, 0) 跳到指针位置. 以及手机上没有 onmouseleave, 所以在 onclick 的时候也需要把页面的反色恢复.

```js
playDOM.onclick = function (event: any) {
    // ...
    model.activeView = (model.activeView + 1) % views.length;
    // make camera not jumping
    onPointerMove(event)
};
```

### 3. Web Audio API 使用

由于浏览器限制, 我们无法直接播放音频, 所以需要按钮来触发音频的发声. 同时因为我们的项目分了组件, 所以我们挂了两个点击事件给两个组件.

主组件 (播放音乐)

```js
// ...
// initiate the audio on clicking, hide the play button, change active view
playDOM.onclick = function () {
    audioDOM.src = model.audioSrc[Math.floor(Math.random() * model.audioSrc.length)];
};
// ...
```

子组件 (创建 context)

```js
// ...
	if (htmlDOM) {
		// we need an event to get the audio context
		htmlDOM.onclick = function () {
			// web audio api stuffs
			const context = new AudioContext();
// ...
```

### 4. 按钮样式

由于按钮的 position 是 fixed, 同时需要水平居中, 同时需要有 active 的大小变换动画, 同时要有移动端适配. 所以, 如果要考虑这些所有的因素的话, 最好的方法就是把宽度也设置为 vh 单位... 你可以仔细想想, 还有没有办法能同时满足这些.

```css
/* ... */
#play {
    width: 30vh;
    height: 10vh;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
    position: fixed;
/* ... */
}
/* ... */
#play:active {
    transform: scale(0.95);
}
```

hover 上去的特效其实也很有趣. hover 上去会有一个全界面反色, 点击进去之后也会有一个小小的延迟, 就会看到球的那个页面也是稍微有点黑的, 然后迅速变白. 这个是无心插柳柳成荫的一个效果.

![](/img/gonsa/5.png)

### 5. console 的 log

console 里面会 log, 不对, info 出一些小信息呀.

```js
<script>
    console.info('🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵')
    console.info('made by Suning Yao')
    console.info('🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵🎵')
    console.info('learn more about me at suningyao.com')
</script>
```

### 6. 音乐文件

一开始是想都用 `.flac` 格式的, 因为这样音质最高. 但是其实 `.mp3` 格式没啥显著区别, 大小还小一点.

## 参考资料

1. [我的音乐人账号](https://music.163.com/#/artist?id=12452032)
2. 项目的主要逻辑部分参考[这个博客](https://medium.com/@mag_ops/music-visualiser-with-three-js-web-audio-api-b30175e7b5ba)
3. [更好看的一个音乐可视化项目](https://jojo.ninja/fluctus/)

---
sidebar_label: '⚛️ Redux和Jest这次真的就学会'
---

# Redux和Jest这次真的一定直接上手 ⚛

## 前端中缺失的拼图

---

在学习前端的过程中, Redux作为状态管理库, Jest作为测试框架, 一定是必学的, 但是实际自己学教程做项目, 基本都用不上. 我自己学了很多次都没学会, 但是实际开发中肯定是需要掌握的.

目前网上的Redux教程我看了十几篇, 基本都比较晦涩, 争取在这一篇文章里, 就是说可以直接搞定, 上手使用. Jest则是平常完全用不到, 所以一直懒得去学.

## 一个组件搞定Redux

---

Redux是状态管理库, 帮助在复杂应用中管理全局的状态. 有一句话是这样说的"如果你不确定是否要使用Redux, 那么就不要使用.", 但是我们为了学, 必须得用...

- 创建一个React项目, 引入Redux库.

    ```s
    npx create-react-app redux-demo
    npm install @reduxjs/toolkit react-redux
    ```

- 确定组件需求

    我们要完成一个组件, 组件要实现一个Counter(Add button), 一个Post(Input, Submit button).

    我们一步步拆解, 完成这个组件的搭建. 最好一定要跟着写, 写完就懂了.

> 我们所处理的文件为`index.js`.

- 引入依赖

    ```js
    import {createStore} from "@reduxjs/toolkit";
    import * as ReactDOM from "react-dom";
    import {useState} from "react";
    ```

    这步就先不用管, 接着写就完事了.

- 创建reducer

    看过useState源码的朋友们可能知道, useState其实就是一个useReducer. Reducer的作用类似就是把东西过滤一遍.

    我们这里的reducer就是把用户发过来的action和现在的全局状态处理一遍, 返回更新后的状态.

    ```js
    const reducers = (state = {value: 0, post: "Default"}, action) => {
      switch (action.type) {
        case "ADD":
          return {
            value: state.value + 1,
            post: state.post
          }
        case "POST":
          return {
            value: state.value,
            post: action.post
          }
        default: return state;
      }
    }
    ```

    reducer是个纯函数, 接收state(默认值是一个对象, value为0, post为"Default"字符串)和action(客户端发过来的, 之后会解释), 返回最新的state.

    然后通过switch把不同type的action分配到不同的操作里, ADD操作就是把老state的value+1, POST操作就是把action里的post内容更新到state里.

- 创建store

    js
    let store = createStore(reducers);
    ```

    创建一个store, 把我们刚刚的reducer传进去.

- 组件本体

    这里就直接在组件里注释解释.

    ```js
    const App = () => {
    // 组件内部状态:
      // 创建组件value的state, 默认值是store最新的state里的value.
      const [value, setValue] = useState(store.getState().value)
      // 创建组件post的state, 默认值是store最新的state里的post.
      const [post, setPost] = useState(store.getState().post)

    // 组件暂存输入框内容状态:
      // 创建暂时存储post输入框内容的state, 默认值为空.
      const [tempPost, setTempPost] = useState('')

    // 组件联系store:
     // 订阅store的变化, 有变化就把更新的state挂到组件的state上.
      store.subscribe(() => {
        // 拉取store中最新value到组件value状态上.
        setValue(store.getState().value)
        // 拉取store中最新post到组件post状态上.
        setPost(store.getState().post)
      })

    // 组件回调函数:
      // 每次点加按钮, 就会发action到store.
      const onADD = () => {
        store.dispatch({type: "ADD"})
      }
      // 每次点提交按钮, 就会发action提交上tempPost内容.
      const onSubmitInput = () => {
        store.dispatch({type: "POST", post: tempPost})
        // 把tempPost清空, 让输入框重新变空.
        setTempPost('')
      }

      return (
        <div className="App">
        // Counter:
          {/* 显示组件内部state的value */}
          <h1>{value}</h1>
          {/* 把回调函数挂到button上, 点击一次就发一次ADD的action */}
          <button onClick={onADD}>ADD</button>
          {/* 显示组件内部state的post */}

        // Post:
          <h1>{post}</h1>
          {/* 每当输入框内容变化, 就会把tempPost更新成输入框内的内容 */}
          <input onChange={e => setTempPost(e.target.value)} value={tempPost} type="text"/>
          {/* 把回调函数挂到button上, 点击一次就发一次POST的action */}
          <button onClick={onSubmitInput}>Submit</button>
        </div>
      );
    }
    ```

    > 记得我们reducer里default返回的是state吗? 如果返回空值, 这里组件初始化state的时候会报错.

- 渲染组件

  ```js
  ReactDOM.render(<App/>,document.getElementById("root"))
  ```

### 总结

工作流程:

App发出action(store.dispatch) => reducer接收action, 过滤发给store(switch, return) => store更新state => App监听到store改变, 更新App内部state并渲染

完整代码+注释如下:

`index.js`
```js
import {createStore} from "@reduxjs/toolkit";
import * as ReactDOM from "react-dom";
import {useState} from "react";

// 类似useReducer, 就是把state和action一起过滤处理, 返回新的state值.
// state是目前的状态, 默认为0; action是发送过来的action, 有type以及其他参数.
const reducers = (state = {value: 0, post: "Default"}, action) => {
  switch (action.type) {
    // 如果type是加, 就return state加上1.
    case "ADD":
      return {
        value: state.value + 1,
        post: state.post
      }
    // 如果type是发, 就把action附带过来的post内容修改上.
    case "POST":
      return {
        value: state.value,
        post: action.post
      }
    // 如果是其他的type, 就return state(注意return空值会报错, 因为组件需要初始化拿到object的value和post).
    default: return state;
  }
}

// 创建一个store, 存储现有state, 把reducer传进去.
let store = createStore(reducers);

// 组件本体
const App = () => {
  // 创建组件value的state, 默认值为store最新的state里的value.
  const [value, setValue] = useState(store.getState().value)
  // 创建组件post的state, 默认值为store最新的state里的post.
  const [post, setPost] = useState(store.getState().post)

  // 创建暂时存储post输入框内容的state, 默认值为空.
  const [tempPost, setTempPost] = useState('')

  // 订阅store的变化, 有变化就把更新的state挂到组件的state上.
  store.subscribe(() => {
    // 拉取store中最新value到组件value状态上.
    setValue(store.getState().value)
    // 拉取store中最新post到组件post状态上.
    setPost(store.getState().post)
  })

  // 每次点加按钮, 就会发action到store.
  const onADD = () => {
    store.dispatch({type: "ADD"})
  }

  // 每次点提交按钮, 就会发action提交上tempPost内容.
  const onSubmitInput = () => {
    store.dispatch({type: "POST", post: tempPost})
    // 把tempPost清空, 让输入框重新变空.
    setTempPost('')
  }

  return (
    <div className="App">
      {/* 显示组件内部state的value */}
      <h1>{value}</h1>
      {/* 把回调函数挂到button上, 点击一次就发一次ADD的action */}
      <button onClick={onADD}>ADD</button>
      {/* 显示组件内部state的post */}
      <h1>{post}</h1>
      {/* 每当输入框内容变化, 就会把tempPost更新成输入框内的内容 */}
      <input onChange={e => setTempPost(e.target.value)} value={tempPost} type="text"/>
      {/* 把回调函数挂到button上, 点击一次就发一次POST的action */}
      <button onClick={onSubmitInput}>Submit</button>
    </div>
  );
}

// 渲染App组件
ReactDOM.render(<App/>,document.getElementById("root"))
```

## 几行代码学会Jest

---

试过了才发现, 这个貌似真没什么讲的, 直接安装配置完上代码..

`hello.test.js`
```js
// 声明是测试Stack这个类, 第一个参数是console打印的描述, 后面的callback是测试具体内容.
describe("Stack: ", () => {
  // 我们需要有个stack变量供测试, 先不用赋值.
  let stack;

  // 在每个单元测试前, 给stack赋值(简化操作, 非必要).
  beforeEach(() => {
    stack = [];
  });

  // it===test都是测试的函数, 第一个参数是描述, 第二个参数是回调.
  it("created empty: ", () => {
    // 非常语义化, 期望{stack}严格等于{[]}.
    expect(stack).toStrictEqual([]);
  });

  it("can push: ", () => {
    stack.push(1);
    // toBe可以用在非引用传值的结果上.
    expect(stack[0]).toBe(1);
  });

  it("can pop: ", () => {
    stack.push(1);
    stack.pop();
    expect(stack).toStrictEqual([]);
  });
});
```

### 总结

没啥好说的... 写起来简单, 用起来有效, 但是真的要做到测试驱动开发, 很难.

---
sidebar_label: 'React Web3优雅的登录验证🤵🏻‍♂️'
---

# React Web3应用优雅的登录验证方案🤵🏻‍♂️

## 项目概述

最近还在忙一个项目, [区块链的虚拟操作系统](https://github.com/WeLightProject/WeLightBlockchainOS). 主要做到的就是把各种区块链的工具集成到一起, 同时做成一个OS的样式, 方便开发者的开发. 基本上长这样:

![WeLightBlockchainOS](/img/draggable/os.png)

它的里面有很多小应用~~(iframe)~~, 小应用的数据存储是用localStorge来弄的. 但是作为一个Web3应用, 同时也要是一个云端的开发者工具, 可能涉及到组队开发, 没有全局应用的登录验证是大大的不行的.

## 功能分析

要实现登录验证, 我们首先想到的肯定不是自己建个库校验, 太麻烦了而且注册很劝退开发者. 所以我们就想到了要实现三种登录方式: GitHub第三方登录, MetaMask第三方登录, 以及游客登录.

## 三种登录方式

### 游客登录

游客登录其实担心的事情是最多的. 我们考虑的是, 当按下回车键或者倒计时30秒之后就进入应用. 这里的倒计时要正确显示就要各种折腾`setTimeout`和`setInterval`, 还得搞清楚组件的状态. 按回车键登录就简单了, 但是其实也有奇奇怪怪的坑.

- 倒计时

    我们有两个组件, 一个是父组件, 一个是开应用画面的子组件. 我们首先要在父组件里有一个是否在打开应用画面的状态. 当我们触发完登录, 登录成功以后就设置状态为false就好了.

    对于倒计时, 我们还要有两个状态变量, 一个是剩余的时间, 用来传给子组件, 另一个是这个`setInterval`的ID, 用来之后清除interval.

    还有一个注意的点就是, 我们触发完登录以后需要把剩余的时间调整回30秒, 这个操作也需要加上一个`setTimeout`, 不然我们还在进应用的动画瞬间会看到剩余时间又回到了30秒, 这个蛮不对的.

- 回车登录

    回车登录的时候要注意也别忘了清除interval. 还有坑就在于`onKeyPress`这种事件是不能直接绑到`<div>`标签上的, 需要[加一个`tabindex`](https://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html). 加了以后就可以开心地绑到组件最外层的容器上了.

下面就是涉及到的部分不完整的代码:

```js
import BootingScreen from './screen/booting_screen';

export default class Ubuntu extends Component {
  constructor() {
    super();
    this.state = {
      screen_locked: false,
      booting_screen: true,
      remainingSeconds: 30,
      remainingSecondsInterval: null,
    };
  }

  setTimeOutBootScreen = () => {
    //   will automatically login in 30 seconds
    setTimeout(() => {
      this.setState({ booting_screen: false });
      setTimeout(() => {
        this.setState({ remainingSeconds: 30 });
      }, 2000);
      clearInterval(this.state.remainingSecondsInterval);
    }, 30000);
    this.setIntervalRemainingSecond();
  };

  setIntervalRemainingSecond = () => {
    // set an interval and store the id of interval to the state
    this.setState({
      remainingSecondsInterval: setInterval(() => {
        //   every one second, --remainingSeconds
        this.setState({ remainingSeconds: this.state.remainingSeconds - 1 });
      }, 1000),
    });
  };

  loginWithoutAuth = (event) => {
    if (event.key === 'Enter') {
      this.setState({ booting_screen: false });
      //   slightly delay on bring back the default remainingSeconds
      setTimeout(() => {
        this.setState({ remainingSeconds: 30 });
      }, 2000);
      clearInterval(this.state.remainingSecondsInterval);
    }
  };

  loginWithAuth = (isLoggedIn) => {
    if (isLoggedIn) {
      this.setState({ booting_screen: false });
      setTimeout(() => {
        this.setState({ remainingSeconds: 30 });
      }, 2000);
      clearInterval(this.state.remainingSecondsInterval);
    }
  };

...

  render() {
    return (
      <div
        onKeyDown={this.loginWithoutAuth}
        tabIndex='0'
      >
        <BootingScreen
          visible={this.state.booting_screen}
          remainingSeconds={this.state.remainingSeconds}
          loginWithOAuth={this.loginWithAuth}
        />
      </div>
    );
  }
}
```

![timer](/img/auth/timer.gif)

### MetaMask登录

MetaMask登录就要在开应用界面这个子组件里完成了. 我这里用到了一个库叫`web3`, `npm i web3`然后引入到组件里就可以用了. 登录完之后, 我们还得记得把登录成功的状态传回给父组件. 要传回父组件就需要父组件把一个方程传下去, 然后这个方程在子组件里调用, 接收参数, 父组件就可以收到了.

相关代码如下:

```js
// 父组件
import BootingScreen from './screen/booting_screen';

export default class Ubuntu extends Component {
  constructor() {
    super();
    this.state = {
      booting_screen: true,
    };
  }

...

  loginWithAuth = (isLoggedIn) => {
    if (isLoggedIn) {
      this.setState({ booting_screen: false });
      setTimeout(() => {
        this.setState({ remainingSeconds: 30 });
      }, 2000);
      clearInterval(this.state.remainingSecondsInterval);
    }
  };

...

  render() {
    return (
      <div>
        <BootingScreen
          ...
          loginWithOAuth={this.loginWithAuth}
        />
      </div>
    );
  }
}
```

```js
// 子组件
import Web3 from 'web3';

function BootingScreen(props) {
  // 登录完传回父组件
  const loginWithMetaMask = () => {
    props.loginWithOAuth(true);
  };

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      loginWithMetaMask();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!',
      );
    }
  };

  return (
    <div>
...
          <div
            // 点击之后就开始MetaMask登录了
            onClick={() => loadWeb3()}
            className='flex bg-white items-center px-5 py-2 mb-1 cursor-pointer'
          >
            <div className='px-5'>Login with MetaMask</div>
          </div>

          <div
            // 游客登录的remainingSeconds传入到这儿了
            className='text-white py-2'
          >
            <div className='text-center'>
              Or press "Enter" to login in {props.remainingSeconds} seconds
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BootingScreen;
```

![metamask](/img/auth/metamask.gif)

### GitHub登录

这个要后端参与校验的(所以Web2还是逊啊 , 所以还没弄, 具体用法可以参考[阮一峰老师的文章](https://www.ruanyifeng.com/blog/2019/04/github-oauth.html).

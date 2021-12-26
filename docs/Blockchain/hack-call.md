# 调用无前端无合约的智能合约🔬

## 题目

## 原始题目

![task](/img/hack-call/task.png)

## 题目解读

我们直接看题. 已知[有一个Polygon链上的未开源的合约](https://polygonscan.com/address/0xc1fae1924303CC7a816919B7A3935Cda8Bf8eF3d), 求找到其中一个函数, 将微信昵称传入并成功发送交易.

## 做题过程

> 我一开始想了好久也没想通, 卡在某一步了, 到最后做完才知道原来是自己之前挖了个坑.

肖越与会枫的解题[视频录像](https://meeting.tencent.com/v2/cloud-record/share?id=3634fff0-337f-4b60-8ca4-4277f3dc2513&from=3)

### 1. 找出函数 Signature

首先, 我们需要审题, 这是Polygon上的合约, 那么我们就去Polygonscan上来搜索这个合约. 找到第一笔成功交易.

![first transaction](/img/hack-call/first.png)

我们可以观察出这个函数的名字非常奇怪. 叫Buy And Free2245... . 同时上面的另一条成功交易叫Elddhzr. 但在现有的信息下我们没法直接来通过函数的名字调用, 因为我们没有源码.

![signature](/img/hack-call/signature.png)

我们点进其中的一个交易, 去看其中的具体信息. 根据我们在网络上搜索到的[闭源合约知识](https://www.anquanke.com/post/id/189145), 我们可以知道. 这些各种0当中的0x以及前八位是函数的签名.

这就更奇怪了, 一个函数的签名竟然会如此凑巧, 正好是00000000. 但是有了这个线索, 我们所能确定的范围更小了.

### 2. 找出可能的函数

我们有了0x00000000的函数签名后, 就需要用到[以太坊签名数据库](https://www.4byte.directory). 这里面记录了几十万个不同函数和方法的签名. 我们搜索0x00000000得到以下结果.

![db](/img/hack-call/db.png)

我们在其中看到了我们的熟人 BuyAndFree 函数.

回忆一下题目内容, 函数是只有一个参数, 参数是能够传微信昵称的. 微信昵称是字母数字字符的组合, 那么在其中就只能是传一个bytes参数的函数. 我们找到以下三个可疑的函数.

![suspicious](/img/hack-call/sus.png)

### 3. 逆向推出合约

再次回忆一下题目内容. 原始题目内, 我们成功触发的顺序就是我们报名的顺序, 而且我们所传入的参数是我们的微信昵称. 那么我们可以推断出合约源码内是有一个mapping来存储报名顺序以及微信昵称的. 其中报名的顺序肯定是一个数字, 那么就肯定是uint256, 微信昵称则是bytes.

那么我们可以推理出合约的具体内容可能可以是:

```cpp
pragma experimental ABIEncoderV2;
pragma solidity ^0.6.0;

contract hack{

    mapping (uint256=>bytes) c;

    function abcei51243fdgjkh(bytes memory _a) public returns(bytes memory){
        c[2] = _a;
        return _a;
    }
}
```

### 4. 运行猜出的合约

我们把合约内容放到[remix](https://remix.ethereum.org/)里. 编译后选择 Injected Web3 环境, 在下方填入合约原始的地址. 点击 At Address.

![creation](/img/hack-call/creation.png)

我们成功得到了我们想要的那个函数!

### 5. 传入参数, 提交交易

不要忘记这个函数参数的类型是bytes, 我们没法直接把字符串填进去.

我们需要用到[另一个工具](http://www.hiencode.com/hex.html), 将我们的昵称变成hex编码.

之后我们就可以直接把hex编码填入进去, 发起交易. (别忘了在前面加上0x)

![send](/img/hack-call/send.png)

支付手续费确认交易之后你就可以看到成功啦!

![success](/img/hack-call/success.png)

## 错误示范

一个很典型的错误示范就是尝试把字节码反编译出来. [反编译的工具]中不包含Polygon网络, 就算把字节码粘贴过去, 成功反编译出来之后也会是天书.

## BONUS

在题目发出的一个星期前, 我正好在群里转了关于函数签名带0能省gas的聊天记录 (这里有个[相关的文章](https://medium.com/coinmonks/on-efficient-ethereum-addresses-3fef0596e263)推荐阅读). 当时崔棉大师评论了几句. 之后可能也是受这几篇文章的启发, 所以出了这道题, 把我难住这么好几天.

感谢会枫和肖越的解题!

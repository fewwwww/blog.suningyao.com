---
sidebar_label: '通过互动教程学习Solidity🧟‍♂️'
sidebar_position: 5
---

# 通过CryptoZombies快速上手Solidity🧟‍♂️

找到一个很好的[学习Solidity的网站](https://cryptozombies.io/), 可以通过互动式的教程, 通过写智能合约来学习Solidity, 不用担心环境搭建, IDE配置等上来劝退的问题.

Solidity本身和Java类似, 语言语法不难, 只是生态以及开发工具不同. 开发工具有ganache(搭建测试网络), truffle(cli中部署调试合约), Jest(测试框架)等, 生态中的库有OpenZepplin等. 具体开发流程可参考[本文](https://blog.suningyao.com/docs/Blockchain/erc-721).

## 第一课: 搭建僵尸工厂

### 1. 项目概述

---

我们将创造一个"僵尸工厂", 用它建立一支僵尸部队.

- 我们的工厂会把我们部队中所有的僵尸保存到数据库中.
- 工厂会有一个函数能产生新的僵尸.
- 每个僵尸会有一个随机的独一无二的面孔.

僵尸的外表取决于一个16位的整数, 如: 8356281049284737.

### 2. 基本数据结构

---

- 版本: 一个Solidity文件需要在开头声明编译器版本, 避免编译器更新造成文件破坏.

- 合约: Solidity代码都包裹在合约里面. 一份合约就是应用的基本模块, 所有的变量和函数都属于一份合约, 它是你所有应用的起点.

    ```java
    // 声明"代码的版本"
    pragma solidity ^0.4.19;

    // 制造僵尸的合约工厂
    contract ZombieFactory {

    }
    ```
- 状态变量: 状态变量直接写在合约内部一层, 被永久地保存在合约中, 存储在区块链里.

- 无符号整数: uint全称为unsigned integer, 没有符号的整数, 也就是0以及所有正数. (uint默认为一个可以很大的数, 如果出于某种特殊考虑需要使用数值更小的数, 可以使用uint8等)

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        // DNA的位数是16位.
        uint dnaDigits = 16;
    }
    ```

- 数学运算: 加,减,乘,除,取余数,乘方 === +,-,*,/,%,**.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        // 保证DNA是16位数.
        uint dnaModulus = 10 ** dnaDigits;
    }
    ```

- 结构体: 相对于基本类型, 生成一个更复杂的有更多属性的数据类型.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        // 一个Zombie类型有名字和DNA.
        struct Zombie {
            string name;
            uint dna;
        }
    }
    ```

- 数组: 建立一个有顺序的集合, 可以是静态或者动态. 公共数组会自动创建getter方法(不用public就得手动写一个function来打印变量, 用了就可以直接获取变量).

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        // zombies数组是动态的, 可以变换长度; 是公共的, 自动创建getter方法; 里面的每个元素都是Zombie类型.
        Zombie[] public zombies;
    }
    ```

### 3. 函数的基本操作

---

- 函数: 不变的输入就对应不变的输出. 参数按习惯以`_`开头.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        // 用于创建僵尸的方程, 输入参数为名字和DNA.
        function createZombie(string _name, uint _dna) {
        }
    }
    ```

- 创建新的实例, 操作数组

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        function createZombie(string _name, uint _dna) {
            // 在zombies状态变量里添加一个新的Zombie(参数来自于方程参数)
            zombies.push(Zombie(_name, _dna));
        }
    }
    ```

- 私有/公共函数: Solidity中函数默认为公共, 任何一方都可以调用, 容易会有安全隐患. 私有函数是只有我们合约中的其它函数才能够调用, 名字一般以`_`开始.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        // private要放在变量名后面.
        function _createZombie(string _name, uint _dna) private {
            zombies.push(Zombie(_name, _dna));
        }
    }
    ```

- 函数更多属性: 可以通过`returns (uint)`定义返回值; 通过修饰符`view`表示函数只读取数据; 通过修饰符`pure`表示是个不读取数据的纯函数. 不需要刻意记忆, IDE会提示.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        function _createZombie(string _name, uint _dna) private {
            zombies.push(Zombie(_name, _dna));
        }
        // 定义一个生成随机DNA的函数, 它是个私有函数, 只读取数据, 返回一个无符号整数.
        function _generateRandomDna(string _str) private view returns (uint) {
        }
    }
    ```

- 生成随机数: keccak256()函数可以通过输入的字符串返回16进制随机数(当然不太安全).

- 类型转换: 由于keccak256返回的是16进制随机数, 所以我们需要将类型转化成我们可以处理的类型.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        function _createZombie(string _name, uint _dna) private {
            zombies.push(Zombie(_name, _dna));
        }
        function _generateRandomDna(string _str) private view returns (uint) {
            // 生成uint类型的随机数.
            uint rand = uint(keccak256(_str));
            // 取余数保证是16位.
            return rand % dnaModulus;
        }
    }
    ```

- 创建供外部调用的接口

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        function _createZombie(string _name, uint _dna) private {
            zombies.push(Zombie(_name, _dna));
        }
        function _generateRandomDna(string _str) private view returns (uint) {
            uint rand = uint(keccak256(_str));
            return rand % dnaModulus;
        }

        // 创建一个公共函数, 调用其他函数.
        function createRandomZombie(string _name) public {
            uint randDna = _generateRandomDna(_name);
            _createZombie(_name, randDna);
        }
    }
    ```

### 4.事件与外部调用

---

- 事件: 合约和区块链通讯的一种机制. 前端应用“监听”某些事件，并做出反应.

```java
pragma solidity ^0.4.19;

contract ZombieFactory {
    // 创建事件.
    event NewZombie(uint zombieId, string name, uint dna);
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    struct Zombie {
        string name;
        uint dna;
    }
    Zombie[] public zombies;
    function _createZombie(string _name, uint _dna) private {
        // 返回出的id是Zombie在zombies中的索引.
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        // 将数据传入到事件中, 触发事件.
        NewZombie(id, _name, _dna);
    }
    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }
    function createRandomZombie(string _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }
}
```

- Web3.js: 通过Web3.js, 我们可以从前端调用合约的方法等.

## 第二课: 僵尸与人类生成新僵尸

### 1. 项目概述

---

僵尸吃了人类以后, 可以随机变成新的僵尸. 我们在本课中会尝试实现这么一个"融合"的功能.

### 2. 映射,地址,Msg.sender

---

- 映射: 本质上是存储和查找数据所用的键-值对. 类似Python中的字典.

- 地址: 类似银行账号, 应用账户, 作为僵尸主人的ID.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        event NewZombie(uint zombieId, string name, uint dna);
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        // 创建两个映射, 规定键和值的类型.
        mapping (uint => address) public zombieToOwner;
        mapping (address => uint) ownerZombieCount;
        function _createZombie(string _name, uint _dna) private {
            uint id = zombies.push(Zombie(_name, _dna)) - 1;
            NewZombie(id, _name, _dna);
        }

        function _generateRandomDna(string _str) private view returns (uint) {
            uint rand = uint(keccak256(_str));
            return rand % dnaModulus;
        }
        function createRandomZombie(string _name) public {
            uint randDna = _generateRandomDna(_name);
            _createZombie(_name, randDna);
        }
    }
    ```

- msg.sender: 在Solidity中, 有一些全局变量可以被所有函数调用. 其中一个就是msg.sender, 它指的是当前调用者(或智能合约)的address.

    ```java
    pragma solidity ^0.4.19;

    contract ZombieFactory {
        event NewZombie(uint zombieId, string name, uint dna);
        uint dnaDigits = 16;
        uint dnaModulus = 10 ** dnaDigits;
        struct Zombie {
            string name;
            uint dna;
        }
        Zombie[] public zombies;
        mapping (uint => address) public zombieToOwner;
        mapping (address => uint) ownerZombieCount;
        function _createZombie(string _name, uint _dna) private {
            uint id = zombies.push(Zombie(_name, _dna)) - 1;
            // 在mapping中加入/更新键值对
            zombieToOwner[id] = msg.sender;
            ownerZombieCount[msg.sender]++;
            NewZombie(id, _name, _dna);
        }
        function _generateRandomDna(string _str) private view returns (uint) {
            uint rand = uint(keccak256(_str));
            return rand % dnaModulus;
        }
        function createRandomZombie(string _name) public {
            uint randDna = _generateRandomDna(_name);
            _createZombie(_name, randDna);
        }
    }
    ```

### 3. require与分割代码

---

- require: 使得函数在执行过程中, 当不满足某些条件时抛出错误, 并停止执行.

  ```java
  ...
      function createRandomZombie(string _name) public {
          // 要求只能创建一只
          require(ownerZombieCount[msg.sender] == 0);
          uint randDna = _generateRandomDna(_name);
          _createZombie(_name, randDna);
      }
  ...
  ```

- 继承: 当代码过于冗长的时候, 最好将代码和逻辑分拆到多个不同的合约中, 以便于管理. 子合约内可以访问父合约内的public方法.

  ```java
  ...
  // 继承ZombieFactory
  contract ZombieFeeding is ZombieFactory {

  }
  ```

- import: 当你有多个文件并且想把一个文件导入另一个文件时, 可以使用 import 语句.

  ```java
  import "./zombiefactory.sol";

  contract ZombieFeeding is ZombieFactory {

  }
  ```

### 4. storage与memory

---

- storage与memory: Storage变量是指永久存储在区块链中的变量; Memory变量则是临时的, 当外部函数对某合约调用完成时, 内存型变量即被移除. 大多数时候都用不到这些关键字, 默认情况下Solidity和IDE会自动处理它们, 或者给你一些提醒.

  示例:
  ```java
  // Sandwich mySandwich = sandwiches[_index];

  // ^ 看上去很直接，不过Solidity将会给出警告
  // 告诉你应该明确在这里定义 `storage` 或者 `memory`。

  // 所以你应该明确定义 `storage`:
  Sandwich storage mySandwich = sandwiches[_index];
  // ...这样 `mySandwich` 是指向合约状态里`sandwiches[_index]`的指针

  // 如果你只想要一个副本，可以使用`memory`:
  Sandwich memory anotherSandwich = sandwiches[_index + 1];

  // 不过你可以这样做, 直接把副本的改动保存回区块链存储:
  sandwiches[_index + 1] = anotherSandwich;
  ```

  ```java
  pragma solidity ^0.4.19;

  import "./zombiefactory.sol";

  contract ZombieFeeding is ZombieFactory {

    function feedAndMultiply(uint _zombieId, uint _targetDna) public {
      require(msg.sender == zombieToOwner[_zombieId]);
      Zombie storage myZombie = zombies[_zombieId];
      // start here
    }

  }
  ```

### 5. 函数的高级操作

- 完善ZombieBreeding

  ```java
  pragma solidity ^0.4.19;

  import "./zombiefactory.sol";

  contract ZombieFeeding is ZombieFactory {
    function feedAndMultiply(uint _zombieId, uint _targetDna) public {
      require(msg.sender == zombieToOwner[_zombieId]);
      Zombie storage myZombie = zombies[_zombieId];
      // 拿到继承的myZombie的DNA, 并且计算出新Zombie的DNA, 生成Zombie.
      _targetDna = _targetDna % dnaModulus;
      uint newDna = (myZombie.dna + _targetDna) / 2;
      _createZombie("NoName", newDna);
    }
  }
  ```

- internal:如果某个合约继承自其父合约, 这个合约即可以访问父合约中定义的“内部”函数, private访问不到.

  ```java
  ...
      // 修改可见性为internal
      function _createZombie(string _name, uint _dna) internal {
          uint id = zombies.push(Zombie(_name, _dna)) - 1;
          zombieToOwner[id] = msg.sender;
          ownerZombieCount[msg.sender]++;
          NewZombie(id, _name, _dna);
      }
  ...
  ```

- external: 与public类似, 只不过这些函数只能在合约之外调用.

### 6. ~~嘉然~~僵尸今天吃什么

- ~~嘉然🤤~~僵尸最喜欢吃的是cryptokitties! 我们现在需要让我们的合约与cryptokitties的合约产生交互, 读取它的数据.

  ```java
  // 定义Kitty接口, 复制getKitty的内容.
  contract KittyInterface {
    function getKitty(uint256 _id) external view returns (
      bool isGestating,
      bool isReady,
      uint256 cooldownIndex,
      uint256 nextActionAt,
      uint256 siringWithId,
      uint256 birthTime,
      uint256 matronId,
      uint256 sireId,
      uint256 generation,
      uint256 genes
    );
  }
  ```

- 接下去在我们的合约中调用这个接口.

  ```java
  contract ZombieFeeding is ZombieFactory {
    address ckAddress = 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d;
    // 通过给的地址, 初始化kittyContract
    KittyInterface kittyContract = KittyInterface(ckAddress)
  ```

- 处理getKitty接口的多个返回值.

示例:
```java
function multipleReturns() internal returns(uint a, uint b, uint c) {
  return (1, 2, 3);
}

function processMultipleReturns() external {
  uint a;
  uint b;
  uint c;
  (a, b, c) = multipleReturns();
}

// 或者如果我们只想返回其中一个变量:
function getLastReturnValue() external {
  uint c;
  (,,c) = multipleReturns();
}
```

```java
...
  function feedOnKitty(uint _zombieId, uint _kittyId) public {
      // 定义一个kittyDna.
      uint kittyDna;
      // 将返回的最后一个值赋给kittyDna.
      (,,,,,,,,,kittyDna) = kittyContract.getKitty(_kittyId);
      // 传入到feedAndMultiply.
      feedAndMultiply(_zombieId, kittyDna);
  }
...
```

## 第三课: 高级Solidity理论

Code is Law. 你所编译的智能合约会永久存储在以太坊上, 所以安全性和有效性是极其重要的.

### 1. 可持续性和安全性

- 我们使用了cryptokitties的合约地址, 但如果cryptokitties没了, 那我们的应用也会无法运行.

  ```java
  contract ZombieFeeding is ZombieFactory {
    KittyInterface kittyContract;
    // setKittyContractAddress运行时再设定cryptokitties的地址
    function setKittyContractAddress(address _address) external {
      kittyContract = KittyInterface(_address);
    }
  ```

- onlyOwner: 设定external函数为只能由主人调用.

  ```java
  // 导入openZepplin库的Ownable合约
  import "./ownable.sol";

  contract ZombieFactory is Ownable {
  ```

  ```java
  // modifier onlyOwner() {
  //  require(msg.sender == owner);
  //  _;
  // }
  // 设置函数为只有主人才能调用.
    function setKittyContractAddress(address _address) external onlyOwner {
      kittyContract = KittyInterface(_address);
    }
  ```

> 未完待续

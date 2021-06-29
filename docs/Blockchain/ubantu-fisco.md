---
sidebar_label: 'Ubantu搭建Fisco BcoS区块链'
sidebar_position: 2
---
# 搭建FISCO BCOS区块链网络(Ubuntu 16.04 64bit)

## 1. 搭建单群组四节点FISCO BCOS联盟链

使用开发部署工具build_chain.sh脚本快速搭建FISCO BCOS区块链, 本次以Ubuntu 16.04 64bit系统为例操作.

部署工具build_chain脚本目标是让用户最快地搭建，对于企业级应用部署FISCO BCOS请参考运维部署工具.

官方推荐下载预编译程序进行使用. 同时提供[Docker程序与未编译源码](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/manual/get_executable.html).


> ARM架构linux与X86架构macOS需要自行编译, ARM架构macOS暂未适配.
>
> CentOS系统下openssl默认路径在开始搭建时可能会出现路径错误.
>
> 推荐新手开发者使用Ubuntu平台搭建.

---
### 第一步: 安装依赖

- 使用build_chain.sh脚本需要先安装openssl与curl.
  因此先安装这两个依赖.

```
sudo apt install -y openssl curl
```

---
### 第二步: 创建目录, 下载脚本

- 首先创建fisco目录, 并且进入刚创建的目录.

```
cd ~ && mkdir -p fisco && cd fisco
```

- 通过curl下载build_chain.sh脚本

```
curl -#LO https://github.com/FISCO-BCOS/FISCO-BCOS/releases/download/v2.7.2/build_chain.sh && chmod u+x build_chain.sh
```

> 如果因为网络问题无法正常下载, 可以尝试更换链接
> `curl -#LO https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/FISCO-BCOS/FISCO-BCOS/releases/v2.7.2/build_chain.sh && chmod u+x build_chain.sh`

---
### 第三步: 搭建联盟链

注意要确保机器的30300~30303，20200~20203，8545~8548端口没有被占用, 否则会导致后续无法成功搭建.

- 在fisco目录下执行指令, 生成一条单群组4节点的FISCO链.

```
bash build_chain.sh -l 127.0.0.1:4 -p 30300,20200,8545
```

> -p选项为起始端口, 30300为p2p_port, 20200为channel_port, 8545为jsonrpc_port.
> 更多搭建时的选项可以参考[开发部署工具](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/manual/build_chain.html).

命令执行成功会在最后一行显示`[INFO] All completed. Files in /home/ubuntu/fisco/nodes`

---
### 第四步: 启动节点

- 通过脚本启动所有所有节点

```
bash nodes/127.0.0.1/start_all.sh
```

四个节点均启动成功时会显示
> try to start node0
>
> try to start node1
>
> try to start node2
>
> try to start node3
>
> node0 start successfully
>
> node1 start successfully
>
> node2 start successfully
>
> node3 start successfully

- 验证节点是否被成功启动

```
ps -ef | grep -v grep | grep fisco-bcos
```
> 若显示四行数据, 则FISCO BCOS链成功启动

---
### 第五步: 检查日志输出

- 查看节点链接的其他节点个数

```
tail -f nodes/127.0.0.1/node0/log/log*  | grep connected
```

如果输出正常中每十秒会弹出一行信息.

> info|2021-06-25 09:06:04.855163|[P2P][Service] heartBeat,connected count=3
>
> info|2021-06-25 09:06:14.859185|[P2P][Service] heartBeat,connected count=3
>
> info|2021-06-25 09:06:24.863178|[P2P][Service] heartBeat,connected count=3

输出中可以看到第0个节点与其他3个节点相连.

如果检查其他节点, 输出信息相同.

- 检查链中是否存在共识

```
tail -f nodes/127.0.0.1/node0/log/log*  | grep +++
```

如果共识正常会弹出如下信息.

> info|2021-06-25 08:59:58.199388|[g:1][CONSENSUS][SEALER]++++++++++++++++ Generating seal on,blkNum=1,tx=0,nodeIdx=2,hash=c7e899af...
>
> info|2021-06-25 09:08:20.095493|[g:1][CONSENSUS][SEALER]++++++++++++++++ Generating seal on,blkNum=1,tx=0,nodeIdx=2,hash=fbe312af...
>
> info|2021-06-25 09:08:24.135362|[g:1][CONSENSUS][SEALER]++++++++++++++++ Generating seal on,blkNum=1,tx=0,nodeIdx=2,hash=6e7ef1a2...

## 2. 配置与使用控制台

---
### 第一步: 准备控制台依赖

我们通过脚本下载的程序为最新版本.
2.6版本之后的控制台均用Java SDK实现.

新版控制台文档参考[此处](https://fisco-bcos-documentation.readthedocs.io/zh_CN/latest/docs/console/console_of_java_sdk.html).

- 安装Java

```
sudo apt install -y default-jdk
```

- 回到fisco目录并且下载并运行download_console的脚本

```
cd ~/fisco && curl -LO https://github.com/FISCO-BCOS/console/releases/download/v2.7.2/download_console.sh && bash download_console.sh
```

> 如果因为网络问题无法正常下载, 可以尝试将中间的链接替换为
> `curl -#LO https://gitee.com/FISCO-BCOS/console/raw/master/tools/download_console.sh`

- 将默认的控制台配置拷贝到对应的路径与名称
```
cp -n console/conf/config-example.toml console/conf/config.toml
```

- 将控制台证书拷贝到对应路径
```
cp -r nodes/127.0.0.1/sdk/* console/conf/
```

---
### 第二步: 启动并使用控制台

- 进入控制台路径并启动控制台

```
cd ~/fisco/console && bash start.sh
```

控制台启动成功后会显示版本号以及由$符号组成的ASCII art
> Welcome to FISCO BCOS console(2.7.2)!

- 在控制台中获取信息

```
===================================================
[group:1]> getNodeVersion
ClientVersion{
    version='2.7.2',
    supportedVersion='2.7.2',
    chainId='1',
    buildTime='20210201 10:03:03',
    buildType='Linux/clang/Release',
    gitBranch='HEAD',
    gitCommitHash='4c8a5bbe44c19db8a002017ff9dbb16d3d28e9da'
}

[group:1]> getPeers
[
    PeerInfo{
        nodeID='6d9f62cea16879e16ffe4004c64fa717b62c3853c915f79306972da0dac4133f25b97bedfe522d982a3fd606c2ac90ef085a45f1786ea1e5dbd4ad8fdd57b97e',
        iPAndPort='127.0.0.1:50050',
        node='node3',
        agency='agency',
        topic='[
            
        ]'
    },
    PeerInfo{
        nodeID='fae1c9ff63b77de57759555d0cfcf01f43db418f7d75ecc969c1262364b3d6ae0d53ae92e05adf259e4a56f91369d66ca29c4e9c4e8a6342d23bbdcd9e2fb4ab',
        iPAndPort='127.0.0.1:50042',
        node='node1',
        agency='agency',
        topic='[
            _block_notify_1
        ]'
    },
    PeerInfo{
        nodeID='4fd5a7d73b3f002e76c2e1adbcbdbc0903197a2a10cf449ddc6507d33cd050e414b52aef9d5444f9206aec2cfc0d976e235b10fd9d4fa56c8168e59a6b234ada',
        iPAndPort='127.0.0.1:30302',
        node='node2',
        agency='agency',
        topic='[
            
        ]'
    }
]
```

## 3. 部署并调用HelloWorld的智能合约
---
### 第一步: 部署合约

- 为了方便用户快速体验, HelloWorld的合约已经内置于控制台中, 位于控制台目录下contracts/solidity/HelloWorld.sol. 我们直接部署HelloWorld合约.

```
deploy HelloWorld
```

合约具体内容为:
```
pragma solidity ^0.4.24;

contract HelloWorld {
    // 声明变量name
    string name;
    
    // 将name值更新为Hello, World!
    function HelloWorld() {
        name = "Hello, World!";
    }
    
    // 调用get方法时返回name的值
    function get()constant returns(string) {
        return name;
    }

    // 调用set方法时修改name的值为n
    function set(string n) {
        name = n;
    }
}
```

部署成功后会返回合约地址:
> transaction hash: 0x24d98970eb355755f66f8b5e8ba4b94a1e69de0ef53fdff9f0a011ce4c57bdaa
>
> contract address: {address hash}
>
> currentAccount: 0xe6925c66ad07d894f066a2229addb2b350d373c3

- 查看当前区块高度, 调用get接口获取name变量

```
[group:1]> getBlockNumber
1

[group:1]> call HelloWorld {address hash} get
---------------------------------------------------------------------------------------------
Return code: 0
description: transaction executed successfully
Return message: Success
---------------------------------------------------------------------------------------------
Return value size:1
Return types: (STRING)
Return values:(Hello, World!)
---------------------------------------------------------------------------------------------

[group:1]> getBlockNumber
1
```

get接口不会改变账本状态, 所以调用之后区块高度仍然为1.

- 调用set接口设置name变量

```
[group:1]> call HelloWorld {address hash} set "Hello, Fisco BcoS"
transaction hash: 0x08e2f53419d1e327aa38fa3ce3d6e529927e4f2bac05bea757406b27bf122f1d
---------------------------------------------------------------------------------------------
transaction status: 0x0
description: transaction executed successfully
---------------------------------------------------------------------------------------------
Receipt message: Success
Return message: Success
Return values:[]
---------------------------------------------------------------------------------------------
Event logs
Event: {}

[group:1]> getBlockNumber
2

[group:1]> call HelloWorld {address hash} get
---------------------------------------------------------------------------------------------
Return code: 0
description: transaction executed successfully
Return message: Success
---------------------------------------------------------------------------------------------
Return value size:1
Return types: (STRING)
Return values:(Hello, Fisco BcoS)
---------------------------------------------------------------------------------------------
```

再次查看区块高度会发现高度已改变, 再次调用get接口发现返回值已经修改为我们set的值.

# FISCO BCOS区块链简易的资产管理的开发全过程

我们将会开发一个简易的资产管理的系统，并最终实现以下功能：
- 能够在区块链上进行资产账户注册
- 能够实现不同账户之间的转账
- 可以查询账户的资产金额


---
### 第一步: 应用程序设计

- **存储设计:**

针对需要实现的功能, 本应用需要设计存储资产管理的表t_asset. 内容如下:

| account | asset_value |
| ------  | ----------- |
|  Alex   |    1000     |
|  Bob    |    2000     |

- **接口设计:**

按照业务的设计目标，需要实现资产注册，转账，查询资产金额功能，对应功能的接口如下:

```
// 查询账户的资产金额
   return值一： 成功找到账户返回0, 账户不存在返回-1
   return值二： 资产金额(第一个参数为0时有效)
function select(string account) public constant returns(int256, uint256)
// 资产账户注册
   0  资产账户注册成功
   -1 资产账户已存在
   -2 其他错误
function register(string account, uint256 amount) public returns(int256)
// 账户间的资产转移
   返回值：
   0  资产转移成功
   -1 转移资产账户不存在
   -2 接收资产账户不存在
   -3 金额不足
   -4 金额溢出
   -5 其他错误
function transfer(string from_asset_account, string to_asset_account, uint256 amount) public returns(int256)
```

---
### 第二步: 开发接口源码

- 编写智能合约
```
// 进入console/contracts/solidity目录
cd ~/fisco/console/contracts/solidity
// 创建Asset.sol合约文件, 进入文件的编写
vi Asset.sol

// 将合约内容写入Asset.sol文件.
// ** 重要: vim中保存退出为:wq **
```

Assert.sol的内容如下:
```
pragma solidity ^0.4.24;

// Table.sol已在~/fisco/console/contracts/solidity目录下.
// 该系统合约文件中的接口由FISCO BCOS底层实现.
// 当业务合约需要操作CRUD接口时，均需要引入该接口合约文件.
import "./Table.sol";

contract Asset {
    event RegisterEvent(int256 ret, string account, uint256 asset_value);
    event TransferEvent(int256 ret, string from_account, string to_account, uint256 amount);

    constructor() public {
        // 构造函数中创建t_asset表
        createTable();
    }

    function createTable() private {
        TableFactory tf = TableFactory(0x1001);
        // 资产管理表, key : account, field : asset_value
        // |      资产账户(key)   |   资产金额(field)   |
        // |-------------------- |-------------------|
        // |        account      |    asset_value    |
        // |---------------------|-------------------|
        tf.createTable("t_asset", "account", "asset_value");
    }

    function openTable() private returns(Table) {
        TableFactory tf = TableFactory(0x1001);
        Table table = tf.openTable("t_asset");
        return table;
    }

    /*
    描述 : 根据资产账户查询资产金额
    参数 ：
            account : 资产账户
    返回值：
            参数一： 成功找到账户返回0, 账户不存在返回-1
            参数二： 资产金额(第一个参数为0时有效)
    */
    function select(string account) public constant returns(int256, uint256) {
        // 打开表
        Table table = openTable();
        // 查询
        Entries entries = table.select(account, table.newCondition());
        uint256 asset_value = 0;
        if (0 == uint256(entries.size())) {
            return (-1, asset_value);
        } else {
            Entry entry = entries.get(0);
            return (0, uint256(entry.getInt("asset_value")));
        }
    }

    /*
    描述 : 资产注册
    参数 ：
            account : 资产账户
            amount  : 资产金额
    返回值：
            0  资产账户注册成功
            -1 资产账户已存在
            -2 其他错误
    */
    function register(string account, uint256 asset_value) public returns(int256){
        int256 ret_code = 0;
        int256 ret= 0;
        uint256 temp_asset_value = 0;
        // 查询账户是否存在
        (ret, temp_asset_value) = select(account);
        if(ret != 0) {
            Table table = openTable();

            Entry entry = table.newEntry();
            entry.set("account", account);
            entry.set("asset_value", int256(asset_value));
            // 插入
            int count = table.insert(account, entry);
            if (count == 1) {
                // 成功
                ret_code = 0;
            } else {
                // 失败? 无权限或者其他错误
                ret_code = -2;
            }
        } else {
            // 账户已存在
            ret_code = -1;
        }

        emit RegisterEvent(ret_code, account, asset_value);

        return ret_code;
    }

    /*
    描述 : 资产转移
    参数 ：
            from_account : 转移资产的账户
            to_account ： 接收资产的账户
            amount ： 转移金额数量
    返回值：
            0  资产转移成功
            -1 转移资产账户不存在
            -2 接收资产账户不存在
            -3 金额不足
            -4 金额溢出
            -5 其他错误
    */
    function transfer(string from_account, string to_account, uint256 amount) public returns(int256) {
        // 查询转移资产账户信息
        int ret_code = 0;
        int256 ret = 0;
        uint256 from_asset_value = 0;
        uint256 to_asset_value = 0;

        // 转移账户是否存在?
        (ret, from_asset_value) = select(from_account);
        if(ret != 0) {
            ret_code = -1;
            // 转移账户不存在
            emit TransferEvent(ret_code, from_account, to_account, amount);
            return ret_code;

        }

        // 接受账户是否存在?
        (ret, to_asset_value) = select(to_account);
        if(ret != 0) {
            ret_code = -2;
            // 接收资产的账户不存在
            emit TransferEvent(ret_code, from_account, to_account, amount);
            return ret_code;
        }

        if(from_asset_value < amount) {
            ret_code = -3;
            // 转移资产的账户金额不足
            emit TransferEvent(ret_code, from_account, to_account, amount);
            return ret_code;
        }

        if (to_asset_value + amount < to_asset_value) {
            ret_code = -4;
            // 接收账户金额溢出
            emit TransferEvent(ret_code, from_account, to_account, amount);
            return ret_code;
        }

        Table table = openTable();

        Entry entry0 = table.newEntry();
        entry0.set("account", from_account);
        entry0.set("asset_value", int256(from_asset_value - amount));
        // 更新转账账户
        int count = table.update(from_account, entry0, table.newCondition());
        if(count != 1) {
            ret_code = -5;
            // 失败? 无权限或者其他错误?
            emit TransferEvent(ret_code, from_account, to_account, amount);
            return ret_code;
        }

        Entry entry1 = table.newEntry();
        entry1.set("account", to_account);
        entry1.set("asset_value", int256(to_asset_value + amount));
        // 更新接收账户
        table.update(to_account, entry1, table.newCondition());

        emit TransferEvent(ret_code, from_account, to_account, amount);

        return ret_code;
    }
}
```

- 保存并退出后运行ls, 可以看到Assert.sol和Table.sol.

---
### 第三步: 编译智能合约

控制台提供的编译工具可以编译出ABI和BIN文件, 使得.sol文件可以部署到区块链上.

同时还会自动生成一个与编译的智能合约同名的根据ABI生成的合约Java类.
这个Java类帮助用户解析好了参数, 提供同名的方法.

当应用需要部署和调用合约时, 可以直接调用该合约类的对应方法, 传入指定参数即可.

- 编译合约
```
// 切换到fisco/console/目录
cd ~/fisco/console/

// 编译合约, 指定Java的包名参数
./sol2java.sh org.fisco.bcos.asset.contract
```

运行成功后会显示`INFO: Compile for solidity TableTest.sol success.`

---
### 第四步: 创建区块链应用项目

> 本步骤项目源码可以通过如下命令直接获得, 获得后可以直接跳过本步骤:
> ```
> cd ~/fisco
> 
> curl -#LO https://github.com/FISCO-BCOS/LargeFiles/raw/master/tools/asset-app.tar.gz
> 
> # 解压得到Java工程项目asset-app
> tar -zxf asset-app.tar.gz
> ```

1. 安装Java与IDE

在开发环境下载Java JDK 14(JDK1.8 至JDK 14都支持); 下载IntelliJ IDE.

2. 创建Java工程

在IntelliJ IDE中创建一个新项目, 选择Gradle, 勾选Java, 输入工程名.

3. 引入Java SDK

在build.gradle文件中替换repositories, 加入Java SDK的引用.

```
repositories {
    mavenCentral()
    maven {
        url "http://maven.aliyun.com/nexus/content/groups/public/"
    }
    maven { url "https://oss.sonatype.org/content/repositories/snapshots" }
}
```

将dependencies替换, 引入Java SDK jar包.
```
dependencies {
    testCompile group: 'junit', name: 'junit', version: '4.12'
    compile ('org.fisco-bcos.java-sdk:fisco-bcos-java-sdk:2.7.2')
}
```

4. 配置SDK证书

- 修改build.gradle文件, 引入Spring框架.
```
// 加入
def spring_version = "4.3.27.RELEASE"
List spring = [
        "org.springframework:spring-core:$spring_version",
        "org.springframework:spring-beans:$spring_version",
        "org.springframework:spring-context:$spring_version",
        "org.springframework:spring-tx:$spring_version",
]

//替换
dependencies {
    testCompile group: 'junit', name: 'junit', version: '4.12'
    compile ("org.fisco-bcos.java-sdk:fisco-bcos-java-sdk:2.7.2")
    compile spring
}
```

- 在`asset-app/test/resources`目录下创建配置文件`applicationContext.xml`, 写入配置内容(如下).

```
<?xml version="1.0" encoding="UTF-8" ?>

<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-4.0.xsd">
    <bean id="defaultConfigProperty" class="org.fisco.bcos.sdk.config.model.ConfigProperty">
        <property name="cryptoMaterial">
            <map>
                <entry key="certPath" value="conf" />
            </map>
        </property>
        <property name="network">
            <map>
                <entry key="peers">
                    <list>
                        <value>127.0.0.1:20200</value>
                        <value>127.0.0.1:20201</value>
                    </list>
                </entry>
            </map>
        </property>
        <property name="account">
            <map>
                <entry key="keyStoreDir" value="account" />
                <entry key="accountAddress" value="" />
                <entry key="accountFileFormat" value="pem" />
                <entry key="password" value="" />
                <entry key="accountFilePath" value="" />
            </map>
        </property>
        <property name="threadPool">
            <map>
                <entry key="channelProcessorThreadSize" value="16" />
                <entry key="receiptProcessorThreadSize" value="16" />
                <entry key="maxBlockingQueueSize" value="102400" />
            </map>
        </property>
    </bean>

    <bean id="defaultConfigOption" class="org.fisco.bcos.sdk.config.ConfigOption">
        <constructor-arg name="configProperty">
            <ref bean="defaultConfigProperty"/>
        </constructor-arg>
    </bean>

    <bean id="bcosSDK" class="org.fisco.bcos.sdk.BcosSDK">
        <constructor-arg name="configOption">
            <ref bean="defaultConfigOption"/>
        </constructor-arg>
    </bean>
</beans>
```

- 我们指定了证书存放的位certPath的值为`conf`, 接下去我们把SDK用于连接节点的证书放到指定的`conf`目录下. 如果路径不相同, 需要自行调整.

```
# 假设我们将asset-app放在~/fisco目录下 进入~/fisco目录
$ cd ~/fisco
# 创建放置证书的文件夹
$ mkdir -p asset-app/src/test/resources/conf
# 拷贝节点证书到项目的资源目录
$ cp -r nodes/127.0.0.1/sdk/* asset-app/src/test/resources/conf
# 若在IDE直接运行，拷贝证书到resources路径
$ mkdir -p asset-app/src/main/resources/conf
$ cp -r nodes/127.0.0.1/sdk/* asset-app/src/main/resources/conf
```

5. 业务逻辑开发

- 通过3中的编译配置进行编译, 将合约引入到项目中.

```
cd ~/fisco
cp console/contracts/sdk/java/org/fisco/bcos/asset/contract/Asset.java asset-app/src/main/java/org/fisco/bcos/asset/contract/Asset.java
```

- 开发业务逻辑

在`/src/main/java/org/fisco/bcos/asset/client`目录下，创建`AssetClient.java`类，调用`Asset.java`实现对合约的部署与调用.

`AssetClient.java`:
```
package org.fisco.bcos.asset.client;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.util.List;
import java.util.Properties;
import org.fisco.bcos.asset.contract.Asset;
import org.fisco.bcos.sdk.BcosSDK;
import org.fisco.bcos.sdk.abi.datatypes.generated.tuples.generated.Tuple2;
import org.fisco.bcos.sdk.client.Client;
import org.fisco.bcos.sdk.crypto.keypair.CryptoKeyPair;
import org.fisco.bcos.sdk.model.TransactionReceipt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

public class AssetClient {
    static Logger logger = LoggerFactory.getLogger(AssetClient.class);

    private BcosSDK bcosSDK;
    private Client client;
    private CryptoKeyPair cryptoKeyPair;

    public void initialize() throws Exception {
        // 初始化BcoS的SDK
        @SuppressWarnings("resource")
        ApplicationContext context =
                new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
        bcosSDK = context.getBean(BcosSDK.class);
        // 初始化可向群组1发交易的Client
        client = bcosSDK.getClient(1);
        // 随机生成发送交易的公钥与私钥, 并且匹配给Client
        cryptoKeyPair = client.getCryptoSuite().createKeyPair();
        client.getCryptoSuite().setCryptoKeyPair(cryptoKeyPair);
        logger.debug("create client for group1, account address is " + cryptoKeyPair.getAddress());
    }

    public void deployAssetAndRecordAddr() {

        try {
            // 初次部署合约
            Asset asset = Asset.deploy(client, cryptoKeyPair);
            System.out.println(
                    " deploy Asset success, contract address is " + asset.getContractAddress());

            recordAssetAddr(asset.getContractAddress());
        } catch (Exception e) {
            System.out.println(" deploy Asset contract failed, error message is  " + e.getMessage());
        }
    }

    public void recordAssetAddr(String address) throws FileNotFoundException, IOException {
        Properties prop = new Properties();
        prop.setProperty("address", address);
        final Resource contractResource = new ClassPathResource("contract.properties");
        FileOutputStream fileOutputStream = new FileOutputStream(contractResource.getFile());
        prop.store(fileOutputStream, "contract address");
    }

    public String loadAssetAddr() throws Exception {
        // load Asset contact address from contract.properties
        Properties prop = new Properties();
        final Resource contractResource = new ClassPathResource("contract.properties");
        prop.load(contractResource.getInputStream());

        String contractAddress = prop.getProperty("address");
        if (contractAddress == null || contractAddress.trim().equals("")) {
            throw new Exception(" load Asset contract address failed, please deploy it first. ");
        }
        logger.info(" load Asset address from contract.properties, address is {}", contractAddress);
        return contractAddress;
    }

    public void queryAssetAmount(String assetAccount) {
        try {
            // 已知合约地址或已部署合约时加载合约
            String contractAddress = loadAssetAddr();
            Asset asset = Asset.load(contractAddress, client, cryptoKeyPair);
            // 调用select接口
            Tuple2<BigInteger, BigInteger> result = asset.select(assetAccount);
            if (result.getValue1().compareTo(new BigInteger("0")) == 0) {
                System.out.printf(" asset account %s, value %s \n", assetAccount, result.getValue2());
            } else {
                System.out.printf(" %s asset account is not exist \n", assetAccount);
            }
        } catch (Exception e) {
            logger.error(" queryAssetAmount exception, error message is {}", e.getMessage());

            System.out.printf(" query asset account failed, error message is %s\n", e.getMessage());
        }
    }

    public void registerAssetAccount(String assetAccount, BigInteger amount) {
        try {
            String contractAddress = loadAssetAddr();

            Asset asset = Asset.load(contractAddress, client, cryptoKeyPair);
            // 调用register接口
            TransactionReceipt receipt = asset.register(assetAccount, amount);
            List<Asset.RegisterEventEventResponse> response = asset.getRegisterEventEvents(receipt);
            if (!response.isEmpty()) {
                if (response.get(0).ret.compareTo(new BigInteger("0")) == 0) {
                    System.out.printf(
                            " register asset account success => asset: %s, value: %s \n", assetAccount, amount);
                } else {
                    System.out.printf(
                            " register asset account failed, ret code is %s \n", response.get(0).ret.toString());
                }
            } else {
                System.out.println(" event log not found, maybe transaction not exec. ");
            }
        } catch (Exception e) {
            logger.error(" registerAssetAccount exception, error message is {}", e.getMessage());
            System.out.printf(" register asset account failed, error message is %s\n", e.getMessage());
        }
    }

    public void transferAsset(String fromAssetAccount, String toAssetAccount, BigInteger amount) {
        try {
            String contractAddress = loadAssetAddr();
            Asset asset = Asset.load(contractAddress, client, cryptoKeyPair);
            // 调用transfer接口
            TransactionReceipt receipt = asset.transfer(fromAssetAccount, toAssetAccount, amount);
            List<Asset.TransferEventEventResponse> response = asset.getTransferEventEvents(receipt);
            if (!response.isEmpty()) {
                if (response.get(0).ret.compareTo(new BigInteger("0")) == 0) {
                    System.out.printf(
                            " transfer success => from_asset: %s, to_asset: %s, amount: %s \n",
                            fromAssetAccount, toAssetAccount, amount);
                } else {
                    System.out.printf(
                            " transfer asset account failed, ret code is %s \n", response.get(0).ret.toString());
                }
            } else {
                System.out.println(" event log not found, maybe transaction not exec. ");
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            // e.printStackTrace();

            logger.error(" registerAssetAccount exception, error message is {}", e.getMessage());
            System.out.printf(" register asset account failed, error message is %s\n", e.getMessage());
        }
    }

    public static void Usage() {
        System.out.println(" Usage:");
        System.out.println(
                "\t java -cp conf/:lib/*:apps/* org.fisco.bcos.asset.client.AssetClient deploy");
        System.out.println(
                "\t java -cp conf/:lib/*:apps/* org.fisco.bcos.asset.client.AssetClient query account");
        System.out.println(
                "\t java -cp conf/:lib/*:apps/* org.fisco.bcos.asset.client.AssetClient register account value");
        System.out.println(
                "\t java -cp conf/:lib/*:apps/* org.fisco.bcos.asset.client.AssetClient transfer from_account to_account amount");
        System.exit(0);
    }

    public static void main(String[] args) throws Exception {
        if (args.length < 1) {
            Usage();
        }

        AssetClient client = new AssetClient();
        client.initialize();

        switch (args[0]) {
            case "deploy":
                client.deployAssetAndRecordAddr();
                break;
            case "query":
                if (args.length < 2) {
                    Usage();
                }
                client.queryAssetAmount(args[1]);
                break;
            case "register":
                if (args.length < 3) {
                    Usage();
                }
                client.registerAssetAccount(args[1], new BigInteger(args[2]));
                break;
            case "transfer":
                if (args.length < 4) {
                    Usage();
                }
                client.transferAsset(args[1], args[2], new BigInteger(args[3]));
                break;
            default:
            {
                Usage();
            }
        }
        System.exit(0);
    }

}
```

- 在`asset-app/tool`目录下添加一个调用`AssetClient`的脚本`asset_run.sh`. 内容如下:

```
#!/bin/bash 

function usage() 
{
    echo " Usage : "
    echo "   bash asset_run.sh deploy"
    echo "   bash asset_run.sh query    asset_account "
    echo "   bash asset_run.sh register asset_account asset_amount "
    echo "   bash asset_run.sh transfer from_asset_account to_asset_account amount "
    echo " "
    echo " "
    echo "examples : "
    echo "   bash asset_run.sh deploy "
    echo "   bash asset_run.sh register  Asset0  10000000 "
    echo "   bash asset_run.sh register  Asset1  10000000 "
    echo "   bash asset_run.sh transfer  Asset0  Asset1 11111 "
    echo "   bash asset_run.sh query Asset0"
    echo "   bash asset_run.sh query Asset1"
    exit 0
}

    case $1 in
    deploy)
            [ $# -lt 1 ] && { usage; }
            ;;
    register)
            [ $# -lt 3 ] && { usage; }
            ;;
    transfer)
            [ $# -lt 4 ] && { usage; }
            ;;
    query)
            [ $# -lt 2 ] && { usage; }
            ;;
    *)
        usage
            ;;
    esac

    java -Djdk.tls.namedGroups="secp256k1" -cp 'apps/*:conf/:lib/*' org.fisco.bcos.asset.client.AssetClient $@
```

- 在`asset-app/test/resources`目录下创建`log4j.properties`. 内容如下:
```
### set log levels ###
log4j.rootLogger=DEBUG, file

### output the log information to the file ###
log4j.appender.file=org.apache.log4j.DailyRollingFileAppender
log4j.appender.file.DatePattern='_'yyyyMMddHH'.log'
log4j.appender.file.File=./log/sdk.log
log4j.appender.file.Append=true
log4j.appender.file.filter.traceFilter=org.apache.log4j.varia.LevelRangeFilter
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=[%p] [%-d{yyyy-MM-dd HH:mm:ss}] %C{1}.%M(%L) | %m%n

###output the log information to the console ###
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=[%p] [%-d{yyyy-MM-dd HH:mm:ss}] %C{1}.%M(%L) | %m%n
```

- 修改build.gradle文件中的编译任务.
```
dependencies {
    testCompile group: 'junit', name: 'junit', version: '4.12'
    compile ("org.fisco-bcos.java-sdk:fisco-bcos-java-sdk:2.7.2")
    compile spring
    compile ('org.slf4j:slf4j-log4j12:1.7.25')
    runtime ('org.slf4j:slf4j-log4j12:1.7.25')
}
```

- 配置添加build.gradle文件中的编译任务. 直接加入到底部即可.
```
jar {
    destinationDir file('dist/apps')
    archiveName project.name + '.jar'
    exclude '**/*.xml'
    exclude '**/*.properties'
    exclude '**/*.crt'
    exclude '**/*.key'

    doLast {
        copy {
            from configurations.runtime
            into 'dist/lib'
        }
        copy {
            from file('src/test/resources/')
            into 'dist/conf'
        }
        copy {
            from file('tool/')
            into 'dist/'
        }
        copy {
            from file('src/test/resources/contract')
            into 'dist/contract'
        }
    }
}
```

- 引入日志库, 在`asset-app/test/resources`目录下, 创建一个空的`contract.properties`文件, 用于应用在运行时存放合约地址.

6. 完成开发

最终的目录结构如下:

```
|-- build.gradle // gradle配置文件
|-- gradle
|   |-- wrapper
|       |-- gradle-wrapper.jar // 用于下载Gradle的相关代码实现
|       |-- gradle-wrapper.properties // wrapper所使用的配置信息，比如gradle的版本等信息
|-- gradlew // Linux或者Unix下用于执行wrapper命令的Shell脚本
|-- gradlew.bat // Windows下用于执行wrapper命令的批处理脚本
|-- src
|   |-- main
|   |   |-- java
|   |   |     |-- org
|   |   |          |-- fisco
|   |   |                |-- bcos
|   |   |                      |-- asset
|   |   |                            |-- client // 放置客户端调用类
|   |   |                                   |-- AssetClient.java
|   |   |                            |-- contract // 放置Java合约类
|   |   |                                   |-- Asset.java
|   |   |-- resources
|   |        |-- conf
|   |               |-- ca.crt
|   |               |-- node.crt
|   |               |-- node.key
|   |               |-- sdk.crt
|   |               |-- sdk.key
|   |               |-- sdk.publickey
|   |        |-- applicationContext.xml // 项目配置文件
|   |        |-- contract.properties // 存储部署合约地址的文件
|   |        |-- log4j.properties // 日志配置文件
|   |        |-- contract //存放solidity约文件
|   |                |-- Asset.sol
|   |                |-- Table.sol
|   |-- test
|       |-- resources // 存放代码资源文件
|           |-- conf
|                  |-- ca.crt
|                  |-- node.crt
|                  |-- node.key
|                  |-- sdk.crt
|                  |-- sdk.key
|                  |-- sdk.publickey
|           |-- applicationContext.xml // 项目配置文件
|           |-- contract.properties // 存储部署合约地址的文件
|           |-- log4j.properties // 日志配置文件
|           |-- contract //存放solidity约文件
|                   |-- Asset.sol
|                   |-- Table.sol
|
|-- tool
    |-- asset_run.sh // 项目运行脚本
```

7. 运行应用

- 部署应用
    - 编译项目
    ```
    cd ~/fisco/asset-app
    ./gradlew build
    ```

    - 部署`Asset.sol`合约
    ```
    # 进入dist目录
    cd dist
    bash asset_run.sh deploy
    ```

- 应用的主要功能:
    - 注册资产账户
    ```
    bash asset_run.sh register Foo 100000
    ```

    - 查询账户资产
    ```
    bash asset_run.sh query Foo
    ```

    - 转移账户资产
    ```
    bash asset_run.sh transfer Foo Bar  50000
    ```

以上就是全部内容.
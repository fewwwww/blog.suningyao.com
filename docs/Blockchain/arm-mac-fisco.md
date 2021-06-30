---
sidebar_label: 'Arm Mac搭建Fisco BcoS区块链'
sidebar_position: 3
---
# 搭建Fisco BsoC区块链网络(ARM架构macOS平台)

# 😅 TLDR: Fisco BsoC貌似暂不支持Arm架构的macOS (Fri Jun 25 2021 13:56:05 GMT+0800 (CST))
## 1. 搭建单群组FISCO BCOS联盟链

本节使用开发部署工具build_chain.sh脚本在本地搭建一条4节点的FISCO BCOS链, 以macOS arch64 11.4系统为例操作.

官方推荐下载预编译程序. 由于是ARM架构,因此**需要编译源码获取fisco-bcos可执行程序**
> 如果通过预编译程序进行搭建, 生成的FISCO链时会显示: `[ERROR] We only offer x86_64 precompiled fisco-bcos binary, your OS architecture is not x86_64. Please compile from source.`

### 第一步: 安装依赖

---

通过Homebrew进行依赖的安装.

```
brew install openssl git flex bison gmp cmake
```

> 由于有些依赖在更新前不支持ARM的macOS,会显示: `Error: git: no bottle available!`
>
> 所以需要先运行`brew update`来获取最新发布的ARM版本依赖, 再进行安装

### 第二步: 克隆源码

---

```
# 若网络良好
git clone https://github.com/FISCO-BCOS/FISCO-BCOS.git

# 若因为网络问题导致长时间无法执行上面的命令, 请尝试使用gitee源:
git clone https://gitee.com/FISCO-BCOS/FISCO-BCOS.git
```

由于文件较大, 下载耗时可能有些长.

### 第三步: 进行编译

---

> ⚠️: 从这一步开始, 由于cmake脚本未适配ARM架构Macbook, 因此无法正常运行.

```
cd FISCO-BCOS
mkdir -p build && cd build
cmake -DARCH_NATIVE=on ..
make -j4
# 如果编译过慢, 可以替换为make -j10同时开启十个任务加速构建
```

编译完成后二进制文件位于`FISCO-BCOS/build/bin/fisco-bcos`.

> 依赖库较大, 有400M左右, 如果因为网络问题导致长时间无法下载依赖库
>
> 请尝试通过 `git clone https://gitee.com/FISCO-BCOS/LargeFiles.git` 手动下载依赖库，将/libs内文件放在FISCO-BCOS/deps/src/
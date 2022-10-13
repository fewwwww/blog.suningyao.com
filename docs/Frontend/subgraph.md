# 🗺️ Subgraph 基本概念与开发

> 一个字废话都没有, 直接开干.

## 0. [The Graph](https://thegraph.com/docs/en/about/)

用处: 支持 GraphQL 模式的智能合约数据查询.

The Graph 架构如下:

![](/img/subgraph/graph.png)

两个重点:
- Graph Node:
```js
// 大的节点
const GraphNode = () => {
  // 从区块链那里抓了所有的数据的数据库
  const db = new DB()
  // 监听了链上的事件
  const listener = new Listener()
  // 有新的 event, call, block
  // 就按照 mapping 存
  listener.onNewEventCallBlock((block) => {
    block.transactions.forEach((tx) => {
      db.save(mapping(tx))
    })
  })
  // GraphQL 服务器
  const server = new GraphQLServer()
}
```
- Mapping:
```js
const Subgraph = () => {
  const Mapping = () => {
    // 根据 event 的 trigger
    // 把链上数据转换成 Graph Node 可识别数据
    const mapping = (tx, event) => {
      mapping.onNewEvent(tx, event) => {
        send(GraphNode, understandableData(tx))
      }
      mapping.onNewCall(tx, call) => {
        send(GraphNode, understandableData(tx))
      }
      mapping.onNewBlock(tx, block) => {
        send(GraphNode, understandableData(tx))
      }
    }
  }
  // ...
}
```

## 1. [Event & Log](https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378)

首先了解 Event 和 Log 的概念.

EVM 里有四个 LOG 操作码.

Solidity 中的 `emit` 就是触发 event 的关键字, 示例如下:

```js
pragma solidity 0.5.3;

contract ERC20 {
  // indexed 指之后可查询的字段.
  // 我们不会查/或者订阅金额为 xxx 的交易,
  // 所以不用 indexed.
  event Transfer(address indexed from, address indexed to, uint256 value);

  function transfer(address to, uint256 value) public {
    emit Transfer(msg.sender, to, value);
  }
}
```

好处: 廉价在链上存数据, 不用单独查合约.

## 2. [Subgraph](https://thegraph.academy/developers/defining-a-subgraph/)

作用: 定义在哪些事件触发的时候索引哪些合约的哪些链上数据，以及如何存储到 Graph Node.

三个重点文件:
- `subgraph.yaml`
- `schema.graphql`
- `mappings`

屁话不多说, 上代码.

### 1) `subgraph.yaml`

Subgraph 的配置文件.

重点在几个 handler 的配置: `eventHandlers`, `callHandlers`, `blockHandlers`, 和 `mapping.ts` 一一对应.

```yaml
specVersion: 0.0.1
description: Gravatar for Ethereum
repository: https://github.com/graphprotocol/example-subgraph
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: Gravity
    network: mainnet
    source:
      address: '0x2E645469f354BB4F5c8a05B3b30A929361cf77eC'
      abi: Gravity
      # !重点!
      startBlock: 6175244
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.1
      language: wasm/assemblyscript
      # !重点!
      entities:
        - Gravatar
      abis:
        - name: Gravity
          file: ./abis/Gravity.json
      # !重点!
      eventHandlers:
        - event: NewGravatar(uint256,address,string,string)
          handler: handleNewGravatar
        - event: UpdatedGravatar(uint256,address,string,string)
          handler: handleUpdatedGravatar
      callHandlers:
        - function: createGravatar(string,string)
          handler: handleCreateGravatar
      blockHandlers:
        - function: handleBlock
        - function: handleBlockWithCall
          filter:
            kind: call
      file: ./src/mapping.ts
```

handler 顺序: eventHandlers + callHandlers -> blockHandlers.

abi: 编译时或者 Etherscan 找.

### 2) `schema.graphql`

可以理解成单纯定义 GraphQL entity 数据类型的, 或者定义查询规则的. [文档](https://graphql.org/learn/schema/).

```js
type Gravatar @entity {
  id: ID!
  owner: Bytes!
  displayName: String!
  imageUrl: String!
}
```

最后用 `codegen` 生成 `schema.ts`, 用于 `mapping.ts`.

### 3) `mapping.ts`

用 AssemblyScript (TypeScript 子集) 写的.

定义了 handlers, 把这些链上数据通过 The Graph 的 API (store, load, log, crypto, IPFS...) 转换成 Graph Node 可识别的 entity 数据.

```ts
import { ... } from '../generated/Gravity/Gravity'
import { ... } from '../generated/schema'
import { ... } from '@graphprotocol/graph-ts'

// call handler
export function handleCreateGravatar(call: CreateGravatarCall): void {
  // ...
}

// event handler
export function handleNewGravatar(event: NewGravatar): void {
  // ...
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  // ...
}

// block handler
export function handleBlock(block: ethereum.Block): void {
  // ...
}
```

没了. 看不懂可以再看下[教程](https://www.bilibili.com/video/BV1wS4y1R76w/), 或者 Messari 写的示例, 或者 [ENS 的 Subgraph](https://github.com/ensdomains/ens-subgraph).

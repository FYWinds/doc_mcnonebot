---
title: 连接
icon: ph:plugs
---

## 介绍

本插件的连接方式主要为Websocket通信，可以存在0个至n个 [Websocket 连接](#websocket连接) 和 [反向 Websocket 连接](#反向websocket连接)


## Websocket连接

使用此连接方式时，插件将会作为WS服务端监听一个指定的端口，并且在连接的时候负责鉴权。
:::warning
暂时还未设计当监听失败时的fallback逻辑，请谨慎使用
:::

### 配置参考

```yaml{1,3,5,7}
- ws-1: # 连接名，不可重复
    # 监听地址
    host: 127.0.0.1
    # 监听端口
    port: 8081
    # Access token
    token: ''
```
:::tip
完整配置请参考 [配置文件](/plugin_nonebot/config)
:::


## 反向Websocket连接

使用此连接方式时，插件将会作为WS客户端去尝试连接给定的服务器地址，并且会在断开连接时重连。

### 配置参考

```yaml{1,3,5,7}
- ws-reverse-1: # 连接名，不可重复
    # WS服务器地址
    address: "ws://127.0.0.1:8080/mc/ws"
    # 重连时间，单位毫秒
    reconnect-interval: 10000
    # Access token
    token: ''
```
:::tip
完整配置请参考 [配置文件](/plugin_nonebot/config)
:::

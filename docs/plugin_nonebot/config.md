---
title: 配置
icon: icon-park-outline:setting-config
---

## 基础配置
```yaml
# 服务器ID，用于标识自身
server-name: "SampleServer"
```

## 消息格式
```yaml
message:
  # 格式，可选: text, binary
  # binary 暂时不可用
  format: text

  # 开启 PlaceholderAPI 支持
  # 依赖 PlaceholderAPI
  # 暂时不可用
  placeholderapi: false

  # 开启 Unicode 表情支持
  # 不一定能完美显示
  # 关闭后会消除消息中所有的Unicode表情
  # 暂时不可用
  unicode-emoji: false
```

## 日志输出
```yaml
output:
  # 日志等级
  # Available levels: (trace), debug, info, warn, error
  level: info

  # 输出频道
  # 可选: console, file, disabled
  # 暂时不支持输出到文件与禁用
  channel: console

  # 文件路径
  # 仅在输出到文件时有效
  # 相对于服务端核心文件的路径
  # 暂时不可用
  file: "logs/"
```

## API调用限制
```yaml
api:
  # API 调用速率限制，采用令牌桶算法
  rate-limit:
    enabled: false # 是否启用限速
    frequency: 1 # 令牌回复时间，单位秒
    capacity: 1 # 总令牌数量
```

## 连接配置

目前可以添加0-N个Ｗebsocket连接和0-N个反向Websocket连接。

### Websocket连接
参考 [Websocket连接](connection#websocket连接)
```yaml
connections:
  - ws-1:
     # 监听
     host: 0.0.0.0
     # Listening port
     port: 8081
     # Heartbeat interval in seconds
     heartbeat-interval: 30
     # Access token
     token: ''
```

### 反向 Websocket 连接
参考 [反向Websocket连接](connection#反向websocket连接)
```yaml
connections:
 - ws-reverse-1:
    # Server address for ws client
    # Setting this will override the following two settings
    address: "ws://127.0.0.1:8080/mc/ws"
    # Reconnect interval in milliseconds
    reconnect-interval: 10000
    # Access token
    token: ''
```

## 完整配置参考
```yaml
# The Main config file for PluginNonebot

# The server's identifier/name
server-name: "SampleServer"

message:
  # Message format
  # Available variables: text, binary
  # TODO binary is not implemented yet
  format: text

  # Enable PlaceholderAPI support
  # Requires PlaceholderAPI
  # TODO Not implemented yet
  placeholderapi: false

  # Enable Unicode Emoji support
  # May not display properly
  # If disabled all emoji in messages will be erased
  unicode-emoji: false

output:
  # Log level
  # Available levels: (trace), debug, info, warn, error
  level: info

  # Log channel
  # Available channels: console, file
  # TODO Not implemented yet
  channel: console

  # Log file path
  # Only works when channel is set to file
  # Relative path to your server jar
  # TODO Not implemented yet
  file: "logs/"

api:
  # API Rate Limit, based on token bucket algorithm
  rate-limit:
    enabled: false
    frequency: 1
    capacity: 3

connections:
# Connections, can add multiple conntections using the same type
#- ws:   # Websocket, plugin will work as an WS server
#- ws-reverse: # Reversed Websocket, plugin will work as an WS client
 - ws-reverse-1:
    # Server address for ws client
    # Setting this will override the following two settings
    address: "ws://127.0.0.1:8080/mc/ws"
    # Reconnect interval in milliseconds
    reconnect-interval: 10000
    # Access token
    token: ''

 - ws-1:
    # Listening host
    host: 0.0.0.0
    # Listening port
    port: 8081
    # Heartbeat interval in seconds
    heartbeat-interval: 30
    # Access token
    token: ''
```
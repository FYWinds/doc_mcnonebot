---
title: 事件
icon: mdi:bell
---

关于Event类型的统一响应请参考[Event](response#event)

## Player
type: `player`

### 玩家加入

detail_type: `player_join`

| 字段    | 类型                                    | 说明     |
| ------- | --------------------------------------- | -------- |
| player  | [Simple Player](response#simple-player) | 玩家信息 |
| message | `String`                                | 加入信息 |

### 玩家离开

detail_type: `player_quit`

| 字段    | 类型                                    | 说明     |
| ------- | --------------------------------------- | -------- |
| player  | [Simple Player](response#simple-player) | 玩家信息 |
| message | `String`                                | 离开信息 |

### 玩家死亡

detail_type: `player_death`

| 字段           | 类型                                    | 说明           |
| -------------- | --------------------------------------- | -------------- |
| player         | [Simple Player](response#simple-player) | 玩家信息       |
| message        | `String`                                | 死亡信息       |
| new_exp        | `Number`                                | 新经验值       |
| new_level      | `Number`                                | 新等级         |
| new_total_exp  | `Number`                                | 新总经验值     |
| keep_level     | `Boolean`                               | 是否保留等级   |
| keep_inventory | `Boolean`                               | 是否保留物品栏 |

### 玩家获得成就

detail_type: `player_advancement`

| 字段        | 类型                                    | 说明     |
| ----------- | --------------------------------------- | -------- |
| player      | [Simple Player](response#simple-player) | 玩家信息 |
| advancement | `String`                                | 成就ID   |

## Message

type: `message`

### 玩家发送消息

detail_type: `player_message`

| 字段       | 类型                                      | 说明                   |
| ---------- | ----------------------------------------- | ---------------------- |
| sender     | [Simple Player](response#simple-player)   | 玩家信息               |
| message    | `String`                                  | 消息内容               |
| recipients | [Simple Player[]](response#simple-player) | 消息接收者             |
| cancelled  | `Boolean`                                 | 消息是否被其他插件取消 |

### 服务器广播消息

detail_type: `server_broadcast`

| 字段       | 类型                                      | 说明                   |
| ---------- | ----------------------------------------- | ---------------------- |
| message    | `String`                                  | 消息内容               |
| recipients | [Simple Player[]](response#simple-player) | 消息接收者             |
| cancelled  | `Boolean`                                 | 消息是否被其他插件取消 |


## Command

type: `command`

### 玩家执行命令

detail_type: `player_command`

| 字段      | 类型                                    | 说明                   |
| --------- | --------------------------------------- | ---------------------- |
| sender    | [Simple Player](response#simple-player) | 玩家信息               |
| command   | `String`                                | 命令内容               |
| cancelled | `Boolean`                               | 命令是否被其他插件取消 |

### 服务器执行命令

detail_type: `server_command`

| 字段      | 类型                                                  | 说明                   |
| --------- | ----------------------------------------------------- | ---------------------- |
| sender    | [Simple CommandSender](response#simple-commandsender) | 命令发送者             |
| command   | `String`                                              | 命令内容               |
| cancelled | `Boolean`                                             | 命令是否被其他插件取消 |
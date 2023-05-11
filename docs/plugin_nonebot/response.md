---
title: 响应
icon: material-symbols:data-object-rounded
---

一些通用的响应信息

## API

### 通用请求

| 字段   | 类型     | 说明       |
| ------ | -------- | ---------- |
| action | `String` | 动作       |
| params | `Object` | 参数       |
| echo   | `Object` | 请求标识符 |

### 通用响应

| 字段          | 类型     | 说明               |
| ------------- | -------- | ------------------ |
| status        | `String` | `ok` 或者 `failed` |
| retcode       | `Number` | [错误码](#错误码)  |
| error_message | `String` | 错误信息           |
| data          | `Object` | 响应数据           |
| echo          | `Object` | 请求标识符         |

### 错误码

| 错误码 | 说明          |
| ------ | ------------- |
| 0      | 成功          |
| 10001  | 请求格式错误  |
| 10002  | 未知动作      |
| 10003  | 请求参数错误  |
| 20002  | 内部处理错误  |
| 30001  | 达到RateLimit |

## Event
| 字段        | 类型     | 说明                     |
| ----------- | -------- | ------------------------ |
| id          | `String` | 事件标识符，UUID v4      |
| time        | `Number` | 事件发生时间，UNIX时间戳 |
| data        | `Object` | 事件数据                 |
| type        | `String` | 事件类型                 |
| detail_type | `String` | 事件详细类型             |
| sub_type    | `String` | 事件子类型               |

## 响应内容

### Simple Player
| 字段     | 类型                  | 说明     |
| -------- | --------------------- | -------- |
| name     | `String`              | 玩家名   |
| uuid     | `String`              | UUID     |
| isOnline | `Boolean`             | 是否在线 |
| location | [Location](#location) | 坐标     |

### Player

| 字段                | 类型                  | 说明                  |
| ------------------- | --------------------- | --------------------- |
| display_name        | `String`              | 玩家游戏名            |
| player_list_name    | `String`              | Tablist中显示的游戏名 |
| address             | `String`              | IP 地址               |
| locale              | `String`              | 语言                  |
| sneaking            | `Boolean`             | 是否潜行              |
| sprinting           | `Boolean`             | 是否疾跑              |
| flying              | `Boolean`             | 是否飞行              |
| exp                 | `Number`              | 经验值                |
| level               | `Number`              | 等级                  |
| total_experience    | `Number`              | 总经验值              |
| location            | [Location](#location) | 坐标                  |
| ticks_lived         | `Number`              | 存活时长              |
| custom_name_visible | `Boolean`             | 自定义游戏名是否可见  |
| customName          | `String?`             | 自定义游戏名          |
| invulnerable        | `Boolean`             | 是否不可伤害          |
| scoreboard_tags     | `String[]`            | Scoreboard Tags       |

### Location
| 字段  | 类型     | 说明   |
| ----- | -------- | ------ |
| world | `String` | 世界名 |
| x     | `Number` | -      |
| y     | `Number` | -      |
| z     | `Number` | -      |
| yaw   | `Number` | -      |
| pitch | `Number` | -      |

### Simple Command Sender
| 字段 | 类型     | 说明     |
| ---- | -------- | -------- |
| name | `String` | 发送者名 |

### Item
| 字段     | 类型     | 说明   |
| -------- | -------- | ------ |
| material | `String` | 物品ID |
| amount   | `Number` | 数量   |
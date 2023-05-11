/*
 * @Author       : FYWinds i@windis.cn
 * @Date         : 2023-05-11 20:35:24
 * @LastEditors  : FYWinds i@windis.cn
 * @LastEditTime : 2023-05-13 09:49:41
 * @FilePath     : /docs/.vuepress/sidebar.ts
 * 
 * Copyright (c) 2023 by FYWinds
 * All Rights Reserved.
 * Any modifications or distributions of the file
 * should mark the original author's name.
 */

import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/adapter_mc/": [
        {
            text: "MC 适配器",
            icon: "mdi:server",
            children: [
                "",
            ]
        },
    ],
    "/plugin_nonebot/": [
        "",
        "config.md",
        "connection.md",
        "api.md",
        "event.md",
        "response.md",
    ],
    "/mod_nonebot/": [
        "",
        "config.md",
        "connection.md",
        "api.md",
        "event.md",
        "response.md",
    ],
    "/wrapper_nonebot/": [
        "",
        "config.md",
        "connection.md",
        "api.md",
        "event.md",
        "response.md",
    ]
})
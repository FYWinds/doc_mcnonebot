/*
 * @Author       : FYWinds i@windis.cn
 * @Date         : 2023-05-12 13:49:51
 * @LastEditors  : FYWinds i@windis.cn
 * @LastEditTime : 2023-05-13 09:34:10
 * @FilePath     : /docs/.vuepress/navbar.ts
 * 
 * Copyright (c) 2023 by FYWinds
 * All Rights Reserved.
 * Any modifications or distributions of the file
 * should mark the original author's name.
 */

import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "主页",
        link: "/",
        icon: "mdi:home",
    },
    {
        text: "适配器",
        link: "/adapter_mc/",
        icon: "mdi:server",
    },
    {
        text: "Bukkit 插件",
        link: "/plugin_nonebot/",
        icon: "tabler:bucket",
    },
    {
        text: "模组",
        link: "/mod_nonebot/",
        icon: "simple-icons:modrinth",
    },
    {
        text: "Wrapper",
        link: "/wrapper_nonebot/",
        icon: "mdi:box-outline",
    }
])
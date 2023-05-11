/*
 * @Author       : FYWinds i@windis.cn
 * @Date         : 2023-05-11 12:05:39
 * @LastEditors  : FYWinds i@windis.cn
 * @LastEditTime : 2023-05-11 20:12:55
 * @FilePath     : /docs/.vuepress/config.ts
 * 
 * Copyright (c) 2023 by FYWinds
 * All Rights Reserved.
 * Any modifications or distributions of the file
 * should mark the original author's name.
 */

import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import { defineUserConfig } from 'vuepress';
import hopeTheme from "./theme";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'McNonebot',
    description: 'Documentation for McNonebot projects',
    theme: hopeTheme,
    plugins: [
        shikiPlugin({
            theme: "one-dark-pro",
        }),
        searchProPlugin({
            indexContent: true,
        }),
    ]
})
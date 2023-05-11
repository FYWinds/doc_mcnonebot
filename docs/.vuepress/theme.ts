/*
 * @Author       : FYWinds i@windis.cn
 * @Date         : 2023-05-11 14:26:55
 * @LastEditors  : FYWinds i@windis.cn
 * @LastEditTime : 2023-05-12 21:58:00
 * @FilePath     : /docs/.vuepress/theme.ts
 * 
 * Copyright (c) 2023 by FYWinds
 * All Rights Reserved.
 * Any modifications or distributions of the file
 * should mark the original author's name.
 */
import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar';
import sidebar from './sidebar';

export default hopeTheme({
    darkmode: 'switch',


    iconAssets: "iconify",
    iconPrefix: "",

    plugins: {
        prismjs: false,
        mdEnhance: {
            tabs: true,
            mermaid: true,
            tasklist: true,
            card: true,

            figure: true, // 图片描述
            imgLazyload: true,
            imgMark: true, // 夜间模式切换
            imgSize: true, // Resize

            container: true,

            align: true,
        },
    },
    navbar: navbar,
    navbarLayout: {
        start: ["Brand"],
        end: ["Links", "Repo", "Search"],
    },

    sidebar: sidebar,

    repo: "fywinds/doc_mcnonebot",

    footer: "MIT Licensed | Built on Vuepress Theme Hope",
    copyright: false,
})
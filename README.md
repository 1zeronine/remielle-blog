# Remielle 的博客

基于 [Astro](https://astro.build/) 构建的个人静态博客，托管于 Cloudflare Pages，默认绑定域名 `https://www.remielle.ccwu.cc`。

## 功能特性

- 纯静态生成，全球 CDN 分发，无需服务器与 ICP 备案即可通过 Cloudflare Pages 访问
- 使用 Markdown / MDX 编写文章，支持标签归档、草稿过滤、预计阅读时长
- 自动跟随系统浅色 / 深色模式（含代码块语法高亮）
- 自动生成 RSS 订阅（`/rss.xml`）与站点地图（`/sitemap-index.xml`）

## 日常写文章

在 `src/content/blog/` 下新建 `.md` 文件（建议文件名用英文与短横线，对应网址 `/blog/文件名/`）：

```markdown
---
title: '文章标题'
description: '一句话简介'
pubDate: 2026-11-06
tags: ['随笔']
draft: false
---

正文内容……
```

- `draft: true` 时文章只在本地 `npm run dev` 预览中显示，线上构建会自动跳过。
- 图片可放入 `public/images/`，在文章中通过 `![说明](/images/xxx.jpg)` 引用。

写完后提交并推送到 GitHub，Cloudflare Pages 会自动重新构建并上线：

```powershell
git add .
git commit -m "新增文章"
git push
```

## 修改站点信息

- 站点标题、作者、首页简介、社交链接：编辑 `src/consts.ts`
- 关于页面：编辑 `src/pages/about.astro`
- 正式域名（用于 RSS 与 canonical 链接）：编辑 `astro.config.mjs` 中的 `site`
- 主题强调色：编辑 `src/styles/global.css` 中的 `--accent`

## 本地常用命令

在 `blog` 目录下运行：

| 命令 | 说明 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动本地预览（默认 `http://localhost:4321`） |
| `npm run build` | 生成正式静态文件到 `dist/` |
| `npm run preview` | 本地预览 `dist/` 构建产物 |

## Cloudflare Pages 构建参数

- **框架预设（Framework preset）**：`Astro`
- **构建命令（Build command）**：`npm run build`
- **构建输出目录（Build output directory）**：`dist`

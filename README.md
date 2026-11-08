# Remielle 的博客

基于 [Astro](https://astro.build/) 与 [Firefly (流萤)](https://github.com/CuteLeaf/Firefly) 主题构建的现代化个人静态博客，托管于 Cloudflare Pages，绑定独立域名 `https://www.remielle.ccwu.cc`。

---

## ✨ 博客特性

- ⚡ **超快静态生成**：基于 Astro 7，纯静态生成（SSG），全球 CDN 分发，秒级加载。
- 🎨 **现代化美观视觉**：
  - 支持横幅（Banner）、全屏壁纸、全屏半透明覆盖、纯色四种背景模式。
  - 支持 360° 动态主题色调节，支持浅色 / 深色 / 跟随系统模式。
  - 基于 Swup 的丝滑页面无刷新过渡动效。
- 🔍 **客户端全文搜索**：基于 Pagefind，离线秒级检索文章与标签。
- 💻 **强大 Markdown 语法排版**：
  - 基于 Expressive Code 的代码块高亮（行号、折叠、语言图标、一键复制）。
  - KaTeX 数学公式、Mermaid / PlantUML 图表、GitHub 仓库卡片、Callouts 提示块。
- 📱 **多功能页面与扩展**：
  - 文章标签、分类、归档、系列与置顶功能。
  - 动态状态说说（/dynamic）、友链（/friends）、关于页面（/about）、相册（/gallery）。

---

## ✍️ 日常写文章

在 `src/content/posts/` 目录下新建 `.md` 或 `.mdx` 文件：

```markdown
---
title: '文章标题'
published: 2026-11-08
description: '一句话简介（会显示在文章卡片与搜索结果中）'
tags: ['随笔', '技术']
category: '技术'
draft: false
---

正文内容……
```

### 快捷新建文章命令

在 `blog` 目录下运行：

```bash
# 新建文章（自动填充模版）
pnpm new-post <filename>

# 新建一条动态说说
pnpm new-d "今天天气不错！"
```

- `draft: true` 时文章只在本地 `pnpm dev` 预览中显示，正式发布会自动跳过。
- 文章若需要自定义封面，可以在 frontmatter 中添加 `image: ./cover.jpg` 或图片路径。

---

## ⚙️ 修改站点信息与配置

所有主要配置均位于 `src/config/` 目录：

| 配置文件 | 作用说明 |
| :--- | :--- |
| `src/config/siteConfig.ts` | 站点标题、副标题、域名 URL、页面开关（友链/动态/留言板等）、主题色 |
| `src/config/profileConfig.ts` | 站长名称（Remielle）、个人签名、头像、GitHub/社交链接 |
| `src/config/navBarConfig.ts` | 导航栏菜单项与结构自定义 |
| `src/config/backgroundWallpaper.ts` | 背景壁纸模式与图片设置 |
| `src/config/commentConfig.ts` | 评论系统接入（支持 Waline, Twikoo, Giscus 等） |
| `src/config/friendsConfig.ts` | 友链列表配置 |

---

## 💻 本地常用命令

在 `blog` 目录下运行：

| 命令 | 说明 |
| :--- | :--- |
| `pnpm install` | 安装依赖包 |
| `pnpm dev` | 启动本地开发预览（默认 `http://localhost:4321`） |
| `pnpm build` | 执行完整静态构建（输出到 `dist/`，含缩略图、脚本压缩与 Pagefind 索引） |
| `pnpm preview` | 本地预览构建产物 |
| `pnpm check` | 类型与 Astro 配置检查 |

---

## ☁️ Cloudflare Pages 部署参数

每次 `git push` 到 GitHub `main` 分支后，Cloudflare Pages 会自动拉取并执行构建：

- **框架预设（Framework preset）**：`Astro`
- **构建命令（Build command）**：`pnpm run build`
- **构建输出目录（Build output directory）**：`dist`
- **环境变量（Environment variables）**：
  - `NODE_VERSION` = `22`

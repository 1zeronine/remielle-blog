---
title: '写作指南（草稿示例）'
published: 2026-11-06
description: '演示文章开头的字段和常用 Markdown 写法。这篇是草稿，只在本地预览中可见。'
tags: ['指南']
category: '指南'
draft: true
---

这篇文章的 `draft: true` 表示它是**草稿**：运行 `pnpm dev` 本地预览时能看到，但正式网站不会发布。把它改成 `false` 或删除这一行即可发布。

## 文章开头的字段

每篇文章的开头用 `---` 包住一段信息（frontmatter）：

```yaml
---
title: '文章标题'               # 必填
description: '一句话简介'        # 选填，会显示在列表和卡片中
published: 2026-11-06           # 必填，发布日期
tags: ['编程', '随笔']           # 选填，标签
category: '技术'                # 选填，分类
draft: true                     # 选填，草稿不会发布
---
```

## 常用写法

**加粗**、*斜体*、~~删除线~~、`行内代码`、[链接](https://example.com)。

> 这是一段引用。

1. 有序列表
2. 第二项

- 无序列表
- 第二项

| 表头 A | 表头 B |
| ------ | ------ |
| 内容 1 | 内容 2 |

```js
// 代码块会自动高亮
console.log('Hello, world!');
```

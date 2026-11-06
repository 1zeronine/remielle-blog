// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 网站正式地址：用于生成 RSS、站点地图和 canonical 链接。换域名时只需改这里。
	site: 'https://www.remielle.ccwu.cc',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// 代码高亮主题，随系统浅色 / 深色模式切换
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
});

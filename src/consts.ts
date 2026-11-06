// 全站通用信息：修改这里即可更新网站标题、简介、作者和社交链接。

export const SITE_TITLE = 'Remielle 的博客';
export const SITE_DESCRIPTION = '记录技术、生活与思考。';
export const AUTHOR = 'Remielle';

// 首页的自我介绍（一两句话即可）
export const INTRO = '你好，欢迎来到我的博客。这里会记录我在编程、折腾和日常生活中的一些想法。';

// 页头 / 页脚显示的外部链接。不需要的删掉即可，href 留空的项目不会显示。
export const SOCIAL_LINKS: { label: string; href: string; icon: 'github' | 'mail' | 'rss' }[] = [
	{ label: 'GitHub', href: '', icon: 'github' },
	{ label: '邮箱', href: '', icon: 'mail' },
	{ label: 'RSS 订阅', href: '/rss.xml', icon: 'rss' },
];

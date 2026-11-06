import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** 获取所有可发布的文章（正式构建时排除草稿），按发布时间倒序。 */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** 统计所有标签及其文章数，按文章数倒序。 */
export function getTags(posts: Post[]): { tag: string; count: number }[] {
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
	}
	return [...counts.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, 'zh-CN'));
}

/** 估算阅读时间（中文按约 400 字 / 分钟计）。 */
export function readingMinutes(body: string | undefined): number {
	if (!body) return 1;
	const cjk = (body.match(/[\u4e00-\u9fff]/g) ?? []).length;
	const words = (body.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) ?? []).length;
	return Math.max(1, Math.round(cjk / 400 + words / 200));
}

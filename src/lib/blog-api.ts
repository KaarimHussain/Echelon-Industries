import type { BlogListResponse, BlogPost, BlogPostResponse } from "@/types/blog";

const BASE_URL = import.meta.env.VITE_BLOG_API_URL as string;
const TOKEN = import.meta.env.VITE_BLOG_API_TOKEN as string;

const headers = {
    "Authorization": `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
};

export async function fetchPosts(limit = 20, cursor?: string): Promise<BlogListResponse> {
    const params = new URLSearchParams({ limit: String(limit) });
    if (cursor) params.set("cursor", cursor);
    const res = await fetch(`${BASE_URL}/posts?${params}`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
    return res.json();
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost> {
    const res = await fetch(`${BASE_URL}/posts/${slug}`, { headers });
    if (!res.ok) throw new Error(`Post not found: ${res.status}`);
    const json: BlogPostResponse = await res.json();
    return json.data;
}

export function formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function stripHtml(html: string): string {
    return html.replace(/<[^>]+>/g, "").trim();
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    coverImageUrl?: string;
    publishedAt: number; // Unix ms timestamp
    updatedAt?: number;
    readingTime?: number;
    wordCount?: number;
    contentHtml?: string;
    tags?: string[];
    category?: string;
    author?: {
        name: string;
        avatar?: string;
    };
    meta_title?: string;
    meta_description?: string;
}

export interface BlogListResponse {
    data: BlogPost[];
    nextCursor: string | null;
}

export interface BlogPostResponse {
    data: BlogPost;
}

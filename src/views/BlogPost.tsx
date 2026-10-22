import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { fetchPostBySlug, fetchPosts, formatDate, stripHtml } from "@/lib/blog-api";
import type { BlogPost } from "@/types/blog";

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [related, setRelated] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        setError(null);
        setPost(null);

        fetchPostBySlug(slug)
            .then(async p => {
                setPost(p);
                const res = await fetchPosts(4);
                setRelated(res.data.filter(r => r.slug !== slug).slice(0, 3));
            })
            .catch(() => setError("Post not found or unavailable."))
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) return <BlogPostSkeleton />;

    if (error || !post) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-5">
                <h1 className="text-3xl font-black text-secondary">Post Not Found</h1>
                <p className="text-zinc-500">{error}</p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
            </div>
        );
    }

    const excerpt = post.meta_description || post.excerpt || (post.contentHtml ? stripHtml(post.contentHtml).slice(0, 160) : "");
    const canonicalUrl = `https://echelonindustries.net/blog/${post.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": excerpt,
        "url": canonicalUrl,
        "datePublished": new Date(post.publishedAt).toISOString(),
        "dateModified": new Date(post.updatedAt || post.publishedAt).toISOString(),
        "image": post.coverImageUrl || "https://echelonindustries.net/fav-icon.svg",
        "author": post.author
            ? { "@type": "Person", "name": post.author.name }
            : { "@type": "Organization", "name": "Echelon Industries" },
        "publisher": {
            "@type": "Organization",
            "name": "Echelon Industries",
            "url": "https://echelonindustries.net",
            "logo": { "@type": "ImageObject", "url": "https://echelonindustries.net/fav-icon.svg" }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
        ...(post.tags?.length ? { "keywords": post.tags.join(", ") } : {}),
    };

    return (
        <>
            <Helmet>
                <title>{post.meta_title || post.title} | Echelon Industries Blog</title>
                <meta name="description" content={excerpt} />
                {post.tags && <meta name="keywords" content={post.tags.join(", ")} />}
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={excerpt} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="Echelon Industries" />
                {post.coverImageUrl && <meta property="og:image" content={post.coverImageUrl} />}
                <meta property="article:published_time" content={new Date(post.publishedAt).toISOString()} />
                {post.updatedAt && <meta property="article:modified_time" content={new Date(post.updatedAt).toISOString()} />}
                {post.category && <meta property="article:section" content={post.category} />}
                {post.tags?.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={excerpt} />
                {post.coverImageUrl && <meta name="twitter:image" content={post.coverImageUrl} />}
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <article className="bg-white">
                {/* Hero */}
                <div className="relative bg-secondary overflow-hidden min-h-[420px] flex items-end">
                    {post.coverImageUrl && (
                        <img
                            src={post.coverImageUrl}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-25"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/30" />
                    <div className="relative z-10 container mx-auto px-5 md:px-10 lg:px-20 xl:px-32 pb-14 pt-24">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:gap-3 transition-all duration-200"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-medium mb-5">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                {formatDate(post.publishedAt)}
                            </span>
                            {post.readingTime && (
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" />
                                    {post.readingTime} min read
                                </span>
                            )}
                            {post.category && (
                                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                                    {post.category}
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl">
                            {post.title}
                        </h1>

                        {post.excerpt && (
                            <p className="mt-5 text-zinc-300 text-lg leading-relaxed max-w-3xl">
                                {post.excerpt}
                            </p>
                        )}
                    </div>
                </div>

                {/* Article body */}
                <div className="container mx-auto px-5 md:px-10 lg:px-20 xl:px-32 py-16">
                    <div className="max-w-3xl mx-auto">

                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-10">
                                {post.tags.map(tag => (
                                    <span key={tag} className="bg-zinc-100 text-zinc-600 text-xs font-semibold px-3 py-1 rounded-full">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {post.contentHtml && (
                            <div
                                className="
                                    prose prose-zinc prose-lg max-w-none
                                    prose-headings:font-black prose-headings:text-secondary
                                    prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
                                    prose-h3:text-xl prose-h3:mt-8
                                    prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:my-4
                                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-secondary
                                    prose-img:rounded-sm prose-img:shadow-md
                                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-zinc-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic
                                    prose-ul:text-zinc-600 prose-ol:text-zinc-600
                                    prose-li:marker:text-primary
                                "
                                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                            />
                        )}
                    </div>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                    <div className="border-t border-zinc-100 bg-zinc-50">
                        <div className="container mx-auto px-5 md:px-10 lg:px-20 xl:px-32 py-16">
                            <h2 className="text-2xl font-black text-secondary mb-10">More Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {related.map(r => (
                                    <Link key={r.id} to={`/blog/${r.slug}`} className="group flex flex-col">
                                        <div className="aspect-[16/9] overflow-hidden bg-zinc-200 rounded-sm mb-4">
                                            {r.coverImageUrl ? (
                                                <img
                                                    src={r.coverImageUrl}
                                                    alt={r.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                                                    <span className="text-primary font-bold">EI</span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-xs text-zinc-400 mb-1">{formatDate(r.publishedAt)}</p>
                                        <h3 className="font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                                            {r.title}
                                        </h3>
                                        <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
                                            Read <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </article>
        </>
    );
}

function BlogPostSkeleton() {
    return (
        <div className="bg-white animate-pulse">
            <div className="bg-zinc-800 h-[420px] w-full" />
            <div className="bg-zinc-200 h-[320px] w-full" />
            <div className="container mx-auto px-5 md:px-10 lg:px-20 xl:px-32 py-16">
                <div className="max-w-3xl mx-auto space-y-4">
                    <div className="h-4 bg-zinc-200 rounded w-1/4" />
                    <div className="h-8 bg-zinc-200 rounded w-3/4" />
                    <div className="h-8 bg-zinc-200 rounded w-1/2" />
                    <div className="pt-6 space-y-3">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="h-4 bg-zinc-100 rounded" style={{ width: `${70 + Math.random() * 30}%` }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, Tag, ArrowRight, Rss } from "lucide-react";
import { fetchPosts, formatDate, stripHtml } from "@/lib/blog-api";
import type { BlogPost } from "@/types/blog";
import CustomHero from "@/components/CustomHero";

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        fetchPosts(12)
            .then(res => {
                setPosts(res.data);
                setNextCursor(res.nextCursor);
            })
            .catch(() => setError("Failed to load posts. Please try again later."))
            .finally(() => setLoading(false));
    }, []);

    const loadMore = async () => {
        if (!nextCursor || loadingMore) return;
        setLoadingMore(true);
        try {
            const res = await fetchPosts(12, nextCursor);
            setPosts(prev => [...prev, ...res.data]);
            setNextCursor(res.nextCursor);
        } finally {
            setLoadingMore(false);
        }
    };

    const [featured, ...rest] = posts;

    return (
        <>
            <Helmet>
                <title>Blog | Echelon Industries — Fire Safety & Industrial Insights</title>
                <meta name="description" content="Expert insights on fire protection systems, HVACR, industrial safety, elevators, and the latest industry trends from Echelon Industries." />
                <meta name="keywords" content="fire protection blog, industrial safety, HVACR, fire fighting systems, elevators Pakistan, Echelon Industries" />
                <link rel="canonical" href="https://echelonindustries.net/blog" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog | Echelon Industries" />
                <meta property="og:description" content="Expert insights on fire protection, HVACR, industrial safety, and the latest industry trends." />
                <meta property="og:url" content="https://echelonindustries.net/blog" />
                <meta property="og:site_name" content="Echelon Industries" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog | Echelon Industries" />
                <meta name="twitter:description" content="Expert insights on fire protection, HVACR, and industrial safety." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Echelon Industries Blog",
                    "description": "Expert insights on fire protection systems, HVACR, industrial safety, and the latest industry trends.",
                    "url": "https://echelonindustries.net/blog",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Echelon Industries",
                        "url": "https://echelonindustries.net",
                    }
                })}</script>
            </Helmet>

            <CustomHero
                title="INSIGHTS & BLOG UPDATES"
                highlightWord="BLOG"
                description="Expert perspectives on fire protection, industrial safety, HVACR, and innovation from the Echelon Industries team."
                showButton={false}
            />

            <section className="bg-white min-h-screen">
                <div className="container mx-auto px-5 md:px-10 lg:px-20 xl:px-32 py-16 md:py-24">

                    {loading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="animate-pulse">
                                    <div className="bg-zinc-200 aspect-[16/9] rounded-sm mb-4" />
                                    <div className="h-3 bg-zinc-200 rounded w-1/3 mb-3" />
                                    <div className="h-5 bg-zinc-200 rounded w-3/4 mb-2" />
                                    <div className="h-4 bg-zinc-200 rounded w-full mb-1" />
                                    <div className="h-4 bg-zinc-200 rounded w-2/3" />
                                </div>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                            <Rss className="w-12 h-12 text-zinc-300" />
                            <p className="text-zinc-500 text-lg">{error}</p>
                        </div>
                    )}

                    {!loading && !error && posts.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
                            <Rss className="w-14 h-14 text-primary/30" />
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-2">No posts yet</h2>
                                <p className="text-zinc-500 max-w-md">
                                    We're working on some great content. Check back soon for expert insights on fire protection and industrial safety.
                                </p>
                            </div>
                        </div>
                    )}

                    {!loading && !error && posts.length > 0 && (
                        <>
                            {/* Featured post */}
                            <Link to={`/blog/${featured.slug}`} className="group block mb-16">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div className="relative overflow-hidden rounded-sm aspect-[16/9] bg-zinc-100">
                                        {featured.coverImageUrl ? (
                                            <img
                                                src={featured.coverImageUrl}
                                                alt={featured.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                                                <span className="text-primary font-bold text-4xl">EI</span>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1">Featured</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <PostMeta post={featured} />
                                        <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight group-hover:text-primary transition-colors duration-300">
                                            {featured.title}
                                        </h2>
                                        {featured.excerpt && (
                                            <p className="text-zinc-500 text-lg leading-relaxed line-clamp-3">
                                                {featured.excerpt}
                                            </p>
                                        )}
                                        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-200">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            {rest.length > 0 && <div className="w-full h-px bg-zinc-100 mb-16" />}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                                {rest.map(post => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </div>

                            {nextCursor && (
                                <div className="flex justify-center mt-16">
                                    <button
                                        onClick={loadMore}
                                        disabled={loadingMore}
                                        className="px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors duration-300 disabled:opacity-50"
                                    >
                                        {loadingMore ? "Loading..." : "Load More"}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

function PostMeta({ post }: { post: BlogPost }) {
    return (
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-medium">
            <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
            </span>
            {post.readingTime && (
                <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime} min read
                </span>
            )}
            {post.category && (
                <span className="flex items-center gap-1 text-primary font-semibold uppercase tracking-wide">
                    <Tag className="w-3.5 h-3.5" />
                    {post.category}
                </span>
            )}
        </div>
    );
}

function PostCard({ post }: { post: BlogPost }) {
    return (
        <Link to={`/blog/${post.slug}`} className="group flex flex-col">
            <div className="relative overflow-hidden rounded-sm aspect-[16/9] bg-zinc-100 mb-5">
                {post.coverImageUrl ? (
                    <img
                        src={post.coverImageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                        <span className="text-primary font-bold text-2xl">EI</span>
                    </div>
                )}
                {post.category && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                            {post.category}
                        </span>
                    </div>
                )}
            </div>
            <PostMeta post={post} />
            <h3 className="text-xl font-bold text-secondary mt-3 mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {post.title}
            </h3>
            {post.excerpt && (
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>
            )}
            <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all duration-200">
                Read More <ArrowRight className="w-3.5 h-3.5" />
            </span>
        </Link>
    );
}

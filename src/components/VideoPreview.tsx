import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function VideoPreview() {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-8 mb-16">
                    <div className="space-y-4 max-w-3xl">
                        <span className="text-primary font-montserrat uppercase tracking-[0.2em] text-sm font-bold opacity-80">
                            Visual Showcase
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight text-foreground">
                            Experience Our Growth
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
                        Being a major player in <span className="text-foreground">"HVACR"</span> industries in Pakistan and Middle East,
                        we have captured all the blooming industries including Textile, Automobile, and Infrastructure development.
                    </p>
                </div>

                {/* Video Preview Container */}
                <div className="relative max-w-5xl mx-auto group">
                    {/* Floating Decorative Rings */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative rounded-[2rem] overflow-hidden bg-card shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] ring-1 ring-border/50">
                        <div className="aspect-video w-full">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/HQgzcsIXZ8c?si=F8NT57u7ao7wkBI9&autoplay=1&mute=1&loop=1&playlist=HQgzcsIXZ8c"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Action Button Below Video */}
                </div>
                <div className="flex justify-center mt-15 pb-5 z-1">
                    <Link to={"https://www.youtube.com/@EchelonIndustries"}>
                        <Button>
                            Visit Our Channel
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
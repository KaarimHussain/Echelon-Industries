import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const EventsData = [
    {
        title: "Build Asia 2019",
        description: "Build Asia is an international construction exhibition that aims to focus on Pakistan's building industry's immense potential.",
        image: "https://cdn.echelonindustries.net/cdn/images/08470f9a90496f3a_1775849311.jpeg"
    },
    {
        title: "HVACR Exhibition 2021",
        description: "The premier event for heating, ventilation, air conditioning and refrigeration professionals in the region, showcasing latest technologies.",
        image: "https://cdn.echelonindustries.net/cdn/images/e341951ad65b64e8_1775849340.jpeg"
    },
    {
        title: "Industrial Engineering Expo",
        description: "A comprehensive platform for industrial engineering and automation solutions, connecting global manufacturers with local industries.",
        image: "https://cdn.echelonindustries.net/cdn/images/27105eadd7f867d4_1775849348.jpeg"
    },
    {
        title: "Smart Infra Summit",
        description: "Focusing on smart infrastructure and sustainable development projects across the Middle East and Pakistan.",
        image: "https://cdn.echelonindustries.net/cdn/images/0c50ce2eaea3f893_1775849360.jpeg"
    },
    {
        title: "Global Partners Forum",
        description: "Connecting international partners and stakeholders to drive innovation in the industrial and energy sectors.",
        image: "https://cdn.echelonindustries.net/cdn/images/0e242af7cde851c1_1775849371.jpeg"
    },
    {
        title: "Trade & Commerce Fair",
        description: "Showcasing the multi-disciplinary excellence of Echelon Industries in trade and industrial equipment distribution.",
        image: "https://cdn.echelonindustries.net/cdn/images/c01f39b9ebb0158c_1775849380.jpeg"
    }
];

export default function Events() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-8 mb-20">
                    <div className="space-y-4 max-w-3xl">
                        <span className="text-primary font-montserrat uppercase tracking-[0.2em] text-sm font-bold opacity-80">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold font-montserrat tracking-tight text-foreground">
                            Recent Events
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
                        Being a major player in <span className="text-foreground">"HVACR"</span> industries in Pakistan and Middle East,
                        we have captured all the blooming industries including Textile, Automobile, and Infrastructure development.
                    </p>

                </div>

                {/* Carousel Section */}
                <div className="relative group">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full overflow-hidden select-none"
                    >
                        <CarouselContent className="-ml-4 md:-ml-8 items-center h-auto">
                            {EventsData.map((event, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-8 basis-[85%] sm:basis-[50%] lg:basis-[33.33%] h-full flex items-center">
                                    <div className={`
                                        relative w-full aspect-[9/16] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-xl overflow-hidden
                                        ${current === index
                                            ? "scale-100 z-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] grayscale-0 opacity-100 ring-4 ring-primary/20"
                                            : "scale-[0.85] opacity-30 grayscale blur-[2px]"
                                        }
                                    `}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Interactive Content Section */}
                <div className="max-w-3xl mx-auto mt-16 text-center">
                    <div className="overflow-hidden min-h-[180px] flex flex-col items-center justify-start">
                        {EventsData.map((event, index) => (
                            <div
                                key={index}
                                className={`
                                    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center space-y-6
                                    ${current === index ? "opacity-100 translate-y-0 relative h-auto pointer-events-auto" : "opacity-0 translate-y-12 absolute h-0 pointer-events-none"}
                                `}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-foreground tracking-tight">
                                    {event.title}
                                </h3>
                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide font-medium">
                                    {event.description}
                                </p>
                                <Button>
                                    Read More
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
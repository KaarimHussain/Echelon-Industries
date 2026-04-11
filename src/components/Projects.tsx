import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const ProjectsData = [
    {
        title: "Reliable Fire Fighting Solutions for Ultimate Safety",
        description: "Installation and maintenance of sophisticated fire fighting systems, ensuring maximum protection and compliance for industrial environments.",
        image: "https://cdn.echelonindustries.net/cdn/images/e926d30eb5003098_1775845090.png"
    },
    {
        title: "Future-Ready Elevators for Smart Infrastructure",
        description: "Design and deployment of modern elevator systems, integrating smart technologies for safer and more efficient building transportation.",
        image: "https://cdn.echelonindustries.net/cdn/images/73ae1ca8c808d4f7_1775845061.png"
    },
    {
        title: "Premium HVACR Solutions for Industrial Excellence",
        description: "Engineered heating, cooling, and refrigeration systems designed to optimize energy efficiency and maintain precise climate control in industrial facilities.",
        image: "https://cdn.echelonindustries.net/cdn/images/2d9af2596dfcd9ec_1775844460.jpg"
    },
    {
        title: "Comprehensive Drainage System for Industrials",
        description: "Development and integration of robust drainage systems, managing water flow and preventing flooding to keep facilities safe and operational.",
        image: "https://cdn.echelonindustries.net/cdn/images/16c08a1cddf1f72d_1775844760.jpg"
    },
]

export default function Projects() {
    return (
        <section className="min-h-[50vh] w-full bg-secondary overflow-hidden">
            <div className="container mx-auto pt-10 md:pt-20 pb-10 md:pb-20 px-5 md:px-10 lg:px-25 xl:px-35">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center items-start w-full gap-5"
                    >
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-medium text-primary">
                                Products
                            </p>
                            <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground">
                                Awesome products <br className="hidden md:block" /> from industrial company
                            </h2>
                        </div>
                        <Link
                            to={"/projects"}
                            className="group flex items-center justify-between gap-2 underline decoration-2 underline-offset-4 md:underline-offset-5 hover:underline-offset-8 decoration-primary text-primary duration-200 transition-all text-base md:text-lg"
                        >
                            Awesome Products{" "}
                            <ArrowDownRight className="group-hover:mx-3 duration-200" />
                        </Link>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-row justify-start md:justify-end items-center w-full gap-4 mt-6 md:mt-0"
                    >
                        <p className="text-4xl md:text-9xl font-black text-transparent"
                            style={{
                                WebkitTextStroke: "2px var(--primary)"
                            }}
                        >
                            250+
                        </p>
                        <p className="hidden md:block  text-base md:text-lg font-bold text-secondary-foreground" style={{ writingMode: "vertical-rl" }}>
                            Completed <br /> Products
                        </p>
                        <p className="block md:hidden text-base md:text-lg font-bold text-secondary-foreground">
                            Completed <br /> Products
                        </p>
                    </motion.div>
                </div>
            </div>
            <div>
                <Carousel className="select-none">
                    <CarouselContent className="overflow-hidden">
                        {ProjectsData.map((data, index) => (
                            <CarouselItem
                                key={index}
                                className="group basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 m-0 p-0 border border-zinc-700 hover:border-transparent transition-all duration-300"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative h-[500px] overflow-hidden flex items-end 
                                transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                                group-hover:scale-[1.08] group-hover:-translate-y-3 group-hover:rotate-x-[5deg]
                                group-hover:shadow-2xl group-hover:shadow-black/40 rounded-xl"
                                    style={{
                                        perspective: "1000px",
                                    }}
                                >
                                    {/* Overlay with text */}
                                    <div className="absolute z-10 top-0 left-0 h-full w-full flex flex-col justify-end p-10 transition-colors duration-300 bg-gradient-to-t from-black/80 via-black/70 to-black/10">
                                        <h3 className="text-2xl font-bold transition-colors duration-300 text-primary group-hover:text-white">
                                            {data.title}
                                        </h3>
                                        <p className="text-base md:text-lg font-medium text-secondary-foreground mt-2">
                                            {data.description}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <img
                                        src={data.image}
                                        alt={data.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-100 md:opacity-20 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0 group-hover:scale-110"
                                    />
                                </motion.div>
                            </CarouselItem>

                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}
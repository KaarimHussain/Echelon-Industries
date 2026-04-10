import { ArrowDownRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InnovationCard1 from "@/assets/imgs/Innovation.png"
import InnovationCard2 from "@/assets/imgs/Innovation1.png"
import InnovationCard3 from "@/assets/imgs/HVACProject.png"

const InnovationCards = [
    {
        title: "Fire Fighting Systems",
        description: "Advanced, reliable fire suppression solutions engineered with cutting-edge technology to safeguard lives, assets, and operations. Our systems exceed international safety standards, offering seamless integration and robust protection in the most demanding industrial environments.",
        image: InnovationCard1,
    },
    {
        title: "Industrial Automation Excellence",
        description: "Transform your facility with intelligent automation designed for precision, safety, and efficiency. Our innovative automation platforms streamline production, improve process reliability, and empower your team to achieve greater throughput—all while minimizing risks and downtime.",
        image: InnovationCard2,
    },
    {
        title: "Advanced HVACR Engineering",
        description: "Innovative climate control and refrigeration solutions engineered for industrial precision. Our high-efficiency HVACR systems optimize thermal performance, enhance air quality, and reduce energy consumption—ensuring your facility maintains the perfect environment for peak operational efficiency.",
        image: InnovationCard3,
    },
];

export default function Innovation() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="h-auto w-full">
            <div className="container mx-auto pb-20 pt-10 md:pt-30 px-5 md:px-10 lg:px-25 xl:px-35 min-h-[50vh]">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex flex-col justify-center items-start w-full gap-5">
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-medium text-primary">
                                Innovations
                            </p>
                            <h2 className="text-2xl md:text-4xl font-bold">
                                We Have The Solutions to<br className="hidden md:block" /> Your Toughest Challenges
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end items-center w-full gap-4 mt-6 md:mt-0">
                        <Link
                            to="/products"
                            className="group flex items-center justify-between gap-2 underline decoration-2 underline-offset-4 md:underline-offset-5 hover:underline-offset-8 decoration-primary text-primary duration-200 transition-all text-base md:text-lg"
                        >
                            Awesome Services{" "}
                            <ArrowDownRight className="group-hover:mx-3 duration-200" />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {InnovationCards.map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-col group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                gridRow: hoveredIndex === index ? 'span 2' : 'span 1',
                                transition: 'grid-row 0.5s ease-in-out'
                            }}
                        >
                            <div className="relative w-full overflow-hidden rounded-lg">
                                <img
                                    className="w-full object-cover object-center transition-all duration-500 ease-in-out h-64 md:h-72 lg:h-80"
                                    src={data.image}
                                    alt={data.title}
                                    style={{
                                        height: hoveredIndex === index ? '500px' : ''
                                    }}
                                />
                                <div
                                    className="absolute inset-0 bg-black/30 pointer-events-none transition-opacity duration-500"
                                    style={{
                                        opacity: hoveredIndex === index ? 0 : 1
                                    }}
                                />
                            </div>
                            <div
                                className="flex flex-col gap-3 pt-6 md:pt-8 transition-all duration-500"
                                style={{
                                    opacity: hoveredIndex === index ? 1 : 0.8,
                                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(8px)'
                                }}
                            >
                                <h3 className="text-xl md:text-2xl text-primary font-bold">
                                    {data.title}
                                </h3>
                                <p className="text-sm md:text-base text-secondary leading-relaxed">
                                    {data.description}
                                </p>
                                <Link
                                    to="/products"
                                    className="group flex items-center justify-start gap-2 underline decoration-2 underline-offset-4 md:underline-offset-5 hover:underline-offset-8 decoration-primary text-primary duration-200 transition-all text-base md:text-lg mt-2"
                                >
                                    Learn More{" "}
                                    <ArrowDownRight className="group-hover:mx-3 duration-200" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
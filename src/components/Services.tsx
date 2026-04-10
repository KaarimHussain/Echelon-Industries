import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import CardImage1 from "@/assets/imgs/Services-Image-Card.png";
import CardImage2 from "@/assets/imgs/Services-Image-Card2.png";
import CardImage3 from "@/assets/imgs/Services-Image-Card4.png";
import CardImage4 from "@/assets/imgs/Services-Image-Card5.png";
import CardImage5 from "@/assets/imgs/Services-Image-Card6.png";
import CardImage6 from "@/assets/imgs/Services-Image-Card7.png";
import CardImage7 from "@/assets/imgs/Services-Image-Card8.png";
// import CardImage8 from "@/assets/imgs/Services-Image-Card9.png";
import AutoPlay from "embla-carousel-autoplay"

const servicesCarouselData = [
    {
        title: "Fire Fighting",
        description: "Comprehensive fire detection, alarm, and suppression systems including sprinklers, hydrants, extinguishers, and fire pumps designed for industry safety and NFPA-compliance.",
        image: CardImage1
    },
    {
        title: "Elevators",
        description: "Supply, installation, and maintenance of passenger, freight, and custom industrial elevators with safety features, energy efficiency, and advanced control panels for seamless vertical transportation.",
        image: CardImage2
    },
    {
        title: "Insulation",
        description: "Expert insulation solutions for piping, ductwork, tanks, and equipment, using high-quality materials to reduce energy loss, promote worker safety, and ensure long-term durability in harsh conditions.",
        image: CardImage3
    },
    {
        title: "MS Pipes",
        description: "Provision and fabrication of Mild Steel (MS) pipes for fire protection, HVAC, plumbing, and industrial processes, available in various diameters and thicknesses with high corrosion resistance.",
        image: CardImage4
    },
    {
        title: "Copper Tubes and pipes ",
        description: "Supply and installation of premium copper tubes and pipes used in HVAC, refrigeration, plumbing, and gas distribution systems for their superior conductivity, anti-corrosive properties, and long lifespan.",
        image: CardImage5
    },
    {
        title: "Valves",
        description: "A complete range of industrial valves including gate, globe, check, butterfly, and ball valves; designed for reliable flow control, isolation, and safety in diverse industrial systems.",
        image: CardImage6
    },
    {
        title: "Pumps & Motors",
        description: "Selection, installation, and servicing of industrial pumps (centrifugal, submersible, etc.) and electric motors, ensuring efficient fluid movement, system reliability, and low maintenance requirements.",
        image: CardImage7
    },
];


export default function Services() {
    return (
        <>
            <div className="min-h-[50vh] w-full bg-secondary">
                <div className="container mx-auto pt-10 md:pt-20 px-5 md:px-10 lg:px-25 xl:px-35">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="flex flex-col justify-center items-start w-full gap-5">
                            <div className="flex flex-col">
                                <p className="text-xl md:text-2xl font-medium text-primary">
                                    Projects
                                </p>
                                <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground">
                                    Successfully completed <br className="hidden md:block" /> projects for our clients
                                </h2>
                            </div>
                            <Link
                                to={"/projects"}
                                className="group flex items-center justify-between gap-2 underline decoration-2 underline-offset-4 md:underline-offset-5 hover:underline-offset-8 decoration-primary text-primary duration-200 transition-all text-base md:text-lg"
                            >
                                Awesome Projects{" "}
                                <ArrowDownRight className="group-hover:mx-3 duration-200" />
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full gap-4 mt-6 md:mt-0">
                            <p className="text-base md:text-lg font-medium text-secondary-foreground">
                                We provide world-class industrial solutions for fire fighting, automation, safety, maintenance, and training. Our team delivers reliable systems and expert support tailored to your operational needs.
                            </p>
                            <p className="text-base md:text-lg font-medium text-secondary-foreground">
                                Echelon Industries is your trusted partner for end-to-end safety and automation—from advanced fire suppression systems, safety equipment, and seamless industrial automation to maintenance services and expert consultancy.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Carousel
                            plugins={[
                                AutoPlay({
                                    delay: 2500,
                                }),
                            ]}
                            opts={{
                                align: "start",
                            }}
                            className="select-none relative md:top-10 top-0">
                            <CarouselContent className="pt-10">
                                {servicesCarouselData.map((data, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="group relative transition-all duration-300 ease-in-out hover:bottom-5 bottom-0 basis-full sm:basis-1/2 lg:basis-1/3"
                                    >
                                        <div className="relative w-full">
                                            <div className="absolute -top-10 left-10">
                                                <span className="text-8xl font-bold text-secondary-foreground group-hover:text-primary">
                                                    0{index + 1}
                                                </span>
                                            </div>
                                            <img
                                                src={data.image}
                                                className="h-[450px] w-full object-cover object-center transition-transform duration-300 ease-in-out"
                                                alt=""
                                            />
                                            <div
                                                className="absolute bottom-10 group-hover:bottom-0 h-auto w-full items-center gap-4 transition-all duration-300 ease-in-out"
                                            >
                                                <div className="bg-primary p-5 flex flex-col items-start justify-center w-full transition-all duration-300">
                                                    <div className="flex gap-2 items-center justify-between w-full">
                                                        <h3 className="text-xl font-semibold text-primary-foreground">
                                                            {data.title}
                                                        </h3>
                                                        <ArrowUpRight className="text-primary-foreground transition-transform duration-300 group-hover:translate-x-2" size={40} />
                                                    </div>
                                                    <p className="text-primary-foreground transition-opacity duration-300 group-hover:block hidden mt-2">
                                                        {data.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div >
        </>
    )
}
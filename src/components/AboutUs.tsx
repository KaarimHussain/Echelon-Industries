import { motion } from "framer-motion";
import AboutUsImage from "@/assets/imgs/AboutUsBackground.png";
import Quotes from "@/assets/imgs/Quotes.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <section
            className="min-h-[70vh] w-full bg-secondary bg-center bg-cover"
            style={{
                backgroundImage: `url(${AboutUsImage})`,
            }}
        >
            <div className="container mx-auto pt-10 md:pt-20 px-5 md:px-10 lg:px-25 xl:px-35 relative">
                {/* Desktop (md+) positioned box */}
                <div className="hidden md:block">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute right-15 -bottom-120"
                    >
                        <div className="bg-primary p-10 flex flex-col justify-center gap-3 max-w-xl rounded-lg shadow-lg">
                            <img src={Quotes} className="h-10 w-10 object-center object-cover mb-5" alt="" />
                            <h2 className="text-2xl text-primary-foreground font-montserrat font-bold uppercase">
                                Echelon Industries
                            </h2>
                            <div className="text-primary-foreground space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 shrink-0"></div>
                                    <p><span className="font-bold text-lg">Core Focus:</span> Safety, automation, and reliability in industrial solutions.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 shrink-0"></div>
                                    <p><span className="font-bold text-lg">Expert Delivery:</span> Cutting-edge fire protection and world-class safety equipment.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 shrink-0"></div>
                                    <p><span className="font-bold text-lg">Consultative Approach:</span> Hands-on partnership from concept to commissioning.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground mt-2 shrink-0"></div>
                                    <p><span className="font-bold text-lg">Quality Commitment:</span> Exceeding industry standards through innovation and integrity.</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Link to={"/about"}>
                                    <Button variant={"secondary"}>
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-secondary p-7"></div>
                    </motion.div>
                </div>
                {/* Mobile: stack with spacing */}
                <div className=" md:hidden w-full flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-primary p-5 flex flex-col justify-center gap-3 w-full max-w-md rounded-lg shadow-lg mt-10 mb-5"
                    >
                        <img src={Quotes} className="h-8 w-8 object-center object-cover mb-3" alt="" />
                        <h2 className="text-xl text-primary-foreground font-montserrat font-bold uppercase">
                            Echelon Industries
                        </h2>
                        <p className="text-primary-foreground text-sm">
                            Echelon Industries is a leading provider of industrial solutions focusing on safety, automation, and reliability. We deliver cutting-edge fire protection, automation, and safety equipment to help businesses operate securely and efficiently.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
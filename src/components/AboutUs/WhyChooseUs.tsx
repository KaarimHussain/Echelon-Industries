import { Eye, Target } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <>
            <div className="min-h-[50vh] w-full">
                <div className="container mx-auto py-10 md:py-20 px-5 md:px-10 lg:px-25 xl:px-35">
                    <div className="flex flex-col items-center col-span-12 mb-10">
                        <p className="text-xl md:text-2xl font-medium text-primary text-center">
                            Innovating at Every Step
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-center">
                            Why Choose Us
                        </h2>
                    </div>
                    <div className="my-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="group shadow-lg rounded-xl p-5 hover:bg-primary transition-all duration-100">
                                <div className="flex gap-3 items-center">
                                    <div className="aspect-square rounded-full bg-secondary group-hover:bg-secondary-foreground transition-all duration-100 flex items-center justify-center p-2">
                                        <Target size={30} className="text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold group-hover:text-primary-foreground transition-all duration-100">Our Mission</h3>
                                </div>
                                <div className="mt-3">
                                    <p className="text-base text-zinc-600 group-hover:text-primary-foreground transition-all duration-100">
                                        To deliver innovative, reliable engineering solutions that enhance safety and performance. We aim to set new standards of excellence through quality, technology, and trust.
                                    </p>
                                </div>
                            </div>
                            <div className="group shadow-lg rounded-xl p-5 hover:bg-primary transition-all duration-100">
                                <div className="flex gap-3 items-center">
                                    <div className="aspect-square rounded-full bg-secondary group-hover:bg-secondary-foreground transition-all duration-100 flex items-center justify-center p-2">
                                        <Eye size={30} className="text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold group-hover:text-primary-foreground transition-all duration-100">Our Vision</h3>
                                </div>
                                <div className="mt-3">
                                    <p className="text-base text-zinc-600 group-hover:text-primary-foreground transition-all duration-100">
                                        To be a leading force in engineering innovation, shaping a safer and more advanced future. We envision empowering progress through technology, integrity, and sustainable growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
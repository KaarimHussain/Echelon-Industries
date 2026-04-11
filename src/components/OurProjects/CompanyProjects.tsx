import { motion } from "framer-motion";

const projects = [
    {
        title: "Dental Care Orthodontics, Karachi",
        image: "https://cdn.echelonindustries.net/cdn/images/207ef9db673fdcf1_1775863337.png",
        product: "Vertical Transportation System",
        consultant: "MB Associates",
        brand: "ElevateX"
    },
    {
        title: "Nixor College",
        image: "https://cdn.echelonindustries.net/cdn/images/87fcb3751af7886f_1775863494.png",
        product: "Vertical Transportation System",
        contractor: "Principal Builders",
        brand: "ElevateX"
    },
    {
        title: "The Citizens Foundation Head Office",
        image: "https://cdn.echelonindustries.net/cdn/images/168d6b91f3b2e017_1775863503.png",
        product: "Vertical Transportation System",
        consultant: "MB Associates",
        brand: "ElevateX"
    },
    {
        title: "Fluid Technology International - Vey",
        image: "https://cdn.echelonindustries.net/cdn/images/16a000fc189393e5_1775863643.png",
        product: "Vertical Transportation System",
        brand: "ElevateX"
    },
    {
        title: "Office Complex Karachi",
        image: "https://cdn.echelonindustries.net/cdn/images/ca25d28a2dda39b9_1775863538.png",
        product: "Ducting and Accessories"
    },
    {
        title: "Aga Khan University Hospital",
        image: "https://cdn.echelonindustries.net/cdn/images/9e514a57a8ad315b_1775863649.png",
        product: "Drainage Material",
        brand: "H3 Hammer"
    },
    {
        title: "Martin Dow, Quetta",
        image: "https://cdn.echelonindustries.net/cdn/images/6630d971e5921a17_1775863513.png",
        product: "Drainage Material",
        brand: "H3 Hammer"
    },
    {
        title: "Memon Medical Institute Hospital",
        image: "https://cdn.echelonindustries.net/cdn/images/cff659709b80cbac_1775863525.png",
        product: "Drainage Materials",
        brand: "H3 Hammer"
    },
    {
        title: "Administration Building Karachi",
        image: "https://cdn.echelonindustries.net/cdn/images/1c9188e5fde9130c_1775863350.png",
        product: "Fire Protection Material, Vertical Transportation System",
        consultant: "WASO",
        brand: "Lifeco-Uk, Volkslift"
    },
    {
        title: "Luckyone Mall, Karachi",
        image: "https://cdn.echelonindustries.net/cdn/images/0e7f77c1f0ff5532_1775863361.png",
        product: "Fire Protection System",
        contractor: "Tungsten Bond",
        brand: "Lifeco-Uk"
    },
    {
        title: "Dolmen Mall, Karachi",
        image: "https://cdn.echelonindustries.net/cdn/images/e4cadc0c28dc0d35_1775863372.png",
        product: "Fire Protection System",
        contractor: "360 Engineering",
        brand: "Lifeco-Uk"
    },
    {
        title: "Pakistan Reinsurance Limited",
        image: "https://cdn.echelonindustries.net/cdn/images/69d7402a6f1a0939_1775863383.png",
        product: "Fire Protection System",
        brand: "Lifeco-Uk"
    },
    {
        title: "Centre Point Tower - BAHL",
        image: "https://cdn.echelonindustries.net/cdn/images/5af7febe8170c286_1775863394.png",
        product: "Fire Protection System",
        contractor: "Prime Engineering",
        brand: "Lifeco-Uk"
    },
    {
        title: "C5 Maakson, Gulber Greens, Islamabad",
        image: "https://cdn.echelonindustries.net/cdn/images/8ba8340af2852ed0_1775863440.png",
        product: "Vertical Transportation System",
        brand: "Volkslift"
    },
    {
        title: "Hayatabad Medical Complex, Peshawar",
        image: "https://cdn.echelonindustries.net/cdn/images/c6392ea8063d938f_1775863455.png",
        product: "Vertical Transportation System",
        brand: "Volkslift"
    },
    {
        title: "The Avenair, Lahore",
        image: "https://cdn.echelonindustries.net/cdn/images/f5a4466617a50509_1775863475.png",
        product: "Vertical Transportation System",
        brand: "Volkslift"
    }
];

export default function CompanyProjects() {
    return (
        <section className="py-24 px-5 md:px-10 lg:px-20 xl:px-40 bg-white relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                            <div className="w-12 h-[2px] bg-primary"></div>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Excellence in Action</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-secondary leading-none uppercase">
                            Our Key <br />
                            <span className="text-primary">Projects</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-zinc-500 text-lg border-l-2 border-zinc-100 pl-6 hidden md:block">
                        A showcase of our most significant contributions across diverse industrial sectors, reflecting our commitment to quality and innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                            className="flex flex-col group cursor-default"
                        >
                            <div className="relative aspect-[11/10] overflow-hidden rounded-sm mb-6 shadow-2xl shadow-zinc-200 group-hover:shadow-primary/20 transition-all duration-500">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 border-[0px] group-hover:border-[12px] border-white/20 transition-all duration-500 pointer-events-none"></div>
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-secondary uppercase tracking-wider shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Project #{index + 1}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col flex-grow">
                                <h3 className="text-xl font-extrabold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <div className="mt-auto space-y-4">
                                    {project.product && (
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] uppercase tracking-widest text-primary font-black">Product</span>
                                            <span className="text-sm text-zinc-600 font-medium leading-relaxed">{project.product}</span>
                                        </div>
                                    )}
                                    
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-100">
                                        {(project.consultant || project.contractor) && (
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                                                    {project.consultant ? "Consultant" : "Contractor"}
                                                </span>
                                                <span className="text-[11px] text-secondary font-bold truncate">
                                                    {project.consultant || project.contractor}
                                                </span>
                                            </div>
                                        )}
                                        {project.brand && (
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">Brand</span>
                                                <span className="text-[11px] text-primary font-black truncate">{project.brand}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
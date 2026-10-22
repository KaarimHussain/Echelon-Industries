import { motion } from "framer-motion";
import Partner1 from "@/assets/imgs/Partner-1.png";
import Partner2 from "@/assets/imgs/Partner-2.png";
import Partner3 from "@/assets/imgs/Partner-3.png";
import Partner4 from "@/assets/imgs/Partner-4.png";
import Partner5 from "@/assets/imgs/Partner-5.png";
import Partner6 from "@/assets/imgs/Partner-6.png";
import Partner7 from "@/assets/imgs/Partner-7.png";
import Partner8 from "@/assets/imgs/Partner-8.png";
import Partner9 from "@/assets/imgs/Partner-9.png";

const PartnerData = [
    { image: Partner1, lightVariant: "" },
    { image: Partner2, lightVariant: "" },
    { image: Partner3, lightVariant: "" },
    { image: Partner4, lightVariant: "" },
    { image: Partner5, lightVariant: "" },
    { image: Partner6, lightVariant: "" },
    { image: Partner7, lightVariant: "" },
    { image: Partner8, lightVariant: "" },
    { image: Partner9, lightVariant: "" },
]

export default function Partners({ theme = "light" }) {
    // Theme configuration
    const themeConfig: any = {
        light: {
            bgColor: "bg-accent",
            textColor: "text-accent-foreground",
            accentColor: "text-primary"
        },
        dark: {
            bgColor: "bg-secondary",
            textColor: "text-secondary-foreground",
            accentColor: "text-primary"
        }
    };

    const currentTheme = themeConfig[theme] || themeConfig.light;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className={`min-h-[50vh] w-full ${currentTheme.bgColor} overflow-hidden`}>
            <div className="container mx-auto py-10 md:py-20 px-5 md:px-10 lg:px-25 xl:px-35">
                <div className="flex flex-col gap-5">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center col-span-12"
                    >
                        <p className={`text-xl md:text-2xl font-medium ${currentTheme.accentColor} text-center`}>
                            Partners
                        </p>
                        <h2 className={`text-3xl md:text-5xl font-bold text-center ${currentTheme.textColor}`}>
                            Partners who trust Echelon <br />Industries
                        </h2>
                    </motion.div>
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="my-5 flex flex-wrap justify-center items-center w-full gap-6"
                    >
                        {PartnerData.map((data: any, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`
                                    flex items-center justify-center w-full
                                    sm:w-1/2 md:w-1/3 lg:w-1/5 
                                    max-w-[200px]
                                `}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <img
                                    src={(theme === 'light' && data.lightVariant) ? data.lightVariant : data.image}
                                    alt={`Partner ${index + 1}`}
                                    className="object-contain h-16 md:h-24 w-auto max-w-[120px] grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

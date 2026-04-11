import { motion } from "framer-motion";

const PartnerData = [
    {
        image: "https://cdn.echelonindustries.net/cdn/images/244354fed247fd84_1775845874.png",
        lightVariant: ""
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/a3adc8f6e8c7ed31_1775848515.png",
        lightVariant: "https://cdn.echelonindustries.net/cdn/images/294844af57f2f486_1775845898.png"
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/7a7576636e82dac8_1775846144.png",
        lightVariant: ""
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/3630225f001c6925_1775847832.png",
        lightVariant: "https://cdn.echelonindustries.net/cdn/images/00b3354aa927488b_1775847405.png"
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/e561d9efe6267eeb_1775848298.png",
        lightVariant: ""
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/e236095c8a0d5b2c_1775848443.png",
        lightVariant: ""
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/8baa81e721568f0d_1775848635.webp",
        lightVariant: "https://cdn.echelonindustries.net/cdn/images/cab7ed3523635062_1775848704.png"
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/800137e5b44d3aa5_1775848756.png",
        lightVariant: ""
    },
    {
        image: "https://cdn.echelonindustries.net/cdn/images/20769cd04d0be61b_1775848810.png",
        lightVariant: ""
    },
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

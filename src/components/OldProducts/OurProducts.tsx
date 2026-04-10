import fire1 from "@/assets/imgs/Products/Fire1.png";
import fire2 from "@/assets/imgs/Products/Fire2.png";
import fire3 from "@/assets/imgs/Products/Fire3.png";
import fire4 from "@/assets/imgs/Products/Fire4.png";
import fire5 from "@/assets/imgs/Products/Fire5.png";
import fire6 from "@/assets/imgs/Products/Fire6.png";
import fire7 from "@/assets/imgs/Products/Fire7.png";
import fire8 from "@/assets/imgs/Products/Fire8.png";
import fire9 from "@/assets/imgs/Products/Fire9.png";

const PartnerData = [
    {
        image: fire1
    },
    {
        image: fire2
    },
    {
        image: fire3
    },
    {
        image: fire4
    },
    {
        image: fire5
    },
    {
        image: fire6
    },
    {
        image: fire7
    },
    {
        image: fire8
    },
    {
        image: fire9
    },
]

export default function OurProducts() {
    return (
        <>
            <div className="min-h-[50vh] w-full bg-secondary">
                <div className="container mx-auto pt-10 md:pt-20 pb-10 md:pb-20 px-5 md:px-10 lg:px-25 xl:px-35">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="flex flex-col justify-center items-start w-full gap-5">
                            <div className="flex flex-col">
                                <p className="text-xl md:text-2xl font-medium text-primary">
                                    Our Products
                                </p>
                                <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground">
                                    Best Products of <br className="hidden md:block" /> Firefighting
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end items-center w-full gap-4 mt-6 md:mt-0">
                            <p className="text-secondary-foreground text-base md:text-lg max-w-xl">
                                Discover Echelon Industries' top-tier firefighting products, chosen for their superior performance and reliability. Our range offers trusted solutions for industrial, commercial, and residential fire safety—ensuring the highest standards of protection and peace of mind.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-wrap justify-center items-center w-full gap-6">
                        {PartnerData.map((data, index) => (
                            <div
                                key={index}
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
                                    src={data.image}
                                    alt={`Partner ${index + 1}`}
                                    className="object-contain h-16 md:h-24 w-auto max-w-[120px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
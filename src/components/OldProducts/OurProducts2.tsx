import Elevators1 from "@/assets/imgs/Products/Elevators1.png";
import Elevators2 from "@/assets/imgs/Products/Elevators2.png";
import Elevators3 from "@/assets/imgs/Products/Elevators3.png";
import Elevators4 from "@/assets/imgs/Products/Elevators4.png";
import Elevators5 from "@/assets/imgs/Products/Elevators5.png";

const PartnerData = [
    {
        image: Elevators1
    },
    {
        image: Elevators2
    },
    {
        image: Elevators3
    },
    {
        image: Elevators4
    },
    {
        image: Elevators5
    },
]

export default function OurProducts2() {
    return (
        <>
            <div className="min-h-[50vh] w-full">
                <div className="container mx-auto pt-10 md:pt-20 pb-10 md:pb-20 px-5 md:px-10 lg:px-25 xl:px-35">
                    <div className="flex items-center justify-center gap-8">
                        <div className="flex flex-col justify-center items-center w-full gap-5">
                            <div className="flex flex-col items-center">
                                <p className="text-xl md:text-2xl font-medium text-primary">
                                    Our Products
                                </p>
                                <h2 className="text-2xl md:text-4xl font-bold text-center">
                                    Best Products of Elevators
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center items-center w-full gap-6">
                        {PartnerData.map((data, index) => (
                            <div
                                key={index}
                                className={`
                                        flex items-center justify-center w-full
                                        sm:w-1/2 md:w-1/3 lg:w-1/7 
                                        max-w-[300px]
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
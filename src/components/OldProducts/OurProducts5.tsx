import Insolation1 from "@/assets/imgs/Products/insolation1.jpg";
import Insolation2 from "@/assets/imgs/Products/insolation2.jpg";
import Insolation3 from "@/assets/imgs/Products/insolation3.jpg";

const PartnerData = [
    {
        image: Insolation1
    },
    {
        image: Insolation2
    },
    {
        image: Insolation3
    },
]

export default function OurProducts5() {
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
                                    Best Products of Insolation <br /> Pre-Insulated Ducts
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center items-center w-full gap-6">
                        {PartnerData.map((data, index) => (
                            <div
                                key={index}
                                className={`
                                    flex items-center justify-center
                                    w-full sm:w-1/2 md:w-1/4
                                    max-w-[400px]
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
                                    className="object-contain h-24 md:h-36 w-auto max-w-[300px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
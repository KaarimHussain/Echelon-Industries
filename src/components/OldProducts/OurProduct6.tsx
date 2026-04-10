import Valves1 from "@/assets/imgs/Products/Valves1.png";
import Valves2 from "@/assets/imgs/Products/Valves2.png";


const PartnerData = [
    {
        image: Valves1
    },
    {
        image: Valves2
    },
]

export default function OurProducts6() {
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
                                    Best Products of <br className="hidden md:block" /> Valves
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start w-full gap-4 mt-6 md:mt-0">
                            <p className="text-base md:text-lg font-medium text-secondary-foreground">
                                Discover our top-quality pre-insulated duct products, engineered for superior thermal efficiency and durability in HVAC applications. Our solutions are designed to provide reliable insulation while streamlining installation and maintenance.
                            </p>
                            <p className="text-base md:text-lg font-medium text-secondary-foreground">
                                Echelon Industries is dedicated to supplying premium insolation products that meet the highest industry standards. Trust us to enhance your ductwork systems with cutting-edge materials that ensure energy savings and long-lasting performance.
                            </p>
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
import HeroImage from "@/assets/imgs/Products/Products-Hero.jpg";
import EchIndusButton from "@/components/Button";

export default function ProductsHero() {
    return (
        <>
            <div className="h-full w-full">
                <div className="grid grid-cols-12">
                    <div
                        className="min-h-[85vh] col-span-12 px-10 md:px-20 grid lg:grid-cols-2 grid-cols-1 items-center justify-between h-full relative"
                        style={{
                            backgroundImage: `url(${HeroImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        {/* Dark overlay for mobile/tablet */}
                        <div className="absolute inset-0 bg-black/80 lg:hidden" />

                        {/* Gradient overlay for lg+ screens */}
                        <div
                            className="hidden lg:block absolute inset-0"
                            style={{
                                background: `linear-gradient(110deg, var(--secondary) 54%, var(--secondary-foreground) 54%, var(--secondary-foreground) 55%, transparent 55%)`
                            }}
                        />

                        <div className="relative flex flex-col items-start justify-center h-full gap-5">
                            <h1 className="text-start font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-primary-foreground font-montserrat leading-tight">
                                Echelon Industries <br />
                                <span className="underline underline-offset-4 decoration-primary font-montserrat decoration-[6px] sm:decoration-[8px] md:decoration-[10px]">PRODUCTS</span> <br />
                            </h1>
                            <p className="text-lg text-primary-foreground">
                                Discover our complete range of advanced fire safety products engineered for reliability, innovation, and rugged performance. From cutting-edge detection to robust suppression systems, Echelon Industries equips every sector with solutions designed to protect your people, assets, and operations—driving industry safety standards to new heights.
                            </p>
                            <EchIndusButton text="Explore More" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
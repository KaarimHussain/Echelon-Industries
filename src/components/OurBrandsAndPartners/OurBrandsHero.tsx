import HeroImage from "@/assets/imgs/OurBrandsAndPartners/Hero.png";
import EchIndusButton from "@/components/Button";
import HeroLogo from "@/assets/imgs/Hero-Logo.png";

export default function OurBrandsHero() {
    return (
        <>
            <div className="h-full w-full">
                <div className="grid grid-cols-12">
                    <div
                        className="min-h-[85vh] col-span-12 px-10 md:px-20 grid lg:grid-cols-2 grid-cols-1 items-center justify-between h-full "
                        style={{
                            background: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${HeroImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex flex-col items-start justify-center h-full gap-5">
                            <h1 className="text-start font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-primary-foreground font-montserrat leading-tight">
                                OUR BRANDS <br />
                                AND <span className="underline underline-offset-4 decoration-primary font-montserrat decoration-[6px] sm:decoration-[8px] md:decoration-[10px]">PARTNERS</span> <br />
                            </h1>
                            <p className="text-lg text-primary-foreground">
                                Discover our trusted brands and valued partners who drive innovation and excellence.<br />
                                Learn how together we deliver quality solutions across diverse industries.
                            </p>
                            <EchIndusButton text="Explore More" />
                        </div>
                        <div className=" lg:flex items-center justify-end hidden ">
                            <img src={HeroLogo} className="object-center object-cover" alt="" />
                        </div>
                    </div>
                    {/* End Grid Section */}
                    {/* Todo: Create Broken Pixel Effect on Bottom */}
                </div>
            </div>
        </>
    )
}
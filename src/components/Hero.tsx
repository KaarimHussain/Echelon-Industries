import EchIndusButton from "./Button";
import HeroLogo from "@/assets/imgs/Hero-Logo.png";

export default function Hero() {
    return (
        <>
            <div className="min-h-[85vh] w-full relative overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.echelonindustries.net/cdn/videos/c6b81233db5a9405_1775695564.mp4" type="video/mp4" />
                </video>

                {/* Overlay for Contrast */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>

                <div className="relative z-10 h-[85vh] px-5 md:px-10 grid lg:grid-cols-2 grid-cols-1 items-center justify-between">
                    <div className="flex flex-col items-start justify-center h-full gap-5">
                        <h1 className="text-start font-bold uppercase text-3xl sm:text-4xl md:text-5xl text-primary-foreground font-montserrat leading-tight">
                            COMPLETE SOLUTION <br />
                            OF <span className="underline underline-offset-4 decoration-primary font-montserrat decoration-[6px] sm:decoration-[8px] md:decoration-[10px]">FIRE FIGHTING</span> <br />
                            SYSTEMS
                        </h1>
                        <p className="text-lg text-primary-foreground">
                            Empowering industries with cutting-edge fire protection systems, automation, and safety solutions to secure your operations and drive excellence—Echelon Industries is your partner in reliability, innovation, and industrial success.
                        </p>
                        <EchIndusButton text="Explore More" />
                    </div>
                    <div className=" lg:flex items-center justify-end hidden ">
                        <img src={HeroLogo} className="object-center object-cover" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
import HeroImage from "@/assets/imgs/About/Hero-Bg.jpg";
import EchIndusButton from "@/components/Button";
import HeroLogo from "@/assets/imgs/Hero-Logo.png";

export default function CustomHero({
    backgroundImage = HeroImage,
    title = "ENGINEERING THE FUTURE WITH PURPOSE",
    highlightWord = "WITH",
    description = "Echelon Industries offers a diverse range of high-quality engineering and safety solutions tailored to meet the needs of various sectors",
    buttonText = "Explore More",
    showButton = true,
    showLogo = true,
    logoImage = HeroLogo,
    theme = "dark"
}) {
    // Theme configuration
    const themeConfig: any = {
        light: {
            overlay: "rgba(255,255,255,0.85)",
            textColor: "text-gray-900",
            descColor: "text-gray-700",
            accentColor: "decoration-primary"
        },
        dark: {
            overlay: "rgba(0,0,0,0.75)",
            textColor: "text-white",
            descColor: "text-gray-200",
            accentColor: "decoration-primary"
        }
    };

    const currentTheme = themeConfig[theme] || themeConfig.dark;

    // Split title to add highlight to specific word
    const titleParts = title.split(highlightWord);

    return (
        <>
            <div className="h-full w-full">
                <div className="grid grid-cols-12">
                    <div
                        className="min-h-[85vh] col-span-12 px-10 md:px-20 grid lg:grid-cols-2 grid-cols-1 items-center justify-between h-full"
                        style={{
                            background: `linear-gradient(${currentTheme.overlay}, ${currentTheme.overlay}), url(${backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="flex flex-col items-start justify-center h-full gap-5">
                            <h1 className={`text-start font-bold uppercase text-3xl sm:text-4xl md:text-5xl ${currentTheme.textColor} font-montserrat leading-tight`}>
                                {titleParts[0]}
                                <span className={`underline underline-offset-4 ${currentTheme.accentColor} font-montserrat decoration-[6px] sm:decoration-[8px] md:decoration-[10px]`}>
                                    {" "}{highlightWord}
                                </span>
                                {titleParts[1]}
                            </h1>
                            <p className={`text-lg ${currentTheme.descColor}`}>
                                {description}
                            </p>
                            {showButton && (
                                <EchIndusButton text={buttonText} />
                            )}
                        </div>
                        {showLogo && (
                            <div className="lg:flex items-center justify-end hidden">
                                <img src={logoImage} className="object-center object-cover" alt="Hero Logo" />
                            </div>
                        )}
                    </div>
                    {/* End Grid Section */}
                    {/* Todo: Create Broken Pixel Effect on Bottom */}
                </div>
            </div>
        </>
    )
}
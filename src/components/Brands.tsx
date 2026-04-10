import Marquee from "react-fast-marquee";
import Brand1 from "@/assets/imgs/Brands/Brand1.png";
import Brand2 from "@/assets/imgs/Brands/Brand2.png";
import Brand3 from "@/assets/imgs/Brands/Brand3.png";
import Brand4 from "@/assets/imgs/Brands/Brand4.png";
import Brand5 from "@/assets/imgs/Brands/Brand5.png";
import Brand6 from "@/assets/imgs/Brands/Brand6.png";
import Brand7 from "@/assets/imgs/Brands/Brand7.png";
import Brand8 from "@/assets/imgs/Brands/Brand8.png";
import Brand9 from "@/assets/imgs/Brands/Brand9.png";
import Brand10 from "@/assets/imgs/Brands/Brand10.png";
import Brand11 from "@/assets/imgs/Brands/Brand11.png";
import Brand12 from "@/assets/imgs/Brands/Brand12.png";
import Brand13 from "@/assets/imgs/Brands/Brand13.png";
import Brand14 from "@/assets/imgs/Brands/Brand14.png";
import Brand15 from "@/assets/imgs/Brands/Brand15.png";
import Brand16 from "@/assets/imgs/Brands/Brand16.png";
import Brand17 from "@/assets/imgs/Brands/Brand17.png";
import Brand18 from "@/assets/imgs/Brands/Brand18.png";
import Brand19 from "@/assets/imgs/Brands/Brand19.png";
import Brand20 from "@/assets/imgs/Brands/Brand20.png";

const brandImages = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    Brand10,
    Brand11,
    Brand12,
    Brand13,
    Brand14,
    Brand15,
    Brand16,
    Brand17,
    Brand18,
    Brand19,
    Brand20
];

export default function OurBrands() {
    return (
        <>
            <div className="min-h-[50vh] w-full">
                <div className="container mx-auto py-10 md:py-20 px-5 md:px-10 lg:px-25 xl:px-35">
                    <div className="flex flex-col items-center col-span-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-center">
                            BRANDS
                        </h2>
                        <Marquee className="mt-10">
                            {brandImages.map((img, idx) => (
                                <div key={idx} className="mx-8 flex items-center">
                                    <img
                                        src={img}
                                        alt={`Brand ${idx + 1}`}
                                        className="object-contain h-16 md:h-24 w-auto rounded-lg shadow"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}
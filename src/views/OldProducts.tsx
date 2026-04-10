import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import ProductsHero from "@/components/OldProducts/Hero";
import OurProducts3 from "@/components/OldProducts/OurProduct3";
import OurProducts6 from "@/components/OldProducts/OurProduct6";
import OurProducts from "@/components/OldProducts/OurProducts";
import OurProducts2 from "@/components/OldProducts/OurProducts2";
import OurProducts4 from "@/components/OldProducts/OurProducts4";
import OurProducts5 from "@/components/OldProducts/OurProducts5";

export default function Products() {
    return (
        <>
            <ProductsHero />
            <OurProducts />
            <OurProducts2 />
            <OurProducts3 />
            <OurProducts4 />
            <AboutUs />
            <OurProducts5 />
            <OurProducts6 />
            <ContactUs />
        </>
    )
}
import OurBrands from "@/components/Brands";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Innovation from "@/components/Innovation";
import OurBrandsHero from "@/components/OurBrandsAndPartners/OurBrandsHero";
import Partners from "@/components/Partners";

export default function OurBrandsAndPartners() {
    return (
        <>
            <OurBrandsHero />
            <Divider bottombox />
            <Partners theme="dark" />
            <OurBrands />
            <Innovation />
            <ContactUs />
        </>
    )
}
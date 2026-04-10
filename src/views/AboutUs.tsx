import AboutHero from "@/components/AboutUs/AboutHero";
import AboutOurCompany from "@/components/AboutUs/AboutOurCompany";
import Testimonials from "@/components/AboutUs/AboutTestimonials";
import OurBrands from "@/components/Brands";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Innovation from "@/components/Innovation";
import Partners from "@/components/Partners";

export default function AboutUs() {
    return (
        <>
            <AboutHero />
            <Divider bottombox />
            <AboutOurCompany />
            <Divider upperbox variant />
            <Testimonials />
            <Partners />
            <Innovation />
            <OurBrands />
            <ContactUs />
        </>
    )
}
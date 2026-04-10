import AboutHero from "@/components/AboutUs/AboutHero";
import AboutOurCompany from "@/components/AboutUs/AboutOurCompany";
import OurCompanyEmployee from "@/components/AboutUs/OurCompanyEmployee";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import OurBrands from "@/components/Brands";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";

export default function AboutUs() {
    return (
        <>
            <AboutHero />
            <Divider bottombox />
            <AboutOurCompany />
            <Divider upperbox variant />
            <WhyChooseUs />
            <OurCompanyEmployee />
            <Partners />
            <OurBrands />
            <Projects />
            <ContactUs />
        </>
    )
}
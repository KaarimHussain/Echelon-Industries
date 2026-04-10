import OurBrands from "@/components/Brands";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Innovation from "@/components/Innovation";
import OurProjectsHero from "@/components/OurProjects/OurProjectsHero";
import Projects from "@/components/Projects";

export default function OurProjects() {
    return (
        <>
            <OurProjectsHero />
            <Divider bottombox />
            <Projects />
            <Innovation />
            <OurBrands/>
            <ContactUs />
        </>
    )
}
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import CompanyProjects from "@/components/OurProjects/CompanyProjects";
import OurProjectsHero from "@/components/OurProjects/OurProjectsHero";
import Projects from "@/components/Projects";

export default function OurProjects() {
    return (
        <>
            <OurProjectsHero />
            <Divider bottombox />
            <CompanyProjects />
            <Projects />
            <ContactUs />
        </>
    )
}
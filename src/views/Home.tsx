import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
// import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Innovation from "@/components/Innovation";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import VideoPreview from "@/components/VideoPreview";

export default function Home() {
    return (
        <>
            <Hero />
            <Divider upperbox bottombox />
            <Services />
            <Partners />
            {/* <Events /> */}
            <VideoPreview />
            <Divider bottombox variant />
            <Projects />
            <Industries />
            <Divider onStart bottombox variant />
            <AboutUs />
            <Innovation />
            <ContactUs />
        </>
    )
}
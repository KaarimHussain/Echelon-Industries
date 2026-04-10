import CustomHero from "@/components/CustomHero";
import ContactHero from "@/assets/imgs/Contact/Hero.png"
import Partners from "@/components/Partners";
import ContactUs from "@/components/ContactUs";
import OurBrands from "@/components/Brands";
import Divider from "@/components/Divider";

export default function ContactUsPage() {
    return (
        <>
            <CustomHero
                title="Get In Touch With"
                highlightWord="Us"
                description="Have questions or need assistance? Our team is ready to help you with prompt support and solutions tailored to your needs."
                backgroundImage={ContactHero}
                showButton={false}

            />
            <Divider />
            <Partners />
            <OurBrands />
            <ContactUs />
        </>
    )
}
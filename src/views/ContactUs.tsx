import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import CustomHero from "@/components/CustomHero";
import ContactHero from "@/assets/imgs/Contact/Hero.png";
import Partners from "@/components/Partners";
import ContactUs from "@/components/ContactUs";
import OurBrands from "@/components/Brands";
import Divider from "@/components/Divider";

const title = `Contact Us | ${SITE_NAME}`;
const description =
    "Get in touch with Echelon Industries for fire protection systems, HVACR, elevators, MS pipes, and industrial safety solutions. Our team is ready to help with site surveys and tailored recommendations.";
const url = `${SITE_URL}/contact`;

export default function ContactUsPage() {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="contact Echelon Industries, fire protection inquiry Pakistan, HVACR consultation, elevator supplier contact, industrial safety Pakistan" />
                <link rel="canonical" href={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": title,
                    "description": description,
                    "url": url,
                    "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME }
                })}</script>
            </Helmet>

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
    );
}

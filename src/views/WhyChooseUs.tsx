import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import AboutHero from "@/components/AboutUs/AboutHero";
import AboutOurCompany from "@/components/AboutUs/AboutOurCompany";
import OurCompanyEmployee from "@/components/AboutUs/OurCompanyEmployee";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import OurBrands from "@/components/Brands";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";

const title = `About Us | Why Choose ${SITE_NAME}`;
const description =
    "Learn about Echelon Industries — our leadership team, decades of expertise in fire protection, HVACR, and industrial safety, and why Pakistan's top companies trust us to keep their facilities safe.";
const url = `${SITE_URL}/about`;

export default function AboutUs() {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="about Echelon Industries, fire safety company Pakistan, industrial safety team, HVACR experts, why choose Echelon" />
                <link rel="canonical" href={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": title,
                    "description": description,
                    "url": url,
                    "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME }
                })}</script>
            </Helmet>

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
    );
}

import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Innovation from "@/components/Innovation";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import VideoPreview from "@/components/VideoPreview";

const title = `${SITE_NAME} | Complete Fire Fighting, HVACR & Industrial Safety Solutions`;
const description =
    "Echelon Industries delivers complete fire protection systems, HVACR, elevators, MS pipes, valves, and industrial safety solutions for commercial and industrial facilities across Pakistan.";
const url = SITE_URL;
const ogImage = `${SITE_URL}/og-home.png`;

export default function Home() {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="fire fighting systems Pakistan, HVACR solutions, fire pumps, sprinklers, elevators, MS pipes, industrial safety, Echelon Industries" />
                <link rel="canonical" href={url} />
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={ogImage} />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
                {/* JSON-LD */}
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": title,
                    "description": description,
                    "url": url,
                    "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME }
                })}</script>
            </Helmet>

            <Hero />
            <Divider upperbox bottombox />
            <Services />
            <Partners />
            <VideoPreview />
            <Divider bottombox variant />
            <Projects />
            <Industries />
            <Divider onStart bottombox variant />
            <AboutUs />
            <Innovation />
            <ContactUs />
        </>
    );
}

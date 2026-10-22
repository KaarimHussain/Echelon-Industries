import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import OurBrands from "@/components/Brands";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Innovation from "@/components/Innovation";
import OurBrandsHero from "@/components/OurBrandsAndPartners/OurBrandsHero";
import Partners from "@/components/Partners";

const title = `Our Brands & Partners | ${SITE_NAME}`;
const description =
    "Echelon Industries partners with world-class brands to deliver premium fire protection, elevator, HVACR, and industrial safety solutions across Pakistan and the Gulf region.";
const url = `${SITE_URL}/brands`;

export default function OurBrandsAndPartners() {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="Echelon Industries partners, fire protection brands Pakistan, Lifeco UK, Volkslift, ElevateX, H3 Hammer, industrial safety brands" />
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
                    "@type": "WebPage",
                    "name": title,
                    "description": description,
                    "url": url,
                    "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME }
                })}</script>
            </Helmet>

            <OurBrandsHero />
            <Divider bottombox />
            <Partners theme="dark" />
            <OurBrands />
            <Innovation />
            <ContactUs />
        </>
    );
}

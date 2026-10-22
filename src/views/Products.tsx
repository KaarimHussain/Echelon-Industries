import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Innovation from "@/components/Innovation";
import ProductsHero from "@/components/Products/ProductsHero";
import ProductsListing from "@/components/Products/ProductsListing";

const title = `Products | Fire Pumps, Valves, Sprinklers & More — ${SITE_NAME}`;
const description =
    "Browse Echelon Industries' complete product range: fire pumps, automatic sprinklers, valves, fire extinguishers, fire detection systems, elevators, PPE, MS pipes, and foam systems.";
const url = `${SITE_URL}/products`;

export default function Products() {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="fire pumps Pakistan, automatic sprinklers, butterfly valves, fire extinguishers, addressable fire alarm, elevators Pakistan, PPE, MS pipes, foam system, Echelon Industries" />
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
                    "@type": "CollectionPage",
                    "name": title,
                    "description": description,
                    "url": url,
                    "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME },
                    "about": { "@type": "Thing", "name": "Fire Protection & Industrial Safety Products" }
                })}</script>
            </Helmet>

            <ProductsHero />
            <Divider />
            <ProductsListing />
            <Divider onStart bottombox variant />
            <AboutUs />
            <Innovation />
            <ContactUs />
        </>
    );
}

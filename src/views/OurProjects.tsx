import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import CompanyProjects from "@/components/OurProjects/CompanyProjects";
import OurProjectsHero from "@/components/OurProjects/OurProjectsHero";
import Projects from "@/components/Projects";

const title = `Our Projects | ${SITE_NAME} — Completed Industrial Projects`;
const description =
    "Explore Echelon Industries' completed projects: fire protection systems, vertical transportation, drainage, and HVACR installations for hospitals, malls, colleges, and commercial buildings across Pakistan.";
const url = `${SITE_URL}/projects`;

export default function OurProjects() {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="Echelon Industries projects, fire protection installation Pakistan, elevator installation, Dolmen Mall, Aga Khan Hospital, Nixor College, Luckyone Mall fire system" />
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
                    "about": { "@type": "Thing", "name": "Fire Protection & Elevator Installation Projects" }
                })}</script>
            </Helmet>

            <OurProjectsHero />
            <Divider bottombox />
            <CompanyProjects />
            <Projects />
            <ContactUs />
        </>
    );
}

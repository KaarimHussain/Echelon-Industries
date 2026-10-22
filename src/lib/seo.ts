export const SITE_URL = "https://echelonindustries.net";
export const SITE_NAME = "Echelon Industries";
export const SITE_DESCRIPTION =
    "Echelon Industries provides complete fire protection systems, HVACR, elevators, MS pipes, and industrial safety solutions for commercial and industrial facilities across Pakistan.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/fav-icon.svg`,
    "description": SITE_DESCRIPTION,
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+92-307-444-1083",
            "contactType": "sales",
            "areaServed": "PK",
            "availableLanguage": ["English", "Urdu"]
        }
    ],
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "PK"
    },
    "sameAs": []
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_URL}/products?search={search_term_string}`,
        "query-input": "required name=search_term_string"
    }
};

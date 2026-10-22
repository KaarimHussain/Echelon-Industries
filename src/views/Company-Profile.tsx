import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const title = `Company Profile | ${SITE_NAME}`;
const description =
    "View the Echelon Industries company profile — our services, product portfolio, and track record in fire protection, HVACR, elevators, and industrial safety across Pakistan.";
const url = `${SITE_URL}/company-profile`;

export default function CompanyProfile() {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Helmet>

            <div className="min-h-screen w-full py-10">
                <h1 className="text-center text-4xl font-bold">
                    Company Profile
                </h1>
                <p className="text-center mt-4 text-zinc-500">Coming Soon</p>
            </div>
        </>
    );
}

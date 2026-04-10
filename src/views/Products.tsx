import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Divider from "@/components/Divider";
import Innovation from "@/components/Innovation";
import ProductsHero from "@/components/Products/ProductsHero";
import ProductsListing from "@/components/Products/ProductsListing";

export default function Products() {
    return (
        <>
            <ProductsHero />
            <Divider />
            <ProductsListing />
            <Divider onStart bottombox variant />
            <AboutUs />
            <Innovation />
            <ContactUs />
        </>
    )
}
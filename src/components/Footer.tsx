import { Link } from "react-router-dom";
import LogoImage from "@/assets/imgs/logo.png"; // Adjust path as needed
import { Email } from "./Content";
import { toast } from "sonner"
import { useState } from "react";

// Footer Menu Data - easily replaceable
const footerMenuData = {
    mainMenu: [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about" },
        { title: "Products", link: "/products" },
    ],
    secondaryMenu: [
        { title: "Our Projects", link: "/projects" },
        { title: "Contact Us", link: "/contact" }
    ]
};

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [emailInput, setEmailInput] = useState<string | null>();

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        console.log('Subscribe email:', email);
        // Add your subscription logic here
    };

    const onEmailSubscribe = (e: any) => {
        e.preventDefault();

        // Check for empty input
        if (!emailInput || emailInput.trim() === "") {
            toast("Input box cannot be empty");
            return;
        }

        // Email validation (basic pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.trim())) {
            toast("Please enter a valid email address");
            return;
        }

        setEmailInput("");
        toast("Email has been subscribed successfully!");
    }

    return (
        <footer className="w-full bg-secondary text-white">
            <div className="container mx-auto px-5 md:px-10 lg:px-25 xl:px-35 py-10 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
                    {/* Logo and Description */}
                    <div className="flex flex-col gap-5">
                        <div className="w-48 md:w-56">
                            <img
                                src={LogoImage}
                                alt="Echelon Industries Logo"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                            Empowering industries with cutting-edge fire protection systems, automation, and safety solutions to secure your operations and drive excellence—Echelon Industries is your partner in reliability, innovation, and industrial success.
                        </p>
                    </div>

                    {/* Newsletter Section */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-xl md:text-2xl font-bold">
                            Newsletter
                        </h3>
                        <p className="text-sm md:text-base text-gray-300">
                            Stay updated with our latest innovations, industry insights, and exclusive offers. Subscribe to our newsletter and never miss important updates from Echelon Industries.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    onChange={e => setEmailInput(e.target.value)}
                                    className="w-full bg-transparent border-b-2 border-gray-500 focus:border-primary outline-none text-white placeholder-gray-400 py-3 pr-24 transition-colors"
                                />
                                <button
                                    onClick={onEmailSubscribe}
                                    type="submit"
                                    className="absolute right-0 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 font-semibold transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Main Menu Section */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl md:text-2xl font-bold">
                                Main Menu
                            </h3>
                            <nav className="flex flex-col gap-3">
                                {footerMenuData.mainMenu.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className="text-sm md:text-base text-gray-300 hover:text-primary transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl md:text-2xl font-bold opacity-0 md:opacity-100">
                                &nbsp;
                            </h3>
                            <nav className="flex flex-col gap-3">
                                {footerMenuData.secondaryMenu.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.link}
                                        className="text-sm md:text-base text-gray-300 hover:text-primary transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-700 my-8 md:my-10"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
                        {currentYear} All Rights Reserved By{" "}
                        <a
                            href={`mailto:${Email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors font-semibold"
                        >
                            Echelon Industries
                        </a>
                    </p>
                    {/* <div className="flex flex-row gap-4 md:gap-6">
                        <Link
                            to="/privacy-policy"
                            className="text-sm md:text-base text-gray-400 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link
                            to="/terms-conditions"
                            className="text-sm md:text-base text-gray-400 hover:text-primary transition-colors"
                        >
                            Terms & Conditions
                        </Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
import GlobalMapImage from "@/assets/imgs/GlobeMap.png"
import { Facebook, Linkedin, Instagram, ArrowDownRight, Map, Globe, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Email, PhoneNumber, SecondaryPhoneNumber } from "./Content";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactUs() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    // Email validation function
    function validateEmail(mail: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    // Sonner toast notification

    // Form submission handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name.trim()) {
            toast.error("Please enter your name.");
            return;
        }
        if (!email.trim() || !validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (!message.trim()) {
            toast.error("Please enter your message.");
            return;
        }

        setLoader(true);

        try {
            // Simulate API call (replace with actual API if needed)
            await new Promise((resolve) => setTimeout(resolve, 1400));

            setName("");
            setEmail("");
            setMessage("");
            toast.success("Message sent! We will get back to you soon.");
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        } finally {
            setLoader(false);
        }
    };



    return (
        <>
            <div className="min-h-screen w-full bg-secondary">
                <div className="container h-full mx-auto pt-10 md:pt-20 pb-10 md:pb-20 px-5 md:px-10 lg:px-25 xl:px-35 relative"
                    style={{
                        background: `url(${GlobalMapImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12">
                        {/* Left Column - Contact Information */}
                        <div className="flex flex-col justify-start items-start w-full gap-8">
                            {/* Header */}
                            <div className="flex flex-col gap-2">
                                <p className="text-xl md:text-2xl font-medium text-primary">
                                    Contact
                                </p>
                                <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground">
                                    We are always ready<br className="hidden md:block" /> to help you and answer<br className="hidden md:block" /> your questions
                                </h2>
                            </div>

                            {/* Location and Phone - First Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                                <div className="flex flex-col gap-3">
                                    <p className="flex items-center gap-2 text-lg md:text-xl font-semibold text-primary">
                                        Location <Map />
                                    </p>
                                    <span className="text-sm md:text-base text-secondary-foreground leading-relaxed">
                                        201, 16-C, lane-12, Khayaban e Ittehad, Phase II Ext, DHA, Karachi-75500, Pakistan
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="flex items-center gap-2 text-lg md:text-xl font-semibold text-primary">
                                        Phone <Phone />
                                    </p>
                                    <a
                                        href="tel:+922135801075"
                                        className="text-sm md:text-base text-secondary-foreground hover:text-primary transition-colors"
                                    >
                                        {PhoneNumber}
                                    </a>
                                    <a
                                        href="tel:+923074441083"
                                        className="text-sm md:text-base text-secondary-foreground hover:text-primary transition-colors"
                                    >
                                        {SecondaryPhoneNumber}
                                    </a>
                                </div>
                            </div>

                            {/* Follow Us and Email - Second Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                                <div className="flex flex-col gap-3">
                                    <p className="flex items-center gap-2 text-lg md:text-xl font-semibold text-primary">
                                        Follow Us <Globe />
                                    </p>
                                    <div className="flex flex-row gap-4 mt-2">
                                        <a
                                            href="https://www.facebook.com/p/Echelon-Industries-61555921736727/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/70 transition-colors"
                                            aria-label="Facebook"
                                        >
                                            <Facebook size={28} />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/echelon-industries/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/70 transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin size={28} />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/echelonindustries/?e=12561505-cf3b-4666-b2df-d316bcf7eccf&g=5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-primary/70 transition-colors"
                                            aria-label="Instagram"
                                        >
                                            <Instagram size={28} />
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="flex items-center gap-2 text-lg md:text-xl font-semibold text-primary">
                                        Email <Mail />
                                    </p>
                                    <a
                                        href="mailto:info@company.com"
                                        className="text-sm md:text-base text-secondary-foreground hover:text-primary transition-colors"
                                    >
                                        {Email}
                                    </a>
                                </div>
                            </div>

                            {/* Since 2013 - Large Text */}
                            <div className="mt-8 md:mt-12 w-full overflow-hidden">
                                <p className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent uppercase "
                                    style={{
                                        WebkitTextStroke: "2px var(--primary)"
                                    }}
                                >
                                    Since 2013
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="w-full h-full">
                            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 flex flex-col gap-5 h-full">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get In Touch</h2>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    Have a question, need a quote, or want to discuss how Echelon Industries can support your operations? Reach out—our experts are ready to respond promptly and provide the solutions you need. We look forward to partnering with you.
                                </p>

                                <form className="flex flex-col gap-5 mt-4">
                                    <Input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Your Name"
                                        name="name"
                                        autoComplete="name"
                                        required
                                        disabled={loader}
                                        className="border-0 shadow-none outline-0 border-b-2 rounded-none hover:border-primary focus:border-primary focus-visible:ring-0 px-2 py-5 text-base"
                                    />
                                    <Input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Your Email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        disabled={loader}
                                        className="border-0 shadow-none outline-0 border-b-2 rounded-none hover:border-primary focus:border-primary focus-visible:ring-0 px-2 py-5 text-base"
                                    />
                                    <Textarea
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Your Message"
                                        name="message"
                                        rows={8}
                                        required
                                        disabled={loader}
                                        className="border-0 shadow-none outline-0 border-b-2 rounded-none hover:border-primary focus:border-primary focus-visible:ring-0 resize-none px-2 py-5 text-base"
                                    />
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="group flex items-center justify-start gap-2 underline decoration-2 underline-offset-4 md:underline-offset-5 hover:underline-offset-8 decoration-primary text-primary duration-200 transition-all text-base md:text-lg font-semibold mt-2"
                                    >
                                        Send Message{" "}
                                        <ArrowDownRight className="group-hover:mx-3 duration-200" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.7517345773826!2d67.07177427482567!3d24.832117446392154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd6a9ac782d%3A0x796c0d5b1cdaf759!2sEchelon%20Industries!5e1!3m2!1sen!2s!4v1760491665947!5m2!1sen!2s" className="w-full" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
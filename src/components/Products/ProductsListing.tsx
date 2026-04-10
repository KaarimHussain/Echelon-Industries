import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Package, Calendar, MessageCircle, Loader2 } from 'lucide-react';
import { categories, productsData } from "@/data/ProductListingData"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";

const PAKISTAN_CITIES = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
    "Multan", "Peshawar", "Quetta", "Sialkot", "Hyderabad",
    "Gujranwala", "Sargodha", "Bahawalpur", "Sukkur"
];

const TIMING_OPTIONS = [
    "ASAP", "Within 1 Month", "1-3 Months", "3+ Months", "Just Researching"
];

export default function ProductsListing() {
    const [searchParams] = useSearchParams();
    const { hash } = useLocation();
    const categoryParam = searchParams.get('category');

    const [selectedCategory, setSelectedCategory] = useState(categoryParam || "Fire Pumps");
    const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<any>(null);
    const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

    // Form States
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [product, setProduct] = useState("");
    const [timing, setTiming] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const [searchQuery,] = useState("");

    // Update selected category when URL parameter changes
    useEffect(() => {
        if (categoryParam && categories.includes(categoryParam)) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    useEffect(() => {
        const section = document.getElementById('product-listing');
        if (section) {
            if (hash === '#product-listing' || categoryParam) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [categoryParam, hash]);

    const handleInquiryClick = (productData: any) => {
        setSelectedProductForInquiry(productData);
        setProduct(productData.name);
        setIsInquiryModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name.trim()) {
            toast.error("Please enter your name.");
            return;
        }
        if (!phone.trim()) {
            toast.error("Please enter your phone number.");
            return;
        }
        if (!city) {
            toast.error("Please select your city.");
            return;
        }
        if (!product) {
            toast.error("Please select a product.");
            return;
        }
        if (!timing) {
            toast.error("Please select your required timing.");
            return;
        }

        setLoader(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Clear form
            setName("");
            setPhone("");
            setCity("");
            setTiming("");
            setMessage("");
            
            toast.success(`Inquiry sent for ${product}! We will contact you shortly.`);
            setIsInquiryModalOpen(false);
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        } finally {
            setLoader(false);
        }
    };

    const filteredProducts = productsData.filter(p => {
        const matchesCategory = p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen w-full relative">
            <div className="grid grid-cols-12">
                {/* Sidebar */}
                <div className="col-span-12 lg:col-span-3 relative">
                    <div className="min-h-screen sticky top-0 bg-secondary ps-10">
                        <div className="py-8">
                            {categories.map((category) => (
                                <div key={category} className="relative overflow-y-auto">
                                    <button
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full text-left px-8 py-4 transition-all duration-200 relative ${selectedCategory === category
                                            ? "text-white font-semibold"
                                            : "text-gray-400 hover:text-gray-200 font-medium"
                                            }`}
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        {category}
                                    </button>
                                    {selectedCategory === category && (
                                        <div
                                            className="absolute right-0 top-1/2 transform -translate-y-1/2"
                                            style={{
                                                width: 0, height: 0,
                                                borderTop: '12px solid transparent',
                                                borderBottom: '12px solid transparent',
                                                borderRight: '12px solid #f5f5f5'
                                            }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="col-span-12 lg:col-span-9" id='product-listing'>
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            {selectedCategory}
                        </h1>
                        <p className="text-muted-foreground mb-8">Click on any product to request a quote or more information.</p>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((p) => (
                                    <div
                                        key={p.id}
                                        onClick={() => handleInquiryClick(p)}
                                        className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border border-zinc-100 cursor-pointer flex flex-col"
                                    >
                                        <div className="relative h-64 bg-muted overflow-hidden flex items-center justify-center">
                                            <img
                                                src={p.image}
                                                alt={p.name}
                                                className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                                                <div className="bg-white text-primary px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                                                    Request Info
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col gap-3 flex-grow">
                                            <h3 className="text-2xl font-bold text-foreground">
                                                {p.name}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {p.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-2xl text-gray-400">No products found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Inquiry Modal */}
            <AnimatePresence>
                {isInquiryModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsInquiryModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-5xl rounded overflow-hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsInquiryModalOpen(false)}
                                className="absolute top-6 right-6 p-2 bg-muted rounded-full hover:bg-muted-foreground hover:text-white transition-all z-10"
                            >
                                <X className="size-5" />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Left Side - Product Preview (Mobile: Top) */}
                                <div className="md:w-5/12 bg-zinc-50 p-8 flex flex-col justify-center border-r border-zinc-100">
                                    <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-md">
                                        <img src={selectedProductForInquiry?.image} className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground mb-2">{selectedProductForInquiry?.name}</h2>
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                                        {selectedProductForInquiry?.category}
                                    </span>
                                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                                        Request a custom quote or technical specifications for this product.
                                    </p>
                                </div>

                                {/* Right Side - Form */}
                                <div className="md:w-7/12 p-10">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Send className="size-5 text-primary" /> Send Inquiry
                                    </h3>

                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Full Name</label>
                                            <Input 
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                disabled={loader}
                                                required 
                                                placeholder="John Doe" 
                                                className="h-11 rounded-xl bg-zinc-50/50" 
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Phone</label>
                                                <Input 
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    disabled={loader}
                                                    required 
                                                    type="tel" 
                                                    placeholder="+92 ..." 
                                                    className="h-11 rounded-xl bg-zinc-50/50" 
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1 flex items-center gap-1"><MapPin className="size-3" /> Location</label>
                                                <select 
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    disabled={loader}
                                                    required 
                                                    className="flex h-11 w-full rounded-xl border border-input bg-zinc-50/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-all cursor-pointer"
                                                >
                                                    <option value="">Select City</option>
                                                    {PAKISTAN_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1 flex items-center gap-1"><Package className="size-3" /> Product</label>
                                                <select 
                                                    value={product}
                                                    onChange={(e) => setProduct(e.target.value)}
                                                    disabled={loader}
                                                    required 
                                                    className="flex h-11 w-full rounded-xl border border-input bg-zinc-50/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-all cursor-pointer"
                                                >
                                                    {productsData.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1 flex items-center gap-1"><Calendar className="size-3" /> Required When</label>
                                                <select 
                                                    value={timing}
                                                    onChange={(e) => setTiming(e.target.value)}
                                                    disabled={loader}
                                                    required 
                                                    className="flex h-11 w-full rounded-xl border border-input bg-zinc-50/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-all cursor-pointer"
                                                >
                                                    <option value="">Select Timing</option>
                                                    {TIMING_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-1">Message (Optional)</label>
                                            <Textarea 
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                disabled={loader}
                                                rows={3} 
                                                placeholder="Tell us more about your project needs..." 
                                                className="rounded-xl bg-zinc-50/50 resize-none min-h-[100px]" 
                                            />
                                        </div>

                                        <div className='flex gap-2 justify-center items-center flex-col'>
                                            <Button 
                                                type="submit" 
                                                disabled={loader}
                                                className="w-full h-14 text-base font-bold mt-4 flex items-center justify-center gap-2"
                                            >
                                                {loader ? (
                                                    <>Processing... <Loader2 className="size-5 animate-spin" /></>
                                                ) : (
                                                    "Request Quote"
                                                )}
                                            </Button>
                                            <div className="flex items-center gap-2 w-full">
                                                <div className="bg-primary/20 w-full h-[1px]"></div>
                                                <span className="text-[10px] font-bold text-muted-foreground">OR</span>
                                                <div className="bg-primary/20 w-full h-[1px]"></div>
                                            </div>
                                            <Button
                                                type="button"
                                                variant={"secondary"}
                                                disabled={loader}
                                                className="w-full h-14 text-base font-bold flex items-center justify-center gap-2"
                                                onClick={() => {
                                                    const phoneNumber = "923074441083";
                                                    const whatsappMessage = `Hello Echelon Industries! I'm interested in the "${selectedProductForInquiry?.name}". Could you please provide more information and a quote?`;
                                                    const encodedMessage = encodeURIComponent(whatsappMessage);
                                                    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
                                                }}
                                            >
                                                Message Us On WhatsApp <MessageCircle className="size-5 text-[#25D366]" />
                                            </Button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

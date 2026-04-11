import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logo from "@/assets/imgs/Logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="bg-secondary border-b border-primary/50 text-secondary-foreground sticky top-0 z-50">
            <div className="container mx-auto px-5 md:px-10">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/">
                        <img src={Logo} className="object-center object-cover w-45" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 select-none">
                        <Link to="/" className="text-sm text-secondary-foreground hover:text-primary transition-colors font-medium">
                            Home
                        </Link>
                        {/* Our Company Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="text-sm flex items-center gap-1 text-secondary-foreground hover:text-primary transition-colors font-medium">
                                    Our Company
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="bg-secondary border-primary/10">
                                <Link to="/about" className="w-full">
                                    <DropdownMenuItem className="text-secondary-foreground hover:text-primary hover:bg-secondary/50 cursor-pointer">
                                        About Us
                                    </DropdownMenuItem>
                                </Link>
                                <Link to="/brands" className="w-full">
                                    <DropdownMenuItem className="text-secondary-foreground hover:text-primary hover:bg-secondary/50 cursor-pointer">
                                        Our Brands
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Products Dropdown */}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="text-sm flex items-center gap-1 text-secondary-foreground hover:text-primary transition-colors font-medium">
                                    Products
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="bg-secondary border-primary/10">
                                <Link to="/products?category=Fire Pumps" className="w-full">
                                    <DropdownMenuItem className="text-secondary-foreground hover:text-primary hover:bg-secondary/50 cursor-pointer">
                                        Fire Pumps
                                    </DropdownMenuItem>
                                </Link>
                                <Link to="/products?category=Valves" className="w-full">
                                    <DropdownMenuItem className="text-secondary-foreground hover:text-primary hover:bg-secondary/50 cursor-pointer">
                                        Valves
                                    </DropdownMenuItem>
                                </Link>
                                <Link to="/products?category=Lifts and Elevators" className="w-full">
                                    <DropdownMenuItem className="text-secondary-foreground hover:text-primary hover:bg-secondary/50 cursor-pointer">
                                        Lifts & Elevators
                                    </DropdownMenuItem>
                                </Link>
                                <Link to="/products?category=Personal Protective Equipment" className="w-full">
                                    <DropdownMenuItem className="text-secondary-foreground hover:text-primary hover:bg-secondary/50 cursor-pointer">
                                        Personal Protective Equipment
                                    </DropdownMenuItem>
                                </Link>
                                <Link to="/products?category=MS Pipes" className="w-full">
                                    <DropdownMenuItem className="text-secondary-foreground hover:text-primary hover:bg-secondary/50 cursor-pointer">
                                        MS Pipes
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link to="/projects" className="text-sm text-secondary-foreground hover:text-primary transition-colors font-medium">
                            Our Projects
                        </Link>

                        <Link to="/contact" className="text-sm text-secondary-foreground hover:text-primary transition-colors font-medium">
                            Contact Us
                        </Link>
                    </div>

                    {/* CTA Button and Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link to={"/contact"}>
                            <Button className="hover:bg-accent hover:text-accent-foreground hidden sm:inline-flex font-medium">
                                Get In Touch
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleMenu}
                            className="md:hidden p-2 hover:bg-neutral-800 rounded-lg transition-colors border border-primary/20"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden pb-6 border-t border-primary/30"
                        >
                            <div className="flex flex-col gap-1 pt-4">
                                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                                    <Link
                                        to="/"
                                        className="text-primary-foreground hover:text-primary transition-colors font-medium px-2 py-3 flex items-center justify-between"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </motion.div>

                                {/* Mobile Our Company Dropdown */}
                                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="px-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button className="flex items-center gap-1 text-primary-foreground hover:text-primary transition-colors font-medium w-full py-3">
                                                Our Company
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start" className="bg-secondary border-primary/10">
                                            <DropdownMenuItem className="text-primary-foreground hover:text-primary hover:bg-secondary/60 cursor-pointer">
                                                <Link to="/about" className="w-full">
                                                    About Us
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-primary-foreground hover:text-primary hover:bg-secondary/60 cursor-pointer">
                                                <Link to="/brands" className="w-full">
                                                    Our Brands
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </motion.div>

                                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                                    <Link
                                        to="/products"
                                        className="text-primary-foreground hover:text-primary transition-colors font-medium px-2 py-3 flex items-center justify-between"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Products
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                                    <Link
                                        to="/projects"
                                        className="text-primary-foreground hover:text-primary transition-colors font-medium px-2 py-3 flex items-center justify-between"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Our Projects
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                                    <Link
                                        to="/contact"
                                        className="text-primary-foreground hover:text-primary transition-colors font-medium px-2 py-3 flex items-center justify-between"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </motion.div>

                                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="pt-2">
                                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
                                        Get In Touch
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

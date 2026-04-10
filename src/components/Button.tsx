import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface EchIndusButtonProps {
    text?: string;
    icon?: LucideIcon;
}

export default function EchIndusButton({
    text = "Explore More",
    icon: Icon = ArrowUpRight,
}: EchIndusButtonProps) {
    return (
        <Link to={"/contact"}>
            <motion.div
                className="relative flex w-[220px] h-[56px] cursor-pointer overflow-hidden border-4 border-primary"
                whileHover="hover"
                initial="initial"
            >
                {/* Left / Text section */}
                <motion.div
                    className="flex items-center justify-center bg-transparent text-primary-foreground overflow-hidden"
                    variants={{
                        initial: { flex: 1, opacity: 1, display: "block", padding: "12px 20px" },
                        hover: { flex: 0, opacity: 0, display: "none", padding: "0" },
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                    }}
                >
                    <span className="text-lg font-semibold whitespace-nowrap">
                        {text}
                    </span>
                </motion.div>

                {/* Right / Icon section */}
                <motion.div
                    className="flex items-center justify-center bg-primary text-primary-foreground px-3 "
                    variants={{
                        initial: { flex: 0 },
                        hover: { flex: 1 },
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                    }}
                >
                    <motion.div
                        variants={{
                            initial: { rotate: 0, scale: 1 },
                            hover: { rotate: 45, scale: 1.1 },
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 15,
                        }}
                    >
                        <Icon className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </Link>
    );
}

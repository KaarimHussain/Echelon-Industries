import { useState } from 'react';
import { Building2, Factory, Hospital, ShoppingBag } from "lucide-react";
import { Link } from 'react-router-dom';

// Filter data array - easily replaceable
const industriesFilterData = [
    {
        id: 1,
        title: "Factories",
        icon: Factory
    },
    {
        id: 2,
        title: "Commercial Buildings",
        icon: Building2
    },
    {
        id: 3,
        title: "Hospitals",
        icon: Hospital
    },
    {
        id: 4,
        title: "Shopping Malls",
        icon: ShoppingBag
    }
];

// Content data array - easily replaceable
const industriesContentData = [
    {
        id: 1,
        categoryId: 1,
        title: "Industrial Solutions",
        image: "https://cdn.echelonindustries.net/cdn/images/c2f4083649f39896_1775693896.jpg",
        description: [
            "Enhance your manufacturing operations with our advanced industrial automation and safety solutions, tailored to optimize efficiency and ensure maximum uptime.",
            "From high-performance fire suppression systems to precision-engineered pump and motor installations, we deliver the technical excellence your facility requires.",
            "Our commitment to safety and reliability means your industrial workspace is equipped with state-of-the-art protection, meeting the highest international standards."
        ]
    },
    {
        id: 2,
        categoryId: 2,
        title: "Commercial Excellence",
        image: "https://cdn.echelonindustries.net/cdn/images/49f712fe0a6e4565_1775694002.jpg",
        description: [
            "Modern commercial building solutions with state-of-the-art technology and innovative design approaches for business success.",
            "Expert planning and execution for commercial spaces that drive productivity and create impressive environments.",
            "Comprehensive commercial building services tailored to your business needs with focus on efficiency and aesthetics."
        ]
    },
    {
        id: 3,
        categoryId: 3,
        title: "Healthcare Facilities",
        image: "https://cdn.echelonindustries.net/cdn/images/96970849f53d89f2_1775694152.jpg",
        description: [
            "Specialized hospital construction with focus on patient care, hygiene standards, and medical equipment integration.",
            "Advanced healthcare facility design incorporating modern medical technology and patient comfort considerations.",
            "Complete hospital development solutions ensuring compliance with healthcare regulations and safety standards."
        ]
    },
    {
        id: 4,
        categoryId: 4,
        title: "Retail Spaces",
        image: "https://cdn.echelonindustries.net/cdn/images/3a7c80a3b1199864_1775694468.jpg",
        description: [
            "Dynamic shopping mall development with focus on customer experience, retail flow, and modern amenities.",
            "Innovative retail space design creating engaging environments that attract visitors and boost business.",
            "Complete shopping center solutions from concept to completion with emphasis on functionality and appeal."
        ]
    }
];

export default function Industries() {
    const [activeFilter, setActiveFilter] = useState(1); // Default to Hospitals as shown in image

    const activeContent = industriesContentData.find(content => content.categoryId === activeFilter) || industriesContentData[0];

    return (
        <div className="min-h-screen w-full bg-white">
            <div className="container mx-auto py-10 md:py-16 md:px-10 lg:px-25 xl:px-35">
                {/* Header Section */}
                <div className="flex flex-col items-center gap-2 mb-8">
                    <p className="text-lg md:text-xl font-medium text-green-600">
                        Industries
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900">
                        We are ready to Start Your Dream
                    </h2>
                </div>

                {/* Filter Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 mb-10 md:mb-12">
                    {industriesFilterData.map((filter) => {
                        const IconComponent = filter.icon;
                        const isActive = activeFilter === filter.id;

                        return (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 py-4 md:py-5 px-3 md:px-4 rounded-lg transition-all duration-300 ${isActive
                                    ? 'border-b-4 border-green-500'
                                    : 'border-b-4 border-zinc-300 hover:bg-gray-200'
                                    }`}
                            >
                                <IconComponent
                                    className={`w-6 h-6 md:w-7 md:h-7 ${isActive ? 'text-gray-900' : 'text-gray-600'
                                        }`}
                                />
                                <span className={`text-sm md:text-base font-semibold text-center ${isActive ? 'text-gray-900' : 'text-gray-700'
                                    }`}>
                                    {filter.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start mt-20">
                    {/* Image Section */}
                    <div className="w-full">
                        <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                            <img
                                src={activeContent.image}
                                alt={activeContent.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="flex flex-col justify-center h-full gap-6 p-5 md:p-7">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-8 bg-green-500 rounded"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {activeContent.title}
                            </h3>
                        </div>

                        <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
                            {activeContent.description.map((paragraph, index) => (
                                <p key={index} className="text-sm md:text-base">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <Link to={"/projects"}>
                            <button className="cursor-pointer flex items-center w-fit gap-2 text-green-600 font-semibold hover:gap-3 transition-all duration-300 mt-2 bg-transparent hover:bg-primary px-4 py-3 hover:text-white">
                                See Industries
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
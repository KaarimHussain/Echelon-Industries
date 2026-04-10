import AboutOurCompany1 from "@/assets/imgs/About/AboutOurCompany1.png";
import AboutOurCompany2 from "@/assets/imgs/About/AboutOurCompany2.png";

export default function AboutOurCompany() {
    return (
        <>
            <div className="min-h-screen w-full bg-secondary">
                <div className="container mx-auto py-10 md:py-20 px-5 md:px-10 lg:px-20 xl:px-32">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-12 md:mb-16">
                        <p className="text-xl md:text-2xl font-medium text-green-400 text-center mb-2">
                            About Us
                        </p>
                        <h2 className="text-3xl md:text-5xl text-white font-bold text-center">
                            The Story Behind <br />the Name
                        </h2>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Side - Images */}
                        <div className="relative h-full">
                            {/* Top Left Image */}
                            <img
                                src={AboutOurCompany1}
                                alt="Industrial elevator system"
                                className="lg:w-full xl:w-[90%] w-full h-full object-cover object-center rounded-lg"
                            />
                            {/* Bottom Right Image */}
                            <div className="absolute -bottom-10 -right-10 lg:block hidden">
                                <img
                                    src={AboutOurCompany2}
                                    alt="Fire safety equipment"
                                    className="lg:w-[300px] lg:h-[300px] object-cover rounded-lg "
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="text-gray-300 space-y-5 px-2 md:ps-5">
                            <p className="leading-relaxed">
                                Echelon Industries is a leading engineering and technology solutions company specializing in elevators, escalators, fire-fighting equipment, and building services. Since our inception, we have built a strong reputation for delivering reliable, innovative, and high-quality systems across Pakistan.
                            </p>
                            <p className="leading-relaxed">
                                With a diverse portfolio of completed and ongoing projects including hospitals, hotels, residential towers, industrial complexes, and government buildings Echelon Industries stands at the forefront of vertical transportation and safety solutions. Our products and services meet the highest international standards, ensuring performance, durability, and safety for every client.
                            </p>
                            <p className="leading-relaxed">
                                At Echelon Industries, our mission is simple: to elevate standards through engineering excellence. Supported by a skilled technical team and partnerships with leading international manufacturers, we provide end-to-end project management from design and supply to installation, modernization, and maintenance.
                            </p>
                            <p className="leading-relaxed">
                                Our client-focused approach, dedication to quality, and after-sales support have earned the trust of prestigious organizations such as Aga Khan University Hospital, Shaukat Khanum Hospital, Bahria Town, and many others.
                            </p>
                            <p className="leading-relaxed">
                                We continue to expand our vision to redefine engineering solutions and contribute to the country's infrastructure growth with integrity, innovation, and technical precision.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
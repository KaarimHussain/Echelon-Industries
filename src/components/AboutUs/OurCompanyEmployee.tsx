import CEOImg from "@/assets/imgs/Employees/CEO.png";
import CTOImg from "@/assets/imgs/Employees/CTO.png";
import HRImg from "@/assets/imgs/Employees/HR.png";
import PDImg from "@/assets/imgs/Employees/ProjectDirector.png";

const employees = [
    {
        name: "Arthur Vance",
        position: "Chief Executive Officer",
        motive: "Redefining industrial standards through elite engineering and sustainable vision, ensuring a safer tomorrow.",
        image: CEOImg
    },
    {
        name: "Dr. Elias Thorne",
        position: "Chief Technology Officer",
        motive: "Pioneering the next generation of smart climate control systems through advanced thermal dynamics.",
        image: CTOImg
    },
    {
        name: "Sarah Kensington",
        position: "Director of Operations",
        motive: "Streamlining complex industrial workflows with military precision and a focus on operational safety.",
        image: HRImg
    },
    {
        name: "Marcus Sterling",
        position: "Project Director",
        motive: "Leading infrastructure projects from concept to reality with uncompromising quality and speed.",
        image: PDImg
    }
];

export default function OurCompanyEmployee() {
    return (
        <section className="bg-background py-24 md:py-32">
            <div className="container mx-auto px-5 lg:px-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Team</span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                            The Minds Driving <br /> <span className="text-primary italic">Echelon Industries</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-muted-foreground max-w-xs text-right text-sm leading-relaxed">
                            Our leadership team brings decades of combined expertise in HVACR, fire fighting, and industrial automation.
                        </p>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {employees.map((employee, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-muted transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                <img
                                    src={employee.image}
                                    alt={employee.name}
                                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110 group-hover:rotate-1"
                                />

                                {/* Overlay Motive on Hover */}
                                <div className="absolute inset-0 bg-primary/95 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                    <p className="text-white text-lg font-medium leading-relaxed italic mb-4">
                                        "{employee.motive}"
                                    </p>
                                    <div className="h-1 w-12 bg-white rounded-full" />
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="mt-8 space-y-2">
                                <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                                    {employee.name}
                                </h3>
                                <p className="text-primary font-semibold tracking-wide text-xs uppercase opacity-80">
                                    {employee.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
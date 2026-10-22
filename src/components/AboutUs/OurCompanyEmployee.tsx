import { Mail, Phone } from "lucide-react";

const employees = [
    {
        name: "Usama Ahmed",
        position: "General Managing Director",
        phone: "+92 307 444 1083",
        email: "usama@echelonindustries.net",
        image: "/Team/Usama Ahmed.png"
    },
    {
        name: "Hassan Ahmed",
        position: "Deputy General Managing Director",
        phone: null,
        email: null,
        image: "/Team/Hassan Ahmed.png"
    },
    {
        name: "Khalid Waseem",
        position: "Senior Sales Manager",
        phone: "+92 307 444 1090",
        email: "khalid@echelonindustries.net",
        image: "/Team/Khalid-Waseem.png"
    },
    {
        name: "Taha Saifuddin",
        position: "Manager Sales & Application",
        phone: "+92 307 444 1087",
        email: "taha@echelonindustries.net",
        image: "/Team/Taha-Saifuddin.png"
    },
    {
        name: "Arbab Gilani",
        position: "General Manager (Sales & Marketing)",
        phone: "+92 300 922 7096",
        email: "gm.sales@echelonindustries.net",
        image: "/Team/Arbab Gilani.png"
    },
    {
        name: "Muhammad Farooq Azam",
        position: "Senior Manager Sales & Technical",
        phone: "+92 307 444 1095",
        email: "engineering@echelonindustries.net",
        image: "/Team/Muhammad-Farooq-Azam.png"
    },
    {
        name: "Mushtaq Attari",
        position: "Application Engineer",
        phone: "+92 307 444 1090",
        email: "application@echelonindustries.net",
        image: "/Team/Mushtaq-Attari.png"
    },
];

const topTier = employees.slice(0, 2);
const restTier = employees.slice(2);

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

                {/* Top Leadership Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 mb-12 max-w-2xl">
                    {topTier.map((employee, index) => (
                        <EmployeeCard key={index} employee={employee} />
                    ))}
                </div>

                {/* Rest of Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                    {restTier.map((employee, index) => (
                        <EmployeeCard key={index} employee={employee} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function EmployeeCard({ employee }: { employee: typeof employees[0] }) {
    return (
        <div className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Hover Overlay — contact info */}
                <div className="absolute inset-0 bg-primary/95 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <p className="text-white font-bold text-base uppercase tracking-wide mb-5">
                        {employee.position}
                    </p>
                    <div className="flex flex-col gap-3">
                        {employee.phone ? (
                            <a
                                href={`tel:${employee.phone.replace(/\s/g, "")}`}
                                className="flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors"
                                onClick={e => e.stopPropagation()}
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                {employee.phone}
                            </a>
                        ) : (
                            <span className="flex items-center gap-2 text-white/50 text-sm italic">
                                <Phone className="w-4 h-4 shrink-0" />
                                Contact info coming soon
                            </span>
                        )}
                        {employee.email && (
                            <a
                                href={`mailto:${employee.email}`}
                                className="flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors break-all"
                                onClick={e => e.stopPropagation()}
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                {employee.email}
                            </a>
                        )}
                    </div>
                    <div className="h-1 w-12 bg-white rounded-full mt-6" />
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-6 space-y-1">
                <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {employee.name}
                </h3>
                <p className="text-primary font-semibold tracking-wide text-xs uppercase opacity-80">
                    {employee.position}
                </p>
                {employee.phone && (
                    <p className="text-muted-foreground text-xs pt-1">{employee.phone}</p>
                )}
            </div>
        </div>
    );
}

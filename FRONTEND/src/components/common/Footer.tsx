import {
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

const quickLinks = [
    { name: "E-Learning", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "ICT Help Desk", href: "#" },
    { name: "Ajira Digital", href: "#" },
    { name: "Policies", href: "#" },
];

const discoverLinks = [
    { name: "Virtual Tour", href: "#" },
    { name: "Impact", href: "#" },
    { name: "Research & Innovation", href: "#" },
    { name: "Downloads", href: "#" },
];

export function Footer() {
    return (
        <footer className="border-t-2 border-[#d4af37] bg-[#061a38] text-white">
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Institution */}
                    <div>
                        <h2 className="font-serif text-lg font-bold">
                            Melangine VTC
                        </h2>

                        <p className="mt-4 max-w-xs text-[10px] leading-5 text-gray-300">
                            Empowering the next generation with practical skills and
                            innovative technical training for sustainable development.
                        </p>

                        <div className="mt-6 text-[9px] leading-4 text-gray-400">
                            © 2024 Melangine Vocational Training Center.
                            <br />
                            All rights reserved.
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-[11px] uppercase tracking-wide text-[#d4af37]">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[10px] text-gray-300 transition-colors hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Discover */}
                    <div>
                        <h3 className="font-serif text-[11px] uppercase tracking-wide text-[#d4af37]">
                            Discover
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {discoverLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[10px] text-gray-300 transition-colors hover:text-white"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-[11px] uppercase tracking-wide text-[#d4af37]">
                            Contact Us
                        </h3>

                        <div className="mt-5 space-y-4">

                            <a
                                href="tel:+254723446773"
                                className="flex items-center gap-2 text-[10px] text-gray-300 hover:text-white"
                            >
                                <Phone className="h-3 w-3 text-[#d4af37]" />
                                +254 723 446 773
                            </a>

                            <a
                                href="mailto:info@melanginevt.ac.ke"
                                className="flex items-center gap-2 text-[10px] text-gray-300 hover:text-white"
                            >
                                <Mail className="h-3 w-3 text-[#d4af37]" />
                                info@melanginevt.ac.ke
                            </a>

                            <div className="flex items-start gap-2 text-[10px] text-gray-300">
                                <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-[#d4af37]" />

                                <span>
                  Complaints & Grievances
                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

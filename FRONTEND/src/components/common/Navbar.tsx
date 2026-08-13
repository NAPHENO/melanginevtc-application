import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/melangine-logo.jpg";

const navigation = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Student Hub", href: "#student-hub" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-3 text-[#071a36]"
                >
                    <img
                        src={logo}
                        alt="Melangine Vocational Training Center"
                        className="h-14 w-14 object-contain"
                    />

                    <span className="font-serif text-sm font-bold leading-tight sm:text-base">
            Melangine Vocational
            <br />
            Training Center
          </span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex lg:gap-7">
                    {navigation.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`relative py-7 text-[11px] font-medium transition-colors ${
                                index === 0
                                    ? "text-[#071a36]"
                                    : "text-gray-600 hover:text-[#071a36]"
                            }`}
                        >
                            {item.name}

                            {index === 0 && (
                                <span className="absolute bottom-4 left-0 h-0.5 w-full bg-[#071a36]" />
                            )}
                        </a>
                    ))}

                    <Button
                        className="rounded-none bg-[#061a38] px-7 text-xs font-semibold hover:bg-[#0b2850]"
                    >
                        Apply Now
                    </Button>
                </div>

                {/* Mobile menu */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Open navigation menu"
                >
                    <Menu className="h-6 w-6" />
                </Button>

            </div>
        </nav>
    );
}

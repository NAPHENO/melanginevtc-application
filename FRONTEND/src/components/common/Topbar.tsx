import { Mail, Phone, GraduationCap, Share2 } from "lucide-react";

export function TopBar() {
    return (
        <div className="bg-[#061a38] text-white text-[10px] sm:text-xs">
            <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left */}
                <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="h-3 w-3 text-yellow-400" />
            +254 723 446 773
          </span>

                    <span className="hidden items-center gap-1 sm:flex">
            <Mail className="h-3 w-3 text-yellow-400" />
            info@melanginevti.ac.ke
          </span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <GraduationCap className="h-3 w-3" />
Careers
          </span>

                    <span className="flex items-center gap-1">
            <GraduationCap className="h-3 w-3" />
Resources
                    </span>
                    <span className="flex items-center gap-1">
            <GraduationCap className="h-3 w-3" />
            E-Learning
          </span>

                    <span className="hidden sm:flex items-center gap-1">
            <GraduationCap className="h-3 w-3" />
            Student Portal
          </span>

                    <Share2 className="h-3 w-3" />
                </div>

            </div>
        </div>
    );
}

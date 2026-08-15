import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "../../assets/melangine-logo.jpg";
import { useRef, useState, type ReactElement, type ReactNode } from "react";
import * as React from "react";

type HoverDropdownProps = {
    trigger: ReactNode;
    content: ReactElement;
};

function HoverDropdown({ trigger, content }: HoverDropdownProps) {
    const [open, setOpen] = useState(false);

    const triggerHovered = useRef(false);
    const contentHovered = useRef(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const cancelClose = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const checkClose = () => {
        cancelClose();

        closeTimer.current = setTimeout(() => {
            if (!triggerHovered.current && !contentHovered.current) {
                setOpen(false);
            }
        }, 50);
    };

    const handleTriggerEnter = () => {
        triggerHovered.current = true;
        cancelClose();
        setOpen(true);
    };

    const handleTriggerLeave = () => {
        triggerHovered.current = false;
        checkClose();
    };

    const handleContentEnter = () => {
        contentHovered.current = true;
        cancelClose();
    };

    const handleContentLeave = () => {
        contentHovered.current = false;
        checkClose();
    };

    const enhancedContent = {
        ...content.props,
        onPointerEnter: handleContentEnter,
        onPointerLeave: handleContentLeave,
    };

    return (
        <DropdownMenu
            open={open}
            onOpenChange={setOpen}
        >
            <div
                onPointerEnter={handleTriggerEnter}
                onPointerLeave={handleTriggerLeave}
                className=" flex items-center gap-1 text-[13px] font-medium text-gray-700 outline-none transition-colors hover:text-[#071a36]"
            >
                {trigger}
            </div>

            {React.cloneElement(content, enhancedContent)}
        </DropdownMenu>
    );
}

export function Navbar() {
    const aboutLinks = [
        {label:"Who We Are", href: '#who-we-are'},
        {label:"Mission, Vision And Mandate", href: '#mission-vision-mandate'},
        {label:"NITA's Core Values", href: '#nita-core-values'},
        {label:"Service Charter", href: '#service-charter'},
        {label:"Strategic Plan", href: '#strategic-plan'},
        {label:"Board of Directors", href: '#board-of-directors'},
        {label:"Management Team", href: '#management-team'},
        {label:"Departments", href: '#departments'},
        {label:"Sector Training Committees", href: '#sector-training-committees'},
        {label:"Corporate Social Investment", href: '#corporate-social-investment'},
        {label:"NYOTA Project", href: '#nyota-project'},
    ];

    const departments = [
        {
            name: "SCHOOL OF AGRICULTURE",
            href: "#agriculture",
        },
        {
            name: "APPLIED SCIENCE AND ENVIRONMENTAL STUDIES",
            href: "#applied-science",
        },
        {
            name: "BUILDING & CIVIL ENGINEERING",
            href: "#building-civil-engineering",
        },
        {
            name: "BUSINESS & ENTREPRENEURSHIP STUDIES",
            href: "#business-entrepreneurship",
        },
        {
            name: "COMPUTING & INFORMATICS",
            href: "#computing-informatics",
        },
        {
            name: "ELECTRICAL AND ELECTRONICS ENGINEERING",
            href: "#electrical-electronics",
        },
        {
            name: "FASHION DESIGN AND COSMETOLOGY",
            href: "#fashion-design",
        },
        {
            name: "HEALTH SCIENCES",
            href: "#health-sciences",
        },
        {
            name: "HOSPITALITY & TOURISM",
            href: "#hospitality-tourism",
        },
        {
            name: "LIBERAL STUDIES",
            href: "#liberal-studies",
        },
        {
            name: "MECHANICAL AND AUTOMOTIVE ENGINEERING",
            href: "#mechanical-automotive",
        },
    ];

    const NonAcademicDepartments = [
        {name:"Finance Department", href:"#finance"},
        {name:"Human Resource", href:"#human-resource"},
        {name:"Income Generation Unit (IGU)", href:"#income-generation-unit"},
        {name:"Supply Chain Management", href:"#supply-chain-management"},
        {name:"ICT", href:"#ict"},
        {name:"Internal Audit", href:"#internal-audit"},
        {name:"Monitoring and Evaluation", href:"#monitoring-evaluation"},
    ];

    const studentHubLinks = [
        {
            name: "Admission Letters",
            href: "#admission-letters",
            icon: "download",
        },
        {
            name: "Online Application",
            href: "#online-application",
            icon: "edit",
        },
        {
            name: "KUCCPS Placement",
            href: "#kuccps-placement",
        },
        {
            name: "Fee Structures, Statement & Payment",
            href: "#fee-structures",
        },
        {
            name: "HELB Funding",
            href: "#helb-funding",
        },
    ];

    const researchLinks = [
        { name: "Research", href: "#research" },
        { name: "Tracers Study", href: "#tracers-study" },
        { name: "Journals", href: "#journals" },
        { name: "Library", href: "#library" }
    ];

    const libraryLinks = [
        { name: "Organization of Information Resources", href: "#library" },
        { name: "Journals", href: "#journals" },
        { name: "Rules & Regulations", href: "#library" },
        { name: "Library", href: "#library" },
    ]

    const studentAffairsLinks = [
        { name: "Student Affairs", href: "#student-affairs" },
        { name: "Guidance & Counselling", href: "#student-council" },
        { name: "Chaplaincy", href: "#student-council" },
    ];

    const studentLifeLinks = [
        { name: "Sport, Games & Recreation ", href: "#student-life" },
        { name: "Clubs & Societies ", href: "#student-council" },
        {name: "Student Association", href: "#student-council" },
        {name: "Accomodation", href: "#student-council" },

    ]

    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-[88px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#"
                    className="flex shrink-0 items-center gap-3 text-[#071a36]"
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

                {/* Desktop Navigation */}
                <div className="ml-auto hidden items-center md:flex gap-4">

                    {/* Home */}
                    <a
                        href="#"
                        className="group relative flex h-[88px] items-center px-4 text-[13px] font-medium text-gray-700 hover:text-[#071a36]"
                    >
                        Home

                        {/* Hover underline */}
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 bg-[#071a36] transition-transform group-hover:scale-x-100" />
                    </a>

                    <HoverDropdown
                        trigger={
                            <DropdownMenuTrigger
                                className="
        group
        relative
        flex
        py-2
        {/*h-[px]*/}
        items-center
        gap-1
        text-[13px]
        font-medium
        text-gray-700
        outline-none
        transition-colors
        hover:text-[#071a36]
      "
                            >
                                About Us

                                <ChevronDown
                                    className="
          h-3.5
          w-3.5
          transition-transform
          duration-200
          group-data-[state=open]:rotate-180
        "
                                />

                                {/* Active/open underline */}
                                <span
                                    className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          scale-x-0
          bg-[#071a36]
          transition-transform
          duration-200
          group-hover:scale-x-100
          group-data-[state=open]:scale-x-100
        "
                                />
                            </DropdownMenuTrigger>
                        }

                        content={
                            <DropdownMenuContent
                                align="start"
                                sideOffset={0}
                                className="
        relative
        z-50
        w-[500px]
        overflow-visible
        rounded-none
        bg-gray-200
        p-3
        shadow-lg mt-4

        before:absolute
        before:-top-2.5
        before:left-5
        before:z-50
        before:h-0
        before:w-0
        before:border-l-[10px]
        before:border-r-[10px]
        before:border-b-[10px]
        before:border-l-transparent
        before:border-r-transparent
        before:border-b-gray-200
        before:content-['']
      "
                            >
                                <div className="grid grid-cols-2 gap-x-8">

                                    {/* LEFT COLUMN */}
                                    <div>
                                        {aboutLinks.slice(0, 6).map((link) => (
                                            <DropdownMenuItem
                                                key={link.label}
                                                asChild
                                                className="
                cursor-pointer
                rounded-none
                px-4
                py-3
                text-[13px]
                text-[#174b7a]
                focus:bg-gray-50
                focus:text-[#071a36]
              "
                                            >
                                                <a href={link.href}>
                                                    {link.label}
                                                </a>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>

                                    {/* RIGHT COLUMN */}
                                    <div>
                                        {aboutLinks.slice(6).map((link) => (
                                            <DropdownMenuItem
                                                key={link.label}
                                                asChild
                                                className="
                cursor-pointer
                rounded-none
                border-b
                border-gray-200
                px-4
                py-3
                text-[13px]
                text-[#174b7a]
                focus:bg-gray-50
                focus:text-[#071a36]
              "
                                            >
                                                <a href={link.href}>
                                                    {link.label}
                                                </a>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>

                                </div>
                            </DropdownMenuContent>
                        }
                    />

                    {/* Departments */}
                    <HoverDropdown
                        trigger={
                            <DropdownMenuTrigger
                                className="
        group
        relative
        flex
        py-2
        {/*h-[px]*/}
        items-center
        gap-1
        text-[13px]
        font-medium
        text-gray-700
        outline-none
        transition-colors
        hover:text-[#071a36]
      "
                            >
                                Departments
                                <ChevronDown
                                    className="
          h-3.5
          w-3.5
          transition-transform
          duration-200
          group-data-[state=open]:rotate-180
        "
                                />

                                {/* Active/open underline */}
                                <span
                                    className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          scale-x-0
          bg-[#071a36]
          transition-transform
          duration-200
          group-hover:scale-x-100
          group-data-[state=open]:scale-x-100
        "
                                />
                            </DropdownMenuTrigger>
                        }
                        content={
                            <DropdownMenuContent
                                align="start"
                                sideOffset={0}
                                className="
        relative
        z-50
        w-[260px]
        overflow-visible
        rounded-none
        border-none
        bg-gray-200
        p-2
        shadow-2xl mt-4

        before:absolute
        before:-top-2.5
        before:left-5
        before:z-50
        before:h-0
        before:w-0
        before:border-l-[10px]
        before:border-r-[10px]
        before:border-b-[10px]
        before:border-l-transparent
        before:border-r-transparent
        before:border-b-gray-200
        before:content-['']
      "
                            >

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger
                                        className="
                                        rounded-none
                                        px-4
                                        py-3
                                        text-[13px]
                                        text-[#174b7a]
                                        focus:bg-gray-50
                                        focus:text-[#071a36]
                                    "
                                    >
                                        Academic
                                    </DropdownMenuSubTrigger>

                                    <DropdownMenuSubContent
                                        className="
                                        w-[220px]
                                        rounded-none
                                        border
                                        bg-white
                                        p-2
                                        shadow-lg
                                    "
                                    >
                                        {departments.map((department) => (
                                            <DropdownMenuItem
                                                className="
                                            cursor-pointer
                                            rounded-none
                                            px-4
                                            py-3
                                            text-[13px]
                                            text-[#174b7a]
                                            focus:bg-gray-50
                                        " key={department.name}>
                                                <a
                                                    href={department.href}
                                                    className="block text-sm text-[#16477C] hover:text-blue-600"
                                                >
                                                    {department.name}
                                                </a>
                                            </DropdownMenuItem>
                                        ))}

                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>

                                {/* Administration Submenu */}
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger
                                        className="
                                        rounded-none
                                        px-4
                                        py-3
                                        text-[13px]
                                        text-[#174b7a]
                                        focus:bg-gray-50
                                        focus:text-[#071a36]
                                    "
                                    >
                                        Non-Academic
                                    </DropdownMenuSubTrigger>

                                    <DropdownMenuSubContent
                                        className="
                                        w-[220px]
                                        rounded-none
                                        border
                                        bg-white
                                        p-2
                                        shadow-lg
                                    "
                                    >
                                        {NonAcademicDepartments.map((department, index) => (
                                            <DropdownMenuItem
                                                className="
                                            cursor-pointer
                                            rounded-none
                                            px-4
                                            py-3
                                            text-[13px]
                                            text-[#174b7a]
                                            focus:bg-gray-50
                                        "
                                                key={index}
                                            >
                                                <a
                                                    href={department.href}
                                                    className="block text-sm text-[#16477C] hover:text-blue-600"
                                                >
                                                    {department.name}
                                                </a>
                                            </DropdownMenuItem>
                                        ))}


                                        <DropdownMenuItem
                                            className="
                                            cursor-pointer
                                            rounded-none
                                            px-4
                                            py-3
                                            text-[13px]
                                            text-[#174b7a]
                                            focus:bg-gray-50
                                        "
                                        >
                                            <a href="#board">
                                                Board of Management
                                            </a>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>

                                {/* Gallery */}
                                <DropdownMenuItem
                                    className="
                                    cursor-pointer
                                    rounded-none
                                    px-4
                                    py-3
                                    text-[13px]
                                    text-[#174b7a]
                                    focus:bg-gray-50
                                    focus:text-[#071a36]
                                "
                                >
                                    <a href="#gallery">
                                        Gallery
                                    </a>
                                </DropdownMenuItem>

                                {/* Service Charter */}
                                <DropdownMenuItem
                                    className="
                                    cursor-pointer
                                    rounded-none
                                    px-4
                                    py-3
                                    text-[13px]
                                    leading-5
                                    text-[#174b7a]
                                    focus:bg-gray-50
                                    focus:text-[#071a36]
                                "
                                >
                                    <a href="#service-charter">
                                        Service Charter & Policy
                                        <br />
                                        Statement
                                    </a>
                                </DropdownMenuItem>

                                {/* Contact */}
                                <DropdownMenuItem
                                    className="
                                    cursor-pointer
                                    rounded-none
                                    px-4
                                    py-3
                                    text-[13px]
                                    text-[#174b7a]
                                    focus:bg-gray-50
                                    focus:text-[#071a36]
                                "
                                >
                                    <a href="#contact">
                                        Contact
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>

                        }
                        />



                    {/* Admission */}
                    <HoverDropdown
                        trigger={
                            <DropdownMenuTrigger
                                className="
         group
        relative
        flex
        p-2
        {/*h-[px]*/}
        items-center
        gap-1
        text-[13px]
        font-medium
        text-gray-700
        outline-none
        transition-colors
        hover:text-[#071a36]

      "
                            >
                                Admissions

                                <ChevronDown
                                    className="
          h-3.5
          w-3.5
          transition-transform
          duration-200
          group-data-[state=open]:rotate-180
        "
                                />

                                <span
                                    className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          scale-x-0
          bg-[#071a36]
          transition-transform
          duration-200
          group-hover:scale-x-100
          group-data-[state=open]:scale-x-100
        "
                                />
                            </DropdownMenuTrigger>
                        }

                        content={
                            <DropdownMenuContent
                                align="start"
                                sideOffset={0}
                                className="
        relative
        z-50
        w-[260px]
        overflow-visible
        rounded-none
        border-none
        bg-gray-200
        p-2
        shadow-2xl mt-4

        before:absolute
        before:-top-2.5
        before:left-5
        before:z-50
        before:h-0
        before:w-0
        before:border-l-[10px]
        before:border-r-[10px]
        before:border-b-[10px]
        before:border-l-transparent
        before:border-r-transparent
        before:border-b-gray-200
        before:content-['']
      "
                            >
                                {studentHubLinks.map((link) => (
                                    <DropdownMenuItem
                                        key={link.name}
                                        asChild
                                        className="
            cursor-pointer
            rounded-none
            px-4
            py-3
            text-[13px]
            text-[#174b7a]
            focus:bg-gray-50
            focus:text-[#071a36]
          "
                                    >
                                        <a href={link.href}>
                                            {link.name}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        }
                    />


                    {/* Research */}
                    <HoverDropdown
                        trigger={
                            <DropdownMenuTrigger
                                className="
         group
        relative
        flex
        p-2
        {/*h-[px]*/}
        items-center
        gap-1
        text-[13px]
        font-medium
        text-gray-700
        outline-none
        transition-colors
        hover:text-[#071a36]

      "
                            >
                                Research & Innovations

                                <ChevronDown
                                    className="
          h-3.5
          w-3.5
          transition-transform
          duration-200
          group-data-[state=open]:rotate-180
        "
                                />

                                <span
                                    className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          scale-x-0
          bg-[#071a36]
          transition-transform
          duration-200
          group-hover:scale-x-100
          group-data-[state=open]:scale-x-100
        "
                                />
                            </DropdownMenuTrigger>
                        }

                        content={
                            <DropdownMenuContent
                                align="start"
                                sideOffset={0}
                                className="
        relative
        z-50
        w-[260px]
        overflow-visible
        rounded-none
        border-none
        bg-gray-200
        p-2
        shadow-2xl mt-4

        before:absolute
        before:-top-2.5
        before:left-5
        before:z-50
        before:h-0
        before:w-0
        before:border-l-[10px]
        before:border-r-[10px]
        before:border-b-[10px]
        before:border-l-transparent
        before:border-r-transparent
        before:border-b-gray-200
        before:content-['']
      "
                            >
                                {researchLinks.map((link) => (
                                    <DropdownMenuItem
                                        key={link.name}
                                        asChild
                                        className="
            cursor-pointer
            rounded-none
            px-4
            py-3
            text-[13px]
            text-[#174b7a]
            focus:bg-gray-50
            focus:text-[#071a36]
          "
                                    >
                                        <a href={link.href}>
                                            {link.name}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        }
                    />

                    {/* Library */}
                    <HoverDropdown
                        trigger={
                            <DropdownMenuTrigger
                                className="
         group
        relative
        flex
        p-2
        {/*h-[px]*/}
        items-center
        gap-1
        text-[13px]
        font-medium
        text-gray-700
        outline-none
        transition-colors
        hover:text-[#071a36]

      "
                            >
                               Library

                                <ChevronDown
                                    className="
          h-3.5
          w-3.5
          transition-transform
          duration-200
          group-data-[state=open]:rotate-180
        "
                                />

                                <span
                                    className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          scale-x-0
          bg-[#071a36]
          transition-transform
          duration-200
          group-hover:scale-x-100
          group-data-[state=open]:scale-x-100
        "
                                />
                            </DropdownMenuTrigger>
                        }

                        content={
                            <DropdownMenuContent
                                align="start"
                                sideOffset={0}
                                className="
        relative
        z-50
        w-[260px]
        overflow-visible
        rounded-none
        border-none
        bg-gray-200
        p-2
        shadow-2xl mt-4

        before:absolute
        before:-top-2.5
        before:left-5
        before:z-50
        before:h-0
        before:w-0
        before:border-l-[10px]
        before:border-r-[10px]
        before:border-b-[10px]
        before:border-l-transparent
        before:border-r-transparent
        before:border-b-gray-200
        before:content-['']
      "
                            >
                                {libraryLinks.map((link) => (
                                    <DropdownMenuItem
                                        key={link.name}
                                        asChild
                                        className="
            cursor-pointer
            rounded-none
            px-4
            py-3
            text-[13px]
            text-[#174b7a]
            focus:bg-gray-50
            focus:text-[#071a36]
          "
                                    >
                                        <a href={link.href}>
                                            {link.name}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        }
                    />



                    {/* students */}
                    <HoverDropdown
                        trigger={
                            <DropdownMenuTrigger
                                className="
        group
        relative
        flex
        py-2
        {/*h-[px]*/}
        items-center
        gap-1
        text-[13px]
        font-medium
        text-gray-700
        outline-none
        transition-colors
        hover:text-[#071a36]
      "
                            >
                                Students
                                <ChevronDown
                                    className="
          h-3.5
          w-3.5
          transition-transform
          duration-200
          group-data-[state=open]:rotate-180
        "
                                />

                                {/* Active/open underline */}
                                <span
                                    className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          scale-x-0
          bg-[#071a36]
          transition-transform
          duration-200
          group-hover:scale-x-100
          group-data-[state=open]:scale-x-100
        "
                                />
                            </DropdownMenuTrigger>
                        }
                        content={
                            <DropdownMenuContent
                                align="start"
                                sideOffset={0}
                                className="
        relative
        z-50
        w-[260px]
        overflow-visible
        rounded-none
        border-none
        bg-gray-200
        p-2
        shadow-2xl mt-4

        before:absolute
        before:-top-2.5
        before:left-5
        before:z-50
        before:h-0
        before:w-0
        before:border-l-[10px]
        before:border-r-[10px]
        before:border-b-[10px]
        before:border-l-transparent
        before:border-r-transparent
        before:border-b-gray-200
        before:content-['']
      "
                            >

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger
                                        className="
                                        rounded-none
                                        px-4
                                        py-3
                                        text-[13px]
                                        text-[#174b7a]
                                        focus:bg-gray-50
                                        focus:text-[#071a36]
                                    "
                                    >
                                        Student Affairs
                                    </DropdownMenuSubTrigger>

                                    <DropdownMenuSubContent
                                        className="
                                        w-[220px]
                                        rounded-none
                                        border
                                        bg-white
                                        p-2
                                        shadow-lg
                                    "
                                    >
                                        {studentAffairsLinks.map((department) => (
                                            <DropdownMenuItem
                                                className="
                                            cursor-pointer
                                            rounded-none
                                            px-4
                                            py-3
                                            text-[13px]
                                            text-[#174b7a]
                                            focus:bg-gray-50
                                        " key={department.name}>
                                                <a
                                                    href={department.href}
                                                    className="block text-sm text-[#16477C] hover:text-blue-600"
                                                >
                                                    {department.name}
                                                </a>
                                            </DropdownMenuItem>
                                        ))}

                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>

                                {/* Administration Submenu */}
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger
                                        className="
                                        rounded-none
                                        px-4
                                        py-3
                                        text-[13px]
                                        text-[#174b7a]
                                        focus:bg-gray-50
                                        focus:text-[#071a36]
                                    "
                                    >
                                        Student Life
                                    </DropdownMenuSubTrigger>

                                    <DropdownMenuSubContent
                                        className="
                                        w-[220px]
                                        rounded-none
                                        border
                                        bg-white
                                        p-2
                                        shadow-lg
                                    "
                                    >
                                        {studentLifeLinks.map((department, index) => (
                                            <DropdownMenuItem
                                                className="
                                            cursor-pointer
                                            rounded-none
                                            px-4
                                            py-3
                                            text-[13px]
                                            text-[#174b7a]
                                            focus:bg-gray-50
                                        "
                                                key={index}
                                            >
                                                <a
                                                    href={department.href}
                                                    className="block text-sm text-[#16477C] hover:text-blue-600"
                                                >
                                                    {department.name}
                                                </a>
                                            </DropdownMenuItem>
                                        ))}


                                        <DropdownMenuItem
                                            className="
                                            cursor-pointer
                                            rounded-none
                                            px-4
                                            py-3
                                            text-[13px]
                                            text-[#174b7a]
                                            focus:bg-gray-50
                                        "
                                        >
                                            <a href="#board">
                                                Board of Management
                                            </a>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>

                                {/* Financial Aid */}
                                <DropdownMenuItem
                                    className="
                                    cursor-pointer
                                    rounded-none
                                    px-4
                                    py-3
                                    text-[13px]
                                    text-[#174b7a]
                                    focus:bg-gray-50
                                    focus:text-[#071a36]
                                "
                                >
                                    <a href="#gallery">
                                        Financial Aid
                                    </a>
                                </DropdownMenuItem>

                                {/* Student Handbook */}
                                <DropdownMenuItem
                                    className="
                                    cursor-pointer
                                    rounded-none
                                    px-4
                                    py-3
                                    text-[13px]
                                    leading-5
                                    text-[#174b7a]
                                    focus:bg-gray-50
                                    focus:text-[#071a36]
                                "
                                >
                                    <a href="#service-charter">
                                       Student Handbook
                                    </a>
                                </DropdownMenuItem>

                                {/* student Portal */}
                                <DropdownMenuItem
                                    className="
                                    cursor-pointer
                                    rounded-none
                                    px-4
                                    py-3
                                    text-[13px]
                                    text-[#174b7a]
                                    focus:bg-gray-50
                                    focus:text-[#071a36]
                                "
                                >
                                    <a href="#contact">
                                        Student Portal
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>

                        }
                    />

                    {/* Apply Button */}
                    <Button
                        className="
                            ml-4
                            rounded-none
                            bg-[#061a38]
                            px-6
                            text-xs
                            font-semibold
                            hover:bg-[#0b2850]
                        "
                    >
                        Apply Now
                    </Button>
                </div>

                {/* Mobile menu */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto md:hidden"
                    aria-label="Open navigation menu"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </nav>
    );
}

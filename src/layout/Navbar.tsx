import React, { useState, useEffect } from "react";
import Logo from "../assets/logo/logo.png";

const Navbar: React.FC = () => {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: "home", label: "Home", target: "top" },
        { id: "about", label: "About Me", target: "about" },
        { id: "gallery", label: "Gallery", target: "gallery" },
        { id: "contact", label: "Contact", target: "contact" },
    ];

    // efek shadow / blur ketika scroll (desktop)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // scroll spy – menandai menu aktif sesuai posisi scroll
    useEffect(() => {
        const trackScrollSpy = () => {
            const scrollPos = window.scrollY;
            const viewportHeight = window.innerHeight;
            const bottomReach =
                scrollPos + viewportHeight >= document.body.scrollHeight - 50;

            if (bottomReach) {
                setActive("contact");
                return;
            }

            const midpoint = viewportHeight * 0.35;
            let current = "home";
            const ids = ["about", "gallery", "contact"];

            ids.forEach((sectionId) => {
                const el = document.getElementById(sectionId);
                if (!el) return;

                const rect = el.getBoundingClientRect();
                if (rect.top <= midpoint && rect.bottom >= midpoint) {
                    current = sectionId;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", trackScrollSpy);
        return () => window.removeEventListener("scroll", trackScrollSpy);
    }, []);

    // fungsi scroll dengan offset supaya bagian atas section tidak ketutup
    const scrollToSection = (id: string, target: string) => {
        setActive(id);

        if (target === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const section = document.getElementById(target);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;

        const isDesktop = window.innerWidth >= 768;
        const offset = isDesktop ? 90 : 40;

        window.scrollTo({
            top: sectionTop - offset,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* DESKTOP NAVBAR (TOP) */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 hidden md:block ${
                    scrolled
                        ? "backdrop-blur-xl bg-white/85 shadow-[0_6px_20px_rgba(0,0,0,0.1)] border-b border-white/60"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-[1250px] mx-auto px-12 py-4 flex items-center justify-between font-inter">
                    <img
                        src={Logo}
                        alt="Logo"
                        onClick={() => scrollToSection("home", "top")}
                        className="w-[180px] h-auto object-contain cursor-pointer"
                    />

                    <div className="flex items-center gap-10 text-[12px] uppercase font-semibold tracking-[0.19em] mt-[8px]">
                        {navItems.map((item) => {
                            const isActive = active === item.id;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() =>
                                        scrollToSection(item.id, item.target)
                                    }
                                    className="relative cursor-pointer group select-none flex flex-col items-center"
                                >
                                    <span
                                        className={`transition-all duration-300 ${
                                            isActive
                                                ? "text-[#352c45]"
                                                : "text-[#352c45]/60"
                                        } group-hover:text-[#352c45]`}
                                    >
                                        {item.label}
                                    </span>

                                    <span
                                        className={`h-[3px] mt-[6px] rounded-full transition-all duration-300 ${
                                            isActive
                                                ? "w-[26px] bg-[#EA84CB]"
                                                : "w-0 group-hover:w-[26px] group-hover:bg-[#EA84CB]"
                                        }`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* MOBILE BOTTOM NAVBAR ONLY */}
            <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%]">
                <div className="bg-white/95 border border-[#E2D9C8] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.25)] px-4 py-2 flex items-center justify-between gap-3 font-inter backdrop-blur-md">
                    {navItems.map((item) => {
                        const isActive = active === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() =>
                                    scrollToSection(item.id, item.target)
                                }
                                className={`flex-1 flex flex-col items-center justify-center text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-1 transition-all ${
                                    isActive
                                        ? "text-[#352c45] bg-[#EA84CB]/25 rounded-full"
                                        : "text-[#352c45]/60 bg-transparent"
                                }`}
                            >
                                {item.label}
                                <span
                                    className={`mt-[3px] h-[3px] rounded-full transition-all duration-300 ${
                                        isActive
                                            ? "w-[20px] bg-[#EA84CB]"
                                            : "w-0 bg-transparent"
                                    }`}
                                />
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default Navbar;

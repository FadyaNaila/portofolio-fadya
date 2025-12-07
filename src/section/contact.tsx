import React from "react";

const Footer: React.FC = () => {
    return (
        <footer
            id="contact"
            className="relative w-full bg-[#352c45] text-white py-16 sm:py-20 overflow-hidden"
        >
            {/* TEXTURE & GLOW */}
            <div
                className="absolute inset-0 opacity-[0.16] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.7) 2px, transparent 2px)",
                    backgroundSize: "26px 26px",
                }}
            />
            <div className="absolute inset-0 pointer-events-none mix-blend-soft-light">
                <div className="w-[380px] h-[380px] rounded-full bg-[#EA84CB]/28 blur-[130px] absolute -left-24 bottom-0" />
                <div className="w-[420px] h-[420px] rounded-full bg-[#E2D9C8]/40 blur-[150px] absolute right-[-80px] top-[-40px]" />
            </div>

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
                {/* TITLE */}
                <div className="mb-8 sm:mb-10" data-aos="fade-up">
                    <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
                        Final Chapter
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.4rem] font-extrabold tracking-[0.22em] uppercase">
                        Let&apos;s{" "}
                        <span className="text-[#EA84CB] drop-shadow-[0_0_18px_rgba(234,132,203,0.9)]">
              Connect
            </span>
                    </h2>
                </div>

                {/* COMIC PANEL CONTACT CARD */}
                <div className="relative" data-aos="fade-up" data-aos-offset="120">
                    {/* binder / spine kiri */}
                    <div className="hidden sm:block absolute -left-1 top-4 bottom-4 w-[7px] rounded-full bg-[#EA84CB] shadow-[0_0_14px_rgba(234,132,203,0.9)]" />

                    {/* shadow belakang panel */}
                    <div className="absolute inset-0 translate-y-3 rounded-[2.3rem] bg-black/40 blur-[12px] opacity-75" />

                    {/* PANEL UTAMA */}
                    <div className="relative bg-white rounded-[2.4rem] border-[3px] border-[#E2D9C8] px-6 sm:px-10 py-7 sm:py-9 shadow-[0_22px_55px_rgba(0,0,0,0.75)] overflow-hidden">
                        {/* sudut panel ala komik */}
                        <div className="absolute -top-[3px] left-10 w-10 h-[3px] bg-[#E2D9C8]" />
                        <div className="absolute -top-[3px] right-10 w-10 h-[3px] bg-[#E2D9C8]" />
                        <div className="absolute -bottom-[3px] left-10 w-10 h-[3px] bg-[#E2D9C8]" />
                        <div className="absolute -bottom-[3px] right-10 w-10 h-[3px] bg-[#E2D9C8]" />

                        {/* HALFTONE TIPIS */}
                        <div
                            className="absolute inset-0 opacity-[0.14] pointer-events-none"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, rgba(0,0,0,0.35) 1.6px, transparent 1.6px)",
                                backgroundSize: "12px 12px",
                            }}
                        />

                        {/* ISI */}
                        <div className="relative grid gap-8 md:grid-cols-[1.4fr_minmax(0,1fr)] items-center">
                            {/* LEFT TEXT */}
                            <div className="space-y-4 text-[#352c45]">
                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-[0.2em] uppercase">
                                    Contact{" "}
                                    <span className="text-[#EA84CB]">
                    Fadya<span className="hidden sm:inline"> Naila</span>
                  </span>
                                </h3>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    Let&apos;s work together on illustrations, comics, or concept
                                    art projects. I&apos;m open to school collaborations,
                                    commissions, and creative internships related to visual
                                    storytelling.
                                </p>

                                <div className="space-y-1.5 text-xs sm:text-sm font-medium">
                                    <p>
                    <span className="font-semibold uppercase tracking-[0.18em] text-[#352c45]/70">
                      Email:
                    </span>{" "}
                                        <span className="underline decoration-[#EA84CB]/70 decoration-2 underline-offset-4">
                      pyaafddraw@gmail.com
                    </span>
                                    </p>
                                    <p>
                    <span className="font-semibold uppercase tracking-[0.18em] text-[#352c45]/70">
                      Based in:
                    </span>{" "}
                                        Bekasi · West Java · Indonesia
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT ICONS */}
                            <div className="relative flex flex-col items-center gap-4">
                                <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#352c45]/70 mb-1">
                                    Find me on
                                </p>

                                <div className="flex gap-4 sm:gap-5">
                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/6281219522143"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EA84CB]/10 border border-[#EA84CB]/60 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:bg-[#EA84CB] hover:border-[#EA84CB] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)] group"
                                    >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.18em] text-[#352c45]/70 opacity-0 group-hover:opacity-100 transition">
                      WhatsApp
                    </span>
                                        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA84CB] group-hover:text-[#352c45]" />
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://www.linkedin.com/in/fadya-naila-b41b1a37a/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EA84CB]/10 border border-[#EA84CB]/60 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:bg-[#EA84CB] hover:border-[#EA84CB] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)] group"
                                    >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.18em] text-[#352c45]/70 opacity-0 group-hover:opacity-100 transition">
                      LinkedIn
                    </span>
                                        <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA84CB] group-hover:text-[#352c45]" />
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="https://www.instagram.com/fasbunn/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EA84CB]/10 border border-[#EA84CB]/60 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:bg-[#EA84CB] hover:border-[#EA84CB] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.7)] group"
                                    >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.18em] text-[#352c45]/70 opacity-0 group-hover:opacity-100 transition">
                      Instagram
                    </span>
                                        <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA84CB] group-hover:text-[#352c45]" />
                                    </a>
                                </div>

                                {/* little bubble text */}
                                <div className="mt-3 bg-[#E2D9C8] text-[#352c45] px-3 py-1.5 rounded-2xl text-[10px] sm:text-xs font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                                    Let&apos;s draw something together!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT LINE */}
                <div className="mt-10 sm:mt-12 border-t border-white/15 pt-4 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-white/70 text-center">
                    @2025 fasbun copyright.
                </div>
            </div>
        </footer>
    );
};

/* ===== SVG ICONS (inline, tanpa library tambahan) ===== */

type IconProps = { className?: string };

const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12.04 2.1C7.62 2.1 4 5.7 4 10.11c0 1.77.52 3.14 1.4 4.38L4 21.9l7.59-1.39c1.2.33 2.16.49 3.09.49h.01c4.42 0 8.02-3.6 8.02-8.02 0-4.41-3.62-8.03-8.04-8.03Zm.06 14.29c-1.17 0-2.33-.31-3.35-.89l-.24-.14-1.99.53.54-1.94-.16-.25a5.44 5.44 0 0 1-.86-2.93 5.44 5.44 0 0 1 5.44-5.44 5.43 5.43 0 0 1 5.43 5.44 5.44 5.44 0 0 1-5.81 5.62Zm3.08-3.25c-.17-.09-1.02-.5-1.18-.55-.16-.06-.28-.09-.4.09-.12.17-.46.55-.57.67-.1.12-.21.13-.38.04-.17-.09-.73-.27-1.38-.86-.51-.46-.86-1.03-.96-1.2-.1-.17-.01-.26.08-.35.08-.08.17-.2.25-.29.08-.1.1-.17.16-.29.05-.12.02-.22-.01-.31-.04-.09-.4-.97-.55-1.33-.15-.36-.3-.31-.4-.32h-.34c-.12 0-.31.04-.47.22-.16.17-.62.61-.62 1.49 0 .88.64 1.73.73 1.85.09.12 1.26 1.93 3.06 2.61.43.18.77.29 1.03.37.43.13.82.11 1.13.07.34-.05 1.02-.42 1.16-.82.14-.4.14-.74.1-.81-.04-.07-.15-.11-.32-.2Z" />
    </svg>
);

const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5ZM.25 8.01h4.5v14H.25v-14ZM8.75 8.01h4.31v1.91h.06c.6-1.13 2.08-2.32 4.28-2.32C21.75 7.6 24 9.48 24 13.28v8.73h-4.5v-7.74c0-1.84-.03-4.21-2.57-4.21-2.57 0-2.97 2-2.97 4.07v7.88H9.46v-14Z" />
    </svg>
);

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 15 12a3 3 0 0 1-3 3Zm6.06-7.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM12 2.2c-1.78 0-2 .01-2.7.04A6.37 6.37 0 0 0 6.8 2.7a4.8 4.8 0 0 0-1.75 1.14A4.8 4.8 0 0 0 3.9 5.6a6.37 6.37 0 0 0-.46 2.5C3.4 8.8 3.4 9.02 3.4 10.8v2.4c0 1.78.01 2 .04 2.7a6.37 6.37 0 0 0 .46 2.5 4.8 4.8 0 0 0 1.14 1.75 4.8 4.8 0 0 0 1.75 1.14 6.37 6.37 0 0 0 2.5.46c.7.03.92.04 2.7.04s2-.01 2.7-.04a6.37 6.37 0 0 0 2.5-.46 4.8 4.8 0 0 0 1.75-1.14 4.8 4.8 0 0 0 1.14-1.75 6.37 6.37 0 0 0 .46-2.5c.03-.7.04-.92.04-2.7s-.01-2-.04-2.7a6.37 6.37 0 0 0-.46-2.5 4.8 4.8 0 0 0-1.14-1.75A4.8 4.8 0 0 0 17.2 2.7a6.37 6.37 0 0 0-2.5-.46C14 2.21 13.78 2.2 12 2.2Zm0-1.7c1.82 0 2.04.01 2.75.04a8.1 8.1 0 0 1 2.73.52 6.5 6.5 0 0 1 3.73 3.73 8.1 8.1 0 0 1 .52 2.73c.03.71.04.93.04 2.75s-.01 2.04-.04 2.75a8.1 8.1 0 0 1-.52 2.73 6.5 6.5 0 0 1-3.73 3.73 8.1 8.1 0 0 1-2.73.52c-.71.03-.93.04-2.75.04s-2.04-.01-2.75-.04a8.1 8.1 0 0 1-2.73-.52 6.5 6.5 0 0 1-3.73-3.73 8.1 8.1 0 0 1-.52-2.73C2.21 14.04 2.2 13.82 2.2 12s.01-2.04.04-2.75a8.1 8.1 0 0 1 .52-2.73 6.5 6.5 0 0 1 3.73-3.73 8.1 8.1 0 0 1 2.73-.52C9.96.51 10.18.5 12 .5Z" />
    </svg>
);

export default Footer;

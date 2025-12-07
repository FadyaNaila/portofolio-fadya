import React from "react";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="relative w-full bg-[#352c45] text-white py-16 sm:py-24 overflow-hidden"
        >
            {/* TEXTURE & GLOW BACKGROUND */}
            <div
                className="absolute inset-0 opacity-[0.16] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.6) 2px, transparent 2px)",
                    backgroundSize: "24px 24px",
                }}
            />
            <div className="absolute inset-0 pointer-events-none mix-blend-soft-light">
                <div className="w-[420px] h-[420px] rounded-full bg-[#EA84CB]/26 blur-[140px] absolute -left-16 top-4 animate-pulse" />
                <div className="w-[420px] h-[420px] rounded-full bg-[#E2D9C8]/40 blur-[150px] absolute right-[-60px] bottom-[-80px] animate-pulse" />
            </div>

            {/* LITTLE FLOATING STICKERS (IDLE ANIMATION) */}
            <div className="pointer-events-none absolute top-16 right-10 hidden sm:block">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-[#EA84CB] bg-white/5 backdrop-blur-sm flex items-center justify-center animate-pulse">
                        <span className="text-[10px] tracking-[0.18em] uppercase text-[#EA84CB] font-semibold">
                            Artist
                        </span>
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-7 h-7 rounded-full bg-[#EA84CB] opacity-70 blur-[2px]" />
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
                {/* HEADER BAR ala komik */}
                <div
                    className="flex items-center justify-between gap-4 mb-10"
                    data-aos="fade-down"
                >
                    <div className="inline-flex items-center gap-3">
                        <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-white/80">
                            About Me
                        </span>
                        <span className="h-[1px] w-10 bg-white/60" />
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#EA84CB]">
                            Character: Fadya Naila
                        </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/60">
                        <span>Issue #001</span>
                        <span className="w-8 h-[2px] bg-[#EA84CB]" />
                    </div>
                </div>

                {/* MAIN GRID PANELS */}
                <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-8 lg:gap-10 items-stretch">
                    {/* LEFT: MAIN STORY PANEL */}
                    <div
                        className="relative"
                        data-aos="fade-right"
                        data-aos-offset="120"
                    >
                        {/* Rotated shadow panel */}
                        <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.4rem] bg-black/40 rotate-[-3deg] shadow-[0_26px_60px_rgba(0,0,0,0.65)]" />

                        {/* Main panel */}
                        <div className="relative bg-white text-[#352c45] rounded-[2.4rem] border-[3px] border-[#E2D9C8] px-6 sm:px-9 py-7 sm:py-9 shadow-[0_18px_40px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_65px_rgba(0,0,0,0.7)]">
                            {/* Top bar deco */}
                            <div className="absolute -top-[3px] left-10 w-10 h-[3px] bg-[#E2D9C8]" />
                            <div className="absolute -top-[3px] right-10 w-10 h-[3px] bg-[#E2D9C8]" />

                            {/* Panel header */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                                <h3 className="text-base sm:text-lg font-extrabold tracking-[0.22em] uppercase text-[#352c45]">
                                    Origin Story
                                </h3>
                                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#EA84CB]">
                                    Bekasi · West Java · Indonesia
                                </span>
                            </div>

                            {/* CONTENT 2 PARAGRAF */}
                            <div className="space-y-4 text-sm sm:text-[0.95rem] leading-relaxed font-medium">
                                <p>
                                    Hi, my name is Fadya Naila Fajar. I’m a young artist from
                                    Bekasi, West Java, Indonesia who loves exploring comic
                                    illustration and concept art. I’m currently 16 and studying at
                                    SMK Raden Umar Said Kudus, where I focus on developing my
                                    skills in comic creation and visual storytelling.
                                </p>
                                <p>
                                    I enjoy designing characters, building compelling backgrounds,
                                    and bringing stories to life through comics. I work mainly with
                                    Clip Studio Paint, Photoshop, and Illustrator, and I’ve also
                                    created short animated films for school projects and
                                    competitions. Through these experiences, I’ve learned how to
                                    collaborate well, take initiative, and lead small creative
                                    projects. I’m a fast learner who likes to experiment, solve
                                    problems, and keep improving my craft. I hope to continue
                                    growing in the animation and creative industry and someday
                                    contribute to meaningful projects that inspire audiences,
                                    especially in Indonesia.
                                </p>
                            </div>

                            {/* Bottom bar deco */}
                            <div className="absolute -bottom-[3px] left-10 w-10 h-[3px] bg-[#E2D9C8]" />
                            <div className="absolute -bottom-[3px] right-10 w-10 h-[3px] bg-[#E2D9C8]" />

                            {/* PAGE META */}
                            <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.26em] text-[#352c45]/60">
                                <span>Page 01 · Profile</span>
                                <span>Drawn by: Fadya</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: SMALL PANELS COLUMN */}
                    <div className="space-y-5" data-aos="fade-left" data-aos-offset="120">
                        {/* PANEL: QUICK STATS */}
                        <div className="relative">
                            <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full border-2 border-[#EA84CB] bg-white/10 flex items-center justify-center animate-pulse">
                                <span className="text-[9px] tracking-[0.18em] uppercase text-[#EA84CB]">
                                    LVL 16
                                </span>
                            </div>
                            <div className="relative bg-white/95 text-[#352c45] rounded-3xl border-[3px] border-[#EA84CB]/65 px-5 py-5 shadow-[0_14px_32px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                                <h4 className="text-xs font-extrabold tracking-[0.22em] uppercase mb-3 text-[#EA84CB]">
                                    Quick Stats
                                </h4>
                                <ul className="space-y-1.5 text-[11px] sm:text-xs tracking-[0.04em]">
                                    <li className="flex justify-between">
                                        <span>Age</span>
                                        <span className="font-semibold">16</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Focus</span>
                                        <span className="font-semibold">Comic & Concept Art</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Location</span>
                                        <span className="font-semibold">Bekasi · Indonesia</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>School</span>
                                        <span className="font-semibold">SMK RUS Kudus</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PANEL: TOOLS */}
                        <div className="relative" data-aos="fade-left" data-aos-delay="120">
                            <div className="relative bg-white/95 text-[#352c45] rounded-3xl border-[3px] border-[#E2D9C8] px-5 py-5 shadow-[0_14px_32px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                                <h4 className="text-xs font-extrabold tracking-[0.22em] uppercase mb-3 text-[#352c45]">
                                    Toolkit
                                </h4>
                                <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px]">
                                    {["Clip Studio Paint", "Photoshop", "After Effect", "Medibang", "Krita"].map(
                                        (tool) => (
                                            <span
                                                key={tool}
                                                className="px-3 py-1 rounded-full bg-[#EA84CB]/14 border border-[#EA84CB]/40 text-[#352c45] font-semibold tracking-[0.08em]"
                                            >
                                                {tool}
                                            </span>
                                        )
                                    )}
                                </div>
                                <div className="mt-4 text-[10px] text-[#352c45]/65 tracking-[0.12em] uppercase">
                                    <span>Panel: Skills · Updated weekly</span>
                                </div>
                            </div>
                        </div>

                        {/* PANEL: VIBE / TAGLINE */}
                        <div
                            className="relative bg-[#EA84CB] text-white rounded-3xl px-5 py-5 shadow-[0_16px_36px_rgba(0,0,0,0.55)] overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.7)]"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            {/* Halftone overlay */}
                            <div
                                className="absolute inset-0 opacity-[0.25] mix-blend-soft-light"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.6) 2px, transparent 2px)",
                                    backgroundSize: "12px 12px",
                                }}
                            />

                            <div className="relative">
                                <h4 className="text-xs font-extrabold tracking-[0.24em] uppercase mb-3">
                                    Current Mood
                                </h4>
                                <p className="text-[11px] sm:text-sm leading-relaxed font-medium">
                                    Always sketching, learning new techniques, and dreaming of
                                    stories that can inspire other people—especially young artists
                                    in Indonesia.
                                </p>
                                <div className="mt-4 text-[10px] tracking-[0.18em] uppercase flex items-center justify-between">
                                    <span>Next Page: Illustrations</span>
                                    <span>▶▶</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React, { useEffect, useState, useRef } from "react";
import nailaImg from "../assets/person/naila_2.png";
import cvNaila from "../assets/CV/cv_naila.pdf";

const phrases = ["Art Conceptor", "Comic Illustrator", "2D Animator"];

const Hero: React.FC = () => {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [isInView, setIsInView] = useState(false);
    const heroRef = useRef<HTMLElement | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Typing effect
    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const typingSpeed = 80;
        const deletingSpeed = 40;
        const pauseTime = 1200;
        let timeout: number;

        if (!isDeleting && charIndex <= currentPhrase.length) {
            timeout = window.setTimeout(() => {
                setText(currentPhrase.slice(0, charIndex));
                setCharIndex((p) => p + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
            timeout = window.setTimeout(() => {
                setText(currentPhrase.slice(0, charIndex));
                setCharIndex((p) => p - 1);
            }, deletingSpeed);
        } else if (!isDeleting && charIndex > currentPhrase.length) {
            timeout = window.setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex < 0) {
            setIsDeleting(false);
            setPhraseIndex((p) => (p + 1) % phrases.length);
            setCharIndex(0);
        }

        return () => window.clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex]);

    // OBSERVER UNTUK CEK KETIKA HERO MASUK/KELUAR VIEWPORT
    useEffect(() => {
        if (!heroRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.35 }
        );

        observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmDownload = () => {
        const link = document.createElement("a");
        link.href = cvNaila;
        link.download = "cv_naila.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsModalOpen(false);
    };

    return (
        <section
            ref={heroRef}
            className="
                relative w-full min-h-screen
                flex items-center justify-center
                bg-[#E1D5C5]
                pt-10 sm:pt-14
                pb-24 md:pb-16
            "
        >
            {/* BACKGROUND LAYER UTAMA */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(232,217,200,1) 0%, rgba(232,217,200,0.8) 40%, rgba(225,213,197,0.9) 100%)",
                }}
            />

            {/* DOT PATTERN */}
            <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.45) 2px, transparent 2px)",
                    backgroundSize: "22px 22px",
                    maskImage:
                        "radial-gradient(circle at center, black 40%, transparent 100%)",
                }}
            />

            {/* NOISE / TEXTURE */}
            <div
                className="absolute inset-0 opacity-[0.18] blur-sm mix-blend-soft-light"
                style={{
                    backgroundImage: `
                        repeating-radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 3px),
                        repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, transparent 4px)
                    `,
                    backgroundSize: "180px 180px, 230px 230px",
                }}
            />

            {/* Soft glow accents */}
            <div className="absolute left-[15%] top-[10%] w-[380px] h-[380px] rounded-full bg-[#EA84CB]/28 blur-[120px]" />
            <div className="absolute right-[8%] bottom-[10%] w-[450px] h-[450px] rounded-full bg-[#E2D9C8]/55 blur-[160px]" />

            {/* MAIN CONTENT */}
            <div
                className={`
                    relative z-10 w-[92%] max-w-6xl mx-auto
                    grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]
                    gap-10 lg:gap-16 items-center
                    transform transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                    ${
                    isInView
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-[0.97]"
                }
                `}
            >
                {/* LEFT TEXT AREA */}
                <div
                    className={`
                        space-y-7 transform transition-all duration-700 delay-100
                        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
                    `}
                >
                    {/* Tag pill */}
                    <div className="relative inline-flex items-center gap-3 rounded-full border border-white/50 bg-[#352c45] px-6 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                        <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-white uppercase">
                            PORTO FOLIO
                        </span>
                        <span className="h-[1px] w-10 bg-white/70" />
                        <span className="text-[11px] sm:text-xs text-white tracking-[0.25em] uppercase">
                            FADYA ● NAILA
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#352c45]">
                        <span className="block text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#352c45]/60 mb-2">
                            Hello, I&apos;m
                        </span>
                        Fadya{" "}
                        <span className="text-[#EA84CB] drop-shadow-[0_4px_12px_rgba(234,132,203,0.45)]">
                            Naila
                        </span>
                    </h1>

                    {/* Typing subtitle */}
                    <div className="flex items-center gap-2 text-sm sm:text-lg font-semibold text-[#352c45]">
                        <span className="uppercase tracking-[0.2em] text-xs sm:text-sm opacity-75">
                            I&apos;m a
                        </span>
                        <span>
                            {text}
                            <span className="inline-block w-[10px] h-[18px] bg-[#EA84CB] ml-[6px] animate-pulse" />
                        </span>
                    </div>

                    {/* Description */}
                    <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#352c45]/85">
                        Hi, my name is Fadya Naila Fajar. I’m a young artist from Bekasi,
                        West Java, Indonesia who loves exploring comic illustration and
                        concept art. I’m currently 16 and studying at SMK Raden Umar Said
                        Kudus, where I focus on developing my skills in comic creation and
                        visual storytelling.
                    </p>

                    {/* ACTION BUTTON */}
                    <div className="flex gap-4">
                        <button
                            className="relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 bg-[#EA84CB] text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_8px_25px_rgba(234,132,203,0.45)] hover:scale-[1.04] active:scale-[0.95] transition"
                            onClick={handleOpenModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                                />
                            </svg>
                            Download CV
                        </button>
                    </div>
                </div>

                {/* RIGHT CHARACTER CARD */}
                <div
                    className={`
                        relative flex justify-center lg:justify-end
                        transform transition-all duration-700 delay-150
                        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
                    `}
                >
                    <div className="relative">
                        {/* rotated bg */}
                        <div className="absolute -top-5 -left-5 w-full h-full rounded-[2.4rem] bg-[#E2D9C8]/60 rotate-[-6deg] border-4 border-[#EA84CB]/40 shadow-[0_18px_35px_rgba(0,0,0,0.28)]" />

                        <div className="relative rounded-[2.6rem] border-[4px] border-[#E2D9C8] bg-[#352c45] px-6 sm:px-8 pt-8 pb-6 shadow-[0_22px_55px_rgba(0,0,0,0.45)] overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-[0.38]"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)",
                                    backgroundSize: "9px 9px",
                                }}
                            />

                            {/* spotlight */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[140%] h-[140%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(234,132,203,0.55)_0,_rgba(53,44,69,0)_65%)] opacity-70" />
                            </div>

                            <div className="relative mx-auto rounded-[2.4rem] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
                                <img
                                    src={nailaImg}
                                    alt="Illustration"
                                    className="w-[260px] sm:w-[320px] md:w-[360px] lg:w-[480px] object-contain"
                                />
                            </div>

                            <div className="relative mt-4 text-[10px] sm:text-xs text-white/80 tracking-[0.3em] uppercase flex justify-between">
                                <span>Panel: Intro</span>
                                <span>Issue #001</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL CONFIRMATION DOWNLOAD */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl px-6 py-5 w-full max-w-sm shadow-xl">
                        <h2 className="text-lg font-semibold text-[#352c45] mb-2">
                            Download CV
                        </h2>
                        <p className="text-sm text-[#352c45]/80 mb-5">
                            Are you sure you want to download Fadya Naila&apos;s CV?
                        </p>
                        <div className="flex justify-end gap-3 text-sm">
                            <button
                                className="px-4 py-2 rounded-full border border-[#352c45]/20 text-[#352c45]/80 hover:bg-[#f3ece2] transition"
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 rounded-full bg-[#EA84CB] text-white font-semibold shadow-[0_6px_18px_rgba(234,132,203,0.5)] hover:scale-[1.02] active:scale-95 transition"
                                onClick={handleConfirmDownload}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Hero;

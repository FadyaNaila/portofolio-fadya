import React, { useEffect, useState } from "react";

// ILUSTRASI
import illusCredit from "../assets/gallery/illustrasi/credit_illus_rangga.png";
import illusJicad from "../assets/gallery/illustrasi/JICAD_PT_2.png";
import illusJicaf from "../assets/gallery/illustrasi/jicaf.png";
import illusY2k from "../assets/gallery/illustrasi/y2k.png";
import commission from "../assets/gallery/illustrasi/commission.png";
import selfIlustration from "../assets/person/naila.png";

// KOMIK
import komikAspect from "../assets/gallery/komik/aspect_to_aspect.png";
import komikHal1 from "../assets/gallery/komik/halamnan_1_tes_pkl_2.png";
import komikHlm2 from "../assets/gallery/komik/hlm_2.png";
import komikHm3 from "../assets/gallery/komik/hm_3.png";
import komikSubject from "../assets/gallery/komik/subject_to_subject_revisi.png";

// KONSEP
import konsep15 from "../assets/gallery/konsep/15_FADYA_NAILA_F._PASKONSEP.png";
import konsepAvc from "../assets/gallery/konsep/avc_konsep_1_11.png";
import konsepExpresi from "../assets/gallery/konsep/Expresi.png";
import konsepTyas from "../assets/gallery/konsep/karakter_design_Tyas_wening.png";
import konsepBima from "../assets/gallery/konsep/Konsep_bima_02.png";
import konsepStudent from "../assets/gallery/konsep/konsep_studen_stuf.png";
import konsepSpidersona from "../assets/gallery/konsep/Spidersona.png";

// ANIMASI (video)
import animPakWan from "../assets/gallery/animasi/animasi_pak_wan_2.mp4";
import animFailsafe from "../assets/gallery/animasi/Fadya_NAila_failsafe_0001.mp4";
import animYyyy from "../assets/gallery/animasi/yyyyy.mp4";

// THUMBNAIL DEFAULT UNTUK VIDEO GOOGLE DRIVE
import defaultThumb from "../assets/gallery/animasi/thumnail.jpg";

type ArtItem = {
    title: string;
    subtitle?: string;
    src: string;
};

const illustrationItems: ArtItem[] = [
    { title: "Credit Illustration", subtitle: "Poster credit", src: illusCredit },
    { title: "JICAF Loey Top 10", subtitle: "JICAF Competition", src: illusJicad },
    { title: "JICAF Loey Top 20", subtitle: "JICAF Competition", src: illusJicaf },
    { title: "Y2K Style", subtitle: "Personal illustration", src: illusY2k },
    { title: "Commission Illustration", subtitle: "Commission work", src: commission },
    { title: "Self Illustration", subtitle: "Self portrait", src: selfIlustration },
];

const comicItems: ArtItem[] = [
    { title: "Aspect to Aspect", src: komikAspect },
    { title: "Comic Page 1", src: komikHal1 },
    { title: "Comic Page 2", src: komikHlm2 },
    { title: "Comic Page 3", src: komikHm3 },
    { title: "Subject to Subject", src: komikSubject },
];

const conceptItems: ArtItem[] = [
    { title: "Paskonsep", src: konsep15 },
    { title: "AVC Concept Sheet", src: konsepAvc },
    { title: "Expression Study", src: konsepExpresi },
    { title: "Tyas Character Design", src: konsepTyas },
    { title: "Bima Concept", src: konsepBima },
    { title: "Student Stuff Concept", src: konsepStudent },
    { title: "Spidersona", src: konsepSpidersona },
];

const videoItems: ArtItem[] = [
    { title: "Short Animation", src: animPakWan },
    { title: "Failsafe Scene", src: animFailsafe },
    { title: "Animation Clip", src: animYyyy },
    {
        title: "Rangga Wisata",
        src: "https://drive.google.com/file/d/1dGCfPr2wa_F1tk38WnejxfJBJt8dgl_e/preview",
    },
];

// ---------- Modal state type ----------
type ModalState = {
    open: boolean;
    type: "image" | "video";
    items: ArtItem[];
    index: number;
    label: string;
};

const Gallery: React.FC = () => {
    const [modal, setModal] = useState<ModalState | null>(null);

    const openModal = (
        type: "image" | "video",
        items: ArtItem[],
        index: number,
        label: string
    ) => {
        setModal({
            open: true,
            type,
            items,
            index,
            label,
        });
    };

    const closeModal = () => setModal(null);

    const showPrev = () => {
        if (!modal) return;
        setModal({
            ...modal,
            index: (modal.index - 1 + modal.items.length) % modal.items.length,
        });
    };

    const showNext = () => {
        if (!modal) return;
        setModal({
            ...modal,
            index: (modal.index + 1) % modal.items.length,
        });
    };

    // ESC & arrows
    useEffect(() => {
        if (!modal) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [modal]);

    const currentItem =
        modal && modal.items && modal.items[modal.index]
            ? modal.items[modal.index]
            : null;

    return (
        <>
            <section
                id="gallery"
                className="relative w-full bg-[#352c45] text-white py-16 sm:py-24 overflow-hidden"
            >
                {/* BACKGROUND TEXTURE + GLOW */}
                <div
                    className="absolute inset-0 opacity-[0.16] pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(0,0,0,0.6) 2px, transparent 2px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                <div className="absolute inset-0 pointer-events-none mix-blend-soft-light">
                    <div className="w-[420px] h-[420px] rounded-full bg-[#EA84CB]/26 blur-[140px] absolute -left-16 top-10 animate-pulse" />
                    <div className="w-[420px] h-[420px] rounded-full bg-[#E2D9C8]/38 blur-[150px] absolute right-[-60px] bottom-[-80px] animate-pulse" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
                    {/* HEADER SECTION */}
                    <div
                        className="mb-10 sm:mb-14 flex flex-col gap-3"
                        data-aos="fade-down"
                    >
                        <div className="inline-flex items-center gap-3">
                            <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-white/80">
                                Featured Works
                            </span>
                            <span className="h-[1px] w-10 bg-white/60" />
                            <span className="text-[10px] tracking-[0.3em] uppercase text-[#EA84CB]">
                                Gallery · Comics · Concepts
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-[0.22em] uppercase">
                            Art{" "}
                            <span className="text-[#EA84CB] drop-shadow-[0_0_18px_rgba(234,132,203,0.95)]">
                                Gallery
                            </span>
                        </h2>
                        <p className="max-w-xl text-sm sm:text-base text_WHITE/80 leading-relaxed text-white/80">
                            A selection of my illustrations, comic pages, concept artworks,
                            and short animations. Each panel is part of my journey
                            exploring visual storytelling and character-driven worlds.
                        </p>
                    </div>

                    {/* --- ILUSTRASI --- */}
                    <CategoryBlock
                        label="Illustrations"
                        issue="Chapter 01"
                        description="Standalone artworks, posters, and experimental pieces with different moods and styles."
                        items={illustrationItems}
                        type="image"
                        aos="fade-up"
                        onItemClick={(index) =>
                            openModal("image", illustrationItems, index, "Illustrations")
                        }
                    />

                    {/* --- KOMIK --- */}
                    <CategoryBlock
                        label="Comics"
                        issue="Chapter 02"
                        description="Sequential pages that explore pacing, paneling, and storytelling through comics."
                        items={comicItems}
                        type="image"
                        aos="fade-up"
                        onItemClick={(index) =>
                            openModal("image", comicItems, index, "Comics")
                        }
                    />

                    {/* --- KONSEP --- */}
                    <CategoryBlock
                        label="Concept Art"
                        issue="Chapter 03"
                        description="Character sheets, poses, and early sketches that shape my stories and animated ideas."
                        items={conceptItems}
                        type="image"
                        aos="fade-up"
                        onItemClick={(index) =>
                            openModal("image", conceptItems, index, "Concept Art")
                        }
                    />

                    {/* --- ANIMASI --- */}
                    <CategoryBlock
                        label="Animation Clips"
                        issue="Chapter 04"
                        description="Short animated projects created for school tasks, competitions, and personal experiments."
                        items={videoItems}
                        type="video"
                        aos="fade-up"
                        onItemClick={(index) =>
                            openModal("video", videoItems, index, "Animation Clips")
                        }
                    />
                </div>
            </section>

            {/* -------- MODAL / LIGHTBOX -------- */}
            {modal && currentItem && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center"
                    onClick={closeModal}
                >
                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

                    {/* content */}
                    <div
                        className="relative z-[61] w-[94%] max-w-5xl max-h-[88vh] bg-[#21172f] border border-white/10 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* header bar */}
                        <div className="flex items-center justify-between px-5 sm:px-7 py-3 border-b border-white/10 bg-black/20">
                            <div>
                                <p className="text-[11px] tracking-[0.26em] uppercase text-[#EA84CB]">
                                    {modal.label}
                                </p>
                                <p className="text-xs sm:text-sm text-white/80">
                                    {currentItem.title}
                                </p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="rounded-full border border-white/30 w-8 h-8 flex items-center justify-center text-white/80 hover:bg:white/10 hover:text-white transition hover:bg-white/10"
                            >
                                ✕
                            </button>
                        </div>

                        {/* media area */}
                        <div className="relative flex-1 flex items-center justify-center bg-black/60 px-3 py-4">
                            {modal.items.length > 1 && (
                                <>
                                    <button
                                        onClick={showPrev}
                                        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/15 border border-white/40 w-9 h-9 flex items-center justify-center text-white hover:bg-white/30 transition"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={showNext}
                                        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 rounded-full bg:white/15 border border-white/40 w-9 h-9 flex items-center justify-center text_WHITE hover:bg-white/30 transition bg-white/15 text-white"
                                    >
                                        ›
                                    </button>
                                </>
                            )}

                            {modal.type === "image" ? (
                                <img
                                    src={currentItem.src}
                                    alt={currentItem.title}
                                    className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.9)]"
                                />
                            ) : currentItem.src.includes("drive.google.com") ? (
                                // VIDEO GOOGLE DRIVE → pakai iframe preview
                                <iframe
                                    src={currentItem.src}
                                    className="w-full max-w-3xl h-[50vh] rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.9)] bg-black"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <video
                                    src={currentItem.src}
                                    controls
                                    className="max-h-[72vh] w-auto max-w-full rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.9)] bg-black"
                                />
                            )}
                        </div>

                        {/* footer info */}
                        <div className="px-5 sm:px-7 py-3 bg-black/25 border-t border-white/10 text-[10px] sm:text-xs text_WHITE/75 flex items-center justify-between tracking-[0.18em] uppercase text-white/75">
                            <span>
                                Panel {modal.index + 1} of {modal.items.length}
                            </span>
                            <span className="hidden sm:inline">
                                Use ← → or click arrows to navigate
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

/* ================== CATEGORY BLOCK COMPONENT ================== */

type CategoryBlockProps = {
    label: string;
    issue: string;
    description: string;
    items: ArtItem[];
    type: "image" | "video";
    aos?: string;
    onItemClick?: (index: number) => void;
};

const CategoryBlock: React.FC<CategoryBlockProps> = ({
                                                         label,
                                                         issue,
                                                         description,
                                                         items,
                                                         type,
                                                         aos = "fade-up",
                                                         onItemClick,
                                                     }) => {
    return (
        <div className="mt-10 sm:mt-14" data-aos={aos} data-aos-offset="140">
            {/* HEADER BAR KATEGORI */}
            <div className="flex items-center justify-between gap-4 mb-5">
                <div className="inline-flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full border border-[#EA84CB]/60 bg-[#EA84CB]/15 text-[11px] tracking-[0.22em] uppercase font-semibold text-[#EA84CB]">
                        {label}
                    </span>
                    <span className="h-[1px] w-8 bg-white/50" />
                    <span className="text-[10px] tracking-[0.24em] uppercase text_WHITE/70 text-white/70">
                        {issue}
                    </span>
                </div>
                <span className="hidden sm:inline text-[10px] tracking-[0.22em] uppercase text-white/50">
                    {items.length} pieces
                </span>
            </div>

            <p className="max-w-2xl text-xs sm:text-sm text:white/80 mb-5 sm:mb-6 text-white/80">
                {description}
            </p>

            {/* PANEL GRID */}
            <div className="relative">
                <div className="absolute -left-1 top-3 bottom-3 w-[6px] rounded-full bg-[#EA84CB] shadow-[0_0_12px_rgba(234,132,203,0.8)] hidden sm:block" />
                <div className="absolute inset-0 translate-y-3 rounded-[2.1rem] bg-black/35 blur-[10px] opacity-70" />

                <div className="relative bg-white/95 rounded-[2.2rem] border-[3px] border-[#E2D9C8] px-4 sm:px-6 py-5 sm:py-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-[0.12] pointer-events-none"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(0,0,0,0.45) 1.5px, transparent 1.5px)",
                            backgroundSize: "12px 12px",
                        }}
                    />

                    <div className="relative grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {items.map((item, index) => (
                            <ArtCard
                                key={item.title}
                                item={item}
                                type={type}
                                onClick={() => onItemClick && onItemClick(index)}
                            />
                        ))}
                    </div>

                    <div className="relative mt-4 flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#352c45]/60">
                        <span>Panel set: {label}</span>
                        <span>Scroll for next chapter ▶</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ================== ART CARD COMPONENT ================== */

type ArtCardProps = {
    item: ArtItem;
    type: "image" | "video";
    onClick?: () => void;
};

const ArtCard: React.FC<ArtCardProps> = ({ item, type, onClick }) => {
    const isDriveVideo =
        type === "video" && item.src.includes("drive.google.com");

    return (
        <button
            type="button"
            onClick={onClick}
            className="group relative rounded-3xl overflow-hidden border border-[#E2D9C8] bg-[#E2D9C8]/40 shadow-[0_8px_25px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)] text-left"
        >
            {/* Glow overlay ketika hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#EA84CB]/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Hover text hint */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Click to see detail {type === "video" ? "video" : "image"}
            </div>

            {/* Media container: object-contain biar tidak kepotong */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E2D9C8]/70 flex items-center justify-center">
                {type === "image" ? (
                    <img
                        src={item.src}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                ) : isDriveVideo ? (
                    <img
                        src={defaultThumb}
                        alt={item.title}
                        className="max-h-full max-w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                ) : (
                    <video
                        src={item.src}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                )}
            </div>

            {/* Caption */}
            <div className="relative px-4 py-3 bg-white/90 text-[#352c45]">
                <p className="text-xs sm:text-sm font-semibold line-clamp-1">
                    {item.title}
                </p>
                {item.subtitle && (
                    <p className="mt-0.5 text-[10px] text-[#352c45]/70 line-clamp-1">
                        {item.subtitle}
                    </p>
                )}
            </div>
        </button>
    );
};

export default Gallery;

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pointer, CalendarPlus } from "lucide-react";
import { toast } from "sonner";
import { WEDDING, reveal } from "./data";
import Countdown from "./Countdown";

const Confetti = () => {
    const pieces = useMemo(
        () =>
            Array.from({ length: 28 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 0.6,
                dur: 2.2 + Math.random() * 1.6,
                dx: Math.random() * 120 - 60,
                color: ["#D4AF37", "#E8CE9C", "#6E1F2F", "#D98A94", "#E9B62F"][i % 5],
            })),
        []
    );
    return (
        <div className="confetti-layer" aria-hidden="true" data-testid="confetti">
            {pieces.map((p) => (
                <span
                    key={p.id}
                    className="confetti-piece"
                    style={{
                        left: `${p.left}%`,
                        background: p.color,
                        animationDuration: `${p.dur}s`,
                        animationDelay: `${p.delay}s`,
                        "--dx": `${p.dx}px`,
                    }}
                />
            ))}
        </div>
    );
};

const GCAL =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent("Sagar & Shrutika — Wedding")}` +
    "&dates=20270102T113000Z/20270102T133000Z" +
    `&details=${encodeURIComponent("Traditional Maharashtrian Vivah Vidhi. Muhurat 5:55 PM")}` +
    `&location=${encodeURIComponent(WEDDING.address)}`;

export default function SaveTheDate() {
    const [revealed, setRevealed] = useState(false);
    const revealNow = () => {
        if (!revealed) {
            setRevealed(true);
            toast.success("The date is revealed!", { duration: 2000 });
        }
    };
    const downloadIcs = () => {
        const ics = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            "DTSTART:20270102T113000Z",
            "DTEND:20270102T133000Z",
            "SUMMARY:Sagar & Shrutika — Wedding",
            `LOCATION:${WEDDING.address}`,
            "DESCRIPTION:Traditional Maharashtrian Vivah Vidhi. Muhurat 5:55 PM",
            "END:VEVENT",
            "END:VCALENDAR",
        ].join("\r\n");
        const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
        const a = document.createElement("a");
        a.href = url;
        a.download = "sagar-shrutika-wedding.ics";
        a.click();
        URL.revokeObjectURL(url);
        toast.success("Calendar file downloaded");
    };
    return (
        <section className="std-section" data-testid="page-save-the-date">
            <motion.div {...reveal} className="std-inner">
                <h2 className="section-title light">
                    Save <span className="script">the Date</span>
                </h2>
                <div
                    className="tassel-zone"
                    onClick={revealNow}
                    role="button"
                    aria-label="Pull the tassel to reveal the date"
                    data-testid="tassel"
                >
                    <motion.div
                        drag="y"
                        dragConstraints={{ top: -80, bottom: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, info) => {
                            if (info.offset.y < -30 || info.velocity.y < -200) revealNow();
                        }}
                        className="tassel"
                        whileTap={{ scale: 0.96 }}
                    >
                        <div className="tassel-string" />
                        <div className="tassel-head" />
                        <div className="tassel-skirt" />
                    </motion.div>
                    {!revealed && (
                        <motion.span
                            className="pull-hint"
                            animate={{ y: [0, 9, 0] }}
                            transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
                            data-testid="pull-hint"
                        >
                            <Pointer size={15} /> Pull the tassel
                        </motion.span>
                    )}
                </div>
                <div className="scroll" data-testid="golden-scroll">
                    <div className="scroll-rod" />
                    <div className="scroll-paper">
                        <img src="/images/ganesh.png" alt="Ganesh Ji" className="scroll-ganesh" />
                        {!revealed ? (
                            <p className="scroll-closed-msg">A sacred secret is sealed within…</p>
                        ) : (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className="scroll-reveal"
                                data-testid="scroll-reveal"
                            >
                                <p className="scroll-script">Save the Date</p>
                                <p className="scroll-date">{WEDDING.dateLabel}</p>
                                <p className="scroll-muhurat">
                                    Muhurat · {WEDDING.muhurat}
                                </p>
                                <div className="gold-divider" aria-hidden="true" />
                                <Countdown />
                                <div className="std-buttons">
                                    <a
                                        href={GCAL}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-gold"
                                        data-testid="add-to-calendar"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <CalendarPlus size={16} /> Add to Calendar
                                    </a>
                                    <button type="button" className="btn-ghost" data-testid="download-ics" onClick={downloadIcs}>
                                        iPhone / Outlook (.ics)
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <div className="scroll-rod" />
                </div>
                {revealed && <Confetti />}
            </motion.div>
        </section>
    );
}

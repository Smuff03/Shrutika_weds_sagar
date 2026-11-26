import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PHOTOS, reveal } from "./data";

export default function OurStory() {
    const ref = useRef(null);
    const [active, setActive] = useState(0);
    const onScroll = () => {
        const el = ref.current;
        if (!el || !el.clientWidth) return;
        setActive(Math.min(PHOTOS.length - 1, Math.round(el.scrollLeft / el.clientWidth)));
    };
    const goTo = (i) => {
        const el = ref.current;
        if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    };
    return (
        <section className="story-section" data-testid="page-our-story">
            <motion.div {...reveal}>
                <h2 className="section-title">
                    Our <span className="script">Story</span>
                </h2>
                <p className="section-sub">Moments that led us to forever</p>
            </motion.div>
            <motion.div {...reveal} className="story-frame">
                <div className="story-track no-scrollbar" ref={ref} onScroll={onScroll} data-testid="story-track">
                    {PHOTOS.map((p, i) => (
                        <figure className="story-slide" key={i} data-testid={`story-slide-${i + 1}`}>
                            <img src={p.src} alt={`Sagar and Shrutika — ${p.caption}`} loading={i < 3 ? "eager" : "lazy"} draggable={false} />
                            <figcaption>{p.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            </motion.div>
            <div className="story-dots" data-testid="story-dots">
                {PHOTOS.map((_, i) => (
                    <button key={i} type="button" aria-label={`Go to photo ${i + 1}`} className={`dot ${i === active ? "active" : ""}`} onClick={() => goTo(i)} />
                ))}
            </div>
        </section>
    );
}

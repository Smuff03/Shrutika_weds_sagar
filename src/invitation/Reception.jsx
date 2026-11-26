import { motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";
import { WEDDING, reveal } from "./data";

const SPARKS = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: (i * 71) % 100,
    top: (i * 37) % 90,
    delay: (i % 7) * 0.7,
}));

export default function Reception() {
    return (
        <section className="reception-section" data-testid="page-reception">
            {SPARKS.map((s) => (
                <span key={s.id} className="sparkle" style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s` }} aria-hidden="true" />
            ))}
            <img src="/images/roses.png" alt="" className="scene-rose rose-tl dim" aria-hidden="true" />
            <img src="/images/roses.png" alt="" className="scene-rose rose-br dim" aria-hidden="true" />
            <motion.div {...reveal} className="reception-content">
                <img src="/images/ganesh.png" alt="Ganesh Ji" className="reception-ganesh" />
                <p className="reception-eyebrow">And the celebration continues…</p>
                <h2 className="reception-title">
                    Grand <span className="script">Reception</span>
                </h2>
                <div className="gold-divider" aria-hidden="true" />
                <div className="reception-details" data-testid="reception-details">
                    <p className="reception-line">Saturday, 02nd January 2027</p>
                    <p className="reception-line">8:00 PM onwards</p>
                    <p className="reception-venue">{WEDDING.venue}</p>
                    <p className="reception-note">
                        <CalendarHeart size={15} /> Dinner, dance and celebrations under the stars
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

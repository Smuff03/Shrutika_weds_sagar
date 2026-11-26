import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { COUPLE, WEDDING, reveal } from "./data";

function useTypewriter(text, delay, speed = 65) {
    const [out, setOut] = useState("");
    useEffect(() => {
        let i = 0;
        let interval;
        const t = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setOut(text.slice(0, i));
                if (i >= text.length) clearInterval(interval);
            }, speed);
        }, delay);
        return () => {
            clearTimeout(t);
            if (interval) clearInterval(interval);
        };
    }, [text, delay, speed]);
    return { out, done: out.length >= text.length };
}

export default function Invitation() {
    const bride = useTypewriter(COUPLE.bride.name, 700, 60);
    const groom = useTypewriter(COUPLE.groom.name, 2400, 60);
    return (
        <section className="inv-page" data-testid="page-invitation">
            <div className="inv-bg" aria-hidden="true">
                <img src="/images/photo-1.jpg" alt="" className="inv-bg-img" />
            </div>
            <div className="inv-veil" aria-hidden="true" />
            <motion.div {...reveal} className="inv-content">
                <img src="/images/ganesh.png" alt="Ganesh Ji" className="inv-ganesh" data-testid="ganesh-symbol-invitation" />
                <p className="inv-eyebrow">Together with Their Families</p>
                <div className="inv-block">
                    <p className="inv-label">Daughter of</p>
                    <p className="inv-parents">
                        {COUPLE.bride.father} & {COUPLE.bride.mother}
                    </p>
                    <h1 className="inv-name" data-testid="bride-name">
                        {bride.out}
                        {!bride.done && <span className="type-caret" />}
                    </h1>
                </div>
                <div className="inv-amp" aria-hidden="true">&</div>
                <div className="inv-block">
                    <p className="inv-label">Son of</p>
                    <p className="inv-parents">
                        {COUPLE.groom.father} & {COUPLE.groom.mother}
                    </p>
                    <h1 className="inv-name" data-testid="groom-name">
                        {groom.out}
                        {!groom.done && <span className="type-caret" />}
                    </h1>
                </div>
                <p className="inv-msg">
                    request the honour of your presence
                    <br />
                    as two souls unite in holy matrimony
                </p>
                <p className="inv-date">{WEDDING.dateLabel}</p>
            </motion.div>
        </section>
    );
}

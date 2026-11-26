import { motion } from "framer-motion";
import { COUPLE, WEDDING, reveal } from "./data";

export default function Closing() {
    return (
        <section className="closing-section" data-testid="page-closing">
            <img src="/images/roses.png" alt="" className="scene-rose rose-tl dim" aria-hidden="true" />
            <img src="/images/roses.png" alt="" className="scene-rose rose-br dim" aria-hidden="true" />
            <motion.div {...reveal} className="closing-content">
                <img src="/images/ganesh.png" alt="Ganesh Ji" className="closing-ganesh" data-testid="ganesh-symbol-closing" />
                <h2 className="closing-title" data-testid="closing-message">
                    We can't wait to
                    <br />
                    <span className="script">celebrate with you!</span>
                </h2>
                <div className="gold-divider" aria-hidden="true" />
                <p className="closing-families" data-testid="closing-families">
                    With love,
                    <br />
                    The <strong>Telange</strong> & <strong>Khade</strong> Families
                </p>
                <p className="closing-footer">
                    {WEDDING.shortDate} · {COUPLE.groom.name.split(" ")[0]} & {COUPLE.bride.name.split(" ")[0]}
                </p>
            </motion.div>
        </section>
    );
}

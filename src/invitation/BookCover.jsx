import { useState } from "react";
import { motion } from "framer-motion";
import { Pointer } from "lucide-react";
import Petals from "./Petals";

export default function BookCover({ onOpen }) {
    const [opening, setOpening] = useState(false);
    const handle = () => {
        if (opening) return;
        setOpening(true);
        setTimeout(onOpen, 1500);
    };
    return (
        <motion.div
            className="book-scene"
            data-testid="book-cover"
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
        >
            <img src="/images/roses.png" alt="" className="scene-rose rose-tl" />
            <img src="/images/roses.png" alt="" className="scene-rose rose-br" />
            <div
                className="book-wrap"
                onClick={handle}
                role="button"
                aria-label="Tap to open the invitation book"
                data-testid="invitation-book"
            >
                <div className={`book ${opening ? "open" : ""}`}>
                    <div className="book-inner-page">
                        <p className="inner-script">Welcome</p>
                    </div>
                    <div className="book-cover">
                        <div className="book-cover-content">
                            <img src="/images/ganesh.png" alt="Ganesh Ji" className="book-ganesh" data-testid="ganesh-symbol" />
                            <p className="book-script">Wedding Invitation</p>
                            <p className="book-names">
                                Shrutika <span className="amp">&</span> Sagar
                            </p>
                            <p className="book-date">02 · 01 · 2027</p>
                        </div>
                    </div>
                    <div className="book-spine" />
                </div>
            </div>
            {!opening ? (
                <p className="tap-hint" data-testid="tap-to-open">
                    <motion.span
                        className="hint-pointer"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    >
                        <Pointer size={17} />
                    </motion.span>
                    Tap the Book to Open
                </p>
            ) : (
                <Petals count={16} />
            )}
        </motion.div>
    );
}

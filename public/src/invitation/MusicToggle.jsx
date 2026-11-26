import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicToggle({ audioRef }) {
    const [playing, setPlaying] = useState(true);
    const toggle = () => {
        const a = audioRef.current;
        if (!a) return;
        if (a.paused) {
            a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
            a.pause();
            setPlaying(false);
        }
    };
    return (
        <motion.button
            type="button"
            data-testid="music-toggle"
            aria-label={playing ? "Pause music" : "Play music"}
            onClick={toggle}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="music-toggle"
        >
            <span className={`vinyl ${playing ? "spinning" : ""}`}>
                {playing ? <Volume2 size={17} /> : <VolumeX size={17} />}
            </span>
        </motion.button>
    );
}

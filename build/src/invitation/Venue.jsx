import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation, Copy, MapPin } from "lucide-react";
import { toast } from "sonner";
import { WEDDING, MAPS_URL, reveal } from "./data";

const VenueMap = () => (
    <svg viewBox="0 0 400 260" className="venue-map-svg" aria-hidden="true">
        <rect width="400" height="260" rx="14" fill="#FBF3E8" />
        <path d="M-10 210 C 80 190, 120 240, 200 220 S 340 190, 420 215" stroke="#BFD8CF" strokeWidth="26" fill="none" strokeLinecap="round" />
        <path d="M-10 210 C 80 190, 120 240, 200 220 S 340 190, 420 215" stroke="#D8EAE3" strokeWidth="14" fill="none" strokeLinecap="round" />
        <path d="M30 -10 C 60 60, 150 80, 180 140 S 210 220, 205 260" stroke="#D4AF37" strokeWidth="3.5" fill="none" strokeDasharray="9 7" strokeLinecap="round" />
        <circle cx="70" cy="70" r="13" fill="#7FA98F" opacity="0.75" />
        <circle cx="95" cy="55" r="9" fill="#7FA98F" opacity="0.6" />
        <circle cx="330" cy="90" r="14" fill="#7FA98F" opacity="0.7" />
        <circle cx="305" cy="70" r="8" fill="#7FA98F" opacity="0.55" />
        <circle cx="55" cy="150" r="10" fill="#7FA98F" opacity="0.6" />
        <g transform="translate(205,128)">
            <path d="M0 -34 C -15 -34 -22 -22 -22 -12 C -22 2 0 22 0 22 C 0 22 22 2 22 -12 C 22 -22 15 -34 0 -34 Z" fill="#6E1F2F" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="0" cy="-13" r="7" fill="#E8CE9C" />
        </g>
        <g transform="translate(352,38)">
            <circle r="20" fill="none" stroke="#B98A2F" strokeWidth="1.4" opacity="0.8" />
            <path d="M0 -16 L4 0 L0 16 L-4 0 Z" fill="#B98A2F" opacity="0.85" />
            <text y="-24" textAnchor="middle" fontSize="8" fill="#6E1F2F" fontFamily="Montserrat">N</text>
        </g>
    </svg>
);

export default function Venue() {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(WEDDING.address);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = WEDDING.address;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
        setCopied(true);
        toast.success("Address copied!");
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <section className="venue-section" data-testid="page-location">
            <motion.div {...reveal}>
                <h2 className="section-title">
                    Wedding <span className="script">Location</span>
                </h2>
                <p className="section-sub">Come, celebrate with us by the river trail</p>
            </motion.div>
            <motion.div {...reveal} className="venue-card" data-testid="venue-card">
                <button type="button" className="venue-map" onClick={() => window.open(MAPS_URL, "_blank", "noopener")} aria-label="Open location in Google Maps" data-testid="venue-map">
                    <VenueMap />
                    <span className="venue-map-overlay">
                        <MapPin size={14} /> Tap to open in Google Maps
                    </span>
                </button>
                <div className="venue-body">
                    <h3 data-testid="venue-name">{WEDDING.venue}</h3>
                    <p className="venue-address" data-testid="venue-address">{WEDDING.address}</p>
                    <div className="venue-buttons">
                        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-gold" data-testid="get-directions">
                            <Navigation size={15} /> Get Directions
                        </a>
                        <button type="button" className="btn-ghost" onClick={copy} data-testid="copy-address">
                            <Copy size={15} /> {copied ? "Copied!" : "Copy Address"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

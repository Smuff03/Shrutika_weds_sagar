import { useEffect, useState } from "react";
import { WEDDING } from "./data";

const target = new Date(WEDDING.muhuratISO).getTime();

export default function Countdown() {
    const calc = () => {
        const d = Math.max(0, target - Date.now());
        return {
            d: Math.floor(d / 86400000),
            h: Math.floor(d / 3600000) % 24,
            m: Math.floor(d / 60000) % 60,
            s: Math.floor(d / 1000) % 60,
        };
    };
    const [t, setT] = useState(calc);
    useEffect(() => {
        const id = setInterval(() => setT(calc()), 1000);
        return () => clearInterval(id);
    }, []);
    const cells = [
        ["Days", t.d],
        ["Hours", t.h],
        ["Minutes", t.m],
        ["Seconds", t.s],
    ];
    return (
        <div className="countdown" data-testid="countdown">
            {cells.map(([label, val]) => (
                <div key={label} className="countdown-cell" data-testid={`countdown-${label.toLowerCase()}`}>
                    <span className="countdown-num">{String(val).padStart(2, "0")}</span>
                    <span className="countdown-label">{label}</span>
                </div>
            ))}
        </div>
    );
}

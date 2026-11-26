import { useMemo } from "react";

export default function Petals({ count = 10 }) {
    const petals = useMemo(
        () =>
            Array.from({ length: count }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 9,
                duration: 9 + Math.random() * 8,
                size: 13 + Math.random() * 15,
                drift: Math.random() * 70 - 35,
            })),
        [count]
    );
    return (
        <div className="petals-overlay" aria-hidden="true" data-testid="petals-overlay">
            {petals.map((p) => (
                <img
                    key={p.id}
                    src="/images/petal.png"
                    alt=""
                    className="petal"
                    style={{
                        left: `${p.left}%`,
                        width: p.size,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        "--drift": `${p.drift}px`,
                    }}
                />
            ))}
        </div>
    );
}

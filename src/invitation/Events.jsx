import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, MapPin, Shirt, Palette } from "lucide-react";
import { EVENTS, MAPS_URL, reveal } from "./data";

const wrap = (i, d) => (i + d + EVENTS.length) % EVENTS.length;

export default function Events() {
    const [[index, dir], setState] = useState([0, 0]);
    const paginate = (d) => setState(([i]) => [wrap(i, d), d]);
    const ev = EVENTS[index];
    return (
        <section className="events-section" data-testid="page-events">
            <motion.div {...reveal}>
                <h2 className="section-title">
                    Wedding <span className="script">Functions</span>
                </h2>
                <p className="section-sub">Swipe to explore each celebration</p>
            </motion.div>
            <div className="carousel" data-testid="events-carousel">
                <div className="carousel-stage">
                    <AnimatePresence custom={dir} initial={false} mode="popLayout">
                        <motion.article
                            key={ev.id}
                            custom={dir}
                            className="event-card"
                            initial={{ x: dir >= 0 ? 340 : -340, rotateY: dir >= 0 ? -40 : 40, opacity: 0, scale: 0.86 }}
                            animate={{ x: 0, rotateY: 0, opacity: 1, scale: 1 }}
                            exit={{ x: dir >= 0 ? -340 : 340, rotateY: dir >= 0 ? 40 : -40, opacity: 0, scale: 0.86 }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.55}
                            onDragEnd={(e, info) => {
                                if (info.offset.x < -60) paginate(1);
                                else if (info.offset.x > 60) paginate(-1);
                            }}
                            data-testid={`event-card-${ev.id}`}
                        >
                            <div className="event-card-img">
                                <img src={ev.img} alt={`${ev.name} illustration`} draggable={false} />
                                <span className="event-theme-dot" style={{ background: ev.colour }} title={ev.theme} />
                            </div>
                            <div className="event-card-body">
                                <h3>{ev.name}</h3>
                                <p className="event-date">{ev.date}</p>
                                <ul className="event-meta">
                                    <li>
                                        <Clock size={14} /> {ev.time}
                                    </li>
                                    <li>
                                        <MapPin size={14} /> {ev.venue}
                                    </li>
                                    <li>
                                        <Shirt size={14} /> {ev.dressCode}
                                    </li>

                                </ul>
                                <p className="event-note">{ev.note}</p>
                                <a
                                    href={MAPS_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="event-map-link"
                                    data-testid={`event-map-${ev.id}`}
                                >
                                    <MapPin size={13} /> View on Map
                                </a>
                            </div>
                        </motion.article>
                    </AnimatePresence>
                </div>
                <div className="carousel-controls">
                    <button type="button" aria-label="Previous function" data-testid="event-prev" onClick={() => paginate(-1)} className="carousel-arrow">
                        <ChevronLeft size={20} />
                    </button>
                    <div className="carousel-dots" data-testid="event-dots">
                        {EVENTS.map((e, i) => (
                            <button
                                key={e.id}
                                type="button"
                                aria-label={`Go to ${e.name}`}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setState([i, i > index ? 1 : -1])}
                            />
                        ))}
                    </div>
                    <button type="button" aria-label="Next function" data-testid="event-next" onClick={() => paginate(1)} className="carousel-arrow">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}

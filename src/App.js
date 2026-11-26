import { useEffect, useRef, useState, Component } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import "./App.css";
import { Toaster } from "sonner";
import BookCover from "@/invitation/BookCover";
import Invitation from "@/invitation/Invitation";
import SaveTheDate from "@/invitation/SaveTheDate";
import Events from "@/invitation/Events";
import OurStory from "@/invitation/OurStory";
import Reception from "@/invitation/Reception";
import Venue from "@/invitation/Venue";
import Closing from "@/invitation/Closing";
import Petals from "@/invitation/Petals";
import MusicToggle from "@/invitation/MusicToggle";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { err: false };
    }
    static getDerivedStateFromError() {
        return { err: true };
    }
    render() {
        return this.state.err ? (
            <div className="err-fallback" data-testid="error-boundary">
                Something went wrong. Please refresh the page.
            </div>
        ) : (
            this.props.children
        );
    }
}

export default function App() {
    const [opened, setOpened] = useState(false);
    const audioRef = useRef(null);

    const handleOpen = () => {
        setOpened(true);
        const a = audioRef.current;
        if (a) a.play().catch(() => { });
    };

    useEffect(() => {
        document.body.style.overflow = opened ? "" : "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [opened]);

    useEffect(() => {
        if (!opened) return undefined;
        const lenis = new Lenis({ lerp: 0.09 });
        let raf;
        const loop = (time) => {
            lenis.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, [opened]);

    return (
        <ErrorBoundary>
            <audio ref={audioRef} src="/audio/romantic-piano.mp3" loop preload="auto" />
            <AnimatePresence>{!opened && <BookCover key="cover" onOpen={handleOpen} />}</AnimatePresence>
            {opened && (
                <main className="app-main" data-testid="app-main">
                    <Invitation />
                    <SaveTheDate />
                    <Events />
                    <OurStory />
                    <Reception />
                    <Venue />
                    <Closing />
                    <Petals count={9} />
                    <MusicToggle audioRef={audioRef} />
                </main>
            )}
            <Toaster position="top-center" richColors />
        </ErrorBoundary>
    );
}

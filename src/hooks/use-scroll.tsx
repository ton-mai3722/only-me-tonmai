import { s } from "framer-motion/client";
import { useCallback ,useEffect, useState } from "react";

export default function useScroll(threshold: number) {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    } , [handleScroll]);

    useEffect(() => {
        handleScroll();
    }, [handleScroll]);

    return scrolled;
}



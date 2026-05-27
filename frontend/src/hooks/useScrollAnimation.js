/**
 * Reusable scroll-triggered animation variants for framer-motion.
 * Usage: wrap elements with <motion.div {...fadeUp} /> or use variants directly.
 */

// ── Viewport config ──────────────────────────────────────────────────────────
export const viewport = { once: true, margin: "-60px" };

// ── Variants ─────────────────────────────────────────────────────────────────

/** Fade up — default card entrance */
export const fadeUp = {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/** Fade up with stagger delay (pass index) */
export const fadeUpStagger = (i = 0, base = 0.1) => ({
    initial: { opacity: 0, y: 52 },
    whileInView: { opacity: 1, y: 0 },
    viewport,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * base },
});

/** Slide in from left */
export const slideLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

/** Slide in from right */
export const slideRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

/** Scale + fade — for hero badges, icons, feature cards */
export const scaleFade = (i = 0) => ({
    initial: { opacity: 0, scale: 0.78 },
    whileInView: { opacity: 1, scale: 1 },
    viewport,
    transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.08 },
});

/** Flip card — rotateX entrance */
export const flipUp = (i = 0) => ({
    initial: { opacity: 0, rotateX: 30, y: 30 },
    whileInView: { opacity: 1, rotateX: 0, y: 0 },
    viewport,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
});

/** Blur fade — heading reveal */
export const blurFade = {
    initial: { opacity: 0, filter: "blur(12px)", y: 20 },
    whileInView: { opacity: 1, filter: "blur(0px)", y: 0 },
    viewport,
    transition: { duration: 0.75, ease: "easeOut" },
};

/** Slide up with clip-path reveal */
export const clipReveal = (i = 0) => ({
    initial: { opacity: 0, clipPath: "inset(100% 0 0 0)", y: 20 },
    whileInView: { opacity: 1, clipPath: "inset(0% 0 0 0)", y: 0 },
    viewport,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
});

/** Zoom out — image/banner reveal */
export const zoomOut = {
    initial: { opacity: 0, scale: 1.12 },
    whileInView: { opacity: 1, scale: 1 },
    viewport,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

/** Stagger container — parent wrapper */
export const staggerContainer = {
    initial: {},
    whileInView: {},
    viewport,
    transition: { staggerChildren: 0.1 },
};

/** Child item for stagger container */
export const staggerChild = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

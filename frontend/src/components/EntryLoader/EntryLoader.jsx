import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';
import './EntryLoader.css';

// Particle config
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 4,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${Math.random() * 3 + 3}s`,
}));

export default function EntryLoader({ onComplete }) {
    const timerRef = useRef(null);

    useEffect(() => {
        // Total animation time: 2.8s visible + 0.6s exit transition
        timerRef.current = setTimeout(() => {
            onComplete?.();
        }, 3000);

        return () => clearTimeout(timerRef.current);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="entry-loader-overlay"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                {/* Background */}
                <div className="entry-loader-bg" />

                {/* Floating particles */}
                <div className="entry-loader-particles" aria-hidden="true">
                    {PARTICLES.map((p) => (
                        <span
                            key={p.id}
                            className="particle"
                            style={{
                                width: p.size,
                                height: p.size,
                                left: p.left,
                                animationDelay: p.delay,
                                animationDuration: p.duration,
                            }}
                        />
                    ))}
                </div>

                {/* Main card */}
                <motion.div
                    className="entry-loader-card"
                    initial={{ opacity: 0, scale: 0.75, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -20 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Spinning glow border */}
                    <div className="entry-loader-glow-ring" aria-hidden="true" />

                    {/* Logo with liquid fill */}
                    <motion.div
                        className="entry-loader-fill-wrap"
                        initial={{ filter: 'brightness(0.4)' }}
                        animate={{ filter: 'brightness(1)' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <img
                            src={logo}
                            alt="Brand logo"
                            className="entry-loader-logo"
                            draggable={false}
                        />
                        {/* Liquid fill overlay */}
                        <div className="entry-loader-liquid" aria-hidden="true" />
                    </motion.div>

                    {/* Brand name */}
                    <motion.span
                        className="entry-loader-brand"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                    >
                        AI Cooking
                    </motion.span>

                    {/* Progress bar */}
                    <motion.div
                        className="entry-loader-progress-track"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <div className="entry-loader-progress-bar" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

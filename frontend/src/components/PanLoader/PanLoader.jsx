import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PanLoader.css";


/* ─── Canvas Smoke + Particles ─────────────────────────────────────── */
function SmokeCanvas({ progress, burst }) {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const rafRef = useRef(null);

    const spawnParticle = useCallback((canvas) => {
        const cx = canvas.width / 2;
        const panTop = canvas.height * 0.5 - 60; // pan top relative to viewport center
        const spread = 90 * (progress / 100);
        particles.current.push({
            x: cx + (Math.random() - 0.5) * spread,
            y: panTop,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -(1.2 + Math.random() * 1.4),
            size: 18 + Math.random() * 28,
            alpha: 0.0,
            alphaTarget: 0.38 + Math.random() * 0.22,
            life: 0,
            maxLife: 120 + Math.random() * 80,
            hue: 28 + Math.random() * 18,
        });
    }, [progress]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let frame = 0;

        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // spawn smoke
            if (frame % 4 === 0 && progress > 5) spawnParticle(canvas);
            // extra sparks on burst
            if (burst && frame % 2 === 0) {
                for (let i = 0; i < 3; i++) spawnParticle(canvas);
            }

            particles.current = particles.current.filter(p => p.life < p.maxLife);

            particles.current.forEach(p => {
                p.life++;
                p.x += p.vx + Math.sin(p.life * 0.04) * 0.4;
                p.y += p.vy;
                p.vy *= 0.995;
                p.size += 0.35;
                p.vx *= 0.99;

                const lifeRatio = p.life / p.maxLife;
                if (lifeRatio < 0.15) p.alpha = (lifeRatio / 0.15) * p.alphaTarget;
                else if (lifeRatio > 0.55) p.alpha = p.alphaTarget * (1 - (lifeRatio - 0.55) / 0.45);
                else p.alpha = p.alphaTarget;

                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                if (burst) {
                    grad.addColorStop(0, `hsla(${p.hue}, 100%, 75%, ${p.alpha * 1.4})`);
                    grad.addColorStop(0.4, `hsla(${p.hue}, 90%, 55%, ${p.alpha * 0.7})`);
                    grad.addColorStop(1, `hsla(${p.hue}, 80%, 40%, 0)`);
                } else {
                    grad.addColorStop(0, `hsla(${p.hue}, 30%, 72%, ${p.alpha})`);
                    grad.addColorStop(0.5, `hsla(${p.hue}, 20%, 55%, ${p.alpha * 0.5})`);
                    grad.addColorStop(1, `hsla(${p.hue}, 10%, 40%, 0)`);
                }
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            });

            frame++;
            rafRef.current = requestAnimationFrame(loop);
        };

        loop();
        return () => cancelAnimationFrame(rafRef.current);
    }, [progress, burst, spawnParticle]);

    return <canvas ref={canvasRef} className="smoke-canvas" width={window.innerWidth || 1440} height={window.innerHeight || 900} />;
}

/* ─── Liquid Wave SVG path ──────────────────────────────────────────── */
function useLiquidWave(progress) {
    const [phase, setPhase] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        const tick = () => {
            setPhase(p => p + 0.06);
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    // Pan interior: ellipse cx=180 cy=148 rx=118 ry=38
    // fill level: map progress 0→100 to y from bottom to top of ellipse
    const ellipseTop = 110, ellipseBot = 186;
    const fillY = ellipseBot - ((progress / 100) * (ellipseBot - ellipseTop));
    const amp = progress > 2 ? 4 + (progress / 100) * 5 : 0;
    const waveCount = 3;
    const step = 8;
    const left = 62, right = 298;

    let wavePath = `M ${left} ${fillY}`;
    for (let x = left; x <= right; x += step) {
        const y = fillY + Math.sin((x * 0.045) + phase) * amp
            + Math.sin((x * 0.028) + phase * 0.7) * (amp * 0.5);
        wavePath += ` L ${x} ${y}`;
    }
    wavePath += ` L ${right} ${ellipseBot} L ${left} ${ellipseBot} Z`;

    return { wavePath, fillY };
}

/* ─── Spark dots ────────────────────────────────────────────────────── */
function Sparks({ progress }) {
    if (progress < 20) return null;
    return (
        <g>
            {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                const r = 125 + Math.sin(Date.now() * 0.001 + i) * 8;
                const cx = 180 + Math.cos(angle) * r * 0.85;
                const cy = 148 + Math.sin(angle) * r * 0.28;
                return (
                    <motion.circle
                        key={i}
                        cx={cx} cy={cy} r={2.5}
                        fill="#ffcc44"
                        filter="url(#sparkGlow)"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
                        transition={{ duration: 0.9, delay: i * 0.15, repeat: Infinity, repeatDelay: 0.8 }}
                    />
                );
            })}
        </g>
    );
}

/* ─── Main Loader ───────────────────────────────────────────────────── */
export default function PanLoader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [burst, setBurst] = useState(false);
    const [done, setDone] = useState(false);
    const intervalRef = useRef(null);
    const { wavePath, fillY } = useLiquidWave(progress);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) { clearInterval(intervalRef.current); return 100; }
                const inc = prev < 20 ? 0.45 : prev < 70 ? 1.0 : 0.3;
                return Math.min(prev + inc, 100);
            });
        }, 30);
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => setBurst(true), 150);
            setTimeout(() => setDone(true), 1600);
            setTimeout(() => onComplete(), 2400);
        }
    }, [progress, onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    className="loader-root"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
                >
                    {/* Grid lines bg */}
                    <div className="grid-bg" />
                    <div className="ambient-glow" />

                    {/* Burst radial flash */}
                    <AnimatePresence>
                        {burst && (
                            <motion.div
                                className="burst-flash"
                                initial={{ opacity: 0, scale: 0.4 }}
                                animate={{ opacity: [0, 1, 0], scale: [0.4, 3, 4] }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Canvas smoke */}
                    <SmokeCanvas progress={progress} burst={burst} />

                    {/* Pan scene */}
                    <motion.div
                        className="pan-scene"
                        initial={{ opacity: 0, y: 40, scale: 0.88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <svg
                            className="pan-svg"
                            viewBox="0 0 360 260"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                {/* Liquid fill */}
                                <linearGradient id="liqGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#c73000" />
                                    <stop offset="35%" stopColor="#ff5500" />
                                    <stop offset="70%" stopColor="#ff8800" />
                                    <stop offset="100%" stopColor="#ffcc44" />
                                </linearGradient>

                                {/* Liquid vertical depth */}
                                <linearGradient id="liqDepth" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(255,200,80,0.5)" />
                                    <stop offset="100%" stopColor="rgba(180,50,0,0.0)" />
                                </linearGradient>

                                {/* Pan outer body */}
                                <linearGradient id="panOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#2e2e2e" />
                                    <stop offset="40%" stopColor="#1a1a1a" />
                                    <stop offset="100%" stopColor="#0a0a0a" />
                                </linearGradient>

                                {/* Pan inner surface */}
                                <linearGradient id="panInner" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#1c1c1c" />
                                    <stop offset="100%" stopColor="#0d0d0d" />
                                </linearGradient>

                                {/* Rim chrome */}
                                <linearGradient id="rimChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#888" />
                                    <stop offset="30%" stopColor="#444" />
                                    <stop offset="70%" stopColor="#222" />
                                    <stop offset="100%" stopColor="#111" />
                                </linearGradient>

                                {/* Handle */}
                                <linearGradient id="handleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3c3c3c" />
                                    <stop offset="50%" stopColor="#1e1e1e" />
                                    <stop offset="100%" stopColor="#0e0e0e" />
                                </linearGradient>

                                {/* Handle grip texture */}
                                <linearGradient id="gripGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                                    <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                </linearGradient>

                                {/* Glow filter */}
                                <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                                    <feGaussianBlur stdDeviation="6" result="b" />
                                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>

                                {/* Soft glow */}
                                <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                                    <feGaussianBlur stdDeviation="3" result="b" />
                                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>

                                {/* Spark glow */}
                                <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
                                    <feGaussianBlur stdDeviation="3" result="b" />
                                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>

                                {/* Burst glow */}
                                <filter id="burstGlow" x="-60%" y="-60%" width="220%" height="220%">
                                    <feGaussianBlur stdDeviation="14" result="b" />
                                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                                </filter>

                                {/* Clip: pan interior ellipse */}
                                <clipPath id="interiorClip">
                                    <ellipse cx="180" cy="148" rx="118" ry="38" />
                                </clipPath>

                                {/* Clip: liquid wave stays inside pan */}
                                <clipPath id="waveClip">
                                    <ellipse cx="180" cy="148" rx="116" ry="36" />
                                </clipPath>
                            </defs>

                            {/* ── SHADOW UNDER PAN ── */}
                            <ellipse cx="180" cy="215" rx="130" ry="18"
                                fill="rgba(0,0,0,0.55)" filter="url(#softGlow)" />

                            {/* ── HANDLE SHADOW ── */}
                            <ellipse cx="310" cy="215" rx="40" ry="8"
                                fill="rgba(0,0,0,0.3)" filter="url(#softGlow)" />

                            {/* ── HANDLE ── */}
                            {/* Handle base taper */}
                            <path
                                d="M 295,136 Q 318,128 348,131 Q 356,133 356,141 Q 356,149 348,151 Q 318,154 295,146 Z"
                                fill="url(#handleGrad)"
                                stroke="#3a3a3a"
                                strokeWidth="1"
                            />
                            {/* Handle grip lines */}
                            {[0, 1, 2, 3, 4].map(i => (
                                <line key={i}
                                    x1={308 + i * 8} y1="131" x2={308 + i * 8} y2="151"
                                    stroke="rgba(255,255,255,0.04)" strokeWidth="2"
                                />
                            ))}
                            {/* Handle top sheen */}
                            <path d="M 298,137 Q 322,130 346,133"
                                fill="none" stroke="rgba(255,255,255,0.1)"
                                strokeWidth="1.5" strokeLinecap="round" />
                            {/* Handle rivets */}
                            {[300, 314].map((rx, i) => (
                                <g key={i}>
                                    <circle cx={rx} cy="141" r="5" fill="#111" stroke="#555" strokeWidth="1.2" />
                                    <circle cx={rx} cy="141" r="2" fill="#444" />
                                    <circle cx={rx - 1} cy="140" r="0.8" fill="rgba(255,255,255,0.3)" />
                                </g>
                            ))}

                            {/* ── PAN OUTER BODY (3D depth wall) ── */}
                            {/* Bottom depth shadow */}
                            <ellipse cx="180" cy="196" rx="122" ry="42"
                                fill="#080808" />
                            {/* Side wall */}
                            <path
                                d="M 58,148 Q 58,196 180,196 Q 302,196 302,148"
                                fill="url(#panOuter)"
                                stroke="none"
                            />
                            {/* Side wall highlight */}
                            <path
                                d="M 62,148 Q 62,190 180,190 Q 298,190 298,148"
                                fill="none"
                                stroke="rgba(255,255,255,0.04)"
                                strokeWidth="1"
                            />

                            {/* ── PAN INTERIOR BASE ── */}
                            <ellipse cx="180" cy="148" rx="120" ry="40"
                                fill="url(#panInner)" />

                            {/* ── LIQUID WAVE FILL ── */}
                            <g clipPath="url(#waveClip)">
                                {/* Base fill color */}
                                <ellipse cx="180" cy="148" rx="116" ry="36"
                                    fill="url(#liqGrad)" opacity="0.15" />
                                {/* Wave path */}
                                <path
                                    d={wavePath}
                                    fill="url(#liqGrad)"
                                    filter="url(#glow)"
                                    opacity="0.92"
                                />
                                {/* Shimmer on liquid surface */}
                                <path
                                    d={wavePath}
                                    fill="url(#liqDepth)"
                                    opacity="0.6"
                                />
                                {/* Boiling bubbles */}
                                {progress > 35 && [
                                    [148, 152, 4.5], [168, 145, 3], [190, 155, 5],
                                    [210, 148, 3.5], [228, 153, 4], [158, 158, 3],
                                ].map(([bx, by, br], i) => (
                                    <motion.circle key={i} cx={bx} cy={by} r={br}
                                        fill="rgba(255,200,80,0.22)"
                                        animate={{ r: [br, br * 1.6, br], opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 0.8 + i * 0.15, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                ))}
                            </g>

                            {/* ── RIM (top chrome ring) ── */}
                            {/* Outer rim */}
                            <ellipse cx="180" cy="148" rx="120" ry="40"
                                fill="none" stroke="url(#rimChrome)" strokeWidth="4" />
                            {/* Inner rim line */}
                            <ellipse cx="180" cy="148" rx="116" ry="36"
                                fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                            {/* Rim top highlight */}
                            <path d="M 75,136 A 120,40 0 0 1 285,136"
                                fill="none" stroke="rgba(255,255,255,0.18)"
                                strokeWidth="2.5" strokeLinecap="round" />
                            {/* Rim bottom shadow */}
                            <path d="M 75,160 A 120,40 0 0 0 285,160"
                                fill="none" stroke="rgba(0,0,0,0.5)"
                                strokeWidth="2" strokeLinecap="round" />

                            {/* ── HANDLE-BODY JOIN ── */}
                            <ellipse cx="295" cy="141" rx="12" ry="18"
                                fill="url(#panOuter)" stroke="#3a3a3a" strokeWidth="1.2" />
                            <ellipse cx="295" cy="141" rx="9" ry="14"
                                fill="#111" stroke="#444" strokeWidth="0.8" />

                            {/* ── BURST GLOW RING ── */}
                            {burst && (
                                <ellipse cx="180" cy="148" rx="120" ry="40"
                                    fill="none" stroke="#ff8800" strokeWidth="6"
                                    filter="url(#burstGlow)" opacity="0.95" />
                            )}

                            {/* ── SPARKS ── */}
                            <Sparks progress={progress} />

                            {/* ── ENERGY RING (progress indicator on rim) ── */}
                            <motion.ellipse
                                cx="180" cy="148" rx="120" ry="40"
                                fill="none"
                                stroke="url(#liqGrad)"
                                strokeWidth="2"
                                strokeDasharray={`${(progress / 100) * 502} 502`}
                                strokeLinecap="round"
                                filter="url(#softGlow)"
                                opacity="0.7"
                                style={{ transformOrigin: "180px 148px" }}
                            />
                        </svg>

                        {/* Fire glow */}
                        <div className="fire-glow"
                            style={{ opacity: Math.min(0.25 + progress / 140, 1) }} />

                        {/* Progress bar */}
                        <div className="progress-track">
                            <motion.div className="progress-fill"
                                style={{ width: `${progress}%` }} />
                            <motion.div className="progress-dot"
                                style={{ left: `${progress}%` }}
                                animate={{
                                    boxShadow: burst
                                        ? "0 0 20px 8px rgba(255,180,0,1)"
                                        : "0 0 12px 4px rgba(255,130,0,0.9)"
                                }}
                            />
                        </div>

                        <motion.p className="progress-label"
                            animate={{ opacity: burst ? 0 : 1 }}>
                            {Math.round(progress)}%
                        </motion.p>

                        <h2 className="brand-text">
                            {"AI Cooking".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                                    style={{ display: "inline-block", whiteSpace: "pre" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h2>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

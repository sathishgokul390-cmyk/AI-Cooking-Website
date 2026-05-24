import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PanLoader.css';

/* ─────────────────────────────────────────────
   Part 1 — SmokeCanvas
───────────────────────────────────────────── */
function SmokeCanvas({ progress }) {
    const canvasRef = useRef(null);
    const stateRef = useRef({ particles: [], frame: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let raf;

        function spawnParticle() {
            const spread = 10 + (progress / 100) * 38;
            stateRef.current.particles.push({
                x: canvas.width / 2 + (Math.random() - 0.5) * spread,
                y: canvas.height * 0.52,
                vx: (Math.random() - 0.5) * 0.5,
                vy: -(1.2 + Math.random() * 1.4),
                size: 18 + Math.random() * 28,
                alpha: 0,
                life: 0,
                maxLife: 120 + Math.random() * 80,
                hue: 28 + Math.random() * 18,
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const s = stateRef.current;
            s.frame++;

            if (progress > 5 && s.frame % 4 === 0) spawnParticle();

            s.particles = s.particles.filter(p => p.life < p.maxLife);

            for (const p of s.particles) {
                p.life++;
                p.vy *= 0.995;
                p.x += p.vx + Math.sin(p.life * 0.04) * 0.4;
                p.y += p.vy;
                p.size += 0.35;

                const t = p.life / p.maxLife;
                if (t < 0.15) p.alpha = t / 0.15 * 0.55;
                else if (t < 0.55) p.alpha = 0.55;
                else p.alpha = 0.55 * (1 - (t - 0.55) / 0.45);

                const isBurst = progress >= 98;
                const cA = isBurst ? p.alpha * 1.4 : p.alpha;
                const sat = isBurst ? '100%' : '30%';
                const lit = isBurst ? '75%' : '72%';

                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                grad.addColorStop(0, `hsla(${p.hue}, ${sat}, ${lit}, ${cA})`);
                grad.addColorStop(0.5, `hsla(${p.hue}, 20%, 55%, ${cA * 0.5})`);
                grad.addColorStop(1, `hsla(${p.hue}, 10%, 40%, 0)`);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }

            raf = requestAnimationFrame(draw);
        }

        draw();
        return () => cancelAnimationFrame(raf);
    }, [progress]);

    return (
        <canvas
            ref={canvasRef}
            className="smoke-canvas"
            width={500}
            height={420}
        />
    );
}

/* ─────────────────────────────────────────────
   Part 2 — useLiquidWave hook
───────────────────────────────────────────── */
function useLiquidWave(progress) {
    const [phase, setPhase] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        function tick() {
            setPhase(p => p + 0.06);
            rafRef.current = requestAnimationFrame(tick);
        }
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const fillY = 186 - (progress / 100) * 76; // 186 → 110
    const amp = progress > 2 ? 4 + (progress / 100) * 5 : 0;

    let d = `M 62,${fillY}`;
    for (let x = 62; x <= 298; x += 8) {
        const y =
            fillY +
            Math.sin(x * 0.045 + phase) * amp +
            Math.sin(x * 0.028 + phase * 0.7) * (amp * 0.5);
        d += ` L ${x},${y}`;
    }
    d += ` L 298,186 L 62,186 Z`;

    return d;
}

/* ─────────────────────────────────────────────
   Sparks sub-component
───────────────────────────────────────────── */
function Sparks() {
    return (
        <>
            {[0, 1, 2, 3, 4, 5].map(i => {
                const angle = (i / 6) * Math.PI * 2;
                const cx = 180 + Math.cos(angle) * 125;
                const cy = 148 + Math.sin(angle) * 42;
                return (
                    <motion.circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={3}
                        fill="#ffcc44"
                        filter="url(#sparkGlow)"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
                        transition={{
                            duration: 0.9,
                            delay: i * 0.15,
                            repeat: Infinity,
                            repeatDelay: 0.8,
                        }}
                    />
                );
            })}
        </>
    );
}

/* ─────────────────────────────────────────────
   Part 3 — PanLoader component
───────────────────────────────────────────── */
export default function PanLoader({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [burst, setBurst] = useState(false);
    const [done, setDone] = useState(false);

    const wavePath = useLiquidWave(progress);

    /* progress ticker */
    useEffect(() => {
        const id = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) { clearInterval(id); return 100; }
                if (prev < 20) return prev + 0.45;
                if (prev < 70) return prev + 1.0;
                return prev + 0.3;
            });
        }, 30);
        return () => clearInterval(id);
    }, []);

    /* burst / done sequence */
    useEffect(() => {
        if (progress < 100) return;
        const t1 = setTimeout(() => setBurst(true), 150);
        const t2 = setTimeout(() => setDone(true), 1600);
        const t3 = setTimeout(() => onComplete?.(), 2400);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [progress, onComplete]);

    const dashLen = (progress / 100) * 502;

    /* bubble positions */
    const bubbles = [
        [148, 152, 4.5],
        [168, 145, 3],
        [190, 155, 5],
        [210, 148, 3.5],
        [228, 153, 4],
        [158, 158, 3],
    ];

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    className="loader-root"
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.0, ease: 'easeInOut' }}
                >
                    {/* burst flash */}
                    {burst && (
                        <motion.div
                            className="burst-flash"
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: [0, 0.9, 0], scale: [0.4, 2.8, 3.5] }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                        />
                    )}

                    {/* pan scene */}
                    <motion.div
                        className="pan-scene"
                        initial={{ opacity: 0, y: 40, scale: 0.88 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* smoke canvas sits behind SVG */}
                        <SmokeCanvas progress={progress} />

                        {/* ── SVG Pan ── */}
                        <svg
                            viewBox="0 0 360 260"
                            width="400"
                            height="260"
                            style={{ position: 'relative', zIndex: 2, overflow: 'visible' }}
                        >
                            <defs>
                                {/* liquid gradient */}
                                <linearGradient id="liqGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#c73000" />
                                    <stop offset="35%" stopColor="#ff5500" />
                                    <stop offset="70%" stopColor="#ff8800" />
                                    <stop offset="100%" stopColor="#ffcc44" />
                                </linearGradient>

                                {/* liquid depth shimmer */}
                                <linearGradient id="liqDepth" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(255,200,80,0.5)" />
                                    <stop offset="100%" stopColor="rgba(180,50,0,0)" />
                                </linearGradient>

                                {/* pan outer wall */}
                                <linearGradient id="panOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#2e2e2e" />
                                    <stop offset="55%" stopColor="#1a1a1a" />
                                    <stop offset="100%" stopColor="#0a0a0a" />
                                </linearGradient>

                                {/* pan inner base */}
                                <linearGradient id="panInner" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#1c1c1c" />
                                    <stop offset="100%" stopColor="#0d0d0d" />
                                </linearGradient>

                                {/* rim chrome */}
                                <linearGradient id="rimChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#888" />
                                    <stop offset="35%" stopColor="#444" />
                                    <stop offset="70%" stopColor="#222" />
                                    <stop offset="100%" stopColor="#111" />
                                </linearGradient>

                                {/* handle */}
                                <linearGradient id="handleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3c3c3c" />
                                    <stop offset="55%" stopColor="#1e1e1e" />
                                    <stop offset="100%" stopColor="#0e0e0e" />
                                </linearGradient>

                                {/* glow filter */}
                                <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                                    <feGaussianBlur stdDeviation="6" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                {/* soft glow */}
                                <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                {/* spark glow */}
                                <filter id="sparkGlow" x="-60%" y="-60%" width="220%" height="220%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                {/* burst glow */}
                                <filter id="burstGlow" x="-60%" y="-60%" width="220%" height="220%">
                                    <feGaussianBlur stdDeviation="14" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                                {/* wave clip */}
                                <clipPath id="waveClip">
                                    <ellipse cx="180" cy="148" rx="116" ry="36" />
                                </clipPath>
                            </defs>

                            {/* ── shadow ── */}
                            <ellipse cx="180" cy="215" rx="130" ry="18"
                                fill="rgba(0,0,0,0.55)" filter="url(#softGlow)" />

                            {/* ── handle shadow ── */}
                            <ellipse cx="310" cy="215" rx="40" ry="8"
                                fill="rgba(0,0,0,0.4)" />

                            {/* ── handle body ── */}
                            <path
                                d="M 295,136 Q 318,128 348,131 Q 356,133 356,141 Q 356,149 348,151 Q 318,154 295,146 Z"
                                fill="url(#handleGrad)"
                                stroke="#3a3a3a"
                                strokeWidth="1"
                            />

                            {/* handle grip lines */}
                            {[308, 316, 324, 332, 340].map(x => (
                                <line key={x} x1={x} y1="131" x2={x} y2="151"
                                    stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                            ))}

                            {/* handle top sheen */}
                            <path d="M 298,137 Q 322,130 346,133"
                                fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

                            {/* handle rivets */}
                            {[300, 314].map(cx => (
                                <g key={cx}>
                                    <circle cx={cx} cy="141" r="5" fill="#111" stroke="#555" strokeWidth="0.8" />
                                    <circle cx={cx} cy="141" r="2" fill="#444" />
                                    <circle cx={cx - 1} cy="139.5" r="0.8" fill="rgba(255,255,255,0.3)" />
                                </g>
                            ))}

                            {/* ── pan depth bottom ── */}
                            <ellipse cx="180" cy="196" rx="122" ry="42" fill="#080808" />

                            {/* ── pan side wall ── */}
                            <path d="M 58,148 Q 58,196 180,196 Q 302,196 302,148"
                                fill="url(#panOuter)" />

                            {/* ── pan interior base ── */}
                            <ellipse cx="180" cy="148" rx="120" ry="40" fill="url(#panInner)" />

                            {/* ── liquid wave group ── */}
                            <g clipPath="url(#waveClip)">
                                {/* base fill */}
                                <ellipse cx="180" cy="148" rx="116" ry="36"
                                    fill="url(#liqGrad)" opacity="0.15" />

                                {/* wave path */}
                                <path d={wavePath}
                                    fill="url(#liqGrad)"
                                    filter="url(#glow)"
                                    opacity="0.92"
                                />

                                {/* shimmer */}
                                <path d={wavePath}
                                    fill="url(#liqDepth)"
                                    opacity="0.6"
                                />

                                {/* bubbles */}
                                {progress > 35 && bubbles.map(([bx, by, br], i) => (
                                    <motion.circle
                                        key={i}
                                        cx={bx} cy={by} r={br}
                                        fill="rgba(255,200,100,0.35)"
                                        stroke="rgba(255,220,120,0.5)"
                                        strokeWidth="0.5"
                                        animate={{ r: [br, br * 1.25, br], opacity: [0.3, 0.6, 0.3] }}
                                        transition={{
                                            duration: 1.2 + i * 0.2,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                        }}
                                    />
                                ))}
                            </g>

                            {/* ── rim outer ── */}
                            <ellipse cx="180" cy="148" rx="120" ry="40"
                                fill="none" stroke="url(#rimChrome)" strokeWidth="4" />

                            {/* rim inner line */}
                            <ellipse cx="180" cy="148" rx="116" ry="36"
                                fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

                            {/* rim top highlight */}
                            <path d="M 75,136 A 120,40 0 0 1 285,136"
                                fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />

                            {/* rim bottom shadow */}
                            <path d="M 75,160 A 120,40 0 0 0 285,160"
                                fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />

                            {/* ── handle-body join ── */}
                            <ellipse cx="295" cy="141" rx="12" ry="18"
                                fill="url(#panOuter)" stroke="#3a3a3a" strokeWidth="1" />
                            <ellipse cx="295" cy="141" rx="9" ry="14"
                                fill="#111" stroke="#444" strokeWidth="0.8" />

                            {/* ── burst ring ── */}
                            {burst && (
                                <motion.ellipse
                                    cx="180" cy="148" rx="120" ry="40"
                                    fill="none"
                                    stroke="#ff8800"
                                    strokeWidth="6"
                                    filter="url(#burstGlow)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.95, 0] }}
                                    transition={{ duration: 1.0, ease: 'easeOut' }}
                                />
                            )}

                            {/* ── sparks ── */}
                            {progress > 20 && <Sparks />}

                            {/* ── energy ring (progress arc) ── */}
                            <motion.ellipse
                                cx="180" cy="148" rx="120" ry="40"
                                fill="none"
                                stroke="url(#liqGrad)"
                                strokeWidth="2"
                                strokeDasharray={`${dashLen} 502`}
                                strokeLinecap="round"
                                filter="url(#softGlow)"
                                opacity="0.7"
                            />
                        </svg>

                        {/* ── fire glow ── */}
                        <div className="fire-glow" />

                        {/* ── progress track ── */}
                        <div className="progress-track">
                            <div
                                className="progress-fill"
                                style={{ width: `${progress}%` }}
                            />
                            <div
                                className="progress-dot"
                                style={{ left: `${progress}%` }}
                            />
                        </div>

                        {/* ── progress label ── */}
                        <p
                            className="progress-label"
                            style={{ opacity: burst ? 0 : 1 }}
                        >
                            {Math.round(progress)}%
                        </p>

                        {/* ── brand text ── */}
                        <h2 className="brand-text">
                            {"AI Cooking".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1, duration: 0.35, ease: "easeOut" }}
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

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
    ArrowLeft, Heart, Share2, Bookmark, Star, Clock3, Flame, Users, Trophy,
    ChefHat, Sparkles, Play, Pause, RotateCcw, Plus, Minus, ShoppingCart,
    Download, Printer, Check, Bot, Mic, Volume2, VolumeX, TrendingUp,
    Zap, Leaf, Droplets, Activity, ChevronRight, ChevronLeft, X, Timer
} from "lucide-react";
import { categoryDishes } from "../../utils/categoryDishes";

// ─── Static enrichment data generator ────────────────────────────────────────
function getRecipeDetails(recipe) {
    return {
        servings: 4,
        reviews: Math.floor((recipe.rating || 4.5) * 100 - 50),
        category: recipe.category || "Dinner",
        ingredients: [
            { name: "Main ingredient", qty: "200g", checked: false, icon: "🥩" },
            { name: "Olive Oil", qty: "2 tbsp", checked: false, icon: "🫒" },
            { name: "Garlic cloves", qty: "4 cloves", checked: true, icon: "🧄" },
            { name: "Fresh herbs", qty: "1 bunch", checked: false, icon: "🌿" },
            { name: "Sea salt", qty: "1 tsp", checked: true, icon: "🧂" },
            { name: "Black pepper", qty: "½ tsp", checked: false, icon: "🫙" },
            { name: "Lemon juice", qty: "2 tbsp", checked: false, icon: "🍋" },
            { name: "Butter", qty: "1 tbsp", checked: true, icon: "🧈" },
        ],
        steps: [
            { num: 1, title: "Prepare ingredients", desc: "Wash and chop all vegetables. Marinate the main protein with spices for 15 minutes.", time: "15 min", icon: "🔪" },
            { num: 2, title: "Heat the pan", desc: "Heat olive oil in a large pan over medium-high heat until shimmering.", time: "3 min", icon: "🍳" },
            { num: 3, title: "Sauté aromatics", desc: "Add garlic and sauté for 1-2 minutes until golden and fragrant.", time: "2 min", icon: "🧄" },
            { num: 4, title: "Cook the main protein", desc: "Add the main ingredient and cook on each side until golden brown.", time: recipe.time || "20 min", icon: "🔥" },
            { num: 5, title: "Add seasonings", desc: "Season with salt, pepper, and fresh herbs. Deglaze with lemon juice.", time: "5 min", icon: "🌿" },
            { num: 6, title: "Rest and plate", desc: "Let rest for 5 minutes. Plate beautifully with garnish and serve hot.", time: "5 min", icon: "🍽️" },
        ],
        nutrition: {
            calories: recipe.calories || 420,
            protein: Math.round((recipe.calories || 420) * 0.08),
            carbs: Math.round((recipe.calories || 420) * 0.12),
            fat: Math.round((recipe.calories || 420) * 0.04),
            fiber: 8,
            score: Math.round((recipe.rating || 4.5) * 18),
        },
        tips: [
            "Use room-temperature ingredients for better texture.",
            "Don't overcrowd the pan — cook in batches if needed.",
            "Rest the dish before serving to lock in flavors.",
        ],
        pairings: ["🍷 Red Wine", "🥗 Garden Salad", "🍞 Artisan Bread"],
        drinks: ["🍵 Herbal Tea", "🥤 Fresh Juice", "☕ Espresso"],
        chefNote: "The secret is patience — let each step develop fully before moving to the next. Quality ingredients make all the difference.",
    };
}

// ─── Circular Progress Ring ───────────────────────────────────────────────────
function CircleRing({ value, max, size = 80, color = "#f59e0b", label, sub, icon }) {
    const r = (size - 12) / 2;
    const circ = 2 * Math.PI * r;
    const dash = (value / max) * circ;
    const iconSize = Math.round(size * 0.28);
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="-rotate-90">
                    <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth="6" className="text-black/10 dark:text-white/10" />
                    <motion.circle
                        cx={size / 2} cy={size / 2} r={r} fill="none"
                        stroke={color} strokeWidth="6" strokeLinecap="round"
                        strokeDasharray={circ}
                        initial={{ strokeDashoffset: circ }}
                        animate={{ strokeDashoffset: circ - dash }}
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                    />
                </svg>
                {icon && (
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ color }}
                    >
                        {icon(iconSize)}
                    </div>
                )}
            </div>
            <span className="text-gray-900 dark:text-white font-bold text-sm">{label}</span>
            <span className="text-gray-500 dark:text-white/50 text-[10px]">{sub}</span>
        </div>
    );
}

// ─── Stat Bar ─────────────────────────────────────────────────────────────────
function StatBar({ label, value, max, color }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs">
                <span className="text-gray-500 dark:text-white/60">{label}</span>
                <span className="text-gray-900 dark:text-white font-semibold">{value}g</span>
            </div>
            <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(value / max) * 100}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                />
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RecipeDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const heroRef = useRef(null);
    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 400], [1, 1.08]);
    const heroY = useTransform(scrollY, [0, 400], [0, 80]);

    const passedRecipe = location.state?.recipe;
    const allRecipes = Object.values(categoryDishes).flat();
    const recipe = passedRecipe || allRecipes[parseInt(id, 10)] || allRecipes[0];
    const details = getRecipeDetails(recipe);

    const [servings, setServings] = useState(details.servings);
    const [checkedIngredients, setCheckedIngredients] = useState(
        details.ingredients.reduce((a, ing, i) => ({ ...a, [i]: ing.checked }), {})
    );
    const [activeStep, setActiveStep] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [aiOpen, setAiOpen] = useState(false);
    const [timerActive, setTimerActive] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(0);
    const [voiceOn, setVoiceOn] = useState(false);
    const [relatedIdx, setRelatedIdx] = useState(0);
    const [relatedCategory, setRelatedCategory] = useState("Breakfast");
    const [cookingStarted, setCookingStarted] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        let interval;
        if (timerActive) interval = setInterval(() => setTimerSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, [timerActive]);

    useEffect(() => { setRelatedIdx(0); }, [relatedCategory]);

    const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    const toggleIngredient = (i) => setCheckedIngredients((p) => ({ ...p, [i]: !p[i] }));
    const scaledQty = (qty) => {
        const match = qty.match(/^([\d.]+)(.*)/);
        if (!match) return qty;
        return `${parseFloat(((parseFloat(match[1]) * servings) / details.servings).toFixed(1))}${match[2]}`;
    };

    const CARDS_PER_PAGE = 8;
    const relatedRecipes = (categoryDishes[relatedCategory] || []).filter((r) => r.title !== recipe.title);
    const visibleRelated = relatedRecipes.slice(relatedIdx, relatedIdx + CARDS_PER_PAGE);

    const handleShare = () => {
        navigator.clipboard?.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
        setShowShare(false);
    };

    const diffColor = { Easy: "#22c55e", Medium: "#f59e0b", Hard: "#ef4444" };
    const diff = recipe.difficulty || "Medium";

    // ── shared card class ──────────────────────────────────────────────────────
    const card = "rounded-3xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-xl";

    return (
        <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0B0F14] text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">

            {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
            <div ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
                <motion.div className="absolute inset-0" style={{ scale: heroScale, y: heroY }}>
                    <img
                        src={recipe.image} alt={recipe.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&auto=format&fit=crop"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/60 via-transparent to-transparent" />
                </motion.div>

                {/* Back */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
                >
                    <ArrowLeft size={16} /> Back
                </motion.button>

                {/* Top-right actions */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="absolute top-6 right-6 z-20 flex gap-3"
                >
                    <button
                        onClick={() => setIsFavorite((p) => !p)}
                        className={`p-3 rounded-2xl backdrop-blur-md border transition-all ${isFavorite ? "bg-red-500/30 border-red-500/50 text-red-400" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
                    >
                        <Heart size={18} className={isFavorite ? "fill-red-400" : ""} />
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setShowShare((p) => !p)}
                            className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                        >
                            <Share2 size={18} />
                        </button>
                        <AnimatePresence>
                            {showShare && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute right-0 top-14 z-30 bg-white/95 dark:bg-[#1a1f28]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-4 w-56 shadow-2xl"
                                >
                                    <button onClick={handleShare} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-sm text-gray-700 dark:text-white transition-colors">
                                        {copied ? <Check size={14} className="text-green-500" /> : <Share2 size={14} />} {copied ? "Copied!" : "Copy link"}
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <button
                        onClick={() => setIsSaved((p) => !p)}
                        className={`p-3 rounded-2xl backdrop-blur-md border transition-all ${isSaved ? "bg-amber-500/30 border-amber-500/50 text-amber-400" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}
                    >
                        <Bookmark size={18} className={isSaved ? "fill-amber-400" : ""} />
                    </button>
                </motion.div>

                {/* Hero content — always on the image so always white */}
                <motion.div style={{ opacity: heroOpacity }} className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-10 pb-10 md:pb-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400 uppercase tracking-wider">
                                {recipe.category || "Dinner"}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold text-white/60 border border-white/20">✨ AI Recommended</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight max-w-3xl">{recipe.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-1.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={14} className={s <= Math.round(parseFloat(recipe.rating || 4.5)) ? "fill-amber-400 text-amber-400" : "text-white/30"} />
                                ))}
                                <span className="text-white font-bold ml-1">{recipe.rating || "4.8"}</span>
                                <span className="text-white/50 text-sm">({details.reviews} reviews)</span>
                            </div>
                            <span className="w-px h-4 bg-white/20" />
                            <span className="flex items-center gap-1.5 text-white/70 text-sm"><Clock3 size={14} />{recipe.time || "30 min"}</span>
                            <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: diffColor[diff] }}><Zap size={14} />{diff}</span>
                            <span className="flex items-center gap-1.5 text-white/70 text-sm"><Flame size={14} className="text-orange-400" />{recipe.calories || 420} kcal</span>
                            <span className="flex items-center gap-1.5 text-white/70 text-sm"><Users size={14} />Serves {servings}</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <motion.button
                                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                onClick={() => { setCookingStarted(true); document.getElementById("steps-section")?.scrollIntoView({ behavior: "smooth" }); }}
                                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
                            >
                                <Play size={16} className="fill-black" /> Start Cooking
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                                onClick={() => setAiOpen(true)}
                                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                            >
                                <Bot size={16} className="text-blue-400" /> AI Chef
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* ── FLOATING STAT CARDS ─────────────────────────────────────────── */}
            <div className="relative z-20 px-6 sm:px-10 -mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
                    {[
                        { icon: <Leaf size={18} className="text-green-500" />, label: "Ingredients", value: details.ingredients.length, sub: "items" },
                        { icon: <Activity size={18} className="text-blue-500" />, label: "Nutrition", value: details.nutrition.score, sub: "/ 100" },
                        { icon: <Clock3 size={18} className="text-amber-500" />, label: "Cook Time", value: recipe.time || "30 min", sub: "total" },
                        { icon: <TrendingUp size={18} className="text-purple-500" />, label: "Popularity", value: "98%", sub: "loved it" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:border-white/20 transition-all"
                        >
                            <div className="p-2 rounded-xl bg-black/5 dark:bg-white/10">{stat.icon}</div>
                            <div>
                                <div className="text-gray-900 dark:text-white font-bold text-sm">{stat.value}</div>
                                <div className="text-gray-500 dark:text-white/50 text-[10px]">{stat.label} <span className="text-gray-400 dark:text-white/30">{stat.sub}</span></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
            <div className="px-6 sm:px-10 py-10 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* ── LEFT: INGREDIENTS ─────────────────────────────────────── */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="lg:col-span-1 space-y-4">

                        <div className={`${card} overflow-hidden`}>
                            <div className="px-5 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                                <h2 className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-2">
                                    <span className="text-lg">🧺</span> Ingredients
                                </h2>
                                <div className="flex items-center gap-2 bg-black/5 dark:bg-white/10 rounded-xl px-3 py-1.5">
                                    <button onClick={() => setServings((s) => Math.max(1, s - 1))} className="text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"><Minus size={13} /></button>
                                    <span className="text-gray-900 dark:text-white font-bold text-sm w-4 text-center">{servings}</span>
                                    <button onClick={() => setServings((s) => s + 1)} className="text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"><Plus size={13} /></button>
                                </div>
                            </div>
                            <div className="p-4 space-y-2 max-h-[360px] overflow-y-auto scrollbar-hide">
                                {details.ingredients.map((ing, i) => (
                                    <motion.button
                                        key={i} onClick={() => toggleIngredient(i)} whileTap={{ scale: 0.98 }}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${checkedIngredients[i] ? "bg-green-500/10 border border-green-500/30" : "bg-black/3 dark:bg-white/5 border border-transparent hover:border-black/10 dark:hover:border-white/15"}`}
                                    >
                                        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${checkedIngredients[i] ? "bg-green-500 border-green-500" : "border-gray-300 dark:border-white/30"}`}>
                                            {checkedIngredients[i] && <Check size={11} className="text-white" strokeWidth={3} />}
                                        </div>
                                        <span className="text-lg">{ing.icon}</span>
                                        <div className="flex-1 min-w-0">
                                            <span className={`text-sm font-medium block truncate transition-all ${checkedIngredients[i] ? "line-through text-gray-400 dark:text-white/40" : "text-gray-800 dark:text-white/85"}`}>{ing.name}</span>
                                        </div>
                                        <span className="text-xs font-mono text-amber-500 dark:text-amber-400/80 shrink-0">{scaledQty(ing.qty)}</span>
                                    </motion.button>
                                ))}
                            </div>
                            <div className="px-4 py-3 border-t border-black/10 dark:border-white/10">
                                <motion.button
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:from-amber-500/30 hover:to-orange-500/30 transition-all"
                                >
                                    <ShoppingCart size={14} /> Add to Shopping List
                                </motion.button>
                            </div>
                        </div>

                        {/* Chef Tips */}
                        <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-5">
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2 mb-3">
                                <ChefHat size={15} className="text-blue-500 dark:text-blue-400" /> Chef Tips
                            </h3>
                            <div className="space-y-2.5">
                                {details.tips.map((tip, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-white/70">
                                        <span className="text-blue-500 dark:text-blue-400 font-bold shrink-0 mt-0.5">{i + 1}.</span>
                                        <span>{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download / Print */}
                        <div className="grid grid-cols-2 gap-3">
                            {[{ icon: <Download size={14} />, label: "Download PDF" }, { icon: <Printer size={14} />, label: "Print Recipe" }].map((btn, i) => (
                                <motion.button
                                    key={i} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/70 text-xs font-medium hover:bg-black/5 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all shadow-sm"
                                >
                                    {btn.icon} {btn.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── CENTER: STEPS ──────────────────────────────────────────── */}
                    <motion.div id="steps-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="lg:col-span-1 space-y-4">

                        {/* Timer */}
                        {/* <div className={`${card} p-5`}>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-bold text-gray-900 dark:text-white">Cooking Progress</span>
                                <div className="flex items-center gap-2 font-mono text-amber-600 dark:text-amber-400 text-sm bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
                                    <Timer size={13} /> {formatTime(timerSeconds)}
                                </div>
                            </div>
                            <div className="h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mb-4">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                                    animate={{ width: `${(activeStep / details.steps.length) * 100}%` }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setTimerActive((p) => !p)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${timerActive ? "bg-red-500/20 border border-red-500/30 text-red-500 dark:text-red-400" : "bg-green-500/20 border border-green-500/30 text-green-600 dark:text-green-400"}`}
                                >
                                    {timerActive ? <><Pause size={12} /> Pause</> : <><Play size={12} className="fill-green-500 dark:fill-green-400" /> Start Timer</>}
                                </button>
                                <button
                                    onClick={() => { setTimerSeconds(0); setTimerActive(false); setActiveStep(0); }}
                                    className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all"
                                >
                                    <RotateCcw size={13} />
                                </button>
                                <button
                                    onClick={() => setVoiceOn((p) => !p)}
                                    className={`px-4 py-2 rounded-xl border transition-all ${voiceOn ? "bg-blue-500/20 border-blue-500/30 text-blue-500 dark:text-blue-400" : "bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/15 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"}`}
                                >
                                    {voiceOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
                                </button>
                            </div>
                        </div> */}

                        {/* Steps list */}
                        <div className={`${card} overflow-hidden`}>
                            <div className="px-5 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                                <h2 className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-2">
                                    <Sparkles size={15} className="text-amber-500" /> Step-by-Step
                                </h2>
                                <span className="text-gray-400 dark:text-white/40 text-xs">{activeStep}/{details.steps.length} done</span>
                            </div>
                            <div className="p-4 space-y-3">
                                {details.steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        whileTap={{ scale: 0.99 }}
                                        className={`relative p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${i < activeStep
                                            ? "bg-green-500/8 border-green-500/20"
                                            : i === activeStep
                                                ? "bg-amber-500/10 border-amber-500/30 shadow-lg shadow-amber-500/10"
                                                : "bg-black/3 dark:bg-white/3 border-black/8 dark:border-white/8 hover:border-black/15 dark:hover:border-white/20"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shrink-0 transition-all ${i < activeStep ? "bg-green-500 text-white" : i === activeStep ? "bg-amber-500 text-black" : "bg-black/8 dark:bg-white/10 text-gray-500 dark:text-white/60"
                                                }`}>
                                                {i < activeStep ? <Check size={14} strokeWidth={3} /> : step.num}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className={`text-sm font-bold ${i === activeStep ? "text-amber-600 dark:text-amber-400" : i < activeStep ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-white/80"}`}>
                                                        {step.icon} {step.title}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 dark:text-white/40 ml-2 shrink-0">{step.time}</span>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-white/55 leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="px-4 pb-4 flex gap-2">
                                <button
                                    onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                                    disabled={activeStep === 0}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/60 text-xs font-medium hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-30 transition-all"
                                >
                                    <ChevronLeft size={14} /> Previous
                                </button>
                                <button
                                    onClick={() => setActiveStep((s) => Math.min(details.steps.length, s + 1))}
                                    disabled={activeStep === details.steps.length}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold hover:bg-amber-500/30 disabled:opacity-30 transition-all"
                                >
                                    Next <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: NUTRITION + AI ──────────────────────────────────── */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="lg:col-span-1 space-y-4">

                        {/* Nutrition */}
                        <div className={`${card} overflow-hidden`}>
                            <div className="px-5 py-4 border-b border-black/10 dark:border-white/10">
                                <h2 className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-2">
                                    <Droplets size={15} className="text-cyan-500" /> Nutrition Analytics
                                </h2>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-around mb-5">
                                    <CircleRing value={details.nutrition.calories} max={800} size={84} color="#f59e0b" label={`${details.nutrition.calories}`} sub="kcal" icon={(s) => <Flame size={s} />} />
                                    <CircleRing value={details.nutrition.protein} max={60} size={72} color="#60a5fa" label={`${details.nutrition.protein}g`} sub="protein" icon={(s) => <Zap size={s} />} />
                                    <CircleRing value={details.nutrition.score} max={100} size={72} color="#34d399" label={`${details.nutrition.score}`} sub="health" icon={(s) => <Leaf size={s} />} />
                                </div>
                                <div className="space-y-3">
                                    <StatBar label="Protein" value={details.nutrition.protein} max={60} color="linear-gradient(90deg,#3b82f6,#60a5fa)" />
                                    <StatBar label="Carbs" value={details.nutrition.carbs} max={100} color="linear-gradient(90deg,#f59e0b,#fbbf24)" />
                                    <StatBar label="Fat" value={details.nutrition.fat} max={40} color="linear-gradient(90deg,#ef4444,#f87171)" />
                                    <StatBar label="Fiber" value={details.nutrition.fiber} max={25} color="linear-gradient(90deg,#34d399,#6ee7b7)" />
                                </div>
                                <div className="mt-4 flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        <Leaf size={18} className="text-green-500" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-green-600 dark:text-green-400">Health Score: {details.nutrition.score}/100</div>
                                        <div className="text-[11px] text-gray-500 dark:text-white/50">Nutritionally balanced meal</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Chef Insights */}
                        <div className="rounded-3xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 dark:from-blue-600/15 dark:to-violet-600/15 border border-blue-500/20 dark:border-blue-500/25 overflow-hidden">
                            <div className="px-5 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                                <h2 className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-2">
                                    <Bot size={15} className="text-blue-500 dark:text-blue-400" /> AI Chef Insights
                                </h2>
                                <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-semibold">LIVE</span>
                            </div>
                            <div className="p-5 space-y-3">
                                <div className="flex items-start gap-3 p-3 rounded-2xl bg-black/5 dark:bg-white/5">
                                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <Bot size={14} className="text-blue-500 dark:text-blue-400" />
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-white/70 leading-relaxed">{details.chefNote}</p>
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-gray-400 dark:text-white/40 uppercase tracking-widest mb-2">Ingredient Substitutions</div>
                                    <div className="space-y-1.5">
                                        {["Butter → Coconut Oil", "Salt → Himalayan Pink Salt", "Sugar → Honey (½ amount)"].map((s, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-white/65 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/8">
                                                <Zap size={10} className="text-amber-500 shrink-0" /> {s}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                                    onClick={() => setAiOpen(true)}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:from-blue-500/30 hover:to-violet-500/30 transition-all"
                                >
                                    <Mic size={12} /> Ask AI Chef anything
                                </motion.button>
                            </div>
                        </div>

                        {/* Pairings */}
                        <div className={`${card} p-5`}>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2 mb-3">
                                <Trophy size={14} className="text-amber-500" /> Pairs Well With
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {details.pairings.map((p, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-medium">{p}</span>
                                ))}
                            </div>
                            <div className="text-[11px] font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest mb-2">Drink Pairings</div>
                            <div className="flex flex-wrap gap-2">
                                {details.drinks.map((d, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium">{d}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── RELATED RECIPES ──────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }} className="mt-12"
                >
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                            <Sparkles size={20} className="text-amber-500" /> Related Recipes
                        </h2>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setRelatedIdx((i) => Math.max(0, i - CARDS_PER_PAGE))}
                                disabled={relatedIdx === 0}
                                className="p-2 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-30 transition-all"
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <button
                                onClick={() => setRelatedIdx((i) => Math.min(relatedRecipes.length - CARDS_PER_PAGE, i + CARDS_PER_PAGE))}
                                disabled={relatedIdx + CARDS_PER_PAGE >= relatedRecipes.length}
                                className="p-2 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-30 transition-all"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Category tabs */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-5">
                        {[
                            { key: "Breakfast", icon: "🍳" },
                            { key: "Lunch", icon: "🌮" },
                            { key: "Dinner", icon: "🍽️" },
                            { key: "Desserts", icon: "🍰" },
                            { key: "Snacks", icon: "🍟" },
                            { key: "Drinks", icon: "🥤" },
                        ].map(({ key, icon }) => (
                            <button
                                key={key}
                                onClick={() => setRelatedCategory(key)}
                                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold border transition-all ${relatedCategory === key
                                    ? "bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/30"
                                    : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-600 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                                    }`}
                            >
                                <span>{icon}</span> {key}
                            </button>
                        ))}
                    </div>

                    {/* Recipe grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={relatedCategory + relatedIdx}
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                        >
                            {visibleRelated.map((r, i) => (
                                <motion.div
                                    key={r.title + i}
                                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    onClick={() => navigate("/recipe/detail", { state: { recipe: r } })}
                                    className="rounded-2xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden cursor-pointer hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 transition-all group shadow-sm"
                                >
                                    <div className="relative overflow-hidden h-32 sm:h-40">
                                        <img
                                            src={r.image} alt={r.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop"; }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                                        <div className="absolute top-2 right-2">
                                            <span className="flex items-center gap-0.5 bg-black/60 backdrop-blur-sm text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                                <Star size={8} className="fill-yellow-400" />{r.rating}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-2 left-2 right-2">
                                            <p className="text-white font-bold text-xs leading-tight line-clamp-2">{r.title}</p>
                                        </div>
                                    </div>
                                    <div className="px-3 py-2.5 flex items-center justify-between">
                                        <span className="text-gray-500 dark:text-white/50 text-[10px] flex items-center gap-1">
                                            <Clock3 size={9} />{r.time}
                                        </span>
                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${r.difficulty === "Easy" ? "bg-green-500/15 text-green-600 dark:text-green-400" :
                                            r.difficulty === "Hard" ? "bg-red-500/15 text-red-600 dark:text-red-400" :
                                                "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                                            }`}>{r.difficulty}</span>
                                        <span className="text-gray-500 dark:text-white/50 text-[10px] flex items-center gap-1">
                                            <Flame size={9} className="text-orange-400" />{r.calories} cal
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                            {visibleRelated.length === 0 && (
                                <div className="col-span-4 py-12 text-center text-gray-400 dark:text-white/40 text-sm">
                                    No recipes in this category yet.
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {relatedRecipes.length > CARDS_PER_PAGE && (
                        <div className="flex items-center justify-center gap-1.5 mt-5">
                            {Array.from({ length: Math.ceil(relatedRecipes.length / CARDS_PER_PAGE) }).map((_, pi) => (
                                <button
                                    key={pi}
                                    onClick={() => setRelatedIdx(pi * CARDS_PER_PAGE)}
                                    className={`rounded-full transition-all ${relatedIdx / CARDS_PER_PAGE === pi ? "w-6 h-2 bg-amber-500" : "w-2 h-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* ── CHEF INSIGHTS PANEL ──────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 rounded-3xl bg-gradient-to-br from-amber-500/8 to-orange-500/5 border border-amber-500/20 p-6 sm:p-8"
                >
                    <h2 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                        <ChefHat size={20} className="text-amber-500" /> Chef's Notes & Serving Ideas
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { icon: "🍽️", title: "Serving Suggestion", desc: "Plate on a warmed dish with fresh herbs and a drizzle of premium olive oil. Serve immediately for best experience." },
                            { icon: "🍷", title: "Recommended Drinks", desc: details.drinks.join(" · ") + ". Each pairing enhances the flavor profile uniquely." },
                            { icon: "💡", title: "Chef's Secret", desc: details.chefNote },
                        ].map((item, i) => (
                            <motion.div
                                key={i} whileHover={{ y: -4 }}
                                className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-amber-500/30 transition-all shadow-sm"
                            >
                                <div className="text-3xl mb-3">{item.icon}</div>
                                <div className="text-sm font-bold text-gray-900 dark:text-white mb-2">{item.title}</div>
                                <p className="text-xs text-gray-500 dark:text-white/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── AI CHEF MODAL ────────────────────────────────────────────────── */}
            <AnimatePresence>
                {aiOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setAiOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 60, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 60, scale: 0.95 }}
                            transition={{ type: "spring", damping: 28, stiffness: 350 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-md rounded-3xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center justify-between px-6 py-5 border-b border-black/10 dark:border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                                        <Bot size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white text-sm">AI Chef Assistant</div>
                                        <div className="text-[11px] text-green-500 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" /> Online
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setAiOpen(false)} className="p-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-gray-500 dark:text-white/60">
                                    <X size={16} />
                                </button>
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <Bot size={14} className="text-blue-500 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1 p-3 rounded-2xl rounded-tl-none bg-black/5 dark:bg-white/8 border border-black/10 dark:border-white/10">
                                        <p className="text-xs text-gray-700 dark:text-white/80 leading-relaxed">
                                            Hi! I'm your AI Chef for <strong className="text-gray-900 dark:text-white">{recipe.title}</strong>. I can help with substitutions, tips, dietary adjustments, and more.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {["Make it vegan 🌱", "Reduce calories 📉", "Substitute eggs 🥚", "Double the recipe 📈"].map((q) => (
                                        <button key={q} className="text-xs px-3 py-2 rounded-xl bg-black/5 dark:bg-white/8 border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/15 hover:text-gray-900 dark:hover:text-white transition-all text-left">{q}</button>
                                    ))}
                                </div>
                                <div className="flex gap-2 pt-2">
                                    <input
                                        type="text"
                                        placeholder="Ask anything about this recipe..."
                                        className="flex-1 bg-black/5 dark:bg-white/8 border border-black/10 dark:border-white/15 rounded-xl px-4 py-2.5 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 outline-none focus:border-blue-500/50 transition-colors"
                                    />
                                    <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-bold hover:opacity-90 transition-opacity">
                                        Ask
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── MOBILE STICKY CTA ──────────────────────────────────────────── */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-gradient-to-t from-[#F9F7F4] dark:from-[#0B0F14] to-transparent">
                <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    onClick={() => { setCookingStarted(true); document.getElementById("steps-section")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-2xl shadow-amber-500/40"
                >
                    <Play size={16} className="fill-black" /> {cookingStarted ? "Continue Cooking" : "Start Cooking"}
                </motion.button>
            </div>
        </div>
    );
}

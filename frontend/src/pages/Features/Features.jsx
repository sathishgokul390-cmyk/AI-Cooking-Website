import { motion } from "framer-motion";
import { Sparkles, CalendarDays, BookOpen, Heart, Search, ShieldCheck, Zap, Globe2 } from "lucide-react";
import {
  blurFade,
  fadeUp,
  scaleFade,
  staggerContainer,
  staggerChild,
  slideLeft,
  slideRight,
} from "../../hooks/useScrollAnimation";

const features = [
  { icon: Sparkles, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10", title: "AI Recipe Generator", desc: "Tell the AI what ingredients you have and get personalized recipe suggestions in seconds." },
  { icon: CalendarDays, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10", title: "Meal Planner", desc: "Plan your entire week of meals in one place. Stay organized and eat better every day." },
  { icon: BookOpen, color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10", title: "Recipe Library", desc: "Browse hundreds of curated recipes across every cuisine, diet, and skill level." },
  { icon: Heart, color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10", title: "Save Favorites", desc: "Bookmark recipes you love and access them anytime from your personal collection." },
  { icon: Search, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-500/10", title: "Smart Search & Filters", desc: "Filter by cooking time, calories, diet type, cuisine, and more to find exactly what you need." },
  { icon: Zap, color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-500/10", title: "Quick Recipes", desc: "Discover meals you can make in under 15 minutes — perfect for busy weeknights." },
  { icon: ShieldCheck, color: "text-teal-500", bg: "bg-teal-50 dark:bg-teal-500/10", title: "Dietary Tracking", desc: "Track calories, macros, and nutritional info for every recipe you cook." },
  { icon: Globe2, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-500/10", title: "World Cuisines", desc: "Explore authentic recipes from Indian, Italian, Asian, American, and many more cuisines." },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h1 {...blurFade} className="text-5xl font-bold mb-5">
            Everything you need to{" "}
            <span className="text-orange-500">cook smarter</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto"
          >
            CookAI brings together AI, nutrition, and a world of recipes — all in one place.
          </motion.p>
        </div>

        {/* FEATURES GRID — stagger children */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.92 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
                className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-400/30 transition-shadow duration-300 cursor-pointer"
              >
                <motion.div
                  className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-5`}
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  <Icon size={22} className={f.color} />
                </motion.div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-orange-500 rounded-[32px] p-12 text-center text-white overflow-hidden relative"
        >
          {/* decorative blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <motion.h2
            {...blurFade}
            className="text-3xl font-bold mb-4 relative z-10"
          >
            Ready to start cooking smarter?
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-orange-100 mb-8 text-lg relative z-10"
          >
            Join thousands of home cooks already using CookAI every day.
          </motion.p>
          <motion.a
            href="/register"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-4 rounded-2xl bg-white text-orange-500 font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg relative z-10"
          >
            Get Started Free
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
}

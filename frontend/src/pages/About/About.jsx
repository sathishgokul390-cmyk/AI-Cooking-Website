import { motion } from "framer-motion";
import { Users, Target, Sparkles, Heart } from "lucide-react";
import {
  blurFade,
  fadeUp,
  fadeUpStagger,
  slideLeft,
  slideRight,
  scaleFade,
  flipUp,
} from "../../hooks/useScrollAnimation";

const team = [
  { name: "Alex Chen", role: "AI Engineer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
  { name: "Sara Kim", role: "UI/UX Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" },
  { name: "James Patel", role: "Full Stack Dev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
  { name: "Mia Torres", role: "Food Scientist", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia" },
];

const values = [
  { icon: Sparkles, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10", title: "AI-Powered", desc: "Every recipe suggestion is backed by smart AI that learns your taste preferences." },
  { icon: Heart, color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10", title: "Made with Love", desc: "We're food lovers first. Every feature is built to make cooking more enjoyable." },
  { icon: Target, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10", title: "Goal-Oriented", desc: "Whether it's weight loss, muscle gain, or just eating better — we help you get there." },
  { icon: Users, color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10", title: "Community First", desc: "A growing community of home cooks sharing recipes, tips, and inspiration." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO — blur fade heading */}
        <div className="text-center mb-20">
          <motion.h1 {...blurFade} className="text-5xl font-bold mb-5">
            About <span className="text-orange-500">CookAI</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We're on a mission to make home cooking smarter, healthier, and more fun — powered by AI and driven by a love for food.
          </motion.p>
        </div>

        {/* STORY — slide in from sides */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div {...slideLeft}>
            <h2 className="text-3xl font-bold mb-5">Our Story</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              CookAI started with a simple question: what if your kitchen had an AI sous-chef? One that knows your dietary needs, suggests recipes based on what's in your fridge, and helps you plan meals for the whole week.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We built CookAI to bridge the gap between technology and the dinner table — making every meal an opportunity to eat better and cook smarter.
            </p>
          </motion.div>

          <motion.div {...slideRight} className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
              alt="Cooking"
              className="w-full h-80 object-cover rounded-[32px] shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-orange-500/30"
            >
              Est. 2024
            </motion.div>
          </motion.div>
        </div>

        {/* VALUES — flip card entrance */}
        <div className="mb-24">
          <motion.h2 {...blurFade} className="text-3xl font-bold text-center mb-12">
            What We Stand For
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  {...flipUp(i)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/5"
                >
                  <motion.div
                    {...scaleFade(i)}
                    className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon size={22} className={v.color} />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TEAM — staggered scale-fade */}
        <div>
          <motion.h2 {...blurFade} className="text-3xl font-bold text-center mb-12">
            Meet the Team
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                {...fadeUpStagger(i, 0.12)}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 text-center transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <motion.img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 bg-orange-50 dark:bg-orange-500/10"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-orange-500 text-sm font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

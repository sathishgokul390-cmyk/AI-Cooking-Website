import { Sparkles, CalendarDays, BookOpen, Heart, Search, ShieldCheck, Zap, Globe2 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    title: "AI Recipe Generator",
    desc: "Tell the AI what ingredients you have and get personalized recipe suggestions in seconds.",
  },
  {
    icon: CalendarDays,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    title: "Meal Planner",
    desc: "Plan your entire week of meals in one place. Stay organized and eat better every day.",
  },
  {
    icon: BookOpen,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-500/10",
    title: "Recipe Library",
    desc: "Browse hundreds of curated recipes across every cuisine, diet, and skill level.",
  },
  {
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-500/10",
    title: "Save Favorites",
    desc: "Bookmark recipes you love and access them anytime from your personal collection.",
  },
  {
    icon: Search,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-500/10",
    title: "Smart Search & Filters",
    desc: "Filter by cooking time, calories, diet type, cuisine, and more to find exactly what you need.",
  },
  {
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-500/10",
    title: "Quick Recipes",
    desc: "Discover meals you can make in under 15 minutes — perfect for busy weeknights.",
  },
  {
    icon: ShieldCheck,
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-500/10",
    title: "Dietary Tracking",
    desc: "Track calories, macros, and nutritional info for every recipe you cook.",
  },
  {
    icon: Globe2,
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    title: "World Cuisines",
    desc: "Explore authentic recipes from Indian, Italian, Asian, American, and many more cuisines.",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0B1120] text-black dark:text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-5">
            Everything you need to <span className="text-orange-500">cook smarter</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            CookAI brings together AI, nutrition, and a world of recipes — all in one place.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-400/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={f.color} />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA BANNER */}
        <div className="bg-orange-500 rounded-[32px] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to start cooking smarter?</h2>
          <p className="text-orange-100 mb-8 text-lg">
            Join thousands of home cooks already using CookAI every day.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-4 rounded-2xl bg-white text-orange-500 font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg"
          >
            Get Started Free
          </a>
        </div>

      </div>
    </div>
  );
}

import { Clock3, Star, Heart, Sparkles, ChevronRight, Flame } from "lucide-react";
import { useState } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────

const categories = [
  {
    title: "Breakfast",
    recipes: "25 Recipes",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Lunch",
    recipes: "40 Recipes",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Dinner",
    recipes: "60 Recipes",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Desserts",
    recipes: "30 Recipes",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Snacks",
    recipes: "35 Recipes",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Drinks",
    recipes: "20 Recipes",
    image: "https://images.unsplash.com/photo-1553530666-ba11a90bb918?q=80&w=400&auto=format&fit=crop",
  },
];

const recipes = [
  {
    title: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=600&auto=format&fit=crop",
    time: "45 min",
    difficulty: "Medium",
    rating: "4.8",
    reviews: 320,
  },
  {
    title: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
    time: "30 min",
    difficulty: "Easy",
    rating: "4.7",
    reviews: 180,
  },
  {
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=600&auto=format&fit=crop",
    time: "25 min",
    difficulty: "Easy",
    rating: "4.9",
    reviews: 215,
  },
  {
    title: "Veg Sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop",
    time: "15 min",
    difficulty: "Easy",
    rating: "4.6",
    reviews: 98,
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const [liked, setLiked] = useState({});

  const toggleLike = (i) =>
    setLiked((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0B1120] text-black dark:text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

          {/* LEFT */}
          <div>
            <p className="text-orange-500 text-2xl font-semibold mb-4">
              Hello, Foodie! 👋
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-5">
              What are you <br /> cooking today?
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-md">
              Find, cook and enjoy delicious recipes with the power of AI.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-7 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25">
                Explore Recipes
              </button>
              <button className="px-7 py-3.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/30 hover:border-orange-400/40 font-medium transition-all duration-300">
                Ask AI Chef
              </button>
            </div>
          </div>

          {/* RIGHT — hero card with circular food image + floating badges */}
          <div className="relative flex items-center justify-center">
            {/* card bg */}
            <div className="w-full bg-[#FFF5E6] dark:bg-[#1a1a2e] border border-black/10 dark:border-white/10 rounded-[36px] p-6 shadow-xl flex items-center justify-center min-h-[420px]">
              {/* circular food image */}
              <div className="w-72 h-72 rounded-full overflow-hidden ring-4 ring-orange-500/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop"
                  alt="Delicious food bowl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quick & Easy badge — top right */}
            <div className="absolute top-5 right-5 bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-2xl px-4 py-2.5 shadow-lg">
              <div className="flex items-center gap-2 mb-0.5">
                <Flame size={15} className="text-orange-500" />
                <p className="font-semibold text-sm">Quick &amp; Easy</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                20 Recipes <ChevronRight size={11} />
              </p>
            </div>

            {/* Popular badge — bottom left */}
            <div className="absolute bottom-5 left-5 bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-2xl px-4 py-2.5 shadow-lg">
              <div className="flex items-center gap-2 mb-0.5">
                <Star size={15} className="text-orange-500 fill-orange-500" />
                <p className="font-semibold text-sm">Popular</p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                50 Recipes <ChevronRight size={11} />
              </p>
            </div>
          </div>
        </div>

        {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Categories</h2>
            <button className="text-orange-500 hover:text-orange-400 font-medium transition">
              View all
            </button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-4 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-orange-500/20 group-hover:ring-orange-500/60 transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-sm">{cat.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cat.recipes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── POPULAR RECIPES ──────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Popular Recipes</h2>
            <button className="text-orange-500 hover:text-orange-400 font-medium transition">
              View all
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recipes.map((recipe, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group"
              >
                {/* image */}
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* heart — top left */}
                  <button
                    onClick={() => toggleLike(i)}
                    className="absolute top-3 left-3 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                  >
                    <Heart
                      size={15}
                      className={liked[i] ? "fill-red-500 text-red-500" : "text-slate-400"}
                    />
                  </button>
                </div>

                {/* content */}
                <div className="p-4">
                  <h3 className="font-bold text-base mb-3">{recipe.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Clock3 size={13} />
                      <span>{recipe.time}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500 font-medium">
                      {recipe.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs">
                    <Star size={13} className="fill-yellow-500" />
                    <span className="font-semibold text-black dark:text-white">{recipe.rating}</span>
                    <span className="text-slate-400">({recipe.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ASK AI CHEF ──────────────────────────────────────────────────── */}
        <div className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-[36px] p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* left */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={24} className="text-orange-500" />
              <h2 className="text-3xl font-bold">Ask AI Chef</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base mb-3">
              Get recipe suggestions, cooking tips
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">
              and much more...
            </p>

            {/* mock chat preview */}
            <div className="bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-4 mb-8 max-w-sm">
              <p className="text-xs text-slate-400 mb-2">You</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">What can I cook with chicken?</p>
              <p className="text-xs text-slate-400 mb-2">AI Chef</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Suggest a healthy breakfast.</p>
            </div>

            <button className="px-7 py-3.5 rounded-2xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25">
              Start Chat
            </button>
          </div>

          {/* right — AI chef illustration */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI Chef"
            className="w-52 object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}

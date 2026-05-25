import { useState } from "react";
import { Clock3, Star, Heart, Flame, TrendingUp } from "lucide-react";

const trending = [
  {
    id: 1,
    title: "Chicken Biryani",
    image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=600&auto=format&fit=crop",
    time: "45 min",
    rating: "4.8",
    reviews: 320,
    tag: "#1 This Week",
  },
  {
    id: 2,
    title: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?q=80&w=600&auto=format&fit=crop",
    time: "10 min",
    rating: "4.6",
    reviews: 210,
    tag: "Trending",
  },
  {
    id: 3,
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=600&auto=format&fit=crop",
    time: "25 min",
    rating: "4.9",
    reviews: 415,
    tag: "Most Loved",
  },
  {
    id: 4,
    title: "Paneer Butter Masala",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
    time: "30 min",
    rating: "4.7",
    reviews: 180,
    tag: "Trending",
  },
  {
    id: 5,
    title: "Veg Sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop",
    time: "15 min",
    rating: "4.5",
    reviews: 98,
    tag: "Quick Pick",
  },
  {
    id: 6,
    title: "Pasta Carbonara",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop",
    time: "20 min",
    rating: "4.8",
    reviews: 275,
    tag: "Trending",
  },
];

export default function TrendingRecipes() {
  const [liked, setLiked] = useState({});

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0B1120] text-black dark:text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp size={28} className="text-orange-500" />
          <h1 className="text-4xl font-bold">Trending Recipes</h1>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mb-12">
          What the community is cooking right now
        </p>

        {/* TOP PICK — featured card */}
        <div className="relative rounded-[32px] overflow-hidden mb-14 group">
          <img
            src={trending[0].image}
            alt={trending[0].title}
            className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-orange-500 text-white font-semibold mb-3">
              <Flame size={12} /> {trending[0].tag}
            </span>
            <h2 className="text-4xl font-bold text-white mb-2">{trending[0].title}</h2>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1.5"><Clock3 size={14} />{trending[0].time}</span>
              <span className="flex items-center gap-1.5"><Star size={14} className="fill-yellow-400 text-yellow-400" />{trending[0].rating}</span>
              <span>{trending[0].reviews} reviews</span>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {trending.slice(1).map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/5 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400/30 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => setLiked((p) => ({ ...p, [recipe.id]: !p[recipe.id] }))}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all"
                >
                  <Heart
                    size={15}
                    className={liked[recipe.id] ? "fill-red-500 text-red-500" : "text-slate-500"}
                  />
                </button>
                <span className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-orange-500/90 text-white font-medium">
                  {recipe.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-3">{recipe.title}</h3>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5"><Clock3 size={14} />{recipe.time}</span>
                  <span className="flex items-center gap-1.5 text-yellow-500">
                    <Star size={14} className="fill-yellow-500" />
                    <span className="font-semibold text-black dark:text-white">{recipe.rating}</span>
                  </span>
                  <span>{recipe.reviews} reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

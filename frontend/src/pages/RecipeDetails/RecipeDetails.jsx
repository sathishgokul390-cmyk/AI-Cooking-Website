import { useState } from "react";
import { Clock3, Bookmark, Search, Star, Heart } from "lucide-react";
import Sidenav from "../../components/navbar/sidenavbar/Sidenav";

// images
import friedNoddles from "../../assets/images/fried_noddles.avif";
import noddleSoup from "../../assets/images/noddle_soup.avif";
import tofu from "../../assets/images/tofu.avif";
import healthySalad from "../../assets/images/healthy_salad.avif";
import chickenSteak from "../../assets/images/chicken_steak.avif";
import chocolatePancake from "../../assets/images/chocolate_pancake.avif"

const recipes = [
  {
    id: 1,
    title: "Fried Noodles",
    image: friedNoddles,
    time: "20 min",
    difficulty: "Easy",
    rating: "4.7",
    category: "Lunch",
  },
  {
    id: 2,
    title: "Noodle Soup",
    image: noddleSoup,
    time: "1 hour",
    difficulty: "Medium",
    rating: "4.5",
    category: "Dinner",
  },
  {
    id: 3,
    title: "Tofu With Sauce",
    image: tofu,
    time: "45 min",
    difficulty: "Medium",
    rating: "4.6",
    category: "Dinner",
  },
  {
    id: 4,
    title: "Healthy Salad",
    image: healthySalad,
    time: "15 min",
    difficulty: "Easy",
    rating: "4.8",
    category: "Lunch",
  },
  {
    id: 5,
    title: "Chicken Steak",
    image: chickenSteak,
    time: "40 min",
    difficulty: "Hard",
    rating: "4.9",
    category: "Dinner",
  },
  {
    id: 6,
    title: "Chocolate Pancakes",
    image: chocolatePancake,
    time: "30 min",
    difficulty: "Easy",
    rating: "4.7",
    category: "Breakfast",
  },
];

const difficultyColor = {
  Easy: "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400",
  Medium: "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  Hard: "bg-red-50 dark:bg-red-500/10 text-red-500",
};

export default function RecipeDetails() {
  const [query, setQuery] = useState("");
  const [saved, setSaved] = useState({});
  const [liked, setLiked] = useState({});

  const filtered = query.trim()
    ? recipes.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
    : recipes;

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">
      <Sidenav />

      <div className="lg:ml-[280px] p-6 lg:p-10 transition-all duration-300">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">All Recipes</h1>
            <p className="text-slate-500 dark:text-slate-400">Discover AI-powered premium recipes</p>
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-3 bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 w-full lg:w-[360px] shadow-sm">
            <Search size={18} className="text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none w-full text-black dark:text-white placeholder:text-slate-400 text-sm"
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/5 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400/30 transition-all duration-300 group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => setLiked((p) => ({ ...p, [recipe.id]: !p[recipe.id] }))}
                    className="p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all"
                  >
                    <Heart
                      size={15}
                      className={liked[recipe.id] ? "fill-red-500 text-red-500" : "text-slate-500"}
                    />
                  </button>
                </div>
                <span className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white font-medium">
                  {recipe.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h2 className="text-xl font-bold mb-4">{recipe.title}</h2>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
                    <Clock3 size={15} />
                    <span>{recipe.time}</span>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${difficultyColor[recipe.difficulty]}`}>
                    {recipe.difficulty}
                  </span>

                  <div className="flex items-center gap-1 text-yellow-500 text-sm">
                    <Star size={15} className="fill-yellow-500" />
                    <span className="font-semibold">{recipe.rating}</span>
                  </div>

                  <button
                    onClick={() => setSaved((p) => ({ ...p, [recipe.id]: !p[recipe.id] }))}
                    className={`transition-colors ${saved[recipe.id] ? "text-orange-500" : "text-slate-400 hover:text-orange-500"}`}
                  >
                    <Bookmark size={18} className={saved[recipe.id] ? "fill-orange-500" : ""} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <div className="mt-20 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-xl">
              No recipes found for &quot;{query}&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

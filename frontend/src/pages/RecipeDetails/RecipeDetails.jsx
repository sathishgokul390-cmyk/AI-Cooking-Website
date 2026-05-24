import { useState } from "react";
import { Clock3, Bookmark, Search } from "lucide-react";
import Sidenav from "../../components/navbar/sidenavbar/Sidenav";

export default function RecipeDetails() {
  const [query, setQuery] = useState("");

  const recipes = [
    {
      id: 1,
      title: "Fried Noodles",
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
      time: "20 minutes",
    },
    {
      id: 2,
      title: "Noodle Soup",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      time: "1 hour",
    },
    {
      id: 3,
      title: "Tofu With Sauce",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
      time: "45 minutes",
    },
    {
      id: 4,
      title: "Healthy Salad",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
      time: "15 minutes",
    },
    {
      id: 5,
      title: "Chicken Steak",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
      time: "40 minutes",
    },
    {
      id: 6,
      title: "Chocolate Pancakes",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
      time: "30 minutes",
    },
  ];

  const filtered = query.trim()
    ? recipes.filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
    : recipes;

  return (
    <div className="h-screen bg-[#0B1120] text-white flex overflow-hidden">

      {/* LEFT SIDEBAR */}
      <div className="w-[280px] fixed left-0 h-screen z-50">
        <Sidenav />
      </div>

      {/* RIGHT CONTENT — scrolls independently, footer unaffected */}
      <div
        className="flex-1 ml-[280px] p-6 lg:p-10 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-3">All Recipes</h1>
            <p className="text-slate-400 text-lg">Discover AI-powered premium recipes</p>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#111827] border border-white/10 rounded-2xl py-3 pl-11 pr-4 outline-none text-white placeholder-slate-500 w-64"
            />
          </div>
        </div>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 hover:-translate-y-2 hover:border-orange-400/20 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-8">{recipe.title}</h2>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock3 size={18} />
                    <span>{recipe.time}</span>
                  </div>

                  <button className="text-slate-400 hover:text-orange-400 transition">
                    <Bookmark size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="text-slate-400 col-span-3 text-center mt-10">
              No recipes found for "{query}"
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

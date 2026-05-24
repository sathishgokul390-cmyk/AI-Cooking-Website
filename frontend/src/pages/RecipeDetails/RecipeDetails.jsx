import { useState } from "react";
import {
  Clock3,
  Bookmark,
  Search,
} from "lucide-react";

import Sidenav from "../../components/navbar/sidenavbar/Sidenav";

export default function RecipeDetails() {

  const [query, setQuery] = useState("");

  // RECIPES
  const recipes = [
    {
      id: 1,
      title: "Fried Noodles",
      image:
        "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
      time: "20 minutes",
    },

    {
      id: 2,
      title: "Noodle Soup",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      time: "1 hour",
    },

    {
      id: 3,
      title: "Tofu With Sauce",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
      time: "45 minutes",
    },

    {
      id: 4,
      title: "Healthy Salad",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop",
      time: "15 minutes",
    },

    {
      id: 5,
      title: "Chicken Steak",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
      time: "40 minutes",
    },

    {
      id: 6,
      title: "Chocolate Pancakes",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
      time: "30 minutes",
    },
  ];

  // SEARCH FILTER
  const filteredRecipes = query.trim()
    ? recipes.filter((recipe) =>
        recipe.title
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : recipes;

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-[#0B1120] text-black dark:text-white transition-all duration-300">

      {/* SIDEBAR */}
      <Sidenav />

      {/* MAIN CONTENT */}
      <div
        className="
          lg:ml-[280px]
          p-6 lg:p-10
          transition-all duration-300
        "
      >

        {/* HEADER */}
        <div
          className="
            flex flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            mb-12
          "
        >

          {/* TITLE */}
          <div>
            <h1
              className="
                text-5xl
                font-bold
                mb-3
              "
            >
              All Recipes
            </h1>

            <p
              className="
                text-slate-600
                dark:text-slate-400
                text-lg
              "
            >
              Discover AI-powered premium recipes
            </p>
          </div>

          {/* SEARCH BAR */}
          <div
            className="
              flex items-center gap-3
              bg-white
              dark:bg-black/40
              border
              border-black/10
              dark:border-white/10
              backdrop-blur-xl
              rounded-2xl
              px-5 py-3
              w-full lg:w-[380px]
              shadow-lg
            "
          >
            <Search
              size={20}
              className="
                text-slate-500
                dark:text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search recipes..."
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              className="
                bg-transparent
                outline-none
                w-full
                text-black
                dark:text-white
                placeholder:text-slate-400
              "
            />
          </div>
        </div>

        {/* RECIPE GRID */}
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {filteredRecipes.map((recipe) => (

            <div
              key={recipe.id}
              className="
                bg-white
                dark:bg-black/40
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                border
                border-black/10
                dark:border-white/5
                hover:-translate-y-2
                hover:border-orange-400/30
                transition-all duration-300
                shadow-xl
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                    hover:scale-105
                    transition duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <h2
                  className="
                    text-2xl
                    font-bold
                    mb-8
                  "
                >
                  {recipe.title}
                </h2>

                {/* FOOTER */}
                <div
                  className="
                    flex items-center
                    justify-between
                  "
                >

                  {/* TIME */}
                  <div
                    className="
                      flex items-center gap-2
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    <Clock3 size={18} />
                    <span>{recipe.time}</span>
                  </div>

                  {/* BOOKMARK */}
                  <button
                    className="
                      text-slate-500
                      dark:text-slate-400
                      hover:text-orange-500
                      transition
                    "
                  >
                    <Bookmark size={22} />
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredRecipes.length === 0 && (
          <div className="mt-20 text-center">

            <p
              className="
                text-slate-500
                dark:text-slate-400
                text-xl
              "
            >
              No recipes found for "{query}"
            </p>

          </div>
        )}
      </div>
    </div>
  );
}
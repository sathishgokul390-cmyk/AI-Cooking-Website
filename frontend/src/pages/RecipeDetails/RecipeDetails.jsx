// import React from 'react'

// const RecipeDetails = () => {
//   return (
//     <div>this is RecipeDetails</div>
//   )
// }

// export default RecipeDetails
import {
  Clock3,
  Bookmark,
  Search,
} from "lucide-react";

import Sidenav from "../../components/navbar/sidenavbar/Sidenav";

export default function RecipeDetails() {
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

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">
      
      {/* LEFT SIDEBAR */}
      <div className="w-[280px] fixed left-0 h-screen z-50">
        <Sidenav />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 ml-[280px] p-6 lg:p-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          
          {/* Left */}
          <div>
            <h1 className="text-5xl font-bold mb-3">
              All Recipes
            </h1>

            <p className="text-slate-400 text-lg">
              Discover AI-powered premium recipes
            </p>
          </div>

         
        </div>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="
                bg-black/40
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                border border-white/5
                hover:-translate-y-2
                hover:border-orange-400/20
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="
                    w-full h-[320px]
                    object-cover
                    hover:scale-105
                    transition duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-8">
                  {recipe.title}
                </h2>

                <div className="flex items-center justify-between">
                  
                  {/* Time */}
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock3 size={18} />

                    <span>{recipe.time}</span>
                  </div>

                  {/* Save */}
                  <button
                    className="
                      text-slate-400
                      hover:text-orange-400
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

      </div>
    </div>
  );
}
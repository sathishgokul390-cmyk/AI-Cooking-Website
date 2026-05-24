import {
  Clock3,
  Bookmark,
  ChevronDown,
  Search,
  Menu,
  X,
  Salad,
  Flame,
  Apple,
  HeartPulse,
  UtensilsCrossed,
  ChefHat,
  Globe2,
} from "lucide-react";

import { useState } from "react";

export default function RecipeDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dropdown States
  const [openDropdown, setOpenDropdown] = useState(null);

  // Reusable Filters
  const filters = [
    {
      title: "Cooking Time",
      icon: Clock3,
      color: "text-orange-400",
      items: [
        "Under 15 mins",
        "15 - 30 mins",
        "30 - 60 mins",
        "1+ hour",
      ],
    },

    {
      title: "Ingredients",
      icon: Salad,
      color: "text-green-400",
      items: [
        "Chicken",
        "Rice",
        "Egg",
        "Vegetables",
        "Seafood",
      ],
    },

    {
      title: "Calories",
      icon: Flame,
      color: "text-red-400",
      items: [
        "Under 200",
        "200 - 400",
        "400 - 600",
        "600+",
      ],
    },

    {
      title: "Diet",
      icon: Apple,
      color: "text-lime-400",
      items: [
        "Vegetarian",
        "Vegan",
        "Keto",
        "Low Carb",
      ],
    },

    {
      title: "Health",
      icon: HeartPulse,
      color: "text-pink-400",
      items: [
        "High Protein",
        "Low Sugar",
        "Balanced",
      ],
    },

    {
      title: "Meal",
      icon: UtensilsCrossed,
      color: "text-yellow-400",
      items: [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snacks",
      ],
    },

    {
      title: "Dish",
      icon: ChefHat,
      color: "text-cyan-400",
      items: [
        "Soup",
        "Pasta",
        "Burger",
        "Pizza",
      ],
    },

    {
      title: "Cuisine",
      icon: Globe2,
      color: "text-blue-400",
      items: [
        "Indian",
        "Italian",
        "American",
        "Asian",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white flex">
      {/* Sidebar */}
      <div
        className={`
          fixed lg:relative z-50 top-0 left-0 h-screen w-[320px]
          bg-black/40 border-r border-white/10
          transform transition-transform duration-300 flex flex-col
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Mobile Close */}
        <div className="lg:hidden flex justify-end p-5">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="p-6 overflow-y-scroll flex-1" style={{ scrollbarWidth: "none" }}>
          {/* Search */}
          <div className="relative mb-10">
            <Search
              size={18}
              className="absolute left-4 top-4 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full bg-[#111827] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none"
            />
          </div>

          {/* Filters */}
          {filters.map((filter, index) => {
            const Icon = filter.icon;
            const isOpen = openDropdown === filter.title;

            return (
              <div key={index} className="mb-4">
                {/* Button */}
                <button
                  onClick={() =>
                    setOpenDropdown(
                      isOpen ? null : filter.title
                    )
                  }
                  className="
                    w-full flex items-center justify-between
                    px-4 py-4 rounded-2xl
                    bg-[#111827]
                    border border-white/5
                    hover:bg-[#1E293B]
                    hover:border-white/10
                    transition-all duration-300
                  "
                >
                  {/* Left */}
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className={filter.color}
                    />

                    <span className="text-slate-300 font-medium">
                      {filter.title}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${isOpen
                      ? "rotate-180 text-orange-400"
                      : "text-slate-400"
                      }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen
                      ? "max-h-[500px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="space-y-3 pl-2">
                    {filter.items.map((item, idx) => (
                      <button
                        key={idx}
                        className="
                          w-full text-left
                          bg-[#111827]
                          hover:bg-[#1E293B]
                          border border-white/5
                          hover:border-orange-400/20
                          px-4 py-3 rounded-xl
                          transition-all duration-300
                          text-slate-300 hover:text-white
                        "
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
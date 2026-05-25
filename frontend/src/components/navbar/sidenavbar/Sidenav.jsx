import {
  Clock3,
  ChevronDown,
  Search,
  Salad,
  Flame,
  Apple,
  HeartPulse,
  UtensilsCrossed,
  ChefHat,
  Globe2,
} from "lucide-react";

import { useState } from "react";

export default function Sidenav() {

  // ACTIVE DROPDOWN
  const [openDropdown, setOpenDropdown] =
    useState(null);

  // SEARCH STATE
  const [search, setSearch] =
    useState("");

  // FILTERS
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
    <aside
      className="
        fixed left-0
        w-[280px]
        h-screen
        bg-white
        dark:bg-[#081028]
        border-r
        border-black/10
        dark:border-white/10
        overflow-y-auto
        overflow-x-hidden
        z-50
        transition-all duration-300
      "
      style={{
        scrollbarWidth: "none",
      }}
    >

      {/* HIDE SCROLLBAR */}
      <style>
        {`
          aside::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* CONTENT */}
      <div
        className="
          px-6 py-6
          flex flex-col
          min-h-screen
        "
      >

        {/* TITLE */}
        <div className="mb-8">

          <h1
            className="
              text-3xl font-bold
              text-orange-500
            "
          >
            Filters
          </h1>

          <p
            className="
              text-slate-500
              dark:text-slate-400
              mt-2
            "
          >
            Discover perfect recipes
          </p>

        </div>

        {/* SEARCH */}
        <div className="relative mb-6">

          <Search
            size={20}
            className="
              absolute
              left-5 top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search filters..."
            className="
              w-full
              bg-slate-100
              dark:bg-[#0F172A]
              border
              border-black/10
              dark:border-white/10
              rounded-2xl
              py-4 pl-14 pr-4
              outline-none
              text-black
              dark:text-white
              placeholder:text-slate-500
              focus:border-orange-400/40
              transition-all duration-300
            "
          />
        </div>

        {/* FILTERS */}
        <div className="flex-1">

          {filters.map((filter, index) => {

            const Icon = filter.icon;

            const isOpen =
              openDropdown === filter.title;

            return (
              <div key={index}>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    setOpenDropdown(
                      isOpen
                        ? null
                        : filter.title
                    )
                  }
                  className="
                    group
                    w-full
                    flex items-center
                    justify-between
                    py-5
                    border-b
                    border-black/10
                    dark:border-white/10
                    hover:border-orange-400/30
                    transition-all duration-300
                  "
                >

                  {/* LEFT */}
                  <div
                    className="
                      flex items-center gap-4
                    "
                  >

                    {/* ICON */}
                    <Icon
                      size={20}
                      className={`
                        ${filter.color}
                        group-hover:scale-110
                        transition-all duration-300
                      `}
                    />

                    {/* TITLE */}
                    <span
                      className="
                        text-slate-700
                        dark:text-slate-300
                        font-medium
                        group-hover:text-orange-500
                        transition-all duration-300
                      "
                    >
                      {filter.title}
                    </span>
                  </div>

                  {/* ARROW */}
                  <ChevronDown
                    size={18}
                    className={`
                      transition-all duration-300
                      ${
                        isOpen
                          ? "rotate-180 text-orange-500"
                          : "text-slate-500"
                      }
                    `}
                  />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`
                    overflow-hidden
                    transition-all duration-500
                    ${
                      isOpen
                        ? "max-h-[400px] opacity-100 py-3"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >

                  <div
                    className="
                      space-y-2
                      pl-10
                    "
                  >

                    {filter.items.map(
                      (item, idx) => (

                        <button
                          key={idx}
                          className="
                            block
                            w-full
                            text-left
                            py-2
                            text-slate-500
                            dark:text-slate-400
                            hover:text-orange-500
                            transition-all duration-300
                          "
                        >
                          {item}
                        </button>
                      )
                    )}

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div
          className="
            mt-10
            pt-6
            border-t
            border-black/10
            dark:border-white/10
          "
        >

          <button
            className="
              w-full
              py-4
              rounded-2xl
              bg-orange-500
              hover:bg-orange-400
              text-white
              font-semibold
              transition-all duration-300
              shadow-lg
              shadow-orange-500/20
            "
          >
            Apply Filters
          </button>

        </div>
      </div>
    </aside>
  );
}

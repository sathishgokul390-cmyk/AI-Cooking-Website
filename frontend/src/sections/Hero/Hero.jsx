// export default function Hero() {
//   return (
//     <section className='max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center'>
//       <div>
//         <div className='inline-flex px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 dark:text-orange-300 mb-6'>
//           ✨ AI Powered Cooking Platform
//         </div>

//         <h1 className='text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white'>
//           Cook Smarter
//           <br />
//           with <span className='text-orange-400'>AI</span>
//         </h1>

//         <p className='text-gray-500 dark:text-slate-400 text-lg mb-8'>
//           Generate recipes instantly using ingredients you already have.
//         </p>

//         <div className='bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-4'>
//           <textarea
//             placeholder='Egg, rice, onion...'
//             className='w-full h-32 bg-transparent outline-none resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500'
//           />

//           <button className='mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-semibold'>
//             Generate Recipe
//           </button>
//         </div>
//       </div>

//       <img
//         src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
//         alt='Delicious food'
//         className='rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl'
//       />
//     </section>
//   )
// }
import {
  Clock3,
  Star,
  Search,
  Sparkles,
  Heart,
} from "lucide-react";


export default function Home() {

  // CATEGORIES
  const categories = [
    {
      title: "Breakfast",
      recipes: "25 Recipes",
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Lunch",
      recipes: "40 Recipes",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Dinner",
      recipes: "60 Recipes",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Desserts",
      recipes: "30 Recipes",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Snacks",
      recipes: "35 Recipes",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Drinks",
      recipes: "20 Recipes",
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a90bb918?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // RECIPES
  const recipes = [
    {
      title: "Chicken Biryani",
      image:
        "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=1200&auto=format&fit=crop",
      time: "45 min",
      rating: "4.8",
    },

    {
      title: "Paneer Butter Masala",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop",
      time: "30 min",
      rating: "4.7",
    },

    {
      title: "Chocolate Lava Cake",
      image:
        "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=1200&auto=format&fit=crop",
      time: "25 min",
      rating: "4.9",
    },

    {
      title: "Veg Sandwich",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop",
      time: "15 min",
      rating: "4.6",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[#F9F7F4]
        dark:bg-[#0B1120]
        text-black
        dark:text-white
        transition-all duration-300
      "
    >

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HERO */}
        <div
          className="
            grid lg:grid-cols-2
            gap-16
            items-center
            mb-24
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                text-orange-500
                text-3xl
                font-semibold
                mb-5
              "
            >
              Hello, Foodie! 👋
            </p>

            <h1
              className="
                text-6xl lg:text-7xl
                font-bold
                leading-tight
                mb-6
              "
            >
              What are you cooking today?
            </h1>

            <p
              className="
                text-slate-600
                dark:text-slate-400
                text-xl
                mb-10
                max-w-xl
              "
            >
              Find, cook and enjoy delicious recipes
              with the power of AI.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5">

              <button
                className="
                  px-8 py-4
                  rounded-2xl
                  bg-orange-500
                  hover:bg-orange-400
                  text-white
                  font-semibold
                  transition-all duration-300
                  shadow-xl
                  shadow-orange-500/20
                "
              >
                Explore Recipes
              </button>

              <button
                className="
                  px-8 py-4
                  rounded-2xl
                  border
                  border-black/10
                  dark:border-white/10
                  bg-white
                  dark:bg-black/30
                  hover:border-orange-400/30
                  transition-all duration-300
                "
              >
                Ask AI Chef
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"
              alt="Food"
              className="
                w-full
                h-[520px]
                object-cover
                rounded-[40px]
                shadow-2xl
              "
            />

            {/* TOP CARD */}
            <div
              className="
                absolute
                top-6 right-6
                bg-white
                dark:bg-black/70
                backdrop-blur-xl
                border
                border-black/10
                dark:border-white/10
                rounded-2xl
                px-6 py-4
                shadow-xl
              "
            >

              <p className="font-semibold mb-1">
                🔥 Quick & Easy
              </p>

              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                20 Recipes
              </p>

            </div>

            {/* BOTTOM CARD */}
            <div
              className="
                absolute
                bottom-6 left-6
                bg-white
                dark:bg-black/70
                backdrop-blur-xl
                border
                border-black/10
                dark:border-white/10
                rounded-2xl
                px-6 py-4
                shadow-xl
              "
            >

              <p className="font-semibold mb-1">
                🔥 Popular
              </p>

              <p
                className="
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                50 Recipes
              </p>

            </div>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mb-20">

          {/* HEADER */}
          <div
            className="
              flex items-center
              justify-between
              mb-8
            "
          >

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Categories
            </h2>

            <button
              className="
                text-orange-500
                hover:text-orange-400
              "
            >
              View all
            </button>

          </div>

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              gap-6
            "
          >

            {categories.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-black/40
                  border
                  border-black/10
                  dark:border-white/10
                  rounded-3xl
                  p-5
                  text-center
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-24 h-24
                    rounded-full
                    object-cover
                    mx-auto mb-4
                  "
                />

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                    mt-1
                  "
                >
                  {item.recipes}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* POPULAR RECIPES */}
        <div className="mb-20">

          {/* HEADER */}
          <div
            className="
              flex items-center
              justify-between
              mb-8
            "
          >

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Popular Recipes
            </h2>

            <button
              className="
                text-orange-500
                hover:text-orange-400
              "
            >
              View all
            </button>

          </div>

          {/* GRID */}
          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            "
          >

            {recipes.map((recipe, index) => (

              <div
                key={index}
                className="
                  bg-white
                  dark:bg-black/40
                  border
                  border-black/10
                  dark:border-white/10
                  rounded-3xl
                  overflow-hidden
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >

                {/* IMAGE */}
                <div className="relative">

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="
                      w-full
                      h-[240px]
                      object-cover
                    "
                  />

                  {/* FAVORITE */}
                  <button
                    className="
                      absolute
                      top-4 right-4
                      p-2
                      rounded-full
                      bg-black/40
                      backdrop-blur-xl
                      text-white
                    "
                  >
                    <Heart size={18} />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3
                    className="
                      text-xl
                      font-bold
                      mb-4
                    "
                  >
                    {recipe.title}
                  </h3>

                  <div
                    className="
                      flex items-center
                      justify-between
                    "
                  >

                    <div
                      className="
                        flex items-center gap-2
                        text-slate-500
                        dark:text-slate-400
                      "
                    >

                      <Clock3 size={18} />

                      <span>{recipe.time}</span>

                    </div>

                    <div
                      className="
                        flex items-center gap-1
                        text-yellow-500
                      "
                    >

                      <Star size={18} />

                      <span>{recipe.rating}</span>

                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* AI CHEF */}
        <div
          className="
            bg-white
            dark:bg-black/40
            border
            border-black/10
            dark:border-white/10
            rounded-[40px]
            p-10
            flex flex-col lg:flex-row
            items-center
            justify-between
            gap-10
          "
        >

          {/* LEFT */}
          <div>

            <div
              className="
                flex items-center gap-3
                mb-4
              "
            >

              <Sparkles
                size={26}
                className="text-orange-500"
              />

              <h2
                className="
                  text-4xl
                  font-bold
                "
              >
                Ask AI Chef
              </h2>

            </div>

            <p
              className="
                text-slate-600
                dark:text-slate-400
                text-lg
                max-w-xl
                mb-8
              "
            >
              Get recipe suggestions, cooking tips
              and personalized recommendations.
            </p>

            <button
              className="
                px-8 py-4
                rounded-2xl
                bg-orange-500
                hover:bg-orange-400
                text-white
                font-semibold
                transition-all duration-300
                shadow-xl
                shadow-orange-500/20
              "
            >
              Start Chat
            </button>

          </div>

          {/* RIGHT */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI Chef"
            className="
              w-[260px]
              object-contain
            "
          />

        </div>
      </div>
    </div>
  );
}
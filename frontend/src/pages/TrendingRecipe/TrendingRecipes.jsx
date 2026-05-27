import { useState } from "react";
import { motion } from "framer-motion";
import { Clock3, Star, Heart, Flame, TrendingUp } from "lucide-react";
import {
  blurFade,
  fadeUp,
  fadeUpStagger,
  zoomOut,
  scaleFade,
} from "../../hooks/useScrollAnimation";

const trending = [
  { id: 1, title: "Chicken Biryani", image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=600&auto=format&fit=crop", time: "45 min", rating: "4.8", reviews: 320, tag: "#1 This Week" },
  { id: 2, title: "Avocado Toast", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?q=80&w=600&auto=format&fit=crop", time: "10 min", rating: "4.6", reviews: 210, tag: "Trending" },
  { id: 3, title: "Chocolate Lava Cake", image: "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=600&auto=format&fit=crop", time: "25 min", rating: "4.9", reviews: 415, tag: "Most Loved" },
  { id: 4, title: "Paneer Butter Masala", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop", time: "30 min", rating: "4.7", reviews: 180, tag: "Trending" },
  { id: 5, title: "Veg Sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop", time: "15 min", rating: "4.5", reviews: 98, tag: "Quick Pick" },
  { id: 6, title: "Pasta Carbonara", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop", time: "20 min", rating: "4.8", reviews: 275, tag: "Trending" },
];

export default function TrendingRecipes() {
  const [liked, setLiked] = useState({});

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <motion.div
          className="flex items-center gap-3 mb-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <TrendingUp size={28} className="text-orange-500" />
          </motion.span>
          <h1 className="text-4xl font-bold">Trending Recipes</h1>
        </motion.div>

        <motion.p {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="text-slate-500 dark:text-slate-400 mb-12">
          What the community is cooking right now
        </motion.p>

        {/* TOP PICK — zoom-out reveal */}
        <motion.div
          {...zoomOut}
          className="relative rounded-[32px] overflow-hidden mb-14 group cursor-pointer"
        >
          <img
            src={trending[0].image}
            alt={trending[0].title}
            className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <motion.div
            className="absolute bottom-8 left-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-orange-500 text-white font-semibold mb-3">
              <Flame size={12} /> {trending[0].tag}
            </span>
            <h2 className="text-4xl font-bold text-white mb-2">{trending[0].title}</h2>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1.5"><Clock3 size={14} />{trending[0].time}</span>
              <span className="flex items-center gap-1.5"><Star size={14} className="fill-yellow-400 text-yellow-400" />{trending[0].rating}</span>
              <span>{trending[0].reviews} reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* GRID — staggered fade-up */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {trending.slice(1).map((recipe) => (
            <motion.div
              key={recipe.id}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.94 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400/30 transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-52 object-cover group-hover:scale-108 transition-transform duration-500"
                  style={{ "--tw-scale-x": 1.08, "--tw-scale-y": 1.08 }}
                />
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setLiked((p) => ({ ...p, [recipe.id]: !p[recipe.id] }))}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all"
                >
                  <Heart
                    size={15}
                    className={liked[recipe.id] ? "fill-red-500 text-red-500" : "text-slate-500"}
                  />
                </motion.button>
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

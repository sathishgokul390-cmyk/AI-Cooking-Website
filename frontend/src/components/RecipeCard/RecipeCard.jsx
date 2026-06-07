import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Clock3, Star, Heart } from "lucide-react";

const RecipeCard = React.memo(function RecipeCard({ recipe, index, liked, onToggleLike }) {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group"
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    loading="lazy"
                    className="w-full h-36 sm:h-44 md:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = "none"; }}
                />
                <button
                    onClick={() => onToggleLike(index)}
                    aria-label="Toggle favorite"
                    className="absolute top-2 left-2 sm:top-3 sm:left-3 p-1.5 sm:p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                >
                    <Heart
                        size={13}
                        className={liked[index] ? "fill-red-500 text-red-500" : "text-slate-400"}
                    />
                </button>

                {/* Rating pill — visible on mobile too */}
                <div className="absolute bottom-2 right-2 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                    <Star size={9} className="fill-yellow-400 text-yellow-400" />
                    {recipe.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4">
                <h3 className="font-bold text-[13px] sm:text-base mb-2 truncate">{recipe.title}</h3>

                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                        <Clock3 size={11} />
                        <span>{recipe.time}</span>
                    </div>
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-[#3a7d44] dark:text-green-400 font-medium text-[10px] sm:text-xs">
                        {recipe.difficulty}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-yellow-500 text-[10px] sm:text-xs">
                        <Star size={11} className="fill-yellow-500" />
                        <span className="font-semibold text-black dark:text-white">{recipe.rating}</span>
                        <span className="text-slate-400">({recipe.reviews})</span>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.94 }}
                        onClick={() => navigate("/recipe/detail", { state: { recipe } })}
                        className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#6BA539] hover:bg-[#568a2e] text-white shadow-sm transition-colors duration-200"
                    >
                        View
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
});

export default RecipeCard;

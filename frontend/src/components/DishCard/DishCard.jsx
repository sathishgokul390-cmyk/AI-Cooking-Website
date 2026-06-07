import React from "react";
import { motion } from "framer-motion";
import { Clock3, Flame, Star, Heart } from "lucide-react";

const difficultyClass = {
    Easy: "bg-green-100 dark:bg-green-500/15 text-green-600 dark:text-green-400",
    Medium: "bg-yellow-100 dark:bg-yellow-500/15 text-yellow-600 dark:text-yellow-400",
    Hard: "bg-red-100 dark:bg-red-500/15 text-red-600 dark:text-red-400",
};

const DishCard = React.memo(function DishCard({ dish, index, liked, onToggleLike }) {
    const likeKey = `cat-${index}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: index * 0.025 }}
            whileHover={{ y: -4, transition: { duration: 0.18 } }}
            className="group rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-black/8 dark:border-white/10 shadow-sm hover:shadow-lg hover:shadow-[#6BA539]/10 transition-shadow duration-300 cursor-pointer"
        >
            {/* Image */}
            <div className="relative overflow-hidden bg-gray-100 dark:bg-white/5" style={{ paddingTop: "62%" }}>
                <img
                    src={dish.image}
                    alt={dish.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Rating pill */}
                <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                    <Star size={9} className="fill-yellow-400 text-yellow-400" />
                    {dish.rating}
                </div>

                {/* Heart button */}
                <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={(e) => { e.stopPropagation(); onToggleLike(likeKey); }}
                    aria-label="Toggle favorite"
                    className="absolute top-1.5 right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center shadow"
                >
                    <Heart
                        size={11}
                        className={liked[likeKey] ? "fill-red-500 text-red-500" : "text-gray-400"}
                    />
                </motion.button>
            </div>

            {/* Content */}
            <div className="p-2.5 sm:p-3.5">
                <h4 className="font-bold text-[12px] sm:text-sm text-gray-900 dark:text-white truncate mb-1.5">
                    {dish.title}
                </h4>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-2.5">
                    <span className="flex items-center gap-0.5">
                        <Clock3 size={10} className="text-orange-400" />
                        {dish.time}
                    </span>
                    <span className="flex items-center gap-0.5">
                        <Flame size={10} className="text-red-400" />
                        {dish.calories} cal
                    </span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold ${difficultyClass[dish.difficulty] ?? difficultyClass.Easy}`}>
                        {dish.difficulty}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-1">
                    <span className="text-[13px] sm:text-sm font-extrabold text-orange-500">
                        ${dish.price.toFixed(2)}
                    </span>
                    <motion.button
                        whileTap={{ scale: 0.94 }}
                        className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#6BA539] hover:bg-[#568a2e] text-white shadow-sm transition-colors duration-200"
                    >
                        View
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
});

export default DishCard;

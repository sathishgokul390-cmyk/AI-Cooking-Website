import React from "react";
import { motion } from "framer-motion";

const CategoryCard = React.memo(function CategoryCard({ category, index, isActive, onClick }) {
    return (
        <button
            role="tab"
            aria-selected={isActive}
            onClick={() => onClick(category.title)}
            className={`
        relative flex-shrink-0 flex items-center gap-1.5
        px-3 sm:px-5 py-3.5 sm:py-4
        text-[13px] sm:text-sm font-semibold whitespace-nowrap
        transition-colors duration-200 focus:outline-none
        ${isActive
                    ? "text-[#6BA539]"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                }
      `}
        >
            {category.title}
            {isActive && (
                <motion.span
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#6BA539]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </button>
    );
});

export default CategoryCard;

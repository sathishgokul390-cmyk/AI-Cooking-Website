import { Heart, Clock3, Star } from "lucide-react";

const saved = [
    {
        id: 1,
        title: "Chicken Biryani",
        image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=600&auto=format&fit=crop",
        time: "45 min",
        difficulty: "Medium",
        rating: "4.8",
    },
    {
        id: 2,
        title: "Chocolate Lava Cake",
        image: "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=600&auto=format&fit=crop",
        time: "25 min",
        difficulty: "Easy",
        rating: "4.9",
    },
    {
        id: 3,
        title: "Paneer Butter Masala",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop",
        time: "30 min",
        difficulty: "Easy",
        rating: "4.7",
    },
    {
        id: 4,
        title: "Avocado Toast",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?q=80&w=600&auto=format&fit=crop",
        time: "10 min",
        difficulty: "Easy",
        rating: "4.6",
    },
];

const difficultyColor = {
    Easy: "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400",
    Medium: "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    Hard: "bg-red-50 dark:bg-red-500/10 text-red-500",
};

export default function Favorites() {
    return (
        <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0B1120] text-black dark:text-white transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* HEADER */}
                <div className="flex items-center gap-3 mb-3">
                    <Heart size={28} className="fill-red-500 text-red-500" />
                    <h1 className="text-4xl font-bold">Favorites</h1>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-10">Recipes you&apos;ve saved to cook again</p>

                {saved.length === 0 ? (
                    <div className="text-center py-24">
                        <Heart size={48} className="text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-500 dark:text-slate-400 text-lg">No favorites yet</p>
                        <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">
                            Browse recipes and tap the heart to save them here
                        </p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {saved.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/5 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400/30 transition-all duration-300 group"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <button className="absolute top-3 left-3 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm">
                                        <Heart size={15} className="fill-red-500 text-red-500" />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-base mb-3">{recipe.title}</h3>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                                        <Clock3 size={13} />
                                        <span>{recipe.time}</span>
                                        <span className={`px-2 py-0.5 rounded-full font-medium ${difficultyColor[recipe.difficulty]}`}>
                                            {recipe.difficulty}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                                        <Star size={13} className="fill-yellow-500" />
                                        <span className="font-semibold text-black dark:text-white">{recipe.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

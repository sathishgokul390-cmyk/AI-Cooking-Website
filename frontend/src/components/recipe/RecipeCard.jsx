import { useNavigate } from "react-router-dom";
import { Clock3, Flame } from "lucide-react";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 group">
      <div className="overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{recipe.title}</h3>

        <div className="flex justify-between text-slate-400 mb-4 text-sm">
          <span className="flex items-center gap-1"><Clock3 size={14} />{recipe.time || recipe.cookingTime}</span>
          <span className="flex items-center gap-1"><Flame size={14} />{recipe.calories} kcal</span>
        </div>

        <button
          onClick={() => navigate(`/recipe/${recipe.id}`)}
          className="w-full bg-orange-500 hover:bg-orange-400 py-3 rounded-2xl font-semibold transition-colors duration-200"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

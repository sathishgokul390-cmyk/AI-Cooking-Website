import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock3,
  Flame,
  ChefHat,
  Globe2,
  ExternalLink,
  Search,
  SlidersHorizontal,
  AlertCircle,
  Loader2,
  UtensilsCrossed,
} from "lucide-react";
import Sidenav from "../../components/navbar/sidenavbar/Sidenav";
import { searchRecipes } from "../../services/edamamApi";

// ─────────────────────────────────────────────────────────────────────────────
// Helper: capitalise first letter of each word
// ─────────────────────────────────────────────────────────────────────────────
function titleCase(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

// ─────────────────────────────────────────────────────────────────────────────
// RecipeCard — one card in the results grid
// ─────────────────────────────────────────────────────────────────────────────
function RecipeCard({ recipe }) {
  return (
    <a
      href={recipe.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white dark:bg-black/40 border border-black/10 dark:border-white/5 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-400/30 transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden shrink-0">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Open-in-new badge */}
        <span className="absolute top-3 right-3 flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={11} />
          View Recipe
        </span>

        {/* Cuisine pill */}
        {recipe.cuisineType.length > 0 && (
          <span className="absolute bottom-3 left-3 text-xs px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white font-medium">
            {titleCase(recipe.cuisineType[0])}
          </span>
        )}
      </div>

      {/* BODY */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title */}
        <h2 className="text-base font-bold leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
          {recipe.title}
        </h2>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
          {recipe.totalTime > 0 && (
            <span className="flex items-center gap-1">
              <Clock3 size={13} />
              {recipe.totalTime} min
            </span>
          )}
          <span className="flex items-center gap-1">
            <Flame size={13} className="text-orange-400" />
            {recipe.calories} kcal / serving
          </span>
          {recipe.mealType.length > 0 && (
            <span className="flex items-center gap-1">
              <UtensilsCrossed size={13} className="text-yellow-400" />
              {titleCase(recipe.mealType[0])}
            </span>
          )}
        </div>

        {/* Dish / source row */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-black/5 dark:border-white/5 text-xs text-slate-400 dark:text-slate-500">
          <span className="flex items-center gap-1">
            <ChefHat size={12} />
            {recipe.source}
          </span>
          {recipe.dishType.length > 0 && (
            <span className="flex items-center gap-1">
              <Globe2 size={12} />
              {titleCase(recipe.dishType[0])}
            </span>
          )}
        </div>

        {/* Macro bar */}
        <div className="flex gap-2 mt-1">
          {[
            { label: "Protein", value: `${recipe.nutrients.protein}g`, color: "bg-blue-500/10 text-blue-500 dark:text-blue-400" },
            { label: "Carbs", value: `${recipe.nutrients.carbs}g`, color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
            { label: "Fat", value: `${recipe.nutrients.fat}g`, color: "bg-rose-500/10 text-rose-500 dark:text-rose-400" },
          ].map(({ label, value, color }) => (
            <span key={label} className={`flex-1 text-center text-xs px-2 py-1 rounded-xl font-medium ${color}`}>
              {label} {value}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Loading skeleton
// ─────────────────────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/5 rounded-3xl overflow-hidden animate-pulse">
      <div className="h-[220px] bg-slate-200 dark:bg-slate-800" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full w-1/2" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full w-2/3" />
        <div className="flex gap-2 pt-2">
          <div className="flex-1 h-7 bg-slate-200 dark:bg-slate-700 rounded-xl" />
          <div className="flex-1 h-7 bg-slate-200 dark:bg-slate-700 rounded-xl" />
          <div className="flex-1 h-7 bg-slate-200 dark:bg-slate-700 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Active filter pills strip — shown above the grid so the user knows what's
// currently applied
// ─────────────────────────────────────────────────────────────────────────────
function ActiveFilterStrip({ appliedFilters }) {
  const pills = Object.entries(appliedFilters).flatMap(([key, values]) =>
    values.map((v) => ({ key, value: v }))
  );
  if (pills.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {pills.map(({ key, value }) => (
        <span
          key={`${key}-${value}`}
          className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-medium"
        >
          {value}
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────
export default function RecipeDetails() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  // Called by Sidenav when the user clicks "Apply Filters"
  const handleApplyFilters = useCallback(async (selectedFilters) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);
    setAppliedFilters(selectedFilters);

    try {
      const results = await searchRecipes(selectedFilters);
      setRecipes(results);
    } catch (err) {
      setError(err.message);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const totalApplied = Object.values(appliedFilters).flat().length;

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">

      {/* Sidebar — receives the callback so Apply Filters triggers the API */}
      <Sidenav onApplyFilters={handleApplyFilters} />

      {/* Main content — offset by sidebar width on desktop */}
      <div className="lg:ml-[280px] p-6 lg:p-10 transition-all duration-300">

        {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">All Recipes</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Use the filters on the left to find recipes that match your preferences.
          </p>
        </div>

        {/* ── APPLIED FILTER PILLS ─────────────────────────────────────────── */}
        <ActiveFilterStrip appliedFilters={appliedFilters} />

        {/* ── LOADING STATE ────────────────────────────────────────────────── */}
        {loading && (
          <div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6">
              <Loader2 size={18} className="animate-spin text-orange-500" />
              <span className="text-sm">Finding recipes for your filters…</span>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        )}

        {/* ── ERROR STATE ──────────────────────────────────────────────────── */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <AlertCircle size={28} className="text-red-500" />
            </div>
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm leading-relaxed">
              {error}
            </p>
          </div>
        )}

        {/* ── RESULTS GRID ─────────────────────────────────────────────────── */}
        {!loading && !error && recipes.length > 0 && (
          <div>
            {/* result count */}
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
              Showing <span className="font-semibold text-orange-500">{recipes.length}</span> recipes
              {totalApplied > 0 && ` for ${totalApplied} active filter${totalApplied > 1 ? "s" : ""}`}
            </p>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        )}

        {/* ── EMPTY STATE — searched but no results ────────────────────────── */}
        {!loading && !error && hasSearched && recipes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">
              <Search size={28} className="text-orange-500" />
            </div>
            <h2 className="text-xl font-semibold">No recipes found</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm leading-relaxed">
              No recipes matched your current filters. Try removing a few constraints — for example, fewer health labels or a wider calorie range.
            </p>
          </div>
        )}

        {/* ── IDLE STATE — nothing searched yet ───────────────────────────── */}
        {!loading && !error && !hasSearched && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">
              <SlidersHorizontal size={28} className="text-orange-500" />
            </div>
            <h2 className="text-xl font-semibold">Pick your filters</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm leading-relaxed">
              Select ingredients, cuisine, diet type, meal type and more from the sidebar,
              then hit <span className="font-semibold text-orange-500">Apply Filters</span> to
              see matching recipes from Edamam's database.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

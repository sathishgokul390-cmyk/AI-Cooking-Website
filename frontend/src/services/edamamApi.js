/**
 * Edamam Recipe Search API — free developer plan
 * Docs: https://developer.edamam.com/edamam-docs-recipe-api
 *
 * Free tier: 10,000 calls/month, max 20 results per request.
 * Credentials are read from REACT_APP_EDAMAM_APP_ID / REACT_APP_EDAMAM_APP_KEY.
 */

const BASE_URL = "https://api.edamam.com/api/recipes/v2";
const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

// ---------------------------------------------------------------------------
// Calorie range mapping
// Sidenav stores human-readable strings; Edamam expects "min-max" or "min%2B"
// ---------------------------------------------------------------------------
const CALORIE_MAP = {
  "Under 200": "0-200",
  "200 - 400": "200-400",
  "400 - 600": "400-600",
  "600+": "600%2B", // URL-encoded "+"
};

// ---------------------------------------------------------------------------
// Cooking-time range mapping (Edamam "time" param, minutes)
// ---------------------------------------------------------------------------
const TIME_MAP = {
  "Under 15 mins": "1-15",
  "15 - 30 mins": "15-30",
  "30 - 60 mins": "30-60",
  "1+ hour": "60%2B",
};

// ---------------------------------------------------------------------------
// buildEdamamParams
//
// Converts the selectedFilters object from Sidenav into URLSearchParams for
// the Edamam v2 Recipe Search endpoint.
//
// selectedFilters shape (all keys optional):
//   {
//     q:           string[],   // ingredient keywords → joined as search query
//     calories:    string[],   // e.g. ["Under 200"]
//     time:        string[],   // e.g. ["15 - 30 mins"]
//     diet:        string[],   // e.g. ["balanced", "high-protein"]
//     health:      string[],   // e.g. ["vegan", "dairy-free"]
//     mealType:    string[],   // e.g. ["Lunch", "Dinner"]
//     dishType:    string[],   // e.g. ["Main course"]
//     cuisineType: string[],   // e.g. ["Indian"]
//   }
// ---------------------------------------------------------------------------
export function buildEdamamParams(selectedFilters) {
  const params = new URLSearchParams();

  params.set("type", "public");
  params.set("app_id", APP_ID);
  params.set("app_key", APP_KEY);

  // ── q (ingredients / keyword) ──────────────────────────────────────────────
  const ingredients = selectedFilters.q || [];
  // Join multiple ingredients so "Chicken" + "Rice" → "Chicken Rice"
  const queryString = ingredients.length > 0 ? ingredients.join(" ") : "recipe";
  params.set("q", queryString);

  // ── calories ──────────────────────────────────────────────────────────────
  const calorieSelections = selectedFilters.calories || [];
  if (calorieSelections.length > 0) {
    // Use the first selection only (Edamam accepts one range)
    const range = CALORIE_MAP[calorieSelections[0]];
    if (range) params.set("calories", range);
  }

  // ── time ──────────────────────────────────────────────────────────────────
  const timeSelections = selectedFilters.time || [];
  if (timeSelections.length > 0) {
    const range = TIME_MAP[timeSelections[0]];
    if (range) params.set("time", range);
  }

  // ── diet (repeatable) ─────────────────────────────────────────────────────
  for (const d of selectedFilters.diet || []) {
    params.append("diet", d.toLowerCase());
  }

  // ── health (repeatable) ───────────────────────────────────────────────────
  for (const h of selectedFilters.health || []) {
    params.append("health", h.toLowerCase());
  }

  // ── mealType (repeatable) ─────────────────────────────────────────────────
  for (const m of selectedFilters.mealType || []) {
    params.append("mealType", m.toLowerCase());
  }

  // ── dishType (repeatable) ─────────────────────────────────────────────────
  for (const d of selectedFilters.dishType || []) {
    // Edamam expects lowercase e.g. "main course"
    params.append("dishType", d.toLowerCase());
  }

  // ── cuisineType (repeatable) ──────────────────────────────────────────────
  for (const c of selectedFilters.cuisineType || []) {
    params.append("cuisineType", c.toLowerCase());
  }

  return params;
}

// ---------------------------------------------------------------------------
// searchRecipes
//
// Calls the Edamam API and returns a normalised array of recipe objects.
// Throws an Error with a user-friendly message on failure.
// ---------------------------------------------------------------------------
export async function searchRecipes(selectedFilters) {
  if (!APP_ID || !APP_KEY || APP_ID === "YOUR_EDAMAM_APP_ID") {
    throw new Error(
      "Edamam API credentials are missing. Add REACT_APP_EDAMAM_APP_ID and REACT_APP_EDAMAM_APP_KEY to your .env file."
    );
  }

  const params = buildEdamamParams(selectedFilters);
  const url = `${BASE_URL}?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid Edamam API credentials. Check your App ID and App Key.");
    }
    if (response.status === 429) {
      throw new Error("Edamam API rate limit reached. Try again later.");
    }
    throw new Error(`Edamam API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const hits = data.hits || [];

  // Normalise to a flat recipe shape used by the UI
  return hits.map(({ recipe }) => ({
    id: recipe.uri,
    title: recipe.label,
    image: recipe.image,
    source: recipe.source,
    url: recipe.url,
    calories: Math.round(recipe.calories / (recipe.yield || 1)),
    yield: recipe.yield,
    totalTime: recipe.totalTime || null,
    cuisineType: recipe.cuisineType || [],
    mealType: recipe.mealType || [],
    dishType: recipe.dishType || [],
    diet: recipe.dietLabels || [],
    health: recipe.healthLabels || [],
    ingredients: recipe.ingredientLines || [],
    nutrients: {
      protein: Math.round(recipe.totalNutrients?.PROCNT?.quantity || 0),
      fat: Math.round(recipe.totalNutrients?.FAT?.quantity || 0),
      carbs: Math.round(recipe.totalNutrients?.CHOCDF?.quantity || 0),
    },
  }));
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  InputBase,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import NatureIcon from "@mui/icons-material/Nature";
import GrainIcon from "@mui/icons-material/Grain";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import TuneIcon from "@mui/icons-material/Tune";
import { useThemeMode } from "../../context/ThemeContext";

// Popular Healthy Recipes Images
import QuinoaPowerBowl from "../../assets/images/HealthyRecipes/QuinoaPowerBowl.jpg";
import LemonGarlicSalmon from "../../assets/images/HealthyRecipes/LemonGarlicSalmon.jpg";
import AvocadoEggToast from "../../assets/images/HealthyRecipes/AvocadoEggToast.jpg";
import GreenDetoxSmoothie from "../../assets/images/HealthyRecipes/GreenDetoxSmoothie.jpg";
import ChickpeaSalad from "../../assets/images/HealthyRecipes/ChickpeaSalad.jpg";
import VeggieStirFry from "../../assets/images/HealthyRecipes/VeggieStirFry.jpg";
import LentilSoup from "../../assets/images/HealthyRecipes/LentilSoup.jpg";
import YogurtBerryParfait from "../../assets/images/HealthyRecipes/YogurtBerryParfait.jpg";
import GrilledChickenBowl from "../../assets/images/HealthyRecipes/GrilledChickenBowl.jpg";
import MangoChiaPudding from "../../assets/images/HealthyRecipes/MangoChiaPudding.jpg";
import TunaStuffedAvocado from "../../assets/images/HealthyRecipes/TunaStuffedAvocado.jpg";
import SweetPotatoCurry from "../../assets/images/HealthyRecipes/SweetPotatoCurry.jpg";
import SpinachOmelette from "../../assets/images/HealthyRecipes/SweetPotatoCurry.jpg";
import BakedCodVeggies from "../../assets/images/HealthyRecipes/BakedCodVeggies.jpg";
import AcaiSmoothieBowl from "../../assets/images/HealthyRecipes/AcaiSmoothieBowl.jpg";
import TurkeyLettuceWraps from "../../assets/images/HealthyRecipes/TurkeyLettuceWraps.jpg";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&q=90&auto=format&fit=crop";

const FILTERS = [
  { label: "All Recipes", icon: RestaurantMenuIcon, to: "/" },
  { label: "Low Calorie", icon: LocalFireDepartmentIcon, to: "/lowCalorie" },
  { label: "High Protein", icon: FitnessCenterIcon, to: "/highProtein" },
  { label: "Low Carb", icon: GrainIcon, to: "/lowCarb" },
  { label: "Vegan", icon: NatureIcon, to: "/vegan" },
  { label: "Gluten Free", icon: LocalFloristOutlinedIcon, to: "/glutenFree" },
  { label: "Heart Healthy", icon: FavoriteIcon, to: "/heartHealthy" },
];

/* ── Recipes Data ── */
const RECIPES = [
  {
    id: 1, title: "Quinoa Power Bowl",
    desc: "High in protein, fiber and perfect for lunch.",
    kcal: 420, calories: 420, time: "25 min", rating: 4.8, reviews: 120,
    tags: ["High Protein", "Low Calorie"],
    image: QuinoaPowerBowl,
  },
  {
    id: 2, title: "Lemon Garlic Salmon",
    desc: "Omega-3 rich salmon with garlic and herbs.",
    kcal: 380, calories: 380, time: "20 min", rating: 4.9, reviews: 98,
    tags: ["High Protein", "Low Carb"],
    image: LemonGarlicSalmon,
  },
  {
    id: 3, title: "Avocado Egg Toast",
    desc: "Healthy fats, protein packed and super delicious.",
    kcal: 310, calories: 310, time: "15 min", rating: 4.7, reviews: 76,
    tags: ["Low Carb", "Heart Healthy"],
    image: AvocadoEggToast,
  },
  {
    id: 4, title: "Green Detox Smoothie",
    desc: "Detox your body with this green goodness.",
    kcal: 180, calories: 180, time: "10 min", rating: 4.6, reviews: 64,
    tags: ["Vegan", "Low Calorie"],
    image: GreenDetoxSmoothie,
  },
  {
    id: 5, title: "Chickpea Salad",
    desc: "High in fiber and protein, great for weight loss.",
    kcal: 290, calories: 290, time: "18 min", rating: 4.5, reviews: 55,
    tags: ["High Fiber", "Vegan"],
    image: ChickpeaSalad,
  },
  {
    id: 6, title: "Veggie Stir Fry",
    desc: "Colorful veggies with tofu, full of nutrients.",
    kcal: 260, calories: 260, time: "20 min", rating: 4.6, reviews: 72,
    tags: ["Vegan", "Low Calorie"],
    image: VeggieStirFry,
  },
  {
    id: 7, title: "Lentil Soup",
    desc: "Warm, hearty and packed with plant-based protein.",
    kcal: 230, calories: 230, time: "25 min", rating: 4.7, reviews: 88,
    tags: ["High Protein", "Vegan"],
    image: LentilSoup,
  },
  {
    id: 8, title: "Yogurt Berry Parfait",
    desc: "Perfect healthy breakfast to start your day.",
    kcal: 210, calories: 210, time: "10 min", rating: 4.8, reviews: 65,
    tags: ["Low Calorie", "Vegetarian"],
    image: YogurtBerryParfait,
  },
  {
    id: 9, title: "Grilled Chicken Bowl",
    desc: "Lean protein with roasted veggies and brown rice.",
    kcal: 450, calories: 450, time: "30 min", rating: 4.8, reviews: 134,
    tags: ["High Protein", "Gluten Free"],
    image: GrilledChickenBowl,
  },
  {
    id: 10, title: "Mango Chia Pudding",
    desc: "Creamy chia pudding topped with fresh mango.",
    kcal: 195, calories: 195, time: "10 min", rating: 4.5, reviews: 49,
    tags: ["Vegan", "Gluten Free"],
    image: MangoChiaPudding,
  },
  {
    id: 11, title: "Tuna Stuffed Avocado",
    desc: "Low carb, high protein snack or light meal.",
    kcal: 340, calories: 340, time: "12 min", rating: 4.7, reviews: 81,
    tags: ["Low Carb", "High Protein"],
    image: TunaStuffedAvocado,
  },
  {
    id: 12, title: "Sweet Potato Curry",
    desc: "Rich, warming curry packed with vitamins.",
    kcal: 320, calories: 320, time: "35 min", rating: 4.6, reviews: 93,
    tags: ["Vegan", "Gluten Free"],
    image: SweetPotatoCurry,
  },
  {
    id: 13, title: "Spinach Omelette",
    desc: "Fluffy egg omelette loaded with fresh spinach.",
    kcal: 270, calories: 270, time: "12 min", rating: 4.7, reviews: 107,
    tags: ["High Protein", "Low Carb"],
    image: SpinachOmelette,
  },
  {
    id: 14, title: "Baked Cod & Veggies",
    desc: "Light, flaky cod with seasonal roasted vegetables.",
    kcal: 300, calories: 300, time: "28 min", rating: 4.8, reviews: 62,
    tags: ["Low Calorie", "Gluten Free"],
    image: BakedCodVeggies,
  },
  {
    id: 15, title: "Acai Smoothie Bowl",
    desc: "Antioxidant-rich bowl to fuel your morning.",
    kcal: 240, calories: 240, time: "10 min", rating: 4.9, reviews: 115,
    tags: ["Vegan", "Heart Healthy"],
    image: AcaiSmoothieBowl,
  },
  {
    id: 16, title: "Turkey Lettuce Wraps",
    desc: "Crunchy, lean and bursting with fresh flavors.",
    kcal: 280, calories: 280, time: "20 min", rating: 4.6, reviews: 74,
    tags: ["Low Carb", "High Protein"],
    image: TunaStuffedAvocado,
  },
];

/* ── Tag color map ── */
const TAG_COLORS = {
  "High Protein": { bg: "rgba(34,197,94,0.12)", color: "#16a34a" },
  "Low Calorie": { bg: "rgba(251,146,60,0.12)", color: "#ea580c" },
  "Low Carb": { bg: "rgba(168,85,247,0.12)", color: "#9333ea" },
  "Vegan": { bg: "rgba(34,197,94,0.12)", color: "#15803d" },
  "Gluten Free": { bg: "rgba(14,165,233,0.12)", color: "#0284c7" },
  "Heart Healthy": { bg: "rgba(239,68,68,0.12)", color: "#dc2626" },
  "High Fiber": { bg: "rgba(234,179,8,0.12)", color: "#b45309" },
  "Vegetarian": { bg: "rgba(132,204,22,0.12)", color: "#65a30d" },
};

/* ── Single Recipe Card ── */
function RecipeCard({ recipe, darkMode, navigate }) {
  const [liked, setLiked] = useState(false);
  const cardBg = darkMode ? "#1e2420" : "#ffffff";
  const titleColor = darkMode ? "#f3f4f6" : "#1a1a1a";
  const descColor = darkMode ? "#9ca3af" : "#6b7280";
  const borderCol = darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <Box
      sx={{
        background: cardBg,
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${borderCol}`,
        boxShadow: darkMode
          ? "0 2px 16px rgba(0,0,0,0.35)"
          : "0 2px 16px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: darkMode
            ? "0 8px 32px rgba(0,0,0,0.50)"
            : "0 8px 32px rgba(109,179,63,0.18)",
        },
      }}
    >
      {/* Image block */}
      <Box sx={{ position: "relative", width: "100%", paddingTop: "66%", flexShrink: 0 }}>
        <Box
          component="img"
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* kcal badge — top left */}
        <Box sx={{
          position: "absolute", top: 10, left: 10,
          background: "linear-gradient(135deg, #4a7c2e 0%, #6DB33F 100%)",
          color: "#fff", borderRadius: "999px",
          px: 1.4, py: 0.4,
          fontSize: "0.72rem", fontWeight: 700,
          letterSpacing: "0.02em",
          boxShadow: "0 2px 8px rgba(0,0,0,0.22)",
        }}>
          {recipe.kcal} kcal
        </Box>

        {/* Heart — bottom right */}
        <Box sx={{
          position: "absolute", bottom: 10, right: 10,
          background: "rgba(255,255,255,0.92)",
          borderRadius: "50%",
          width: 32, height: 32,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          cursor: "pointer",
          transition: "transform 0.18s ease",
          "&:hover": { transform: "scale(1.15)" },
        }}
          onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
        >
          {liked
            ? <FavoriteIcon sx={{ fontSize: 17, color: "#e05252" }} />
            : <FavoriteBorderIcon sx={{ fontSize: 17, color: "#6b7280" }} />
          }
        </Box>

        {/* Time — bottom left */}
        <Box sx={{
          position: "absolute", bottom: 10, left: 10,
          background: "rgba(255,255,255,0.92)",
          borderRadius: "999px",
          px: 1.2, py: 0.35,
          display: "flex", alignItems: "center", gap: 0.5,
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        }}>
          <AccessTimeIcon sx={{ fontSize: 13, color: "#6b7280" }} />
          <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: "#374151" }}>
            {recipe.time}
          </Typography>
        </Box>
      </Box>

      {/* Content block */}
      <Box sx={{ p: { xs: 1.5, md: 1.8 }, display: "flex", flexDirection: "column", gap: 0.7, flex: 1 }}>
        {/* Title */}
        <Typography sx={{
          fontWeight: 700,
          fontSize: { xs: "0.88rem", md: "0.95rem" },
          color: titleColor,
          lineHeight: 1.3,
        }}>
          {recipe.title}
        </Typography>

        {/* Description */}
        <Typography sx={{
          fontSize: { xs: "0.75rem", md: "0.78rem" },
          color: descColor,
          lineHeight: 1.55,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {recipe.desc}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6, mt: 0.4 }}>
          {recipe.tags.map((tag) => {
            const c = TAG_COLORS[tag] || { bg: "rgba(109,179,63,0.12)", color: "#4e8a28" };
            return (
              <Box key={tag} sx={{
                px: 1.1, py: 0.28,
                borderRadius: "999px",
                background: c.bg,
                color: c.color,
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
              }}>
                {tag}
              </Box>
            );
          })}
        </Box>

        {/* Rating + View button row */}
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "auto",
          pt: 0.8,
        }}>
          {/* Star rating */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <StarIcon sx={{ fontSize: 14, color: "#f59e0b" }} />
            <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: darkMode ? "#fbbf24" : "#92400e" }}>
              {recipe.rating}
            </Typography>
            <Typography sx={{ fontSize: "0.72rem", color: descColor }}>
              ({recipe.reviews})
            </Typography>
          </Box>

          {/* View button */}
          <Box
            component="button"
            onClick={() => { window.scrollTo(0, 0); navigate("/recipeDetails", { state: { recipe } }); }}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.4,
              px: { xs: 1.2, md: 1.5 },
              py: { xs: 0.45, md: 0.55 },
              borderRadius: "999px",
              background: "linear-gradient(135deg, #6DB33F 0%, #8BC34A 100%)",
              color: "#ffffff",
              fontSize: { xs: "0.68rem", md: "0.72rem" },
              fontWeight: 700,
              letterSpacing: "0.02em",
              border: "none",
              cursor: "pointer",
              outline: "none",
              fontFamily: "Inter, system-ui, sans-serif",
              boxShadow: "0 2px 10px rgba(109,179,63,0.30)",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
              "&:hover": {
                background: "linear-gradient(135deg, #5a9a2e 0%, #76ae36 100%)",
                boxShadow: "0 4px 16px rgba(109,179,63,0.45)",
                transform: "translateY(-1px)",
              },
            }}
          >
            View →
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* ── Popular Healthy Recipes Section ── */
function PopularHealthyRecipes({ darkMode }) {
  const navigate = useNavigate();
  const sectionBg = darkMode ? "#111813" : "#f9fdf6";
  const headingCol = darkMode ? "#f3f4f6" : "#1a1a1a";
  const subCol = darkMode ? "#9ca3af" : "#6b7280";
  const filterBtnBg = darkMode ? "rgba(255,255,255,0.07)" : "#ffffff";
  const filterBtnBorder = darkMode ? "rgba(255,255,255,0.14)" : "#d1d5db";

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: sectionBg,
        px: { xs: 2, sm: 3, md: 5, lg: 8 },
        py: { xs: 4, md: 6 },
        boxSizing: "border-box",
      }}
    >
      {/* ── Section header ── */}
      <Box sx={{
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1.5, sm: 0 },
        mb: { xs: 3, md: 4 },
      }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                color: headingCol,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Popular Healthy Recipes
            </Typography>
            <Box component="span" sx={{ fontSize: { xs: "1.2rem", md: "1.4rem" } }}>🌿</Box>
          </Box>
          <Typography sx={{
            fontSize: { xs: "0.85rem", md: "0.92rem" },
            color: subCol,
            mt: 0.5,
            fontWeight: 400,
          }}>
            AI handpicked recipes just for you
          </Typography>
        </Box>

        {/* Filters button */}
        <Box
          component="button"
          sx={{
            display: "inline-flex", alignItems: "center", gap: 0.8,
            px: 2, py: 0.9,
            borderRadius: "10px",
            border: `1.5px solid ${filterBtnBorder}`,
            background: filterBtnBg,
            color: darkMode ? "#d1d5db" : "#374151",
            fontWeight: 600,
            fontSize: "0.85rem",
            cursor: "pointer",
            outline: "none",
            fontFamily: "Inter, system-ui, sans-serif",
            transition: "all 0.2s ease",
            "&:hover": {
              border: "1.5px solid #6DB33F",
              color: "#4e8a28",
              background: darkMode ? "rgba(109,179,63,0.10)" : "#eaf7e6",
            },
          }}
        >
          <TuneIcon sx={{ fontSize: 17 }} />
          Filters
        </Box>
      </Box>

      {/* ── 4 × 4 Grid ── */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",   // 2 cols on mobile
            sm: "repeat(2, 1fr)",   // 2 cols on tablet
            md: "repeat(3, 1fr)",   // 3 cols on small desktop
            lg: "repeat(4, 1fr)",   // 4 cols on large desktop
          },
          gap: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        {RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} darkMode={darkMode} navigate={navigate} />
        ))}
      </Box>
    </Box>
  );
}

/* ── Filter Navbar ── */
function FilterNavbar({ activeFilter, onSelect, darkMode }) {
  const navigate = useNavigate();
  const bg = darkMode ? "#1a1d23" : "#ffffff";
  const border = darkMode ? "rgba(255,255,255,0.08)" : "#e8edf2";
  const shadow = darkMode
    ? "0 2px 16px rgba(0,0,0,0.40)"
    : "0 2px 16px rgba(109,179,63,0.08)";

  return (
    <Box
      component="nav"
      aria-label="Recipe category filters"
      sx={{
        width: "100%",
        maxWidth: "100%",
        background: bg,
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        boxShadow: shadow,
        position: "sticky",
        top: 64,
        zIndex: 40,
        transition: "background 0.25s ease, border-color 0.25s ease",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1.4, md: 1.6 },
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.label;
          const IconComp = f.icon;
          const isHeart = f.label === "Heart Healthy";
          return (
            <Box
              key={f.label}
              component="button"
              onClick={() => { onSelect(f.label); navigate(f.to); }}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.7,
                flex: 1,
                px: { xs: 1, md: 1.5 },
                py: { xs: 0.75, md: 0.9 },
                borderRadius: "999px",
                border: isActive
                  ? "none"
                  : `1.5px solid ${darkMode ? "rgba(255,255,255,0.14)" : "#d6e8c8"}`,
                background: isActive
                  ? "linear-gradient(135deg, #6DB33F 0%, #8BC34A 100%)"
                  : darkMode ? "rgba(255,255,255,0.05)" : "transparent",
                color: isActive ? "#ffffff" : darkMode ? "#d1d5db" : "#3d5228",
                fontWeight: isActive ? 700 : 500,
                fontSize: { xs: "0.78rem", md: "0.84rem" },
                letterSpacing: "0.01em",
                cursor: "pointer",
                outline: "none",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                boxShadow: isActive ? "0 4px 14px rgba(109,179,63,0.35)" : "none",
                fontFamily: "Inter, system-ui, sans-serif",
                "&:hover": {
                  background: isActive
                    ? "linear-gradient(135deg, #5a9a2e 0%, #76ae36 100%)"
                    : darkMode ? "rgba(255,255,255,0.10)" : "#eaf7e6",
                  border: isActive
                    ? "none"
                    : `1.5px solid ${darkMode ? "rgba(255,255,255,0.25)" : "#6DB33F"}`,
                  color: isActive ? "#ffffff" : darkMode ? "#ffffff" : "#4e8a28",
                  transform: "translateY(-1px)",
                },
              }}
            >
              <IconComp
                sx={{
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: isActive
                    ? "#ffffff"
                    : isHeart ? "#e05252" : "inherit",
                }}
              />
              {f.label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

/* ── Main component ── */
export default function HealthyRecipes() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { darkMode } = useThemeMode();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Recipes");

  /* shared search bar */
  const searchBar = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: { xs: "100%", md: 500 },
        background: darkMode ? "rgba(255,255,255,0.07)" : "#ffffff",
        borderRadius: "999px",
        border: `1.5px solid ${darkMode ? "rgba(255,255,255,0.14)" : "#c4e4ac"}`,
        boxShadow: "0 4px 18px rgba(109,179,63,0.10)",
        px: { xs: 1.5, md: 2 },
        py: { xs: 0.5, md: 0.6 },
        gap: 1,
      }}
    >
      <SearchIcon sx={{ color: "#8eba72", fontSize: { xs: 20, md: 22 }, flexShrink: 0 }} />
      <InputBase
        placeholder="Search recipes, ingredients..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          flex: 1,
          fontSize: { xs: "0.88rem", md: "0.95rem" },
          color: darkMode ? "#f3f4f6" : "#1e2e14",
          "& input::placeholder": { color: "#a8c990", opacity: 1 },
        }}
      />
      <Button
        variant="contained"
        disableElevation
        sx={{
          borderRadius: "999px",
          background: "linear-gradient(135deg, #6DB33F 0%, #8BC34A 100%)",
          color: "#fff",
          fontWeight: 700,
          fontSize: { xs: "0.8rem", md: "0.88rem" },
          px: { xs: 2.2, md: 2.8 },
          py: { xs: 0.85, md: 1.05 },
          flexShrink: 0,
          textTransform: "none",
          whiteSpace: "nowrap",
          "&:hover": { background: "linear-gradient(135deg, #5a9a2e 0%, #76ae36 100%)" },
        }}
      >
        Search
      </Button>
    </Box>
  );

  /* ── MOBILE ── */
  if (isMobile) {
    const heroBg = darkMode
      ? "linear-gradient(160deg, #0f1a0a 0%, #111e0d 40%, #131f0e 70%, #0f1117 100%)"
      : "linear-gradient(160deg, #e8f9e0 0%, #eaf7e6 40%, #f4fdf0 70%, #ffffff 100%)";

    return (
      <Box sx={{ width: "100%", background: heroBg, display: "flex", flexDirection: "column", m: 0, p: 0, overflowX: "hidden" }}>
        {/* Image + heading overlay */}
        <Box sx={{ position: "relative", width: "100%", height: { xs: 280, sm: 360 }, overflow: "hidden", flexShrink: 0 }}>
          <Box component="img" src={HERO_IMAGE} alt="Healthy salad bowl" loading="eager"
            sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />

          <Box aria-hidden="true" sx={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "55%",
            background: darkMode
              ? "linear-gradient(to top, #111e0d 0%, rgba(17,30,13,0.85) 50%, transparent 100%)"
              : "linear-gradient(to top, #eaf7e6 0%, rgba(234,247,230,0.85) 50%, transparent 100%)",
            zIndex: 1,
          }} />

          <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, px: 3, pb: 2 }}>
            <Typography component="h1" sx={{ fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.02, fontSize: { xs: "2.8rem", sm: "3.6rem" } }}>
              <Box component="span" sx={{ display: "block", color: "#67A63C" }}>Healthy</Box>
              <Box component="span" sx={{ display: "inline-flex", alignItems: "flex-end", gap: 1, color: darkMode ? "#f3f4f6" : "#1A1A1A" }}>
                Recipes
                <Box component="span" sx={{ fontSize: "1.5rem", lineHeight: 1, mb: "5px" }}>🌿</Box>
              </Box>
            </Typography>
          </Box>

          <Box component="span" aria-hidden="true" sx={{
            position: "absolute", top: 14, right: 16, fontSize: "1.6rem", zIndex: 2,
            filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.14))",
            animation: "lf1 4.5s ease-in-out infinite",
            "@keyframes lf1": { "0%,100%": { transform: "translateY(0) rotate(-10deg)" }, "50%": { transform: "translateY(-10px) rotate(6deg)" } },
          }}>🌿</Box>
        </Box>

        {/* Content below image */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", px: 3, pt: 3, pb: 2, gap: 2.5 }}>
          {/* Badge */}
          <Box sx={{
            display: "inline-flex", alignItems: "center", gap: 0.8, px: 2, py: 0.8, borderRadius: "999px",
            background: "rgba(109,179,63,0.12)", border: "1.5px solid rgba(109,179,63,0.32)", width: "fit-content"
          }}>
            <LocalFloristOutlinedIcon sx={{ fontSize: 14, color: "#4e8a28" }} />
            <Typography sx={{ fontSize: "0.73rem", fontWeight: 700, color: "#4e8a28", letterSpacing: "0.05em", lineHeight: 1 }}>
              Healthy Lifestyle
            </Typography>
          </Box>

          {searchBar}

          <Typography sx={{ fontSize: { xs: "0.95rem", sm: "1.02rem" }, color: darkMode ? "#9ca3af" : "#3b5226", lineHeight: 1.75, fontWeight: 400 }}>
            Discover delicious, nutritious, AI-curated recipes crafted for every lifestyle. Turn everyday ingredients into healthy meals in seconds.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 2, width: "100%" }}>
            <Button variant="contained" disableElevation sx={{
              flex: 1, borderRadius: "14px", background: "linear-gradient(135deg, #6DB33F 0%, #8BC34A 100%)",
              color: "#fff", fontWeight: 700, fontSize: { xs: "0.82rem", sm: "0.92rem" }, px: 1, py: 1.2,
              textTransform: "none", whiteSpace: "nowrap", boxShadow: "0 6px 22px rgba(109,179,63,0.28)",
              "&:hover": { background: "linear-gradient(135deg, #5a9a2e 0%, #76ae36 100%)", transform: "translateY(-1px)" },
              transition: "all 0.2s ease",
            }}>Explore Recipes →</Button>

            <Button variant="outlined" sx={{
              flex: 1, borderRadius: "14px", border: "2px solid #6DB33F", color: "#4e8a28", fontWeight: 700,
              fontSize: { xs: "0.82rem", sm: "0.92rem" }, px: 1, py: 1.2, textTransform: "none", whiteSpace: "nowrap",
              background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)",
              "&:hover": { background: "#eaf7e6", border: "2px solid #5a9a2e", transform: "translateY(-1px)" },
              transition: "all 0.2s ease",
            }}>Healthy Tips</Button>
          </Box>
        </Box>

        {/* Filter navbar */}
        <FilterNavbar activeFilter={activeFilter} onSelect={setActiveFilter} darkMode={darkMode} />

        {/* Popular Healthy Recipes */}
        <PopularHealthyRecipes darkMode={darkMode} />
      </Box>
    );
  }

  /* ── DESKTOP ── */
  const heroBg = darkMode
    ? "linear-gradient(130deg, #0d1a09 0%, #111e0d 30%, #131f0e 60%, #0f1117 100%)"
    : "linear-gradient(130deg, #e8f9e0 0%, #eaf7e6 30%, #f4fdf0 60%, #ffffff 100%)";

  const gradientFade = darkMode
    ? "linear-gradient(to right, #111e0d 0%, rgba(17,30,13,0.7) 40%, transparent 100%)"
    : "linear-gradient(to right, #eaf7e6 0%, rgba(234,247,230,0.7) 40%, transparent 100%)";

  return (
    <Box component="section" sx={{ width: "100%", display: "flex", flexDirection: "column", m: 0, p: 0, boxSizing: "border-box" }}>
      {/* Hero — overflow hidden only on the hero part */}
      <Box sx={{
        width: "100%", minHeight: "calc(100vh - 64px)", position: "relative", overflow: "hidden",
        background: heroBg, display: "flex", alignItems: "stretch",
      }}>
        {/* Glow blobs */}
        <Box aria-hidden="true" sx={{
          position: "absolute", top: "-140px", right: "-100px", width: 560, height: 560,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(139,195,74,0.20) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0
        }} />
        <Box aria-hidden="true" sx={{
          position: "absolute", bottom: "-80px", left: "-60px", width: 400, height: 400,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(109,179,63,0.14) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0
        }} />

        <Box sx={{
          position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "row",
          alignItems: "stretch", minHeight: "calc(100vh - 64px)"
        }}>

          {/* LEFT: content */}
          <Box sx={{
            flex: "0 0 50%", maxWidth: "50%", display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "flex-start", px: { md: 7, lg: 10 }, py: 0
          }}>

            <Box sx={{
              display: "inline-flex", alignItems: "center", gap: 0.8, px: 2, py: 0.8,
              borderRadius: "999px", background: "rgba(109,179,63,0.12)", border: "1.5px solid rgba(109,179,63,0.32)",
              backdropFilter: "blur(8px)", width: "fit-content", mb: 3
            }}>
              <LocalFloristOutlinedIcon sx={{ fontSize: 15, color: "#4e8a28" }} />
              <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#4e8a28", letterSpacing: "0.05em", lineHeight: 1 }}>
                Healthy Lifestyle
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography component="h1" sx={{
                fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.02,
                fontSize: { md: "4.6rem", lg: "5.6rem", xl: "6.4rem" }
              }}>
                <Box component="span" sx={{ display: "block", color: "#67A63C" }}>Healthy</Box>
                <Box component="span" sx={{
                  display: "inline-flex", alignItems: "flex-end", gap: 1.2,
                  color: darkMode ? "#f3f4f6" : "#1A1A1A"
                }}>
                  Recipes
                  <Box component="span" sx={{ fontSize: { md: "2.2rem", lg: "2.8rem" }, lineHeight: 1, mb: "8px" }}>🌿</Box>
                </Box>
              </Typography>
            </Box>

            <Typography sx={{
              fontSize: { md: "1.1rem", lg: "1.18rem" }, color: darkMode ? "#9ca3af" : "#3b5226",
              lineHeight: 1.75, maxWidth: { md: 460, lg: 520 }, fontWeight: 400, mb: 3.5
            }}>
              Discover delicious, nutritious, AI-curated recipes crafted for every lifestyle. Turn everyday ingredients into healthy meals in seconds.
            </Typography>

            <Box sx={{ mb: 3.5, width: "100%", maxWidth: 500 }}>{searchBar}</Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" disableElevation sx={{
                borderRadius: "14px", background: "linear-gradient(135deg, #6DB33F 0%, #8BC34A 100%)",
                color: "#fff", fontWeight: 700, fontSize: "0.98rem", px: 3.8, py: 1.45, textTransform: "none",
                letterSpacing: "0.01em", boxShadow: "0 8px 28px rgba(109,179,63,0.30)",
                "&:hover": {
                  background: "linear-gradient(135deg, #5a9a2e 0%, #76ae36 100%)",
                  boxShadow: "0 10px 36px rgba(109,179,63,0.42)", transform: "translateY(-2px)"
                },
                transition: "all 0.2s ease",
              }}>Explore Recipes →</Button>

              <Button variant="outlined" sx={{
                borderRadius: "14px", border: "2px solid #6DB33F", color: "#4e8a28", fontWeight: 700,
                fontSize: "0.98rem", px: 3.8, py: 1.45, textTransform: "none", letterSpacing: "0.01em",
                background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)",
                "&:hover": {
                  background: darkMode ? "rgba(109,179,63,0.10)" : "#eaf7e6",
                  border: "2px solid #5a9a2e", transform: "translateY(-2px)"
                },
                transition: "all 0.2s ease",
              }}>Healthy Tips</Button>
            </Box>
          </Box>

          {/* RIGHT: image */}
          <Box sx={{ flex: "0 0 50%", maxWidth: "50%", position: "relative", overflow: "hidden" }}>
            <Box component="img" src={HERO_IMAGE}
              alt="Healthy salad bowl with avocado, grilled chicken, chickpeas, cherry tomatoes and fresh spinach"
              loading="eager" sx={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center", display: "block"
              }} />

            <Box aria-hidden="true" sx={{
              position: "absolute", top: 0, left: 0, width: "32%", height: "100%",
              background: gradientFade, zIndex: 1, pointerEvents: "none"
            }} />

            <Box component="span" aria-hidden="true" sx={{
              position: "absolute", top: 28, right: 32, fontSize: "2.6rem", zIndex: 2,
              filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.14))",
              animation: "lf1 4.5s ease-in-out infinite",
              "@keyframes lf1": { "0%,100%": { transform: "translateY(0) rotate(-10deg)" }, "50%": { transform: "translateY(-12px) rotate(6deg)" } },
            }}>🌿</Box>

            <Box component="span" aria-hidden="true" sx={{
              position: "absolute", bottom: 32, left: 44, fontSize: "2rem", zIndex: 2,
              filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.12))",
              animation: "lf2 5.5s ease-in-out infinite",
              "@keyframes lf2": { "0%,100%": { transform: "translateY(0) rotate(8deg)" }, "50%": { transform: "translateY(-10px) rotate(-6deg)" } },
            }}>🍃</Box>
          </Box>
        </Box>
      </Box>

      {/* Filter navbar — below hero, full width */}
      <FilterNavbar activeFilter={activeFilter} onSelect={setActiveFilter} darkMode={darkMode} />

      {/* Popular Healthy Recipes */}
      <PopularHealthyRecipes darkMode={darkMode} />
    </Box>
  );
}
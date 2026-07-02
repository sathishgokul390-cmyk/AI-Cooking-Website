FILE = r'c:/Users/GOKULAKRISHNAN/Documents/GitHub/AI-Cooking-Website/frontend/src/sections/Hero/Hero.jsx'

BLOCK = r"""
// ─── SECTION 4 DATA ──────────────────────────────────────────────────────────
const POPULAR_RECIPES = [
  { id: 1,  title: "Grilled Salmon with Avocado Salsa",  time: "25 min", kcal: "520 kcal", rating: 4.9, difficulty: "Easy",   category: "Seafood",     aiPick: true,  trending: true,  image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
  { id: 2,  title: "Creamy Tuscan Chicken Pasta",        time: "30 min", kcal: "610 kcal", rating: 4.8, difficulty: "Medium", category: "Pasta",       aiPick: false, trending: true,  image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&q=80" },
  { id: 3,  title: "Rainbow Quinoa Power Bowl",          time: "20 min", kcal: "420 kcal", rating: 4.7, difficulty: "Easy",   category: "Healthy",     aiPick: true,  trending: false, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
  { id: 4,  title: "Spicy Tonkotsu Ramen",               time: "15 min", kcal: "480 kcal", rating: 4.8, difficulty: "Easy",   category: "Asian",       aiPick: false, trending: true,  image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80" },
  { id: 5,  title: "Truffle Mushroom Risotto",           time: "40 min", kcal: "550 kcal", rating: 4.9, difficulty: "Hard",   category: "Italian",     aiPick: true,  trending: false, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7cd?w=600&q=80" },
  { id: 6,  title: "Honey Garlic Butter Shrimp",        time: "18 min", kcal: "390 kcal", rating: 4.7, difficulty: "Easy",   category: "Seafood",     aiPick: false, trending: true,  image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80" },
  { id: 7,  title: "Avocado Breakfast Toast Stack",      time: "10 min", kcal: "310 kcal", rating: 4.6, difficulty: "Easy",   category: "Breakfast",   aiPick: true,  trending: false, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80" },
  { id: 8,  title: "Korean BBQ Beef Bulgogi Bowl",       time: "35 min", kcal: "620 kcal", rating: 4.9, difficulty: "Medium", category: "Korean",      aiPick: true,  trending: true,  image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80" },
  { id: 9,  title: "Mango Coconut Chia Pudding",        time: "5 min",  kcal: "220 kcal", rating: 4.5, difficulty: "Easy",   category: "Dessert",     aiPick: false, trending: false, image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=600&q=80" },
  { id: 10, title: "Smoked Brisket Street Tacos",       time: "50 min", kcal: "740 kcal", rating: 4.8, difficulty: "Hard",   category: "Mexican",     aiPick: true,  trending: true,  image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80" },
  { id: 11, title: "Thai Green Curry & Jasmine Rice",   time: "30 min", kcal: "580 kcal", rating: 4.7, difficulty: "Medium", category: "Thai",        aiPick: false, trending: false, image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80" },
  { id: 12, title: "Chocolate Lava Cake",               time: "22 min", kcal: "490 kcal", rating: 4.9, difficulty: "Medium", category: "Dessert",     aiPick: true,  trending: true,  image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80" },
  { id: 13, title: "Caprese Stuffed Avocado",           time: "8 min",  kcal: "280 kcal", rating: 4.6, difficulty: "Easy",   category: "Healthy",     aiPick: false, trending: false, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80" },
  { id: 14, title: "Lamb Shawarma Flatbread",           time: "45 min", kcal: "670 kcal", rating: 4.8, difficulty: "Hard",   category: "Middle East", aiPick: true,  trending: false, image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=600&q=80" },
  { id: 15, title: "Blueberry Lemon Pancake Stack",     time: "20 min", kcal: "440 kcal", rating: 4.7, difficulty: "Easy",   category: "Breakfast",   aiPick: false, trending: true,  image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80" },
  { id: 16, title: "Seared Duck Breast & Cherry Jus",  time: "38 min", kcal: "590 kcal", rating: 4.9, difficulty: "Hard",   category: "French",      aiPick: true,  trending: false, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" },
  { id: 17, title: "Poke Bowl with Sesame Tuna",        time: "15 min", kcal: "430 kcal", rating: 4.7, difficulty: "Easy",   category: "Hawaiian",    aiPick: true,  trending: true,  image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
  { id: 18, title: "Butter Chicken Masala",             time: "40 min", kcal: "640 kcal", rating: 4.9, difficulty: "Medium", category: "Indian",      aiPick: false, trending: true,  image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80" },
  { id: 19, title: "Acai Berry Smoothie Bowl",          time: "7 min",  kcal: "320 kcal", rating: 4.6, difficulty: "Easy",   category: "Healthy",     aiPick: true,  trending: false, image: "https://images.unsplash.com/photo-1590301157284-bd0ca580bef7?w=600&q=80" },
  { id: 20, title: "Wagyu Beef Fried Rice",             time: "25 min", kcal: "710 kcal", rating: 4.9, difficulty: "Medium", category: "Japanese",    aiPick: true,  trending: true,  image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80" },
  { id: 21, title: "Strawberry Shortcake Trifle",      time: "15 min", kcal: "380 kcal", rating: 4.7, difficulty: "Easy",   category: "Dessert",     aiPick: false, trending: false, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80" },
  { id: 22, title: "Lobster Bisque with Croutons",     time: "55 min", kcal: "560 kcal", rating: 4.8, difficulty: "Hard",   category: "Seafood",     aiPick: true,  trending: false, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
];

const CAROUSEL_CSS = `
  @keyframes pr-pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:.72; transform:scale(.9); }
  }
  @keyframes pr-orange-glow {
    0%,100% { box-shadow:0 0 8px 2px rgba(249,115,22,.45); }
    50%      { box-shadow:0 0 20px 7px rgba(249,115,22,.85); }
  }
  @keyframes pr-selected-pulse {
    0%,100% { box-shadow:0 0 0 0 rgba(249,115,22,0); }
    50%      { box-shadow:0 0 0 6px rgba(249,115,22,.3); }
  }
`;

const DIFF_COLOR = {
  Easy:   { bg: "rgba(107,165,57,.2)",  border: "rgba(107,165,57,.5)",  text: "#6BA539" },
  Medium: { bg: "rgba(249,115,22,.18)", border: "rgba(249,115,22,.45)", text: "#f97316" },
  Hard:   { bg: "rgba(239,68,68,.18)",  border: "rgba(239,68,68,.45)",  text: "#ef4444" },
};

// ─── RECIPE CARD ──────────────────────────────────────────────────────────────
const RecipeCarouselCard = React.memo(function RecipeCarouselCard({ recipe, isFav, onToggleFav, isSelected, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const diff = DIFF_COLOR[recipe.difficulty] || DIFF_COLOR.Easy;
  const active = isSelected || hovered;

  const stars = useMemo(() => {
    const full = Math.floor(recipe.rating);
    const half = recipe.rating % 1 >= 0.5;
    return Array.from({ length: 5 }, (_, i) =>
      i < full ? "\u2605" : (i === full && half ? "\u00bd" : "\u2606")
    ).join("");
  }, [recipe.rating]);

  return (
    <Box
      onClick={() => onSelect(recipe.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      role="article"
      aria-label={recipe.title}
      aria-pressed={isSelected}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(recipe.id)}
      sx={{
        position: "relative",
        width: { xs: "220px", sm: "240px", md: "260px", lg: "280px" },
        height: { xs: "320px", sm: "340px", md: "360px" },
        flexShrink: 0,
        borderRadius: "28px",
        overflow: "hidden",
        cursor: "pointer",
        border: isSelected
          ? "2px solid #f97316"
          : hovered
          ? "1.5px solid rgba(249,115,22,.5)"
          : "1.5px solid rgba(255,255,255,.12)",
        boxShadow: isSelected
          ? "0 0 0 3px rgba(249,115,22,.25), 0 24px 60px rgba(0,0,0,.6)"
          : hovered
          ? "0 24px 60px rgba(0,0,0,.5), 0 0 0 1px rgba(249,115,22,.2)"
          : "0 8px 32px rgba(0,0,0,.35)",
        transform: active ? "translateY(-12px)" : "translateY(0)",
        transition: "transform .45s cubic-bezier(.34,1.56,.64,1), box-shadow .4s ease, border-color .35s ease",
        willChange: "transform",
        outline: "none",
        animation: isSelected ? "pr-selected-pulse 1.8s ease-in-out infinite" : "none",
        "&:focus-visible": { outline: "2px solid #f97316", outlineOffset: "3px" },
      }}
    >
      <Box component="img" src={recipe.image} alt={recipe.title} loading="lazy"
        sx={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          transform: active ? "scale(1.08)" : "scale(1)",
          transition: "transform .55s cubic-bezier(.25,.46,.45,.94)",
          willChange: "transform",
        }}
      />
      <Box sx={{
        position: "absolute", inset: 0,
        background: isSelected
          ? "linear-gradient(170deg, rgba(249,115,22,.22) 0%, rgba(18,20,19,.93) 100%)"
          : hovered
          ? "linear-gradient(170deg, rgba(0,0,0,.18) 0%, rgba(18,20,19,.92) 100%)"
          : "linear-gradient(170deg, rgba(0,0,0,.06) 0%, rgba(18,20,19,.82) 100%)",
        transition: "background .4s ease",
        pointerEvents: "none",
      }} />
      {isSelected && (
        <Box sx={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: "linear-gradient(90deg,#f97316,#fb923c,#f97316)",
        }} />
      )}
      <Box sx={{ position: "absolute", top: isSelected ? 18 : 14, left: 14, right: 52, display: "flex", gap: "6px", flexWrap: "wrap", transition: "top .3s ease" }}>
        {recipe.trending && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px", px: "9px", py: "4px", borderRadius: "20px", background: "linear-gradient(135deg,#f97316,#fb923c)", boxShadow: "0 2px 10px rgba(249,115,22,.5)", animation: "pr-pulse 2s ease-in-out infinite" }}>
            <Box component="span" sx={{ fontSize: "10px", lineHeight: 1 }}>&#128293;</Box>
            <Typography sx={{ fontSize: "10px", fontWeight: 700, color: "#fff", letterSpacing: ".4px" }}>Trending</Typography>
          </Box>
        )}
        {recipe.aiPick && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px", px: "9px", py: "4px", borderRadius: "20px", background: "linear-gradient(135deg,#6BA539,#3a7d44)", boxShadow: "0 2px 10px rgba(107,165,57,.45)" }}>
            <Sparkles size={9} color="#fff" />
            <Typography sx={{ fontSize: "10px", fontWeight: 700, color: "#fff", letterSpacing: ".4px" }}>AI Pick</Typography>
          </Box>
        )}
      </Box>
      <IconButton
        aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
        onClick={(e) => { e.stopPropagation(); onToggleFav(recipe.id); }}
        sx={{
          position: "absolute", top: 12, right: 12, width: 38, height: 38,
          bgcolor: isFav ? "#f97316" : "rgba(255,255,255,.15)",
          backdropFilter: "blur(10px)",
          border: "1.5px solid rgba(255,255,255,.25)",
          transition: "all .3s cubic-bezier(.34,1.56,.64,1)",
          transform: active ? "rotate(8deg) scale(1.1)" : "rotate(0) scale(1)",
          "&:hover": { bgcolor: isFav ? "#fb923c" : "rgba(255,255,255,.3)", transform: "rotate(8deg) scale(1.15)" },
          "&:active": { transform: "scale(.92)" },
        }}
      >
        <Heart size={16} fill={isFav ? "#fff" : "none"} color="#fff" />
      </IconButton>
      <Box sx={{
        position: "absolute", bottom: 0, left: 0, right: 0, p: "18px 16px 16px",
        background: isSelected
          ? "linear-gradient(to top, rgba(18,20,19,.95) 0%, transparent 100%)"
          : "linear-gradient(to top, rgba(0,0,0,.82) 0%, transparent 100%)",
        transition: "background .4s ease",
      }}>
        <Box sx={{ display: "flex", gap: "6px", mb: "8px", flexWrap: "wrap" }}>
          <Box sx={{ px: "8px", py: "3px", borderRadius: "10px", bgcolor: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", backdropFilter: "blur(6px)" }}>
            <Typography sx={{ fontSize: "9px", fontWeight: 600, color: "rgba(255,255,255,.85)", letterSpacing: ".3px" }}>{recipe.category}</Typography>
          </Box>
          <Box sx={{ px: "8px", py: "3px", borderRadius: "10px", bgcolor: diff.bg, border: "1px solid " + diff.border }}>
            <Typography sx={{ fontSize: "9px", fontWeight: 700, color: diff.text, letterSpacing: ".3px" }}>{recipe.difficulty}</Typography>
          </Box>
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: "13px", sm: "14px" }, lineHeight: 1.35, color: "#fff", mb: "10px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", textShadow: "0 1px 6px rgba(0,0,0,.6)" }}>
          {recipe.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={11} color="rgba(255,255,255,.7)" />
              <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,.8)", fontWeight: 500 }}>{recipe.time}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Scale size={11} color="rgba(255,255,255,.7)" />
              <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,.8)", fontWeight: 500 }}>{recipe.kcal}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <Typography sx={{ fontSize: "11px", color: "#facc15", letterSpacing: "-1px", lineHeight: 1 }}>{stars}</Typography>
            <Typography sx={{ fontSize: "11px", color: "rgba(255,255,255,.85)", fontWeight: 600, ml: "2px" }}>{recipe.rating}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

// ─── POPULAR RECIPES SECTION ──────────────────────────────────────────────────
function PopularRecipesSection() {
  const trackRef  = useRef(null);
  const animRef   = useRef(null);
  const posRef    = useRef(0);
  const speedPx   = 0.55;

  const [favs,     setFavs]     = useState({});
  const [selected, setSelected] = useState(null);

  const doubled = useMemo(() => [...POPULAR_RECIPES, ...POPULAR_RECIPES], []);

  const toggleFav    = useCallback((id) => setFavs((p) => ({ ...p, [id]: !p[id] })), []);
  const handleSelect = useCallback((id) => setSelected((prev) => (prev === id ? null : id)), []);

  const cardWidthPx = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 300;
    const card = track.firstElementChild;
    if (!card) return 300;
    const gap = parseInt(getComputedStyle(track).gap) || 20;
    return card.offsetWidth + gap;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let halfWidth = track.scrollWidth / 2;
    const measure = () => { halfWidth = track.scrollWidth / 2; };
    window.addEventListener("resize", measure);
    const tick = () => {
      posRef.current += speedPx;
      if (posRef.current >= halfWidth) posRef.current -= halfWidth;
      track.style.transform = "translate3d(-" + posRef.current + "px,0,0)";
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const scrollLeft  = useCallback(() => { posRef.current = Math.max(0, posRef.current - cardWidthPx()); }, [cardWidthPx]);
  const scrollRight = useCallback(() => { posRef.current += cardWidthPx(); }, [cardWidthPx]);

  const ArrowBtn = ({ onClick, label, icon }) => (
    <Box component="button" onClick={onClick} aria-label={label}
      sx={{
        width: { xs: 40, md: 48 }, height: { xs: 40, md: 48 },
        borderRadius: "50%",
        border: "1.5px solid rgba(249,115,22,.45)",
        bgcolor: "rgba(249,115,22,.12)",
        backdropFilter: "blur(12px)",
        color: "#f97316",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", fontFamily: "inherit", flexShrink: 0,
        transition: "all .25s ease",
        "&:hover": { bgcolor: "#f97316", color: "#fff", border: "1.5px solid #f97316", boxShadow: "0 4px 20px rgba(249,115,22,.45)", transform: "scale(1.08)" },
        "&:active": { transform: "scale(.94)" },
      }}
    >{icon}</Box>
  );

  return (
    <>
      <style>{CAROUSEL_CSS}</style>
      <Box component="section" aria-label="Popular Recipes"
        sx={{
          mt: { xs: 6, md: 10 }, pb: { xs: 6, md: 10 },
          background: "linear-gradient(160deg,#121413 0%,#0F172A 55%,#121413 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        <Box sx={{ position: "absolute", top: "-100px", left: "8%", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "-60px", right: "6%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle,rgba(107,165,57,.1) 0%,transparent 70%)", pointerEvents: "none" }} />

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, lg: 8 } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: 4, md: 5 }, gap: 2 }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: "6px" }}>
                <Box sx={{ width: 36, height: 36, borderRadius: "10px", background: "linear-gradient(135deg,#f97316,#fb923c)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(249,115,22,.4)" }}>
                  <Sparkles size={18} color="#fff" />
                </Box>
                <Typography sx={{ fontSize: { xs: "20px", sm: "26px", md: "32px" }, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1 }}>
                  Popular Recipes
                </Typography>
              </Box>
              <Typography sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "rgba(255,255,255,.5)", fontWeight: 400, pl: "46px" }}>
                Discover AI-curated recipes loved by thousands of food enthusiasts.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", flexShrink: 0 }}>
              <ArrowBtn onClick={scrollLeft}  label="Scroll left"  icon={<ChevronRight size={20} style={{ transform: "rotate(180deg)" }} />} />
              <ArrowBtn onClick={scrollRight} label="Scroll right" icon={<ChevronRight size={20} />} />
            </Box>
          </Box>
        </Container>

        <Box sx={{ width: "100%", overflow: "hidden", maskImage: "linear-gradient(to right,transparent 0%,black 80px,black calc(100% - 80px),transparent 100%)", WebkitMaskImage: "linear-gradient(to right,transparent 0%,black 80px,black calc(100% - 80px),transparent 100%)" }}>
          <Box ref={trackRef} sx={{ display: "flex", gap: { xs: "14px", sm: "16px", md: "20px" }, width: "max-content", willChange: "transform", py: "20px", px: "24px" }}>
            {doubled.map((recipe, idx) => (
              <RecipeCarouselCard
                key={recipe.id + "-" + idx}
                recipe={recipe}
                isFav={!!favs[recipe.id]}
                onToggleFav={toggleFav}
                isSelected={selected === recipe.id}
                onSelect={handleSelect}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center", gap: "6px", mt: 3 }}>
          {[0,1,2].map((i) => (
            <Box key={i} sx={{ width: i === 1 ? "20px" : "6px", height: "6px", borderRadius: "3px", bgcolor: i === 1 ? "#f97316" : "rgba(255,255,255,.25)", transition: "width .3s ease" }} />
          ))}
        </Box>
      </Box>
    </>
  );
}

"""

lines = open(FILE, encoding='utf-8').readlines()
idx = next(i for i,l in enumerate(lines) if l.strip().startswith('export default function Hero'))
before = lines[:idx]
after  = lines[idx:]
new_content = ''.join(before) + BLOCK + ''.join(after)
open(FILE, 'w', encoding='utf-8').write(new_content)
total = new_content.count('\n') + 1
print("Done. Lines:", total)
final = new_content.splitlines()
for l in final[-5:]:
    print(repr(l))

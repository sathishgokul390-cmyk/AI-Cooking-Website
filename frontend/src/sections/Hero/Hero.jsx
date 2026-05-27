// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Clock3, Star, Heart, Sparkles, ChevronRight, ArrowRight } from "lucide-react";

// import AiCookingBanner from "../../assets/images/ai_cooking_banner.png";
// import breakfast from "../../assets/images/breakfast.avif";
// import lunch from "../../assets/images/lunch.avif";
// import dinner from "../../assets/images/dinner.avif";
// import dessert from "../../assets/images/deserts.avif";
// import snackes from "../../assets/images/snacks.avif";
// import drink from "../../assets/images/drink.jpg";
// import chickenBriyani from "../../assets/images/chicken_biryani.avif";
// import pannerButterMasala from "../../assets/images/panner_butter_masala.avif";
// import chocolateLavaCake from "../../assets/images/chocolate_lava_cake.avif";
// import vegSandwich from "../../assets/images/veg_sandwich.avif";

// const categories = [
//   { title: "Breakfast", recipes: "25 Recipes", image: breakfast },
//   { title: "Lunch", recipes: "40 Recipes", image: lunch },
//   { title: "Dinner", recipes: "60 Recipes", image: dinner },
//   { title: "Desserts", recipes: "30 Recipes", image: dessert },
//   { title: "Snacks", recipes: "35 Recipes", image: snackes },
//   { title: "Drinks", recipes: "20 Recipes", image: drink },
// ];

// const recipes = [
//   { title: "Chicken Biryani", image: chickenBriyani, time: "45 min", difficulty: "Medium", rating: "4.8", reviews: 320 },
//   { title: "Paneer Butter Masala", image: pannerButterMasala, time: "30 min", difficulty: "Easy", rating: "4.7", reviews: 180 },
//   { title: "Chocolate Lava Cake", image: chocolateLavaCake, time: "25 min", difficulty: "Easy", rating: "4.9", reviews: 215 },
//   { title: "Veg Sandwich", image: vegSandwich, time: "15 min", difficulty: "Easy", rating: "4.6", reviews: 98 },
// ];

// const avatars = [
//   "https://i.pravatar.cc/40?img=3",
//   "https://i.pravatar.cc/40?img=7",
//   "https://i.pravatar.cc/40?img=11",
// ];

// const ingredients = [
//   { label: "Chicken", emoji: "🍗" },
//   { label: "Avocado", emoji: "🥑" },
//   { label: "Broccoli", emoji: "🥦" },
//   { label: "Quinoa", emoji: "🌾" },
// ];

// const waveBars = [3, 7, 12, 16, 11, 20, 14, 9, 18, 11, 7, 15, 9, 13, 7, 11, 15, 9, 7, 11];

// export default function Hero() {
//   const [liked, setLiked] = useState({});
//   const toggleLike = (i) => setLiked((p) => ({ ...p, [i]: !p[i] }));

//   return (
//     <div className="bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">

//       {/* ══════════════════════════════════════════════════════════════════════
//           HERO BANNER
//           Layout: banner image fills full width, left text floats over it
//           Robot is center of image, visible clearly, cards float top-right
//           and bottom-right over the kitchen background
//       ═════════════════════════════════════════════════════════════════════ */}
//       <section
//         className="relative w-full overflow-hidden"
//         style={{ height: "clamp(380px, 48vw, 520px)" }}
//       >
//         {/* ── Full-width background image ── */}
//         <img
//           src={AiCookingBanner}
//           alt="AI Chef Robot cooking in kitchen"
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{ objectPosition: "center center" }}
//         />

//         {/* ── Subtle left-only gradient so text is readable, robot stays visible ── */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(245,241,234,0.97) 0%, rgba(245,241,234,0.93) 18%, rgba(245,241,234,0.75) 30%, rgba(245,241,234,0.25) 42%, transparent 55%)",
//           }}
//         />
//         {/* dark mode version */}
//         <div
//           className="absolute inset-0 hidden dark:block"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(15,20,16,0.97) 0%, rgba(15,20,16,0.93) 18%, rgba(15,20,16,0.75) 30%, rgba(15,20,16,0.25) 42%, transparent 55%)",
//           }}
//         />

//         {/* ── Content layer ── */}
//         <div className="relative z-10 h-full max-w-[1400px] mx-auto px-8 flex items-center">

//           {/* LEFT TEXT — fixed width, sits over the gradient area */}
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.65, ease: "easeOut" }}
//             className="flex flex-col justify-center"
//             style={{ width: "clamp(240px, 28vw, 360px)" }}
//           >
//             {/* Headline */}
//             <h1
//               className="font-extrabold leading-[1.12] text-gray-900 dark:text-white mb-4"
//               style={{ fontSize: "clamp(28px, 3.2vw, 52px)" }}
//             >
//               Your{" "}
//               <span className="text-[#3d7a3d]">AI Chef</span>
//               <br />
//               in Your Kitchen{" "}
//               <span
//                 className="text-gray-400 dark:text-gray-500 font-light"
//                 style={{ fontSize: "0.65em" }}
//               >
//                 ✦✦
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p
//               className="text-gray-500 dark:text-gray-400 leading-relaxed mb-7"
//               style={{ fontSize: "clamp(12px, 1.1vw, 15px)", maxWidth: "260px" }}
//             >
//               Let AI create personalized recipes, tailored to your taste, ingredients, and health goals.
//             </p>

//             {/* CTA — green pill button */}
//             <div className="mb-7">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="inline-flex items-center gap-2 rounded-full bg-[#3d7a3d] hover:bg-[#2f6230] text-white font-semibold transition-colors duration-200 shadow-lg shadow-green-800/20"
//                 style={{ padding: "clamp(10px,1vw,14px) clamp(20px,2vw,28px)", fontSize: "clamp(12px,1vw,15px)" }}
//               >
//                 Get Cooking
//                 <ArrowRight size={15} />
//               </motion.button>
//             </div>

//             {/* Social proof */}
//             <div className="flex items-center gap-3">
//               <div className="flex -space-x-2.5">
//                 {avatars.map((src, i) => (
//                   <img
//                     key={i}
//                     src={src}
//                     alt="user avatar"
//                     className="w-8 h-8 rounded-full border-2 border-[#f5f1ea] dark:border-[#0f1410] object-cover"
//                   />
//                 ))}
//               </div>
//               <p className="text-gray-500 dark:text-gray-400 leading-snug" style={{ fontSize: "clamp(10px,0.85vw,13px)" }}>
//                 Join <span className="font-bold text-gray-800 dark:text-gray-200">50K+</span> food lovers<br />
//                 cooking smarter everyday!
//               </p>
//             </div>
//           </motion.div>

//           {/* RIGHT FLOATING CARDS — positioned over the kitchen/right side */}
//           <div className="absolute right-8 inset-y-0 flex flex-col justify-between py-8" style={{ width: "clamp(200px, 22vw, 260px)" }}>

//             {/* TOP card: Hello I'm AI Chef */}
//             <motion.div
//               initial={{ opacity: 0, y: -16, scale: 0.92 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
//               className="bg-white dark:bg-[#1c2b1e] rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 p-4"
//             >
//               <p className="font-bold text-gray-900 dark:text-white mb-1" style={{ fontSize: "clamp(12px,1vw,14px)" }}>
//                 👋 Hello, I'm AI Chef
//               </p>
//               <p className="text-gray-500 dark:text-gray-400 mb-3" style={{ fontSize: "clamp(11px,0.9vw,13px)" }}>
//                 What would you like to cook today?
//               </p>
//               {/* Animated waveform */}
//               <div className="flex items-center gap-[2.5px]" style={{ height: "22px" }}>
//                 {waveBars.map((h, i) => (
//                   <motion.div
//                     key={i}
//                     className="rounded-full bg-[#3d7a3d]"
//                     style={{ width: "3px", height: `${h}px` }}
//                     animate={{ scaleY: [1, 1.8, 1] }}
//                     transition={{
//                       duration: 0.9,
//                       repeat: Infinity,
//                       delay: i * 0.045,
//                       ease: "easeInOut",
//                     }}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//             {/* BOTTOM card: Ingredient circles */}
//             <motion.div
//               initial={{ opacity: 0, y: 16, scale: 0.92 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
//               className="bg-white dark:bg-[#1c2b1e] rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 p-3"
//             >
//               <div className="flex items-center gap-2">
//                 {ingredients.map((ing, i) => (
//                   <div key={i} className="flex flex-col items-center gap-1">
//                     <div
//                       className="rounded-full bg-[#f5f1ea] dark:bg-white/10 flex items-center justify-center shadow-sm"
//                       style={{ width: "clamp(40px,4vw,52px)", height: "clamp(40px,4vw,52px)", fontSize: "clamp(16px,1.6vw,22px)" }}
//                     >
//                       {ing.emoji}
//                     </div>
//                     <span className="text-gray-500 dark:text-gray-400 font-medium" style={{ fontSize: "clamp(9px,0.7vw,11px)" }}>
//                       {ing.label}
//                     </span>
//                   </div>
//                 ))}
//                 {/* + More */}
//                 <div className="flex flex-col items-center gap-1">
//                   <div
//                     className="rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 font-light"
//                     style={{ width: "clamp(40px,4vw,52px)", height: "clamp(40px,4vw,52px)", fontSize: "clamp(16px,1.6vw,22px)" }}
//                   >
//                     +
//                   </div>
//                   <span className="text-gray-500 dark:text-gray-400 font-medium" style={{ fontSize: "clamp(9px,0.7vw,11px)" }}>
//                     More
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════════════════════════════════
//           CATEGORIES
//       ═════════════════════════════════════════════════════════════════════ */}
//       <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-3xl font-bold">Categories</h2>
//           <button className="text-[#3d7a3d] hover:text-[#2f6230] font-medium transition-colors flex items-center gap-1 text-sm">
//             View all <ChevronRight size={15} />
//           </button>
//         </div>
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//           {categories.map((cat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.07 }}
//               className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-4 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
//             >
//               <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-[#3d7a3d]/20 group-hover:ring-[#3d7a3d]/60 transition-all duration-300">
//                 <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>
//               <h3 className="font-semibold text-sm">{cat.title}</h3>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cat.recipes}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════════════════════════════════
//           POPULAR RECIPES
//       ═════════════════════════════════════════════════════════════════════ */}
//       <div className="max-w-7xl mx-auto px-6 pb-14">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-3xl font-bold">Popular Recipes</h2>
//           <button className="text-[#3d7a3d] hover:text-[#2f6230] font-medium transition-colors flex items-center gap-1 text-sm">
//             View all <ChevronRight size={15} />
//           </button>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {recipes.map((recipe, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group"
//             >
//               <div className="relative overflow-hidden">
//                 <img src={recipe.image} alt={recipe.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
//                 <button
//                   onClick={() => toggleLike(i)}
//                   className="absolute top-3 left-3 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all duration-300"
//                 >
//                   <Heart size={15} className={liked[i] ? "fill-red-500 text-red-500" : "text-slate-400"} />
//                 </button>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-base mb-3">{recipe.title}</h3>
//                 <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
//                   <div className="flex items-center gap-1">
//                     <Clock3 size={13} />
//                     <span>{recipe.time}</span>
//                   </div>
//                   <span className="px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-[#3d7a3d] dark:text-green-400 font-medium">
//                     {recipe.difficulty}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-1 text-yellow-500 text-xs">
//                   <Star size={13} className="fill-yellow-500" />
//                   <span className="font-semibold text-black dark:text-white">{recipe.rating}</span>
//                   <span className="text-slate-400">({recipe.reviews})</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════════════════════════════════
//           ASK AI CHEF
//       ═════════════════════════════════════════════════════════════════════ */}
//       <div className="max-w-7xl mx-auto px-6 pb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden bg-gradient-to-br from-[#eef6ee] to-[#f5f0e8] dark:from-[#1a2e1c] dark:to-[#1a1f1a] border border-green-200/60 dark:border-green-800/30 rounded-[32px] p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
//         >
//           <div className="absolute top-0 right-0 w-72 h-72 bg-green-300/10 rounded-full blur-3xl pointer-events-none" />
//           <div className="flex-1 relative z-10">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-2xl bg-[#3d7a3d] flex items-center justify-center shadow-lg">
//                 <Sparkles size={18} className="text-white" />
//               </div>
//               <h2 className="text-3xl font-bold">Ask AI Chef</h2>
//             </div>
//             <p className="text-slate-600 dark:text-slate-400 text-base mb-8 max-w-sm">
//               Get personalized recipe suggestions, cooking tips, and step-by-step guidance powered by AI.
//             </p>
//             <div className="bg-white/80 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl p-4 mb-8 max-w-sm">
//               <div className="flex items-start gap-2 mb-3">
//                 <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-xs text-slate-400 mb-1">You</p>
//                   <p className="text-sm text-slate-700 dark:text-slate-300">What can I cook with chicken and broccoli?</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2">
//                 <div className="w-6 h-6 rounded-full bg-[#3d7a3d] flex-shrink-0 mt-0.5 flex items-center justify-center">
//                   <Sparkles size={10} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400 mb-1">AI Chef</p>
//                   <p className="text-sm text-slate-700 dark:text-slate-300">Try a Chicken Broccoli Stir-fry! Ready in 20 mins...</p>
//                 </div>
//               </div>
//             </div>
//             <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3d7a3d] hover:bg-[#2f6230] text-white font-semibold transition-colors duration-200 shadow-lg shadow-green-800/20 hover:-translate-y-0.5">
//               <Sparkles size={15} />
//               Start Chatting
//             </button>
//           </div>
//           <div className="w-44 h-56 relative z-10 flex-shrink-0 flex items-center justify-center text-8xl select-none">
//             🤖
//           </div>
//         </motion.div>
//       </div>

//     </div>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { Clock3, Star, Heart, Sparkles, ChevronRight, ArrowRight } from "lucide-react";

import AiCookingBanner from "../../assets/images/ai_cooking_banner.png";
import breakfast from "../../assets/images/breakfast.avif";
import lunch from "../../assets/images/lunch.avif";
import dinner from "../../assets/images/dinner.avif";
import dessert from "../../assets/images/deserts.avif";
import snackes from "../../assets/images/snacks.avif";
import drink from "../../assets/images/drink.jpg";
import chickenBriyani from "../../assets/images/chicken_biryani.avif";
import pannerButterMasala from "../../assets/images/panner_butter_masala.avif";
import chocolateLavaCake from "../../assets/images/chocolate_lava_cake.avif";
import vegSandwich from "../../assets/images/veg_sandwich.avif";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { title: "Breakfast", recipes: "25 Recipes", image: breakfast },
  { title: "Lunch", recipes: "40 Recipes", image: lunch },
  { title: "Dinner", recipes: "60 Recipes", image: dinner },
  { title: "Desserts", recipes: "30 Recipes", image: dessert },
  { title: "Snacks", recipes: "35 Recipes", image: snackes },
  { title: "Drinks", recipes: "20 Recipes", image: drink },
];

const recipes = [
  { title: "Chicken Biryani", image: chickenBriyani, time: "45 min", difficulty: "Medium", rating: "4.8", reviews: 320 },
  { title: "Paneer Butter Masala", image: pannerButterMasala, time: "30 min", difficulty: "Easy", rating: "4.7", reviews: 180 },
  { title: "Chocolate Lava Cake", image: chocolateLavaCake, time: "25 min", difficulty: "Easy", rating: "4.9", reviews: 215 },
  { title: "Veg Sandwich", image: vegSandwich, time: "15 min", difficulty: "Easy", rating: "4.6", reviews: 98 },
];

const avatars = [
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=7",
  "https://i.pravatar.cc/40?img=11",
  "https://i.pravatar.cc/40?img=15",
];

const ingredients = [
  { label: "Chicken", emoji: "🍗" },
  { label: "Avocado", emoji: "🥑" },
  { label: "Broccoli", emoji: "🥦" },
  { label: "Quinoa", emoji: "🌾" },
];

// 20 waveform bar heights
const waveBars = [4, 7, 12, 18, 12, 22, 15, 9, 19, 12, 7, 17, 9, 14, 7, 12, 17, 9, 7, 11];

// ─── Waveform component ───────────────────────────────────────────────────────
function Waveform() {
  return (
    <div className="flex items-center gap-[3px] mt-3" style={{ height: 22 }}>
      {waveBars.map((h, i) => (
        <motion.span
          key={i}
          className="block rounded-full bg-[#6BA539]"
          style={{ width: 3, height: h, transformOrigin: "center" }}
          animate={{ scaleY: [1, 1.9, 0.55, 1.5, 1] }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            delay: i * 0.065,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Hero() {
  const [liked, setLiked] = useState({});
  const toggleLike = (i) => setLiked((p) => ({ ...p, [i]: !p[i] }));

  const floatUp = { animate: { y: [0, -10, 0] }, transition: { duration: 3.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } };
  const floatDown = { animate: { y: [0, 10, 0] }, transition: { duration: 3.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 } };

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO BANNER
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: 520 }}>

        {/* Full-width background image */}
        <img
          src={AiCookingBanner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* ── Light mode overlay: solid cream on left → fully transparent at 58%
               Right side (robot + kitchen) is 100% clear, no tint at all      ── */}
        <div
          className="absolute inset-0 dark:hidden pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #f5f0e8 0%, #f5f0e8 24%, rgba(245,240,232,0.93) 34%, rgba(245,240,232,0.65) 44%, rgba(245,240,232,0.18) 53%, transparent 60%)",
          }}
        />

        {/* ── Dark mode overlay: same logic with dark tones ─────────────────── */}
        <div
          className="absolute inset-0 hidden dark:block pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0f1410 0%, #0f1410 24%, rgba(15,20,16,0.93) 34%, rgba(15,20,16,0.65) 44%, rgba(15,20,16,0.18) 53%, transparent 60%)",
          }}
        />

        {/* ── Inner content ─────────────────────────────────────────────────── */}
        <div className="relative z-10 h-full" style={{ minHeight: 520 }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full h-full flex items-center" style={{ minHeight: 520 }}>
            <div className="w-full flex items-center justify-between h-full py-12 lg:py-0 gap-6">

              {/* ── LEFT: Text content ─────────────────────────────────────── */}
              <motion.div
                className="w-full lg:w-[40%] flex flex-col justify-center"
                initial={{ opacity: 0, x: -36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Headline */}
                <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.14] mb-4 text-gray-900 dark:text-white">
                  Your{" "}
                  <span className="text-[#6BA539]">AI Chef</span>
                  <br />
                  in Your Kitchen{" "}
                  <span className="text-gray-300 text-3xl align-middle">✦</span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-7 max-w-[300px]">
                  Let AI create personalized recipes, tailored to your taste, ingredients, and health goals.
                </p>

                {/* CTA button */}
                <motion.div className="mb-7" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <button
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[15px] transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #6BA539 0%, #4d8822 100%)",
                      boxShadow: "0 8px 28px rgba(107,165,57,0.42)",
                    }}
                  >
                    Get Cooking
                    <motion.span
                      className="flex items-center"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </button>
                </motion.div>

                {/* Social proof */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {avatars.map((src, i) => (
                      <motion.img
                        key={i}
                        src={src}
                        alt="user"
                        className="w-9 h-9 rounded-full border-2 border-[#f5f0e8] dark:border-[#0f1410] object-cover"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + i * 0.08 }}
                      />
                    ))}
                  </div>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-snug">
                    Join <span className="font-bold text-gray-800 dark:text-gray-200">50K+</span> food lovers
                    <br />cooking smarter everyday!
                  </p>
                </div>
              </motion.div>

              {/* ── RIGHT: Floating cards — no overlay so image is crystal clear ── */}
              <div className="hidden lg:flex relative flex-1 h-full items-center justify-end" style={{ minHeight: 520 }}>

                {/* Card 1 — AI Chef greeting (top right) */}
                <motion.div
                  className="absolute top-8 right-2 z-20 w-[238px]"
                  initial={{ opacity: 0, y: -22, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={floatUp.animate}
                    transition={floatUp.transition}
                    className="bg-white/90 dark:bg-[#1c2b1e]/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/70 dark:border-white/10"
                    style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.07)" }}
                  >
                    {/* Gloss shimmer */}
                    <div
                      className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl pointer-events-none"
                      style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)" }}
                    />
                    <p className="font-bold text-[14px] text-gray-900 dark:text-white mb-1 relative z-10">
                      👋 Hello, I'm AI Chef
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-snug relative z-10">
                      What would you like to cook today?
                    </p>
                    <Waveform />
                  </motion.div>
                </motion.div>

                {/* Card 2 — Ingredient picker (bottom right) */}
                <motion.div
                  className="absolute bottom-10 right-2 z-20 w-[300px]"
                  initial={{ opacity: 0, y: 22, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={floatDown.animate}
                    transition={floatDown.transition}
                    className="bg-white/90 dark:bg-[#1c2b1e]/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/70 dark:border-white/10"
                    style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.07)" }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl pointer-events-none"
                      style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)" }}
                    />
                    <div className="flex items-center justify-between gap-2 relative z-10">
                      {ingredients.map((ing, i) => (
                        <motion.div
                          key={ing.label}
                          className="flex flex-col items-center gap-1.5 cursor-pointer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.85 + i * 0.09 }}
                          whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        >
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border border-gray-100 shadow-md"
                            style={{ background: "linear-gradient(135deg, #f8f6f0, #edeae0)" }}
                          >
                            {ing.emoji}
                          </div>
                          <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                            {ing.label}
                          </span>
                        </motion.div>
                      ))}
                      {/* + More */}
                      <motion.div
                        className="flex flex-col items-center gap-1.5 cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.25 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xl font-light">
                          +
                        </div>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">More</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CATEGORIES
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Categories</h2>
          <button className="text-[#3a7d44] hover:text-[#2d6235] font-medium transition flex items-center gap-1 text-sm">
            View all <ChevronRight size={15} />
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-4 text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-[#3a7d44]/20 group-hover:ring-[#3a7d44]/60 transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">{cat.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 ease-out">{cat.recipes}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          POPULAR RECIPES
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Popular Recipes</h2>
          <button className="text-[#3a7d44] hover:text-[#2d6235] font-medium transition flex items-center gap-1 text-sm">
            View all <ChevronRight size={15} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleLike(i)}
                  className="absolute top-3 left-3 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                >
                  <Heart
                    size={15}
                    className={liked[i] ? "fill-red-500 text-red-500" : "text-slate-400"}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-3">{recipe.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <div className="flex items-center gap-1">
                    <Clock3 size={13} />
                    <span>{recipe.time}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-[#3a7d44] dark:text-green-400 font-medium">
                    {recipe.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 text-xs">
                  <Star size={13} className="fill-yellow-500" />
                  <span className="font-semibold text-black dark:text-white">{recipe.rating}</span>
                  <span className="text-slate-400">({recipe.reviews})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          ASK AI CHEF
      ════════════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-[#eef6ee] to-[#f5f0e8] dark:from-[#1a2e1c] dark:to-[#1a1f1a] border border-green-200/60 dark:border-green-800/30 rounded-[32px] p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-300/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#3a7d44] flex items-center justify-center shadow-lg">
                <Sparkles size={18} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">Ask AI Chef</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base mb-8 max-w-sm">
              Get personalized recipe suggestions, cooking tips, and step-by-step guidance powered by AI.
            </p>
            <div className="bg-white/80 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl p-4 mb-8 max-w-sm">
              <div className="flex items-start gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400 mb-1">You</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    What can I cook with chicken and broccoli?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#3a7d44] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <Sparkles size={10} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">AI Chef</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Try a Chicken Broccoli Stir-fry! Ready in 20 mins...
                  </p>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3a7d44] hover:bg-[#2d6235] text-white font-semibold transition-all duration-300 shadow-lg shadow-green-700/25 hover:-translate-y-0.5">
              <Sparkles size={15} />
              Start Chatting
            </button>
          </div>

          <div className="w-44 h-56 relative z-10 flex-shrink-0 flex items-center justify-center text-8xl select-none">
            🤖
          </div>
        </motion.div>
      </div>

    </div>
  );
}
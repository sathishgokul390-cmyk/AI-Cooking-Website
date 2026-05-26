// import { BookMarked, Flame, CalendarDays, ChefHat, Clock3, Star, LogOut } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";

// const stats = [
//   { icon: BookMarked, label: "Saved Recipes", value: "24", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
//   { icon: Flame, label: "Calories Tracked", value: "1,200", color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
//   { icon: CalendarDays, label: "Meal Plans", value: "8", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
//   { icon: ChefHat, label: "Recipes Cooked", value: "37", color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10" },
// ];

// const recentRecipes = [
//   { title: "Chicken Biryani", time: "45 min", rating: "4.8", image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=400&auto=format&fit=crop" },
//   { title: "Avocado Toast", time: "10 min", rating: "4.6", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?q=80&w=400&auto=format&fit=crop" },
//   { title: "Pasta Carbonara", time: "20 min", rating: "4.8", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=400&auto=format&fit=crop" },
// ];

// export default function Dashboard() {
//   const { user, logout } = useAuth();

//   return (
//     <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">
//       <div className="max-w-6xl mx-auto px-6 py-10">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-4xl font-bold mb-1">Hey, {user?.name || "Chef"} 👋</h1>
//             <p className="text-slate-500 dark:text-slate-400">Here&apos;s what&apos;s cooking today</p>
//           </div>
//           <button
//             onClick={logout}
//             className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-500 transition px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:border-red-400/40"
//           >
//             <LogOut size={16} /> Logout
//           </button>
//         </div>

//         {/* STATS */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
//           {stats.map((s, i) => {
//             const Icon = s.icon;
//             return (
//               <div key={i} className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">
//                 <div className={`w-11 h-11 rounded-2xl ${s.bg} flex items-center justify-center mb-4`}>
//                   <Icon size={20} className={s.color} />
//                 </div>
//                 <p className="text-3xl font-bold mb-1">{s.value}</p>
//                 <p className="text-slate-500 dark:text-slate-400 text-sm">{s.label}</p>
//               </div>
//             );
//           })}
//         </div>

//         {/* RECENT SAVES */}
//         <div className="mb-12">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Recently Saved</h2>
//             <Link to="/recipe" className="text-orange-500 hover:text-orange-400 text-sm font-medium transition">View all</Link>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {recentRecipes.map((r, i) => (
//               <div key={i} className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
//                 <img src={r.image} alt={r.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
//                 <div className="p-4 flex items-center justify-between">
//                   <div>
//                     <h3 className="font-semibold mb-1">{r.title}</h3>
//                     <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
//                       <Clock3 size={12} /> {r.time}
//                     </span>
//                   </div>
//                   <span className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
//                     <Star size={14} className="fill-yellow-500" /> {r.rating}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* QUICK LINKS */}
//         <div className="grid sm:grid-cols-3 gap-4">
//           <Link to="/ai" className="bg-orange-500 hover:bg-orange-400 text-white rounded-3xl p-6 flex items-center gap-4 transition-all duration-300 shadow-lg shadow-orange-500/20">
//             <ChefHat size={28} />
//             <div>
//               <p className="font-bold text-lg">AI Chef</p>
//               <p className="text-orange-100 text-sm">Get recipe ideas</p>
//             </div>
//           </Link>
//           <Link to="/mealplanner" className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
//             <CalendarDays size={28} className="text-blue-500" />
//             <div>
//               <p className="font-bold text-lg">Meal Planner</p>
//               <p className="text-slate-500 dark:text-slate-400 text-sm">Plan your week</p>
//             </div>
//           </Link>
//           <Link to="/recipe" className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
//             <BookMarked size={28} className="text-orange-500" />
//             <div>
//               <p className="font-bold text-lg">Browse Recipes</p>
//               <p className="text-slate-500 dark:text-slate-400 text-sm">Explore the library</p>
//             </div>
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }

import {
  LayoutGrid,
  Bookmark,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  Power,
  Search,
  Bell,
  Plus,
  ChevronRight,
  Clock3,
  Heart,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";

export default function Dashboard() {
  const [active, setActive] = useState("dashboard");
  const [liked, setLiked] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, label: "", y: 0 });

  const showTooltip = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({ visible: true, label, y: rect.top + rect.height / 2 });
  };

  const hideTooltip = () => setTooltip({ visible: false, label: "", y: 0 });

  const sidebar = [
    { id: "dashboard", icon: LayoutGrid, label: "Dashboard" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "saved", icon: Bookmark, label: "Saved" },
    { id: "recipes", icon: BookOpen, label: "Recipes" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
  ];

  const recipes = [
    {
      id: 1,
      title: "Beef Stir-Fry",
      image:
        "https://images.unsplash.com/photo-1604908176997-4310b2c9f1c8?q=80&w=1200&auto=format&fit=crop",
      time: "20 min",
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Salmon with Dill Sauce",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop",
      time: "25 min",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Vegetarian Lasagna",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
      time: "60 min",
      level: "Advanced",
    },
  ];

  const favorites = [
    {
      title: "Chicken Parmesan",
      time: "30 min",
      serving: "4 servings",
    },
    {
      title: "Berry Smoothie Bowl",
      time: "15 min",
      serving: "2 servings",
    },
    {
      title: "Spinach Omelette",
      time: "10 min",
      serving: "1 serving",
    },
  ];

  const goals = [
    { label: "Prot", value: "48", height: "45%" },
    { label: "Carb", value: "32", height: "65%" },
    { label: "Fat", value: "44", height: "80%" },
    { label: "Fiber", value: "18", height: "35%" },
    { label: "Cal", value: "1240", height: "90%" },
  ];

  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#eef5f9] dark:bg-[#07111f] p-4 overflow-hidden text-black dark:text-white">
      {/* Blur Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-[1700px] mx-auto flex gap-8">
        {/* SIDEBAR */}
        <div className="sticky top-4 h-[137vh] w-[110px] rounded-[40px] bg-white dark:bg-[#111827]/95 border border-gray-200 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl flex flex-col justify-between items-center py-6 overflow-visible">

          {/* Top */}
          <div className="flex flex-col items-center gap-4">

            {/* Logo Space */}
            <div className="w-16 h-16 rounded-[22px] bg-[#f3f4f6] dark:bg-white/5 flex items-center justify-center">
              🍴
            </div>

            {/* Menu */}
            {sidebar.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActive(item.id)}
                  onMouseEnter={(e) => showTooltip(e, item.label)}
                  onMouseLeave={hideTooltip}
                  className={`w-16 h-16 rounded-[22px] flex items-center justify-center transition-all duration-300 ${active === item.id
                    ? "bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-lg"
                    : "bg-[#f3f4f6] dark:bg-white/5 hover:bg-[#ececec] dark:hover:bg-white/10"
                    }`}
                >
                  <Icon size={26} />
                </motion.button>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center gap-4">

            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => showTooltip(e, "Settings")}
              onMouseLeave={hideTooltip}
              className="w-16 h-16 rounded-[22px] bg-[#f3f4f6] dark:bg-white/5 hover:bg-[#ececec] dark:hover:bg-white/10 flex items-center justify-center transition-all"
            >
              <Settings size={26} />
            </motion.button>

            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => showTooltip(e, "Logout")}
              onMouseLeave={hideTooltip}
              className="w-16 h-16 rounded-[22px] bg-[#f3f4f6] dark:bg-white/5 hover:bg-red-100 dark:hover:bg-red-500/20 flex items-center justify-center transition-all"
            >
              <Power size={26} />
            </motion.button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1">
          {/* Navbar */}
          <div className="flex justify-between items-center mb-7">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome Back 👋
              </h1>

              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Discover healthy and delicious meals
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="w-[420px] rounded-full px-5 py-3 flex items-center gap-3 border bg-white dark:bg-[#111827]/80 border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-lg">
                <Search size={18} className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="bg-transparent outline-none w-full"
                />
              </div>

              {/* Add */}
              <motion.button
                whileHover={{ rotate: 90 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white shadow-lg"
              >
                <Plus />
              </motion.button>

              {/* Bell */}
              <button className="w-12 h-12 rounded-full bg-white dark:bg-[#111827]/80 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-lg">
                <Bell />
              </button>

              {/* Avatar */}
              <motion.img
                whileHover={{ scale: 1.08 }}
                src="https://i.pravatar.cc/100"
                className="w-12 h-12 rounded-full border-2 border-pink-500 object-cover"
              />
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-12 gap-6">

            {/* LEFT */}
            <div className="col-span-8 flex flex-col gap-6">

              {/* Chef Recommendation */}
              <div className="rounded-[35px] bg-white dark:bg-[#111827]/90 border border-gray-200 dark:border-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">
                    Chef Recommendation
                  </h2>

                  <button className="text-pink-500 font-medium">
                    View All
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-5">
                  {recipes.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="relative rounded-[30px] overflow-hidden group shadow-xl hover:shadow-[0_0_30px_rgba(255,90,90,0.25)]"
                    >
                      <img
                        src={item.image}
                        className="h-[340px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* Like */}
                      <button
                        onClick={() => toggleLike(item.id)}
                        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center"
                      >
                        <Heart
                          className={`${liked.includes(item.id)
                            ? "fill-red-500 text-red-500"
                            : "text-white"
                            }`}
                        />
                      </button>

                      {/* Text */}
                      <div className="absolute bottom-0 p-5 w-full text-white">
                        <h3 className="text-2xl font-semibold mb-3">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <Clock3 size={15} />
                            {item.time}
                          </span>

                          <span>{item.level}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Favorites */}
              <div className="rounded-[35px] bg-white dark:bg-[#111827]/90 border border-gray-200 dark:border-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-2xl font-semibold">
                    Favorite Recipes
                  </h2>

                  <button className="text-pink-500 font-medium">
                    See More
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {favorites.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      className="rounded-[25px] p-5 flex items-center justify-between bg-[#f4f4f6] dark:bg-[#1c2433] hover:bg-[#ececef] dark:hover:bg-[#243042] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"
                          className="w-16 h-16 rounded-2xl object-cover"
                        />

                        <div>
                          <h3 className="font-semibold text-xl">
                            {item.title}
                          </h3>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.time} • {item.serving}
                          </p>
                        </div>
                      </div>

                      <ChevronRight />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-4 flex flex-col gap-6">

              {/* Meal Plan */}
              <div className="rounded-[35px] bg-white dark:bg-[#111827]/90 border border-gray-200 dark:border-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                <h2 className="text-2xl font-semibold mb-6">
                  Meal Plan
                </h2>

                <div className="flex justify-between mb-7">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="text-center cursor-pointer"
                      >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {day}
                        </p>

                        <div
                          className={`mt-2 w-11 h-11 rounded-full flex items-center justify-center ${day === "Wed"
                            ? "bg-gradient-to-br from-pink-500 to-red-500 text-white"
                            : "bg-[#f3f4f6] dark:bg-white/5"
                            }`}
                        >
                          {13 + i}
                        </div>
                      </motion.div>
                    )
                  )}
                </div>

                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="rounded-[25px] p-4 flex items-center gap-4 mb-4 bg-[#f4f4f6] dark:bg-[#1c2433]"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"
                      className="w-16 h-16 rounded-2xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-xl">
                        Berry Smoothie Bowl
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        15 min • 2 servings
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Daily Goal */}
              <div className="rounded-[35px] bg-white dark:bg-[#111827]/90 border border-gray-200 dark:border-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-semibold">
                    Daily Goal
                  </h2>

                  <button className="text-pink-500 font-medium">
                    Details
                  </button>
                </div>

                <div className="flex items-end justify-between h-[260px]">
                  {goals.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="w-14 h-[220px] rounded-full bg-[#dfe1e6] dark:bg-[#1c2433] relative overflow-hidden">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: item.height }}
                          transition={{
                            duration: 1,
                            delay: i * 0.2,
                          }}
                          className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-pink-500 to-red-400 flex items-start justify-center pt-3 text-white font-semibold"
                        >
                          {item.value}
                        </motion.div>
                      </div>

                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Fixed Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed left-[130px] z-[9999] px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm font-medium whitespace-nowrap shadow-lg pointer-events-none -translate-y-1/2"
          style={{ top: tooltip.y }}
        >
          {tooltip.label}
          <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
        </div>
      )}
    </div>
  );
}

import { BookMarked, Flame, CalendarDays, ChefHat, Clock3, Star, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const stats = [
  { icon: BookMarked, label: "Saved Recipes", value: "24", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
  { icon: Flame, label: "Calories Tracked", value: "1,200", color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
  { icon: CalendarDays, label: "Meal Plans", value: "8", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
  { icon: ChefHat, label: "Recipes Cooked", value: "37", color: "text-green-500", bg: "bg-green-50 dark:bg-green-500/10" },
];

const recentRecipes = [
  { title: "Chicken Biryani", time: "45 min", rating: "4.8", image: "https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=400&auto=format&fit=crop" },
  { title: "Avocado Toast", time: "10 min", rating: "4.6", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?q=80&w=400&auto=format&fit=crop" },
  { title: "Pasta Carbonara", time: "20 min", rating: "4.8", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=400&auto=format&fit=crop" },
];

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-1">Hey, {user?.name || "Chef"} 👋</h1>
            <p className="text-slate-500 dark:text-slate-400">Here&apos;s what&apos;s cooking today</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-500 transition px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:border-red-400/40"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-11 h-11 rounded-2xl ${s.bg} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={s.color} />
                </div>
                <p className="text-3xl font-bold mb-1">{s.value}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{s.label}</p>
              </div>
            );
          })}
        </div>

        {/* RECENT SAVES */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recently Saved</h2>
            <Link to="/recipe" className="text-orange-500 hover:text-orange-400 text-sm font-medium transition">View all</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentRecipes.map((r, i) => (
              <div key={i} className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
                <img src={r.image} alt={r.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{r.title}</h3>
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                      <Clock3 size={12} /> {r.time}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-yellow-500 text-sm font-semibold">
                    <Star size={14} className="fill-yellow-500" /> {r.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Link to="/ai" className="bg-orange-500 hover:bg-orange-400 text-white rounded-3xl p-6 flex items-center gap-4 transition-all duration-300 shadow-lg shadow-orange-500/20">
            <ChefHat size={28} />
            <div>
              <p className="font-bold text-lg">AI Chef</p>
              <p className="text-orange-100 text-sm">Get recipe ideas</p>
            </div>
          </Link>
          <Link to="/mealplanner" className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
            <CalendarDays size={28} className="text-blue-500" />
            <div>
              <p className="font-bold text-lg">Meal Planner</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Plan your week</p>
            </div>
          </Link>
          <Link to="/recipe" className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
            <BookMarked size={28} className="text-orange-500" />
            <div>
              <p className="font-bold text-lg">Browse Recipes</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Explore the library</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}

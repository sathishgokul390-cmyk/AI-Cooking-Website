import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import logo from "../../assets/images/main_logo.png"
import ThemeToggle from "../ui/ThemeToggle";
import { useAuth } from "../../hooks/useAuth";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Recipes", to: "/recipe" },
  { label: "AI Chef", to: "/ai" },
  { label: "Favorites", to: "/favorites" },
  { label: "Meal Planner", to: "/mealplanner" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  // Get initials for avatar
  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#121413]/90 backdrop-blur-xl border-b border-black/10 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="CookAI" 
          style={{
            
          }} className="h-10 w-10 object-contain" />
          <span className="text-2xl font-bold text-orange-500">CookAI</span>
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.to
                  ? "text-orange-500 border-b-2 border-orange-500 pb-0.5"
                  : "text-slate-600 dark:text-slate-300 hover:text-orange-500"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          {/* <div className="hidden md:flex items-center gap-2 bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="bg-transparent outline-none text-sm w-32 text-black dark:text-white placeholder:text-slate-400"
            />
          </div> */}

          {/* THEME TOGGLE — sun/moon pill */}
          <ThemeToggle />

          {/* AVATAR / LOGIN */}
          {isAuthenticated ? (
            <div className="relative group">
              <button className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold flex items-center justify-center transition-all duration-300 shadow-md shadow-orange-500/30">
                {initials}
              </button>
              {/* dropdown */}
              <div className="absolute right-0 top-full mt-2 w-44 bg-white dark:bg-[#0F172A] border border-black/10 dark:border-white/10 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:bg-slate-50 dark:hover:bg-white/5 transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold flex items-center justify-center transition-all duration-300 shadow-md shadow-orange-500/30"
            >
              ?
            </Link>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="lg:hidden p-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="lg:hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#121413] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 dark:text-slate-300 hover:text-orange-500 transition py-1"
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-orange-500 transition py-1"
              >
                Dashboard
              </Link>
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                className="text-left text-red-500 py-1"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-orange-500 font-medium py-1"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    // Simulated register — replace with real API call
    setTimeout(() => {
      login({ name: form.name, email: form.email });
      setLoading(false);
      navigate("/dashboard");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white flex items-center justify-center px-4 transition-all duration-300">
      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500 mb-1">CookAI</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Create your account and start cooking</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 bg-red-50 dark:bg-red-500/10 px-4 py-3 rounded-xl">
              {error}
            </p>
          )}

          {/* NAME */}
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-black/10 dark:border-white/10 outline-none focus:border-orange-400/60 text-sm transition"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-black/10 dark:border-white/10 outline-none focus:border-orange-400/60 text-sm transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Min. 6 characters"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-black/10 dark:border-white/10 outline-none focus:border-orange-400/60 text-sm transition pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPass((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500 transition"
              >
                {showPass ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <><UserPlus size={17} /> Create Account</>
            )}
          </button>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

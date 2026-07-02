import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Measure container width so GoogleLogin fills it on every breakpoint.
  // Mobile < 640 → ~full viewport minus padding
  // Tablet 640–1024 → card is max-w-md (448px) minus 2×32px padding = 384px
  // Desktop > 1024 → same card width, stable at 384px
  const googleBtnRef = useRef(null);
  const [googleBtnWidth, setGoogleBtnWidth] = useState(368);

  useEffect(() => {
    const measure = () => {
      if (googleBtnRef.current) {
        setGoogleBtnWidth(googleBtnRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // ── Email / password ──────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    // Simulated login — replace with real API call
    setTimeout(() => {
      login({ name: "User", email: form.email });
      setLoading(false);
      navigate("/dashboard");
    }, 900);
  };

  // ── Google OAuth ──────────────────────────────────────────────────────────
  const handleGoogleSuccess = async ({ credential }) => {
    if (!credential) {
      setError("Google did not return a credential. Please try again.");
      return;
    }
    setGoogleLoading(true);
    setError("");
    try {
      await googleLogin(credential);
      navigate("/dashboard");
    } catch (err) {
      setError(err?.message || "Google login failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleGoogleError = () => {
    setError("Google sign-in failed or was cancelled. Please try again.");
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white flex items-center justify-center px-4 transition-all duration-300">
      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500 mb-1">CookAI</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back — let's get cooking</p>
        </div>

        <div className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Login</h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 bg-red-50 dark:bg-red-500/10 px-4 py-3 rounded-xl">
              {error}
            </p>
          )}

          {/* ── GOOGLE BUTTON — always active, not affected by checkbox ──── */}
          <div ref={googleBtnRef} className="w-full mb-5">
            {googleLoading ? (
              <div className="w-full h-[40px] flex items-center justify-center gap-3 rounded-md border border-black/15 dark:border-white/15 bg-white dark:bg-white/5">
                <span className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Signing in with Google…</span>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap={false}
                theme="outline"
                size="large"
                text="signin_with"
                shape="rectangular"
                logo_alignment="left"
                width={googleBtnWidth}
              />
            )}
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 mb-5">
            <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
            <span className="text-xs text-slate-400 font-medium">or continue with email</span>
            <span className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          </div>

          {/* EMAIL / PASSWORD FORM */}
          <form onSubmit={handleSubmit}>

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
            <div className="mb-5">
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
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

            {/* ── TERMS CHECKBOX — sits directly above the Login button ──── */}
            <label className="flex items-start gap-3 mb-4 cursor-pointer select-none">
              <div className="relative mt-0.5 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="sr-only"
                />
                {/* custom orange checkbox */}
                <div
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200
                    ${agreed
                      ? "bg-orange-500 border-orange-500"
                      : "bg-slate-50 dark:bg-black/30 border-black/20 dark:border-white/20"
                    }`}
                >
                  {agreed && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                I agree to the{" "}
                <a
                  href="/terms"
                  onClick={(e) => e.stopPropagation()}
                  className="text-orange-500 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  onClick={(e) => e.stopPropagation()}
                  className="text-orange-500 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* LOGIN BUTTON — disabled until checkbox is ticked */}
            <button
              type="submit"
              disabled={loading || !agreed}
              className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <><LogIn size={17} /> Login</>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-5">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-orange-500 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

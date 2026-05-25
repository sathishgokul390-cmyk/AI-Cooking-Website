import { Users, Target, Sparkles, Heart } from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    role: "AI Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    name: "Sara Kim",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
  },
  {
    name: "James Patel",
    role: "Full Stack Dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    name: "Mia Torres",
    role: "Food Scientist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
  },
];

const values = [
  {
    icon: Sparkles,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    title: "AI-Powered",
    desc: "Every recipe suggestion is backed by smart AI that learns your taste preferences.",
  },
  {
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-500/10",
    title: "Made with Love",
    desc: "We're food lovers first. Every feature is built to make cooking more enjoyable.",
  },
  {
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    title: "Goal-Oriented",
    desc: "Whether it's weight loss, muscle gain, or just eating better — we help you get there.",
  },
  {
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-500/10",
    title: "Community First",
    desc: "A growing community of home cooks sharing recipes, tips, and inspiration.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#0B1120] text-black dark:text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-5">
            About <span className="text-orange-500">CookAI</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We're on a mission to make home cooking smarter, healthier, and more fun — powered by AI and driven by a love for food.
          </p>
        </div>

        {/* STORY */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-5">Our Story</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              CookAI started with a simple question: what if your kitchen had an AI sous-chef? One that knows your dietary needs, suggests recipes based on what's in your fridge, and helps you plan meals for the whole week.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We built CookAI to bridge the gap between technology and the dinner table — making every meal an opportunity to eat better and cook smarter.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
              alt="Cooking"
              className="w-full h-80 object-cover rounded-[32px] shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-orange-500/30">
              Est. 2024
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${v.bg} flex items-center justify-center mb-4`}>
                    <Icon size={22} className={v.color} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TEAM */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl p-6 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 bg-orange-50 dark:bg-orange-500/10"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-orange-500 text-sm font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

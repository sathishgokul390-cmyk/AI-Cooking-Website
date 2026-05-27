import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      "CookAI completely changed the way I cook. The AI recipes are creative, healthy, and incredibly delicious.",
  },

  {
    id: 2,
    name: "Michael Lee",
    role: "Fitness Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "The calories analyzer and meal planner are amazing. Perfect for tracking healthy nutrition goals.",
  },

  {
    id: 3,
    name: "Emma Watson",
    role: "Home Chef",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    review:
      "The premium UI and smart recommendations make this platform feel like the future of cooking.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        relative py-24
        bg-white
        dark:bg-[#0B1120]
        overflow-hidden
      "
    >
      {/* Background Blur */}
      <div
        className="
          absolute top-0 left-1/2
          -translate-x-1/2
          w-[500px] h-[500px]
          bg-orange-500/10
          blur-[140px]
          rounded-full
        "
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <span
            className="
              inline-block
              px-5 py-2
              rounded-full
              bg-orange-500/10
              text-orange-500
              text-sm font-semibold
              mb-5
            "
          >
            Testimonials
          </span>

          <h2
            className="
              text-4xl lg:text-6xl
              font-bold
              text-slate-900
              dark:text-white
              leading-tight
            "
          >
            Loved by Food
            <span className="text-orange-500">
              {" "}Creators
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              dark:text-slate-400
              max-w-2xl mx-auto
            "
          >
            Thousands of users trust CookAI for
            smart recipes, healthy meals, and
            premium cooking experiences.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid md:grid-cols-2 xl:grid-cols-3
            gap-8
          "
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                relative
                group
                rounded-[32px]
                border border-black/5
                dark:border-white/10
                bg-white/70
                dark:bg-white/5
                backdrop-blur-2xl
                p-8
                overflow-hidden
                hover:-translate-y-2
                transition-all duration-500
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-orange-500/0
                  via-orange-500/0
                  to-orange-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              ></div>

              {/* Quote */}
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-orange-500/10
                  flex items-center justify-center
                  mb-6
                "
              >
                <Quote
                  size={26}
                  className="text-orange-500"
                />
              </div>

              {/* Review */}
              <p
                className="
                  text-slate-600
                  dark:text-slate-300
                  leading-relaxed
                  mb-8
                "
              >
                {item.review}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="
                      fill-orange-400
                      text-orange-400
                    "
                  />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-14 h-14
                    rounded-2xl
                    object-cover
                    border border-white/10
                  "
                />

                <div>
                  <h3
                    className="
                      font-semibold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
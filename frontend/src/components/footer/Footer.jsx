import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  X,
  GitHub,
  Favorite,
  Send,
} from "@mui/icons-material";

export default function Footer() {
  const socialLinks = [
  {
    icon: <Facebook fontSize="small" />,
    link: "https://facebook.com",
    color: "#1877F2",
  },
  {
    icon: <Instagram fontSize="small" />,
    link: "https://instagram.com",
    color: "#E1306C",
  },
  {
    icon: <X fontSize="small" />,
    link: "https://twitter.com",
    color: "#000000",
  },
  {
    icon: <YouTube fontSize="small" />,
    link: "https://youtube.com",
    color: "#FF0000",
  },
  {
    icon: <GitHub fontSize="small" />,
    link: "https://github.com",
    color: "#333333",
  },
  {
    icon: <LinkedIn fontSize="small" />,
    link: "https://linkedin.com",
    color: "#0A66C2",
  },
];

  return (
    <footer
      className="
        bg-[#121413]
        text-white
        border-t
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
            pb-10
            border-b
            border-white/10
          "
        >

          {/* LOGO */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-3">
              CookAI
            </h2>

            <p className="text-slate-400 leading-7">
              Discover delicious recipes,
              cook smarter with AI,
              and enjoy every meal.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <a href="#" className="hover:text-orange-500 transition">
                Home
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Recipes
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Categories
              </a>

              <a href="#" className="hover:text-orange-500 transition">
                Contact
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-5">
              Social Media
            </h3>

            <div className="flex flex-wrap gap-4 mr-20">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  hover:bg-orange-500
                  transition-all
                  duration-300
                  hover:scale-110
                "
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
                >
                  {item.icon}
                </a>
              ))}
            </div>

          </div> */}

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Newsletter
            </h3>

            <div
              className="
                flex
                items-center
                bg-white/10
                rounded-xl
                overflow-hidden
              "
            >
              <input
                type="email"
                placeholder="Email Address"
                className="
                  flex-1
                  px-4
                  py-3
                  bg-transparent
                  outline-none
                  text-sm
                "
              />

              <button
                className="
                  bg-orange-500
                  px-4
                  py-3
                  hover:bg-orange-400
                  transition
                "
              >
                <Send fontSize="small" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
            text-sm
            text-slate-400
          "
        >
          <p>
            © 2026 CookAI. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made with
            <Favorite
              fontSize="small"
              className="text-red-500"
            />
            by CookAI Team
          </p>
        </div>
      </div>
    </footer>
  );
}
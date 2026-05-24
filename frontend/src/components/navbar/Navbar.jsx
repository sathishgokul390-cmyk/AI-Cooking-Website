// import { Moon, Sun } from 'lucide-react'
// import { useState } from 'react'

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(true)

//   const toggleTheme = () => {
//     document.documentElement.classList.toggle('dark')
//     setDarkMode(!darkMode)
//   }

//   return (
//     <nav className='sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10'>
//       <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
//         <h1 className='text-2xl font-bold text-orange-400'>🍳 CookAI</h1>

//         <div className='hidden md:flex gap-8 text-slate-300'>
//           <a href='/'>Home</a>
//           <a href='/recipe'>Recipes</a>
//           <a href='/ai_generate'>AI Generator</a>
//           <a href='/features'>Features</a>
//         </div>

//         <div className='flex gap-4 items-center'>
//           <button
//             onClick={toggleTheme}
//             className='p-2 rounded-xl bg-white/10'
//           >
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//           </button>

//           <button className='bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-xl'>
//             Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   )
// }

import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => setDarkMode(prev => !prev)

  return (
    <nav className='sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 relative'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

        {/* Logo + Toggle */}
        <div className='flex items-center gap-3'>
          {/* Hamburger toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className='p-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-white'
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <h1 className='text-2xl font-bold text-orange-400'>
            <Link to='/' className='flex items-center gap-3'>
              <img src={logo} alt="CookAI Logo" className='h-12 w-12 object-contain' />
              <span className='text-3xl font-bold text-orange-400'>CookAI</span>
            </Link>
          </h1>
        </div>

        {/* Menu */}
        <div className='hidden md:flex gap-8 text-slate-300 items-center'>
          <Link to='/' className='hover:text-orange-400 transition'>Home</Link>
          <Link to='/about' className='hover:text-orange-400 transition'>About</Link>
          <Link to='/recipe' className='hover:text-orange-400 transition'>Recipes</Link>
          <Link to='/aiGenerate' className='hover:text-orange-400 transition'>AI Generator</Link>
          <Link to='/features' className='hover:text-orange-400 transition'>Features</Link>
          <Link to='/trendingRecipes' className='hover:text-orange-400 transition'>TrendingRecipes</Link>
        </div>

        {/* Right Section */}
        <div className='flex gap-4 items-center'>
          <button
            onClick={toggleTheme}
            className='p-2 rounded-xl bg-white/10 hover:bg-white/20 transition'
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to='/login'
            className='bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-xl transition'
          >
            Login
          </Link>
        </div>

      </div>

      {/* Categories dropdown */}
      {menuOpen && (
        <div className='absolute left-0 top-full w-56 bg-black/80 backdrop-blur-xl border border-white/10 rounded-b-2xl shadow-2xl z-50 py-3'>
          {[
            { label: '🥦 Veg', emoji: '' },
            { label: '🍗 Non-Veg', emoji: '' },
            { label: '🥚 Egg', emoji: '' },
            { label: '🥗 Diet', emoji: '' },
            { label: '🍿 Snacks', emoji: '' },
            { label: '🥤 Drinks', emoji: '' },
            { label: '🍰 Desserts', emoji: '' },
          ].map(({ label }) => (
            <button
              key={label}
              onClick={() => setMenuOpen(false)}
              className='w-full text-left px-5 py-3 text-slate-300 hover:text-orange-400 hover:bg-white/5 transition text-sm'
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
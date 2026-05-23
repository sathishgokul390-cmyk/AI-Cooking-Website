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

import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

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
    <nav className='sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>

        <h1 className='text-2xl font-bold text-orange-400'>
          <Link to='/'>🍳 CookAI</Link>
        </h1>

        <div className='hidden md:flex gap-8 text-slate-300'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/recipe'>Recipes</Link>
          <Link to='/aiGenerate'>AI Generator</Link>
          <Link to='/features'>Features</Link>
          <Link to='/trendingRecipes'>TrendingRecipes</Link>
        </div>

        <div className='flex gap-4 items-center'>
          <button
            onClick={toggleTheme}
            className='p-2 rounded-xl bg-white/10'
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to='/login'
            className='bg-orange-500 hover:bg-orange-400 px-5 py-2 rounded-xl'
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
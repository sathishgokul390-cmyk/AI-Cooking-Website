import Navbar from '../../components/navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import TrendingRecipes from '../../sections/TrendingRecipes/TrendingRecipes'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-[#121212] text-white'>
      <Navbar />
      <Hero />
      <TrendingRecipes />
      <Footer />
    </div>
  )
}
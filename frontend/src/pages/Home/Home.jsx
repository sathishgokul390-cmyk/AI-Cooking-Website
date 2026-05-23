import Navbar from '../../components/navbar/Navbar'
import Hero from '../../sections/Hero/Hero'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

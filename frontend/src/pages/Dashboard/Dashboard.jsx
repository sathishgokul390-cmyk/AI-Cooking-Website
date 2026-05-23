import Navbar from '../../components/navbar/Navbar'

export default function Dashboard() {
  return (
    <div className='min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300'>
      <Navbar />
      <div className='p-10'>
        <h1 className='text-5xl font-bold mb-8'>Dashboard</h1>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='bg-gray-100 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10'>
            <h3 className='text-xl mb-2'>Saved Recipes</h3>
            <p className='text-4xl font-bold text-orange-400'>24</p>
          </div>

          <div className='bg-gray-100 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10'>
            <h3 className='text-xl mb-2'>Calories Tracked</h3>
            <p className='text-4xl font-bold text-orange-400'>1200</p>
          </div>

          <div className='bg-gray-100 dark:bg-white/5 p-6 rounded-3xl border border-gray-200 dark:border-white/10'>
            <h3 className='text-xl mb-2'>Meal Plans</h3>
            <p className='text-4xl font-bold text-orange-400'>8</p>
          </div>
        </div>
      </div>
    </div>
  )
}

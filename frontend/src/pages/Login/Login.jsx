import Navbar from '../../components/navbar/Navbar'

export default function Login() {
  return (
    <div className='min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-white transition-colors duration-300'>
      <Navbar />
      <div className='flex items-center justify-center py-20 px-4'>
        <div className='bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-10 rounded-3xl w-full max-w-md'>
          <h2 className='text-3xl font-bold mb-6'>Login</h2>

          <input
            type='email'
            placeholder='Email'
            className='w-full p-4 rounded-xl bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 mb-4 text-gray-900 dark:text-white placeholder-gray-400 outline-none'
          />

          <input
            type='password'
            placeholder='Password'
            className='w-full p-4 rounded-xl bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 mb-6 text-gray-900 dark:text-white placeholder-gray-400 outline-none'
          />

          <button className='w-full bg-orange-500 hover:bg-orange-400 text-white py-3 rounded-xl transition-colors'>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

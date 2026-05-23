export default function Login() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#121212]'>
      <div className='bg-white/5 border border-white/10 p-10 rounded-3xl w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-6'>Login</h2>

        <input
          type='email'
          placeholder='Email'
          className='w-full p-4 rounded-xl bg-black/30 border border-white/10 mb-4'
        />

        <input
          type='password'
          placeholder='Password'
          className='w-full p-4 rounded-xl bg-black/30 border border-white/10 mb-6'
        />

        <button className='w-full bg-orange-500 hover:bg-orange-400 py-3 rounded-xl'>
          Login
        </button>
      </div>
    </div>
  )
}
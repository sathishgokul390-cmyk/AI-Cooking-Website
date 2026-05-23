export default function Hero() {
  return (
    <section className='max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center'>
      <div>
        <div className='inline-flex px-4 py-2 rounded-full bg-orange-500/10 text-orange-300 mb-6'>
          ✨ AI Powered Cooking Platform
        </div>

        <h1 className='text-6xl font-bold leading-tight mb-6'>
          Cook Smarter
          <br />
          with <span className='text-orange-400'>AI</span>
        </h1>

        <p className='text-slate-400 text-lg mb-8'>
          Generate recipes instantly using ingredients you already have.
        </p>

        <div className='bg-white/5 border border-white/10 rounded-3xl p-4'>
          <textarea
            placeholder='Egg, rice, onion...'
            className='w-full h-32 bg-transparent outline-none resize-none'
          />

          <button className='mt-4 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-2xl font-semibold'>
            Generate Recipe
          </button>
        </div>
      </div>

      <img
        src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
        className='rounded-3xl border border-white/10 shadow-2xl'
      />
    </section>
  )
}
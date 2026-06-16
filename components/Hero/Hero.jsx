import imgback1 from '../../src/assets/imgback1.jpg'

export default function Hero () {
  return (
    <section
      className='relative h-[95vh] overflow-hidden flex items-center text-right pr-10'
    >
      <img
        src={imgback1}
        alt='Estudio musical'
        className='absolute inset-0 w-full h-full object-cover object-[center_30%] scale-105'
      />

      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10 max-w-6xl ml-auto  px-6 pt-24'>

        <p className='text-sm uppercase tracking-[0.3em] text-gray-300 mb-4 font-[Inter]'>
          Estudio de grabación profesional
        </p>

        <h1 className='text-5xl md:text-7xl text-white font-[Playfair_Display_SC] leading-tight'>
          Esotérico <br /> Estudio
        </h1>

        <p className='mt-6 text-gray-300 max-w-xl text-lg font-[Inter]'>
          Grabación, mezcla y producción musical <br /> para artistas que
          buscan un sonido auténtico.
        </p>

        <div className='flex justify-end gap-4 mt-8'>
          <a
            href='#contacto'
            className='bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition'
          >
            Reservar sesión
          </a>

          <a
            href='#portfolio'
            className='border border-white/20 hover:border-white text-white px-6 py-3 rounded-full transition'
          >
            Escuchar demos
          </a>
        </div>

      </div>
    </section>
  )
}

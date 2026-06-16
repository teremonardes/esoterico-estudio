export default function About () {
  return (
    <section
      id='nosotros'
      className='bg-black text-white py-12 border-t border-white/10'
    >
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center'>

        {/* Imagen */}
        <div className='relative overflow-hidden rounded-2xl'>
          <img
            src='https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop'
            alt='Estudio musical'
            className='w-full h-[400px] object-cover scale-105 hover:scale-110 transition duration-700'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/30' />
        </div>

        {/* Texto */}
        <div>

          <p className='text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 font-[Inter]'>
            Sobre nosotros
          </p>

          <h2 className='text-2xl md:text-3xl font-[Playfair_Display_SC] leading-tight mb-8'>
            Un espacio creado para transformar sonido en atmósfera
          </h2>

          <p className='text-gray-400 text-lg leading-relaxed mb-6 font-[Inter]'>
            En Esotérico Estudio combinamos producción musical,
            grabación y diseño sonoro en un entorno cuidadosamente
            construido para potenciar la creatividad de cada artista.
          </p>

          <p className='text-gray-500 leading-relaxed mb-10 font-[Inter]'>
            Nuestro enfoque mezcla tecnología, estética y sensibilidad
            artística para lograr producciones auténticas y con identidad.
            Cada sesión busca capturar emociones reales y convertirlas
            en experiencias sonoras memorables.
          </p>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-6 pt-6 border-t border-white/10'>

            <div>
              <h3 className='text-2xl font-[Playfair_Display_SC]'>
                +120
              </h3>

              <p className='text-gray-500 text-sm mt-2 font-[Inter]'>
                Sesiones
              </p>
            </div>

            <div>
              <h3 className='text-2xl font-[Playfair_Display_SC]'>
                8 años
              </h3>

              <p className='text-gray-500 text-sm mt-2 font-[Inter]'>
                Experiencia
              </p>
            </div>

            <div>
              <h3 className='text-2xl font-[Playfair_Display_SC]'>
                24/7
              </h3>

              <p className='text-gray-500 text-sm mt-2 font-[Inter]'>
                Creatividad
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

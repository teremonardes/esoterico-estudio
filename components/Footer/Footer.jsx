export default function Footer () {
  return (
    <footer className='bg-black border-t border-white/10'>
      <div className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-3 gap-10'>
          {/* Marca */}
          <div>
            <h2 className='font-[Playfair_Display_SC] text-2xl text-white tracking-wider mb-4'>
              Esotérico Estudio
            </h2>
            <p className='font-[Inter] text-gray-400 leading-relaxed'>
              Grabación, mezcla y producción musical para artistas que buscan un
              sonido auténtico y profesional.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className='font-[Inter] uppercase tracking-[0.2em] text-sm text-gray-300 mb-4'>
              Navegación
            </h3>

            <ul className='space-y-3 font-[Inter] text-gray-400'>
              <li>
                <a href='#inicio' className='hover:text-white transition'>
                  Inicio
                </a>
              </li>

              <li>
                <a href='#nosotros' className='hover:text-white transition'>
                  Nosotros
                </a>
              </li>

              <li>
                <a href='#servicios' className='hover:text-white transition'>
                  Servicios
                </a>
              </li>

              <li>
                <a href='#contacto' className='hover:text-white transition'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className='font-[Inter] uppercase tracking-[0.2em] text-sm text-gray-300 mb-4'>
              Contacto
            </h3>

            <div className='space-y-3 font-[Inter] text-gray-400'>
              <p>📍 Santiago, Chile</p>
              <p>📞 +56 9 5051 7940</p>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className='border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='font-[Inter] text-sm text-gray-500'>
            © {new Date().getFullYear()} Esotérico Estudio. Todos los derechos
            reservados.
          </p>

          <div className='flex gap-6 text-gray-400'>
            <a href='#' className='hover:text-white transition'>
              Instagram
            </a>

            <a href='#' className='hover:text-white transition'>
              YouTube
            </a>

            <a href='#' className='hover:text-white transition'>
              Spotify
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

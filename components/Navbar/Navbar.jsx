import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50'>

      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>

        {/* Logo */}
        <h1 className='text-white text-lg font-[Playfair_Display_SC] tracking-wide'>
          <a href='#inicio'>Esotérico Estudio</a>
        </h1>

        {/* Menú Desktop */}
        <div className='hidden md:flex gap-10 text-sm text-gray-300 font-[Inter]'>
          <a href='#servicios' className='hover:text-white transition'>
            Servicios
          </a>
          <a href='#nosotros' className='hover:text-white transition'>
            Nosotros
          </a>
          <a href='#equipos' className='hover:text-white transition'>
            Equipos
          </a>
          <a href='#contacto' className='hover:text-white transition'>
            Contacto
          </a>
        </div>

        {/* Botón Reservar (solo desktop) */}
        <a
          href='https://wa.me/56900000000'
          className='hidden md:block bg-mist-800 hover:bg-mist-700 text-white text-sm px-4 py-2 rounded-full transition'
        >
          Reservar
        </a>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className='md:hidden text-white text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className='md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-gray-300 text-base'>
          <a href='#servicios' onClick={() => setIsOpen(false)} className='hover:text-white transition'>
            Servicios
          </a>
          <a href='#nosotros' onClick={() => setIsOpen(false)} className='hover:text-white transition'>
            Nosotros
          </a>
          <a href='#equipos' onClick={() => setIsOpen(false)} className='hover:text-white transition'>
            Equipos
          </a>
          <a href='#contacto' onClick={() => setIsOpen(false)} className='hover:text-white transition'>
            Contacto
          </a>

          <a
            href='https://wa.me/56900000000'
            className='bg-mist-800 hover:bg-mist-700 text-white text-center py-3 rounded-full transition'
            onClick={() => setIsOpen(false)}
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  )
}

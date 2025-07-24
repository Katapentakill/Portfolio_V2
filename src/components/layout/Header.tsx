'use client'

import { useState } from 'react'
import { Home, User, Briefcase, Phone, Menu, X, Heart, EyeOff, Settings2, BadgeCheck } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'inicio', icon: Home, label: 'Inicio' },
    { id: 'about', icon: User, label: 'Sobre Mí' },
    { id: 'skills', icon: Settings2, label: 'Habilidades' },    // Cambiado
    { id: 'experience', icon: BadgeCheck, label: 'Experiencia' }, // Cambiado
    { id: 'projects', icon: Briefcase, label: 'Proyectos' },
    { id: 'contact', icon: Phone, label: 'Contacto' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-amber-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo con efecto de parpadeo terrorífico */}
          <div className="flex items-center space-x-2 text-2xl font-bold text-amber-400 tracking-wider flicker-terrifying-fast navbar-glitch-text">
            <span>ALEXANDER TAPIA</span>
            <EyeOff size={20} className="text-red-500 animate-pulse" />
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-200 hover:text-amber-300 hover:bg-amber-400/10 transition-all duration-300 hover-shadow-amber-glow nav-enhanced ${
                  index % 2 === 0 ? 'hover:flicker-terrifying-slow' : 'hover:flicker-terrifying'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Botón menú móvil con parpadeo terrorífico */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-amber-400 hover:text-amber-300 transition-colors flicker-terrifying enhanced-visibility"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-500/20">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`flex items-center space-x-3 px-4 py-3 text-gray-200 hover:text-amber-300 hover:bg-amber-400/10 rounded-lg transition-all duration-300 nav-enhanced ${
                    index % 3 === 0 ? 'hover:flicker-terrifying' : index % 3 === 1 ? 'hover:flicker-terrifying-slow' : 'hover:flicker-terrifying-fast'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
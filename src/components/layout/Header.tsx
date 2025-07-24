'use client'

import { useState } from 'react'
import { Home, User, Briefcase, Phone, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'inicio', icon: Home, label: 'Inicio' },
    { id: 'about', icon: User, label: 'Sobre Mí' },
    { id: 'projects', icon: Briefcase, label: 'Proyectos' },
    { id: 'contact', icon: Phone, label: 'Contacto' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/30">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-400 tracking-wider">
            PORTFOLIO
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-900/20 transition-all duration-300"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-red-400 hover:text-red-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-red-900/30">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-300"
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
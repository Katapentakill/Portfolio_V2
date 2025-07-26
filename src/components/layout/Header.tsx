'use client'

import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Phone, Menu, X, Heart, EyeOff, Settings2, BadgeCheck } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: 'hero', icon: Home, label: 'Inicio' },
    { id: 'about', icon: User, label: 'Sobre Mí' },
    { id: 'skills', icon: Settings2, label: 'Habilidades' },
    { id: 'experience', icon: BadgeCheck, label: 'Experiencia' },
    { id: 'projects', icon: Briefcase, label: 'Proyectos' },
    { id: 'contact', icon: Phone, label: 'Contacto' },
  ]

  // Detectar scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg border-b-2 border-amber-500/40 shadow-2xl shadow-amber-500/10' 
        : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-md border-b border-amber-500/20'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo mejorado con efectos avanzados */}
          <div className="flex items-center space-x-3 text-2xl font-bold tracking-wider enhanced-logo group cursor-pointer">
            <div className="relative">
              <span className="bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent drop-shadow-glow">
                ALEXANDER TAPIA
              </span>
              {/* Efecto de resplandor en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm">
                ALEXANDER TAPIA
              </div>
            </div>
            
            {/* Ojo que parpadea */}
            <div className="relative">
              <EyeOff size={22} className="text-red-500 animate-pulse drop-shadow-glow-red" />
              <div className="absolute inset-0 text-red-300 animate-ping opacity-20">
                <EyeOff size={22} />
              </div>
            </div>
          </div>

          {/* Navegación Desktop mejorada */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl text-gray-200 hover:text-amber-300 transition-all duration-300 font-medium overflow-hidden ${
                  index % 2 === 0 ? 'hover:flicker-terrifying-slow' : 'hover:flicker-terrifying'
                }`}
                style={{'--delay': index * 0.5} as React.CSSProperties}
              >
                {/* Fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Borde animado */}
                <div className="absolute inset-0 border border-transparent group-hover:border-amber-500/30 rounded-xl transition-all duration-300"></div>
                
                {/* Contenido */}
                <div className="relative flex items-center space-x-2">
                  <item.icon size={18} className="group-hover:drop-shadow-glow group-hover:text-amber-400 transition-all duration-300 group-hover:scale-110" />
                  <span className="font-semibold tracking-wide">{item.label}</span>
                </div>
                
                {/* Efecto de brillo inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Botón menú móvil mejorado */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-3 text-amber-400 hover:text-amber-300 transition-all duration-300 flicker-terrifying enhanced-visibility rounded-lg hover:bg-amber-400/10 border border-transparent hover:border-amber-500/30"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="transform transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={24} className="transform transition-transform duration-300" />
              )}
              
              {/* Efecto de pulso */}
              <div className="absolute inset-0 animate-ping opacity-20">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </div>
          </button>
        </div>

        {/* Menú móvil mejorado */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-amber-500/30 animate-fadeIn">
            <div className="flex flex-col space-y-3 pt-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`group flex items-center space-x-4 px-6 py-4 text-gray-200 hover:text-amber-300 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-amber-500/30 hover:bg-gradient-to-r hover:from-amber-400/5 hover:to-red-400/5 ${
                    index % 3 === 0 ? 'hover:flicker-terrifying' : index % 3 === 1 ? 'hover:flicker-terrifying-slow' : 'hover:flicker-terrifying-fast'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                  style={{'--delay': index * 0.2} as React.CSSProperties}
                >
                  <div className="relative">
                    <item.icon size={20} className="group-hover:drop-shadow-glow group-hover:text-amber-400 transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 animate-pulse opacity-0 group-hover:opacity-30">
                      <item.icon size={20} />
                    </div>
                  </div>
                  <span className="font-semibold tracking-wide">{item.label}</span>
                  
                  {/* Indicador lateral */}
                  <div className="ml-auto w-1 h-6 bg-gradient-to-b from-amber-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
            
            {/* Decoración inferior del menú */}
            <div className="mt-6 pt-4 border-t border-amber-500/20">
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      i % 2 === 0 ? 'bg-amber-400/50' : 'bg-red-400/50'
                    }`}
                    style={{animationDelay: `${i * 0.2}s`}}
                  />
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
      
      {/* Línea de resplandor inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
    </header>
  )
}

export default Header
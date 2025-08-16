'use client'

import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Phone, Menu, X, Settings2, BadgeCheck, EyeOff, Trophy, Code, Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = [
    { id: 'hero', icon: Home, label: 'Inicio' },
    { id: 'skills', icon: Settings2, label: 'Habilidades' },
    { id: 'experience', icon: BadgeCheck, label: 'Experiencia' },
    { id: 'projects', icon: Trophy, label: 'Proyectos' },
    { id: 'contact', icon: Phone, label: 'Contacto' },
  ]

  // Detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detectar sección activa
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
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
    <>
      {/* Header principal */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-lg border-b-2 border-amber-500/40 shadow-2xl shadow-amber-500/10' 
          : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-md border-b border-amber-500/20'
      }`}>
        <div className="max-w-6xl mx-auto nav-mobile">
          <div className="flex justify-between items-center">
            
            {/* Logo mejorado */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 nav-logo-mobile font-bold tracking-wider enhanced-logo group cursor-pointer"
            >
              <div className="relative">
                <span className="bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent drop-shadow-glow">
                  ALEXANDER TAPIA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm">
                  ALEXANDER TAPIA
                </div>
              </div>
              
              <div className="relative">
                <EyeOff size={18} className="text-red-500 animate-pulse drop-shadow-glow-red" />
                <div className="absolute inset-0 text-red-300 animate-ping opacity-20">
                  <EyeOff size={18} />
                </div>
              </div>
            </button>

            {/* Navegación Desktop con redes sociales */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Navegación principal */}
              <nav className="flex space-x-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-200 transition-all duration-300 font-medium overflow-hidden touch-target ${
                      activeSection === item.id 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                        : 'hover:text-amber-300 hover:bg-amber-400/10'
                    } ${
                      index % 2 === 0 ? 'hover:flicker-terrifying-slow' : 'hover:flicker-terrifying'
                    }`}
                    style={{'--delay': index * 0.5} as React.CSSProperties}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative flex items-center space-x-2">
                      <item.icon size={16} className="group-hover:drop-shadow-glow group-hover:text-amber-400 transition-all duration-300 group-hover:scale-110" />
                      <span className="font-semibold tracking-wide text-sm">{item.label}</span>
                    </div>
                    
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    )}
                  </button>
                ))}
              </nav>

              {/* Redes sociales en header */}
              <div className="flex items-center space-x-2 pl-4 border-l border-amber-500/30">
                <a
                  href="https://github.com/Katapentakill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-amber-400 rounded-lg hover:bg-amber-400/10 transition-all duration-300 group touch-target"
                >
                  <Github size={18} className="group-hover:scale-110 group-hover:drop-shadow-glow transition-all duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300 group touch-target"
                >
                  <Linkedin size={18} className="group-hover:scale-110 group-hover:drop-shadow-glow transition-all duration-300" />
                </a>
                <a
                  href="mailto:alexandertapiaolmedo@gmail.com"
                  className="p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-red-400/10 transition-all duration-300 group touch-target"
                >
                  <Mail size={18} className="group-hover:scale-110 group-hover:drop-shadow-glow transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-2 text-amber-400 hover:text-amber-300 transition-all duration-300 flicker-terrifying enhanced-visibility rounded-lg hover:bg-amber-400/10 border border-transparent hover:border-amber-500/30 touch-target"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={20} className="transform transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu size={20} className="transform transition-transform duration-300" />
                )}
                
                <div className="absolute inset-0 animate-ping opacity-20">
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </div>
              </div>
            </button>
          </div>

          {/* Menú móvil mejorado con redes sociales */}
          {isMenuOpen && (
            <nav className="md:hidden nav-menu-mobile border-t border-amber-500/30 animate-fadeIn">
              <div className="flex flex-col space-y-1 pt-4">
                {/* Navegación principal móvil */}
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    className={`group flex items-center space-x-3 nav-item-mobile text-gray-200 transition-all duration-300 font-medium border border-transparent rounded-xl ${
                      activeSection === item.id 
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' 
                        : 'hover:text-amber-300 hover:border-amber-500/30 hover:bg-gradient-to-r hover:from-amber-400/5 hover:to-red-400/5'
                    } ${
                      index % 3 === 0 ? 'hover:flicker-terrifying' : index % 3 === 1 ? 'hover:flicker-terrifying-slow' : 'hover:flicker-terrifying-fast'
                    } touch-target`}
                    onClick={() => scrollToSection(item.id)}
                    style={{'--delay': index * 0.2} as React.CSSProperties}
                  >
                    <div className="relative">
                      <item.icon size={18} className="group-hover:drop-shadow-glow group-hover:text-amber-400 transition-all duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 animate-pulse opacity-0 group-hover:opacity-30">
                        <item.icon size={18} />
                      </div>
                    </div>
                    <span className="font-semibold tracking-wide flex-1 text-left">{item.label}</span>
                    
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
                
                {/* Redes sociales en móvil */}
                <div className="pt-4 border-t border-amber-500/20 mt-4">
                  <div className="text-center text-gray-400 text-sm mb-3 font-medium">Conecta conmigo</div>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://github.com/Katapentakill"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/50 text-gray-300 hover:text-amber-400 rounded-xl border border-gray-700/30 hover:border-amber-500/50 transition-all duration-300 touch-target"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/50 text-gray-300 hover:text-blue-400 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 touch-target"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:alexandertapiaolmedo@gmail.com"
                      className="p-3 bg-gray-800/50 text-gray-300 hover:text-red-400 rounded-xl border border-gray-700/30 hover:border-red-500/50 transition-all duration-300 touch-target"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decoración inferior del menú */}
              <div className="mt-4 pt-3 border-t border-amber-500/20">
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
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

      {/* Navegación flotante en móvil (opcional) */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="flex items-center space-x-1 bg-black/90 backdrop-blur-lg rounded-full border border-amber-500/30 px-2 py-2 shadow-2xl shadow-amber-500/20">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-2 rounded-full transition-all duration-300 touch-target ${
                activeSection === item.id 
                  ? 'bg-amber-500/30 text-amber-300' 
                  : 'text-gray-400 hover:text-amber-300 hover:bg-amber-500/20'
              }`}
            >
              <item.icon size={16} />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
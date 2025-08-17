'use client'

import { useState, useEffect } from 'react'
import { Home, User, Briefcase, Phone, Menu, X, Settings2, BadgeCheck, EyeOff, Trophy, Code, Github, Linkedin, Mail, Lightbulb, LightbulbOff, Zap, Eye, Skull } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isFlickering, setIsFlickering] = useState(false)

  const navItems = [
    { id: 'hero', icon: Home, label: 'Inicio' },
    { id: 'skills', icon: Settings2, label: 'Habilidades' },
    { id: 'experience', icon: BadgeCheck, label: 'Experiencia' },
    { id: 'projects', icon: Trophy, label: 'Proyectos' },
    { id: 'contact', icon: Phone, label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
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

    // Efecto de parpadeo aleatorio del header
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% de probabilidad cada 3 segundos
        setIsFlickering(true)
        setTimeout(() => setIsFlickering(false), 150 + Math.random() * 300)
      }
    }, 3000)
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(flickerInterval)
    }
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

  // Función para notificar cambio de modo atmosférico
  const toggleAtmosphericMode = (mode: string) => {
    // Disparar evento personalizado para que otros componentes escuchen
    window.dispatchEvent(new CustomEvent('atmosphericModeChange', { 
      detail: { mode } 
    }))
  }

  return (
    <>
      {/* Header principal - Enhanced Silent Hill */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/90 shadow-2xl border-b-2 border-red-500/50' 
          : 'backdrop-blur-sm bg-black/70 border-b border-red-900/30'
      } ${isFlickering ? 'opacity-30' : 'opacity-100'}`}>
        
        {/* Efecto de interferencia de TV */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse"></div>
          {/* Líneas de interferencia */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-red-500/20 animate-pulse"
              style={{
                top: `${20 + i * 30}%`,
                left: `${Math.random() * 20}%`,
                width: `${60 + Math.random() * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Enhanced */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 cursor-pointer group relative"
            >
              <div className="relative">
                <span className="text-2xl sm:text-3xl font-bold text-red-500 tracking-wider font-mono relative z-10"
                      style={{
                        fontFamily: 'var(--font-silent-hill-title), Impact, Arial Black, sans-serif',
                        textShadow: `
                          0 0 10px rgba(220, 20, 60, 0.8),
                          0 0 20px rgba(220, 20, 60, 0.6),
                          2px 2px 0 rgba(0, 0, 0, 0.8)
                        `
                      }}>
                  ALEXANDER TAPIA
                </span>
                
                {/* Efecto fantasmal */}
                <div className="absolute inset-0 text-2xl sm:text-3xl font-bold text-red-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm transform translate-x-1 translate-y-1"
                     style={{ fontFamily: 'var(--font-silent-hill-title), Impact, Arial Black, sans-serif' }}>
                  ALEXANDER TAPIA
                </div>
                
                {/* Glitch effect */}
                <div className="absolute inset-0 text-2xl sm:text-3xl font-bold text-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-100 transform -translate-x-1"
                     style={{ fontFamily: 'var(--font-silent-hill-title), Impact, Arial Black, sans-serif' }}>
                  ALEXANDER TAPIA
                </div>
              </div>
              
              <div className="relative">
                <Skull size={24} className="text-red-500 group-hover:text-red-400 transition-colors duration-300" 
                       style={{ filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.8))' }} />
                <div className="absolute inset-0 text-red-400 opacity-0 group-hover:opacity-40 animate-pulse">
                  <Skull size={24} />
                </div>
              </div>
            </button>

            {/* Controles atmosféricos */}
            <div className="hidden lg:flex items-center space-x-2 bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-red-900/30">
              <button
                onClick={() => toggleAtmosphericMode('fog')}
                className="p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300 rounded-lg hover:bg-yellow-400/10"
                title="Niebla (actual)"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={() => toggleAtmosphericMode('flashlight')}
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-blue-400/10"
                title="Modo Linterna"
              >
                <Lightbulb size={16} />
              </button>
              <button
                onClick={() => toggleAtmosphericMode('static')}
                className="p-2 text-gray-400 hover:text-green-400 transition-colors duration-300 rounded-lg hover:bg-green-400/10"
                title="Interferencia TV"
              >
                <Zap size={16} />
              </button>
              <button
                onClick={() => toggleAtmosphericMode('hospital')}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-300 rounded-lg hover:bg-red-400/10"
                title="Hospital Abandonado"
              >
                <LightbulbOff size={16} />
              </button>
            </div>

            {/* Navegación Desktop Enhanced */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg group overflow-hidden ${
                      activeSection === item.id 
                        ? 'text-red-400 bg-red-500/20 border border-red-500/50' 
                        : 'text-gray-400 hover:text-red-400 hover:bg-red-500/10'
                    }`}
                  >
                    {/* Efecto de scan line */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="flex items-center space-x-2 relative z-10">
                      <item.icon size={16} className={`transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-red-400 drop-shadow-[0_0_8px_rgba(220,20,60,0.8)]' 
                          : 'group-hover:scale-110'
                      }`} />
                      <span style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                        {item.label}
                      </span>
                    </div>
                    
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                    )}
                  </button>
                ))}
              </nav>

              {/* Redes sociales mejoradas */}
              <div className="flex items-center space-x-2 pl-6 border-l border-red-900/30">
                {[
                  { href: 'https://github.com/Katapentakill', icon: Github, color: 'hover:text-purple-400' },
                  { href: 'https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b', icon: Linkedin, color: 'hover:text-blue-400' },
                  { href: 'mailto:alexandertapiaolmedo@gmail.com', icon: Mail, color: 'hover:text-red-400' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`p-2 text-gray-400 ${social.color} rounded-lg hover:bg-current/10 transition-all duration-300 group`}
                  >
                    <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" 
                                 style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Botón menú móvil Enhanced */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-3 text-red-400 hover:text-red-300 transition-all duration-300 rounded-lg hover:bg-red-500/20 border border-red-500/30 group"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={22} className="transform transition-all duration-300 rotate-90 group-hover:scale-110" 
                     style={{ filter: 'drop-shadow(0 0 8px rgba(220,20,60,0.8))' }} />
                ) : (
                  <Menu size={22} className="transform transition-all duration-300 group-hover:scale-110" 
                        style={{ filter: 'drop-shadow(0 0 8px rgba(220,20,60,0.8))' }} />
                )}
                
                {/* Efecto de resplandor en hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm">
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </div>
              </div>
            </button>
          </div>

          {/* Menú móvil Enhanced */}
          {isMenuOpen && (
            <nav className="md:hidden border-t border-red-900/30 bg-black/40 backdrop-blur-md">
              <div className="flex flex-col space-y-1 py-4">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    className={`group flex items-center space-x-3 p-4 transition-all duration-300 font-medium border border-transparent rounded-xl relative overflow-hidden ${
                      activeSection === item.id 
                        ? 'text-red-400 bg-red-500/20 border-red-500/50' 
                        : 'text-gray-400 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10'
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {/* Scan line effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10 flex items-center space-x-3 w-full">
                      <item.icon size={18} className={`transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-red-400' 
                          : 'group-hover:scale-110'
                      }`} style={activeSection === item.id ? { filter: 'drop-shadow(0 0 8px rgba(220,20,60,0.8))' } : {}} />
                      <span className="flex-1 text-left" style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                        {item.label}
                      </span>
                      
                      {activeSection === item.id && (
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" 
                             style={{ boxShadow: '0 0 8px rgba(220,20,60,0.8)' }}></div>
                      )}
                    </div>
                  </button>
                ))}
                
                {/* Controles atmosféricos en móvil */}
                <div className="pt-4 border-t border-red-900/30 mt-4">
                  <div className="text-center text-gray-400 text-sm mb-3 font-medium" 
                       style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                    Atmosfera
                  </div>
                  <div className="flex justify-center space-x-2 mb-4">
                    {[
                      { mode: 'fog', icon: Eye, label: 'Niebla', color: 'hover:bg-yellow-400/20 hover:text-yellow-400' },
                      { mode: 'flashlight', icon: Lightbulb, label: 'Linterna', color: 'hover:bg-blue-400/20 hover:text-blue-400' },
                      { mode: 'static', icon: Zap, label: 'TV', color: 'hover:bg-green-400/20 hover:text-green-400' },
                      { mode: 'hospital', icon: LightbulbOff, label: 'Hospital', color: 'hover:bg-red-400/20 hover:text-red-400' }
                    ].map((item, index) => (
                      <button
                        key={index}
                        onClick={() => toggleAtmosphericMode(item.mode)}
                        className={`p-3 text-gray-400 rounded-xl border border-gray-600/30 transition-all duration-300 ${item.color}`}
                        title={item.label}
                      >
                        <item.icon size={16} />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Redes sociales en móvil */}
                <div className="pt-4 border-t border-red-900/30">
                  <div className="text-center text-gray-400 text-sm mb-3 font-medium" 
                       style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                    Conecta conmigo
                  </div>
                  <div className="flex justify-center space-x-4">
                    {[
                      { href: 'https://github.com/Katapentakill', icon: Github, color: 'hover:text-purple-400 hover:border-purple-400/50' },
                      { href: 'https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b', icon: Linkedin, color: 'hover:text-blue-400 hover:border-blue-400/50' },
                      { href: 'mailto:alexandertapiaolmedo@gmail.com', icon: Mail, color: 'hover:text-red-400 hover:border-red-400/50' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`p-3 text-gray-400 rounded-xl border border-gray-600/30 transition-all duration-300 ${social.color}`}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decoración inferior del menú */}
              <div className="pb-4 border-t border-red-900/30">
                <div className="flex justify-center space-x-3 pt-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        i % 3 === 0 ? 'bg-red-500' : 
                        i % 3 === 1 ? 'bg-yellow-500' : 
                        'bg-orange-500'
                      }`}
                      style={{
                        animationDelay: `${i * 0.3}s`,
                        boxShadow: `0 0 8px currentColor`
                      }}
                    />
                  ))}
                </div>
              </div>
            </nav>
          )}
        </div>
        
        {/* Línea de resplandor inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
        
        {/* Ruido de fondo sutil */}
        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
             }}>
        </div>
      </header>

      {/* Navegación flotante en móvil Enhanced */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <div className="flex items-center space-x-1 bg-black/80 backdrop-blur-lg rounded-full border border-red-500/50 px-3 py-2 shadow-2xl"
             style={{ boxShadow: '0 0 20px rgba(220,20,60,0.4), 0 8px 32px rgba(0,0,0,0.8)' }}>
          {navItems.slice(0, 4).map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-red-500/30 text-red-400' 
                  : 'text-gray-400 hover:text-red-400 hover:bg-red-500/20'
              }`}
              style={activeSection === item.id ? { filter: 'drop-shadow(0 0 8px rgba(220,20,60,0.8))' } : {}}
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
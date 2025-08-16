'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Mail, ChevronDown, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  // Estado para controlar la hidratación
  const [isClient, setIsClient] = useState(false)

  // Partículas con posiciones fijas para evitar hydration mismatch
  const staticParticles = [
    { left: '15%', top: '20%', delay: '0s', duration: '6s', color: 'amber' },
    { left: '85%', top: '15%', delay: '1s', duration: '7s', color: 'red' },
    { left: '25%', top: '80%', delay: '2s', duration: '8s', color: 'amber' },
    { left: '75%', top: '85%', delay: '3s', duration: '9s', color: 'red' },
    { left: '45%', top: '10%', delay: '1.5s', duration: '7.5s', color: 'amber' },
    { left: '90%', top: '60%', delay: '2.5s', duration: '6.5s', color: 'red' },
  ]

  useEffect(() => {
    // Establecer que estamos en el cliente después de la hidratación
    setIsClient(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-20 flex items-center justify-center px-4 sm:px-6 pt-20 min-h-screen"
    >
      
      {/* Partículas flotantes de fondo - Solo después de hidratación */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {staticParticles.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full animate-float ${
                particle.color === 'amber' ? 'bg-amber-400/30' : 'bg-red-400/30'
              }`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>
      )}

      {/* Contenido principal - SIN recuadro */}
      <div className="text-center space-y-6 sm:space-y-10 animate-fadeIn relative z-10 max-w-6xl mx-auto">
        {/* Título principal responsivo */}
        <div className="relative">
          <h1 className="hero-title-mobile font-bold bg-gradient-to-b from-white via-amber-200 to-amber-400 bg-clip-text text-transparent tracking-wider title-enhanced">
            ALEXANDER TAPIA
          </h1>
          {/* Sombra fantasmal - oculta en móvil para performance */}
          <div className="absolute inset-0 hero-title-mobile font-bold text-red-500/10 tracking-wider animate-pulse-slow transform translate-x-1 translate-y-1 hidden sm:block">
            ALEXANDER TAPIA
          </div>
        </div>
        
        {/* Subtítulo responsivo */}
        <div className="relative space-y-2 sm:space-y-3">
          <div className="hero-subtitle-mobile font-bold animate-pulse enhanced-visibility">
            <span className="bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
              DATA SCIENTIST & FULL STACK DEVELOPER
            </span>
          </div>
          
          {/* Tags responsivos */}
          <div className="hero-tags-mobile text-sm md:text-base font-medium">
            <span className="hero-tag bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-400/30 text-amber-300 rounded-full backdrop-blur-sm animate-flicker">
              Kaggle Expert
            </span>
            <span className="hero-tag bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 text-red-300 rounded-full backdrop-blur-sm animate-flicker" style={{animationDelay: '0.5s'}}>
              Big Data Leader
            </span>
            <span className="hero-tag bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-400/30 text-amber-300 rounded-full backdrop-blur-sm animate-flicker" style={{animationDelay: '1s'}}>
              AI/ML Engineer
            </span>
            <span className="hero-tag bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 text-red-300 rounded-full backdrop-blur-sm animate-flicker" style={{animationDelay: '1.5s'}}>
              NLP Specialist
            </span>
          </div>
        </div>
        
        {/* Descripción responsiva */}
        <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed enhanced-text mobile-text-contrast">
            Estudiante de <span className="text-amber-400 font-semibold drop-shadow-glow">Ingeniería Civil en Computación</span> especializado en 
            <span className="text-red-400 font-semibold"> Ciencia de Datos y Big Data</span>.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mobile-text-contrast">
            Líder de equipo internacional en <span className="text-amber-400 font-semibold">Living Stones Foundation</span>, 
            desarrollando sistemas <span className="text-red-400 font-semibold">EMR/CMR con IA predictiva</span> para centros de salud rurales.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed mobile-text-contrast">
            Competidor activo en <span className="text-amber-300 font-medium">Kaggle</span> con múltiples top rankings en 
            Machine Learning, NLP y predicción de series temporales.
          </p>
        </div>
        
        {/* Estadísticas responsivas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto pt-4 sm:pt-6">
          <div className="text-center group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-glow">
              8+
            </div>
            <div className="text-gray-400 text-xs font-medium mobile-text-contrast">Kaggle Competitions</div>
          </div>
          
          <div className="text-center group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-glow-red">
              28º
            </div>
            <div className="text-gray-400 text-xs font-medium mobile-text-contrast">Best Ranking</div>
          </div>
          
          <div className="text-center group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-glow">
              15+
            </div>
            <div className="text-gray-400 text-xs font-medium mobile-text-contrast">Proyectos</div>
          </div>
          
          <div className="text-center group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-glow-red">
              2025
            </div>
            <div className="text-gray-400 text-xs font-medium mobile-text-contrast">Team Lead</div>
          </div>
        </div>
        
        {/* Botones responsivos */}
        <div className="contact-buttons-mobile justify-center pt-8 sm:pt-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 border-2 border-amber-400/50 text-amber-300 rounded-xl hover:from-amber-500/30 hover:via-amber-400/35 hover:to-amber-500/30 hover:border-amber-400/70 transition-all duration-500 backdrop-blur-sm enhanced-visibility font-bold text-base sm:text-lg shadow-2xl hover:shadow-amber-500/25 hover:scale-105 overflow-hidden touch-target w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative flex items-center justify-center space-x-2 sm:space-x-3">
              <span>Ver Proyectos AI/ML</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-600/20 via-red-500/25 to-red-600/20 border-2 border-red-400/50 text-red-300 rounded-xl hover:from-red-600/30 hover:via-red-500/35 hover:to-red-600/30 hover:border-red-400/70 transition-all duration-500 backdrop-blur-sm font-bold text-base sm:text-lg shadow-2xl hover:shadow-red-500/25 hover:scale-105 overflow-hidden touch-target w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative flex items-center justify-center space-x-2 sm:space-x-3">
              <span>Colaboremos</span>
              <Mail size={18} className="group-hover:scale-110 transition-all duration-300" />
            </span>
          </button>
        </div>

        {/* Enlaces sociales rápidos en móvil - Solo después de hidratación */}
        {isClient && (
          <div className="flex justify-center space-x-4 pt-6 sm:hidden">
            <a
              href="https://github.com/Katapentakill"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 text-gray-300 hover:text-amber-400 rounded-xl border border-gray-700/30 hover:border-amber-500/50 transition-all duration-300 touch-target backdrop-blur-sm"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:alexandertapia.dev@gmail.com"
              className="p-3 bg-gray-900/50 text-gray-300 hover:text-red-400 rounded-xl border border-gray-700/30 hover:border-red-500/50 transition-all duration-300 touch-target backdrop-blur-sm"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/alexander-tapia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 text-gray-300 hover:text-blue-400 rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 touch-target backdrop-blur-sm"
            >
              <Linkedin size={20} />
            </a>
          </div>
        )}
        
        {/* Indicador de scroll responsivo */}
        <div className="pt-8 sm:pt-16">
          <button
            onClick={() => scrollToSection('skills')}
            className="group flex flex-col items-center space-y-1 sm:space-y-2 text-gray-400 hover:text-amber-400 transition-all duration-300 mx-auto touch-target"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wider mobile-text-contrast">Conoce mi experiencia</span>
            <div className="relative">
              <ChevronDown size={20} className="animate-bounce group-hover:text-amber-400 transition-colors duration-300" />
              <ChevronDown size={20} className="absolute top-0 left-0 animate-bounce opacity-50 group-hover:text-amber-400 transition-colors duration-300" style={{animationDelay: '0.2s'}} />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
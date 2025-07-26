'use client'

import { button } from 'framer-motion/client';
import { ExternalLink, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-20 flex items-center justify-center px-6 pt-20 min-h-screen bg-gradient-to-b from-transparent via-red-900/5 to-amber-900/5"
    >
      {/* Partículas flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float ${
              i % 2 === 0 ? 'bg-amber-400/30' : 'bg-red-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-10 animate-fadeIn relative z-10">
        {/* Título principal con efectos múltiples */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-b from-white via-amber-200 to-amber-400 bg-clip-text text-transparent tracking-wider title-enhanced">
            ALEXANDER TAPIA
          </h1>
          {/* Sombra fantasmal */}
          <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-red-500/10 tracking-wider animate-pulse-slow transform translate-x-2 translate-y-2">
            ALEXANDER TAPIA
          </div>
          {/* Efecto de brillo */}
          <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent tracking-wider animate-pulse">
            ALEXANDER TAPIA
          </div>
        </div>
        
        {/* Subtítulo con animaciones - Actualizado según tu perfil */}
        <div className="relative space-y-3">
          <div className="text-2xl md:text-4xl font-bold animate-pulse enhanced-visibility">
            <span className="bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
              DATA SCIENTIST & FULL STACK DEVELOPER
            </span>
          </div>
          
          {/* Tags de especialización - Según tu CV real */}
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base font-medium">
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-400/30 text-amber-300 rounded-full backdrop-blur-sm animate-flicker">
              Kaggle Expert
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 text-red-300 rounded-full backdrop-blur-sm animate-flicker" style={{animationDelay: '0.5s'}}>
              Big Data Leader
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-400/30 text-amber-300 rounded-full backdrop-blur-sm animate-flicker" style={{animationDelay: '1s'}}>
              AI/ML Engineer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 text-red-300 rounded-full backdrop-blur-sm animate-flicker" style={{animationDelay: '1.5s'}}>
              NLP Specialist
            </span>
          </div>
        </div>
        
        {/* Descripción mejorada - Según tu experiencia real */}
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed enhanced-text">
            Estudiante de <span className="text-amber-400 font-semibold drop-shadow-glow">Ingeniería Civil en Computación</span> especializado en 
            <span className="text-red-400 font-semibold"> Ciencia de Datos y Big Data</span>.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Líder de equipo internacional en <span className="text-amber-400 font-semibold">Living Stones Foundation</span>, 
            desarrollando sistemas <span className="text-red-400 font-semibold">EMR/CMR con IA predictiva</span> para centros de salud rurales.
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed">
            Competidor activo en <span className="text-amber-300 font-medium">Kaggle</span> con múltiples top rankings en 
            Machine Learning, NLP y predicción de series temporales.
          </p>
        </div>
        
        {/* Estadísticas destacadas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-6">
          <div className="text-center group">
            <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              8+
            </div>
            <div className="text-gray-400 text-xs font-medium">Kaggle Competitions</div>
          </div>
          
          <div className="text-center group">
            <div className="text-2xl md:text-3xl font-bold text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              28º
            </div>
            <div className="text-gray-400 text-xs font-medium">Best Ranking</div>
          </div>
          
          <div className="text-center group">
            <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-gray-400 text-xs font-medium">Proyectos</div>
          </div>
          
          <div className="text-center group">
            <div className="text-2xl md:text-3xl font-bold text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              2025
            </div>
            <div className="text-gray-400 text-xs font-medium">Team Lead</div>
          </div>
        </div>
        
        {/* Botones de acción mejorados */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-4 bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 border-2 border-amber-400/50 text-amber-300 rounded-xl hover:from-amber-500/30 hover:via-amber-400/35 hover:to-amber-500/30 hover:border-amber-400/70 transition-all duration-500 backdrop-blur-sm enhanced-visibility font-bold text-lg shadow-2xl hover:shadow-amber-500/25 hover:scale-105 overflow-hidden"
          >
            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span className="relative flex items-center space-x-3">
              <span>Ver Proyectos AI/ML</span>
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-4 bg-gradient-to-r from-red-600/20 via-red-500/25 to-red-600/20 border-2 border-red-400/50 text-red-300 rounded-xl hover:from-red-600/30 hover:via-red-500/35 hover:to-red-600/30 hover:border-red-400/70 transition-all duration-500 backdrop-blur-sm font-bold text-lg shadow-2xl hover:shadow-red-500/25 hover:scale-105 overflow-hidden"
          >
            {/* Efecto de brillo interno */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span className="relative flex items-center space-x-3">
              <span>Colaboremos</span>
              <Mail size={20} className="group-hover:scale-110 transition-all duration-300" />
            </span>
          </button>
        </div>
        
        {/* Indicador de scroll mejorado */}
        <div className="pt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-amber-400 transition-all duration-300 mx-auto"
          >
            <span className="text-sm font-medium tracking-wider">Conoce mi experiencia</span>
            <div className="relative">
              <ChevronDown size={24} className="animate-bounce group-hover:text-amber-400 transition-colors duration-300" />
              <ChevronDown size={24} className="absolute top-0 left-0 animate-bounce opacity-50 group-hover:text-amber-400 transition-colors duration-300" style={{animationDelay: '0.2s'}} />
            </div>
          </button>
        </div>
      </div>

      {/* Efectos de ambiente */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Hero
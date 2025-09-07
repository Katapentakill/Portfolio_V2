'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [isClient, setIsClient] = useState(false)
  const [glitchText, setGlitchText] = useState('ALEXANDER TAPIA')

  useEffect(() => {
    setIsClient(true)
    
    // Text glitch effect for atmospheric styling
    const glitchEffect = () => {
      const original = 'ALEXANDER TAPIA'
      const glitched = 'ＡＬＥＸＡＮＤＥＲ　ＴＡＰＩＡ'
      const corrupted = '4L3X4ND3R T4P14'
      
      setGlitchText(corrupted)
      setTimeout(() => setGlitchText(glitched), 150)
      setTimeout(() => setGlitchText(original), 300)
    }

    const interval = setInterval(glitchEffect, 8000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
      style={{ paddingTop: 'clamp(5rem, 8vh, 8rem)' }}
    >
      {/* Background fog effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-transparent via-gray-800/20 to-gray-900/40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-red-900/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-orange-800/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Atmospheric interference lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-red-500/10 to-transparent h-px animate-pulse"
            style={{
              top: `${5 + i * 5}%`,
              left: `${Math.random() * 20}%`,
              width: `${60 + Math.random() * 40}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating atmospheric particles */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full opacity-40 animate-pulse ${
                i % 4 === 0 ? 'bg-red-500' : 
                i % 4 === 1 ? 'bg-orange-400' : 
                i % 4 === 2 ? 'bg-yellow-600' : 'bg-gray-400'
              }`}
              style={{
                left: `${10 + i * 7}%`,
                top: `${15 + i * 6}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 sm:px-6">
        <div className="text-center max-w-6xl mx-auto space-y-8">
          
          {/* Main title with atmospheric font styling */}
          <div className="relative">
            <h1 
              className="text-4xl sm:text-6xl lg:text-8xl font-silent-hill-title text-red-500 drop-shadow-2xl filter contrast-125"
              style={{
                fontFamily: 'var(--font-silent-hill-title), Impact, Arial Black, sans-serif',
                textShadow: `
                  0 0 10px rgba(220, 20, 60, 0.8),
                  0 0 20px rgba(220, 20, 60, 0.6),
                  0 0 30px rgba(220, 20, 60, 0.4),
                  3px 3px 0 rgba(0, 0, 0, 0.8),
                  -1px -1px 0 rgba(0, 0, 0, 0.8)
                `,
                letterSpacing: '0.1em'
              }}
            >
              {glitchText}
            </h1>
            
            {/* Ghostly shadow effect */}
            <div 
              className="absolute inset-0 text-4xl sm:text-6xl lg:text-8xl font-silent-hill-title text-gray-600 opacity-20 transform translate-x-2 translate-y-2 pointer-events-none"
              style={{ fontFamily: 'var(--font-silent-hill-title), Impact, Arial Black, sans-serif' }}
            >
              ALEXANDER TAPIA
            </div>
          </div>

          {/* Professional subtitle */}
          <div className="space-y-4">
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl text-orange-300 font-bold tracking-wide"
              style={{
                fontFamily: 'var(--font-palatino), Times New Roman, serif',
                textShadow: '0 0 15px rgba(255, 165, 0, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.8)'
              }}
            >
              DATA SCIENTIST & FULL STACK DEVELOPER
            </h2>
            
            {/* Atmospheric divider line */}
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-24"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-24"></div>
            </div>
          </div>

          {/* Professional skill tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { text: 'KAGGLE EXPERT', type: 'critical' },
              { text: 'BIG DATA LEADER', type: 'warning' },
              { text: 'AI/ML ENGINEER', type: 'critical' },
              { text: 'NLP SPECIALIST', type: 'tech' }
            ].map((tag, index) => (
              <span
                key={index}
                className={`
                  px-4 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase border-2 backdrop-blur-sm
                  transition-all duration-300 hover:scale-105 cursor-default
                  ${tag.type === 'critical' ? 
                    'bg-red-900/20 border-red-500 text-red-300 hover:bg-red-800/30 hover:text-red-200' :
                    tag.type === 'warning' ?
                    'bg-orange-900/20 border-orange-500 text-orange-300 hover:bg-orange-800/30 hover:text-orange-200' :
                    'bg-yellow-900/20 border-yellow-600 text-yellow-300 hover:bg-yellow-800/30 hover:text-yellow-200'
                  }
                `}
                style={{
                  fontFamily: 'var(--font-jetbrains), Courier New, monospace',
                  textShadow: tag.type === 'critical' ? '0 0 10px rgba(220, 20, 60, 0.5)' : 
                              tag.type === 'warning' ? '0 0 10px rgba(255, 140, 0, 0.5)' :
                              '0 0 10px rgba(218, 165, 32, 0.5)'
                }}
              >
                {tag.text}
              </span>
            ))}
          </div>

          {/* Professional description */}
          <div className="max-w-4xl mx-auto space-y-4 mt-8">
            <p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              style={{ fontFamily: 'var(--font-palatino), Times New Roman, serif' }}
            >
              Estudiante de <span className="text-yellow-400 font-semibold">Ingeniería Civil en Computación</span> especializado en 
              <span className="text-red-400 font-semibold"> Ciencia de Datos y Big Data</span>.
            </p>
            <p 
              className="text-base sm:text-lg text-gray-400 leading-relaxed"
              style={{ fontFamily: 'var(--font-palatino), Times New Roman, serif' }}
            >
              Líder de equipo internacional en <span className="text-orange-400 font-semibold">Living Stones Foundation</span>, 
              desarrollando sistemas <span className="text-red-400 font-semibold">EMR/CMR con IA predictiva</span> para centros de salud rurales.
            </p>
          </div>

          {/* Professional statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { number: '8+', label: 'Kaggle Competitions', color: 'text-red-400' },
              { number: '28º', label: 'Best Ranking', color: 'text-orange-400' },
              { number: '15+', label: 'Proyectos', color: 'text-yellow-400' },
              { number: '2025', label: 'Team Lead', color: 'text-red-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div 
                  className={`text-3xl sm:text-4xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    fontFamily: 'var(--font-jetbrains), Courier New, monospace',
                    textShadow: '0 0 15px currentColor'
                  }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm text-gray-400 mt-1 font-medium"
                  style={{ fontFamily: 'var(--font-palatino), Times New Roman, serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-900 to-red-700 text-white font-bold uppercase tracking-wider border-2 border-red-500 hover:border-red-400 transition-all duration-300 overflow-hidden"
              style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Ver Proyectos AI/ML
                <ExternalLink size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-transparent text-orange-300 font-bold uppercase tracking-wider border-2 border-orange-500 hover:border-orange-400 hover:bg-orange-900/20 transition-all duration-300"
              style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}
            >
              <span className="flex items-center justify-center gap-2">
                Colaboremos
                <Mail size={18} />
              </span>
            </button>
          </div>

          {/* Social media links */}
          <div className="flex justify-center space-x-6 pt-6">
            {[
              { href: 'https://github.com/Katapentakill', icon: Github, color: 'hover:text-red-400' },
              { href: 'mailto:alexandertapia.dev@gmail.com', icon: Mail, color: 'hover:text-orange-400' },
              { href: 'https://linkedin.com/in/alexander-tapia', icon: Linkedin, color: 'hover:text-yellow-400' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`p-3 bg-gray-900/50 border border-gray-700 hover:border-gray-500 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <button
              onClick={() => scrollToSection('skills')}
              className="group flex flex-col items-center space-y-2 text-gray-500 hover:text-red-400 transition-all duration-300 mx-auto"
            >
              <span 
                className="text-sm font-medium tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}
              >
                Descubre mi experiencia
              </span>
              <div className="relative">
                <ChevronDown size={20} className="animate-bounce" />
                <ChevronDown size={20} className="absolute top-0 left-0 opacity-50 animate-bounce" style={{animationDelay: '0.5s'}} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Section border effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30"></div>
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30"></div>
    </section>
  )
}

export default Hero
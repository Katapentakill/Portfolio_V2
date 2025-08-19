'use client'

import { useState, useEffect } from 'react'
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar,
  ExternalLink,
  Code,
  Database,
  Brain,
  Zap,
  Heart,
  ArrowUp,
  Skull,
  Eye,
  Coffee,
  Settings2,
  BadgeCheck,
  Trophy,
  Home
} from 'lucide-react'

const Footer = () => {
  // 🔥 SOLUCIÓN: Controlar el montaje para el tiempo
  const [isMounted, setIsMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isFlickering, setIsFlickering] = useState(false)

  useEffect(() => {
    // 🔥 SOLUCIÓN: Solo después del montaje
    setIsMounted(true)
    
    // Actualizar hora cada segundo
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Efecto de parpadeo aleatorio igual que tu header
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% de probabilidad cada 3 segundos
        setIsFlickering(true)
        setTimeout(() => setIsFlickering(false), 150 + Math.random() * 300)
      }
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(flickerInterval)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // altura del header fijo
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // MISMOS navItems que el Header para consistencia
  const navItems = [
    { id: 'hero', label: 'Inicio', icon: Home },
    { id: 'skills', label: 'Habilidades', icon: Settings2 },
    { id: 'experience', label: 'Experiencia', icon: BadgeCheck },
    { id: 'projects', label: 'Proyectos', icon: Trophy },
    { id: 'contact', label: 'Contacto', icon: Phone },
  ]

  // 🔥 SOLUCIÓN: No renderizar contenido con tiempo hasta estar montado
  if (!isMounted) {
    return (
      <footer className="relative z-20 bg-black/95 backdrop-blur-md border-t-2 border-red-500/50 mt-auto overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Alexander Tapia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className={`relative z-20 bg-black/95 backdrop-blur-md border-t-2 border-red-500/50 mt-auto overflow-hidden transition-all duration-500 ${
      isFlickering ? 'opacity-30' : 'opacity-100'
    }`}>
      
      {/* Efectos de fondo Silent Hill - igual que tu header */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse"></div>
        {/* Líneas de interferencia */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-red-500/20 animate-pulse"
            style={{
              top: `${20 + i * 25}%`,
              left: `${Math.random() * 20}%`,
              width: `${60 + Math.random() * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}
      </div>

      {/* Partículas flotantes Silent Hill - igual que tu header */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-40 animate-pulse ${
              i % 4 === 0 ? 'bg-red-500' : 
              i % 4 === 1 ? 'bg-orange-400' : 
              i % 4 === 2 ? 'bg-yellow-600' : 'bg-gray-400'
            }`}
            style={{
              left: `${10 + i * 10}%`,
              top: `${15 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">

          {/* Sección 1: Información personal - Estilo Silent Hill */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo y título - igual que tu header */}
            <div className="group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Skull size={28} className="text-red-500 group-hover:text-red-400 transition-colors duration-300" 
                         style={{ filter: 'drop-shadow(0 0 12px rgba(220, 20, 60, 0.8))' }} />
                  <div className="absolute inset-0 text-red-400 opacity-0 group-hover:opacity-50 animate-pulse">
                    <Skull size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-red-500 tracking-wider group-hover:text-red-400 transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-silent-hill-title), Impact, Arial Black, sans-serif',
                      textShadow: '0 0 15px rgba(220, 20, 60, 0.8), 2px 2px 0 rgba(0, 0, 0, 0.8)'
                    }}>
                  ALEXANDER TAPIA
                </h3>
              </div>
              
              {/* Subtítulo profesional */}
              <h4 className="text-lg text-orange-300 font-semibold mb-4"
                  style={{
                    fontFamily: 'var(--font-palatino), Times New Roman, serif',
                    textShadow: '0 0 10px rgba(255, 165, 0, 0.6)'
                  }}>
                DATA SCIENTIST & FULL STACK DEVELOPER
              </h4>
              
              {/* Descripción profesional */}
              <p className="text-gray-400 leading-relaxed mb-6"
                 style={{ fontFamily: 'var(--font-palatino), Times New Roman, serif' }}>
                Full Stack Developer apasionado por el <span className="text-red-400 font-semibold">machine learning</span>, 
                las competencias en <span className="text-orange-400 font-semibold">Kaggle</span> y crear experiencias 
                digitales que impactan. Siempre explorando el siguiente desafío tecnológico.
              </p>

              {/* Stats rápidas Silent Hill - igual que tu hero */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { number: '3+', label: 'Años', color: 'text-red-400' },
                  { number: '50+', label: 'Proyectos', color: 'text-orange-400' },
                  { number: '∞', label: 'Pasión', color: 'text-yellow-400' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-default p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-red-900/30 hover:border-red-500/50 transition-all duration-300">
                    <div 
                      className={`text-xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        fontFamily: 'var(--font-jetbrains), Courier New, monospace',
                        textShadow: '0 0 8px currentColor'
                      }}
                    >
                      {stat.number}
                    </div>
                    <div 
                      className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider"
                      style={{ fontFamily: 'var(--font-palatino), Times New Roman, serif' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sección 2: Navegación MEJORADA */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-red-400 flex items-center space-x-2"
                style={{ 
                  fontFamily: 'var(--font-jetbrains), Courier New, monospace',
                  textShadow: '0 0 8px rgba(220, 20, 60, 0.8)'
                }}>
              <Zap size={20} className="text-red-500" style={{ filter: 'drop-shadow(0 0 8px rgba(220, 20, 60, 0.8))' }} />
              <span>NAVEGACIÓN</span>
            </h3>
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-all duration-300 text-sm font-medium hover:translate-x-2 w-full text-left"
                  style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}
                >
                  <item.icon size={14} className="group-hover:scale-110 transition-transform duration-300 group-hover:text-red-400" 
                             style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
                  <span className="group-hover:text-red-300">{item.label}</span>
                  {/* Indicador de navegación */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Sección 3: Enlaces útiles MEJORADOS */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-orange-400 flex items-center space-x-2"
                style={{ 
                  fontFamily: 'var(--font-jetbrains), Courier New, monospace',
                  textShadow: '0 0 8px rgba(255, 140, 0, 0.6)'
                }}>
              <Coffee size={20} className="text-orange-500" style={{ filter: 'drop-shadow(0 0 8px rgba(255, 140, 0, 0.8))' }} />
              <span>CONECTA</span>
            </h4>
            
            {/* Enlaces de contacto y redes MEJORADOS */}
            <div className="space-y-4">
              <a 
                href="https://github.com/Katapentakill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 hover:scale-105"
              >
                <Github size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110" 
                        style={{ filter: 'drop-shadow(0 0 6px currentColor)' }} />
                <div className="flex-1">
                  <div className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 font-medium text-sm"
                       style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                    GitHub
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-purple-400">@Katapentakill</div>
                </div>
                <ExternalLink size={14} className="text-gray-500 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
              
              <a 
                href="mailto:alexandertapiaolmedo@gmail.com"
                className="group flex items-center space-x-3 p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-red-400 transition-colors duration-300 group-hover:scale-110" 
                      style={{ filter: 'drop-shadow(0 0 6px currentColor)' }} />
                <div className="flex-1">
                  <div className="text-gray-300 group-hover:text-red-300 transition-colors duration-300 font-medium text-sm"
                       style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                    Email
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-red-400">Colaboración directa</div>
                </div>
                <ExternalLink size={14} className="text-gray-500 group-hover:text-red-400 transition-colors duration-300" />
              </a>

              <a 
                href="https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110" 
                          style={{ filter: 'drop-shadow(0 0 6px currentColor)' }} />
                <div className="flex-1">
                  <div className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
                       style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                    LinkedIn
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-blue-400">Perfil profesional</div>
                </div>
                <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria con gradiente Silent Hill */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-full max-w-2xl"></div>
          <div className="mx-4 w-2 h-2 bg-red-500 rounded-full animate-pulse" 
               style={{ boxShadow: '0 0 10px rgba(220, 20, 60, 0.8)' }}></div>
          <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-full max-w-2xl"></div>
        </div>

        {/* Footer inferior MEJORADO */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          
          {/* Información de contacto y tiempo */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-gray-400 text-sm group hover:text-gray-300 transition-colors duration-300">
              <MapPin size={14} className="text-red-500 group-hover:text-red-400 transition-colors duration-300" 
                      style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
              <span style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                Antofagasta, Chile
              </span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 text-sm group hover:text-gray-300 transition-colors duration-300">
              <Calendar size={14} className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300" 
                        style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
              <span style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                {currentTime.toLocaleString('es-CL', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </span>
            </div>
          </div>

          {/* Redes sociales principales MEJORADAS */}
          <div className="flex items-center space-x-2">
            {[
              { href: 'https://github.com/Katapentakill', icon: Github, color: 'hover:text-purple-400', bgColor: 'hover:bg-purple-400/10' },
              { href: 'https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b', icon: Linkedin, color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-400/10' },
              { href: 'mailto:alexandertapiaolmedo@gmail.com', icon: Mail, color: 'hover:text-red-400', bgColor: 'hover:bg-red-400/10' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`p-3 text-gray-400 ${social.color} ${social.bgColor} rounded-lg transition-all duration-300 group border border-gray-700 hover:border-gray-500 backdrop-blur-sm hover:scale-110`}
              >
                <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" 
                             style={{ filter: 'drop-shadow(0 0 6px currentColor)' }} />
              </a>
            ))}
          </div>

          {/* Botón volver arriba Silent Hill MEJORADO */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 bg-red-900/30 border border-red-500/50 text-red-400 hover:text-red-300 hover:border-red-400 transition-all duration-300 rounded-lg backdrop-blur-sm hover:bg-red-800/30 hover:scale-105 hover:shadow-lg"
            style={{ boxShadow: '0 0 15px rgba(220, 20, 60, 0.3)' }}
          >
            <span className="text-sm font-medium"
                  style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
              VOLVER ARRIBA
            </span>
            <ArrowUp size={16} className="group-hover:animate-bounce group-hover:text-red-300" 
                     style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
          </button>
        </div>

        {/* Copyright y créditos MEJORADOS */}
        <div className="mt-8 pt-6 border-t border-red-900/30">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm text-gray-500">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 group hover:text-gray-400 transition-colors duration-300">
              <span style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                © 2025 Alexander Tapia. Todos los derechos reservados.
              </span>
            </div>

            {/* Hecho con amor MEJORADO */}
            <div className="flex items-center space-x-2 text-gray-500 group hover:text-gray-400 transition-colors duration-300">
              <span style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
                Hecho con
              </span>
              <Heart size={14} className="text-red-500 group-hover:animate-pulse group-hover:text-red-400" 
                     style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
              <span>y mucho</span>
              <Coffee size={14} className="text-orange-400 group-hover:animate-bounce group-hover:text-orange-300" 
                      style={{ filter: 'drop-shadow(0 0 4px currentColor)' }} />
              <span>en Antofagasta</span>
            </div>

            {/* Version/Build MEJORADO */}
            <div className="text-xs text-gray-600 group hover:text-gray-500 transition-colors duration-300"
                 style={{ fontFamily: 'var(--font-jetbrains), Courier New, monospace' }}>
              <span className="group-hover:text-red-400 transition-colors duration-300">v2.0.25</span>
              {' | '}
              <span className="group-hover:text-orange-400 transition-colors duration-300">
                Build: {new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Línea de resplandor superior - igual que tu header */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      
      {/* Ruido de fondo sutil - igual que tu header */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
           }}>
      </div>
    </footer>
  )
}

export default Footer
'use client'

import { Github, Mail, Linkedin, Heart, ArrowUp, Code, Coffee, Zap } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <footer className="relative z-20 bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-800/90 border-t-2 border-amber-500/30 mt-auto backdrop-blur-lg overflow-hidden">
      
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              i % 2 === 0 ? 'bg-amber-400/20' : 'bg-red-400/20'
            }`}
            style={{
              left: `${5 + i * 12}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Sección 1: Sobre Alexander */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent enhanced-visibility flex items-center space-x-2">
                <Code className="text-amber-400" size={24} />
                <span>Alexander Tapia</span>
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-base">
                Full Stack Developer apasionado por el <span className="text-amber-400 font-semibold">machine learning</span>, 
                las competencias en <span className="text-red-400 font-semibold">Kaggle</span> y crear experiencias 
                digitales que impactan. Siempre explorando el siguiente desafío tecnológico.
              </p>
              
              {/* Stats rápidas */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-3 bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-colors duration-300 group">
                  <div className="text-xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Años</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-red-500/10 to-transparent rounded-xl border border-red-500/20 hover:border-red-500/40 transition-colors duration-300 group">
                  <div className="text-xl font-bold text-red-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Proyectos</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-colors duration-300 group">
                  <div className="text-xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Pasión</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-amber-400 enhanced-visibility flex items-center space-x-2">
              <Zap className="text-amber-400" size={20} />
              <span>Navegación</span>
            </h3>
            <div className="space-y-3">
              {[
                { id: 'hero', label: 'Inicio' },
                { id: 'about', label: 'Sobre Mí' },
                { id: 'skills', label: 'Habilidades' },
                { id: 'experience', label: 'Experiencia' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'contact', label: 'Contacto' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-gray-300 hover:text-amber-300 transition-all duration-300 text-sm nav-enhanced hover-drop-shadow-glow font-medium group ${
                    index % 2 === 0 ? 'hover:translate-x-1' : 'hover:translate-x-2'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-amber-400/50 group-hover:bg-amber-400' : 'bg-red-400/50 group-hover:bg-red-400'
                    }`}></div>
                    <span>{item.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sección 3: Redes sociales */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-red-400 enhanced-visibility flex items-center space-x-2">
              <Coffee className="text-red-400" size={20} />
              <span>Conecta</span>
            </h3>
            
            {/* Redes sociales con efectos mejorados */}
            <div className="space-y-4">
              <a 
                href="https://github.com/Katapentakill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-transparent border border-gray-700/50 hover:border-amber-500/50 hover:from-amber-500/10 hover:to-transparent transition-all duration-300 hover:scale-105"
              >
                <Github size={24} className="text-gray-300 group-hover:text-amber-300 transition-colors duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-gray-300 group-hover:text-amber-300 transition-colors duration-300 font-medium">GitHub</div>
                  <div className="text-xs text-gray-500">@Katapentakill</div>
                </div>
              </a>
              
              <a 
                href="mailto:katapentakill.dev@gmail.com"
                className="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-transparent border border-gray-700/50 hover:border-red-500/50 hover:from-red-500/10 hover:to-transparent transition-all duration-300 hover:scale-105"
              >
                <Mail size={24} className="text-gray-300 group-hover:text-red-300 transition-colors duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-gray-300 group-hover:text-red-300 transition-colors duration-300 font-medium">Email</div>
                  <div className="text-xs text-gray-500">katapentakill.dev@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/alexander-tapia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-transparent border border-gray-700/50 hover:border-blue-500/50 hover:from-blue-500/10 hover:to-transparent transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={24} className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-gray-300 group-hover:text-blue-300 transition-colors duration-300 font-medium">LinkedIn</div>
                  <div className="text-xs text-gray-500">Alexander Tapia</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisoria con gradiente */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-8"></div>

        {/* Footer inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>© {currentYear} Alexander Tapia.</span>
            <span className="flex items-center space-x-1">
              <span>Hecho con</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>y mucho</span>
              <Coffee size={14} className="text-amber-400" />
            </span>
          </div>

          {/* Botón volver arriba */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-red-500/20 hover:from-amber-500/30 hover:to-red-500/30 border border-amber-500/30 hover:border-amber-500/50 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <ArrowUp size={16} className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300 group-hover:-translate-y-0.5" />
            <span className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300 text-sm font-medium">
              Volver Arriba
            </span>
          </button>
        </div>

        {/* Efecto de resplandor en el botón */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
          
          .animate-float {
            animation: float linear infinite;
          }
          
          .enhanced-visibility {
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
          }
          
          .nav-enhanced {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hover-drop-shadow-glow:hover {
            filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));
          }
        `}</style>
      </div>
    </footer>
  )
}

export default Footer
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
    <footer className="relative z-20 hospital-card border-t-2 silent-border-rust mt-auto backdrop-blur-lg overflow-hidden">
      
      {/* Efectos de fondo Silent Hill */}
      <div className="absolute inset-0 gradient-dark-rust pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rust-400/50 to-transparent"></div>
      
      {/* Partículas flotantes Silent Hill */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              i % 3 === 0 ? 'bg-rust-400/20' : i % 3 === 1 ? 'bg-hospital-400/20' : 'bg-blood-400/20'
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rust-400 to-blood-400 bg-clip-text text-transparent enhanced-visibility-sh flex items-center space-x-2">
                <Code className="text-rust-400" size={24} />
                <span>Alexander Tapia</span>
              </h3>
              
              <p className="text-hospital-400 leading-relaxed text-base hospital-text">
                Full Stack Developer apasionado por el <span className="text-rust-400 font-semibold">machine learning</span>, 
                las competencias en <span className="text-blood-400 font-semibold">Kaggle</span> y crear experiencias 
                digitales que impactan. Siempre explorando el siguiente desafío tecnológico.
              </p>
              
              {/* Stats rápidas Silent Hill */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-3 gradient-dark-rust rounded-xl silent-border-rust hover:border-rust-500/40 transition-colors duration-300 group">
                  <div className="text-xl font-bold text-rust-400 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-xs text-hospital-500 uppercase tracking-wider hospital-text">Años</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-blood-500/10 to-transparent rounded-xl silent-border-blood hover:border-blood-500/40 transition-colors duration-300 group">
                  <div className="text-xl font-bold text-blood-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-xs text-hospital-500 uppercase tracking-wider hospital-text">Proyectos</div>
                </div>
                <div className="text-center p-3 gradient-hospital rounded-xl silent-border-hospital hover:border-hospital-500/40 transition-colors duration-300 group">
                  <div className="text-xl font-bold text-hospital-400 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-xs text-hospital-500 uppercase tracking-wider hospital-text">Pasión</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-rust-400 enhanced-visibility-sh flex items-center space-x-2">
              <Zap className="text-rust-400" size={20} />
              <span>Navegación</span>
            </h3>
            <div className="space-y-3">
              {[
                { id: 'hero', label: 'Inicio' },
                { id: 'skills', label: 'Habilidades' },
                { id: 'experience', label: 'Experiencia' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'contact', label: 'Contacto' }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-hospital-300 hover:${index % 2 === 0 ? 'text-rust-300' : 'text-hospital-200'} transition-all duration-300 text-sm nav-enhanced-sh hover-drop-shadow-rust font-medium group ${
                    index % 2 === 0 ? 'hover:translate-x-1' : 'hover:translate-x-2'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      index % 3 === 0 ? 'bg-rust-400/50 group-hover:bg-rust-400' : 
                      index % 3 === 1 ? 'bg-hospital-400/50 group-hover:bg-hospital-400' : 
                      'bg-blood-400/50 group-hover:bg-blood-400'
                    }`}></div>
                    <span>{item.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sección 3: Redes sociales */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blood-400 enhanced-visibility-sh flex items-center space-x-2">
              <Coffee className="text-blood-400" size={20} />
              <span>Conecta</span>
            </h3>
            
            {/* Redes sociales Silent Hill style */}
            <div className="space-y-4">
              <a 
                href="https://github.com/Katapentakill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 rounded-xl hospital-card silent-border-hospital hover:silent-border-rust hover:gradient-dark-rust transition-all duration-300 hover:scale-105"
              >
                <Github size={24} className="text-hospital-300 group-hover:text-rust-300 transition-colors duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-hospital-300 group-hover:text-rust-300 transition-colors duration-300 font-medium">GitHub</div>
                  <div className="text-xs text-hospital-500 hospital-text">@Katapentakill</div>
                </div>
              </a>
              
              <a 
                href="mailto:alexandertapiaolmedo@gmail.com"
                className="group flex items-center space-x-3 p-3 rounded-xl hospital-card silent-border-hospital hover:silent-border-blood hover:bg-gradient-to-r hover:from-blood-500/10 hover:to-transparent transition-all duration-300 hover:scale-105"
              >
                <Mail size={24} className="text-hospital-300 group-hover:text-blood-300 transition-colors duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-hospital-300 group-hover:text-blood-300 transition-colors duration-300 font-medium">Email</div>
                  <div className="text-xs text-hospital-500 hospital-text">alexandertapiaolmedo@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 rounded-xl hospital-card silent-border-hospital hover:border-hospital-400/50 hover:gradient-hospital transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={24} className="text-hospital-300 group-hover:text-hospital-200 transition-colors duration-300 group-hover:scale-110" />
                <div>
                  <div className="text-hospital-300 group-hover:text-hospital-200 transition-colors duration-300 font-medium">LinkedIn</div>
                  <div className="text-xs text-hospital-500 hospital-text">Alexander Tapia Olmedo</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Línea divisoria con gradiente Silent Hill */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-rust-500/30 to-transparent mb-8"></div>

        {/* Footer inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-hospital-500 text-sm hospital-text">
            <span>© {currentYear} Alexander Tapia Olmedo.</span>
            <span className="flex items-center space-x-1">
              <span>Hecho con</span>
              <Heart size={14} className="text-blood-400 animate-pulse" />
              <span>y mucho</span>
              <Coffee size={14} className="text-rust-400" />
            </span>
          </div>

          {/* Redes sociales rápidas */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Katapentakill"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hospital-card text-hospital-400 hover:text-rust-400 rounded-lg hover:bg-rust-400/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-gubier-oscar-tapia-olmedo-10aa3725b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hospital-card text-hospital-400 hover:text-hospital-200 rounded-lg hover:bg-hospital-400/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:alexandertapiaolmedo@gmail.com"
              className="p-2 hospital-card text-hospital-400 hover:text-blood-400 rounded-lg hover:bg-blood-400/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Botón volver arriba Silent Hill */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 gradient-rust-blood hover:from-rust-500/30 hover:to-blood-500/30 silent-border-rust hover:border-rust-500/50 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <ArrowUp size={16} className="text-rust-400 group-hover:text-rust-300 transition-colors duration-300 group-hover:-translate-y-0.5" />
            <span className="text-rust-400 group-hover:text-rust-300 transition-colors duration-300 text-sm font-medium">
              Volver Arriba
            </span>
          </button>
        </div>

        {/* Efecto de resplandor Silent Hill */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
          
          .animate-float {
            animation: float linear infinite;
          }
          
          .enhanced-visibility-sh {
            text-shadow: 0 0 10px rgba(139, 69, 19, 0.3);
          }
          
          .nav-enhanced-sh {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hover-drop-shadow-rust:hover {
            filter: drop-shadow(0 0 8px rgba(139, 69, 19, 0.4));
          }
          
          .hospital-text {
            text-shadow: 1px 1px 2px rgba(28, 28, 28, 0.8);
          }
        `}</style>
      </div>
    </footer>
  )
}

export default Footer
import { Github, Mail, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-20 bg-gray-900/70 border-t border-amber-500/20 mt-auto backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          
          {/* Sección 1: Información */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400 drop-shadow-glow">Portfolio</h3>
            <p className="text-gray-300 text-sm">
              Desarrollador Full Stack creando experiencias digitales únicas 
              entre las brumas de Silent Hill.
            </p>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400 drop-shadow-glow">Enlaces</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-amber-300 transition-colors text-sm hover:drop-shadow-glow">
                Sobre Mí
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-amber-300 transition-colors text-sm hover:drop-shadow-glow">
                Proyectos
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-amber-300 transition-colors text-sm hover:drop-shadow-glow">
                Contacto
              </a>
            </div>
          </div>

          {/* Sección 3: Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-400 drop-shadow-glow">Sígueme</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-300 transition-colors hover:drop-shadow-glow"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:tu-email@ejemplo.com"
                className="text-gray-300 hover:text-amber-300 transition-colors hover:drop-shadow-glow"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-300 transition-colors hover:drop-shadow-glow"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Tu Nombre. Perdido en la niebla.
            </div>

            {/* Mensaje especial con temática Silent Hill */}
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>en las brumas de</span>
              <span className="text-amber-400 font-bold drop-shadow-glow">SILENT HILL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
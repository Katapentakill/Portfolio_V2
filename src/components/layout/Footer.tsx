import { Github, Mail, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900/50 border-t border-red-900/30 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          
          {/* Sección 1: Información */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-400">Portfolio</h3>
            <p className="text-gray-400 text-sm">
              Desarrollador Full Stack creando experiencias digitales únicas.
            </p>
          </div>

          {/* Sección 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-400">Enlaces</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                Sobre Mí
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                Proyectos
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                Contacto
              </a>
            </div>
          </div>

          {/* Sección 3: Redes sociales */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-red-400">Sígueme</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:tu-email@ejemplo.com"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Alexander. Todos los derechos reservados.
            </div>

            {/* Mensaje especial con temática Silent Hill */}
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>y algo de</span>
              <span className="text-red-400 font-bold">HORROR</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
'use client'

import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
      // Aquí iría la lógica real de envío
    }, 2000)
  }

  return (
    <section
      id="contact"
      className="relative z-20 min-h-screen px-6 flex items-center justify-center py-20"
    >
      <div className="w-full max-w-6xl bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg rounded-3xl border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 p-12 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float ${
                i % 2 === 0 ? 'bg-amber-400/30' : 'bg-red-400/30'
              }`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>

        {/* Título mejorado */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent tracking-wider flicker-terrifying">
              Contáctame
            </h2>
            {/* Sombra del título */}
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white/5 tracking-wider transform translate-x-1 translate-y-1">
              Contáctame
            </div>
          </div>
          
          {/* Línea decorativa */}
          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
          </div>
          
          {/* Subtítulo */}
          <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
            Estoy disponible para colaborar, aprender y crear proyectos que inspiren. 
            <span className="text-amber-400 font-semibold"> ¡Conectemos!</span>
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-black/80 via-amber-900/20 to-black/80 p-8 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-amber-500/20 shadow-xl relative overflow-hidden group">
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center space-x-3">
                  <MessageSquare className="animate-pulse" />
                  <span>Información de Contacto</span>
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4 group/item hover:scale-105 transition-transform duration-300">
                    <div className="p-3 bg-amber-500/20 rounded-xl border border-amber-500/30 group-hover/item:border-amber-500/60 transition-colors duration-300">
                      <Mail className="text-amber-400 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 font-medium group-hover/item:text-amber-300 transition-colors duration-300">
                        alexandertapia.dev@gmail.com
                      </p>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Correo electrónico</span>
                    </div>
                  </div>
                  
                  {/* Teléfono */}
                  <div className="flex items-start space-x-4 group/item hover:scale-105 transition-transform duration-300">
                    <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/30 group-hover/item:border-red-500/60 transition-colors duration-300">
                      <Phone className="text-red-400 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 font-medium group-hover/item:text-red-300 transition-colors duration-300">
                        +56 9 1234 5678
                      </p>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Teléfono</span>
                    </div>
                  </div>
                  
                  {/* Ubicación */}
                  <div className="flex items-start space-x-4 group/item hover:scale-105 transition-transform duration-300">
                    <div className="p-3 bg-amber-500/20 rounded-xl border border-amber-500/30 group-hover/item:border-amber-500/60 transition-colors duration-300">
                      <MapPin className="text-amber-400 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 font-medium group-hover/item:text-amber-300 transition-colors duration-300">
                        Antofagasta, Chile
                      </p>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Ubicación</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-gradient-to-br from-black/80 via-red-900/20 to-black/80 p-8 rounded-2xl border-2 border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-red-500/20 shadow-xl relative overflow-hidden group">
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-red-400 mb-4">Disponibilidad</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Disponible para proyectos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-gray-300">Respuesta en 24-48 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-gray-300">Colaboraciones remotas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 p-8 rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/50 transition-all duration-500 hover:shadow-amber-500/20 shadow-xl relative overflow-hidden group">
            
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center space-x-3">
                <Send className="animate-pulse" />
                <span>Enviar Mensaje</span>
              </h3>
              
              {/* Nombre */}
              <div className="group/input">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center space-x-2">
                  <User size={16} />
                  <span>Nombre completo</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 bg-gray-800/80 text-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 border border-gray-700/50 transition-all duration-300 group-hover/input:border-amber-500/30"
                  required
                />
              </div>
              
              {/* Email */}
              <div className="group/input">
                <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Correo electrónico</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-gray-800/80 text-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 border border-gray-700/50 transition-all duration-300 group-hover/input:border-amber-500/30"
                  required
                />
              </div>
              
              {/* Asunto */}
              <div className="group/input">
                <label className="block text-sm font-medium text-gray-400 mb-2">Asunto</label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="¿En qué podemos colaborar?"
                  className="w-full px-4 py-3 bg-gray-800/80 text-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 border border-gray-700/50 transition-all duration-300 group-hover/input:border-amber-500/30"
                  required
                />
              </div>
              
              {/* Mensaje */}
              <div className="group/input">
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  className="w-full px-4 py-3 bg-gray-800/80 text-gray-200 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 border border-gray-700/50 transition-all duration-300 group-hover/input:border-amber-500/30 resize-none"
                  required
                />
              </div>
              
              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-bold text-lg rounded-xl hover:from-amber-400 hover:via-amber-300 hover:to-amber-400 transition-all duration-300 flicker-terrifying-fast shadow-lg hover:shadow-amber-500/50 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden group/button"
              >
                {/* Efecto de brillo interno */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative flex items-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
      </div>
    </section>
  )
}

export default Contact
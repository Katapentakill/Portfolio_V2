'use client'

import { Mail, Phone, MapPin, Send, User, MessageSquare, FileText, Clock, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [glitchText, setGlitchText] = useState('CONTACT LOG')

  useEffect(() => {
    // Actualizar la hora cada segundo para simular el sistema de Silent Hill
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }))
    }
    
    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    // Efecto de glitch en el título
    const glitchEffect = () => {
      const variants = ['CONTACT LOG', 'C0NT4CT L0G', 'ＣＯＮＴＡＣＴ　ＬＯＧ', '¿¿¿¿¿¿¿ ???']
      setGlitchText(variants[Math.floor(Math.random() * variants.length)])
      setTimeout(() => setGlitchText('CONTACT LOG'), 200)
    }

    const glitchInterval = setInterval(glitchEffect, 12000)
    
    return () => {
      clearInterval(timeInterval)
      clearInterval(glitchInterval)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío con efecto de "sistema procesando"
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
      // Aquí iría la lógica real de envío
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 sm:px-6 py-20 overflow-hidden"
    >
      {/* Efectos de interferencia Silent Hill */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="sh-interference absolute inset-0"></div>
        <div className="sh-crt-effect absolute inset-0"></div>
      </div>

      {/* Líneas de interferencia aleatorias */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-red-500/10 to-transparent h-px sh-flicker-red"
            style={{
              top: `${10 + i * 6}%`,
              left: `${Math.random() * 30}%`,
              width: `${40 + Math.random() * 50}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Partículas flotantes estilo polvo/ceniza */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-30 sh-float ${
              i % 4 === 0 ? 'bg-red-400/40' : 
              i % 4 === 1 ? 'bg-orange-400/40' : 
              i % 4 === 2 ? 'bg-yellow-600/40' : 'bg-gray-400/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header estilo sistema de Silent Hill */}
        <div className="mb-16 space-y-8">
          {/* Título principal con glitch */}
          <div className="text-center">
            <div className="relative inline-block">
              <h2 
                className="sh-hero-title sh-fade-in"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  textShadow: `
                    0 0 20px var(--sh-glow-red),
                    0 0 40px rgba(220, 20, 60, 0.6),
                    0 0 60px rgba(220, 20, 60, 0.4),
                    4px 4px 0 rgba(0, 0, 0, 0.9)
                  `
                }}
              >
                {glitchText}
              </h2>
              
              {/* Efecto de sombra fantasmal */}
              <div 
                className="absolute inset-0 text-gray-600 opacity-10 transform translate-x-2 translate-y-2 pointer-events-none sh-hero-title"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
              >
                CONTACT LOG
              </div>
            </div>

            {/* Timestamp estilo Silent Hill */}
            <div className="mt-6 flex justify-center">
              <div className="sh-card-tech p-4 rounded-lg flex items-center space-x-4">
                <Clock size={16} className="text-orange-400 sh-pulse-red" />
                <span 
                  className="font-jetbrains text-sm text-orange-300 tracking-wider"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  SYSTEM TIME: {currentTime}
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Status Bar estilo juego */}
          <div className="flex justify-center">
            <div className="sh-card p-4 rounded-xl flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Zap size={14} className="text-yellow-400" />
                <span className="font-jetbrains text-xs text-gray-300">STATUS: ONLINE</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-jetbrains text-xs text-gray-300">READY TO RECEIVE</span>
              </div>
            </div>
          </div>

          {/* Subtítulo estilo diario de Silent Hill */}
          <div className="text-center max-w-4xl mx-auto">
            <p 
              className="sh-hero-description text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-palatino)' }}
            >
              <span className="sh-highlight-important">"I found this old contact terminal in the fog...</span><br/>
              The screen flickers, but it still works. Maybe someone out there can hear me.<br/>
              <span className="sh-highlight-data">If you're reading this, please reach out."</span>
            </p>
          </div>
        </div>

        {/* Contenido principal estilo Silent Hill 2 */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Panel izquierdo - Información estilo diario */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Información de contacto estilo documento encontrado */}
            <div className="sh-card-important p-8 rounded-2xl relative overflow-hidden group">
              {/* Efecto de papel viejo */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="text-red-400 sh-pulse-red" size={24} />
                  <h3 
                    className="text-2xl font-bold text-red-400 sh-hero-subtitle"
                    style={{ fontFamily: 'var(--font-palatino)' }}
                  >
                    Contact Information
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="group/item border-l-2 border-red-800 pl-4 hover:border-red-500 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-red-900/30 rounded-lg border border-red-800 group-hover/item:border-red-600 transition-colors">
                        <Mail className="text-red-400" size={18} />
                      </div>
                      <div className="flex-1">
                        <p 
                          className="text-gray-200 font-medium font-jetbrains text-sm group-hover/item:text-red-300 transition-colors"
                          style={{ fontFamily: 'var(--font-jetbrains)' }}
                        >
                          alexandertapia.dev@gmail.com
                        </p>
                        <span 
                          className="text-xs text-gray-500 uppercase tracking-wider font-palatino"
                          style={{ fontFamily: 'var(--font-palatino)' }}
                        >
                          Primary Communication Channel
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Teléfono */}
                  <div className="group/item border-l-2 border-orange-800 pl-4 hover:border-orange-500 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-orange-900/30 rounded-lg border border-orange-800 group-hover/item:border-orange-600 transition-colors">
                        <Phone className="text-orange-400" size={18} />
                      </div>
                      <div className="flex-1">
                        <p 
                          className="text-gray-200 font-medium font-jetbrains text-sm group-hover/item:text-orange-300 transition-colors"
                          style={{ fontFamily: 'var(--font-jetbrains)' }}
                        >
                          +56 9 1234 5678
                        </p>
                        <span 
                          className="text-xs text-gray-500 uppercase tracking-wider font-palatino"
                          style={{ fontFamily: 'var(--font-palatino)' }}
                        >
                          Emergency Contact Line
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ubicación */}
                  <div className="group/item border-l-2 border-yellow-800 pl-4 hover:border-yellow-500 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-yellow-900/30 rounded-lg border border-yellow-800 group-hover/item:border-yellow-600 transition-colors">
                        <MapPin className="text-yellow-400" size={18} />
                      </div>
                      <div className="flex-1">
                        <p 
                          className="text-gray-200 font-medium font-jetbrains text-sm group-hover/item:text-yellow-300 transition-colors"
                          style={{ fontFamily: 'var(--font-jetbrains)' }}
                        >
                          Antofagasta, Chile
                        </p>
                        <span 
                          className="text-xs text-gray-500 uppercase tracking-wider font-palatino"
                          style={{ fontFamily: 'var(--font-palatino)' }}
                        >
                          Last Known Location
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Panel estilo Silent Hill */}
            <div className="sh-card-tech p-6 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 
                  className="text-lg font-bold text-orange-400 mb-4 font-palatino flex items-center space-x-2"
                  style={{ fontFamily: 'var(--font-palatino)' }}
                >
                  <MessageSquare size={20} />
                  <span>System Status</span>
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-palatino text-sm">Response Time</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-jetbrains text-green-400 text-xs">24-48 HOURS</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-palatino text-sm">Collaboration Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="font-jetbrains text-yellow-400 text-xs">AVAILABLE</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-palatino text-sm">Remote Work</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="font-jetbrains text-blue-400 text-xs">ENABLED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel derecho - Formulario estilo terminal Silent Hill */}
          <div className="lg:col-span-3">
            <div className="sh-card p-8 rounded-2xl relative overflow-hidden">
              {/* Efecto de terminal viejo */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-green-800/10"></div>
              </div>
              
              <div className="space-y-6 relative z-10">
                {/* Header del formulario */}
                <div className="border-b border-gray-700 pb-4 mb-6">
                  <h3 
                    className="text-2xl font-bold text-orange-400 font-palatino flex items-center space-x-3"
                    style={{ fontFamily: 'var(--font-palatino)' }}
                  >
                    <Send className="sh-pulse-red" />
                    <span>Message Terminal</span>
                  </h3>
                  <p 
                    className="text-gray-400 text-sm mt-2 font-palatino"
                    style={{ fontFamily: 'var(--font-palatino)' }}
                  >
                    Please enter your message. The system will attempt to deliver it...
                  </p>
                </div>
                
                {/* Campos del formulario */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="group/input">
                    <label 
                      className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2 font-jetbrains"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      <User size={16} />
                      <span>SENDER NAME</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Enter your full name..."
                      className="w-full px-4 py-3 bg-black/50 text-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 border border-gray-700 transition-all duration-300 group-hover/input:border-orange-500/30 font-jetbrains text-sm"
                      style={{ 
                        fontFamily: 'var(--font-jetbrains)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(4px)'
                      }}
                      required
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="group/input">
                    <label 
                      className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2 font-jetbrains"
                      style={{ fontFamily: 'var(--font-jetbrains)' }}
                    >
                      <Mail size={16} />
                      <span>EMAIL ADDRESS</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@domain.com"
                      className="w-full px-4 py-3 bg-black/50 text-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 border border-gray-700 transition-all duration-300 group-hover/input:border-orange-500/30 font-jetbrains text-sm"
                      style={{ 
                        fontFamily: 'var(--font-jetbrains)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(4px)'
                      }}
                      required
                    />
                  </div>
                </div>
                
                {/* Asunto */}
                <div className="group/input">
                  <label 
                    className="block text-sm font-medium text-gray-300 mb-2 font-jetbrains"
                    style={{ fontFamily: 'var(--font-jetbrains)' }}
                  >
                    MESSAGE SUBJECT
                  </label>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="Brief description of your message..."
                    className="w-full px-4 py-3 bg-black/50 text-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 border border-gray-700 transition-all duration-300 group-hover/input:border-orange-500/30 font-jetbrains text-sm"
                    style={{ 
                      fontFamily: 'var(--font-jetbrains)',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(4px)'
                    }}
                    required
                  />
                </div>
                
                {/* Mensaje */}
                <div className="group/input">
                  <label 
                    className="block text-sm font-medium text-gray-300 mb-2 font-jetbrains"
                    style={{ fontFamily: 'var(--font-jetbrains)' }}
                  >
                    MESSAGE CONTENT
                  </label>
                  <textarea
                    rows={6}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Type your message here... The terminal will transmit your words through the fog..."
                    className="w-full px-4 py-3 bg-black/50 text-gray-200 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 border border-gray-700 transition-all duration-300 group-hover/input:border-orange-500/30 resize-none font-jetbrains text-sm"
                    style={{ 
                      fontFamily: 'var(--font-jetbrains)',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(4px)'
                    }}
                    required
                  />
                </div>
                
                {/* Botón de envío estilo Silent Hill */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white font-bold text-lg rounded-lg hover:from-red-800 hover:via-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-900/50 hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 relative overflow-hidden group/button font-jetbrains border-2 border-red-700 hover:border-red-500"
                  style={{ 
                    fontFamily: 'var(--font-jetbrains)',
                    textShadow: '0 0 10px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {/* Efecto de barrido de luz */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <span className="relative flex items-center space-x-3 uppercase tracking-wider">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </span>
                </button>
                
                {/* Footer del terminal */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p 
                    className="text-xs text-gray-500 text-center font-jetbrains"
                    style={{ fontFamily: 'var(--font-jetbrains)' }}
                  >
                    System will attempt message delivery within 24-48 hours.
                    <br/>
                    Connection stability not guaranteed due to atmospheric interference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 sh-card rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span 
              className="font-jetbrains text-xs text-gray-400 tracking-wider"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              TRANSMISSION READY • AWAITING INPUT
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Efectos de borde */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
    </section>
  )
}

export default Contact
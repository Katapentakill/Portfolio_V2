'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-20 min-h-screen px-6 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl bg-black/70 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-2xl p-10 space-y-8 z-30">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 tracking-wider flicker-terrifying">
            Contáctame
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Estoy disponible para colaborar, aprender y crear proyectos que inspiren.
          </p>
        </div>

        {/* Recuadros separados */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Información personal */}
          <div className="bg-black/50 p-6 rounded-xl border border-amber-500/20 transition duration-300 hover:shadow-[0_0_25px_#f59e0b66]">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-amber-400" />
                <div>
                  <p className="text-gray-300">alexandertapia.dev@gmail.com</p>
                  <span className="text-xs text-gray-500">Correo electrónico</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-amber-400" />
                <div>
                  <p className="text-gray-300">+56 9 1234 5678</p>
                  <span className="text-xs text-gray-500">Teléfono</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-amber-400" />
                <div>
                  <p className="text-gray-300">Antofagasta, Chile</p>
                  <span className="text-xs text-gray-500">Ubicación</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="bg-black/50 p-6 rounded-xl border border-amber-500/20 transition duration-300 hover:shadow-[0_0_25px_#f59e0b66] space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 bg-gray-800/80 text-gray-200 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Correo"
              className="w-full px-4 py-2 bg-gray-800/80 text-gray-200 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-4 py-2 bg-gray-800/80 text-gray-200 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <textarea
              rows={4}
              placeholder="Mensaje"
              className="w-full px-4 py-2 bg-gray-800/80 text-gray-200 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-amber-500 text-black font-semibold rounded-md hover:bg-amber-400 transition-colors flicker-terrifying-fast"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FogEffect from '@/components/layout/FogEffect'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
      {/* Efecto de niebla */}
      <FogEffect />
      
      {/* Header */}
      <Header />
      
      {/* Contenido principal */}
      <main className="relative z-20 flex-1 flex items-center justify-center px-6 pt-20">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider title-enhanced">
            PORTFOLIO
          </h1>
          <div className="text-2xl text-amber-400 font-bold animate-pulse enhanced-visibility">
            DEVELOPER
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bienvenido a mi portfolio. Mueve el cursor para apartar la niebla y descubrir mis proyectos.
          </p>
          <div className="pt-8">
            <button className="px-8 py-3 bg-amber-500/20 border border-amber-400/50 text-amber-300 rounded-lg hover:bg-amber-500/30 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm enhanced-visibility">
              Explorar Proyectos
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
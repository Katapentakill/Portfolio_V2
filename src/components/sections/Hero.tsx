'use client'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-20 flex items-center justify-center px-6 pt-20 min-h-screen"
    >
      <div className="text-center space-y-8 animate-fade-in">
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
          <a href="#projects">
            <button className="px-8 py-3 bg-amber-500/20 border border-amber-400/50 text-amber-300 rounded-lg hover:bg-amber-500/30 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm enhanced-visibility">
              Explorar Proyectos
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

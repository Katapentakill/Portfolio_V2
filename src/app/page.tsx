import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Contenido principal temporal */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider">
            PORTFOLIO
          </h1>
          <div className="text-2xl text-red-400 font-bold animate-pulse">
            DEVELOPER
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Aquí irá el contenido principal del portfolio
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}
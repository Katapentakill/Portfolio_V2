import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FogEffect from '@/components/layout/FogEffect'
import Hero from '@/components/sections/Hero'         // ⬅️ nuevo
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
      <FogEffect />
      <Header />

      <main className="relative z-20 flex-1">
        <Hero />          {/* ⬅️ Sección de bienvenida */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

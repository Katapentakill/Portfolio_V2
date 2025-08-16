// 📁 /app/page.tsx - Página principal con todas las secciones
// Importa Experience y Projects que creamos

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FogEffect from '@/components/layout/FogEffect'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col relative overflow-hidden">
      <FogEffect />
      <Header />

      <main className="relative z-20 flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
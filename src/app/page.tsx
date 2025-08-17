// 📁 /app/page.tsx - Página principal con sistema atmosférico completo Silent Hill

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SilentHillAtmosphericSystem from '@/components/layout/SilentHillAtmosphericSystem'
import Hero from '@/components/sections/Hero'
import Contact from '@/components/sections/Contact'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import ProjectsSection from '@/components/sections/Projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 flex flex-col relative overflow-hidden">
      {/* Layer 50: Header fijo encima de todo (el componente ya usa z-50) */}
      <Header />

      {/* Layer 40: Canvas de atmósfera (debe dibujar su <canvas> con z-[40] y mixBlendMode 'lighten') */}
      <SilentHillAtmosphericSystem />

      {/* Layer 20: Contenido principal debajo del canvas */}
      <main className="relative z-[20] flex-1">
        <Hero />
        <Skills />
        <Experience />
        <ProjectsSection />
        <Contact />
      </main>

      {/* Footer (queda bajo la niebla, como el resto del contenido) */}
      <Footer />

      {/* Layer 0: Efectos de fondo muy sutiles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradiente de fondo Silent Hill */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5"></div>

        {/* Líneas de interferencia sutiles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>

        {/* Ruido de fondo muy sutil */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  )
}

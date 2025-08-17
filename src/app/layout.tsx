// 📁 /app/layout.tsx - Layout sin next/font/local para evitar errores
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Solo Google Fonts que funcionan bien
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Alexander Tapia - Data Scientist & Full Stack Developer',
  description: 'Portfolio personal de Alexander Tapia Olmedo - Data Scientist, Full Stack Developer y especialista en Machine Learning. Experiencia en Kaggle, Big Data y desarrollo de sistemas EMR/CMR con IA predictiva.',
  keywords: [
    'Alexander Tapia',
    'Data Scientist', 
    'Full Stack Developer',
    'Machine Learning',
    'Kaggle',
    'Big Data',
    'IA',
    'Python',
    'React',
    'Next.js',
    'Chile',
    'Antofagasta'
  ],
  authors: [{ name: 'Alexander Tapia Olmedo' }],
  creator: 'Alexander Tapia Olmedo',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alexandertapia.dev',
    title: 'Alexander Tapia - Data Scientist & Full Stack Developer',
    description: 'Portfolio personal de Alexander Tapia Olmedo - Especialista en Machine Learning y desarrollo Full Stack',
    siteName: 'Alexander Tapia Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexander Tapia - Data Scientist & Full Stack Developer',
    description: 'Portfolio personal de Alexander Tapia Olmedo - Especialista en Machine Learning y desarrollo Full Stack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Preload fuentes críticas */}
        <link
          rel="preload"
          href="/fonts/SLNTHLC.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/webfonts/JetBrainsMono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Favicon y iconos */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Indicador de carga inicial */}
        <div id="loading" className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-orange-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            </div>
            <p className="text-orange-300 text-sm font-medium tracking-wide">Cargando experiencia...</p>
          </div>
        </div>

        {/* Contenido principal */}
        {children}

        {/* Script para ocultar el loader */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                const loader = document.getElementById('loading');
                if (loader) {
                  loader.style.opacity = '0';
                  loader.style.transition = 'opacity 0.5s ease-out';
                  setTimeout(() => {
                    loader.style.display = 'none';
                  }, 500);
                }
              });
            `
          }}
        />
      </body>
    </html>
  )
}
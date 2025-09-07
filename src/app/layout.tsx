import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import Inter font with optimization settings
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

// SEO and metadata configuration
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
  
  // Open Graph configuration for social media
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alexandertapia.dev',
    title: 'Alexander Tapia - Data Scientist & Full Stack Developer',
    description: 'Portfolio personal de Alexander Tapia Olmedo - Especialista en Machine Learning y desarrollo Full Stack',
    siteName: 'Alexander Tapia Portfolio',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Alexander Tapia Portfolio'
      }
    ]
  },
  
  // Twitter card configuration
  twitter: {
    card: 'summary_large_image',
    title: 'Alexander Tapia - Data Scientist & Full Stack Developer',
    description: 'Portfolio personal de Alexander Tapia Olmedo - Especialista en Machine Learning y desarrollo Full Stack',
    images: ['/favicon.png']
  },
  
  // Search engine optimization
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
  
  // Favicon and icon configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Microsoft tile configuration */}
        <meta name="msapplication-TileColor" content="#8B4513" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preload critical fonts for performance */}
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
        
        {/* Icon links for various devices and sizes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color and viewport configuration */}
        <meta name="theme-color" content="#8B4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Loading indicator shown during initial page load */}
        <div id="loading" className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              {/* Dual spinning loader with different speeds */}
              <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-orange-500 rounded-full animate-spin" 
                   style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            </div>
            <p className="text-orange-300 text-sm font-medium tracking-wide">Cargando experiencia...</p>
          </div>
        </div>

        {/* Main application content */}
        {children}

        {/* Script to hide loader after page load */}
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
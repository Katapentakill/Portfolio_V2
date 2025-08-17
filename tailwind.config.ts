import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      // Solo colores básicos - todo lo demás lo maneja CSS
      colors: {
        // Silent Hill 2 colors
        'sh-red': {
          blood: '#8B0000',
          bright: '#DC143C',
        },
        'sh-rust': {
          deep: '#704214',
          medium: '#8B4513', 
          light: '#A0522D',
        },
        'sh-hospital': {
          green: '#2F4F2F',
          gray: '#696969',
          white: '#F5F5DC',
          yellow: '#DAA520',
        },
        'sh-shadow': {
          deep: '#0D0D0D',
          medium: '#1A1A1A',
        },
        'sh-flesh': {
          pale: '#F5DEB3',
          sick: '#DEB887',
        }
      },
    },
  },
  
  plugins: [],
}

export default config
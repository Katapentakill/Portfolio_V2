// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility para detectar dispositivos móviles
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Utility para detectar si es un dispositivo de bajo rendimiento
export const isLowPerformanceDevice = () => {
  if (typeof window === 'undefined') return false
  
  const isMobile = isMobileDevice()
  const isSlowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
  const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4
  
  return isMobile || isSlowCPU || isLowMemory
}

// Utility para throttling de funciones
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Utility para debouncing
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Utility para scroll suave
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
}

// Utility para formatear fechas
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long'
  })
}

// Utility para calcular años de experiencia
export const calculateYearsOfExperience = (startDate: string): number => {
  const start = new Date(startDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - start.getTime())
  const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365))
  return diffYears
}

// Utility para lazy loading de imágenes
export const createLazyImage = (src: string, alt: string, className?: string) => {
  return {
    src,
    alt,
    loading: 'lazy' as const,
    className: cn('transition-opacity duration-300', className),
    onLoad: (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.style.opacity = '1'
    },
    onError: (e: React.SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.style.display = 'none'
      // Mostrar fallback si existe
      const fallback = e.currentTarget.parentElement?.querySelector('.fallback-icon')
      if (fallback) {
        (fallback as HTMLElement).style.display = 'flex'
      }
    },
    style: { opacity: 0 }
  }
}

// Utility para generar IDs únicos
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// Utility para validar emails
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Utility para copiar al clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback para navegadores que no soportan clipboard API
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (fallbackErr) {
      document.body.removeChild(textArea)
      return false
    }
  }
}

// Utility para preload de assets críticos
export const preloadCriticalAssets = () => {
  // Preload de iconos críticos
  const criticalIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  ]
  
  criticalIcons.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}

// Utility para manejar errores de carga de recursos
export const handleResourceError = (error: Error, resource: string) => {
  console.warn(`Failed to load ${resource}:`, error)
  
  // En desarrollo, mostrar el error. En producción, silencioso.
  if (process.env.NODE_ENV === 'development') {
    console.error(`Resource loading error for ${resource}:`, error)
  }
}

// Utility para performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && window.performance) {
    const start = performance.now()
    fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
  } else {
    fn()
  }
}
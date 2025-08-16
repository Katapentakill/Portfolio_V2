// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverProps = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const { freezeOnceVisible = false, ...observerOptions } = options

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    // Si ya está cargado y congelado, no hacer nada
    if (freezeOnceVisible && isLoaded) return

    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      
      if (entry.isIntersecting && !isLoaded) {
        setIsLoaded(true)
      }

      // Congelar observación si está visible y freezeOnceVisible está activo
      if (freezeOnceVisible && entry.isIntersecting && observerRef.current) {
        observerRef.current.unobserve(target)
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...observerOptions
    })

    observerRef.current.observe(target)

    return () => {
      if (observerRef.current) {
        observerRef.current.unobserve(target)
      }
    }
  }, [isLoaded, freezeOnceVisible])

  return { 
    targetRef, 
    isIntersecting, 
    isLoaded,
    // Función para resetear manualmente
    reset: () => {
      setIsLoaded(false)
      setIsIntersecting(false)
    }
  }
}
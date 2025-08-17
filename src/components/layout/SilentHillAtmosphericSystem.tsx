'use client'

import React, { useEffect, useRef, useState } from 'react'

const SilentHillAtmosphericSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)
  const [currentMode, setCurrentMode] = useState<'fog' | 'flashlight' | 'static' | 'hospital'>('fog')
  const [isFlashlightOn, setIsFlashlightOn] = useState(false)
  
  // Tipos para las partículas
  interface FogParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    baseOpacity: number;
    color: 'fog' | 'rust' | 'hospital' | 'blood';
    pulse: number;
    pulseSpeed: number;
    depth: number;
    type: 'main' | 'dust' | 'shadow';
  }

  interface StaticParticle {
    x: number;
    y: number;
    life: number;
    maxLife: number;
    opacity: number;
  }

  interface HospitalParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    baseOpacity: number;
    color: 'dust' | 'light';
    pulse: number;
    pulseSpeed: number;
    flicker: boolean;
  }

  const particles = useRef<Array<FogParticle | HospitalParticle>>([])
  const staticParticles = useRef<Array<StaticParticle>>([])

  // Escuchar cambios de modo desde el header
  useEffect(() => {
    const handleAtmosphericChange = (event: CustomEvent) => {
      const newMode = event.detail.mode
      setCurrentMode(newMode)
      
      if (newMode === 'flashlight') {
        setIsFlashlightOn(true)
        document.body.style.backgroundColor = '#000000'
      } else {
        setIsFlashlightOn(false)
        document.body.style.backgroundColor = ''
      }
    }

    window.addEventListener('atmosphericModeChange', handleAtmosphericChange as EventListener)
    return () => window.removeEventListener('atmosphericModeChange', handleAtmosphericChange as EventListener)
  }, [])

  // Manejar teclas para efectos especiales
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        if (currentMode === 'flashlight') {
          setIsFlashlightOn(!isFlashlightOn)
        }
      }
      if (e.key === 'h' || e.key === 'H') {
        setCurrentMode('hospital')
      }
      if (e.key === 'n' || e.key === 'N') {
        setCurrentMode('fog')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentMode, isFlashlightOn])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Crear partículas según el modo
    const createParticles = () => {
      particles.current = []
      staticParticles.current = []
      
      if (currentMode === 'fog') {
        createFogParticles()
      } else if (currentMode === 'static') {
        createStaticParticles()
      } else if (currentMode === 'hospital') {
        createHospitalParticles()
      }
    }

    const createFogParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 1800)
      
      for (let i = 0; i < particleCount; i++) {
        const typeRand = Math.random()
        const colorRand = Math.random()
        
        let particleType: 'main' | 'dust' | 'shadow'
        let particleColor: 'fog' | 'rust' | 'hospital' | 'blood'
        
        if (typeRand < 0.5) particleType = 'main'
        else if (typeRand < 0.75) particleType = 'dust'
        else particleType = 'shadow'
        
        if (colorRand < 0.4) particleColor = 'fog'
        else if (colorRand < 0.65) particleColor = 'rust'
        else if (colorRand < 0.85) particleColor = 'hospital'
        else particleColor = 'blood'

        const baseSize = particleType === 'main' ? 160 : particleType === 'dust' ? 80 : 220

        const particle: FogParticle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (particleType === 'shadow' ? 0.2 : 0.4),
          vy: (Math.random() - 0.5) * (particleType === 'shadow' ? 0.2 : 0.4),
          size: Math.random() * baseSize + (baseSize * 0.5),
          opacity: Math.random() * (particleType === 'shadow' ? 0.12 : 0.2) + 0.08,
          baseOpacity: Math.random() * (particleType === 'shadow' ? 0.12 : 0.2) + 0.08,
          color: particleColor,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.015,
          depth: Math.random(),
          type: particleType
        }

        particles.current.push(particle)
      }
    }

    const createStaticParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 8)
      
      for (let i = 0; i < particleCount; i++) {
        const particle: StaticParticle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          life: Math.random() * 10 + 5,
          maxLife: Math.random() * 10 + 5,
          opacity: Math.random() * 0.8 + 0.2
        }
        staticParticles.current.push(particle)
      }
    }

    const createHospitalParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 3000)
      
      for (let i = 0; i < particleCount; i++) {
        const particle: HospitalParticle = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 40 + 20,
          opacity: Math.random() * 0.3 + 0.1,
          baseOpacity: Math.random() * 0.3 + 0.1,
          color: Math.random() < 0.7 ? 'dust' : 'light',
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.005 + Math.random() * 0.01,
          flicker: Math.random() < 0.3
        }
        particles.current.push(particle)
      }
    }

    createParticles()

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      if (currentMode === 'fog') {
        animateFog(ctx)
      } else if (currentMode === 'flashlight') {
        animateFlashlight(ctx)
      } else if (currentMode === 'static') {
        animateStatic(ctx)
      } else if (currentMode === 'hospital') {
        animateHospital(ctx)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    const animateFog = (ctx: CanvasRenderingContext2D) => {
      const sortedParticles = [...particles.current].sort((a, b) => {
        const aParticle = a as FogParticle
        const bParticle = b as FogParticle
        if (aParticle.type === bParticle.type) return aParticle.depth - bParticle.depth
        const typeOrder: Record<'shadow' | 'main' | 'dust', number> = { shadow: 0, main: 1, dust: 2 }
        return typeOrder[aParticle.type] - typeOrder[bParticle.type]
      })
      
      sortedParticles.forEach(particleGeneric => {
        const particle = particleGeneric as FogParticle
        const dx = particle.x - mousePos.current.x
        const dy = particle.y - mousePos.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = particle.type === 'shadow' ? 250 : 300
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.opacity = particle.baseOpacity * (1 - force * 0.5)
          
          const pushStrength = force * (particle.type === 'shadow' ? 1.2 : 1.8) * (1 + particle.depth)
          const pushX = (dx / distance) * pushStrength
          const pushY = (dy / distance) * pushStrength
          particle.x += pushX
          particle.y += pushY
        } else {
          particle.opacity = particle.baseOpacity
        }
        
        particle.pulse += particle.pulseSpeed
        const pulseMultiplier = 0.5 + Math.sin(particle.pulse) * 0.5
        
        const speedMultiplier = particle.type === 'shadow' ? 0.2 : 0.3
        particle.x += particle.vx * speedMultiplier * (0.3 + particle.depth)
        particle.y += particle.vy * speedMultiplier * (0.3 + particle.depth)
        
        if (Math.random() < 0.003) {
          particle.vx = (Math.random() - 0.5) * (particle.type === 'shadow' ? 0.2 : 0.4)
          particle.vy = (Math.random() - 0.5) * (particle.type === 'shadow' ? 0.2 : 0.4)
        }
        
        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size
        
        drawFogParticle(ctx, particle, pulseMultiplier)
      })
    }

    const animateFlashlight = (ctx: CanvasRenderingContext2D) => {
      // Fondo completamente negro
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      if (isFlashlightOn) {
        // Crear gradiente radial para la linterna
        const flashlightRadius = 300
        const gradient = ctx.createRadialGradient(
          mousePos.current.x, mousePos.current.y, 0,
          mousePos.current.x, mousePos.current.y, flashlightRadius
        )
        
        // Efecto de linterna realista
        gradient.addColorStop(0, 'rgba(255, 255, 240, 0.9)')
        gradient.addColorStop(0.3, 'rgba(255, 255, 220, 0.7)')
        gradient.addColorStop(0.6, 'rgba(255, 255, 180, 0.4)')
        gradient.addColorStop(0.8, 'rgba(255, 255, 120, 0.2)')
        gradient.addColorStop(1, 'rgba(255, 255, 60, 0)')
        
        ctx.save()
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        // Añadir parpadeo ocasional de la linterna
        if (Math.random() < 0.02) {
          ctx.globalAlpha = 0.3 + Math.random() * 0.4
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
        
        // Partículas de polvo en el haz de luz
        for (let i = 0; i < 50; i++) {
          const dustX = mousePos.current.x + (Math.random() - 0.5) * flashlightRadius * 1.5
          const dustY = mousePos.current.y + (Math.random() - 0.5) * flashlightRadius * 1.5
          const dustDistance = Math.sqrt(
            Math.pow(dustX - mousePos.current.x, 2) + 
            Math.pow(dustY - mousePos.current.y, 2)
          )
          
          if (dustDistance < flashlightRadius) {
            const dustOpacity = (1 - dustDistance / flashlightRadius) * 0.6
            ctx.globalAlpha = dustOpacity * (0.5 + Math.random() * 0.5)
            ctx.fillStyle = '#ffffff'
            ctx.beginPath()
            ctx.arc(dustX, dustY, Math.random() * 2 + 0.5, 0, Math.PI * 2)
            ctx.fill()
          }
        }
        
        ctx.restore()
      }
      
      // Mensaje de ayuda
      if (!isFlashlightOn) {
        ctx.save()
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.font = '16px monospace'
        ctx.textAlign = 'center'
        ctx.fillText('Presiona F para encender la linterna', canvas.width / 2, canvas.height / 2)
        ctx.restore()
      }
    }

    const animateStatic = (ctx: CanvasRenderingContext2D) => {
      // Fondo de TV estática
      ctx.fillStyle = '#0a0a0a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Regenerar partículas estáticas constantemente
      if (Math.random() < 0.3) {
        for (let i = 0; i < 100; i++) {
          staticParticles.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            life: Math.random() * 3 + 1,
            maxLife: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2
          })
        }
      }
      
      // Dibujar estática
      staticParticles.current = staticParticles.current.filter(particle => {
        particle.life--
        
        if (particle.life > 0) {
          const lifeRatio = particle.life / particle.maxLife
          ctx.globalAlpha = particle.opacity * lifeRatio
          ctx.fillStyle = Math.random() < 0.5 ? '#ffffff' : '#cccccc'
          ctx.fillRect(particle.x, particle.y, 1, 1)
          return true
        }
        return false
      })
      
      // Líneas horizontales de interferencia
      for (let i = 0; i < 5; i++) {
        if (Math.random() < 0.3) {
          const y = Math.random() * canvas.height
          ctx.globalAlpha = 0.4 + Math.random() * 0.4
          ctx.fillStyle = '#ffffff'
          ctx.fillRect(0, y, canvas.width, 1 + Math.random() * 2)
        }
      }
      
      // Interferencia de señal
      if (Math.random() < 0.1) {
        ctx.save()
        ctx.globalAlpha = 0.3
        ctx.fillStyle = '#ffffff'
        for (let i = 0; i < canvas.width; i += 2) {
          for (let j = 0; j < canvas.height; j += 2) {
            if (Math.random() < 0.1) {
              ctx.fillRect(i, j, 1, 1)
            }
          }
        }
        ctx.restore()
      }
      
      // Efecto de distorsión alrededor del mouse
      const distortRadius = 150
      const dx = mousePos.current.x
      const dy = mousePos.current.y
      
      ctx.save()
      ctx.globalCompositeOperation = 'difference'
      const distortGradient = ctx.createRadialGradient(dx, dy, 0, dx, dy, distortRadius)
      distortGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)')
      distortGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)')
      distortGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.fillStyle = distortGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()
    }

    const animateHospital = (ctx: CanvasRenderingContext2D) => {
      // Fondo de hospital abandonado
      ctx.fillStyle = '#0f0f0f'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      particles.current.forEach(particleGeneric => {
        const particle = particleGeneric as HospitalParticle
        // Movimiento lento y pesado
        particle.x += particle.vx
        particle.y += particle.vy
        
        // Parpadeo de luces fluorescentes
        particle.pulse += particle.pulseSpeed
        let pulseMultiplier = 0.3 + Math.sin(particle.pulse) * 0.3
        
        if (particle.flicker && Math.random() < 0.05) {
          pulseMultiplier *= 0.1 + Math.random() * 0.3
        }
        
        // Wrap around
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        ctx.save()
        ctx.globalAlpha = particle.opacity * pulseMultiplier
        
        if (particle.color === 'light') {
          // Luces fluorescentes parpadeantes
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          )
          gradient.addColorStop(0, 'rgba(240, 255, 240, 0.8)')
          gradient.addColorStop(0.4, 'rgba(200, 255, 200, 0.4)')
          gradient.addColorStop(0.8, 'rgba(150, 255, 150, 0.2)')
          gradient.addColorStop(1, 'rgba(100, 255, 100, 0)')
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Polvo y partículas suspendidas
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          )
          gradient.addColorStop(0, 'rgba(180, 180, 160, 0.6)')
          gradient.addColorStop(0.5, 'rgba(140, 140, 120, 0.3)')
          gradient.addColorStop(1, 'rgba(100, 100, 80, 0)')
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        }
        
        ctx.restore()
      })
      
      // Líneas de luz intermitente (fluorescentes)
      if (Math.random() < 0.1) {
        for (let i = 0; i < 3; i++) {
          ctx.save()
          ctx.globalAlpha = 0.2 + Math.random() * 0.4
          ctx.fillStyle = '#e0ffe0'
          const y = Math.random() * canvas.height
          ctx.fillRect(0, y, canvas.width, 2 + Math.random() * 4)
          ctx.restore()
        }
      }
      
      // Sombras que se mueven
      if (Math.random() < 0.03) {
        ctx.save()
        ctx.globalAlpha = 0.1 + Math.random() * 0.2
        ctx.fillStyle = '#000000'
        const shadowX = Math.random() * canvas.width
        const shadowY = Math.random() * canvas.height
        const shadowSize = 50 + Math.random() * 100
        ctx.beginPath()
        ctx.arc(shadowX, shadowY, shadowSize, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const drawFogParticle = (ctx: CanvasRenderingContext2D, particle: FogParticle, pulseMultiplier: number) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity * pulseMultiplier * (0.4 + particle.depth * 0.6)
      
      const actualSize = particle.size * (0.5 + particle.depth * 0.5)
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, actualSize
      )
      
      switch (particle.color) {
        case 'rust':
          gradient.addColorStop(0, 'rgba(139, 69, 19, 0.9)')
          gradient.addColorStop(0.3, 'rgba(160, 82, 45, 0.6)')
          gradient.addColorStop(0.6, 'rgba(205, 133, 63, 0.3)')
          gradient.addColorStop(1, 'rgba(139, 69, 19, 0)')
          break
        case 'hospital':
          gradient.addColorStop(0, 'rgba(112, 128, 144, 0.7)')
          gradient.addColorStop(0.4, 'rgba(105, 105, 105, 0.4)')
          gradient.addColorStop(0.7, 'rgba(47, 47, 47, 0.2)')
          gradient.addColorStop(1, 'rgba(28, 28, 28, 0)')
          break
        case 'blood':
          gradient.addColorStop(0, 'rgba(139, 0, 0, 0.5)')
          gradient.addColorStop(0.4, 'rgba(178, 34, 34, 0.3)')
          gradient.addColorStop(0.7, 'rgba(139, 0, 0, 0.1)')
          gradient.addColorStop(1, 'rgba(139, 0, 0, 0)')
          break
        default: // fog
          gradient.addColorStop(0, 'rgba(245, 245, 220, 0.8)')
          gradient.addColorStop(0.4, 'rgba(210, 180, 140, 0.5)')
          gradient.addColorStop(0.7, 'rgba(112, 128, 144, 0.3)')
          gradient.addColorStop(1, 'rgba(28, 28, 28, 0)')
      }
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, actualSize, 0, Math.PI * 2)
      ctx.fill()
      
      if (particle.type === 'shadow') {
        ctx.globalAlpha = particle.opacity * 0.4
        ctx.fillStyle = 'rgba(28, 28, 28, 0.9)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, actualSize * 0.7, 0, Math.PI * 2)
        ctx.fill()
      }
      
      if (particle.color === 'rust' && Math.random() < 0.02) {
        ctx.globalAlpha = particle.opacity * 0.2
        ctx.fillStyle = 'rgba(139, 69, 19, 0.3)'
        ctx.beginPath()
        ctx.arc(
          particle.x + (Math.random() - 0.5) * 20, 
          particle.y + (Math.random() - 0.5) * 20, 
          actualSize * 0.3, 
          0, 
          Math.PI * 2
        )
        ctx.fill()
      }
      
      ctx.restore()
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [currentMode, isFlashlightOn])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10"
        style={{ 
          mixBlendMode: currentMode === 'flashlight' ? 'normal' : 'screen',
          filter: currentMode === 'static' ? 'contrast(1.5) brightness(0.8)' : 
                  currentMode === 'hospital' ? 'contrast(1.3) brightness(0.6) saturate(0.8)' :
                  'contrast(1.2) brightness(0.8) saturate(1.1)'
        }}
      />
      
      {/* Indicador del modo actual */}
      <div className="fixed top-20 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-red-500/30">
        <div className="text-red-400 text-sm font-mono mb-1">Atmosfera:</div>
        <div className="text-white text-xs font-mono capitalize">{currentMode}</div>
        {currentMode === 'flashlight' && (
          <div className="text-yellow-400 text-xs font-mono mt-1">
            Presiona F: {isFlashlightOn ? 'ON' : 'OFF'}
          </div>
        )}
      </div>
      
      {/* Controles de ayuda */}
      <div className="fixed bottom-20 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-red-500/30 text-xs font-mono text-gray-400">
        <div>H - Hospital</div>
        <div>N - Niebla</div>
        <div>F - Linterna ON/OFF</div>
      </div>
    </>
  )
}

export default SilentHillAtmosphericSystem
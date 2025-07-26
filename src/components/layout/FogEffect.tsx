'use client'

import React, { useEffect, useRef } from 'react';

const FogEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    baseOpacity: number;
    color: 'fog' | 'rust' | 'amber';
    pulse: number;
    pulseSpeed: number;
    depth: number;
  }>>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear partículas mejoradas con múltiples capas y colores
    const createParticles = () => {
      particles.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 2200);
      
      for (let i = 0; i < particleCount; i++) {
        const colorRand = Math.random();
        let particleColor: 'fog' | 'rust' | 'amber';
        
        if (colorRand < 0.6) particleColor = 'fog';
        else if (colorRand < 0.8) particleColor = 'rust';
        else particleColor = 'amber';

        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 140 + 80, // Entre 80 y 220px
          opacity: Math.random() * 0.35 + 0.15,
          baseOpacity: Math.random() * 0.35 + 0.15,
          color: particleColor,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.025,
          depth: Math.random() // Para efecto de profundidad
        });
      }
    };

    createParticles();

    // Manejar movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Función de animación mejorada
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Ordenar partículas por profundidad para efecto de capas
      const sortedParticles = [...particles.current].sort((a, b) => a.depth - b.depth);
      
      sortedParticles.forEach(particle => {
        // Calcular distancia al cursor
        const dx = particle.x - mousePos.current.x;
        const dy = particle.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 400; // Área de efecto más amplia
        
        // Efecto de repulsión del cursor más suave y realista
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          // Reducción de opacidad más gradual
          particle.opacity = particle.baseOpacity * (1 - force * 0.75);
          
          // Empujar partículas con física más realista
          const pushStrength = force * 2.5 * (1 + particle.depth);
          const pushX = (dx / distance) * pushStrength;
          const pushY = (dy / distance) * pushStrength;
          particle.x += pushX;
          particle.y += pushY;
        } else {
          particle.opacity = particle.baseOpacity;
        }
        
        // Animación de pulso para mayor dinamismo
        particle.pulse += particle.pulseSpeed;
        const pulseMultiplier = 0.7 + Math.sin(particle.pulse) * 0.3;
        
        // Movimiento natural más orgánico
        particle.x += particle.vx * (0.5 + particle.depth);
        particle.y += particle.vy * (0.5 + particle.depth);
        
        // Cambio de dirección más frecuente para movimiento más vivo
        if (Math.random() < 0.008) {
          particle.vx = (Math.random() - 0.5) * 0.8;
          particle.vy = (Math.random() - 0.5) * 0.8;
        }
        
        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        
        // Dibujar partícula con colores mejorados y efectos de profundidad
        ctx.save();
        ctx.globalAlpha = particle.opacity * pulseMultiplier * (0.6 + particle.depth * 0.4);
        
        const actualSize = particle.size * (0.7 + particle.depth * 0.3);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, actualSize
        );
        
        // Colores específicos para cada tipo de partícula
        switch (particle.color) {
          case 'rust':
            gradient.addColorStop(0, 'rgba(180, 100, 60, 0.6)');
            gradient.addColorStop(0.4, 'rgba(140, 80, 50, 0.3)');
            gradient.addColorStop(0.7, 'rgba(100, 60, 40, 0.1)');
            gradient.addColorStop(1, 'rgba(60, 30, 20, 0)');
            break;
          case 'amber':
            gradient.addColorStop(0, 'rgba(251, 191, 36, 0.4)');
            gradient.addColorStop(0.4, 'rgba(245, 158, 11, 0.2)');
            gradient.addColorStop(0.7, 'rgba(217, 119, 6, 0.1)');
            gradient.addColorStop(1, 'rgba(180, 83, 9, 0)');
            break;
          default: // fog
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
            gradient.addColorStop(0.5, 'rgba(220, 220, 220, 0.25)');
            gradient.addColorStop(0.8, 'rgba(180, 180, 180, 0.1)');
            gradient.addColorStop(1, 'rgba(120, 120, 120, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, actualSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default FogEffect;
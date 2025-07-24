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

    // Crear partículas de niebla (configuración ajustada)
    const createParticles = () => {
      particles.current = [];
      // Menos partículas que antes (dividiendo por 3000)
      const particleCount = Math.floor((canvas.width * canvas.height) / 3000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Movimiento más pronunciado
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          // Tamaño un poco más pequeño
          size: Math.random() * 80 + 60, // Entre 60 y 140px
          // Opacidad un poco reducida
          opacity: Math.random() * 0.25 + 0.1, // Entre 0.1 y 0.35
          baseOpacity: Math.random() * 0.25 + 0.1,
        });
      }
    };

    createParticles();

    // Manejar movimiento del mouse
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        // Calcular distancia al cursor
        const dx = particle.x - mousePos.current.x;
        const dy = particle.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300; // Área de efecto más grande
        
        // Efecto de repulsión del cursor más pronunciado
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          // Mayor reducción de opacidad cuando el mouse está cerca
          particle.opacity = particle.baseOpacity * (1 - force * 0.9);
          
          // Empujar partículas lejos del cursor con más fuerza
          const pushX = (dx / distance) * force * 3;
          const pushY = (dy / distance) * force * 3;
          particle.x += pushX;
          particle.y += pushY;
        } else {
          particle.opacity = particle.baseOpacity;
        }
        
        // Movimiento natural más dinámico
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Cambio de dirección ocasional para movimiento más orgánico
        if (Math.random() < 0.005) {
          particle.vx = (Math.random() - 0.5) * 0.4;
          particle.vy = (Math.random() - 0.5) * 0.4;
        }
        
        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        
        // Dibujar partícula con gradiente ajustado
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)'); // Más brillante en el centro
        gradient.addColorStop(0.7, 'rgba(200, 200, 200, 0.2)');
        gradient.addColorStop(1, 'rgba(100, 100, 100, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
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
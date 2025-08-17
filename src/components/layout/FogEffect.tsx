'use client'

import React, { useEffect, useRef } from 'react';

const SilentHillFogEffect = () => {
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
    color: 'fog' | 'rust' | 'hospital' | 'blood';
    pulse: number;
    pulseSpeed: number;
    depth: number;
    type: 'main' | 'dust' | 'shadow';
  }>>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear partículas con estética Silent Hill
    const createSilentHillParticles = () => {
      particles.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 1800);
      
      for (let i = 0; i < particleCount; i++) {
        const typeRand = Math.random();
        const colorRand = Math.random();
        
        let particleType: 'main' | 'dust' | 'shadow';
        let particleColor: 'fog' | 'rust' | 'hospital' | 'blood';
        
        // Tipo de partícula más pesado
        if (typeRand < 0.5) particleType = 'main';
        else if (typeRand < 0.75) particleType = 'dust';
        else particleType = 'shadow';
        
        // Color basado en Silent Hill - más rust y hospital
        if (colorRand < 0.4) particleColor = 'fog';
        else if (colorRand < 0.65) particleColor = 'rust';
        else if (colorRand < 0.85) particleColor = 'hospital';
        else particleColor = 'blood';

        const baseSize = particleType === 'main' ? 160 : particleType === 'dust' ? 80 : 220;

        particles.current.push({
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
        });
      }
    };

    createSilentHillParticles();

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Ordenar por profundidad y tipo para efecto de capas
      const sortedParticles = [...particles.current].sort((a, b) => {
        if (a.type === b.type) return a.depth - b.depth;
        const typeOrder = { shadow: 0, main: 1, dust: 2 };
        return typeOrder[a.type] - typeOrder[b.type];
      });
      
      sortedParticles.forEach(particle => {
        // Interacción con cursor más sutil y pesada
        const dx = particle.x - mousePos.current.x;
        const dy = particle.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = particle.type === 'shadow' ? 250 : 300;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.opacity = particle.baseOpacity * (1 - force * 0.5);
          
          const pushStrength = force * (particle.type === 'shadow' ? 1.2 : 1.8) * (1 + particle.depth);
          const pushX = (dx / distance) * pushStrength;
          const pushY = (dy / distance) * pushStrength;
          particle.x += pushX;
          particle.y += pushY;
        } else {
          particle.opacity = particle.baseOpacity;
        }
        
        // Movimiento orgánico más lento y pesado
        particle.pulse += particle.pulseSpeed;
        const pulseMultiplier = 0.5 + Math.sin(particle.pulse) * 0.5;
        
        // Movimiento más lento y atmosférico
        const speedMultiplier = particle.type === 'shadow' ? 0.2 : 0.3;
        particle.x += particle.vx * speedMultiplier * (0.3 + particle.depth);
        particle.y += particle.vy * speedMultiplier * (0.3 + particle.depth);
        
        // Cambios de dirección más sutiles y lentos
        if (Math.random() < 0.003) {
          particle.vx = (Math.random() - 0.5) * (particle.type === 'shadow' ? 0.2 : 0.4);
          particle.vy = (Math.random() - 0.5) * (particle.type === 'shadow' ? 0.2 : 0.4);
        }
        
        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        
        // Dibujar con paleta Silent Hill
        ctx.save();
        ctx.globalAlpha = particle.opacity * pulseMultiplier * (0.4 + particle.depth * 0.6);
        
        const actualSize = particle.size * (0.5 + particle.depth * 0.5);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, actualSize
        );
        
        // Paleta de colores Silent Hill auténtica
        switch (particle.color) {
          case 'rust':
            gradient.addColorStop(0, 'rgba(139, 69, 19, 0.9)');   // rust deep
            gradient.addColorStop(0.3, 'rgba(160, 82, 45, 0.6)');  // rust medium
            gradient.addColorStop(0.6, 'rgba(205, 133, 63, 0.3)'); // rust light
            gradient.addColorStop(1, 'rgba(139, 69, 19, 0)');
            break;
          case 'hospital':
            gradient.addColorStop(0, 'rgba(112, 128, 144, 0.7)');  // hospital gray
            gradient.addColorStop(0.4, 'rgba(105, 105, 105, 0.4)');
            gradient.addColorStop(0.7, 'rgba(47, 47, 47, 0.2)');
            gradient.addColorStop(1, 'rgba(28, 28, 28, 0)');
            break;
          case 'blood':
            gradient.addColorStop(0, 'rgba(139, 0, 0, 0.5)');      // blood dark
            gradient.addColorStop(0.4, 'rgba(178, 34, 34, 0.3)');  // blood medium
            gradient.addColorStop(0.7, 'rgba(139, 0, 0, 0.1)');
            gradient.addColorStop(1, 'rgba(139, 0, 0, 0)');
            break;
          default: // fog
            gradient.addColorStop(0, 'rgba(245, 245, 220, 0.8)');  // flesh sick
            gradient.addColorStop(0.4, 'rgba(210, 180, 140, 0.5)'); // flesh dirty
            gradient.addColorStop(0.7, 'rgba(112, 128, 144, 0.3)'); // hospital
            gradient.addColorStop(1, 'rgba(28, 28, 28, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, actualSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Efecto adicional para partículas de sombra
        if (particle.type === 'shadow') {
          ctx.globalAlpha = particle.opacity * 0.4;
          ctx.fillStyle = 'rgba(28, 28, 28, 0.9)';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, actualSize * 0.7, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Efecto de distorsión para rust particles
        if (particle.color === 'rust' && Math.random() < 0.02) {
          ctx.globalAlpha = particle.opacity * 0.2;
          ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
          ctx.beginPath();
          ctx.arc(
            particle.x + (Math.random() - 0.5) * 20, 
            particle.y + (Math.random() - 0.5) * 20, 
            actualSize * 0.3, 
            0, 
            Math.PI * 2
          );
          ctx.fill();
        }
        
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
      style={{ 
        mixBlendMode: 'screen',
        filter: 'contrast(1.2) brightness(0.8) saturate(1.1)'
      }}
    />
  );
};

export default SilentHillFogEffect;
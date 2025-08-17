"use client";

import { skills } from "@/data/skills";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

// Agrupar skills por categoría
const grouped = skills.reduce((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

// Hook personalizado para Intersection Observer
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !isLoaded) {
        setIsLoaded(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [isLoaded, options]);

  return { targetRef, isIntersecting, isLoaded };
};

// Componente LazySection para lazy loading
const LazySection = ({ 
  children, 
  className, 
  fallback 
}: { 
  children: React.ReactNode; 
  className?: string; 
  fallback?: React.ReactNode;
}) => {
  const { targetRef, isLoaded } = useIntersectionObserver();

  return (
    <div ref={targetRef} className={className}>
      {isLoaded ? children : (
        fallback || (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-rust-400/30 border-t-rust-400 rounded-full animate-spin"></div>
              <span className="text-hospital-400 text-sm hospital-text">Cargando habilidades...</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

// Componente de barra de habilidad Silent Hill style
const SkillBar = ({ 
  skill, 
  index, 
  isMobile 
}: { 
  skill: typeof skills[0]; 
  index: number; 
  isMobile: boolean;
}) => {
  const [animated, setAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
      setIsVisible(true);
    }, index * (isMobile ? 50 : 100));
    return () => clearTimeout(timer);
  }, [index, isMobile]);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Patrón Silent Hill: rust, hospital, blood
  const getColorScheme = (index: number) => {
    const pattern = index % 3;
    switch (pattern) {
      case 0: // rust
        return {
          bg: 'gradient-dark-rust',
          border: 'silent-border-rust hover:border-rust-500/60',
          shadow: 'hover-shadow-rust-glow',
          text: 'text-rust-400',
          glow: 'drop-shadow-rust group-hover:drop-shadow-[0_0_15px_#8B4513]',
          particle: 'bg-rust-400',
          ring: 'border-rust-400/50',
          progress: 'bg-gradient-to-r from-rust-600 to-rust-400',
          gradient: 'gradient-dark-rust',
          shadowGlow: 'shadow-[0_0_10px_#8B4513]'
        };
      case 1: // hospital
        return {
          bg: 'gradient-hospital',
          border: 'silent-border-hospital hover:border-hospital-500/60',
          shadow: 'hover-shadow-hospital-glow',
          text: 'text-hospital-400',
          glow: 'drop-shadow-hospital group-hover:drop-shadow-[0_0_15px_#708090]',
          particle: 'bg-hospital-400',
          ring: 'border-hospital-400/50',
          progress: 'bg-gradient-to-r from-hospital-600 to-hospital-400',
          gradient: 'gradient-hospital',
          shadowGlow: 'shadow-[0_0_10px_#708090]'
        };
      default: // blood
        return {
          bg: 'bg-gradient-to-br from-blood-900/20 to-blood-800/10',
          border: 'silent-border-blood hover:border-blood-500/60',
          shadow: 'hover:shadow-blood-500/20',
          text: 'text-blood-400',
          glow: 'drop-shadow-blood group-hover:drop-shadow-[0_0_15px_#8B0000]',
          particle: 'bg-blood-400',
          ring: 'border-blood-400/50',
          progress: 'bg-gradient-to-r from-blood-600 to-blood-400',
          gradient: 'bg-gradient-to-br from-blood-500/5 via-transparent to-blood-500/5',
          shadowGlow: 'shadow-[0_0_10px_#8B0000]'
        };
    }
  };

  const colorClasses = getColorScheme(index);

  // Renderizar icono con fallbacks
  const renderIcon = () => {
    const iconSize = isMobile ? 32 : 40;
    const iconClasses = `text-2xl sm:text-3xl mb-1 transition-all duration-300 ${colorClasses.text} ${colorClasses.glow}`;

    if (skill.iconifyIcon && !imageError) {
      return (
        <Icon
          icon={skill.iconifyIcon}
          className={iconClasses}
          onError={handleImageError}
        />
      );
    }

    if (skill.deviconIcon && !imageError) {
      return (
        <div className="relative">
          <Image
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.deviconIcon}/${skill.deviconIcon}-original.svg`}
            alt={skill.name}
            width={iconSize}
            height={iconSize}
            className="mb-1 transition-all duration-300 group-hover:scale-110"
            onError={handleImageError}
            priority={index < 6}
          />
          {!isMobile && (
            <div className={`absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-40 ${colorClasses.shadowGlow}`}></div>
          )}
        </div>
      );
    }

    if (skill.image && !imageError) {
      return (
        <div className="relative">
          <Image
            src={skill.image}
            alt={skill.name}
            width={iconSize}
            height={iconSize}
            className="mb-1 transition-all duration-300 group-hover:scale-110"
            onError={handleImageError}
            priority={index < 6}
          />
          {!isMobile && (
            <div className={`absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-40 ${colorClasses.shadowGlow}`}></div>
          )}
        </div>
      );
    }

    // Fallback icon
    return (
      <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] mb-1 hospital-card rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <span className="text-sm sm:text-base font-bold text-hospital-400">
          {skill.name.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`group flex flex-col items-center p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 border overflow-hidden relative ${colorClasses.bg} ${colorClasses.border} ${colorClasses.shadow} ${
        isMobile ? '' : 'hover:scale-105'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        transitionDelay: `${index * 30}ms`
      }}
    >
      {/* Efecto de brillo de fondo */}
      {!isMobile && (
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colorClasses.gradient}`}></div>
      )}

      <div className="relative z-10 flex flex-col items-center space-y-1 sm:space-y-2 w-full">
        {/* Icono con efectos Silent Hill */}
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          {renderIcon()}
          
          {/* Anillo de resplandor */}
          {!isMobile && (
            <div className={`absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse ${colorClasses.ring}`}></div>
          )}
        </div>

        {/* Nombre de la habilidad */}
        <div className="text-center space-y-1 w-full">
          <span 
            className={`text-xs font-semibold tracking-wide transition-colors duration-300 block text-center ${
              index % 3 === 0 
                ? 'text-flesh-200 group-hover:text-rust-300' 
                : index % 3 === 1
                ? 'text-flesh-200 group-hover:text-hospital-300'
                : 'text-flesh-200 group-hover:text-blood-300'
            }`}
            style={{
              wordBreak: 'break-word',
              hyphens: 'auto',
              lineHeight: '1.1'
            }}
          >
            {skill.name}
          </span>
          
          {/* Barra de nivel Silent Hill */}
          {skill.level && (
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-hospital-500 hospital-text">Nivel</span>
                <span className={`text-xs font-bold ${colorClasses.text}`}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ease-out ${colorClasses.progress}`}
                  style={{ 
                    width: animated ? `${skill.level || 80}%` : '0%',
                    transitionDelay: `${index * 50}ms`
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Indicador de especialización */}
        {skill.featured && (
          <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full border border-black ${
            index % 3 === 0 ? 'bg-rust-400' : index % 3 === 1 ? 'bg-hospital-400' : 'bg-blood-400'
          } animate-pulse`}></div>
        )}
      </div>
    </div>
  );
};

// Componente principal Skills Silent Hill
function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    const handleResize = () => {
      checkMobile();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="skills"
      className="relative z-20 px-4 sm:px-6 flex items-center justify-center py-8 sm:py-12"
    >
      <div className="w-full max-w-6xl hospital-card backdrop-blur-lg rounded-xl sm:rounded-2xl silent-border-rust shadow-xl hover-shadow-rust-glow p-4 sm:p-8 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo Silent Hill */}
        <div className="absolute inset-0 gradient-dark-rust pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rust-400/50 to-transparent"></div>
        
        {/* Título Silent Hill style */}
        <div className="text-center mb-6 sm:mb-10 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-rust-400 via-blood-400 to-rust-400 bg-clip-text text-transparent tracking-wider flicker-silent-hill">
              Mis Habilidades
            </h2>
            {/* Sombra del título */}
            {!isMobile && (
              <div className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl font-bold text-flesh-500/10 tracking-wider transform translate-x-1 translate-y-1">
                Mis Habilidades
              </div>
            )}
          </div>
          
          {/* Línea decorativa Silent Hill */}
          <div className="flex justify-center mt-3 sm:mt-4">
            <div className="h-0.5 w-16 sm:w-24 bg-gradient-to-r from-rust-500 via-blood-500 to-rust-500 rounded-full shadow-lg hover-shadow-rust-glow"></div>
          </div>
          
          {/* Subtítulo */}
          <p className="text-hospital-400 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mobile-text-contrast hospital-text">
            Tecnologías y herramientas que domino en mi journey como desarrollador
          </p>
        </div>

        {/* Categorías de habilidades */}
        <div className="space-y-4 sm:space-y-8 relative z-10">
          {Object.entries(grouped).map(([category, items], categoryIndex) => (
            <LazySection key={category}>
              <div className="space-y-3 sm:space-y-4">
                
                {/* Título de categoría Silent Hill */}
                <div className="text-center">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 pb-1 sm:pb-2 tracking-wide uppercase transition-all duration-300 relative inline-block ${
                    categoryIndex % 3 === 0 ? 'text-rust-500' : categoryIndex % 3 === 1 ? 'text-hospital-500' : 'text-blood-500'
                  }`}>
                    {category}
                    
                    {/* Línea inferior decorativa */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      categoryIndex % 3 === 0 ? 'bg-rust-500/50' : categoryIndex % 3 === 1 ? 'bg-hospital-500/50' : 'bg-blood-500/50'
                    }`}></div>
                    
                    {/* Puntos decorativos */}
                    {!isMobile && (
                      <>
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            categoryIndex % 3 === 0 ? 'bg-rust-400' : categoryIndex % 3 === 1 ? 'bg-hospital-400' : 'bg-blood-400'
                          } animate-pulse`}></div>
                        </div>
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            categoryIndex % 3 === 0 ? 'bg-rust-400' : categoryIndex % 3 === 1 ? 'bg-hospital-400' : 'bg-blood-400'
                          } animate-pulse`} style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </>
                    )}
                  </h3>
                </div>
                
                {/* Grid de habilidades */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
                  {items.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={index + categoryIndex * 10}
                      isMobile={isMobile}
                    />
                  ))}
                </div>
              </div>
            </LazySection>
          ))}
        </div>

        {/* Estadísticas Silent Hill */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t silent-border-rust relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-rust-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                {Object.values(grouped).flat().length}+
              </div>
              <div className="text-hospital-400 text-xs sm:text-sm font-medium hospital-text">Tecnologías</div>
            </div>
            
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blood-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-hospital-400 text-xs sm:text-sm font-medium hospital-text">Años Experiencia</div>
            </div>
            
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-rust-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-hospital-400 text-xs sm:text-sm font-medium hospital-text">Proyectos</div>
            </div>
            
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blood-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                ∞
              </div>
              <div className="text-hospital-400 text-xs sm:text-sm font-medium hospital-text">Pasión</div>
            </div>
          </div>
        </div>

        {/* Efectos decorativos inferiores */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-400/50 to-transparent"></div>
      </div>
    </section>
  );
}

export default Skills;
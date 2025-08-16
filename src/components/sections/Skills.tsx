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
              <div className="w-4 h-4 border-2 border-amber-400/30 border-t-amber-400 rounded-full animate-spin"></div>
              <span className="text-gray-400 text-sm">Cargando habilidades...</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

// Componente de barra de habilidad optimizado y compacto
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

  const isEven = index % 2 === 0;
  const colorClasses = isEven 
    ? {
        bg: 'bg-gradient-to-br from-black/80 via-amber-900/20 to-black/80',
        border: 'border-amber-500/30 hover:border-amber-500/60',
        shadow: 'hover:shadow-amber-500/20',
        text: 'text-amber-400',
        glow: 'drop-shadow-[0_0_8px_#f59e0b] group-hover:drop-shadow-[0_0_15px_#f59e0b]',
        particle: 'bg-amber-400',
        ring: 'border-amber-400/50',
        progress: 'bg-gradient-to-r from-amber-600 to-amber-400',
        gradient: 'bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5',
        shadowGlow: 'shadow-[0_0_10px_#f59e0b]'
      }
    : {
        bg: 'bg-gradient-to-br from-black/80 via-red-900/20 to-black/80',
        border: 'border-red-500/30 hover:border-red-500/60',
        shadow: 'hover:shadow-red-500/20',
        text: 'text-red-400',
        glow: 'drop-shadow-[0_0_8px_#dc2626] group-hover:drop-shadow-[0_0_15px_#dc2626]',
        particle: 'bg-red-400',
        ring: 'border-red-400/50',
        progress: 'bg-gradient-to-r from-red-600 to-red-400',
        gradient: 'bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5',
        shadowGlow: 'shadow-[0_0_10px_#dc2626]'
      };

  // Renderizar icono con fallbacks (más compacto)
  const renderIcon = () => {
    const iconSize = isMobile ? 32 : 40; // Reducido de 50/70 a 32/40
    const iconClasses = `text-2xl sm:text-3xl mb-1 transition-all duration-300 ${colorClasses.text} ${colorClasses.glow}`; // Reducido de text-4xl/6xl

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

    // Fallback icon (más pequeño)
    return (
      <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] mb-1 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <span className="text-sm sm:text-base font-bold text-gray-400">
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
      {/* Efecto de brillo de fondo - solo en desktop */}
      {!isMobile && (
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colorClasses.gradient}`}></div>
      )}

      <div className="relative z-10 flex flex-col items-center space-y-1 sm:space-y-2 w-full">
        {/* Icono con efectos */}
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          {renderIcon()}
          
          {/* Anillo de resplandor - solo en desktop */}
          {!isMobile && (
            <div className={`absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse ${colorClasses.ring}`}></div>
          )}
        </div>

        {/* Nombre de la habilidad (más compacto) */}
        <div className="text-center space-y-1 w-full">
          <span 
            className={`text-xs font-semibold tracking-wide transition-colors duration-300 block text-center ${
              isEven 
                ? 'text-gray-200 group-hover:text-amber-300' 
                : 'text-gray-200 group-hover:text-red-300'
            }`}
            style={{
              wordBreak: 'break-word',
              hyphens: 'auto',
              lineHeight: '1.1'
            }}
          >
            {skill.name}
          </span>
          
          {/* Barra de nivel (más pequeña) */}
          {skill.level && (
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">Nivel</span>
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

        {/* Indicador de especialización (más pequeño) */}
        {skill.featured && (
          <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full border border-black ${
            isEven ? 'bg-amber-400' : 'bg-red-400'
          } animate-pulse`}></div>
        )}
      </div>
    </div>
  );
};

// Componente principal Skills (más compacto)
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
      <div className="w-full max-w-6xl bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-amber-500/30 shadow-xl shadow-amber-500/10 p-4 sm:p-8 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        
        {/* Título (más compacto) */}
        <div className="text-center mb-6 sm:mb-10 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent tracking-wider flicker-terrifying">
              Mis Habilidades
            </h2>
            {/* Sombra del título - solo en desktop */}
            {!isMobile && (
              <div className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl font-bold text-white/5 tracking-wider transform translate-x-1 translate-y-1">
                Mis Habilidades
              </div>
            )}
          </div>
          
          {/* Línea decorativa (más pequeña) */}
          <div className="flex justify-center mt-3 sm:mt-4">
            <div className="h-0.5 w-16 sm:w-24 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
          </div>
          
          {/* Subtítulo */}
          <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mobile-text-contrast">
            Tecnologías y herramientas que domino en mi journey como desarrollador
          </p>
        </div>

        {/* Categorías de habilidades (espaciado reducido) */}
        <div className="space-y-4 sm:space-y-8 relative z-10">
          {Object.entries(grouped).map(([category, items], categoryIndex) => (
            <LazySection key={category}>
              <div className="space-y-3 sm:space-y-4">
                
                {/* Título de categoría (más compacto) */}
                <div className="text-center">
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 pb-1 sm:pb-2 tracking-wide uppercase transition-all duration-300 relative inline-block ${
                    categoryIndex % 2 === 0 ? 'text-amber-500' : 'text-red-500'
                  }`}>
                    {category}
                    
                    {/* Línea inferior decorativa */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      categoryIndex % 2 === 0 ? 'bg-amber-500/50' : 'bg-red-500/50'
                    }`}></div>
                    
                    {/* Puntos decorativos - solo en desktop */}
                    {!isMobile && (
                      <>
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            categoryIndex % 2 === 0 ? 'bg-amber-400' : 'bg-red-400'
                          } animate-pulse`}></div>
                        </div>
                        <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            categoryIndex % 2 === 0 ? 'bg-amber-400' : 'bg-red-400'
                          } animate-pulse`} style={{animationDelay: '0.5s'}}></div>
                        </div>
                      </>
                    )}
                  </h3>
                </div>
                
                {/* Grid de habilidades (más denso) */}
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

        {/* Estadísticas adicionales (más compactas) */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-amber-500/20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                {Object.values(grouped).flat().length}+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">Tecnologías</div>
            </div>
            
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">Años Experiencia</div>
            </div>
            
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">Proyectos</div>
            </div>
            
            <div className="text-center group">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400 mb-1 group-hover:scale-110 transition-transform duration-300">
                ∞
              </div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">Pasión</div>
            </div>
          </div>
        </div>

        {/* Efectos decorativos inferiores */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
      </div>
    </section>
  );
}

export default Skills;
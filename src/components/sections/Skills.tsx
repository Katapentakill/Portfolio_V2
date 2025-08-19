'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Icon } from '@iconify/react';
import { skills as skillsData, type Skill } from '@/data/skills';

interface LazyComponentProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
  isMobile: boolean;
}

type SkillsSectionProps = { 
  skills?: Skill[] 
};

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

// Componente LazySection
const LazySection: React.FC<LazyComponentProps> = ({ children, className = '', fallback }) => {
  const { targetRef, isLoaded } = useIntersectionObserver();

  return (
    <div ref={targetRef} className={className}>
      {isLoaded ? children : (
        fallback || (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 border-2 border-rust-400/30 border-t-rust-400 rounded-full animate-spin"></div>
              <span className="text-hospital-400 text-sm hospital-text font-jetbrains">SCANNING ABILITIES...</span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

// Componente de barra de habilidad
const SkillBar: React.FC<SkillBarProps> = ({ skill, index, isMobile }) => {
  const [animated, setAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
      setIsVisible(true);
    }, index * (isMobile ? 50 : 100));

    const glitchTimer = setInterval(() => {
      if (Math.random() < 0.03) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 120);
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(glitchTimer);
    };
  }, [index, isMobile]);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const getCategoryColorScheme = (category: string) => {
    switch (category) {
      case 'Languages':
        return {
          bg: 'gradient-dark-rust',
          border: 'silent-border-rust hover:border-rust-500/60',
          shadow: 'hover-shadow-rust-glow',
          text: 'text-rust-400',
          glow: 'drop-shadow-rust glow-on-hover',
          ring: 'border-rust-400/50',
          progress: 'bg-gradient-to-r from-rust-600 to-rust-400',
          status: 'CRITICAL'
        };
      case 'AI/ML':
        return {
          bg: 'bg-gradient-to-br from-blood-900/20 to-blood-800/10',
          border: 'silent-border-blood hover:border-blood-500/60',
          shadow: 'hover-shadow-blood-glow',
          text: 'text-blood-400',
          glow: 'drop-shadow-blood glow-on-hover',
          ring: 'border-blood-400/50',
          progress: 'bg-gradient-to-r from-blood-600 to-blood-400',
          status: 'EXPERIMENTAL'
        };
      case 'Frameworks':
        return {
          bg: 'bg-gradient-to-br from-flesh-900/20 to-flesh-800/10',
          border: 'silent-border-flesh hover:border-flesh-500/60',
          shadow: 'hover-shadow-flesh-glow',
          text: 'text-flesh-400',
          glow: 'drop-shadow-flesh glow-on-hover',
          ring: 'border-flesh-400/50',
          progress: 'bg-gradient-to-r from-flesh-600 to-flesh-400',
          status: 'STABLE'
        };
      case 'Data':
        return {
          bg: 'gradient-dark-rust',
          border: 'silent-border-rust hover:border-rust-500/60',
          shadow: 'hover-shadow-rust-glow',
          text: 'text-rust-400',
          glow: 'drop-shadow-rust glow-on-hover',
          ring: 'border-rust-400/50',
          progress: 'bg-gradient-to-r from-rust-600 to-rust-400',
          status: 'ANALYZED'
        };
      case 'Cloud/DevOps':
        return {
          bg: 'bg-gradient-to-br from-flesh-900/20 to-flesh-800/10',
          border: 'silent-border-flesh hover:border-flesh-500/60',
          shadow: 'hover-shadow-flesh-glow',
          text: 'text-flesh-400',
          glow: 'drop-shadow-flesh glow-on-hover',
          ring: 'border-flesh-400/50',
          progress: 'bg-gradient-to-r from-flesh-600 to-flesh-400',
          status: 'DEPLOYED'
        };
      case 'Tools':
        return {
          bg: 'bg-gradient-to-br from-blood-900/20 to-blood-800/10',
          border: 'silent-border-blood hover:border-blood-500/60',
          shadow: 'hover-shadow-blood-glow',
          text: 'text-blood-400',
          glow: 'drop-shadow-blood glow-on-hover',
          ring: 'border-blood-400/50',
          progress: 'bg-gradient-to-r from-blood-600 to-blood-400',
          status: 'OPERATIONAL'
        };
      case 'Databases':
        return {
          bg: 'gradient-dark-rust',
          border: 'silent-border-rust hover:border-rust-500/60',
          shadow: 'hover-shadow-rust-glow',
          text: 'text-rust-400',
          glow: 'drop-shadow-rust glow-on-hover',
          ring: 'border-rust-400/50',
          progress: 'bg-gradient-to-r from-rust-600 to-rust-400',
          status: 'INDEXED'
        };
      default:
        return {
          bg: 'gradient-hospital',
          border: 'silent-border-hospital hover:border-hospital-500/60',
          shadow: 'hover-shadow-hospital-glow',
          text: 'text-hospital-400',
          glow: 'drop-shadow-hospital glow-on-hover',
          ring: 'border-hospital-400/50',
          progress: 'bg-gradient-to-r from-hospital-600 to-hospital-400',
          status: 'UNKNOWN'
        };
    }
  };

  const colorClasses = getCategoryColorScheme(skill.category);

  const renderIcon = () => {
    const iconClasses = `text-2xl sm:text-3xl mb-1 transition-all duration-300 ${colorClasses.text} ${colorClasses.glow} ${isGlitching ? 'animate-pulse' : ''}`;

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
        <Icon
          icon={skill.deviconIcon}
          className={iconClasses}
          onError={handleImageError}
        />
      );
    }

    if (skill.image && !imageError) {
      return (
        <img
          src={skill.image}
          alt={skill.name}
          className={`w-8 h-8 sm:w-10 sm:h-10 mb-1 transition-all duration-300 ${colorClasses.glow} ${isGlitching ? 'animate-pulse' : ''}`}
          onError={handleImageError}
        />
      );
    }

    return (
      <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] mb-1 hospital-card rounded-lg flex items-center justify-center hover-scale-110 transition-transform duration-300">
        <span className={`text-sm sm:text-base font-bold ${colorClasses.text}`}>
          {skill.name.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`group flex flex-col items-center p-3 sm:p-4 rounded-xl shadow-lg transition-all duration-500 border overflow-hidden relative ${colorClasses.bg} ${colorClasses.border} ${colorClasses.shadow} ${
        isMobile ? '' : 'hover:scale-105'
      } fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 30}ms`
      }}
    >
      {isGlitching && (
        <div className="absolute inset-0 bg-blood-500/20 blink-critical z-10 pointer-events-none"></div>
      )}

      {!isMobile && (
        <div className="absolute inset-0 interference-lines opacity-20 pointer-events-none"></div>
      )}

      <div className="absolute inset-0 noise-bg opacity-50 pointer-events-none"></div>

      <div className="relative z-20 flex flex-col items-center space-y-2 w-full">
        {skill.featured && (
          <div className={`absolute -top-2 -right-2 px-2 py-1 ${colorClasses.text} hospital-card rounded-full text-xs font-bold silent-border-hospital font-jetbrains blink-critical`}>
            {colorClasses.status}
          </div>
        )}

        <div className="relative hover-scale-110 transition-transform duration-300">
          {renderIcon()}
          
          {skill.featured && !isMobile && (
            <div className={`absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse ${colorClasses.ring}`}></div>
          )}
        </div>

        <div className="text-center space-y-2 w-full">
          <span 
            className={`text-xs font-bold tracking-wide transition-colors duration-300 block text-center font-jetbrains ${colorClasses.text} group-hover:drop-shadow-rust`}
            style={{
              wordBreak: 'break-word',
              hyphens: 'auto',
              lineHeight: '1.2'
            }}
          >
            {skill.name}
          </span>
          
          {skill.level && (
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-hospital-400 hospital-text font-jetbrains">LVL</span>
                <span className={`text-xs font-bold font-jetbrains ${colorClasses.text}`}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full hospital-card rounded-full h-2 overflow-hidden silent-border-hospital">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${colorClasses.progress} glow-on-hover`}
                  style={{ 
                    width: animated ? `${skill.level || 80}%` : '0%',
                    transitionDelay: `${index * 50}ms`,
                    boxShadow: animated ? `0 0 8px ${skill.level && skill.level > 85 ? 'rgba(220, 20, 60, 0.5)' : 'rgba(139, 69, 19, 0.3)'}` : 'none'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills = skillsData }) => {
  const grouped = useMemo(() => {
    return skills.reduce<Record<string, Skill[]>>((acc, skill) => {
      (acc[skill.category] ??= []).push(skill);
      return acc;
    }, {});
  }, [skills]);

  const [isMobile, setIsMobile] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [glitchText, setGlitchText] = useState('SKILL MATRIX');
  const [scanProgress, setScanProgress] = useState(0);
  const [detectedAbilities, setDetectedAbilities] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 3;
      });
    }, 200);

    const abilitiesInterval = setInterval(() => {
      setDetectedAbilities(prev => {
        if (prev >= skills.length) return skills.length;
        return prev + 1;
      });
    }, 100);

    const glitchEffect = () => {
      const variants = ['SKILL MATRIX', 'SK1LL M4TR1X', 'ＳＫＩＬＬ　ＭＡＴＲＩＸ', '？？？？？？？？？？', 'ABILITY LOG', 'COMPETENCIA DB'];
      setGlitchText(variants[Math.floor(Math.random() * variants.length)]);
      setTimeout(() => setGlitchText('SKILL MATRIX'), 200);
    };

    const glitchInterval = setInterval(glitchEffect, 12000);
    
    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timeInterval);
      clearInterval(progressInterval);
      clearInterval(abilitiesInterval);
      clearInterval(glitchInterval);
    };
  }, [skills.length]);

  return (
    <section id="skills" className="relative min-h-screen px-6 py-20 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              i % 5 === 0 ? 'bg-rust-400/20' : 
              i % 5 === 1 ? 'bg-hospital-400/15' : 
              i % 5 === 2 ? 'bg-blood-400/25' : 
              i % 5 === 3 ? 'bg-flesh-400/10' : 
              'bg-gray-500/15'
            }`}
            style={{
              left: `${3 + i * 4.8}%`,
              top: `${5 + i * 4.5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl md:text-6xl font-bold font-silent-hill-title tracking-wider flicker-silent-hill">
              <span className="bg-gradient-to-r from-blood-400 via-rust-400 to-blood-400 bg-clip-text text-transparent">
                {glitchText}
              </span>
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-flesh-500/10 tracking-wider transform translate-x-2 translate-y-2 font-silent-hill-title">
              SKILL MATRIX
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="hospital-card border-2 silent-border-rust rounded-2xl p-6 backdrop-blur-lg interference-lines">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="px-4 py-3 gradient-dark-rust silent-border-rust rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-rust-400 font-jetbrains text-xs font-bold">SCAN_TIME</span>
                    <span className="text-rust-400 font-jetbrains text-lg font-bold">{currentTime}</span>
                  </div>
                </div>
                <div className="px-4 py-3 gradient-hospital silent-border-hospital rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-hospital-400 font-jetbrains text-xs font-bold">PROGRESS</span>
                    <span className="text-hospital-400 font-jetbrains text-lg font-bold">{Math.floor(scanProgress)}%</span>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-blood-400 font-jetbrains text-xs font-bold">DETECTED</span>
                    <span className="text-blood-400 font-jetbrains text-lg font-bold">{detectedAbilities}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full hospital-card rounded-full h-2 overflow-hidden silent-border-hospital">
                  <div 
                    className="h-full bg-gradient-to-r from-rust-600 via-blood-600 to-rust-600 transition-all duration-300"
                    style={{ 
                      width: `${scanProgress}%`,
                      boxShadow: '0 0 10px rgba(220, 20, 60, 0.5)'
                    }}
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="text-rust-400 font-palatino text-lg mb-2 flicker-silent-hill-slow">
                  "The scanner detected multiple competency signatures..."
                </p>
                <p className="text-flesh-300 hospital-text mb-2 font-palatino">
                  Each skill level represents hours of training in the fog.
                </p>
                <p className="text-blood-400 font-semibold font-palatino">
                  These are the tools that will help us survive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {Object.entries(grouped).map(([category, items]: [string, Skill[]], categoryIndex: number) => (
            <LazySection key={category}>
              <div className="space-y-8">
                
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${
                      category === 'Languages' ? 'bg-rust-400 blink-critical' :
                      category === 'AI/ML' ? 'bg-blood-400 blink-critical' :
                      category === 'Frameworks' ? 'bg-flesh-400' :
                      category === 'Data' ? 'bg-rust-400' :
                      category === 'Cloud/DevOps' ? 'bg-flesh-400' :
                      category === 'Tools' ? 'bg-blood-400' :
                      category === 'Databases' ? 'bg-rust-400' : 'bg-hospital-400'
                    }`}></div>
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-wide font-palatino ${
                      category === 'Languages' ? 'text-rust-400' :
                      category === 'AI/ML' ? 'text-blood-400' :
                      category === 'Frameworks' ? 'text-flesh-400' :
                      category === 'Data' ? 'text-rust-400' :
                      category === 'Cloud/DevOps' ? 'text-flesh-400' :
                      category === 'Tools' ? 'text-blood-400' :
                      category === 'Databases' ? 'text-rust-400' : 'text-hospital-400'
                    }`}>
                      {category.toUpperCase()}
                    </h3>
                    <div className={`px-3 py-1 ${
                      category === 'Languages' ? 'bg-rust-400/20 border-rust-400/30 text-rust-300' :
                      category === 'AI/ML' ? 'bg-blood-400/20 border-blood-400/30 text-blood-300' :
                      category === 'Frameworks' ? 'bg-flesh-400/20 border-flesh-400/30 text-flesh-300' :
                      category === 'Data' ? 'bg-rust-400/20 border-rust-400/30 text-rust-300' :
                      category === 'Cloud/DevOps' ? 'bg-flesh-400/20 border-flesh-400/30 text-flesh-300' :
                      category === 'Tools' ? 'bg-blood-400/20 border-blood-400/30 text-blood-300' :
                      category === 'Databases' ? 'bg-rust-400/20 border-rust-400/30 text-rust-300' : 'bg-hospital-400/20 border-hospital-400/30 text-hospital-300'
                    } border rounded-full text-sm font-bold font-jetbrains`}>
                      {items.length} DETECTED
                    </div>
                  </div>
                  <div className={`h-0.5 w-32 mx-auto rounded-full mb-4 ${
                    category === 'Languages' ? 'bg-rust-400/50' :
                    category === 'AI/ML' ? 'bg-blood-400/50' :
                    category === 'Frameworks' ? 'bg-flesh-400/50' :
                    category === 'Data' ? 'bg-rust-400/50' :
                    category === 'Cloud/DevOps' ? 'bg-flesh-400/50' :
                    category === 'Tools' ? 'bg-blood-400/50' :
                    category === 'Databases' ? 'bg-rust-400/50' : 'bg-hospital-400/50'
                  }`}></div>
                  <p className="text-hospital-400 text-sm max-w-2xl mx-auto hospital-text font-palatino">
                    {category === 'Languages' && 'Core programming languages mastered through countless hours in the void.'}
                    {category === 'AI/ML' && 'Machine Learning and AI frameworks forged in the depths of data science competitions.'}
                    {category === 'Frameworks' && 'Development frameworks that serve as the backbone of digital manifestations.'}
                    {category === 'Data' && 'Data manipulation and visualization tools extracted from the statistical realm.'}
                    {category === 'Cloud/DevOps' && 'Cloud infrastructure and deployment systems operating in the digital fog.'}
                    {category === 'Tools' && 'Essential development tools discovered in the deepest layers of the code.'}
                    {category === 'Databases' && 'Database systems that store the memories of countless digital entities.'}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {items.map((skill: Skill, index: number) => (
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

        <div className="mt-20 pt-12 border-t silent-border-rust">
          <div className="hospital-card border-2 silent-border-blood rounded-2xl p-8 interference-lines">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-blood-400 flicker-silent-hill-fast font-silent-hill-title tracking-wider">
                SYSTEM ANALYSIS COMPLETE
              </h4>
              <div className="h-px bg-gradient-to-r from-transparent via-blood-500 to-transparent mt-3"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-rust-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains flicker-silent-hill">
                  {skills.length}+
                </div>
                <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">TECHNOLOGIES_MASTERED</div>
              </div>
              
              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-blood-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains">
                  {Object.keys(grouped).length}
                </div>
                <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">SKILL_CATEGORIES</div>
              </div>
              
              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-rust-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains">
                  {skills.filter(skill => skill.featured).length}
                </div>
                <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">FEATURED_SKILLS</div>
              </div>
              
              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-blood-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains blink-critical">
                  {Math.round(skills.reduce((acc, skill) => acc + (skill.level || 80), 0) / skills.length)}%
                </div>
                <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">AVERAGE_MASTERY</div>
              </div>
            </div>

            <div className="text-center pt-6 border-t silent-border-hospital">
              <p className="font-jetbrains text-xs text-hospital-400 tracking-wider mb-2">
                ANALYSIS_COMPLETE • ALL_SYSTEMS_OPERATIONAL • READY_FOR_DEPLOYMENT
              </p>
              <p className="text-flesh-300 text-sm font-palatino">
                These skills have been forged through years of dedication in the digital realm.
                <span className="text-blood-400 font-semibold"> The matrix awaits your command.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto gradient-dark-rust silent-border-rust rounded-2xl p-8 interference-lines">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-rust-400 rounded-full blink-critical"></div>
              <h3 className="text-2xl font-bold text-rust-400 font-silent-hill-title tracking-wider">
                INITIATE COLLABORATION PROTOCOL
              </h3>
              <div className="w-3 h-3 bg-rust-400 rounded-full blink-critical"></div>
            </div>
            
            <p className="text-flesh-300 mb-6 hospital-text font-palatino leading-relaxed max-w-2xl mx-auto">
              Skills matrix fully loaded and operational. All systems ready for complex project deployment. 
              <span className="text-blood-400 font-semibold">Awaiting your mission parameters.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 gradient-rust-blood text-black font-bold rounded-xl hover:from-rust-400 hover:via-rust-300 hover:to-blood-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover-shadow-rust-glow flex items-center justify-center space-x-2 font-jetbrains"
              >
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>ACCESS_PROJECTS</span>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 border-2 silent-border-rust text-rust-400 font-bold rounded-xl hover:bg-rust-500/10 hover:border-rust-500/70 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2 font-jetbrains"
              >
                <div className="w-2 h-2 bg-rust-400 rounded-full blink-critical"></div>
                <span>SEND_MESSAGE</span>
              </button>
            </div>

            <div className="mt-8 text-left">
              <div className="hospital-card silent-border-hospital rounded-lg p-4 font-jetbrains text-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-rust-400">alexander@skillmatrix:~$</span>
                  <span className="text-hospital-400">cat /proc/skills/summary</span>
                </div>
                <div className="text-flesh-300 space-y-1 text-xs">
                  <div>Total Skills: {skills.length}</div>
                  <div>Featured: {skills.filter(s => s.featured).length}</div>
                  <div>Categories: {Object.keys(grouped).length}</div>
                  <div>Status: All systems operational</div>
                  <div className="text-blood-400">Ready for: Complex projects, AI/ML, Full-stack development</div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <span className="text-rust-400">alexander@skillmatrix:~$</span>
                  <span className="text-hospital-400 flicker-silent-hill-slow">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-400/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rust-400/30 to-transparent"></div>
    </section>
  );
};

export default SkillsSection;
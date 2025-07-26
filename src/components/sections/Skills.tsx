"use client";

import { skills } from "@/data/skills";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Agrupar skills por categoría
const grouped = skills.reduce((acc, skill) => {
  acc[skill.category] = acc[skill.category] || [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skills>);

// Componente de barra de habilidad animada
const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group flex flex-col items-center p-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 border-2 overflow-hidden relative ${
        index % 2 === 0 
          ? 'bg-gradient-to-br from-black/80 via-amber-900/20 to-black/80 border-amber-500/30 hover:border-amber-500/60 hover:shadow-amber-500/20' 
          : 'bg-gradient-to-br from-black/80 via-red-900/20 to-black/80 border-red-500/30 hover:border-red-500/60 hover:shadow-red-500/20'
      }`}
    >
      {/* Efecto de brillo de fondo */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        index % 2 === 0 
          ? 'bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/5' 
          : 'bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5'
      }`}></div>

      {/* Partículas flotantes en hover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              index % 2 === 0 ? 'bg-amber-400' : 'bg-red-400'
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-4">
        {/* Icono con efectos mejorados */}
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          {skill.iconifyIcon ? (
            <Icon
              icon={skill.iconifyIcon}
              className={`text-6xl mb-2 transition-all duration-300 ${
                index % 2 === 0 
                  ? 'text-amber-400 drop-shadow-[0_0_15px_#f59e0b] group-hover:drop-shadow-[0_0_25px_#f59e0b]' 
                  : 'text-red-400 drop-shadow-[0_0_15px_#dc2626] group-hover:drop-shadow-[0_0_25px_#dc2626]'
              }`}
            />
          ) : skill.deviconIcon ? (
            <div className="relative">
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.deviconIcon}/${skill.deviconIcon}-original.svg`}
                alt={skill.name}
                className="w-[70px] h-[70px] mb-2 transition-all duration-300 group-hover:scale-110"
              />
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index % 2 === 0 
                  ? 'shadow-[0_0_20px_#f59e0b] opacity-0 group-hover:opacity-50' 
                  : 'shadow-[0_0_20px_#dc2626] opacity-0 group-hover:opacity-50'
              }`}></div>
            </div>
          ) : skill.image ? (
            <div className="relative">
              <Image
                src={skill.image}
                alt={skill.name}
                width={70}
                height={70}
                className="mb-2 transition-all duration-300 group-hover:scale-110"
              />
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index % 2 === 0 
                  ? 'shadow-[0_0_20px_#f59e0b] opacity-0 group-hover:opacity-50' 
                  : 'shadow-[0_0_20px_#dc2626] opacity-0 group-hover:opacity-50'
              }`}></div>
            </div>
          ) : (
            <div className="w-[70px] h-[70px] mb-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-gray-400">?</span>
            </div>
          )}
          
          {/* Anillo de resplandor */}
          <div className={`absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse ${
            index % 2 === 0 ? 'border-amber-400/50' : 'border-red-400/50'
          }`}></div>
        </div>

        {/* Nombre de la habilidad */}
        <div className="text-center space-y-2">
          <span className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
            index % 2 === 0 
              ? 'text-gray-200 group-hover:text-amber-300' 
              : 'text-gray-200 group-hover:text-red-300'
          }`}>
            {skill.name}
          </span>
          
          {/* Barra de nivel si está disponible */}
          {skill.level && (
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400">Nivel</span>
                <span className={`text-xs font-bold ${
                  index % 2 === 0 ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-r from-amber-600 to-amber-400' 
                      : 'bg-gradient-to-r from-red-600 to-red-400'
                  }`}
                  style={{ 
                    width: animated ? `${skill.level || 80}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Indicador de especialización */}
        {skill.featured && (
          <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-black ${
            index % 2 === 0 ? 'bg-amber-400' : 'bg-red-400'
          } animate-pulse`}></div>
        )}
      </div>
    </div>
  );
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-20 min-h-screen px-6 flex items-center justify-center py-20"
    >
      <div className="w-full max-w-6xl bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg rounded-3xl border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 p-12 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        
        {/* Título mejorado */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent tracking-wider flicker-terrifying">
              Mis Habilidades
            </h2>
            {/* Sombra del título */}
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white/5 tracking-wider transform translate-x-1 translate-y-1">
              Mis Habilidades
            </div>
          </div>
          
          {/* Línea decorativa */}
          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
          </div>
          
          {/* Subtítulo */}
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Tecnologías y herramientas que domino en mi journey como desarrollador
          </p>
        </div>

        {/* Categorías de habilidades */}
        <div className="space-y-16 relative z-10">
          {Object.entries(grouped).map(([category, items], categoryIndex) => (
            <div key={category} className="space-y-8">
              
              {/* Título de categoría */}
              <div className="text-center">
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 pb-3 tracking-wide uppercase transition-all duration-300 relative inline-block ${
                  categoryIndex % 2 === 0 ? 'text-amber-500' : 'text-red-500'
                }`}>
                  {category}
                  
                  {/* Línea inferior decorativa */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    categoryIndex % 2 === 0 ? 'bg-amber-500/50' : 'bg-red-500/50'
                  }`}></div>
                  
                  {/* Puntos decorativos */}
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                    <div className={`w-2 h-2 rounded-full ${
                      categoryIndex % 2 === 0 ? 'bg-amber-400' : 'bg-red-400'
                    } animate-pulse`}></div>
                  </div>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className={`w-2 h-2 rounded-full ${
                      categoryIndex % 2 === 0 ? 'bg-amber-400' : 'bg-red-400'
                    } animate-pulse`} style={{animationDelay: '0.5s'}}></div>
                  </div>
                </h3>
              </div>
              
              {/* Grid de habilidades */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {items.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={index + categoryIndex * 10} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <div className="mt-16 pt-12 border-t border-amber-500/20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {Object.values(grouped).flat().length}+
              </div>
              <div className="text-gray-400 text-sm font-medium">Tecnologías</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                3+
              </div>
              <div className="text-gray-400 text-sm font-medium">Años Experiencia</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-400 text-sm font-medium">Proyectos</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                ∞
              </div>
              <div className="text-gray-400 text-sm font-medium">Pasión</div>
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
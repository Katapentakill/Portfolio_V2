'use client'

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  ExternalLink, 
  MapPin, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  FileText,
  Code,
  TrendingUp,
  Zap,
  Clock,
  AlertTriangle,
  Eye
} from 'lucide-react';
import { experiences as experiencesData, type Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

interface SectionHeaderProps {
  icon: any;
  title: string;
  count: number;
  color: string;
  description?: string;
}

// 👇 acepta opcionalmente experiences por props, y por defecto usa las importadas
type ExperienceSectionProps = { 
  experiences?: Experience[] 
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Sistema de tiempo como en Silent Hill
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Efecto de glitch aleatorio
    const glitchTimer = setInterval(() => {
      if (Math.random() < 0.05) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(glitchTimer);
    };
  }, []);

  const getIcon = () => {
    switch (experience.type) {
      case 'work':
        return <Briefcase className="text-rust-400" size={18} />;
      case 'education':
        return <GraduationCap className="text-flesh-400" size={18} />;
      case 'certification':
        return <Award className="text-blood-400" size={18} />;
      default:
        return <Briefcase className="text-rust-400" size={18} />;
    }
  };

  const getCardClass = () => {
    switch (experience.type) {
      case 'work':
        return 'gradient-dark-rust silent-border-rust hover:border-rust-500/60';
      case 'education':
        return 'bg-gradient-to-br from-flesh-900/20 to-flesh-800/10 silent-border-flesh hover:border-flesh-500/60';
      case 'certification':
        return 'bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood hover:border-blood-500/60';
      default:
        return 'gradient-hospital silent-border-hospital hover:border-hospital-500/60';
    }
  };

  const getAccentColor = () => {
    switch (experience.type) {
      case 'work':
        return 'text-rust-400';
      case 'education':
        return 'text-flesh-400';
      case 'certification':
        return 'text-blood-400';
      default:
        return 'text-hospital-400';
    }
  };

  const getTypeLabel = () => {
    switch (experience.type) {
      case 'work':
        return 'WORK RECORD';
      case 'education':
        return 'EDUCATION FILE';
      case 'certification':
        return 'CERTIFICATION LOG';
      default:
        return 'RECORD';
    }
  };

  return (
    <div className={`hospital-card border-2 ${getCardClass()} p-4 sm:p-6 rounded-2xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
      
      {/* Efecto de glitch */}
      {isGlitching && (
        <div className="absolute inset-0 bg-red-500/20 blink-critical z-10 pointer-events-none"></div>
      )}

      {/* Efectos de interferencia - Z-INDEX CORREGIDO */}
      <div className="absolute inset-0 interference-lines opacity-20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none z-0"></div>

      {/* Header estilo expediente médico - RESPONSIVE MEJORADO */}
      <div className="relative z-20">
        <div className="space-y-4 sm:space-y-6">
          {/* Cabecera de documento - RESPONSIVE CORREGIDO */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 pb-3 border-b border-hospital-600/50">
              <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                <div className="p-2 hospital-card rounded-lg silent-border-hospital flex-shrink-0">
                  {getIcon()}
                </div>
                <div>
                  <span className="font-jetbrains text-xs tracking-wider text-hospital-400 block">
                    {getTypeLabel()} #{String(index + 1).padStart(3, '0')}
                  </span>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock size={10} className="text-hospital-500 flex-shrink-0" />
                    <span className="font-jetbrains text-xs text-hospital-500 truncate">
                      LOGGED: {currentTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Estado del archivo - RESPONSIVE */}
              <div className="flex items-center space-x-2 self-start sm:self-center">
                {experience.featured && (
                  <div className="flex items-center space-x-1 px-2 py-1 bg-blood-500/20 border border-blood-500/50 rounded text-xs blink-critical">
                    <AlertTriangle size={10} className="text-blood-400 flex-shrink-0" />
                    <span className="font-jetbrains text-blood-400">PRIORITY</span>
                  </div>
                )}
                <div className={`w-2 h-2 ${experience.endDate === 'Presente' ? 'bg-rust-400 blink-critical' : 'bg-hospital-400'} rounded-full flex-shrink-0`}></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
              {/* Información principal - RESPONSIVE MEJORADO */}
              <div className="flex-1 space-y-3 lg:pr-6">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${getAccentColor()} tracking-wide font-palatino group-hover:drop-shadow-rust transition-all duration-300`}>
                  {experience.title}
                </h3>
                
                <div className="text-flesh-200 font-bold text-base sm:text-lg font-palatino">
                  {experience.company}
                </div>
                
                <div className="grid grid-cols-1 gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2 text-hospital-400">
                    <MapPin size={12} className="flex-shrink-0" />
                    <span className="font-jetbrains tracking-wider truncate">
                      {experience.location}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-hospital-400">
                    <Calendar size={12} className="flex-shrink-0" />
                    <span className="font-jetbrains tracking-wider">
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel de certificado - RESPONSIVE CORREGIDO */}
              {experience.certificateUrl && (
                <div className="w-full lg:w-auto lg:ml-6 lg:flex-shrink-0">
                  {/* En móvil: Layout horizontal compacto, en desktop: vertical */}
                  <div className="flex lg:flex-col items-center lg:items-center space-x-3 lg:space-x-0 lg:space-y-3 p-3 lg:p-0 bg-black/20 lg:bg-transparent rounded-lg lg:rounded-none">
                    <div className="bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood p-3 lg:p-4 rounded-xl border-2 flex lg:block items-center lg:items-center flex-shrink-0">
                      <FileText className="text-blood-400 mr-2 lg:mr-0 lg:mx-auto lg:mb-2" size={20} />
                      <span className="font-jetbrains text-xs text-blood-400 lg:block lg:text-center tracking-wider">
                        CERTIFIED
                      </span>
                    </div>
                    <a
                      href={experience.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-3 py-2 text-blood-400 border border-blood-400/30 rounded-lg hover:bg-blood-500/10 transition-all duration-300 text-xs font-jetbrains hover:scale-105 flex-shrink-0"
                    >
                      <Eye size={12} className="flex-shrink-0" />
                      <span>VIEW CERT</span>
                      <ExternalLink size={10} className="flex-shrink-0" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contenido del expediente - RESPONSIVE MEJORADO */}
          <div className="space-y-4 sm:space-y-6">
            {/* Descripción principal */}
            <div className="hospital-card silent-border-hospital p-3 sm:p-4 rounded-lg">
              <h4 className={`font-jetbrains text-xs sm:text-sm ${getAccentColor()} mb-3 tracking-wider flex items-center space-x-2`}>
                <FileText size={12} className="flex-shrink-0" />
                <span>CASE_DESCRIPTION.LOG</span>
              </h4>
              <p className="text-flesh-300 leading-relaxed font-palatino text-sm">
                {experience.description[0]}
              </p>
              
              {experience.description.length > 1 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`mt-4 flex items-center space-x-2 ${getAccentColor()} font-jetbrains text-xs sm:text-sm tracking-wider border border-current/30 px-3 py-2 rounded hover:border-current/60 transition-all duration-300 hover:scale-105`}
                >
                  <span>{isExpanded ? '[COLLAPSE_DATA]' : '[EXPAND_DATA]'}</span>
                  {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>
              )}
            </div>

            {/* Detalles expandidos */}
            {isExpanded && experience.description.length > 1 && (
              <div className="bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood p-3 sm:p-4 rounded-lg space-y-4 animate-fadeIn">
                <h4 className="font-jetbrains text-xs sm:text-sm text-blood-400 mb-3 tracking-wider flex items-center space-x-2">
                  <Eye size={12} className="flex-shrink-0" />
                  <span>DETAILED_ANALYSIS.LOG</span>
                </h4>
                {experience.description.slice(1).map((desc, i) => (
                  <div key={i} className="border-l-2 border-blood-500/50 pl-3 sm:pl-4">
                    <p className="text-flesh-300 leading-relaxed font-palatino text-sm">
                      <span className="text-blood-400 font-jetbrains text-xs">[{String(i + 1).padStart(2, '0')}]</span> {desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tecnologías - RESPONSIVE MEJORADO */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="hospital-card silent-border-hospital p-3 sm:p-4 rounded-lg">
                <h4 className={`font-jetbrains text-xs sm:text-sm ${getAccentColor()} mb-3 tracking-wider flex items-center space-x-2`}>
                  <Code size={12} className="flex-shrink-0" />
                  <span>TECH_STACK.SYS</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {experience.technologies.slice(0, isExpanded ? undefined : 6).map((tech, i) => (
                    <div
                      key={i}
                      className={`px-2 sm:px-3 py-1 text-xs font-bold rounded-lg border transition-all duration-300 hover:scale-105 font-jetbrains text-center ${
                        experience.type === 'work' 
                          ? 'bg-rust-500/20 text-rust-300 silent-border-rust hover:border-rust-500/70 hover:bg-rust-500/30' 
                          : experience.type === 'education'
                          ? 'bg-flesh-500/20 text-flesh-300 silent-border-flesh hover:border-flesh-500/70 hover:bg-flesh-500/30'
                          : 'bg-blood-500/20 text-blood-300 silent-border-blood hover:border-blood-500/70 hover:bg-blood-500/30'
                      }`}
                    >
                      {tech}
                    </div>
                  ))}
                  {!isExpanded && experience.technologies.length > 6 && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="px-2 sm:px-3 py-1 text-xs font-bold hospital-card silent-border-hospital rounded-lg text-hospital-400 hover:border-hospital-500/70 transition-all duration-300 font-jetbrains text-center"
                    >
                      +{experience.technologies.length - 6}
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Logros - RESPONSIVE MEJORADO */}
            {isExpanded && experience.achievements && experience.achievements.length > 0 && (
              <div className="bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood p-3 sm:p-4 rounded-lg animate-fadeIn">
                <h4 className="font-jetbrains text-xs sm:text-sm text-blood-400 mb-3 tracking-wider flex items-center space-x-2">
                  <TrendingUp size={12} className="flex-shrink-0" />
                  <span>ACHIEVEMENTS.LOG</span>
                </h4>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blood-400 rounded-full mt-2 blink-critical flex-shrink-0"></div>
                      <p className="text-flesh-300 text-sm leading-relaxed font-palatino">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  icon: Icon, 
  title, 
  count, 
  color,
  description
}) => (
  <div className="text-center mb-12 sm:mb-16">
    <div className="hospital-card border-2 silent-border-rust rounded-2xl p-4 sm:p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-50"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
          <Icon className={color} size={24} />
          <h3 className={`text-lg sm:text-2xl md:text-3xl font-bold ${color} tracking-wide font-palatino text-center`}>
            {title}
          </h3>
          <div className={`px-2 sm:px-3 py-1 ${color.replace('text-', 'bg-')}/20 ${color.replace('text-', 'border-')}/30 border rounded-full text-xs sm:text-sm font-bold font-jetbrains`}>
            {count} FILES
          </div>
        </div>
        
        <div className={`mx-auto h-1 w-16 sm:w-24 rounded-full ${
          color === 'text-rust-400' ? 'bg-gradient-to-r from-rust-600 to-rust-400' : 
          color === 'text-flesh-400' ? 'bg-gradient-to-r from-flesh-600 to-flesh-400' : 
          'bg-gradient-to-r from-blood-600 to-blood-400'
        }`}></div>
        
        {description && (
          <p className="text-hospital-400 text-xs sm:text-sm max-w-2xl mx-auto mt-4 leading-relaxed font-palatino px-4">
            "{description}"
          </p>
        )}
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences = experiencesData }) => {
  // Agrupado con useMemo para no recalcular en cada render
  const groupedExperiences = useMemo(() => {
    return {
      work: experiences.filter(exp => exp.type === 'work'),
      education: experiences.filter(exp => exp.type === 'education'),
      certification: experiences.filter(exp => exp.type === 'certification')
    };
  }, [experiences]);

  const [currentTime, setCurrentTime] = useState('');
  const [glitchTitle, setGlitchTitle] = useState('EXPERIENCE LOG');

  useEffect(() => {
    // Sistema de tiempo Silent Hill
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

    // Efecto de glitch en el título
    const glitchEffect = () => {
      const variants = ['EXPERIENCE LOG', '3XP3R13NC3 L0G', 'ＥＸＰＥＲＩＥＮＣＥ　ＬＯＧ', '？？？？？？？？？？？', 'PERSONNEL FILE', 'CASE HISTORY'];
      setGlitchTitle(variants[Math.floor(Math.random() * variants.length)]);
      setTimeout(() => setGlitchTitle('EXPERIENCE LOG'), 200);
    };

    const glitchInterval = setInterval(glitchEffect, 15000);
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section id="experience" className="relative min-h-screen px-4 sm:px-6 py-20 z-10">
      
      {/* Fondo atmosférico Silent Hill - Z-INDEX CORREGIDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"></div>
      <div className="absolute inset-0 noise-bg z-0"></div>

      {/* Partículas flotantes - Z-INDEX CORREGIDO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              i % 4 === 0 ? 'bg-rust-400/40' : 
              i % 4 === 1 ? 'bg-hospital-400/40' : 
              i % 4 === 2 ? 'bg-blood-400/40' : 'bg-flesh-200/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* CONTENIDO PRINCIPAL - Z-INDEX SUPERIOR */}
      <div className="relative z-20 max-w-7xl mx-auto">
        
        {/* Header principal estilo Silent Hill - RESPONSIVE MEJORADO */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-silent-hill-title tracking-wider flicker-silent-hill">
              <span className="bg-gradient-to-r from-blood-400 via-rust-400 to-blood-400 bg-clip-text text-transparent">
                {glitchTitle}
              </span>
            </h2>
            
            <div className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-flesh-500/10 tracking-wider transform translate-x-1 sm:translate-x-2 translate-y-1 sm:translate-y-2 font-silent-hill-title">
              EXPERIENCE LOG
            </div>
          </div>

          {/* Sistema de tiempo y status - RESPONSIVE MEJORADO */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <div className="gradient-dark-rust silent-border-rust px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center">
              <Clock size={14} className="text-rust-400 blink-critical flex-shrink-0" />
              <span className="font-jetbrains text-xs sm:text-sm text-rust-400 tracking-wider">
                ACCESS_TIME: {currentTime}
              </span>
            </div>

            <div className="hospital-card silent-border-hospital px-3 sm:px-4 py-2 rounded-lg flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-center">
              <span className="font-jetbrains text-xs text-hospital-400 tracking-wider text-center">
                STATUS: RETRIEVING_PERSONNEL_FILES
              </span>
              <div className="w-2 h-2 bg-hospital-400 rounded-full blink-critical flex-shrink-0"></div>
            </div>
          </div>

          {/* Subtítulo estilo diario - RESPONSIVE MEJORADO */}
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-rust-400 font-palatino text-sm sm:text-lg mb-2 flicker-silent-hill-slow">
              "Found these old personnel files in the fog..."
            </p>
            <p className="text-flesh-300 hospital-text mb-2 font-palatino text-xs sm:text-base">
              Each record contains traces of a journey through code and data.
            </p>
            <p className="text-blood-400 font-semibold font-palatino text-xs sm:text-base">
              These are the experiences that shaped the path.
            </p>
          </div>
        </div>

        {/* Contenido de experiencias - ESPACIADO RESPONSIVO */}
        <div className="space-y-16 sm:space-y-20">
          
          {/* Experiencia Profesional */}
          {groupedExperiences.work.length > 0 && (
            <div>
              <SectionHeader 
                icon={Briefcase} 
                title="PROFESSIONAL EXPERIENCE" 
                count={groupedExperiences.work.length} 
                color="text-rust-400" 
                description="Leadership roles in technology projects with social impact and rural health systems"
              />
              <div className="space-y-6 sm:space-y-8">
                {groupedExperiences.work.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Educación */}
          {groupedExperiences.education.length > 0 && (
            <div>
              <SectionHeader 
                icon={GraduationCap} 
                title="ACADEMIC RECORDS" 
                count={groupedExperiences.education.length} 
                color="text-flesh-400" 
                description="Specialized education in software engineering, data science and artificial intelligence"
              />
              <div className="space-y-6 sm:space-y-8">
                {groupedExperiences.education.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Certificaciones */}
          {groupedExperiences.certification.length > 0 && (
            <div>
              <SectionHeader 
                icon={Award} 
                title="CERTIFICATION LOGS" 
                count={groupedExperiences.certification.length} 
                color="text-blood-400" 
                description="Official certifications in full-stack development, cloud computing and enterprise technologies"
              />
              <div className="space-y-6 sm:space-y-8">
                {groupedExperiences.certification.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Terminal de contacto - RESPONSIVE MEJORADO */}
        <div className="mt-16 sm:mt-20">
          <div className="hospital-card border-2 silent-border-blood rounded-2xl p-6 sm:p-8 relative overflow-hidden interference-lines">
            <div className="text-center mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-2xl font-bold text-blood-400 flicker-silent-hill-fast font-silent-hill-title tracking-wider">
                COLLABORATION TERMINAL
              </h4>
              <div className="h-px bg-gradient-to-r from-transparent via-blood-500 to-transparent mt-3"></div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-flesh-300 max-w-2xl mx-auto font-palatino leading-relaxed text-sm sm:text-base px-4">
                <span className="text-rust-400 font-semibold">Looking for opportunities to apply experience in full-stack development,</span><br/>
                project leadership and emerging technologies in impactful projects.
                <span className="text-blood-400 font-semibold"> Ready for new challenges in the digital realm.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-6 sm:px-8 py-2 sm:py-3 gradient-rust-blood text-black font-bold rounded-xl hover:from-rust-400 hover:via-rust-300 hover:to-blood-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover-shadow-rust-glow flex items-center justify-center space-x-2 font-jetbrains text-sm sm:text-base"
                >
                  <span>INITIATE_CONTACT</span>
                  <Zap size={14} className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-6 sm:px-8 py-2 sm:py-3 border-2 silent-border-rust text-rust-400 font-bold rounded-xl hover:bg-rust-500/10 hover:border-rust-500/70 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2 font-jetbrains text-sm sm:text-base"
                >
                  <span>VIEW_PROJECTS</span>
                  <Code size={14} className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                </button>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t silent-border-hospital text-center">
              <p className="font-jetbrains text-xs text-hospital-400 tracking-wider">
                END_OF_PERSONNEL_FILE • SYSTEM_READY • AWAITING_NEW_ENTRIES
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos de borde - Z-INDEX CORREGIDO */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blood-500/50 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blood-500/50 to-transparent z-0"></div>
    </section>
  );
};

export default ExperienceSection;
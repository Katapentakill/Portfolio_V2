'use client'

import { useState } from 'react'
import { experiences, getExperiencesByType, type Experience } from '@/data/experience'
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
  TrendingUp,
  FileText,
  Code,
  Users,
  Target,
  Zap,
  Globe,
  BookOpen
} from 'lucide-react'

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getIcon = () => {
    switch (experience.type) {
      case 'work':
        return <Briefcase className="text-rust-400" size={24} />
      case 'education':
        return <GraduationCap className="text-hospital-400" size={24} />
      case 'certification':
        return <Award className="text-blood-400" size={24} />
      default:
        return <Briefcase className="text-rust-400" size={24} />
    }
  }

  const getTypeColor = () => {
    switch (experience.type) {
      case 'work':
        return 'gradient-dark-rust silent-border-rust hover:border-rust-500/60'
      case 'education':
        return 'gradient-hospital silent-border-hospital hover:border-hospital-500/60'
      case 'certification':
        return 'bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood hover:border-blood-500/60'
      default:
        return 'hospital-card silent-border-hospital hover:border-hospital-500/60'
    }
  }

  const getAccentColor = () => {
    switch (experience.type) {
      case 'work':
        return 'text-rust-400'
      case 'education':
        return 'text-hospital-400'
      case 'certification':
        return 'text-blood-400'
      default:
        return 'text-hospital-400'
    }
  }

  const getBgColor = () => {
    switch (experience.type) {
      case 'work':
        return 'bg-rust-400'
      case 'education':
        return 'bg-hospital-400'
      case 'certification':
        return 'bg-blood-400'
      default:
        return 'bg-hospital-400'
    }
  }

  const getTypeLabel = () => {
    switch (experience.type) {
      case 'work':
        return 'Experiencia Profesional'
      case 'education':
        return 'Formación Académica'
      case 'certification':
        return 'Certificación Profesional'
      default:
        return 'Experiencia'
    }
  }

  return (
    <div className={`group relative hospital-card border-2 ${getTypeColor()} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
      
      {/* Efecto de brillo de fondo Silent Hill */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-flesh-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Indicador de destacado */}
      {experience.featured && (
        <div className="absolute top-4 right-4 gradient-rust-blood text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg z-20">
          <Star size={12} fill="currentColor" />
          <span>Destacado</span>
        </div>
      )}

      {/* Etiqueta de tipo */}
      <div className={`absolute top-4 left-4 px-2 py-1 ${getBgColor()}/10 ${getAccentColor()} text-xs font-medium rounded-md border border-current/20`}>
        {getTypeLabel()}
      </div>

      <div className="relative z-10 mt-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 hospital-card rounded-xl silent-border-hospital group-hover:border-rust-500/30 transition-colors duration-300">
              {getIcon()}
            </div>
            
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${getAccentColor()} mb-1 group-hover:drop-shadow-rust transition-all duration-300`}>
                {experience.title}
              </h3>
              <p className="text-flesh-200 font-semibold text-lg mb-3">{experience.company}</p>
              
              <div className="flex flex-wrap gap-3 text-sm text-hospital-400 hospital-text">
                <div className="flex items-center space-x-1">
                  <MapPin size={14} />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{experience.startDate} - {experience.endDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de certificado */}
          {experience.certificateUrl && (
            <div className={`flex flex-col items-center space-y-2 ${experience.featured ? 'mt-12' : 'mt-0'}`}>
              <a
                href={experience.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/cert flex items-center space-x-2 px-4 py-2 ${getBgColor()}/10 border border-current rounded-lg ${getAccentColor()} hover:${getBgColor().replace('bg-', 'bg-')}/20 hover:scale-105 transition-all duration-300 text-sm font-medium`}
                title="Ver certificado oficial"
              >
                <FileText size={16} className="group-hover/cert:animate-pulse" />
                <span className="hidden sm:inline">Ver Certificado</span>
                <ExternalLink size={12} />
              </a>
              <span className="text-xs text-hospital-500 text-center hidden sm:block hospital-text">
                Verificable oficialmente
              </span>
            </div>
          )}
        </div>

        {/* Descripción preview */}
        <div className="mb-6">
          <p className="text-flesh-300 leading-relaxed text-base">
            {experience.description[0]}
          </p>
          {experience.description.length > 1 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 flex items-center space-x-2 ${getAccentColor()} hover:drop-shadow-rust transition-all duration-300 text-sm font-medium px-4 py-2 rounded-lg border border-current/30 hover:border-current/60 hover:scale-105 hospital-card`}
            >
              <span>{isExpanded ? 'Ver menos detalles' : 'Ver más detalles'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>

        {/* Descripción expandida */}
        {isExpanded && experience.description.length > 1 && (
          <div className="mb-6 space-y-4 animate-fadeIn">
            {experience.description.slice(1).map((desc, i) => (
              <div key={i} className="relative">
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${getBgColor()}/50 rounded-full`}></div>
                <p className="text-flesh-300 leading-relaxed pl-5 text-base">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tecnologías */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mb-6">
            <h4 className={`text-sm font-semibold ${getAccentColor()} mb-3 flex items-center space-x-2`}>
              <Code size={16} />
              <span>Tecnologías & Herramientas</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.slice(0, isExpanded ? undefined : 10).map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 ${
                    experience.type === 'work' 
                      ? 'bg-rust-500/10 text-rust-300 silent-border-rust hover:border-rust-500/50 hover:bg-rust-500/15' 
                      : experience.type === 'education'
                      ? 'bg-hospital-500/10 text-hospital-300 silent-border-hospital hover:border-hospital-500/50 hover:bg-hospital-500/15'
                      : 'bg-blood-500/10 text-blood-300 silent-border-blood hover:border-blood-500/50 hover:bg-blood-500/15'
                  } hover:scale-105`}
                >
                  {tech}
                </span>
              ))}
              {!isExpanded && experience.technologies.length > 10 && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="px-3 py-1.5 text-xs font-medium text-hospital-400 silent-border-hospital rounded-full hover:border-hospital-500/50 hover:text-hospital-300 transition-all duration-300 border"
                >
                  +{experience.technologies.length - 10} más
                </button>
              )}
            </div>
          </div>
        )}

        {/* Logros */}
        {isExpanded && experience.achievements && experience.achievements.length > 0 && (
          <div className="space-y-4 animate-fadeIn hospital-card rounded-lg p-5 silent-border-hospital">
            <h4 className={`text-sm font-semibold ${getAccentColor()} flex items-center space-x-2`}>
              <TrendingUp size={16} />
              <span>Logros & Resultados Destacados</span>
            </h4>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-flesh-300 text-sm flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full ${getBgColor()} mt-2.5 flex-shrink-0`}></div>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

const SectionHeader = ({ 
  icon: Icon, 
  title, 
  count, 
  color,
  description
}: { 
  icon: any; 
  title: string; 
  count: number; 
  color: string;
  description?: string;
}) => (
  <div className="text-center mb-12">
    <div className="flex justify-center items-center space-x-3 mb-4">
      <Icon className={color} size={32} />
      <h3 className={`text-2xl md:text-3xl font-bold ${color} tracking-wide`}>
        {title}
      </h3>
      <div className={`px-3 py-1 ${color.replace('text-', 'bg-')}/20 ${color.replace('text-', 'border-')}/30 border rounded-full text-sm font-medium`}>
        {count}
      </div>
    </div>
    <div className={`h-0.5 w-24 mx-auto ${color.replace('text-', 'bg-')}/50 rounded-full mb-3`}></div>
    {description && (
      <p className="text-hospital-400 text-sm max-w-2xl mx-auto hospital-text">
        {description}
      </p>
    )}
  </div>
)

function Experience() {
  const workExperience = getExperiencesByType('work')
  const education = getExperiencesByType('education')
  const certifications = getExperiencesByType('certification')

  return (
    <section
      id="experience"
      className="relative z-20 min-h-screen px-6 flex items-center justify-center py-20"
    >
      <div className="w-full max-w-7xl hospital-card backdrop-blur-lg rounded-3xl silent-border-rust shadow-2xl hover-shadow-rust-glow p-12 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo Silent Hill */}
        <div className="absolute inset-0 gradient-dark-rust pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rust-400/50 to-transparent"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float ${
                i % 3 === 0 ? 'bg-rust-400/30' : i % 3 === 1 ? 'bg-hospital-400/30' : 'bg-blood-400/30'
              }`}
              style={{
                left: `${8 + i * 8}%`,
                top: `${15 + i * 6}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Título principal Silent Hill */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rust-400 via-blood-400 to-rust-400 bg-clip-text text-transparent tracking-wider flicker-silent-hill">
              Mi Experiencia
            </h2>
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-flesh-500/5 tracking-wider transform translate-x-1 translate-y-1">
              Mi Experiencia
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-gradient-to-r from-rust-500 via-blood-500 to-rust-500 rounded-full shadow-lg hover-shadow-rust-glow"></div>
          </div>
          
          <p className="text-hospital-400 mt-6 text-lg max-w-4xl mx-auto leading-relaxed hospital-text">
            Mi trayectoria profesional en desarrollo de software, liderazgo de proyectos tecnológicos, 
            ciencia de datos y arquitecturas distribuidas aplicadas a impacto social
          </p>
        </div>

        {/* Contenido principal */}
        <div className="space-y-20 relative z-10">
          
          {/* Experiencia Profesional */}
          {workExperience.length > 0 && (
            <div>
              <SectionHeader 
                icon={Briefcase} 
                title="Experiencia Profesional" 
                count={workExperience.length} 
                color="text-rust-400" 
                description="Roles de liderazgo en desarrollo de proyectos tecnológicos con impacto social y salud rural"
              />
              <div className="grid gap-8">
                {workExperience.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Educación */}
          {education.length > 0 && (
            <div>
              <SectionHeader 
                icon={GraduationCap} 
                title="Formación Académica" 
                count={education.length} 
                color="text-hospital-400" 
                description="Educación especializada en ingeniería de software, ciencia de datos e inteligencia artificial"
              />
              <div className="grid gap-8">
                {education.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Certificaciones */}
          {certifications.length > 0 && (
            <div>
              <SectionHeader 
                icon={Award} 
                title="Certificaciones Profesionales" 
                count={certifications.length} 
                color="text-blood-400" 
                description="Certificaciones oficiales en desarrollo full-stack, cloud computing y tecnologías empresariales"
              />
              <div className="grid gap-8">
                {certifications.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Llamada a la acción */}
        <div className="mt-16 text-center relative z-10">
          <div className="hospital-card rounded-2xl p-8 silent-border-rust hover:border-rust-500/50 transition-all duration-300 bg-gradient-to-r from-rust-900/10 via-blood-900/10 to-rust-900/10">
            <h3 className="text-xl font-bold text-rust-400 mb-3">
              ¿Interesado en colaborar?
            </h3>
            <p className="text-flesh-300 mb-6 max-w-2xl mx-auto">
              Busco oportunidades para aplicar mi experiencia en desarrollo full-stack, 
              liderazgo de proyectos y tecnologías emergentes en proyectos de impacto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 gradient-rust-blood text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover-shadow-rust-glow flex items-center space-x-2"
              >
                <span>Contactar</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 hospital-card silent-border-hospital text-hospital-300 font-semibold rounded-lg hover:border-hospital-500/50 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Ver Proyectos</span>
                <Code size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-400/50 to-transparent"></div>
      </div>
    </section>
  )
}

export default Experience
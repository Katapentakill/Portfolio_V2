// 📁 /components/Experience.tsx - SOLO experiencia laboral, educación y certificaciones
// NO incluye proyectos (esos van en /components/Projects.tsx separado)

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
  FileText
} from 'lucide-react'

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getIcon = () => {
    switch (experience.type) {
      case 'work':
        return <Briefcase className="text-amber-400" size={24} />
      case 'education':
        return <GraduationCap className="text-blue-400" size={24} />
      case 'certification':
        return <Award className="text-green-400" size={24} />
      default:
        return <Briefcase className="text-amber-400" size={24} />
    }
  }

  const getTypeColor = () => {
    switch (experience.type) {
      case 'work':
        return 'from-amber-900/20 to-amber-800/10 border-amber-500/30 hover:border-amber-500/60'
      case 'education':
        return 'from-blue-900/20 to-blue-800/10 border-blue-500/30 hover:border-blue-500/60'
      case 'certification':
        return 'from-green-900/20 to-green-800/10 border-green-500/30 hover:border-green-500/60'
      default:
        return 'from-gray-900/20 to-gray-800/10 border-gray-500/30 hover:border-gray-500/60'
    }
  }

  const getAccentColor = () => {
    switch (experience.type) {
      case 'work':
        return 'text-amber-400'
      case 'education':
        return 'text-blue-400'
      case 'certification':
        return 'text-green-400'
      default:
        return 'text-gray-400'
    }
  }

  const getBgColor = () => {
    switch (experience.type) {
      case 'work':
        return 'bg-amber-400'
      case 'education':
        return 'bg-blue-400'
      case 'certification':
        return 'bg-green-400'
      default:
        return 'bg-gray-400'
    }
  }

  return (
    <div className={`group relative bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 border-2 ${getTypeColor()} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
      
      {/* Efecto de brillo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Indicador de destacado - Esquina superior derecha */}
      {experience.featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-red-500 text-black px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg z-20">
          <Star size={12} fill="currentColor" />
          <span>Destacado</span>
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4 flex-1">
            <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 group-hover:border-amber-500/30 transition-colors duration-300">
              {getIcon()}
            </div>
            
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${getAccentColor()} mb-1 group-hover:drop-shadow-glow transition-all duration-300`}>
                {experience.title}
              </h3>
              <p className="text-gray-200 font-semibold text-lg mb-2">{experience.company}</p>
              
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
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

          {/* Botón de certificado - Posicionado debajo del badge cuando existe */}
          {experience.certificateUrl && (
            <div className={`flex flex-col items-center space-y-2 ${experience.featured ? 'mt-12' : 'mt-0'}`}>
              <a
                href={experience.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/cert flex items-center space-x-2 px-4 py-2 ${getBgColor()}/10 border border-current rounded-lg ${getAccentColor()} hover:${getBgColor().replace('bg-', 'bg-')}/20 hover:scale-105 transition-all duration-300 text-sm font-medium`}
                title="Ver certificado"
              >
                <FileText size={16} className="group-hover/cert:animate-pulse" />
                <span className="hidden sm:inline">Ver Certificado</span>
                <ExternalLink size={12} />
              </a>
              <span className="text-xs text-gray-500 text-center hidden sm:block">
                Certificado oficial
              </span>
            </div>
          )}
        </div>

        {/* Descripción preview */}
        <div className="mb-4">
          <p className="text-gray-300 leading-relaxed">
            {experience.description[0]}
          </p>
          {experience.description.length > 1 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-3 flex items-center space-x-2 ${getAccentColor()} hover:drop-shadow-glow transition-all duration-300 text-sm font-medium px-3 py-1.5 rounded-lg border border-current/30 hover:border-current/60 hover:scale-105`}
            >
              <span>{isExpanded ? 'Ver menos' : 'Ver más detalles'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>

        {/* Descripción expandida */}
        {isExpanded && experience.description.length > 1 && (
          <div className="mb-4 space-y-3 animate-fadeIn">
            {experience.description.slice(1).map((desc, i) => (
              <div key={i} className="relative">
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${getBgColor()}/50 rounded-full`}></div>
                <p className="text-gray-300 leading-relaxed pl-4">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tecnologías */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.slice(0, isExpanded ? undefined : 8).map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 ${
                    experience.type === 'work' 
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-500/50 hover:bg-amber-500/15' 
                      : experience.type === 'education'
                      ? 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/15'
                      : 'bg-green-500/10 text-green-300 border-green-500/30 hover:border-green-500/50 hover:bg-green-500/15'
                  } hover:scale-105`}
                >
                  {tech}
                </span>
              ))}
              {!isExpanded && experience.technologies.length > 8 && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="px-3 py-1.5 text-xs font-medium text-gray-400 border border-gray-600/30 rounded-full hover:border-gray-500/50 hover:text-gray-300 transition-all duration-300"
                >
                  +{experience.technologies.length - 8} más
                </button>
              )}
            </div>
          </div>
        )}

        {/* Logros */}
        {isExpanded && experience.achievements && experience.achievements.length > 0 && (
          <div className="space-y-3 animate-fadeIn bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
            <h4 className={`text-sm font-semibold ${getAccentColor()} flex items-center space-x-2`}>
              <TrendingUp size={16} />
              <span>Logros Destacados</span>
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full ${getBgColor()} mt-2 flex-shrink-0`}></div>
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
  color 
}: { 
  icon: any; 
  title: string; 
  count: number; 
  color: string 
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
    <div className={`h-0.5 w-24 mx-auto ${color.replace('text-', 'bg-')}/50 rounded-full`}></div>
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
      <div className="w-full max-w-6xl bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg rounded-3xl border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 p-12 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float ${
                i % 2 === 0 ? 'bg-amber-400/30' : 'bg-red-400/30'
              }`}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>

        {/* Título principal */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent tracking-wider flicker-terrifying">
              Mi Experiencia
            </h2>
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white/5 tracking-wider transform translate-x-1 translate-y-1">
              Mi Experiencia
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
          </div>
          
          <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto leading-relaxed">
            Mi trayectoria profesional en desarrollo de software, ciencia de datos y liderazgo de proyectos
          </p>
        </div>

        {/* Contenido principal */}
        <div className="space-y-16 relative z-10">
          
          {/* Experiencia Profesional */}
          {workExperience.length > 0 && (
            <div>
              <SectionHeader 
                icon={Briefcase} 
                title="Experiencia Profesional" 
                count={workExperience.length} 
                color="text-amber-400" 
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
                title="Educación" 
                count={education.length} 
                color="text-blue-400" 
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
                title="Certificaciones" 
                count={certifications.length} 
                color="text-green-400" 
              />
              <div className="grid gap-8">
                {certifications.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Estadísticas finales */}
        <div className="mt-16 pt-12 border-t border-amber-500/20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {workExperience.length}
              </div>
              <div className="text-gray-400 text-sm font-medium">Roles Profesionales</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {education.length}
              </div>
              <div className="text-gray-400 text-sm font-medium">Formación</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {certifications.length}
              </div>
              <div className="text-gray-400 text-sm font-medium">Certificaciones</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                2026
              </div>
              <div className="text-gray-400 text-sm font-medium">Graduación</div>
            </div>
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
      </div>
    </section>
  )
}

export default Experience
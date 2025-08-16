// 📁 /components/Projects.tsx - SOLO proyectos destacados
// Separado de /components/Experience.tsx para mantener orden limpio

'use client'

import { useState } from 'react'
import { projects, getProjectsByCategory, type Project } from '@/data/projects'
import { 
  Code, 
  ExternalLink, 
  Github, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Zap,
  Rocket,
  Trophy,
  Monitor,
  Layers,
  Target,
  CheckCircle,
  Clock,
  Play,
  Archive
} from 'lucide-react'

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getCategoryInfo = () => {
    switch (project.category) {
      case 'mvp':
        return { 
          color: 'text-amber-400', 
          bg: 'from-amber-900/20 to-amber-800/10 border-amber-500/30 hover:border-amber-500/60',
          icon: <Rocket className="text-amber-400" size={24} />,
          label: 'MVP'
        }
      case 'portfolio':
        return { 
          color: 'text-blue-400', 
          bg: 'from-blue-900/20 to-blue-800/10 border-blue-500/30 hover:border-blue-500/60',
          icon: <Code className="text-blue-400" size={24} />,
          label: 'Portfolio'
        }
      case 'competition':
        return { 
          color: 'text-green-400', 
          bg: 'from-green-900/20 to-green-800/10 border-green-500/30 hover:border-green-500/60',
          icon: <Trophy className="text-green-400" size={24} />,
          label: 'Competencia'
        }
      case 'personal':
        return { 
          color: 'text-purple-400', 
          bg: 'from-purple-900/20 to-purple-800/10 border-purple-500/30 hover:border-purple-500/60',
          icon: <Monitor className="text-purple-400" size={24} />,
          label: 'Personal'
        }
      default:
        return { 
          color: 'text-gray-400', 
          bg: 'from-gray-900/20 to-gray-800/10 border-gray-500/30 hover:border-gray-500/60',
          icon: <Code className="text-gray-400" size={24} />,
          label: 'Proyecto'
        }
    }
  }

  const getStatusInfo = () => {
    switch (project.status) {
      case 'live':
        return { icon: <Play className="text-green-400" size={16} />, label: 'En Vivo', color: 'text-green-400' }
      case 'completed':
        return { icon: <CheckCircle className="text-blue-400" size={16} />, label: 'Completado', color: 'text-blue-400' }
      case 'in-development':
        return { icon: <Clock className="text-amber-400" size={16} />, label: 'En Desarrollo', color: 'text-amber-400' }
      case 'archived':
        return { icon: <Archive className="text-gray-400" size={16} />, label: 'Archivado', color: 'text-gray-400' }
      default:
        return { icon: <Clock className="text-gray-400" size={16} />, label: 'Desconocido', color: 'text-gray-400' }
    }
  }

  const categoryInfo = getCategoryInfo()
  const statusInfo = getStatusInfo()

  return (
    <div className={`group relative bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 border-2 ${categoryInfo.bg} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
      
      {/* Efecto de brillo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Indicadores superiores */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        {project.featured && (
          <div className="bg-gradient-to-r from-amber-500 to-red-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Star size={10} fill="currentColor" />
            <span>Destacado</span>
          </div>
        )}
        <div className={`px-2 py-1 ${statusInfo.color} bg-gray-800/50 rounded-full text-xs font-medium flex items-center space-x-1 border border-gray-700/50`}>
          {statusInfo.icon}
          <span>{statusInfo.label}</span>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 group-hover:border-amber-500/30 transition-colors duration-300">
            {categoryInfo.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 text-xs font-medium ${categoryInfo.color} bg-gray-800/50 rounded-full border border-gray-700/30`}>
                {categoryInfo.label}
              </span>
            </div>
            
            <h3 className={`text-xl font-bold ${categoryInfo.color} mb-2 group-hover:drop-shadow-glow transition-all duration-300`}>
              {project.title}
            </h3>
            
            <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{project.startDate} - {project.endDate || 'Presente'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <p className="text-gray-300 leading-relaxed mb-3">
            {project.description}
          </p>
          
          {project.longDescription && project.longDescription.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center space-x-1 ${categoryInfo.color} hover:drop-shadow-glow transition-all duration-300 text-sm font-medium`}
            >
              <span>{isExpanded ? 'Ver menos' : 'Ver más detalles'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>

        {/* Descripción expandida */}
        {isExpanded && project.longDescription && (
          <div className="mb-4 space-y-2 animate-fadeIn">
            {project.longDescription.map((desc, i) => (
              <p key={i} className="text-gray-300 leading-relaxed pl-4 border-l-2 border-gray-600/50 text-sm">
                {desc}
              </p>
            ))}
          </div>
        )}

        {/* Tecnologías */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, isExpanded ? undefined : 6).map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105 ${
                  project.category === 'mvp' 
                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-500/50' 
                    : project.category === 'portfolio'
                    ? 'bg-blue-500/10 text-blue-300 border-blue-500/30 hover:border-blue-500/50'
                    : project.category === 'competition'
                    ? 'bg-green-500/10 text-green-300 border-green-500/30 hover:border-green-500/50'
                    : 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-500/50'
                }`}
              >
                {tech}
              </span>
            ))}
            {!isExpanded && project.technologies.length > 6 && (
              <span className="px-3 py-1 text-xs font-medium text-gray-400 border border-gray-600/30 rounded-full">
                +{project.technologies.length - 6} más
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        {isExpanded && project.features && project.features.length > 0 && (
          <div className="mb-4 animate-fadeIn">
            <h4 className={`text-sm font-semibold ${categoryInfo.color} flex items-center space-x-1 mb-2`}>
              <Layers size={16} />
              <span>Características</span>
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {project.features.map((feature, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start space-x-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${categoryInfo.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Logros */}
        {isExpanded && project.achievements && project.achievements.length > 0 && (
          <div className="mb-4 animate-fadeIn">
            <h4 className={`text-sm font-semibold ${categoryInfo.color} flex items-center space-x-1 mb-2`}>
              <Target size={16} />
              <span>Logros</span>
            </h4>
            <ul className="space-y-1">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start space-x-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${categoryInfo.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Enlaces */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-700/30">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 ${categoryInfo.color} border border-current/30 rounded-lg hover:bg-current/10 transition-all duration-300 text-sm font-medium hover:scale-105`}
            >
              <ExternalLink size={16} />
              <span>Ver Proyecto</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 border border-gray-600/30 rounded-lg hover:bg-gray-600/10 hover:border-gray-500/50 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              <Github size={16} />
              <span>Código</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/10 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              <Play size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const CategorySection = ({ 
  title, 
  icon: Icon, 
  projects, 
  color 
}: { 
  title: string; 
  icon: any; 
  projects: Project[]; 
  color: string 
}) => {
  if (projects.length === 0) return null

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <Icon className={color} size={32} />
          <h3 className={`text-2xl md:text-3xl font-bold ${color} tracking-wide`}>
            {title}
          </h3>
          <div className={`px-3 py-1 ${color.replace('text-', 'bg-')}/20 ${color.replace('text-', 'border-')}/30 border rounded-full text-sm font-medium`}>
            {projects.length}
          </div>
        </div>
        <div className={`h-0.5 w-24 mx-auto ${color.replace('text-', 'bg-')}/50 rounded-full`}></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const mvpProjects = getProjectsByCategory('mvp')
  const portfolioProjects = getProjectsByCategory('portfolio')
  const competitionProjects = getProjectsByCategory('competition')

  return (
    <section
      id="projects"
      className="relative z-20 min-h-screen px-6 flex items-center justify-center py-20"
    >
      <div className="w-full max-w-7xl bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg rounded-3xl border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 p-12 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-500/5 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float ${
                i % 3 === 0 ? 'bg-amber-400/30' : i % 3 === 1 ? 'bg-red-400/30' : 'bg-blue-400/30'
              }`}
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + i * 7}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Título principal */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent tracking-wider flicker-terrifying">
              Mis Proyectos
            </h2>
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-white/5 tracking-wider transform translate-x-1 translate-y-1">
              Mis Proyectos
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 rounded-full shadow-lg shadow-amber-500/50"></div>
          </div>
          
          <p className="text-gray-400 mt-4 text-lg max-w-4xl mx-auto leading-relaxed">
            Desde MVPs innovadores hasta soluciones Full Stack completas, 
            <span className="text-amber-400 font-semibold"> explorando el futuro de la tecnología</span>
          </p>
        </div>

        {/* Contenido principal */}
        <div className="space-y-20 relative z-10">
          
          {/* MVPs de Living Stones */}
          <CategorySection 
            title="MVPs & Prototipos" 
            icon={Rocket} 
            projects={mvpProjects} 
            color="text-amber-400" 
          />

          {/* Proyectos de Portfolio */}
          <CategorySection 
            title="Portfolio Full Stack" 
            icon={Code} 
            projects={portfolioProjects} 
            color="text-blue-400" 
          />

          {/* Competencias Kaggle */}
          <CategorySection 
            title="Competencias & ML" 
            icon={Trophy} 
            projects={competitionProjects} 
            color="text-green-400" 
          />
        </div>

        {/* Estadísticas finales */}
        <div className="mt-20 pt-12 border-t border-amber-500/20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {mvpProjects.length}
              </div>
              <div className="text-gray-400 text-sm font-medium">MVPs Activos</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {portfolioProjects.length}
              </div>
              <div className="text-gray-400 text-sm font-medium">Proyectos Full Stack</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                8+
              </div>
              <div className="text-gray-400 text-sm font-medium">Competencias ML</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                28º
              </div>
              <div className="text-gray-400 text-sm font-medium">Best Ranking</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-400 text-sm font-medium">Pasión</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center relative z-10">
          <div className="bg-gradient-to-r from-amber-500/10 via-red-500/10 to-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 flicker-terrifying-slow">
              ¿Tienes una idea innovadora?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a colaborar en proyectos desafiantes que marquen la diferencia.
              <span className="text-red-400 font-semibold"> ¡Conectemos y creemos algo increíble!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-bold rounded-xl hover:from-amber-400 hover:via-amber-300 hover:to-amber-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
              >
                <Zap size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Colaboremos</span>
              </button>
              <a
                href="https://github.com/Katapentakill"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 border-2 border-amber-500/50 text-amber-400 font-bold rounded-xl hover:bg-amber-500/10 hover:border-amber-500/70 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Ver GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></div>
      </div>
    </section>
  )
}

export default Projects
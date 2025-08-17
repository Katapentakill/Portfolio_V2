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
  Archive,
  GraduationCap,
  Brain,
  Database,
  Wrench
} from 'lucide-react'

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getCategoryInfo = () => {
    switch (project.category) {
      case 'mvp':
        return { 
          color: 'text-rust-400', 
          bg: 'gradient-dark-rust silent-border-rust hover:border-rust-500/60',
          icon: <Rocket className="text-rust-400" size={24} />,
          label: 'MVP'
        }
      case 'university':
        return { 
          color: 'text-hospital-400', 
          bg: 'gradient-hospital silent-border-hospital hover:border-hospital-500/60',
          icon: <GraduationCap className="text-hospital-400" size={24} />,
          label: 'Universidad'
        }
      case 'ibm':
        return { 
          color: 'text-blood-400', 
          bg: 'bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood hover:border-blood-500/60',
          icon: <Code className="text-blood-400" size={24} />,
          label: 'IBM Certified'
        }
      case 'kaggle':
        return { 
          color: 'text-rust-400', 
          bg: 'gradient-dark-rust silent-border-rust hover:border-rust-500/60',
          icon: <Brain className="text-rust-400" size={24} />,
          label: 'Kaggle/ML'
        }
      case 'tools':
        return { 
          color: 'text-hospital-400', 
          bg: 'gradient-hospital silent-border-hospital hover:border-hospital-500/60',
          icon: <Wrench className="text-hospital-400" size={24} />,
          label: 'Herramientas'
        }
      default:
        return { 
          color: 'text-hospital-400', 
          bg: 'hospital-card silent-border-hospital hover:border-hospital-500/60',
          icon: <Code className="text-hospital-400" size={24} />,
          label: 'Proyecto'
        }
    }
  }

  const getStatusInfo = () => {
    switch (project.status) {
      case 'live':
        return { icon: <Play className="text-rust-400" size={16} />, label: 'En Vivo', color: 'text-rust-400' }
      case 'completed':
        return { icon: <CheckCircle className="text-hospital-400" size={16} />, label: 'Completado', color: 'text-hospital-400' }
      case 'in-development':
        return { icon: <Clock className="text-blood-400" size={16} />, label: 'En Desarrollo', color: 'text-blood-400' }
      case 'archived':
        return { icon: <Archive className="text-hospital-400" size={16} />, label: 'Archivado', color: 'text-hospital-400' }
      default:
        return { icon: <Clock className="text-hospital-400" size={16} />, label: 'Desconocido', color: 'text-hospital-400' }
    }
  }

  const categoryInfo = getCategoryInfo()
  const statusInfo = getStatusInfo()

  return (
    <div className={`group relative hospital-card border-2 ${categoryInfo.bg} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
      
      {/* Efecto de brillo de fondo Silent Hill */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-flesh-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Indicadores superiores */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        {project.featured && (
          <div className="gradient-rust-blood text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Star size={10} fill="currentColor" />
            <span>Destacado</span>
          </div>
        )}
        <div className={`px-2 py-1 ${statusInfo.color} hospital-card rounded-full text-xs font-medium flex items-center space-x-1 silent-border-hospital`}>
          {statusInfo.icon}
          <span>{statusInfo.label}</span>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="p-3 hospital-card rounded-xl silent-border-hospital group-hover:border-rust-500/30 transition-colors duration-300">
            {categoryInfo.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 text-xs font-medium ${categoryInfo.color} hospital-card rounded-full silent-border-hospital`}>
                {categoryInfo.label}
              </span>
            </div>
            
            <h3 className={`text-xl font-bold ${categoryInfo.color} mb-2 group-hover:drop-shadow-rust transition-all duration-300`}>
              {project.title}
            </h3>
            
            <div className="flex items-center space-x-3 text-sm text-hospital-400 mb-3 hospital-text">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{project.startDate} - {project.endDate || 'Presente'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <p className="text-flesh-300 leading-relaxed mb-3">
            {project.description}
          </p>
          
          {project.longDescription && project.longDescription.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center space-x-1 ${categoryInfo.color} hover:drop-shadow-rust transition-all duration-300 text-sm font-medium`}
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
              <p key={i} className="text-flesh-300 leading-relaxed pl-4 border-l-2 border-hospital-600/50 text-sm">
                {desc}
              </p>
            ))}
          </div>
        )}

        {/* Tecnologías Silent Hill style */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, isExpanded ? undefined : 6).map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105 ${
                  project.category === 'mvp' 
                    ? 'bg-rust-500/10 text-rust-300 silent-border-rust hover:border-rust-500/50' 
                    : project.category === 'university'
                    ? 'bg-hospital-500/10 text-hospital-300 silent-border-hospital hover:border-hospital-500/50'
                    : project.category === 'ibm'
                    ? 'bg-blood-500/10 text-blood-300 silent-border-blood hover:border-blood-500/50'
                    : project.category === 'kaggle'
                    ? 'bg-rust-500/10 text-rust-300 silent-border-rust hover:border-rust-500/50'
                    : 'bg-hospital-500/10 text-hospital-300 silent-border-hospital hover:border-hospital-500/50'
                }`}
              >
                {tech}
              </span>
            ))}
            {!isExpanded && project.technologies.length > 6 && (
              <span className="px-3 py-1 text-xs font-medium text-hospital-400 silent-border-hospital rounded-full">
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
                <li key={i} className="text-flesh-300 text-sm flex items-start space-x-2">
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
                <li key={i} className="text-flesh-300 text-sm flex items-start space-x-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${categoryInfo.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Enlaces */}
        <div className="flex items-center space-x-3 pt-4 border-t silent-border-hospital">
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
              className="flex items-center space-x-2 px-4 py-2 text-hospital-300 silent-border-hospital rounded-lg hover:bg-hospital-600/10 hover:border-hospital-500/50 transition-all duration-300 text-sm font-medium hover:scale-105"
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
              className="flex items-center space-x-2 px-4 py-2 text-rust-400 silent-border-rust rounded-lg hover:bg-rust-500/10 transition-all duration-300 text-sm font-medium hover:scale-105"
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
  description,
  icon: Icon, 
  projects, 
  color 
}: { 
  title: string;
  description: string;
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
        <div className={`h-0.5 w-24 mx-auto ${color.replace('text-', 'bg-')}/50 rounded-full mb-3`}></div>
        <p className="text-hospital-400 text-sm max-w-2xl mx-auto hospital-text">
          {description}
        </p>
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
  const universityProjects = getProjectsByCategory('university')
  const ibmProjects = getProjectsByCategory('ibm')
  const kaggleProjects = getProjectsByCategory('kaggle')
  const toolsProjects = getProjectsByCategory('tools')

  return (
    <section
      id="projects"
      className="relative z-20 min-h-screen px-6 flex items-center justify-center py-20"
    >
      <div className="w-full max-w-7xl hospital-card backdrop-blur-lg rounded-3xl silent-border-rust shadow-2xl hover-shadow-rust-glow p-12 z-30 relative overflow-hidden">
        
        {/* Efectos de fondo Silent Hill */}
        <div className="absolute inset-0 gradient-dark-rust pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rust-400/50 to-transparent"></div>
        
        {/* Partículas flotantes Silent Hill */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float ${
                i % 4 === 0 ? 'bg-rust-400/30' : i % 4 === 1 ? 'bg-hospital-400/30' : i % 4 === 2 ? 'bg-blood-400/30' : 'bg-flesh-400/20'
              }`}
              style={{
                left: `${3 + i * 6}%`,
                top: `${8 + i * 5}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${3 + i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Título principal Silent Hill */}
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rust-400 via-blood-400 to-rust-400 bg-clip-text text-transparent tracking-wider flicker-silent-hill">
              Mis Proyectos
            </h2>
            <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-flesh-500/5 tracking-wider transform translate-x-1 translate-y-1">
              Mis Proyectos
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-gradient-to-r from-rust-500 via-blood-500 to-rust-500 rounded-full shadow-lg hover-shadow-rust-glow"></div>
          </div>
          
          <p className="text-hospital-400 mt-4 text-lg max-w-4xl mx-auto leading-relaxed hospital-text">
            Desde MVPs innovadores hasta soluciones Full Stack completas, explorando el futuro de la tecnología.
            <span className="text-rust-400 font-semibold"> Un viaje a través de la innovación y la excelencia técnica.</span>
          </p>
        </div>

        {/* Contenido principal */}
        <div className="space-y-20 relative z-10">
          
          {/* MVPs de Living Stones */}
          <CategorySection 
            title="MVPs & Prototipos" 
            description="Productos mínimos viables desarrollados para Living Stones Foundation con impacto real en comunidades."
            icon={Rocket} 
            projects={mvpProjects} 
            color="text-rust-400" 
          />

          {/* Proyectos Universitarios */}
          <CategorySection 
            title="Proyectos Universitarios UCN" 
            description="Desarrollo de software avanzado como parte de mi formación en Ingeniería Civil en Informática."
            icon={GraduationCap} 
            projects={universityProjects} 
            color="text-hospital-400" 
          />

          {/* Proyectos IBM */}
          <CategorySection 
            title="IBM Certified Projects" 
            description="Proyectos Full Stack desarrollados durante la certificación profesional de IBM con tecnologías modernas."
            icon={Code} 
            projects={ibmProjects} 
            color="text-blood-400" 
          />

          {/* Competencias Kaggle */}
          <CategorySection 
            title="Kaggle & Data Science" 
            description="Competencias de Machine Learning y proyectos de ciencia de datos con rankings top y soluciones innovadoras."
            icon={Brain} 
            projects={kaggleProjects} 
            color="text-rust-400" 
          />

          {/* Herramientas */}
          {toolsProjects.length > 0 && (
            <CategorySection 
              title="Herramientas & Utilities" 
              description="Herramientas de automatización y web scraping para optimizar procesos y extraer datos valiosos."
              icon={Wrench} 
              projects={toolsProjects} 
              color="text-hospital-400" 
            />
          )}
        </div>

        {/* Estadísticas finales Silent Hill */}
        <div className="mt-20 pt-12 border-t silent-border-rust relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-rust-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {mvpProjects.length}
              </div>
              <div className="text-hospital-400 text-sm font-medium hospital-text">MVPs Activos</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-hospital-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {universityProjects.length}
              </div>
              <div className="text-hospital-400 text-sm font-medium hospital-text">Proyectos UCN</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blood-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {ibmProjects.length}
              </div>
              <div className="text-hospital-400 text-sm font-medium hospital-text">IBM Certified</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-rust-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                7+
              </div>
              <div className="text-hospital-400 text-sm font-medium hospital-text">Competencias ML</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-hospital-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                75K+
              </div>
              <div className="text-hospital-400 text-sm font-medium hospital-text">Líneas de Código</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blood-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-hospital-400 text-sm font-medium hospital-text">Pasión</div>
            </div>
          </div>
        </div>

        {/* Call to Action Silent Hill */}
        <div className="mt-16 text-center relative z-10">
          <div className="gradient-dark-rust silent-border-rust rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-rust-400 mb-4 flicker-silent-hill-slow">
              ¿Tienes una idea innovadora?
            </h3>
            <p className="text-flesh-300 mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a colaborar en proyectos desafiantes que marquen la diferencia.
              <span className="text-blood-400 font-semibold"> ¡Conectemos y creemos algo increíble!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-3 gradient-rust-blood text-black font-bold rounded-xl hover:from-rust-400 hover:via-rust-300 hover:to-blood-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover-shadow-rust-glow flex items-center justify-center space-x-2"
              >
                <Zap size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Colaboremos</span>
              </button>
              <a
                href="https://github.com/Katapentakill"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 border-2 silent-border-rust text-rust-400 font-bold rounded-xl hover:bg-rust-500/10 hover:border-rust-500/70 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Ver GitHub</span>
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

export default Projects
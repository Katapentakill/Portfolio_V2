'use client'

import React, { useState, useEffect, useMemo } from 'react';
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
  Wrench,
  Terminal,
  Activity,
  Eye,
  AlertTriangle,
  Cpu,
  FileText,
  Globe
} from 'lucide-react';
import { projects as projectsData, type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface CategorySectionProps {
  title: string;
  description: string;
  icon: any;
  projects: Project[];
  color: string;
  categoryId: string;
}

// 👇 acepta opcionalmente projects por props, y por defecto usa los importados
type ProjectsSectionProps = { 
  projects?: Project[] 
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryInfo = () => {
    switch (project.category) {
      case 'mvp':
        return { 
          color: 'text-rust-400', 
          bg: 'gradient-dark-rust silent-border-rust hover:border-rust-500/60',
          icon: <Rocket className="text-rust-400" size={24} />,
          label: 'MVP CRITICAL',
          priority: 'HIGH'
        };
      case 'university':
        return { 
          color: 'text-hospital-400', 
          bg: 'gradient-hospital silent-border-hospital hover:border-hospital-500/60',
          icon: <GraduationCap className="text-hospital-400" size={24} />,
          label: 'UNIVERSITY',
          priority: 'MEDIUM'
        };
      case 'ibm':
        return { 
          color: 'text-blood-400', 
          bg: 'bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood hover:border-blood-500/60',
          icon: <Code className="text-blood-400" size={24} />,
          label: 'IBM CERTIFIED',
          priority: 'HIGH'
        };
      case 'kaggle':
        return { 
          color: 'text-rust-400', 
          bg: 'gradient-dark-rust silent-border-rust hover:border-rust-500/60',
          icon: <Brain className="text-rust-400" size={24} />,
          label: 'KAGGLE/ML',
          priority: 'CRITICAL'
        };
      case 'tools':
        return { 
          color: 'text-hospital-400', 
          bg: 'gradient-hospital silent-border-hospital hover:border-hospital-500/60',
          icon: <Wrench className="text-hospital-400" size={24} />,
          label: 'TOOLS',
          priority: 'MEDIUM'
        };
      case 'personal':
        return { 
          color: 'text-blood-400', 
          bg: 'bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood hover:border-blood-500/60',
          icon: <Code className="text-blood-400" size={24} />,
          label: 'PERSONAL',
          priority: 'MEDIUM'
        };
      default:
        return { 
          color: 'text-hospital-400', 
          bg: 'hospital-card silent-border-hospital hover:border-hospital-500/60',
          icon: <Code className="text-hospital-400" size={24} />,
          label: 'PROJECT',
          priority: 'LOW'
        };
    }
  };

  const getStatusInfo = () => {
    switch (project.status) {
      case 'live':
        return { icon: <Play className="text-rust-400" size={14} />, label: 'LIVE', color: 'text-rust-400', pulse: true };
      case 'completed':
        return { icon: <CheckCircle className="text-hospital-400" size={14} />, label: 'COMPLETE', color: 'text-hospital-400', pulse: false };
      case 'in-development':
        return { icon: <Clock className="text-blood-400" size={14} />, label: 'DEVELOPING', color: 'text-blood-400', pulse: true };
      case 'archived':
        return { icon: <Archive className="text-hospital-400" size={14} />, label: 'ARCHIVED', color: 'text-hospital-400', pulse: false };
      default:
        return { icon: <AlertTriangle className="text-hospital-400" size={14} />, label: 'UNKNOWN', color: 'text-hospital-400', pulse: false };
    }
  };

  const categoryInfo = getCategoryInfo();
  const statusInfo = getStatusInfo();

  return (
    <div className={`group relative hospital-card border-2 ${categoryInfo.bg} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 overflow-hidden interference-lines`}>
      
      {/* Efecto de escaneo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-flesh-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Header de estado tipo terminal */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        {project.featured && (
          <div className="gradient-rust-blood text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 blink-critical">
            <Star size={10} fill="currentColor" />
            <span>FEATURED</span>
          </div>
        )}
        <div className={`px-2 py-1 ${statusInfo.color} hospital-card rounded-full text-xs font-bold flex items-center space-x-1 silent-border-hospital font-jetbrains ${statusInfo.pulse ? 'flicker-silent-hill-fast' : ''}`}>
          {statusInfo.icon}
          <span>{statusInfo.label}</span>
        </div>
        <div className={`px-2 py-1 ${categoryInfo.color} hospital-card rounded-full text-xs font-bold silent-border-hospital font-jetbrains`}>
          <span>{categoryInfo.priority}</span>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header del proyecto */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-3 hospital-card rounded-xl silent-border-hospital group-hover:border-rust-500/30 transition-colors duration-300">
            {categoryInfo.icon}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <span className={`px-3 py-1 text-xs font-bold ${categoryInfo.color} hospital-card rounded-full silent-border-hospital font-jetbrains tracking-wider`}>
                {categoryInfo.label}
              </span>
              <span className="text-hospital-400 text-xs font-jetbrains">ID: {project.id.substring(0, 8).toUpperCase()}</span>
            </div>
            
            <h3 className={`text-xl font-bold ${categoryInfo.color} mb-3 group-hover:drop-shadow-rust transition-all duration-300 font-palatino`}>
              {project.title}
            </h3>
            
            <div className="flex items-center space-x-4 text-sm text-hospital-400 mb-3 hospital-text">
              <div className="flex items-center space-x-1">
                <Calendar size={12} />
                <span className="font-jetbrains">{project.startDate} - {project.endDate || 'ONGOING'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Activity size={12} />
                <span className="font-jetbrains">STATUS: {statusInfo.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Descripción con estilo terminal */}
        <div className="mb-6">
          <div className="hospital-card silent-border-hospital rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <FileText size={14} className="text-hospital-400" />
              <span className="text-hospital-400 text-xs font-bold font-jetbrains">DESCRIPTION.LOG</span>
            </div>
            <p className="text-flesh-300 leading-relaxed font-palatino">
              {project.description}
            </p>
          </div>
          
          {project.longDescription && project.longDescription.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center space-x-2 ${categoryInfo.color} hover:drop-shadow-rust transition-all duration-300 text-sm font-bold font-jetbrains hover:scale-105`}
            >
              <Terminal size={14} />
              <span>{isExpanded ? 'COLLAPSE_DATA' : 'EXPAND_DATA'}</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}
        </div>

        {/* Descripción expandida */}
        {isExpanded && project.longDescription && (
          <div className="mb-6 space-y-3 animate-fadeIn">
            <div className="hospital-card silent-border-blood rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Eye size={14} className="text-blood-400" />
                <span className="text-blood-400 text-xs font-bold font-jetbrains">DETAILED_ANALYSIS.LOG</span>
              </div>
              {project.longDescription.map((desc, i) => (
                <p key={i} className="text-flesh-300 leading-relaxed pl-4 border-l-2 border-hospital-600/50 text-sm mb-2 font-palatino">
                  <span className="text-hospital-400 font-jetbrains text-xs">[{String(i + 1).padStart(2, '0')}]</span> {desc}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Stack tecnológico estilo hospital */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Cpu size={14} className="text-hospital-400" />
            <span className="text-hospital-400 text-xs font-bold font-jetbrains">TECH_STACK.SYS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, isExpanded ? undefined : 6).map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-bold rounded-lg border transition-all duration-300 hover:scale-105 font-jetbrains ${
                  project.category === 'mvp' || project.category === 'kaggle'
                    ? 'bg-rust-500/20 text-rust-300 silent-border-rust hover:border-rust-500/70 hover:bg-rust-500/30' 
                    : project.category === 'university' || project.category === 'tools'
                    ? 'bg-hospital-500/20 text-hospital-300 silent-border-hospital hover:border-hospital-500/70 hover:bg-hospital-500/30'
                    : 'bg-blood-500/20 text-blood-300 silent-border-blood hover:border-blood-500/70 hover:bg-blood-500/30'
                }`}
              >
                {tech}
              </span>
            ))}
            {!isExpanded && project.technologies.length > 6 && (
              <span className="px-3 py-1 text-xs font-bold text-hospital-400 silent-border-hospital rounded-lg border font-jetbrains">
                +{project.technologies.length - 6} MORE
              </span>
            )}
          </div>
        </div>

        {/* Features expandidas */}
        {isExpanded && project.features && project.features.length > 0 && (
          <div className="mb-6 animate-fadeIn">
            <div className="hospital-card silent-border-rust rounded-lg p-4">
              <h4 className={`text-sm font-bold ${categoryInfo.color} flex items-center space-x-2 mb-3 font-jetbrains`}>
                <Layers size={14} />
                <span>FEATURES.CONFIG</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-flesh-300 text-sm flex items-start space-x-3 font-palatino">
                    <span className="text-hospital-400 font-jetbrains text-xs mt-1">[{String(i + 1).padStart(2, '0')}]</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Achievements expandidos */}
        {isExpanded && project.achievements && project.achievements.length > 0 && (
          <div className="mb-6 animate-fadeIn">
            <div className="hospital-card silent-border-blood rounded-lg p-4">
              <h4 className={`text-sm font-bold ${categoryInfo.color} flex items-center space-x-2 mb-3 font-jetbrains`}>
                <Target size={14} />
                <span>ACHIEVEMENTS.LOG</span>
              </h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="text-flesh-300 text-sm flex items-start space-x-3 font-palatino">
                    <Trophy size={12} className="text-rust-400 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Panel de control final */}
        <div className="flex items-center space-x-3 pt-4 border-t silent-border-hospital">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 ${categoryInfo.color} border border-current/30 rounded-lg hover:bg-current/10 transition-all duration-300 text-sm font-bold hover:scale-105 font-jetbrains`}
            >
              <Globe size={14} />
              <span>DEPLOY</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-hospital-300 silent-border-hospital border rounded-lg hover:bg-hospital-600/10 hover:border-hospital-500/50 transition-all duration-300 text-sm font-bold hover:scale-105 font-jetbrains"
            >
              <Github size={14} />
              <span>SOURCE</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-rust-400 silent-border-rust border rounded-lg hover:bg-rust-500/10 transition-all duration-300 text-sm font-bold hover:scale-105 font-jetbrains"
            >
              <Play size={14} />
              <span>DEMO</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  description,
  icon: Icon, 
  projects, 
  color,
  categoryId 
}) => {
  if (projects.length === 0) return null;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <Icon className={color} size={32} />
          <h3 className={`text-2xl md:text-3xl font-bold ${color} tracking-wider font-silent-hill-title`}>
            {title}
          </h3>
          <div className={`px-3 py-1 ${color.replace('text-', 'bg-')}/20 ${color.replace('text-', 'border-')}/30 border rounded-full text-sm font-bold font-jetbrains`}>
            {projects.length} DETECTED
          </div>
        </div>
        <div className={`h-0.5 w-32 mx-auto ${color.replace('text-', 'bg-')}/50 rounded-full mb-4`}></div>
        <p className="text-hospital-400 text-sm max-w-2xl mx-auto hospital-text font-palatino">
          {description}
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects = projectsData }) => {
  // Agrupado con useMemo para no recalcular en cada render
  const groupedProjects = useMemo(() => {
    return {
      mvp: projects.filter(p => p.category === 'mvp'),
      university: projects.filter(p => p.category === 'university'),
      ibm: projects.filter(p => p.category === 'ibm'),
      kaggle: projects.filter(p => p.category === 'kaggle'),
      tools: projects.filter(p => p.category === 'tools'),
      personal: projects.filter(p => p.category === 'personal')
    };
  }, [projects]);

  const [scanTime, setScanTime] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [detectedProjects, setDetectedProjects] = useState(0);
  const [systemStatus, setSystemStatus] = useState('ANALYZING');

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanTime(prev => {
          if (prev >= 120) {
            setIsScanning(false);
            setSystemStatus('PROJECTS LOADED');
            return 120;
          }
          return prev + 1;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDetectedProjects(prev => {
        if (prev < projects.length) return prev + 1;
        return prev;
      });
    }, scanTime * 40);
    return () => clearTimeout(timeout);
  }, [scanTime, projects.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="projects" className="relative min-h-screen px-6 py-20 overflow-hidden">
      
      {/* Fondo atmosférico Silent Hill */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 noise-bg"></div>
      
      {/* Partículas flotantes de la niebla */}
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
        
        {/* Header Terminal */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl md:text-6xl font-bold font-silent-hill-title tracking-wider flicker-silent-hill">
              <span className="bg-gradient-to-r from-blood-400 via-rust-400 to-blood-400 bg-clip-text text-transparent">
                PROJECT DATABASE
              </span>
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-flesh-500/10 tracking-wider transform translate-x-2 translate-y-2 font-silent-hill-title">
              PROJECT DATABASE
            </div>
          </div>

          {/* Panel de Control Central */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="hospital-card border-2 silent-border-rust rounded-2xl p-6 backdrop-blur-lg interference-lines">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="px-4 py-3 gradient-dark-rust silent-border-rust rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-rust-400 font-jetbrains text-xs font-bold">SCAN_TIME</span>
                    <span className="text-rust-400 font-jetbrains text-lg font-bold">{formatTime(scanTime)}</span>
                  </div>
                </div>
                <div className="px-4 py-3 gradient-hospital silent-border-hospital rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-hospital-400 font-jetbrains text-xs font-bold">STATUS</span>
                    <span className="text-hospital-400 font-jetbrains text-sm font-bold">{systemStatus}</span>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gradient-to-br from-blood-900/20 to-blood-800/10 silent-border-blood rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-blood-400 font-jetbrains text-xs font-bold">PROJECTS</span>
                    <span className="text-blood-400 font-jetbrains text-lg font-bold">{detectedProjects}</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-rust-400 font-palatino text-lg mb-2 flicker-silent-hill-slow">
                  "Multiple project signatures detected in the database..."
                </p>
                <p className="text-flesh-300 hospital-text mb-2 font-palatino">
                  Each entry represents hours of development in the digital fog.
                </p>
                <p className="text-blood-400 font-semibold font-palatino">
                  These are the solutions that will shape the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido de Proyectos */}
        <div className="space-y-20">
          
          {/* MVPs de Living Stones */}
          {groupedProjects.mvp.length > 0 && (
            <CategorySection 
              title="MVP PROTOCOLS" 
              description="Critical systems deployed for Living Stones Foundation with real-world impact on rural communities."
              icon={Rocket} 
              projects={groupedProjects.mvp} 
              color="text-rust-400"
              categoryId="mvp"
            />
          )}

          {/* Proyectos Universitarios */}
          {groupedProjects.university.length > 0 && (
            <CategorySection 
              title="UNIVERSITY ARCHIVES" 
              description="Advanced software development projects as part of Computer Engineering formation at UCN."
              icon={GraduationCap} 
              projects={groupedProjects.university} 
              color="text-hospital-400"
              categoryId="university"
            />
          )}

          {/* Proyectos IBM */}
          {groupedProjects.ibm.length > 0 && (
            <CategorySection 
              title="IBM CERTIFIED SYSTEMS" 
              description="Full Stack projects developed during IBM professional certification with modern technologies."
              icon={Code} 
              projects={groupedProjects.ibm} 
              color="text-blood-400"
              categoryId="ibm"
            />
          )}

          {/* Competencias Kaggle */}
          {groupedProjects.kaggle.length > 0 && (
            <CategorySection 
              title="KAGGLE EXPERIMENTS" 
              description="Machine Learning competitions and data science projects with top rankings and innovative solutions."
              icon={Brain} 
              projects={groupedProjects.kaggle} 
              color="text-rust-400"
              categoryId="kaggle"
            />
          )}

          {/* Herramientas */}
          {groupedProjects.tools.length > 0 && (
            <CategorySection 
              title="AUTOMATION TOOLS" 
              description="Automation and web scraping tools to optimize processes and extract valuable data."
              icon={Wrench} 
              projects={groupedProjects.tools} 
              color="text-hospital-400"
              categoryId="tools"
            />
          )}

          {/* Proyectos Personales */}
          {groupedProjects.personal.length > 0 && (
            <CategorySection 
              title="PERSONAL EXPERIMENTS" 
              description="Personal projects and experimental developments exploring new technologies and concepts."
              icon={Code} 
              projects={groupedProjects.personal} 
              color="text-blood-400"
              categoryId="personal"
            />
          )}
        </div>

        {/* Panel de Estadísticas */}
        <div className="mt-20 pt-12 border-t silent-border-rust">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-rust-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains flicker-silent-hill-slow">
                {groupedProjects.mvp.length}
              </div>
              <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">ACTIVE_MVPS</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-hospital-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains">
                {groupedProjects.university.length}
              </div>
              <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">UCN_PROJECTS</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blood-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains">
                {groupedProjects.ibm.length}
              </div>
              <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">IBM_CERTIFIED</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-rust-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains">
                {groupedProjects.kaggle.length}+
              </div>
              <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">ML_EXPERIMENTS</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-hospital-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains">
                {projects.filter(p => p.status === 'live').length}
              </div>
              <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">LIVE_SYSTEMS</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-blood-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-jetbrains blink-critical">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-hospital-400 text-xs font-bold hospital-text font-jetbrains">FEATURED</div>
            </div>
          </div>
        </div>

        {/* Terminal de Comando Final */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto gradient-dark-rust silent-border-rust rounded-2xl p-8 interference-lines">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Terminal className="text-rust-400 flicker-silent-hill" size={24} />
              <h3 className="text-2xl font-bold text-rust-400 font-silent-hill-title tracking-wider">
                SYSTEM STATUS: OPERATIONAL
              </h3>
            </div>
            
            <div className="hospital-card silent-border-hospital rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Monitor size={16} className="text-hospital-400" />
                <span className="text-hospital-400 text-sm font-bold font-jetbrains">CONSOLE.LOG</span>
              </div>
              <p className="text-flesh-300 mb-4 hospital-text font-palatino leading-relaxed">
                All development protocols are running at optimal levels. Database contains {projects.length} innovative solutions 
                ready for deployment. <span className="text-blood-400 font-semibold">System prepared for any challenge that emerges from the digital fog.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 gradient-rust-blood text-black font-bold rounded-xl hover:from-rust-400 hover:via-rust-300 hover:to-blood-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover-shadow-rust-glow flex items-center justify-center space-x-2 font-jetbrains"
              >
                <Zap size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>INITIATE_COLLABORATION</span>
              </button>
              <a
                href="https://github.com/Katapentakill"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 border-2 silent-border-rust text-rust-400 font-bold rounded-xl hover:bg-rust-500/10 hover:border-rust-500/70 transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2 font-jetbrains"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>ACCESS_REPOSITORY</span>
              </a>
            </div>

            {/* Línea de comando simulada */}
            <div className="mt-8 text-left">
              <div className="hospital-card silent-border-hospital rounded-lg p-4 font-jetbrains">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-rust-400">alexander@portfolio:~$</span>
                  <span className="text-hospital-400">ls -la /projects/</span>
                </div>
                <div className="text-flesh-300 text-sm space-y-1">
                  <div>drwxr-xr-x {groupedProjects.mvp.length} alexander dev 4096 2025 mvp/</div>
                  <div>drwxr-xr-x {groupedProjects.university.length} alexander dev 4096 2024 university/</div>
                  <div>drwxr-xr-x {groupedProjects.ibm.length} alexander dev 4096 2024 ibm-certified/</div>
                  <div>drwxr-xr-x {groupedProjects.kaggle.length} alexander dev 4096 2024 kaggle/</div>
                  <div>drwxr-xr-x {groupedProjects.tools.length} alexander dev 4096 2024 tools/</div>
                  {groupedProjects.personal.length > 0 && (
                    <div>drwxr-xr-x {groupedProjects.personal.length} alexander dev 4096 2024 personal/</div>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <span className="text-rust-400">alexander@portfolio:~$</span>
                  <span className="text-hospital-400 flicker-silent-hill-slow">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje de advertencia final */}
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto hospital-card silent-border-blood rounded-lg p-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="text-blood-400 flicker-silent-hill-fast" size={20} />
              <span className="text-blood-400 font-bold font-jetbrains text-sm">WARNING: HIGH INNOVATION LEVELS DETECTED</span>
              <AlertTriangle className="text-blood-400 flicker-silent-hill-fast" size={20} />
            </div>
            <p className="text-flesh-300 text-sm font-palatino">
              These {projects.length} projects represent the intersection of creativity and technology. 
              <span className="text-rust-400 font-semibold"> Handle with care - they might inspire you to build something extraordinary.</span>
            </p>
          </div>
        </div>

        {/* Panel de Estadísticas de Tecnologías */}
        <div className="mt-16">
          <div className="hospital-card border-2 silent-border-blood rounded-2xl p-8 interference-lines">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-blood-400 flicker-silent-hill-fast font-silent-hill-title tracking-wider">
                TECHNOLOGY ANALYSIS
              </h4>
              <div className="h-px bg-gradient-to-r from-transparent via-blood-500 to-transparent mt-3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tecnologías más usadas */}
              <div className="space-y-4">
                <h5 className="text-lg font-bold text-hospital-400 font-jetbrains">TOP_TECHNOLOGIES</h5>
                {(() => {
                  const techCount = projects.reduce((acc, project) => {
                    project.technologies.forEach(tech => {
                      acc[tech] = (acc[tech] || 0) + 1;
                    });
                    return acc;
                  }, {} as Record<string, number>);
                  
                  return Object.entries(techCount)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 8)
                    .map(([tech, count]) => (
                      <div key={tech} className="flex items-center justify-between">
                        <span className="text-flesh-300 text-sm font-palatino">{tech}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 hospital-card rounded-full h-1 overflow-hidden silent-border-hospital">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-rust-600 to-rust-400 transition-all duration-1000"
                              style={{ width: `${(count / Math.max(...Object.values(techCount))) * 100}%` }}
                            />
                          </div>
                          <span className="text-hospital-400 text-xs font-jetbrains w-6 text-right">{count}</span>
                        </div>
                      </div>
                    ));
                })()}
              </div>

              {/* Distribución por categorías */}
              <div className="space-y-4">
                <h5 className="text-lg font-bold text-blood-400 font-jetbrains">CATEGORY_DISTRIBUTION</h5>
                {Object.entries(groupedProjects)
                  .filter(([, projects]) => projects.length > 0)
                  .map(([category, categoryProjects]) => (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-flesh-300 text-sm font-palatino capitalize">{category.replace('_', ' ')}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 hospital-card rounded-full h-1 overflow-hidden silent-border-hospital">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${
                              category === 'mvp' || category === 'kaggle' ? 'bg-gradient-to-r from-rust-600 to-rust-400' :
                              category === 'ibm' || category === 'personal' ? 'bg-gradient-to-r from-blood-600 to-blood-400' :
                              'bg-gradient-to-r from-hospital-600 to-hospital-400'
                            }`}
                            style={{ width: `${(categoryProjects.length / projects.length) * 100}%` }}
                          />
                        </div>
                        <span className="text-hospital-400 text-xs font-jetbrains w-6 text-right">{categoryProjects.length}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Footer del análisis */}
            <div className="mt-8 pt-6 border-t silent-border-hospital text-center">
              <p className="font-jetbrains text-xs text-hospital-400 tracking-wider mb-2">
                PROJECT_ANALYSIS_COMPLETE • {projects.length}_ENTRIES_PROCESSED • SYSTEM_OPERATIONAL
              </p>
              <p className="text-flesh-300 text-sm font-palatino">
                Total development time: {projects.length * 120}+ hours across {Object.keys(groupedProjects).filter(cat => groupedProjects[cat as keyof typeof groupedProjects].length > 0).length} different domains.
                <span className="text-blood-400 font-semibold"> Ready for the next challenge.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos de interferencia finales */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-400/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rust-400/30 to-transparent"></div>
    </section>
  );
};

export default ProjectsSection;
// 📁 /data/projects.ts - SOLO proyectos y trabajos destacados
// Separado de /data/experience.ts para mantener orden limpio

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string[]
  category: 'mvp' | 'portfolio' | 'competition' | 'personal' | 'client'
  technologies: string[]
  features?: string[]
  achievements?: string[]
  status: 'in-development' | 'completed' | 'live' | 'archived'
  startDate: string
  endDate?: string | 'Presente'
  url?: string
  github?: string
  demo?: string
  images?: string[]
  featured?: boolean
  priority?: number // Para ordenar proyectos
}

export const projects: Project[] = [
  // ===== MVPs DE LIVING STONES FOUNDATION =====
  {
    id: 'volunteer-metrics-hub',
    title: 'Volunteer Metrics Hub',
    description: 'Sistema completo de métricas y gestión para voluntarios de Living Stones Foundation con dashboard interactivo.',
    longDescription: [
      'Plataforma integral para gestión y análisis de métricas de voluntarios en organizaciones sin fines de lucro',
      'Sistema de encuestas estratégicas para líderes de grupo, HR y administradores',
      'Dashboard con visualizaciones en tiempo real y reportes automatizados',
      'Metodología de feedback iterativo para mejora continua del sistema'
    ],
    category: 'mvp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'React Hook Form', 'Chart.js'],
    features: [
      'Dashboard interactivo con métricas en tiempo real',
      'Sistema de encuestas personalizables',
      'Reportes automatizados y exportables',
      'Gestión de equipos y roles',
      'Notificaciones y alertas',
      'Integración con APIs externas'
    ],
    achievements: [
      'Prototipo funcional desplegado exitosamente',
      'Validación positiva de stakeholders',
      'Metodología de desarrollo iterativo implementada'
    ],
    status: 'live',
    startDate: 'Julio 2024',
    endDate: 'Presente',
    url: 'https://prototipo-metrics-hub-6uhq.vercel.app/login',
    featured: true,
    priority: 1
  },
  {
    id: 'emr-rural-system',
    title: 'EMR Rural Healthcare System',
    description: 'Sistema EMR/CMR especializado para centros de salud en áreas rurales con funcionalidades de IA predictiva.',
    longDescription: [
      'Sistema de gestión médica electrónica diseñado específicamente para centros de salud rurales',
      'Interfaz optimizada para conectividad limitada y recursos técnicos básicos',
      'Módulos de IA predictiva para diagnóstico y tratamiento',
      'Arquitectura escalable con estrategia de MVP de 3 versiones'
    ],
    category: 'mvp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'IA Predictiva'],
    features: [
      'Gestión de historias clínicas digitales',
      'Sistema de citas y agenda médica',
      'Módulo de inventario médico',
      'IA predictiva para diagnósticos',
      'Reportes epidemiológicos',
      'Sincronización offline/online'
    ],
    achievements: [
      'Estrategia de MVP de 3 versiones definida',
      'Metodología de validación rural implementada',
      'Prototipo en desarrollo con datos ficticios'
    ],
    status: 'in-development',
    startDate: 'Mayo 2024',
    endDate: 'Presente',
    featured: true,
    priority: 2
  },

  // ===== PORTAFOLIO IBM PROJECTS =====
  {
    id: 'ibm-projects-portfolio',
    title: 'IBM Full Stack Projects Portfolio',
    description: 'Colección completa de 6 proyectos Full Stack desarrollados durante la certificación IBM con tecnologías modernas.',
    longDescription: [
      'Repositorio integral con proyectos que demuestran competencias Full Stack',
      'Incluye microservicios, aplicaciones React, APIs REST y sistemas con IA',
      'Implementación de mejores prácticas de desarrollo y despliegue',
      'Documentación completa y código listo para producción'
    ],
    category: 'portfolio',
    technologies: ['React', 'Node.js', 'Express', 'Django', 'Flask', 'Go', 'Docker', 'Kubernetes', 'IBM Watson'],
    features: [
      'Microservicios con Docker y Kubernetes',
      'Aplicación React con Redux Toolkit',
      'APIs REST con autenticación JWT',
      'Sistema de detección de emociones con IA',
      'Plataforma educativa completa',
      'Orquestación de contenedores'
    ],
    achievements: [
      '6 proyectos completos y funcionales',
      'Arquitectura de microservicios implementada',
      'Integración exitosa con servicios de IA de IBM Watson',
      'Despliegues automatizados en múltiples plataformas cloud'
    ],
    status: 'completed',
    startDate: 'Enero 2024',
    endDate: 'Julio 2025',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    featured: true,
    priority: 3
  },
  {
    id: 'microservices-dealership',
    title: 'Dealership Evaluation - Microservices',
    description: 'Sistema de evaluación de concesionarios basado en arquitectura de microservicios con Docker.',
    longDescription: [
      'Aplicación distribuida con múltiples servicios independientes',
      'Gestión de productos, concesionarios y precios con comunicación entre servicios',
      'Implementación completa de patrones de microservicios',
      'Containerización y orquestación con Docker'
    ],
    category: 'portfolio',
    technologies: ['Python', 'Flask', 'Node.js', 'Express', 'Docker', 'Nginx', 'Microservices'],
    features: [
      'Microservicio de productos en Python/Flask',
      'Microservicio de concesionarios en Node.js/Express',
      'Frontend con templates HTML y Nginx',
      'Comunicación RESTful entre servicios',
      'Containerización completa con Docker'
    ],
    achievements: [
      'Arquitectura de microservicios funcional',
      'Comunicación exitosa entre servicios',
      'Despliegue automatizado con Docker Compose'
    ],
    status: 'completed',
    startDate: 'Marzo 2024',
    endDate: 'Abril 2024',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    priority: 4
  },
  {
    id: 'paradise-nursery-react',
    title: 'Paradise Nursery - React Shopping App',
    description: 'E-commerce SPA para tienda de plantas con React, Redux Toolkit y despliegue en Vercel.',
    longDescription: [
      'Aplicación de comercio electrónico completa para tienda de plantas',
      'Gestión de estado avanzada con Redux Toolkit',
      'Interfaz moderna y responsive',
      'Carrito de compras funcional y navegación fluida'
    ],
    category: 'portfolio',
    technologies: ['React', 'Redux Toolkit', 'Vite', 'CSS3', 'Vercel'],
    features: [
      'Catálogo de productos interactivo',
      'Carrito de compras con persistencia',
      'Categorías y filtros de plantas',
      'Interfaz responsive y moderna',
      'Gestión de estado con Redux'
    ],
    achievements: [
      'SPA completamente funcional',
      'Despliegue exitoso en Vercel',
      'Experiencia de usuario optimizada'
    ],
    status: 'live',
    startDate: 'Febrero 2024',
    endDate: 'Marzo 2024',
    url: 'https://ibm-projects.vercel.app',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    priority: 5
  },
  {
    id: 'emotion-detection-ai',
    title: 'Emotion Detection App - IBM Watson',
    description: 'Aplicación web de detección de emociones usando IBM Watson Natural Language Understanding.',
    longDescription: [
      'Sistema de análisis de texto para identificar emociones dominantes',
      'Integración con IBM Watson NLU para procesamiento de lenguaje natural',
      'Interfaz web interactiva con resultados en tiempo real',
      'API Flask robusta con manejo de errores'
    ],
    category: 'portfolio',
    technologies: ['Python', 'Flask', 'IBM Watson NLU', 'JavaScript', 'Bootstrap', 'HTML5'],
    features: [
      'Análisis de emociones en tiempo real',
      'Detección de alegría, tristeza, miedo, disgusto e ira',
      'Interfaz web intuitiva',
      'API RESTful con Flask',
      'Pruebas unitarias incluidas'
    ],
    achievements: [
      'Integración exitosa con IBM Watson',
      'Precisión alta en detección de emociones',
      'Interfaz usuario-friendly implementada'
    ],
    status: 'completed',
    startDate: 'Abril 2024',
    endDate: 'Mayo 2024',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    priority: 6
  },
  {
    id: 'online-courses-django',
    title: 'Sistema de Cursos Online - Django',
    description: 'Plataforma educativa completa con sistema de exámenes y calificación automática usando Django.',
    longDescription: [
      'Plataforma web full-stack para educación online',
      'Sistema completo de gestión de cursos y estudiantes',
      'Exámenes de opción múltiple con calificación automática',
      'Panel administrativo completo para instructores'
    ],
    category: 'portfolio',
    technologies: ['Python', 'Django', 'SQLite', 'Bootstrap 4', 'HTML5', 'JavaScript'],
    features: [
      'Gestión de usuarios y autenticación',
      'Cursos con lecciones organizadas',
      'Sistema de exámenes automatizado',
      'Resultados con retroalimentación detallada',
      'Panel administrativo Django',
      'Interfaz responsive'
    ],
    achievements: [
      'Sistema de exámenes completamente funcional',
      'Gestión de usuarios robusta',
      'Interfaz administrativa completa'
    ],
    status: 'completed',
    startDate: 'Mayo 2024',
    endDate: 'Junio 2024',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    priority: 7
  },
  {
    id: 'guestbook-kubernetes',
    title: 'Guestbook App - Kubernetes Deployment',
    description: 'Aplicación de libro de visitas desplegada en Kubernetes con autoescalado y gestión avanzada.',
    longDescription: [
      'Aplicación completa en Go con frontend responsive',
      'Despliegue en clúster Kubernetes con componentes Redis',
      'Autoescalado horizontal y rollback automático',
      'Integración con IBM Cloud Container Registry'
    ],
    category: 'portfolio',
    technologies: ['Go', 'HTML5', 'CSS3', 'jQuery', 'Kubernetes', 'Redis', 'Docker', 'IBM Cloud'],
    features: [
      'Backend robusto en Go',
      'Frontend responsive moderno',
      'Orquestación con Kubernetes',
      'Autoescalado basado en CPU',
      'Persistencia con Redis master-slave',
      'Rollback automático'
    ],
    achievements: [
      'Despliegue exitoso en Kubernetes',
      'Autoescalado funcionando correctamente',
      'Integración con registry en la nube'
    ],
    status: 'completed',
    startDate: 'Junio 2024',
    endDate: 'Julio 2024',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    priority: 8
  },

  // ===== PROYECTOS KAGGLE/COMPETENCIAS =====
  {
    id: 'kaggle-competitions',
    title: 'Kaggle Competitions Portfolio',
    description: 'Participación en múltiples competencias de Machine Learning con rankings top y soluciones innovadoras.',
    longDescription: [
      'Participación activa en competencias de Machine Learning y Data Science',
      'Múltiples top rankings incluyendo posición 28º en competencia destacada',
      'Especialización en NLP, series temporales y predicción',
      'Contribuciones a la comunidad con notebooks públicos'
    ],
    category: 'competition',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Jupyter'],
    features: [
      'Modelos de Machine Learning avanzados',
      'Preprocessing y feature engineering',
      'Ensemble methods y stacking',
      'Análisis exploratorio de datos',
      'Visualizaciones interactivas',
      'Notebooks documentados'
    ],
    achievements: [
      '8+ competencias completadas',
      'Ranking 28º como mejor posición',
      'Múltiples top 100 rankings',
      'Notebooks con upvotes de la comunidad'
    ],
    status: 'completed',
    startDate: 'Enero 2023',
    endDate: 'Presente',
    featured: true,
    priority: 9
  }
]

// ===== FUNCIONES DE UTILIDAD =====
export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}

export const getProjectsByStatus = (status: Project['status']) => {
  return projects.filter(project => project.status === status)
}

export const getLiveProjects = () => {
  return projects.filter(project => project.status === 'live')
}

export const getProjectsSortedByPriority = () => {
  return [...projects].sort((a, b) => (a.priority || 999) - (b.priority || 999))
}

export const getMVPProjects = () => {
  return getProjectsByCategory('mvp')
}

export const getPortfolioProjects = () => {
  return getProjectsByCategory('portfolio')
}

export const getCompetitionProjects = () => {
  return getProjectsByCategory('competition')
}
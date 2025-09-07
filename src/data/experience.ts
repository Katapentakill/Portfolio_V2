// 📁 /data/experience.ts - SOLO experiencia laboral, educación y certificaciones

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  type: 'work' | 'education' | 'certification'
  startDate: string
  endDate: string | 'Presente'
  description: string[]
  technologies?: string[]
  achievements?: string[]
  certificateUrl?: string
  featured?: boolean
}

export const experiences: Experience[] = [
  // ===== EXPERIENCIA PROFESIONAL =====
  {
    id: 'living-stones-project-dev',
    title: 'Project Developer (Global)',
    company: 'Living Stones Foundation',
    location: 'Remoto',
    type: 'work',
    startDate: 'Mayo 2025',
    endDate: 'Presente',
    description: [
      'Ascendido a rol global de Project Developer debido a habilidades excepcionales para iniciar proyectos complejos',
      'Lidero múltiples proyectos tecnológicos estratégicos para centros de salud rurales',
      'Diseño arquitecturas de software y metodologías de desarrollo para proyectos de impacto social',
      'Gestiono equipos multidisciplinarios y coordino con stakeholders internacionales'
    ],
    technologies: ['Project Management', 'Software Architecture', 'Team Leadership', 'Agile/Scrum'],
    achievements: [
      'Promoción de Big Data Analyst a Project Developer en menos de 6 meses',
      'Liderazgo en proyectos que impactan centros de salud rurales',
      'Gestión exitosa de equipos remotos internacionales'
    ],
    featured: true
  },
  {
    id: 'metrics-hub-lead',
    title: 'Project Leader - Volunteer Metrics Hub',
    company: 'Living Stones Foundation',
    location: 'Remoto',
    type: 'work',
    startDate: 'Julio 2025',
    endDate: 'Presente',
    description: [
      'Lidero el desarrollo completo del sistema de métricas para voluntarios de la organización',
      'Diseñé y ejecuté encuestas estratégicas para líderes de grupo, HR y administradores',
      'Desarrollo documento de brainstorming potente basado en feedback de stakeholders',
      'Superviso entrevistas de equipo y selección de tecnologías para el proyecto final'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Survey Design', 'Stakeholder Management'],
    achievements: [
      'Prototipo funcional desplegado con datos ficticios para validación',
      'Metodología de feedback iterativo implementada exitosamente',
      'Coordinación de múltiples stakeholders y equipos de desarrollo'
    ],
    featured: true
  },
  {
    id: 'emr-rural-dev',
    title: 'Project Developer - EMR Rural',
    company: 'Living Stones Foundation',
    location: 'Remoto',
    type: 'work',
    startDate: 'Marzo 2025',
    endDate: 'Presente',
    description: [
      'Evolución desde Big Data Analyst hasta Project Developer en sistema EMR/CMR rural',
      'Organizo y estructuro proyectos complejos para centros de salud en áreas rurales',
      'Desarrollo gráficos y visualizaciones para sistemas de gran escala y comportamiento complejo',
      'Diseño estrategia de MVP con 3 versiones: básica, media y avanzada'
    ],
    technologies: ['Big Data Analysis', 'Healthcare Systems', 'MVP Development', 'Data Visualization', 'Rural Healthcare Tech'],
    achievements: [
      'Transición exitosa de análisis de datos a desarrollo de productos',
      'Metodología innovadora de prototipado para validación en zonas rurales',
      'Estrategia de contacto y feedback con comunidades rurales'
    ],
    featured: true
  },

  // ===== EDUCACIÓN =====
  {
    id: 'ucn-ing-civil',
    title: 'Ingeniería Civil en Computación',
    company: 'Universidad Católica del Norte',
    location: 'Antofagasta, Chile',
    type: 'education',
    startDate: '2019',
    endDate: '2026',
    description: [
      'Último año de carrera con especialización en Ciencia de Datos y Big Data',
      'Enfoque en Machine Learning, Inteligencia Artificial y desarrollo de software',
      'Participación activa en competencias de programación y proyectos de investigación',
      'Desarrollo de tesis relacionada con aplicaciones de IA en salud rural'
    ],
    technologies: ['Computer Science', 'Data Science', 'Machine Learning', 'Software Engineering', 'Big Data'],
    achievements: [
      'Estudiante de último año con destacado rendimiento académico',
      'Especialización en tecnologías emergentes y IA',
      'Aplicación práctica de conocimientos en proyectos reales'
    ],
    featured: true
  },

  // ===== CERTIFICACIONES =====
  {
    id: 'ibm-backend-cert',
    title: 'IBM Back-End Development',
    company: 'IBM Skills Network',
    location: 'Online',
    type: 'certification',
    startDate: 'Enero 2025',
    endDate: 'Agosto 2025',
    description: [
      'Certificación profesional especializada en desarrollo Back-End con 11 cursos completados',
      'Dominio de herramientas y tecnologías usadas por desarrolladores back-end profesionales',
      'Experiencia práctica en Linux scripting, Git/GitHub, Python, SQL, Django, Containers',
      'Implementación de Microservices, Serverless, Application Security y Monitoring'
    ],
    technologies: [
      'Linux Scripting', 'Git', 'GitHub', 'Python', 'SQL', 'Django', 'Flask', 
      'Docker', 'Kubernetes', 'OpenShift', 'Microservices', 'Serverless',
      'Application Security', 'Monitoring', 'DevOps', 'Container Technologies'
    ],
    achievements: [
      '11 cursos especializados completados exitosamente',
      'Múltiples labs prácticos y proyectos hands-on realizados',
      'Back-end Application Development Capstone Project completado',
      'Preparación para roles entry-level en Back-End Development'
    ],
    certificateUrl: 'https://coursera.org/verify/professional-cert/DMJQX86T5NYO',
    featured: true
  },
  {
    id: 'ibm-fullstack-cert',
    title: 'IBM Full Stack Software Developer',
    company: 'IBM Skills Network',
    location: 'Online',
    type: 'certification',
    startDate: 'Enero 2025',
    endDate: 'Julio 2025',
    description: [
      'Certificación profesional completa en desarrollo Full Stack con 15 cursos especializados',
      'Desarrollo de aplicaciones Cloud Native con tecnologías modernas',
      'Experiencia práctica en DevOps, CI/CD, Containers, Docker, Kubernetes y OpenShift',
      'Implementación de soluciones SaaS usando metodologías Cloud Native'
    ],
    technologies: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Python', 'Django', 'Flask',
      'Docker', 'Kubernetes', 'OpenShift', 'Git', 'GitHub', 'Cloud Native', 'DevOps', 'CI/CD',
      'Microservices', 'Serverless', 'SQL', 'NoSQL', 'Bootstrap', 'Application Security'
    ],
    achievements: [
      '15 cursos completados exitosamente',
      'Múltiples aplicaciones desplegadas en la nube',
      'Proyecto Capstone Full Stack completado',
      'Entrega de solución SaaS usando metodologías Cloud Native'
    ],
    certificateUrl: 'https://coursera.org/verify/professional-cert/57LHVK4MJIZJ',
    featured: true
  }
]

export const getExperiencesByType = (type: Experience['type']) => {
  return experiences.filter(exp => exp.type === type)
}

export const getFeaturedExperiences = () => {
  return experiences.filter(exp => exp.featured)
}

export const getWorkExperience = () => {
  return getExperiencesByType('work')
}

export const getEducation = () => {
  return getExperiencesByType('education')
}

export const getCertifications = () => {
  return getExperiencesByType('certification')
}
// 📁 /data/projects.ts - SOLO proyectos y trabajos destacados
// Separado de /data/experience.ts para mantener orden limpio

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string[]
  category: 'mvp' | 'university' | 'ibm' | 'kaggle' | 'personal' | 'tools'
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

  // ===== PROYECTOS UNIVERSITARIOS UCN =====
  {
    id: 'fcab-comments-classifier',
    title: 'Clasificador de Comentarios FCAB - IA Desktop',
    description: 'Aplicación de escritorio con IA para análisis automático y clasificación inteligente de comentarios organizacionales.',
    longDescription: [
      'Sistema completo de análisis automático y clasificación inteligente de comentarios organizacionales',
      'Uso de Electron para aplicación desktop multiplataforma',
      'Integración con modelos NLP de Hugging Face y Sentence Transformers',
      'Conexión directa con SharePoint Online para procesamiento en tiempo real'
    ],
    category: 'university',
    technologies: ['Electron', 'Python', 'Hugging Face', 'Sentence Transformers', 'SharePoint', 'NLP', 'Machine Learning'],
    features: [
      'Análisis semántico con Sentence Transformers',
      'Integración con SharePoint Online',
      'Procesamiento de lenguaje natural multilingüe',
      'Interfaz moderna con tema claro/oscuro',
      'Clasificación automática de sentimientos',
      'Exportación de resultados analíticos'
    ],
    achievements: [
      'Modelo de IA con alta precisión en clasificación',
      'Integración exitosa con sistemas empresariales',
      'Interfaz usuario-friendly para usuarios no técnicos'
    ],
    status: 'completed',
    startDate: 'Marzo 2024',
    endDate: 'Julio 2024',
    github: 'https://github.com/Katapentakill/University_Projects',
    featured: true,
    priority: 3
  },
  {
    id: 'microservices-cicd',
    title: 'Microservicios con CI/CD - DevOps Completo',
    description: 'Plataforma distribuida con 8 microservicios dockerizados, pipelines CI/CD y orquestación completa.',
    longDescription: [
      'Sistema distribuido implementando 8 microservicios completamente dockerizados',
      'Pipelines de CI/CD automatizados usando GitHub Actions',
      'Orquestación completa con Docker Compose',
      'Load balancing con NGINX para alta disponibilidad'
    ],
    category: 'university',
    technologies: ['NestJS', 'Docker', 'GitHub Actions', 'NGINX', 'PostgreSQL', 'MongoDB', 'CI/CD', 'Microservices'],
    features: [
      '8 microservicios completamente containerizados',
      'Pipelines CI/CD con GitHub Actions',
      'Docker Compose para orquestación',
      'Load balancing con NGINX',
      'Monitoreo y logging distribuido',
      'Escalabilidad horizontal automática'
    ],
    achievements: [
      'Arquitectura de microservicios robusta implementada',
      'CI/CD totalmente automatizado',
      'Alta disponibilidad y escalabilidad lograda'
    ],
    status: 'completed',
    startDate: 'Enero 2024',
    endDate: 'Mayo 2024',
    github: 'https://github.com/Katapentakill/University_Projects',
    featured: true,
    priority: 4
  },
  {
    id: 'grpc-microservices-platform',
    title: 'Plataforma Microservicios gRPC',
    description: 'Sistema distribuido de 6 microservicios con comunicación gRPC, RabbitMQ y múltiples bases de datos.',
    longDescription: [
      'Sistema distribuido de 6 microservicios implementando comunicación gRPC',
      'Message broker con RabbitMQ para comunicación asíncrona',
      'Múltiples bases de datos especializadas por dominio',
      'API Gateway con load balancing para gestión centralizada'
    ],
    category: 'university',
    technologies: ['NestJS', 'gRPC', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'API Gateway', 'Event-Driven Architecture'],
    features: [
      '6 microservicios con comunicación gRPC',
      'RabbitMQ para eventos asíncronos',
      'Múltiples bases de datos especializadas',
      'API Gateway con load balancing',
      'Event-driven architecture',
      'Monitoreo distribuido'
    ],
    achievements: [
      'Comunicación inter-service eficiente con gRPC',
      'Event-driven architecture implementada',
      'Performance optimizado con message queues'
    ],
    status: 'completed',
    startDate: 'Agosto 2023',
    endDate: 'Diciembre 2023',
    github: 'https://github.com/Katapentakill/University_Projects',
    priority: 5
  },
  {
    id: 'virtubazaar-ecommerce',
    title: 'VirtuBazaar E-commerce Full Stack',
    description: 'Plataforma e-commerce completa con API backend, frontend web responsive y aplicación móvil.',
    longDescription: [
      'Solución full-stack que incluye API backend robusta con ASP.NET Core',
      'Frontend web responsive con Angular y Tailwind CSS',
      'Aplicación móvil multiplataforma con Ionic',
      'Sistema de autenticación JWT completo'
    ],
    category: 'university',
    technologies: ['ASP.NET Core', 'Angular', 'Ionic', 'SQLite', 'JWT', 'Tailwind CSS', 'TypeScript'],
    features: [
      'API REST robusta con ASP.NET Core',
      'Frontend web responsive con Angular',
      'Aplicación móvil con Ionic',
      'Sistema de autenticación JWT',
      'Gestión de productos y carritos',
      'Procesamiento de pagos'
    ],
    achievements: [
      'Aplicación full-stack completamente funcional',
      'Experiencia multiplataforma consistente',
      'Arquitectura escalable implementada'
    ],
    status: 'completed',
    startDate: 'Marzo 2023',
    endDate: 'Julio 2023',
    github: 'https://github.com/Katapentakill/University_Projects',
    priority: 6
  },
  {
    id: 'multi-database-api',
    title: 'API Multi-Base de Datos',
    description: 'Sistema backend robusto con NestJS gestionando múltiples conexiones de base de datos y autenticación JWT.',
    longDescription: [
      'API NestJS que gestiona usuarios, autenticación, facturas y videos',
      'Múltiples conexiones de base de datos especializadas',
      'Sistema de autenticación JWT con roles avanzados',
      'Generación automática de datos de prueba'
    ],
    category: 'university',
    technologies: ['NestJS', 'MariaDB', 'PostgreSQL', 'MongoDB', 'JWT', 'TypeORM', 'Swagger'],
    features: [
      'Arquitectura multi-base de datos',
      'Autenticación JWT con roles',
      'Validación automática de datos',
      'Generación de datos de prueba',
      'Documentación API con Swagger',
      'CRUD completo para múltiples entidades'
    ],
    achievements: [
      'Arquitectura multi-DB exitosamente implementada',
      'Sistema de autenticación robusto',
      'API completamente documentada'
    ],
    status: 'completed',
    startDate: 'Septiembre 2023',
    endDate: 'Noviembre 2023',
    github: 'https://github.com/Katapentakill/University_Projects',
    priority: 7
  },
  {
    id: 'portfolio-angular-cyberpunk',
    title: 'Portfolio Angular Cyberpunk',
    description: 'Portafolio personal con diseño cyberpunk, navegación dinámica y efectos audiovisuales inmersivos.',
    longDescription: [
      'Aplicación Angular con diseño cyberpunk futurista',
      'Navegación con scroll dinámico y efectos animados',
      'Sistema de música de fondo y efectos de escritura',
      'Grid responsive de proyectos con modales interactivos'
    ],
    category: 'university',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'CSS3', 'Animations'],
    features: [
      'Navegación con scroll dinámico',
      'Efectos de escritura animados',
      'Música de fondo cyberpunk',
      'Grid responsive de proyectos',
      'Modales interactivos',
      'Soporte bilingüe (ES/EN)'
    ],
    achievements: [
      'Experiencia audiovisual inmersiva',
      'Performance optimizado',
      'Diseño único y memorable'
    ],
    status: 'completed',
    startDate: 'Mayo 2023',
    endDate: 'Agosto 2023',
    github: 'https://github.com/Katapentakill/University_Projects',
    priority: 8
  },

  // ===== PROYECTOS IBM CERTIFICATION (FILTRADOS) =====
  {
    id: 'ibm-backend-microservices',
    title: 'Backend Microservicios Full Stack - IBM',
    description: 'Sistema completo de microservicios con Flask + Django para banda musical con testing y containerización.',
    longDescription: [
      'Sistema completo que integra tres microservicios independientes',
      'Microservicio Pictures (Flask), Songs (Flask) y Django Web App',
      'Testing automatizado con PyTest y cobertura 95%+',
      'Containerización con Docker Compose y Nginx como proxy reverso'
    ],
    category: 'ibm',
    technologies: ['Python', 'Flask', 'Django', 'Docker', 'Nginx', 'PostgreSQL', 'PyTest', 'Bootstrap 5'],
    features: [
      'Microservicio Pictures con CRUD completo',
      'Microservicio Songs con metadatos',
      'Django Web App con templates responsivos',
      'Testing completo con PyTest',
      'Docker Compose con 3 servicios',
      'UI moderna con Bootstrap 5'
    ],
    achievements: [
      'Arquitectura de microservicios completa',
      '95%+ cobertura de testing',
      'Despliegue cloud-ready'
    ],
    status: 'completed',
    startDate: 'Junio 2024',
    endDate: 'Julio 2024',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    featured: true,
    priority: 9
  },
  {
    id: 'ibm-microservice-evaluation',
    title: 'Evaluación de Concesionarios - Microservicios',
    description: 'Sistema distribuido con múltiples microservicios para evaluación de concesionarios con Docker.',
    longDescription: [
      'Sistema de evaluación de concesionarios basado en arquitectura de microservicios',
      'Integra microservicio de productos (Flask Python), concesionarios (Node.js Express) y frontend (Flask)',
      'Containerización completa con Docker Desktop y comunicación entre servicios',
      'Interface web integrada con dropdown de productos y precios por concesionario'
    ],
    category: 'ibm',
    technologies: ['Python', 'Flask', 'Node.js', 'Express', 'Docker', 'Nginx', 'HTML', 'JavaScript'],
    features: [
      'Microservicio de Productos (Flask - Puerto 5000)',
      'Microservicio de Concesionarios (Express - Puerto 8080)',
      'Frontend Flask con templates HTML (Puerto 5001)',
      'Containerización completa con Docker',
      'Comunicación RESTful entre servicios',
      'Interfaz integrada con Nginx'
    ],
    achievements: [
      'Arquitectura de microservicios distribuida funcional',
      'Comunicación exitosa entre servicios independientes',
      'Despliegue local completo con Docker Desktop'
    ],
    status: 'completed',
    startDate: 'Marzo 2024',
    endDate: 'Abril 2024',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    featured: true,
    priority: 10
  },
  {
    id: 'ibm-react-ecommerce',
    title: 'Paradise Nursery React - IBM',
    description: 'E-commerce SPA para tienda de plantas con React, Redux Toolkit y despliegue en Vercel.',
    longDescription: [
      'Aplicación de comercio electrónico completa para tienda de plantas',
      'Gestión de estado avanzada con Redux Toolkit',
      'Interfaz moderna y responsive con Vite',
      'Carrito de compras funcional y navegación fluida'
    ],
    category: 'ibm',
    technologies: ['React', 'Redux Toolkit', 'Vite', 'CSS3', 'Vercel'],
    features: [
      'Catálogo de productos interactivo',
      'Carrito de compras con persistencia',
      'Categorías y filtros de plantas',
      'Interfaz responsive moderna',
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
    priority: 11
  },
  {
    id: 'ibm-emotion-detection',
    title: 'Emotion Detection - IBM Watson',
    description: 'Aplicación web de detección de emociones usando IBM Watson Natural Language Understanding.',
    longDescription: [
      'Integración con IBM Watson NLU para procesamiento de lenguaje natural',
      'Interfaz web interactiva con resultados en tiempo real',
      'Conexión directa con API de IBM Watson para análisis de emociones',
      'Frontend simple con formulario de entrada de texto'
    ],
    category: 'ibm',
    technologies: ['Python', 'Flask', 'IBM Watson NLU', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Integración con API IBM Watson NLU',
      'Análisis de emociones en tiempo real',
      'Interfaz web intuitiva',
      'Detección de alegría, tristeza, miedo, disgusto e ira',
      'Formulario de entrada de texto'
    ],
    achievements: [
      'Integración exitosa con IBM Watson API',
      'Conexión funcional con servicios de NLU',
      'Interfaz usuario-friendly implementada'
    ],
    status: 'completed',
    startDate: 'Abril 2024',
    endDate: 'Mayo 2024',
    github: 'https://github.com/Katapentakill/IBM_Projects',
    priority: 12
  },

  // ===== PROYECTOS KAGGLE/DATA SCIENCE =====
  {
    id: 'kaggle-competitions-portfolio',
    title: 'Kaggle Competitions Portfolio',
    description: 'Portafolio completo de 7+ competencias de Machine Learning con rankings top y soluciones innovadoras.',
    longDescription: [
      'Participación activa en 7+ competencias de Machine Learning cubriendo múltiples dominios',
      'Competencias completadas: Titanic, Space-Titanic, Store Sales Forecasting, Natural Disaster Tweets, EEDI NLP, House Prices, BrisT1D',
      'Especialización en NLP con fine-tuning de DistilBERT y Flan-T5',
      'Ensemble methods avanzados: StackingClassifier con 4 algoritmos base + Ridge meta-learner',
      'Time series forecasting con CatBoost y feature engineering temporal'
    ],
    category: 'kaggle',
    technologies: [
      'Python', 'Scikit-learn', 'CatBoost', 'XGBoost', 'LightGBM', 
      'PyTorch', 'Transformers', 'DistilBERT', 'Flan-T5', 'Pandas', 'NumPy'
    ],
    features: [
      'Titanic: StackingClassifier con 4 algoritmos + meta-learner',
      'Space-Titanic: Feature engineering contextual espacial',
      'Store Sales: Time series con múltiples fuentes de datos',
      'Disaster Tweets: Fine-tuning DistilBERT con layer freezing',
      'EEDI: Fine-tuning Flan-T5 para misconceptions matemáticos',
      'House Prices: Meta-modelado con pipeline robusto',
      'BrisT1D: XGBoost médico-específico optimizado'
    ],
    achievements: [
      '7+ competencias completadas exitosamente',
      'Rankings competitivos en múltiples dominios',
      'Expertise demostrado en NLP, time series, classification y regression',
      'Contribuciones públicas con notebooks de alta valoración'
    ],
    status: 'completed',
    startDate: 'Enero 2023',
    endDate: 'Presente',
    github: 'https://github.com/Katapentakill/data-science-portfolio',
    featured: true,
    priority: 13
  },
  {
    id: 'house-prices-regression',
    title: 'House Prices Advanced Regression',
    description: 'Predicción de precios de viviendas con técnicas avanzadas de regresión y ensemble methods.',
    longDescription: [
      'Solución completa para la competición de Kaggle House Prices utilizando técnicas avanzadas de regresión',
      'Pipeline exhaustivo de análisis exploratorio, limpieza de datos y feature engineering',
      'Implementación de meta-modelado (stacking) con Ridge Regression como meta-estimador',
      'Manejo robusto de valores nulos con KNN Imputation y estrategias diferenciadas'
    ],
    category: 'kaggle',
    technologies: ['Python', 'Scikit-learn', 'CatBoost', 'XGBoost', 'LightGBM', 'Pandas', 'NumPy', 'Seaborn', 'SHAP'],
    features: [
      'Análisis de correlación y filtrado de características',
      'KNN Imputation para variables numéricas',
      'Meta-modelado con stacking ensemble',
      'Transformación logarítmica de variable objetivo',
      'Eliminación sistemática de características con baja variabilidad',
      'Visualizaciones comprehensivas para EDA'
    ],
    achievements: [
      'Pipeline de limpieza reproducible implementado',
      'Stacking ensemble con mejora significativa de RMSE',
      'Manejo robusto de 79 características descriptivas'
    ],
    status: 'completed',
    startDate: 'Agosto 2023',
    endDate: 'Septiembre 2023',
    github: 'https://github.com/Katapentakill/data-science-portfolio',
    priority: 14
  },
  {
    id: 'brist1d-glucose-prediction',
    title: 'BrisT1D Blood Glucose Prediction',
    description: 'Predicción de niveles de glucosa en sangre para pacientes con diabetes tipo 1 usando XGBoost optimizado.',
    longDescription: [
      'Sistema predictivo para niveles de glucosa en sangre (bg+1:00) en pacientes con diabetes tipo 1',
      'Ingeniería de características temporales específica para datos médicos',
      'Optimización de hiperparámetros con RandomizedSearchCV y 5-fold cross-validation',
      'Análisis de sesgo y visualización especializada para contexto clínico'
    ],
    category: 'kaggle',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'RandomizedSearchCV'],
    features: [
      'Transformación logarítmica para normalización de datos glucémicos',
      'Ingeniería temporal: descomposición en hours, minutes, total_minutes',
      'Manejo de patrones circadianos en metabolismo de glucosa',
      'Optimización sistemática de hiperparámetros XGBoost',
      'Análisis de sesgo para validación médica',
      'Visualización predicciones vs. valores reales'
    ],
    achievements: [
      'Modelo médico-específico con XGBoost optimizado',
      'Ingeniería temporal capturando ritmos circadianos',
      'Pipeline robusto para datos de monitoreo continuo de glucosa'
    ],
    status: 'completed',
    startDate: 'Octubre 2023',
    endDate: 'Noviembre 2023',
    github: 'https://github.com/Katapentakill/data-science-portfolio',
    priority: 15
  },
  {
    id: 'geoscience-analysis',
    title: 'Análisis Geoespacial - Ciencia de Datos',
    description: 'Proyectos de análisis científico en climatología y sismología con visualizaciones interactivas.',
    longDescription: [
      'Análisis exploratorio científico en geociencias',
      'Investigación sobre cambio climático con datos meteorológicos',
      'Análisis sísmico de Chile (1976-2021) con visualizaciones temporales',
      'Uso de APIs científicas como Open-Meteo para datos en tiempo real'
    ],
    category: 'kaggle',
    technologies: ['Python', 'GeoPandas', 'Folium', 'Plotly', 'Open-Meteo API', 'Matplotlib', 'Seaborn'],
    features: [
      'Análisis geoespacial avanzado',
      'Visualizaciones interactivas con mapas',
      'Series temporales meteorológicas',
      'Animaciones temporales de eventos sísmicos',
      'Integración con APIs científicas',
      'Reportes automatizados'
    ],
    achievements: [
      'Análisis científico riguroso implementado',
      'Visualizaciones impactantes generadas',
      'Integración exitosa con fuentes de datos reales'
    ],
    status: 'completed',
    startDate: 'Junio 2023',
    endDate: 'Diciembre 2023',
    github: 'https://github.com/Katapentakill/data-science-portfolio',
    priority: 16
  },

  // ===== HERRAMIENTAS Y UTILITIES =====
  {
    id: 'web-scraping-tools',
    title: 'Herramientas de Web Scraping',
    description: 'Herramientas de automatización y web scraping con Node.js, Puppeteer y navegación programática.',
    longDescription: [
      'Herramientas de automatización y web scraping especializadas',
      'Extracción automatizada de noticias criminológicas',
      'Sistemas de scroll infinito y navegación programática',
      'Manejo robusto de errores y reintentos automáticos'
    ],
    category: 'tools',
    technologies: ['Node.js', 'Puppeteer', 'JavaScript', 'Chromium', 'Web Scraping'],
    features: [
      'Web scraping con contenido dinámico',
      'Scroll infinito automatizado',
      'Navegación programática robusta',
      'Extracción selectiva de información',
      'Manejo de errores avanzado',
      'Monitoreo automatizado'
    ],
    achievements: [
      'Herramientas de scraping robustas',
      'Automatización exitosa de procesos',
      'Extracción de datos confiable'
    ],
    status: 'completed',
    startDate: 'Abril 2023',
    endDate: 'Agosto 2023',
    github: 'https://github.com/Katapentakill/data-science-portfolio',
    priority: 17
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

export const getUniversityProjects = () => {
  return getProjectsByCategory('university')
}

export const getIBMProjects = () => {
  return getProjectsByCategory('ibm')
}

export const getKaggleProjects = () => {
  return getProjectsByCategory('kaggle')
}

export const getToolsProjects = () => {
  return getProjectsByCategory('tools')
}
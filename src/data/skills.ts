export interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "AI/ML" | "Data" | "Cloud/DevOps" | "Tools" | "Databases";
  iconifyIcon?: string;
  deviconIcon?: string;
  image?: string;
  level?: number; // Porcentaje de dominio
  featured?: boolean; // Para destacar habilidades principales
}

export const skills: Skill[] = [
  // Languages - Basado en tu experiencia real del CV (niveles actualizados)
  { name: "Python", category: "Languages", iconifyIcon: "logos:python", level: 98, featured: true },
  { name: "TypeScript", category: "Languages", iconifyIcon: "logos:typescript-icon", level: 90, featured: true },
  { name: "JavaScript", category: "Languages", iconifyIcon: "logos:javascript", level: 90, featured: true },
  { name: "C#", category: "Languages", iconifyIcon: "logos:c-sharp", level: 75 },
  { name: "SQL", category: "Languages", iconifyIcon: "logos:mysql", level: 85 },
  { name: "HTML5", category: "Languages", iconifyIcon: "logos:html-5", level: 85 },
  { name: "CSS3", category: "Languages", iconifyIcon: "logos:css-3", level: 80 },

  // Frameworks - Según tus proyectos del CV (niveles actualizados)
  { name: "NestJS", category: "Frameworks", iconifyIcon: "logos:nestjs", level: 85, featured: true },
  { name: "Angular", category: "Frameworks", iconifyIcon: "logos:angular-icon", level: 80, featured: true },
  { name: "Next.js", category: "Frameworks", iconifyIcon: "logos:nextjs-icon", level: 70 },
  { name: "React", category: "Frameworks", iconifyIcon: "logos:react", level: 75 },
  { name: "Django", category: "Frameworks", iconifyIcon: "logos:django", level: 75 },
  { name: "Flask", category: "Frameworks", iconifyIcon: "logos:flask", level: 85 },
  { name: "Express", category: "Frameworks", iconifyIcon: "logos:express", level: 85 },
  { name: "Ionic", category: "Frameworks", iconifyIcon: "logos:ionic-icon", level: 75 },
  { name: "ASP.NET", category: "Frameworks", iconifyIcon: "logos:dotnet", level: 70 },
  { name: "Node.js", category: "Frameworks", iconifyIcon: "logos:nodejs-icon", level: 90 },
  { name: "Electron", category: "Frameworks", iconifyIcon: "logos:electron", level: 75 },

  // AI/ML - Tu fuerte según Kaggle y proyectos (expandido significativamente)
  { name: "Scikit-learn", category: "AI/ML", iconifyIcon: "logos:scikit-learn", level: 98, featured: true },
  { name: "XGBoost", category: "AI/ML", iconifyIcon: "simple-icons:xgboost", level: 95, featured: true },
  { name: "CatBoost", category: "AI/ML", image: "/catboost-icon.png", level: 90, featured: true },
  { name: "LightGBM", category: "AI/ML", image: "/lightgbm-icon.png", level: 88 },
  { name: "PyTorch", category: "AI/ML", iconifyIcon: "logos:pytorch", level: 80 },
  { name: "Transformers", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 80 },
  { name: "BERT", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 75 },
  { name: "DistilBERT", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 85 },
  { name: "Flan-T5", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 85 },
  { name: "Sentence Transformers", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 75 },
  { name: "OpenAI API", category: "AI/ML", iconifyIcon: "simple-icons:openai", level: 75 },
  
  // AI/ML - Técnicas avanzadas específicas de tus competencias
  { name: "Ensemble Methods", category: "AI/ML", iconifyIcon: "simple-icons:tensorflow", level: 95, featured: true },
  { name: "Stacking Classifier", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 90 },
  { name: "RandomizedSearchCV", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 85 },
  { name: "Hyperparameter Tuning", category: "AI/ML", iconifyIcon: "simple-icons:optuna", level: 85 },
  { name: "Cross Validation", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 90 },
  { name: "Feature Engineering", category: "AI/ML", iconifyIcon: "simple-icons:pandas", level: 95, featured: true },
  { name: "Time Series Forecasting", category: "AI/ML", iconifyIcon: "simple-icons:plotly", level: 85 },
  { name: "Meta-Learning", category: "AI/ML", iconifyIcon: "simple-icons:tensorflow", level: 80 },
  { name: "Fine-tuning", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 85, featured: true },
  { name: "Transfer Learning", category: "AI/ML", iconifyIcon: "logos:pytorch", level: 80 },
  { name: "Layer Freezing", category: "AI/ML", iconifyIcon: "logos:pytorch", level: 75 },
  { name: "Prompt Engineering", category: "AI/ML", iconifyIcon: "simple-icons:openai", level: 80 },
  { name: "Model Evaluation", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 90 },
  { name: "RMSE Optimization", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 85 },
  { name: "F1 Score", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 85 },
  { name: "mAP@25", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 80 },
  { name: "Cosine Similarity", category: "AI/ML", iconifyIcon: "simple-icons:scikitlearn", level: 80 },
  { name: "Medical Data Analysis", category: "AI/ML", iconifyIcon: "simple-icons:healthcare", level: 80 },
  { name: "Educational NLP", category: "AI/ML", iconifyIcon: "simple-icons:google-scholar", level: 85 },
  { name: "Disaster Detection", category: "AI/ML", iconifyIcon: "simple-icons:emergency", level: 80 },
  { name: "Retail Forecasting", category: "AI/ML", iconifyIcon: "simple-icons:shopify", level: 85 },

  // Data - Herramientas que usas constantemente (niveles actualizados y expandidas)
  { name: "Pandas", category: "Data", iconifyIcon: "logos:pandas", level: 98, featured: true },
  { name: "NumPy", category: "Data", iconifyIcon: "logos:numpy", level: 95, featured: true },
  { name: "Matplotlib", category: "Data", iconifyIcon: "logos:matplotlib-icon", level: 90 },
  { name: "Seaborn", category: "Data", image: "/seaborn-icon.png", level: 85 },
  { name: "Plotly", category: "Data", iconifyIcon: "logos:plotly-icon", level: 80 },
  { name: "GeoPandas", category: "Data", image: "/geopandas-icon.png", level: 75 },
  { name: "Folium", category: "Data", image: "/folium-icon.png", level: 70 },
  { name: "Power BI", category: "Data", iconifyIcon: "logos:microsoft-power-bi", level: 75 },
  { name: "Polars", category: "Data", image: "/polars-icon.png", level: 70 },
  
  // Data - Técnicas avanzadas específicas
  { name: "KNN Imputation", category: "Data", iconifyIcon: "simple-icons:scikitlearn", level: 85 },
  { name: "Correlation Analysis", category: "Data", iconifyIcon: "simple-icons:pandas", level: 90 },
  { name: "Statistical Analysis", category: "Data", iconifyIcon: "simple-icons:scipy", level: 85 },
  { name: "Data Cleaning", category: "Data", iconifyIcon: "simple-icons:pandas", level: 95, featured: true },
  { name: "Exploratory Data Analysis", category: "Data", iconifyIcon: "simple-icons:jupyter", level: 95, featured: true },
  { name: "Data Transformation", category: "Data", iconifyIcon: "simple-icons:numpy", level: 90 },
  { name: "Geospatial Analysis", category: "Data", iconifyIcon: "simple-icons:openstreetmap", level: 80 },
  { name: "Time Series Analysis", category: "Data", iconifyIcon: "simple-icons:plotly", level: 85 },
  { name: "Temporal Feature Engineering", category: "Data", iconifyIcon: "simple-icons:pandas", level: 90 },

  // Cloud/DevOps - Según tu proyecto de microservicios (niveles actualizados - skills IBM filtradas)
  { name: "Docker", category: "Cloud/DevOps", iconifyIcon: "logos:docker-icon", level: 90, featured: true },
  { name: "Docker Compose", category: "Cloud/DevOps", iconifyIcon: "logos:docker-icon", level: 80 },
  { name: "Kubernetes", category: "Cloud/DevOps", iconifyIcon: "logos:kubernetes", level: 75 },
  { name: "gRPC", category: "Cloud/DevOps", iconifyIcon: "logos:grpc", level: 75 },
  { name: "NGINX", category: "Cloud/DevOps", iconifyIcon: "logos:nginx", level: 70 },
  { name: "RabbitMQ", category: "Cloud/DevOps", iconifyIcon: "logos:rabbitmq-icon", level: 70 },
  { name: "GitHub Actions", category: "Cloud/DevOps", iconifyIcon: "logos:github-actions", level: 75 },
  { name: "IBM Cloud", category: "Cloud/DevOps", iconifyIcon: "logos:ibm", level: 70 },
  { name: "IBM Watson NLU", category: "Cloud/DevOps", iconifyIcon: "logos:ibm", level: 75 },
  { name: "Vercel", category: "Cloud/DevOps", iconifyIcon: "logos:vercel-icon", level: 75 },
  { name: "Railway", category: "Cloud/DevOps", iconifyIcon: "simple-icons:railway", level: 70 },
  { name: "Gunicorn", category: "Cloud/DevOps", iconifyIcon: "simple-icons:gunicorn", level: 70 },
  { name: "Microservices Architecture", category: "Cloud/DevOps", iconifyIcon: "simple-icons:microservices", level: 85, featured: true },
  { name: "Container Orchestration", category: "Cloud/DevOps", iconifyIcon: "logos:kubernetes", level: 80 },
  { name: "Multi-service Communication", category: "Cloud/DevOps", iconifyIcon: "simple-icons:api", level: 85 },

  // Tools - Herramientas que usas (skills IBM filtradas)
  { name: "Visual Studio Code", category: "Tools", iconifyIcon: "logos:visual-studio-code", level: 95, featured: true },
  { name: "Git", category: "Tools", iconifyIcon: "logos:git-icon", level: 90, featured: true },
  { name: "GitHub", category: "Tools", iconifyIcon: "logos:github-icon", level: 90, featured: true },
  { name: "Kaggle Notebooks", category: "Tools", iconifyIcon: "simple-icons:kaggle", level: 95, featured: true },
  { name: "Jupyter Notebooks", category: "Tools", iconifyIcon: "simple-icons:jupyter", level: 95, featured: true },
  { name: "Puppeteer", category: "Tools", iconifyIcon: "logos:puppeteer", level: 80 },
  { name: "Postman", category: "Tools", iconifyIcon: "logos:postman-icon", level: 85 },
  { name: "Visual Studio", category: "Tools", iconifyIcon: "logos:visual-studio", level: 80 },
  { name: "JWT", category: "Tools", iconifyIcon: "logos:jwt-icon", level: 80 },
  { name: "TailwindCSS", category: "Tools", iconifyIcon: "logos:tailwindcss-icon", level: 85 },
  { name: "Bootstrap", category: "Tools", iconifyIcon: "logos:bootstrap", level: 85 },
  { name: "Cloudinary", category: "Tools", iconifyIcon: "logos:cloudinary-icon", level: 75 },
  { name: "curl", category: "Tools", iconifyIcon: "simple-icons:curl", level: 80 },
  { name: "Axios", category: "Tools", iconifyIcon: "simple-icons:axios", level: 85 },
  { name: "PyTest", category: "Tools", iconifyIcon: "simple-icons:pytest", level: 90 },
  { name: "express-session", category: "Tools", iconifyIcon: "logos:express", level: 75 },
  { name: "RESTful API Design", category: "Tools", iconifyIcon: "simple-icons:swagger", level: 90, featured: true },
  { name: "Vite", category: "Tools", iconifyIcon: "logos:vitejs", level: 80 },
  { name: "SHAP", category: "Tools", iconifyIcon: "simple-icons:python", level: 75 },
  { name: "Optuna", category: "Tools", iconifyIcon: "simple-icons:optuna", level: 70 },
  { name: "Redux Toolkit", category: "Tools", iconifyIcon: "logos:redux", level: 75 },

  // Databases - Según tus proyectos
  { name: "SQLite", category: "Databases", iconifyIcon: "logos:sqlite", level: 80 },
  { name: "MySQL", category: "Databases", iconifyIcon: "logos:mysql-icon", level: 75 },
  { name: "MariaDB", category: "Databases", iconifyIcon: "logos:mariadb-icon", level: 75 },
  { name: "MongoDB", category: "Databases", iconifyIcon: "logos:mongodb-icon", level: 70 },
  { name: "PostgreSQL", category: "Databases", iconifyIcon: "logos:postgresql", level: 70 },
];

// ===== FUNCIONES DE UTILIDAD =====
export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter(skill => skill.category === category)
}

export const getFeaturedSkills = () => {
  return skills.filter(skill => skill.featured)
}

export const getSkillsByLevel = (minLevel: number) => {
  return skills.filter(skill => (skill.level || 0) >= minLevel)
}

export const getLanguages = () => {
  return getSkillsByCategory('Languages')
}

export const getFrameworks = () => {
  return getSkillsByCategory('Frameworks')
}

export const getAIMLSkills = () => {
  return getSkillsByCategory('AI/ML')
}

export const getDataSkills = () => {
  return getSkillsByCategory('Data')
}

export const getCloudDevOpsSkills = () => {
  return getSkillsByCategory('Cloud/DevOps')
}

export const getToolsSkills = () => {
  return getSkillsByCategory('Tools')
}

export const getDatabaseSkills = () => {
  return getSkillsByCategory('Databases')
}

export const getTopSkills = () => {
  return skills.filter(skill => (skill.level || 0) >= 85).sort((a, b) => (b.level || 0) - (a.level || 0))
}

export const getDataScienceSkills = () => {
  return skills.filter(skill => 
    skill.category === 'AI/ML' || 
    skill.category === 'Data' ||
    (skill.category === 'Tools' && ['Kaggle Notebooks', 'Jupyter Notebooks', 'SHAP', 'Optuna'].includes(skill.name))
  ).sort((a, b) => (b.level || 0) - (a.level || 0))
}
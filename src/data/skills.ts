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
  // Languages - Basado en tu experiencia real del CV
  { name: "Python", category: "Languages", iconifyIcon: "logos:python", level: 95, featured: true },
  { name: "TypeScript", category: "Languages", iconifyIcon: "logos:typescript-icon", level: 90, featured: true },
  { name: "JavaScript", category: "Languages", iconifyIcon: "logos:javascript", level: 90, featured: true },
  { name: "C#", category: "Languages", iconifyIcon: "logos:c-sharp", level: 75 },
  { name: "SQL", category: "Languages", iconifyIcon: "logos:mysql", level: 85 },

  // Frameworks - Según tus proyectos del CV
  { name: "NestJS", category: "Frameworks", iconifyIcon: "logos:nestjs", level: 85, featured: true },
  { name: "Angular", category: "Frameworks", iconifyIcon: "logos:angular-icon", level: 80, featured: true },
  { name: "Next.js", category: "Frameworks", iconifyIcon: "logos:nextjs-icon", level: 70 }, // Nuevo - aprendiendo
  { name: "Ionic", category: "Frameworks", iconifyIcon: "logos:ionic-icon", level: 75 },
  { name: "ASP.NET", category: "Frameworks", iconifyIcon: "logos:dotnet", level: 70 },
  { name: "Node.js", category: "Frameworks", iconifyIcon: "logos:nodejs-icon", level: 85 },
  { name: "Electron", category: "Frameworks", iconifyIcon: "logos:electron", level: 75 },

  // AI/ML - Tu fuerte según Kaggle y proyectos
  { name: "Scikit-learn", category: "AI/ML", iconifyIcon: "logos:scikit-learn", level: 95, featured: true },
  { name: "XGBoost", category: "AI/ML", iconifyIcon: "simple-icons:xgboost", level: 90, featured: true },
  { name: "LightGBM", category: "AI/ML", image: "/lightgbm-icon.png", level: 85 },
  { name: "CatBoost", category: "AI/ML", image: "/catboost-icon.png", level: 85 },
  { name: "PyTorch", category: "AI/ML", iconifyIcon: "logos:pytorch", level: 80 },
  { name: "Transformers", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 80 },
  { name: "BERT", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 75 },
  { name: "Sentence Transformers", category: "AI/ML", iconifyIcon: "logos:huggingface-icon", level: 75 },

  // Data - Herramientas que usas constantemente
  { name: "Pandas", category: "Data", iconifyIcon: "logos:pandas", level: 95, featured: true },
  { name: "NumPy", category: "Data", iconifyIcon: "logos:numpy", level: 90, featured: true },
  { name: "Matplotlib", category: "Data", iconifyIcon: "logos:matplotlib-icon", level: 85 },
  { name: "Seaborn", category: "Data", image: "/seaborn-icon.png", level: 80 },
  { name: "Power BI", category: "Data", iconifyIcon: "logos:microsoft-power-bi", level: 75 }, // Nuevo según certificación
  { name: "Polars", category: "Data", image: "/polars-icon.png", level: 70 },

  // Cloud/DevOps - Según tu proyecto de microservicios
  { name: "Docker", category: "Cloud/DevOps", iconifyIcon: "logos:docker-icon", level: 85, featured: true },
  { name: "Docker Compose", category: "Cloud/DevOps", iconifyIcon: "logos:docker-icon", level: 80 },
  { name: "gRPC", category: "Cloud/DevOps", iconifyIcon: "logos:grpc", level: 75 },
  { name: "NGINX", category: "Cloud/DevOps", iconifyIcon: "logos:nginx", level: 70 },
  { name: "RabbitMQ", category: "Cloud/DevOps", iconifyIcon: "logos:rabbitmq-icon", level: 70 },
  { name: "GitHub Actions", category: "Cloud/DevOps", iconifyIcon: "logos:github-actions", level: 75 },
  { name: "Railway", category: "Cloud/DevOps", iconifyIcon: "simple-icons:railway", level: 70 }, // Files.io alternativa común para deployment

  // Tools - Herramientas que usas
  { name: "Puppeteer", category: "Tools", iconifyIcon: "logos:puppeteer", level: 80 },
  { name: "Postman", category: "Tools", iconifyIcon: "logos:postman-icon", level: 85 },
  { name: "Visual Studio", category: "Tools", iconifyIcon: "logos:visual-studio", level: 80 },
  { name: "GitHub", category: "Tools", iconifyIcon: "logos:github-icon", level: 90 },
  { name: "JWT", category: "Tools", iconifyIcon: "logos:jwt-icon", level: 75 },
  { name: "TailwindCSS", category: "Tools", iconifyIcon: "logos:tailwindcss-icon", level: 85 },
  { name: "Cloudinary", category: "Tools", iconifyIcon: "logos:cloudinary-icon", level: 75 },

  // Databases - Según tus proyectos
  { name: "SQLite", category: "Databases", iconifyIcon: "logos:sqlite", level: 80 },
  { name: "MySQL", category: "Databases", iconifyIcon: "logos:mysql-icon", level: 75 },
  { name: "MariaDB", category: "Databases", iconifyIcon: "logos:mariadb-icon", level: 75 },
  { name: "MongoDB", category: "Databases", iconifyIcon: "logos:mongodb-icon", level: 70 },
  { name: "PostgreSQL", category: "Databases", iconifyIcon: "logos:postgresql", level: 70 },
];
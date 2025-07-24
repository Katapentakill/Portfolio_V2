export interface Skill {
  name: string;
  category: "Languages" | "AI/ML" | "Data" | "Cloud" | "Tools";
  iconifyIcon?: string;    // nombre del icono de Iconify
  deviconIcon?: string;    // nombre base del icono en Devicon
  image?: string;          // imagen local si no hay ninguno
}

export const skills: Skill[] = [
  { name: "Python", category: "Languages", iconifyIcon: "logos:python", deviconIcon: "python" },
  { name: "TypeScript", category: "Languages", iconifyIcon: "logos:typescript-icon", deviconIcon: "typescript" },
  { name: "SQL", category: "Languages", iconifyIcon: "logos:mysql", deviconIcon: "mysql" },
  { name: "R", category: "Languages", iconifyIcon: "logos:r-lang", deviconIcon: "r" },
  { name: "Bash", category: "Languages", iconifyIcon: "logos:gnu-bash", deviconIcon: "bash" },

  { name: "PyTorch", category: "AI/ML", iconifyIcon: "logos:pytorch", deviconIcon: "pytorch" },
  { name: "TensorFlow", category: "AI/ML", iconifyIcon: "logos:tensorflow", deviconIcon: "tensorflow" },
  { name: "OpenCV", category: "AI/ML", iconifyIcon: "logos:opencv", deviconIcon: "opencv" },
  { name: "Transformers", category: "AI/ML", iconifyIcon: "logos:huggingface-icon" },

  { name: "Pandas", category: "Data", iconifyIcon: "logos:pandas", deviconIcon: "pandas" },
  { name: "NumPy", category: "Data", iconifyIcon: "logos:numpy", deviconIcon: "numpy" },
  { name: "Plotly", category: "Data", iconifyIcon: "logos:plotly" },

  { name: "Docker", category: "Cloud", iconifyIcon: "logos:docker-icon", deviconIcon: "docker" },
  { name: "Kubernetes", category: "Cloud", iconifyIcon: "logos:kubernetes", deviconIcon: "kubernetes" },
  { name: "AWS", category: "Cloud", iconifyIcon: "logos:aws", deviconIcon: "amazonwebservices" },
  { name: "GCP", category: "Cloud", iconifyIcon: "logos:google-cloud", deviconIcon: "googlecloud" },
  { name: "Azure", category: "Cloud", iconifyIcon: "logos:microsoft-azure", deviconIcon: "azure" },
];

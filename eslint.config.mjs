import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 🔥 DESACTIVAR REGLAS PROBLEMÁTICAS PARA EL BUILD
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn", 
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "warn",
      
      // 🔥 REGLAS ESPECÍFICAS PARA SILENT HILL PORTFOLIO
      "prefer-const": "warn",
      "no-console": "off", // Para debugging
      "@typescript-eslint/ban-ts-comment": "warn",
      
      // 🔥 PERMITIR ALGUNOS PATRONES COMUNES
      "@typescript-eslint/no-empty-function": "warn",
      "react/display-name": "off",
      "import/no-anonymous-default-export": "off"
    },
    ignorePatterns: [
      "node_modules/",
      ".next/",
      "out/",
      "public/",
      "*.config.js",
      "*.config.mjs"
    ]
  }
];

export default eslintConfig;
import {
  SiDocker,
  SiDbeaver,
  SiInsomnia,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { Server } from "lucide-react";

export interface Tool {
  name: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export interface ToolCategory {
  category: string;
  tools: Tool[];
}

export const toolboxData: ToolCategory[] = [
  {
    category: "DevOps & Infra",
    tools: [
      {
        name: "Docker",
        description:
          "Essencial para padronizar ambientes de desenvolvimento e garantir que não exista o problema de 'na minha máquina funciona'.",
        icon: <SiDocker />,
        gradientFrom: "#0db7ed",
        gradientTo: "#2c5aa0",
      },
      {
        name: "Git & GitHub",
        description:
          "Controle de versão rigoroso com Git Flow. Uso o GitHub para Code Reviews, Pull Requests e automação via Actions.",
        icon: <SiGithub />,
        gradientFrom: "#f05032",
        gradientTo: "#181717",
      },
      {
        name: "Vercel & Render",
        description:
          "Minhas escolhas para CI/CD e deploy automatizado. Vercel para a velocidade do Front e Render para a robustez do Back.",
        icon: <Server />,
        gradientFrom: "#6366f1",
        gradientTo: "#8b5cf6",
      },
    ],
  },
  {
    category: "Backend & Dados",
    tools: [
      {
        name: "DBeaver",
        description:
          "Interface gráfica preferida para gerenciar bancos PostgreSQL, modelar relacionamentos e analisar queries.",
        icon: <SiDbeaver />,
        gradientFrom: "#db6a3d",
        gradientTo: "#8b4513",
      },
      {
        name: "Insomnia",
        description:
          "Onde valido contratos de API, testo fluxos complexos de autenticação e mantenho a documentação organizada.",
        icon: <SiInsomnia />,
        gradientFrom: "#5849be",
        gradientTo: "#4c2bb0",
      },
    ],
  },
  {
    category: "Produtividade & Design",
    tools: [
      {
        name: "Figma",
        description:
          "Fundamental para garantir o 'pixel-perfect', inspecionar layouts e entender fluxos de UX antes de codar.",
        icon: <SiFigma />,
        gradientFrom: "#f24e1e",
        gradientTo: "#a259ff",
      },
    ],
  },
];

# 💼 Portfólio Pessoal - João Vitor Trindade

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> Portfólio profissional desenvolvido com Next.js, apresentando meus projetos, habilidades técnicas e jornada como desenvolvedor Full Stack.

## 🌐 Deploy

**[Ver Portfólio ao Vivo →](https://seu-portfolio.vercel.app)**

---

## ✨ Features

### 🎯 Seções Principais

- **Hero** - Apresentação profissional com CTA
- **Serviços** - Especialidades e áreas de atuação
- **Resumo** - Formação acadêmica e experiência
- **Skills** - Tecnologias que domino
- **Toolbox** - Arsenal de ferramentas e DevOps
- **GitHub Activity** - Calendário de contribuições em tempo real
- **Projetos** - Showcase de projetos com destaque featured
- **Avaliações** - Feedback de parceiros e clientes
- **LinkedIn** - Conexão profissional
- **Contato** - Formulário funcional de contato

### 🚀 Funcionalidades

- ✅ **Navegação Smooth Scroll** - Links do menu navegam suavemente entre seções
- ✅ **Tema Dark/Cyber** - Design moderno com gradientes roxo/cyan
- ✅ **Responsivo** - Mobile-first, adapta perfeitamente a todos os dispositivos
- ✅ **Animações Modernas** - Framer Motion para micro-interações
- ✅ **Formulário de Contato** - Integrado com Web3Forms
- ✅ **GitHub Integration** - Calendário de contribuições dinâmico
- ✅ **Zero Hydration Errors** - SSR otimizado

---

## 🛠️ Stack Tecnológica

### Core

- **[Next.js 15.4](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1](https://react.dev/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utility-first

### Bibliotecas

- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **[react-github-calendar](https://github.com/grubersjoe/react-github-calendar)** - Contribuições GitHub
- **[Web3Forms](https://web3forms.com/)** - Serviço de formulário

### Integrações

- **GitHub API** - Dados de contribuições
- **Web3Forms API** - Envio de e-mails

---

## 📦 Instalação e Execução Local

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/JoaoTrindade1404/Portifolio.git
cd Portifolio
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Configure variáveis de ambiente (opcional)**

Crie arquivo `.env.local` na raiz:

```env
# Adicione sua chave Web3Forms se quiser testar o formulário
NEXT_PUBLIC_WEB3FORMS_KEY=sua_chave_aqui
```

4. **Execute o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

5. **Abra no navegador**

```
http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
portifolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Layout global
│   ├── page.tsx              # Página principal
│   └── globals.css           # Estilos globais
├── components/
│   └── Home/                 # Componentes da página principal
│       ├── Hero/             # Seção Hero
│       ├── Skills/           # Skills técnicas
│       ├── Projects/         # Showcase de projetos
│       ├── GithubActivity/   # Calendário GitHub
│       ├── LinkedIn/         # Card LinkedIn
│       ├── Contact/          # Formulário de contato
│       └── ...
├── constant/                 # Constantes e dados
│   └── constant.ts           # NavLinks, etc
├── public/                   # Assets estáticos
│   ├── images/               # Imagens
│   └── projects/             # Screenshots de projetos
└── package.json
```

---

## 🚀 Deploy na Vercel

Este projeto está otimizado para deploy na Vercel:

1. Faça push do código para GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Configure variáveis de ambiente (se necessário)
4. Deploy automático! 🎉

**Deploys futuros**: Todo `git push` na main faz deploy automático.

---

## 📸 Screenshots

### Desktop

> _Adicione screenshot aqui após deploy_

### Mobile

> _Adicione screenshot mobile aqui após deploy_

---

## 🎨 Recursos de Design

- **Paleta de Cores**: Gradientes roxo (#9333ea) → cyan (#22d3ee)
- **Fonte**: System fonts otimizadas
- **Efeitos**: Glassmorphism, backdrop blur, gradientes suaves
- **Animações**: Entrada suave, hover effects, micro-interações

---

## 📝 Como Usar

### Personalizar Conteúdo

1. **Projetos** - Edite `components/Home/Projects/Project.tsx`
2. **Skills** - Edite `components/Home/Skills/Skills.tsx`
3. **Toolbox** - Edite `components/Home/Tools/toolboxData.tsx`
4. **Contato** - Configure sua Web3Forms key em `ContactSection.tsx`

### Adicionar Novas Seções

1. Crie componente em `components/Home/SuaSecao/`
2. Importe em `components/Home/Home.tsx`
3. Adicione ID em `<section id="sua-secao">`
4. Adicione link em `constant/constant.ts`

---

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento! 🎉

Se encontrar algum bug, abra uma [issue](https://github.com/JoaoTrindade1404/Portifolio/issues).

---

## 📈 Roadmap

- [ ] Adicionar mais projetos
- [ ] Blog integrado (opcional)
- [ ] Dark/Light mode toggle
- [ ] Internacionalização (PT/EN)
- [ ] Analytics e SEO avançado

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como referência ou template.

---

## 📞 Contato

**João Vitor Trindade**

- 💼 LinkedIn: [João Vitor Trindade](https://www.linkedin.com/in/joão-vitor-trindade-9104b4349)
- 🐙 GitHub: [@JoaoTrindade1404](https://github.com/JoaoTrindade1404)
- 📧 Email: joaovitortrindade430@gmail.com

---

<div align="center">

**⭐ Se gostou do projeto, deixe uma estrela!**

Desenvolvido com 💜 por [João Vitor Trindade](https://github.com/JoaoTrindade1404)

</div>

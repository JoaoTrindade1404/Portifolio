import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
        Uma pequena seção sobre <span className="text-cyan-300">projetos</span>{" "}
        recentes
      </h1>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Confira alguns dos projetos que desenvolvi, aplicando tecnologias
        modernas e melhores práticas de desenvolvimento.
      </p>

      <div className="max-w-7xl mx-auto">
        {/* Featured Project (Hero) */}
        <div className="mb-12 group">
          <a
            href="https://github.com/JoaoTrindade1404/ProjetoPOO2"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ⭐ Projeto em Destaque
              </div>

              {/* Image Container with Overlay */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                  src="/projects/GameMarket.jpg"
                  alt="Game Market Full Stack Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-green-600/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      Spring Boot
                    </span>
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      Full Stack
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    Game Market
                  </h2>
                  <p className="text-gray-200 text-sm md:text-base max-w-2xl">
                    Plataforma completa de e-commerce para games com sistema de
                    autenticação, carrinho de compras e gerenciamento de
                    produtos. Backend robusto em Spring Boot integrado com
                    frontend moderno em React.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 2 - Financeiro */}
          <div className="group">
            <a
              href="https://github.com/JoaoTrindade1404/financas"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden rounded-xl bg-[#1a1a2e] border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src="/projects/ReactNative.png"
                    alt="Aplicativo de Controle Financeiro"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                      React Native
                    </span>
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-medium">
                      Mobile
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Controle Financeiro
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Aplicativo mobile para gestão de finanças pessoais com
                    categorização de despesas e relatórios visuais.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Project 3 - Blog */}
          <div className="group">
            <a
              href="https://github.com/JoaoTrindade1404/nest-blog"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden rounded-xl bg-[#1a1a2e] border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src="/projects/NestBlog.png"
                    alt="NestJS Blog Platform"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-xs font-medium">
                      NestJS
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium">
                      Backend
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    NestJS Blog
                  </h3>
                  <p className="text-gray-400 text-sm">
                    API RESTful para plataforma de blog com autenticação JWT,
                    CRUD completo e arquitetura modular escalável.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

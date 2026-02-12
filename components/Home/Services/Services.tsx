import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Desenvolvendo soluções <br /> completas e escaláveis <br />
        do conceito ao deploy
      </h1>
      <div
        className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 
      md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center"
      >
        <div>
          <ServicesCard
            icon="/images/s1.png"
            name="Aplicações Web Full Stack"
            description="Desenvolvimento de aplicações web completas com React/Next.js no frontend e NestJS/Node.js no backend, seguindo arquitetura modular e boas práticas."
          />
        </div>
        <div>
          <ServicesCard
            icon="/images/s2.png"
            name="Aplicativos Mobile"
            description="Criação de apps nativos com React Native e Expo, incluindo publicação nas lojas (Google Play) e integração com APIs REST."
          />
        </div>
        <div>
          <ServicesCard
            icon="/images/s3.png"
            name="APIs RESTful"
            description="Construção de APIs robustas e seguras com NestJS/Spring Boot, autenticação JWT, validação de dados e documentação completa."
          />
        </div>
        <div>
          <ServicesCard
            icon="/images/s4.png"
            name="Integração com IA"
            description="Implementação de soluções com Python, web scraping, RAG (Retrieval-Augmented Generation) e integração de modelos de linguagem."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

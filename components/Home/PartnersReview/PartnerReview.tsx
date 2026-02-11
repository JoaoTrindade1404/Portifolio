"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PartnerReviewCard from "./PartnerReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PartnerReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Palavras de <br />
        <span className="text-cyan-200">parceiros de trabalho</span> na UnectJr
      </h1>
      <div className="mt-16 w-[70%] mx-auto ">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {/* COLOCAR IMAGENS E COMPLETAR INFORMAÇÕES AQUI */}
          <PartnerReviewCard
            image="/partners/partner.jpg"
            name="Gustavo Tesin"
            role="Gerente de Projetos"
            description="Trabalhar com o João Vitor é uma experiência extremamente positiva. 
            Ele se destaca pela proatividade e pelo zelo impecável com suas responsabilidades. 
            Além de ser um excelente colega equipe, possui uma comunicação assertiva e objetiva, 
            sempre disposto a colaborar e apoiar os colegas na conclusão das demandas. 
            É um profissional que agrega valor técnico e humano ao time."
          />
          <PartnerReviewCard
            image="/partners/partner2.jpg"
            name="João Vitor Romani"
            role="Diretor de Projetos"
            description="Recomendo fortemente o João Vitor Trindade, 
            com quem tive o prazer de trabalhar em projetos dentro da Unect. 
            Ele é um desenvolvedor Fullstack proativo, com um olhar atento tanto para Front-end, com React e Next.js, 
            quanto para o mobile com React Native. 
            Além de demonstrar uma evolução sólida para atuar no back-end com Nest.js de um sistema robusto que 
            está em desenvolvimento dentro da empresa. 
            O que mais me impressiona no João é sua capacidade de manter a concentração e a qualidade técnica mesmo sob prazos apertados.
             Sua comunicação é direta e ele está sempre disposto a colaborar, agregando valor humano e técnico ao time. 
             Um profissional extremamente disciplinado e confiável."
          />
          <PartnerReviewCard
            image="/partners/partner3.jpg"
            name="Felipe Souza"
            role="Full Stack"
            description="Trabalhar com o João foi uma experiência excelente, 
            principalmente pela sua constância e foco. Ele é muito disciplinado e organizado, 
            fora sua capacidade de buscar soluções em problemas complexos que era direcionado a ele, 
            pois sabíamos que ele seria eficiente em resolver da melhor forma. 
            O que mais impressiona é a calma e a concentração que ele mantém, mesmo quando os prazos são apertados. 
            Excelente profissional e ótima pessoa para trabalhar em equipe."
          />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default PartnerReview;

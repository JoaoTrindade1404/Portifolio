import React from "react";
import ResumeCard from "./ResumeCard";
import { FaBriefcase, FaMobileAlt } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK SECTION */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Minha{" "}
            <span className="text-cyan-200">Experiência Profissional</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaBriefcase}
              role="Desenvolvedor Full Stack - Unect Jr"
              date="Mar 2024 - Presente"
              description="Atuação em ambiente empresarial real com clientes reais, desenvolvendo sistemas web completos. Experiência prática com metodologia ágil Scrum (Dailys, Sprints), code reviews colaborativos, e trabalho em equipe multidisciplinar com designers e gestores de projeto."
            />
            <ResumeCard
              Icon={FaMobileAlt}
              role="Principais Atividades - Unect Jr"
              date="2024"
              description="Desenvolvimento full stack com React + TypeScript + Tailwind no front-end e NestJS no back-end. Construção de APIs RESTful escaláveis com arquitetura modular, interfaces responsivas e tipagem estrita. Experiência adicional com React Native em projetos mobile."
            />
          </div>
        </div>
        {/* EDUCATION PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Minha <span className="text-cyan-200">Educação</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={IoSchoolSharp}
              role="Engenharia de Software - UTFPR"
              date="Fev 2023 - Dez 2027"
              description="Bacharelado em Engenharia de Software pela Universidade Tecnológica Federal do Paraná (UTFPR), Campus Cornélio Procópio. Formação focada em desenvolvimento de software, arquitetura de sistemas e metodologias ágeis."
            />
            <ResumeCard
              Icon={BiBadge}
              role="5º Período (3º Ano) em Andamento"
              date="Atual"
              description="Cursando disciplinas avançadas de engenharia de software, banco de dados, desenvolvimento web e mobile. Participação ativa em projetos práticos e empresa júnior."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

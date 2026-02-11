"use client";
import React from "react";
import {
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 90,
  },
  {
    name: "React.Js",
    icon: <SiReact />,
    percentage: 93,
  },
  {
    name: "Next.Js",
    icon: <SiNextdotjs />,
    percentage: 89,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 94,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    percentage: 92,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs />,
    percentage: 91,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 95,
  },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Minhas <span className="text-cyan-300">Habilidades</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16 ">
        {skills.map((skill) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center
              justify-center shadow-lg transition hover:scale-105"
              >
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold ">{skill.percentage}%</p>
                <p className="text-purple-400 mt-1 ">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

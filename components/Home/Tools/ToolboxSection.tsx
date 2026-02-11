"use client";
import React from "react";
import { motion } from "framer-motion";
import { toolboxData, Tool } from "./toolboxData";

const ToolboxSection = () => {
  return (
    <div className="pt-16 pb-16 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          Meu <span className="text-cyan-300">Arsenal</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Ferramentas que uso diariamente para transformar ideias em soluções
          escaláveis e bem arquitetadas
        </p>
      </motion.div>

      {/* Categories and Tools */}
      <div className="max-w-7xl mx-auto space-y-12">
        {toolboxData.map((categoryData, categoryIndex) => (
          <div key={categoryData.category}>
            {/* Category Title */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="text-xl md:text-2xl font-semibold text-purple-400 mb-6 pl-4 border-l-4 border-purple-400"
            >
              {categoryData.category}
            </motion.h2>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.tools.map((tool, toolIndex) => (
                <ToolCard
                  key={tool.name}
                  tool={tool}
                  index={toolIndex}
                  categoryIndex={categoryIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ToolCardProps {
  tool: Tool;
  index: number;
  categoryIndex: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, index, categoryIndex }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: categoryIndex * 0.2 + index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      {/* Card Container */}
      <div
        className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] 
        rounded-2xl p-6 h-full overflow-hidden
        border border-gray-800/50
        hover:border-purple-500/50
        transition-all duration-300
        shadow-lg hover:shadow-2xl hover:shadow-purple-500/20"
      >
        {/* Gradient Overlay on Hover */}
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 
          transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${tool.gradientFrom}, ${tool.gradientTo})`,
          }}
        />

        {/* Animated Border Glow */}
        <div
          className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 
          blur-sm transition-opacity duration-300 rounded-2xl -z-10"
          style={{
            background: `linear-gradient(135deg, ${tool.gradientFrom}, ${tool.gradientTo})`,
          }}
        />

        {/* Icon Container */}
        <div className="relative mb-4">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center
            bg-gradient-to-br shadow-lg
            group-hover:scale-110 group-hover:rotate-3
            transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${tool.gradientFrom}, ${tool.gradientTo})`,
            }}
          >
            <div className="text-3xl text-white">{tool.icon}</div>
          </div>
        </div>

        {/* Tool Name */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
          {tool.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-gray-400 leading-relaxed
          group-hover:text-gray-300
          transition-colors duration-300"
        >
          {tool.description}
        </p>

        {/* Decorative Corner Element */}
        <div
          className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 
          transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at top right, ${tool.gradientFrom}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ToolboxSection;

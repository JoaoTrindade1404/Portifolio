"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Check, Copy } from "lucide-react";
import Image from "next/image";

const LinkedinSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = "joaotrindade430@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    } catch (error) {
      console.error("Erro ao copiar e-mail:", error);
    }
  };

  return (
    <div className="pt-16 pb-24 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent 
        pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Glassmorphism Card */}
          <div
            className="relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 
            backdrop-blur-xl rounded-3xl p-8 md:p-12
            border border-purple-500/30 
            shadow-2xl shadow-purple-500/20
            overflow-hidden"
          >
            {/* Gradient Border Effect */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(34, 211, 238, 0.3))",
                filter: "blur(20px)",
              }}
            />

            {/* Content Grid */}
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Profile Section */}
              <div className="flex flex-col items-center md:items-start gap-4">
                {/* Profile Picture with Subtle Gradient Ring */}
                <div className="relative">
                  <div
                    className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 
                    rounded-full"
                  />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#1a1a2e]">
                    <Image
                      src="/me.jpg"
                      alt="João Vitor Trindade"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://ui-avatars.com/api/?name=Joao+Trindade&size=200&background=8b5cf6&color=fff&bold=true";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Name */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  João Vitor Trindade
                </h2>

                {/* Headline */}
                <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-semibold mb-3">
                  Desenvolvedor Full Stack | React, Node.js & NestJS
                </p>

                {/* Sub-headline */}
                <p className="text-gray-400 text-sm md:text-base mb-4 max-w-xl">
                  Transformando café em código limpo e escalável na Unect Jr.
                  Apaixonado por criar soluções que impactam pessoas.
                </p>

                {/* Status Badge - Discreto */}
                <div
                  className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 
                  text-purple-300/80 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                >
                  <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full" />
                  Aberto a oportunidades
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/joão-vitor-trindade-9104b4349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 px-6 py-3 
                    bg-[#0077b5] hover:bg-[#006399]
                    text-white font-semibold rounded-lg
                    transition-all duration-300
                    shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50
                    hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                    Conectar no LinkedIn
                  </a>

                  {/* Copy Email Button */}
                  <button
                    onClick={handleCopyEmail}
                    className="group flex items-center justify-center gap-2 px-6 py-3 
                    bg-transparent border-2 border-purple-500/50 hover:border-cyan-400
                    text-purple-300 hover:text-cyan-300 font-semibold rounded-lg
                    transition-all duration-300
                    hover:bg-purple-500/10
                    hover:scale-105"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-green-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Copiar E-mail
                      </>
                    )}
                  </button>
                </div>

                {/* Toast-like Feedback */}
                {emailCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 
                    text-green-400 px-4 py-2 rounded-lg text-sm"
                  >
                    <Check className="w-4 h-4" />
                    E-mail copiado para área de transferência!
                  </motion.div>
                )}
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl 
              pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl 
              pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Vamos construir algo incrível juntos? 🚀
        </motion.p>
      </div>
    </div>
  );
};

export default LinkedinSection;

"use client";
import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Github, ExternalLink } from "lucide-react";

const GithubActivitySection = () => {
  const [totalContributions, setTotalContributions] = useState<number | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchContributions = async () => {
      try {
        const response = await fetch(
          "https://github-contributions-api.jogruber.de/v4/JoaoTrindade1404?y=last",
        );
        const data = await response.json();

        const total = data.total.lastYear;
        setTotalContributions(total);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar contribuições do GitHub:", error);
        setTotalContributions(0);
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, [mounted]);

  const customTheme = {
    light: [
      "rgba(255, 255, 255, 0.05)",
      "#3d1f47",
      "#6b2d8f",
      "#8e44cc",
      "#22d3ee",
    ],
    dark: [
      "rgba(255, 255, 255, 0.05)",
      "#3d1f47",
      "#6b2d8f",
      "#8e44cc",
      "#22d3ee",
    ],
  };

  return (
    <div className="pt-16 pb-16 px-4 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-500/10 
        blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="text-purple-400 w-8 h-8" />
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white">
              Code <span className="text-cyan-300">Consistency</span>
            </h1>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Comprometido com código de qualidade todos os dias. Cada quadrado
            representa minha dedicação contínua ao aprendizado e
            desenvolvimento.
          </p>
        </div>

        {/* GitHub Calendar Container */}
        <div
          className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8
          border border-purple-500/20 shadow-2xl shadow-purple-500/10
          hover:border-purple-500/40 transition-all duration-300"
        >
          {/* Calendar Wrapper - Responsivo com scroll horizontal em mobile */}
          <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[280px] md:min-w-0">
              {mounted ? (
                <GitHubCalendar
                  username="JoaoTrindade1404"
                  theme={customTheme}
                  colorScheme="dark"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  style={{
                    color: "#9ca3af",
                  }}
                />
              ) : (
                <div className="h-[180px] flex items-center justify-center">
                  <div className="text-gray-400">Carregando calendário...</div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Stats & Link */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-purple-500/20">
            {/* Stats */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                Total de Contribuições (último ano)
              </p>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 mt-1">
                {isLoading
                  ? "Calculando..."
                  : totalContributions !== null
                    ? totalContributions.toLocaleString("pt-BR")
                    : "—"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                *Atualizado automaticamente via GitHub API
              </p>
            </div>

            {/* Link para GitHub */}
            <a
              href="https://github.com/JoaoTrindade1404"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 
              bg-gradient-to-r from-purple-600 to-purple-700
              hover:from-purple-500 hover:to-cyan-500
              text-white font-medium rounded-lg
              transition-all duration-300
              shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/25
              hover:scale-105"
            >
              <Github className="w-5 h-5" />
              Ver GitHub Completo
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl 
          pointer-events-none animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl 
          pointer-events-none animate-pulse"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default GithubActivitySection;

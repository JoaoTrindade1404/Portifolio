"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Check, AlertCircle, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "cb9251c8-099d-417d-8ecb-091fc606d8c3",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nova mensagem de ${formData.name} - Portfólio`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Erro de conexão. Verifique sua internet.");
      console.error("Erro ao enviar formulário:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-24 px-4 relative overflow-hidden">
      {/* Background subtle gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent 
        pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative max-w-3xl mx-auto">
        {/* Icon Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <Mail className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 mx-auto" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          Vamos conversar?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto text-center"
        >
          Estou disponível para estágio e novas oportunidades. Sinta-se à
          vontade para me mandar uma mensagem!
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-8"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-purple-300 mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-purple-500/30 
              rounded-lg text-white placeholder-gray-500
              focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
              transition-all duration-300"
              placeholder="Seu nome"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-purple-300 mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-purple-500/30 
              rounded-lg text-white placeholder-gray-500
              focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
              transition-all duration-300"
              placeholder="seu@email.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-purple-300 mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-purple-500/30 
              rounded-lg text-white placeholder-gray-500 resize-none
              focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
              transition-all duration-300"
              placeholder="Conte-me sobre seu projeto ou oportunidade..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full group relative overflow-hidden px-8 py-4 
            bg-gradient-to-r from-purple-600 to-cyan-500 
            hover:from-purple-700 hover:to-cyan-600
            text-white font-semibold rounded-lg
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50
            hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status === "loading" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : status === "success" ? (
                <>
                  <Check className="w-5 h-5" />
                  Mensagem enviada!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Enviar mensagem
                </>
              )}
            </span>
          </button>

          {/* Success/Error Messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 
                rounded-lg text-green-400"
              >
                <Check className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">
                  Obrigado! Recebi sua mensagem e vou responder em breve. 🚀
                </p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 
                rounded-lg text-red-400"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{errorMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <p className="text-gray-500 text-sm">Ou me encontre em:</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/joão-vitor-trindade-9104b4349"
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon"
            >
              <div
                className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/30 
                flex items-center justify-center
                hover:bg-purple-600/40 hover:border-purple-400
                transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-purple-300 group-hover/icon:text-purple-100" />
              </div>
            </a>
            <a
              href="https://github.com/JoaoTrindade1404"
              target="_blank"
              rel="noopener noreferrer"
              className="group/icon"
            >
              <div
                className="w-10 h-10 rounded-lg bg-cyan-600/20 border border-cyan-500/30 
                flex items-center justify-center
                hover:bg-cyan-600/40 hover:border-cyan-400
                transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-cyan-300 group-hover/icon:text-cyan-100" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;

import React, { useState } from "react";
import { Download, Mail, Sun, Moon, Settings } from "lucide-react";
import ContactModal from "./ContactModal";
import SettingsModal from "./SettingsModal";

export default function Hero({ theme, setTheme, accentColor, setAccentColor }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center pt-8 pb-4 gap-12 lg:gap-0 mt-4 lg:mt-0">

      {/* Top Right Buttons */}
      <div className="flex w-full justify-between lg:absolute lg:top-0 lg:right-0 lg:w-auto items-center gap-4 mb-6 lg:mb-0">

        <div className="flex items-center bg-portfolio-card border border-portfolio-border rounded-full p-1 shadow-lg">
          <button onClick={() => setIsSettingsModalOpen(true)} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-portfolio-muted/20 transition text-portfolio-muted hover:text-portfolio-text">
            <Settings size={18} />
          </button>
          <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-portfolio-muted/20 transition text-portfolio-muted hover:text-portfolio-text">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <a href="https://drive.google.com/file/d/1EnxcgyPYTkpPctYCeGZac0mKL66KpXPr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent-main px-5 py-2.5 rounded-xl hover:bg-accent-dark transition shadow-lg shadow-accent-main/20 font-medium text-sm">
          <Download size={16} />
          Resume <span className="hidden sm:inline">(PDF)</span>
        </a>
      </div>

      {/* LEFT CONTENT */}
      <div className="max-w-xl z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
        <p className="text-accent-light font-medium text-lg mb-2">Hello, I'm</p>

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text tracking-tight flex items-center gap-1">
            Sanjay Kumar
          </h1>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent-main mt-3 tracking-tight">
          High-Throughput Backend Engineer
        </h2>

        <p className="text-portfolio-muted mt-4 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-xl font-medium">
          Specializing in high-throughput distributed systems, microservices architecture, and scalable cloud infrastructure. Building fintech systems <span className="text-accent-main font-semibold">@ Wissen Technology (Morgan Stanley)</span>
        </p>

        <p className="text-xs text-portfolio-muted/70 mt-3 font-mono uppercase tracking-wider bg-portfolio-card/50 inline-block px-3 py-1.5 rounded-lg border border-portfolio-border/50">
          Java • Spring Boot • AWS • Kafka • Microservices
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="https://drive.google.com/file/d/1EnxcgyPYTkpPctYCeGZac0mKL66KpXPr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 bg-accent-main px-6 py-3 rounded-xl hover:bg-accent-dark transition font-medium shadow-lg shadow-accent-main/25 w-full sm:w-auto">
            <Download size={18} />
            View Resume
          </a>

          <button onClick={() => setIsContactModalOpen(true)} className="flex justify-center items-center gap-2 border border-portfolio-border px-6 py-3 rounded-xl hover:border-accent-light hover:bg-indigo-500/5 transition font-medium text-portfolio-muted w-full sm:w-auto">
            Contact Me
            <Mail size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative lg:mr-8 w-56 h-56 md:w-72 md:h-72">


        {/* Glow ring */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-accent-dark via-accent-main to-purple-400 p-[3px] shadow-2xl shadow-accent-main/30">

          <div className="w-full h-full rounded-full bg-portfolio-bg flex items-center justify-center overflow-hidden border-4 border-portfolio-bg">

            {/* The image should be replaced with the actual photo */}
            <img
              src="/profile.jpg"
              alt="Sanjay Kumar"
              className="w-full h-full object-cover"
            />

          </div>
        </div>
      </div>

      {/* Contact Modal Popup */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Settings Modal Popup */}
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        theme={theme}
        setTheme={setTheme}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
    </div>
  );
}
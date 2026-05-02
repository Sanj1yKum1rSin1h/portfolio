import React from "react";
import { X, Mail, Phone, ExternalLink } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      {/* Modal Card */}
      <div className="bg-portfolio-card border border-portfolio-border rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative" onClick={(e) => e.stopPropagation()}>

        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-accent-main/20 blur-[60px] pointer-events-none"></div>

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-portfolio-border bg-portfolio-bg/50 relative z-10">
          <h2 className="text-xl font-bold text-portfolio-text">Let's Connect</h2>
          <button onClick={onClose} className="text-portfolio-muted hover:text-white transition bg-portfolio-card p-1.5 rounded-lg border border-portfolio-border hover:border-gray-500">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 relative z-10">

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-main/30 shadow-lg shadow-accent-main/20">
              <img src="/profile.jpg" alt="Sanjay Kumar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-portfolio-text">Sanjay Kumar</h3>
              <p className="text-sm text-accent-light">Software Development Engineer</p>
            </div>
          </div>

          <p className="text-sm text-portfolio-muted leading-relaxed">
            I'm always open to discussing new projects, technical challenges, or Exploring opportunities. Feel free to reach out via any of the channels below!
          </p>

          <div className="space-y-3">
            {/* Email Option */}
            <a href="mailto:sanjaykumar.bng03@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-portfolio-border bg-portfolio-bg hover:border-accent-main/50 hover:bg-accent-main/10 transition group">
              <div className="w-10 h-10 rounded-full bg-accent-main/20 flex items-center justify-center text-accent-light group-hover:bg-accent-main group-hover:text-white transition">
                <Mail size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-portfolio-text">Email Me</p>
                <p className="text-xs text-portfolio-muted truncate">sanjaykumar.bng03@gmail.com</p>
              </div>
            </a>

            {/* Phone Option */}
            <a href="tel:+919845774849" className="flex items-center gap-4 p-4 rounded-xl border border-portfolio-border bg-portfolio-bg hover:border-emerald-500/50 hover:bg-emerald-500/10 transition group">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition">
                <Phone size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-portfolio-text">Call Me</p>
                <p className="text-xs text-portfolio-muted">+91 98457 74849</p>
              </div>
            </a>

            {/* LinkedIn Option */}
            <a href="https://linkedin.com/in/sanjay-k-377567138" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-portfolio-border bg-portfolio-bg hover:border-blue-500/50 hover:bg-blue-500/10 transition group">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition">
                <span className="font-bold text-lg leading-none mt-[-2px]">in</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-portfolio-text">LinkedIn</p>
                <p className="text-xs text-portfolio-muted">Let's network</p>
              </div>
              <ExternalLink size={16} className="text-portfolio-muted group-hover:text-blue-400 transition" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

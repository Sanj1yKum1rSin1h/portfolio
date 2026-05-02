import React from "react";
import { X, Moon, Sun, Palette } from "lucide-react";

export default function SettingsModal({ isOpen, onClose, theme, setTheme, accentColor, setAccentColor }) {
  if (!isOpen) return null;

  const colors = [
    { name: "Indigo", value: "indigo", bg: "bg-indigo-500" },
    { name: "Emerald", value: "emerald", bg: "bg-emerald-500" },
    { name: "Rose", value: "rose", bg: "bg-rose-500" },
    { name: "Blue", value: "blue", bg: "bg-blue-500" },
    { name: "Orange", value: "orange", bg: "bg-orange-500" }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-portfolio-card border border-portfolio-border rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-portfolio-border bg-portfolio-bg/50">
          <div className="flex items-center gap-2 text-portfolio-text">
            <Palette size={20} className="text-accent-main" />
            <h2 className="text-xl font-bold">Appearance</h2>
          </div>
          <button onClick={onClose} className="text-portfolio-muted hover:text-portfolio-text transition bg-portfolio-card p-1.5 rounded-lg border border-portfolio-border hover:border-gray-500">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8 relative z-10">
          
          {/* Theme Toggle */}
          <div>
            <h3 className="text-sm font-semibold text-portfolio-text mb-3 uppercase tracking-wider">Mode</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => setTheme('dark')}
                className={`flex-1 py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition ${theme === 'dark' ? 'bg-accent-main/10 border-accent-main text-accent-main' : 'bg-portfolio-bg border-portfolio-border text-portfolio-muted hover:border-accent-light/50'}`}
              >
                <Moon size={18} />
                <span className="font-medium text-sm">Dark</span>
              </button>
              <button 
                onClick={() => setTheme('light')}
                className={`flex-1 py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition ${theme === 'light' ? 'bg-accent-main/10 border-accent-main text-accent-main' : 'bg-portfolio-bg border-portfolio-border text-portfolio-muted hover:border-accent-light/50'}`}
              >
                <Sun size={18} />
                <span className="font-medium text-sm">Light</span>
              </button>
            </div>
          </div>

          {/* Accent Color */}
          <div>
            <h3 className="text-sm font-semibold text-portfolio-text mb-3 uppercase tracking-wider">Accent Color</h3>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setAccentColor(color.value)}
                  className={`w-10 h-10 rounded-full transition-transform ${color.bg} ${accentColor === color.value ? 'ring-4 ring-offset-2 ring-offset-portfolio-card ring-accent-main scale-110' : 'hover:scale-110 opacity-80 hover:opacity-100'}`}
                  title={color.name}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

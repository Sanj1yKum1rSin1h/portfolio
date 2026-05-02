import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import AnimatedSection from "./components/AnimatedSection";
import { Menu, X } from "lucide-react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [accentColor, setAccentColor] = useState("indigo");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  useEffect(() => {
    if (accentColor === "indigo") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", accentColor);
    }
  }, [accentColor]);

  return (
    <div className="flex justify-center min-h-screen text-portfolio-text font-sans relative z-0">

      {/* Premium Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-portfolio-bg">
        
        {/* Neural Network Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
          style={{ backgroundImage: "url('/bg-neural.png')" }}
        ></div>

        {/* Soft gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-bg/80 via-transparent to-portfolio-bg/80"></div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-portfolio-sidebar/80 backdrop-blur-md border-b border-portfolio-border z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-accent-main font-bold text-xl">&lt;/&gt;</span>
          <h1 className="text-lg font-bold text-portfolio-text tracking-tight">Sanjay</h1>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-portfolio-muted hover:text-white p-2"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Centered App Container */}
      <div className="w-full max-w-[1650px] flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main Content Wrapper */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'opacity-50 pointer-events-none lg:opacity-100 lg:pointer-events-auto' : ''}`}>
          <div className="w-full p-4 md:p-8 lg:p-10 space-y-8 mt-16 lg:mt-0">

            {/* Top Header/Hero */}
            <AnimatedSection>
              <Hero theme={theme} setTheme={setTheme} accentColor={accentColor} setAccentColor={setAccentColor} />
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection>
              <Stats />
            </AnimatedSection>

            {/* Main Grid: 2 Columns */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

              {/* LEFT COLUMN (Experience, Certifications, Education) */}
              <div className="xl:col-span-7 flex flex-col gap-6">
                <AnimatedSection>
                  <Experience />
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatedSection>
                    <Certifications />
                  </AnimatedSection>
                  <AnimatedSection>
                    <Education />
                  </AnimatedSection>
                </div>
              </div>

              {/* RIGHT COLUMN (Projects, Skills) */}
              <div className="xl:col-span-5 flex flex-col gap-6">
                <AnimatedSection>
                  <Projects />
                </AnimatedSection>
                <AnimatedSection>
                  <Skills />
                </AnimatedSection>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
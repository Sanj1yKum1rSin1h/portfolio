import { useState } from "react";
import {
  Home,
  Briefcase,
  Folder,
  Code,
  Mail,
  Award,
  GraduationCap,
  Phone
} from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleNavClick = (label) => {
    setActiveItem(label);
    if (window.innerWidth < 1024 && setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`w-[250px] h-screen fixed lg:sticky top-0 left-0 bg-portfolio-sidebar border-r border-portfolio-border flex flex-col justify-between p-6 overflow-y-auto z-40 transition-transform duration-300 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

      {/* Top */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-accent-main font-bold text-2xl">&lt;/&gt;</span>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-portfolio-text tracking-tight">Sanjay Kumar</h1>
          <span className="text-[10px] font-medium text-portfolio-muted px-1.5 py-0.5 rounded bg-portfolio-card border border-portfolio-border">He/Him</span>
        </div>
        <p className="text-sm text-accent-light mb-8 font-medium leading-tight mt-1">Backend Engineer</p>

        <nav className="space-y-1.5">
          <NavItem href="#overview" icon={<Home size={18} />} label="Overview" active={activeItem === "Overview"} onClick={() => handleNavClick("Overview")} />
          <NavItem href="#experience" icon={<Briefcase size={18} />} label="Experience" active={activeItem === "Experience"} onClick={() => handleNavClick("Experience")} />
          <NavItem href="#projects" icon={<Folder size={18} />} label="Projects" active={activeItem === "Projects"} onClick={() => handleNavClick("Projects")} />
          <NavItem href="#skills" icon={<Code size={18} />} label="Skills" active={activeItem === "Skills"} onClick={() => handleNavClick("Skills")} />
          <NavItem href="#certifications" icon={<Award size={18} />} label="Certifications" active={activeItem === "Certifications"} onClick={() => handleNavClick("Certifications")} />
          <NavItem href="#education" icon={<GraduationCap size={18} />} label="Education" active={activeItem === "Education"} onClick={() => handleNavClick("Education")} />
          <NavItem href="#overview" icon={<Mail size={18} />} label="Contact" active={activeItem === "Contact"} onClick={() => handleNavClick("Contact")} />
        </nav>
      </div>

      {/* Bottom */}
      <div className="mt-8 pt-6 border-t border-portfolio-border/50">
        <p className="text-xs font-bold uppercase tracking-wider text-portfolio-muted mb-4">Let's Connect</p>

        <div className="flex gap-3 mb-6">
          <a href="https://linkedin.com/in/sanjay-k-377567138" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-xl bg-portfolio-card border border-portfolio-border flex items-center justify-center text-portfolio-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-300 group shadow-sm hover:shadow-[#0A66C2]/20" title="LinkedIn">
            <LinkedinIcon size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          
          <a href="https://github.com/Sanjaykumar" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-xl bg-portfolio-card border border-portfolio-border flex items-center justify-center text-portfolio-muted hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 group shadow-sm hover:shadow-white/20" title="GitHub">
            <GithubIcon size={18} className="group-hover:scale-110 transition-transform" />
          </a>

          <a href="mailto:sanjaykumar.bng03@gmail.com" 
             className="w-10 h-10 rounded-xl bg-portfolio-card border border-portfolio-border flex items-center justify-center text-portfolio-muted hover:text-accent-main hover:border-accent-main/50 hover:bg-accent-main/10 transition-all duration-300 group shadow-sm hover:shadow-accent-main/20" title="Email">
            <Mail size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="space-y-3">
          <a href="mailto:sanjaykumar.bng03@gmail.com" className="flex items-center gap-3 text-xs text-portfolio-muted hover:text-white transition-colors group">
            <div className="w-7 h-7 rounded-lg bg-portfolio-card flex items-center justify-center border border-portfolio-border group-hover:border-accent-main/50 group-hover:bg-accent-main/10 transition-colors shrink-0">
              <Mail size={14} className="group-hover:text-accent-main transition-colors" />
            </div>
            <span className="truncate">sanjaykumar.bng03@gmail.com</span>
          </a>
          
          <a href="tel:+919845774849" className="flex items-center gap-3 text-xs text-portfolio-muted hover:text-white transition-colors group">
            <div className="w-7 h-7 rounded-lg bg-portfolio-card flex items-center justify-center border border-portfolio-border group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors shrink-0">
              <Phone size={14} className="group-hover:text-emerald-400 transition-colors" />
            </div>
            <span className="truncate">+91 98457 74849</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition font-medium text-sm
      ${active ? "bg-accent-main text-portfolio-text shadow-lg shadow-accent-main/20" : "text-portfolio-muted hover:text-white hover:bg-white/5"}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M12 18a6 6 0 0 1-6-6"></path>
  </svg>
);
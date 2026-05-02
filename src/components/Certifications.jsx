import { Award, X, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);

  const certs = (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-4">
          <h3 className="font-semibold text-portfolio-text leading-tight">Data Structures & Algorithms Certificate</h3>
          <p className="text-[11px] text-accent-main bg-accent-main/10 px-2 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">Mar 2023 – Oct 2023</p>
        </div>

        <ul className="text-sm text-portfolio-muted space-y-1 list-none mt-4">
           <li className="flex items-start gap-2">
             <span className="text-accent-main mt-0.5">•</span>
             <span>Certified by Take U Forward – Intensive training in DSA, System Design, and Low-Level Design</span>
           </li>
           <li className="flex items-start gap-2">
             <span className="text-accent-main mt-0.5">•</span>
             <span>Covered both Low Level Design (LLD) and High Level Design (HLD) in this course.</span>
           </li>
        </ul>
      </div>

      <div className="border-t border-portfolio-border/50 pt-4 mt-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-4">
          <h3 className="font-semibold text-portfolio-text leading-tight">Java Spring Boot Certification</h3>
          <p className="text-[11px] text-accent-main bg-accent-main/10 px-2 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">2025</p>
        </div>

        <ul className="text-sm text-portfolio-muted space-y-1 list-none mt-4">
           <li className="flex items-start gap-2">
             <span className="text-accent-main mt-0.5">•</span>
             <span>Developed a strong understanding of Core Java, Spring Boot, REST APIs.</span>
           </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div id="certifications" className="bg-portfolio-card border border-portfolio-border rounded-2xl p-6 shadow-lg h-full">

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-portfolio-text">
            <Award size={20} className="text-purple-400" />
            <h2 className="text-lg font-semibold">Certifications</h2>
          </div>
          <button 
            onClick={() => setIsExpanded(true)}
            className="text-sm text-accent-light hover:text-accent-main transition-colors font-medium"
          >
            View All
          </button>
        </div>

        <div className="space-y-6">
          {/* Main Card Only Shows Cert 1 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-4">
              <h3 className="font-semibold text-portfolio-text leading-tight">Data Structures & Algorithms Certificate</h3>
              <p className="text-[11px] text-accent-main bg-accent-main/10 px-2 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">Mar 2023 – Oct 2023</p>
            </div>

            <ul className="text-sm text-portfolio-muted space-y-1 list-none mt-4">
               <li className="flex items-start gap-2">
                 <span className="text-accent-main mt-0.5">•</span>
                 <span>Certified by Take U Forward – Intensive training in DSA, System Design, and Low-Level Design</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-accent-main mt-0.5">•</span>
                 <span>Covered both Low Level Design (LLD) and High Level Design (HLD) in this course.</span>
               </li>
            </ul>
          </div>

          {/* Toggle Button at the bottom */}
          <div className="mt-4 pt-2 flex justify-center border-t border-portfolio-border/30">
            <button 
              onClick={() => setIsExpanded(true)}
              className="mt-2 text-sm text-accent-light hover:text-accent-main transition-colors flex items-center gap-1 group font-medium"
            >
              View Full Certifications
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

      </div>

      {/* Transparent Modal Popup for All Certifications */}
      {isExpanded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsExpanded(false)}>
          <div className="bg-portfolio-card border border-portfolio-border rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl overflow-hidden relative flex flex-col animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-purple-500/20 blur-[60px] pointer-events-none"></div>

            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-portfolio-border bg-portfolio-bg/50 relative z-10 shrink-0">
              <div className="flex items-center gap-2 text-portfolio-text">
                <Award size={20} className="text-purple-400" />
                <h2 className="text-xl font-bold">All Certifications</h2>
              </div>
              <button onClick={() => setIsExpanded(false)} className="text-portfolio-muted hover:text-white transition bg-portfolio-card p-1.5 rounded-lg border border-portfolio-border hover:border-gray-500">
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto relative z-10 custom-scrollbar">
              {certs}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
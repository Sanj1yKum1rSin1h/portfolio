import { Briefcase, X } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const jobs = (
    <div className="space-y-8 relative">
      {/* Job 1 */}
      <div className="relative pl-4 border-l-2 border-accent-main/30">
        <div className="absolute w-3 h-3 bg-accent-main rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
          <h3 className="font-semibold text-portfolio-text text-lg">Software Engineer</h3>
          <p className="text-xs text-accent-main bg-accent-main/10 px-2 py-1 rounded-full font-medium self-start sm:self-auto">Feb 2026 – Present</p>
        </div>

        <p className="text-sm text-accent-light mb-3 font-medium">Wissen Technology (Client: Morgan Stanley), Bangalore</p>

        <ul className="text-sm text-portfolio-muted space-y-2 list-none">
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Spearheaded the migration of monolithic internal services to a <strong>Spring Boot microservices architecture</strong>, reducing technical debt and improving system fault tolerance.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Re-architected and optimized legacy AutoSys batch jobs for <strong>modern CI/CD deployment pipelines</strong>, decreasing deployment latency by <strong>40%</strong>.</span></li>
        </ul>
      </div>

      {/* Job 2 */}
      <div className="relative pl-4 border-l-2 border-accent-main/30">
        <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-1.5 border-2 border-portfolio-card"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
          <h3 className="font-semibold text-portfolio-text text-lg">Software Engineer</h3>
          <p className="text-xs text-portfolio-muted bg-slate-800/50 px-2 py-1 rounded-full font-medium self-start sm:self-auto">Mar 2023 – Jan 2026</p>
        </div>

        <p className="text-sm text-accent-light mb-3 font-medium">Werize, Bangalore</p>

        <ul className="text-sm text-portfolio-muted space-y-2 list-none">
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Architected the backend for DigiGold flows, driving an <strong>80% increase in conversions</strong> while maintaining a <strong>99.9% transaction success rate</strong> under peak load.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Designed a highly available Partner-Tracking Service using <strong>AWS SQS and Gupshup API</strong>, successfully processing <strong>100K+ daily events</strong> with near-zero latency.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Engineered the core architecture for the LAP Loan Portal, optimizing database queries and decreasing processing time by <strong>40%</strong>.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Implemented automated, asynchronous email workflows via message queues to eliminate critical communication bottlenecks.</span></li>
        </ul>
      </div>

      {/* Job 3 */}
      <div className="relative pl-4 border-l-2 border-accent-main/30">
        <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-1.5 border-2 border-portfolio-card"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
          <h3 className="font-semibold text-portfolio-text text-lg">Software Engineer</h3>
          <p className="text-xs text-portfolio-muted bg-slate-800/50 px-2 py-1 rounded-full font-medium self-start sm:self-auto">May 2022 – Jan 2023</p>
        </div>

        <p className="text-sm text-accent-light mb-3 font-medium">CoffeeBeans Consulting, Bangalore</p>

        <ul className="text-sm text-portfolio-muted space-y-2 list-none">
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Developed core modules for the ISCP platform, optimizing geospatial shipment tracking algorithms and improving data retrieval speeds.</span></li>
          <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Built a secure QR-based Attendance System backend with real-time location and contact data synchronization.</span></li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div id="experience" className="bg-portfolio-card border border-portfolio-border rounded-2xl p-6 shadow-lg h-full">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-portfolio-text">
            <Briefcase size={20} className="text-accent-light" />
            <h2 className="text-lg font-semibold">Experience</h2>
          </div>
          <button
            onClick={() => setIsExpanded(true)}
            className="text-sm text-accent-light hover:text-accent-main transition-colors font-medium"
          >
            View All
          </button>
        </div>

        <div className="space-y-8">
          {/* Main Card Only Shows Job 1 */}
          <div className="relative pl-4 border-l-2 border-accent-main/30">
            <div className="absolute w-3 h-3 bg-accent-main rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1">
              <h3 className="font-semibold text-portfolio-text text-lg">Software Engineer</h3>
              <p className="text-xs text-accent-main bg-accent-main/10 px-2 py-1 rounded-full font-medium self-start sm:self-auto">Feb 2026 – Present</p>
            </div>

            <p className="text-sm text-accent-light mb-3 font-medium">Wissen Technology (Client: Morgan Stanley), Bangalore</p>

            <ul className="text-sm text-portfolio-muted space-y-2 list-none">
              <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Spearheaded the migration of monolithic internal services to a <strong>Spring Boot microservices architecture</strong>, reducing technical debt and improving system fault tolerance.</span></li>
              <li className="flex items-start gap-2"><span className="text-accent-main mt-0.5">•</span> <span>Re-architected and optimized legacy AutoSys batch jobs for <strong>modern CI/CD deployment pipelines</strong>, decreasing deployment latency by <strong>40%</strong>.</span></li>
            </ul>
          </div>

          {/* Toggle Button at the bottom */}
          <div className="mt-6 pt-2 flex justify-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="text-sm text-accent-light hover:text-accent-main transition-colors flex items-center gap-1 group font-medium"
            >
              View Full Experience
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

      </div>

      {/* Transparent Modal Popup for All Experience */}
      {isExpanded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsExpanded(false)}>
          <div className="bg-portfolio-card border border-portfolio-border rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl overflow-hidden relative flex flex-col animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>

            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-accent-main/20 blur-[60px] pointer-events-none"></div>

            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-portfolio-border bg-portfolio-bg/50 relative z-10 shrink-0">
              <div className="flex items-center gap-2 text-portfolio-text">
                <Briefcase size={20} className="text-accent-main" />
                <h2 className="text-xl font-bold">All Experience</h2>
              </div>
              <button onClick={() => setIsExpanded(false)} className="text-portfolio-muted hover:text-white transition bg-portfolio-card p-1.5 rounded-lg border border-portfolio-border hover:border-gray-500">
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto relative z-10 custom-scrollbar">
              {jobs}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
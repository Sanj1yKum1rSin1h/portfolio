import { Folder, Database, Server, Globe, ArrowRight, Activity, Cpu } from "lucide-react";

export default function Projects() {
  return (
    <div id="projects" className="bg-portfolio-card border border-portfolio-border rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-portfolio-text">
          <Folder size={20} className="text-accent-light" />
          <h2 className="text-lg font-semibold">Projects</h2>
        </div>
        <span className="text-sm text-accent-light cursor-pointer hover:text-accent-main transition-colors">View All</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {/* Project Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-accent-main/10 rounded-2xl flex items-center justify-center border border-accent-main/20 shadow-inner">
          <Cpu size={24} className="text-accent-light" />
        </div>

        <div className="flex-1 w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
            <h3 className="font-semibold text-portfolio-text text-lg leading-tight">Distributed E-Commerce Backend</h3>
            <p className="text-[11px] text-accent-main bg-accent-main/10 px-2 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">Jan 2023 – Mar 2023</p>
          </div>

          <ul className="text-sm text-portfolio-muted space-y-2 list-none mt-3">
            <li className="flex items-start gap-2">
              <span className="text-accent-main mt-0.5">•</span>
              <span>Architected a highly scalable microservices backend for a high-traffic e-commerce platform.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-main mt-0.5">•</span>
              <span>Implemented distributed data persistence utilizing <strong>PostgreSQL</strong>, <strong>Spring Boot</strong>, and <strong>Hibernate ORM</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-main mt-0.5">•</span>
              <span>Ensured enterprise-grade reliability with <strong>90%+ test coverage</strong> (JUnit & Mockito) and fully automated CI/CD pipelines.</span>
            </li>
          </ul>

          {/* FAANG-Style Architecture Diagram */}
          <div className="mt-6 bg-portfolio-bg/50 border border-portfolio-border rounded-xl p-4 sm:p-6 overflow-x-auto custom-scrollbar">
            <p className="text-xs font-bold uppercase tracking-wider text-portfolio-muted mb-4 flex items-center gap-2">
              <Activity size={14} className="text-accent-main" /> System Architecture
            </p>
            <div className="flex items-center gap-2 min-w-[500px]">
              {/* Client Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-portfolio-card border border-portfolio-border flex items-center justify-center text-portfolio-muted shadow-lg">
                  <Globe size={20} />
                </div>
                <span className="text-[10px] font-medium text-portfolio-muted uppercase tracking-wider">Client</span>
              </div>
              
              <div className="flex-1 border-t-2 border-dashed border-portfolio-border/50 relative min-w-[30px]">
                <ArrowRight size={14} className="absolute right-0 -translate-y-1/2 text-portfolio-border/50 top-1/2" />
              </div>

              {/* Gateway Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-accent-main/10 border border-accent-main/30 flex items-center justify-center text-accent-light shadow-lg">
                  <Server size={20} />
                </div>
                <span className="text-[10px] font-medium text-accent-light uppercase tracking-wider">API Gateway</span>
              </div>

              <div className="flex-1 border-t-2 border-dashed border-portfolio-border/50 relative min-w-[30px]">
                <ArrowRight size={14} className="absolute right-0 -translate-y-1/2 text-portfolio-border/50 top-1/2" />
              </div>

              {/* Services Node */}
              <div className="flex flex-col gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-portfolio-card border border-portfolio-border text-xs text-portfolio-muted text-center shadow-sm">Auth Service</div>
                <div className="px-3 py-1.5 rounded-lg bg-portfolio-card border border-portfolio-border text-xs text-portfolio-muted text-center shadow-sm">Order Service</div>
              </div>

              <div className="flex-1 border-t-2 border-dashed border-portfolio-border/50 relative min-w-[30px]">
                <ArrowRight size={14} className="absolute right-0 -translate-y-1/2 text-portfolio-border/50 top-1/2" />
              </div>

              {/* Database Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg">
                  <Database size={20} />
                </div>
                <span className="text-[10px] font-medium text-blue-400 uppercase tracking-wider">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
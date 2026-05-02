import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div id="education" className="bg-portfolio-card border border-portfolio-border rounded-2xl p-6 shadow-lg h-full transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-main/10 hover:border-accent-main/30">

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-portfolio-text">
          <GraduationCap size={20} className="text-accent-light" />
          <h2 className="text-lg font-semibold">Education</h2>
        </div>
        <span className="text-sm text-accent-light cursor-pointer hover:text-accent-main transition-colors">View All</span>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          {/* LPU Logo */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-[2px] shadow-lg shadow-orange-500/20 overflow-hidden border border-orange-500/50">
            <img src="/lpu-logo.png" alt="LPU Logo" className="w-full h-full object-contain" />
          </div>

          <div className="space-y-1 flex-1">
            <h3 className="font-semibold text-portfolio-text leading-tight">
              Lovely Professional University, <span className="font-normal text-sm text-portfolio-muted">Phagwara, Punjab</span>
            </h3>

            <p className="text-sm text-accent-light font-medium pt-1">
              Diploma + B.Tech (Dual Degree) in Computer Science and Engineering
            </p>

            <p className="text-xs text-portfolio-muted font-medium pt-2 flex items-center gap-2">
              <span>Aug 2015 – July 2021</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="text-accent-light">CGPA: 7.59</span>
            </p>
          </div>
        </div>

        {/* 10th Grade */}
        <div className="border-t border-portfolio-border/50 pt-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-accent-main/10 rounded-full flex items-center justify-center border border-accent-main/20 text-accent-light">
              <GraduationCap size={20} />
            </div>

            <div className="space-y-1 flex-1">
              <h3 className="font-semibold text-portfolio-text leading-tight">
                BSEB <span className="font-normal text-sm text-portfolio-muted">(Bihar School Examination Board)</span>
              </h3>

              <p className="text-sm text-accent-light font-medium pt-1">
                10th Grade (Matriculation)
              </p>

              <p className="text-xs text-portfolio-muted font-medium pt-2 flex items-center gap-2">
                <span>Completed in 2015</span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span className="text-accent-light">Score: 73%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
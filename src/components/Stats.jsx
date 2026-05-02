import { Briefcase, Zap, Rocket, CheckCircle } from "lucide-react";

export default function Stats() {
  const data = [
    {
      icon: <Briefcase size={20} />,
      value: "4+ Years",
      label: "Backend Experience",
      color: "text-accent-light bg-accent-main/10",
    },
    {
      icon: <Zap size={20} />,
      value: "100K+",
      label: "Daily Events Processed",
      color: "text-emerald-400 bg-emerald-500/10",
    },
    {
      icon: <CheckCircle size={20} />,
      value: "99.99%",
      label: "Uptime Maintained",
      color: "text-blue-400 bg-blue-500/10",
    },
    {
      icon: <Rocket size={20} />,
      value: "40%",
      label: "Latency Reduction",
      color: "text-orange-400 bg-orange-500/10",
    },
  ];

  return (
    <div className="mt-2 mb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 bg-portfolio-card border border-portfolio-border rounded-2xl p-6 shadow-lg">

        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-4 flex-1 justify-start sm:justify-center relative">

            {/* Icon */}
            <div className={`p-4 rounded-xl ${item.color}`}>
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-bold text-portfolio-text mb-0.5">
                {item.value}
              </h3>
              <p className="text-sm text-portfolio-muted leading-tight">
                {item.label}
              </p>
            </div>

            {/* Divider */}
            {i !== data.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-portfolio-border"></div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}
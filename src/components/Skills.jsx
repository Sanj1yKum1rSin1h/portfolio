import { Code } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Languages",
      items: ["Java", "C++", "JavaScript", "Python", "SQL", "DSA"],
    },
    {
      title: "Backend & Architecture",
      items: ["Microservices", "REST APIs", "EDA", "Distributed Systems"],
    },
    {
      title: "Frameworks & Tools",
      items: ["Spring Boot", "Spring Security", "Hibernate", "Maven", "Git"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (S3, SQS, KMS)", "Secrets Manager", "Jenkins", "Docker", "Kibana"],
    },
  ];

  const getColor = (skill) => {
    const map = {
      "Java": "text-purple-400 bg-purple-500/10 border-purple-500/20",
      "JavaScript": "text-blue-400 bg-blue-500/10 border-blue-500/20",
      "Python": "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
      "Spring Boot": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      "Spring Security": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      "PostgreSQL": "text-orange-400 bg-orange-500/10 border-orange-500/20",
      "MongoDB": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      "Redis": "text-red-400 bg-red-500/10 border-red-500/20",
      "AWS (S3, SQS, KMS)": "text-purple-400 bg-purple-500/10 border-purple-500/20",
      "Secrets Manager": "text-accent-light bg-accent-main/10 border-accent-main/20",
      "Docker": "text-blue-400 bg-blue-500/10 border-blue-500/20",
      "Jenkins": "text-red-400 bg-red-500/10 border-red-500/20",
    };
    return map[skill] || "text-portfolio-muted bg-slate-800/50 border-portfolio-border";
  };

  return (
    <div id="skills" className="bg-portfolio-card border border-portfolio-border rounded-2xl p-6 shadow-lg h-full">

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-portfolio-text">
          <Code size={20} className="text-accent-light" />
          <h2 className="text-lg font-semibold">Technical Skills</h2>
        </div>
        <span className="text-sm text-accent-light cursor-pointer hover:text-accent-main transition-colors">View All</span>
      </div>

      <div className="space-y-4">
        {groups.map((group, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p className="text-xs text-portfolio-muted w-36 flex-shrink-0 font-medium">
              {group.title}
            </p>

            <div className="flex flex-wrap gap-2 flex-1">
              {group.items.map((item, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs rounded-full border ${getColor(item)}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
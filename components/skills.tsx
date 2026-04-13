"use client"

import { Database, Code, LineChart, Globe, Sparkles } from "lucide-react"

const skillCategories = [
  {
    name: "Data & Visualization",
    icon: LineChart,
    color: "from-teal-500/20 to-teal-500/5",
    skills: [
      { name: "Excel (Pivot, VLOOKUP, Power Query)", level: 95 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib & Seaborn", level: 85 },
    ],
  },
  {
    name: "Programming",
    icon: Code,
    color: "from-blue-500/20 to-blue-500/5",
    skills: [
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: 90 },
      { name: "SQL (MySQL, PostgreSQL)", level: 90 },
      { name: "JavaScript", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    name: "ML & Statistics",
    icon: Sparkles,
    color: "from-purple-500/20 to-purple-500/5",
    skills: [
      { name: "Supervised & Unsupervised Learning", level: 80 },
      { name: "Feature Engineering", level: 80 },
      { name: "EDA & Hypothesis Testing", level: 90 },
      { name: "Time-Series Forecasting", level: 75 },
    ],
  },
  {
    name: "Web Technologies",
    icon: Globe,
    color: "from-orange-500/20 to-orange-500/5",
    skills: [
      { name: "React.js", level: 70 },
      { name: "Node.js & Express.js", level: 65 },
      { name: "HTML & CSS", level: 80 },
      { name: "Git", level: 75 },
    ],
  },
]

const technologies = [
  "Python", "SQL", "Excel", "Power BI", "Tableau", "Pandas", "NumPy",
  "Scikit-learn", "Matplotlib", "Seaborn", "MySQL", "PostgreSQL",
  "MongoDB", "Jupyter", "Git", "React.js", "Node.js", "Google Sheets",
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>
          
          <p className="text-muted-foreground mb-16 max-w-xl">
            Technologies and tools I use to transform data into insights.
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-3 mb-16">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary/50 text-foreground rounded-full text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Skill cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-6">{category.name}</h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground text-sm">{skill.name}</span>
                        <span className="text-primary text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-700 group-hover:from-primary group-hover:to-primary"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

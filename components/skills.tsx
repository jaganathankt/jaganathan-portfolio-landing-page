"use client"

import { useState } from "react"

const skillCategories = [
  {
    name: "Data & Visualization",
    skills: [
      { name: "Excel (Pivot, VLOOKUP, Power Query)", level: 95 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Matplotlib & Seaborn", level: 85 },
    ],
  },
  {
    name: "Programming",
    skills: [
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: 90 },
      { name: "SQL (MySQL, PostgreSQL)", level: 90 },
      { name: "JavaScript", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    name: "ML & Statistics",
    skills: [
      { name: "Supervised & Unsupervised Learning", level: 80 },
      { name: "Feature Engineering", level: 80 },
      { name: "EDA & Hypothesis Testing", level: 90 },
      { name: "Time-Series Forecasting", level: 75 },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "React.js", level: 70 },
      { name: "Node.js & Express.js", level: 65 },
      { name: "HTML & CSS", level: 80 },
      { name: "Git", level: 75 },
    ],
  },
]

const technologies = [
  "Python",
  "SQL",
  "Excel",
  "Power BI",
  "Tableau",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Seaborn",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Jupyter Notebook",
  "Git",
  "React.js",
  "Node.js",
  "Google Sheets",
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="mb-12">
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Here are the technologies and tools I work with to transform data into insights:
          </p>
          
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium border border-border hover:border-accent/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 md:p-8">
          <div className="flex gap-2 mb-8 border-b border-border overflow-x-auto">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  activeCategory === index
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
                {activeCategory === index && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                )}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {skillCategories[activeCategory].skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

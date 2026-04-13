"use client"

import { Database, Code, LineChart, Globe, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    name: "Data & Visualization",
    icon: LineChart,
    color: "from-teal-500/20 to-teal-500/5",
    borderColor: "hover:border-teal-500/50",
    iconColor: "text-teal-400",
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
    borderColor: "hover:border-blue-500/50",
    iconColor: "text-blue-400",
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
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "hover:border-violet-500/50",
    iconColor: "text-violet-400",
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
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "hover:border-amber-500/50",
    iconColor: "text-amber-400",
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

function AnimatedProgressBar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
        style={{ width: inView ? `${level}%` : "0%" }}
      />
    </div>
  )
}

export function Skills() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Skills</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
          
          <p className="text-muted-foreground mb-16 max-w-xl">
            Technologies and tools I use to transform data into insights.
          </p>

          {/* Animated technology tags marquee */}
          <div className="relative mb-16 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex gap-4 animate-marquee">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="px-5 py-2.5 glass text-foreground rounded-full text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skill cards grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.name}
                className={`group glass border border-border rounded-2xl p-6 ${category.borderColor} transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 animate-slide-up`}
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-6">{category.name}</h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-slide-in-left"
                      style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground text-sm">{skill.name}</span>
                        <span className="text-primary text-sm font-medium">{skill.level}%</span>
                      </div>
                      <AnimatedProgressBar level={skill.level} inView={inView} />
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

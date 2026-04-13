"use client"

import { useState } from "react"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Figma", level: 75 },
      { name: "Agile/Scrum", level: 80 },
    ],
  },
]

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "AWS",
  "Tailwind CSS",
]

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="mb-12">
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Here are the technologies and tools I&apos;ve been working with recently:
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
          <div className="flex gap-2 mb-8 border-b border-border">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-3 text-sm font-medium transition-colors relative ${
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

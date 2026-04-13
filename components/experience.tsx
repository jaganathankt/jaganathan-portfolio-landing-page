"use client"

import { useState } from "react"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Bluekode Solutions",
    location: "Coimbatore, Tamil Nadu",
    role: "Data Analyst & Trainer",
    period: "June 2025 – Present",
    type: "current",
    description: "Managing end-to-end data analysis operations while designing and delivering Data Science curriculum.",
    highlights: [
      "Led team of 5 interns on Kovai Palamuthir Nilayam analysis — price forecasting, sales & competitive analysis",
      "Built automated performance evaluation system for interview candidates across aptitude, technical, and HR rounds",
      "Guided 50+ students toward Data Analyst placements in MNC companies",
      "Conducted hands-on training with real-world business datasets",
    ],
    skills: ["Python", "SQL", "Power BI", "Tableau", "Excel"],
  },
  {
    company: "Edureka Learning Centre",
    location: "RS Puram, Coimbatore",
    role: "Data Science & Analytics Trainer",
    period: "June 2022 – May 2025",
    type: "past",
    description: "Delivered comprehensive Data Science training through multiple formats including classroom sessions, webinars, and seminars.",
    highlights: [
      "Trained 200+ learners through capstone analytics projects emphasizing analytical thinking",
      "Partnered with managers to design programs aligned with industry demand for SQL, Python, and BI tools",
      "Created hands-on exercises with real datasets — data cleaning, pivot analysis, dashboard building",
      "Performed EDA and visualizations using Matplotlib, Seaborn, Power BI, and Tableau",
    ],
    skills: ["Python", "SQL", "Matplotlib", "Seaborn", "Power BI"],
  },
  {
    company: "Vilfresh (Laymen Agro Ventures)",
    location: "Coimbatore",
    role: "Distribution Agent",
    period: "June 2018 – May 2022",
    type: "past",
    description: "Managed logistics and delivery operations, developing strong organizational and communication skills.",
    highlights: [
      "Managed timely delivery of goods across Coimbatore with strong organizational skills",
      "Coordinated with dispatch and team members to optimize delivery and resolve issues",
    ],
    skills: ["Logistics", "Communication", "Time Management"],
  },
]

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>
          
          <p className="text-muted-foreground mb-16 max-w-xl">
            My professional journey through data analytics and training.
          </p>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tab buttons - Left side */}
            <div className="lg:col-span-3">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all whitespace-nowrap lg:whitespace-normal min-w-fit ${
                      activeIndex === index
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border-l-2 border-transparent"
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Content - Right side */}
            <div className="lg:col-span-9">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {experiences[activeIndex].role}
                    </h3>
                    <p className="text-primary font-semibold text-lg flex items-center gap-2">
                      {experiences[activeIndex].company}
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                  {experiences[activeIndex].type === "current" && (
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                      Current
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {experiences[activeIndex].period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {experiences[activeIndex].location}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {experiences[activeIndex].description}
                </p>

                <ul className="space-y-3 mb-8">
                  {experiences[activeIndex].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeIndex].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Briefcase, ChevronRight, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experienceImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80",
]

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
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % experienceImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0">
        {experienceImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              index === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-background/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 left-10 w-24 h-24 border border-primary/20 rounded-full animate-float opacity-20" style={{ animationDelay: "-2s" }} />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
          
          <p className="text-muted-foreground mb-16 max-w-xl">
            My professional journey through data analytics and training.
          </p>

          {/* Timeline view */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative md:pl-20 transition-all duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-8 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center transition-all ${
                    activeIndex === index 
                      ? "border-primary bg-primary scale-125" 
                      : "border-border bg-background hover:border-primary"
                  }`}>
                    {activeIndex === index && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>

                  {/* Content card */}
                  <div 
                    className={`glass border rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 ${
                      activeIndex === index 
                        ? "border-primary/50 shadow-lg shadow-primary/10" 
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                          activeIndex === index ? "bg-primary/20" : "bg-secondary"
                        }`}>
                          <Building2 className={`w-7 h-7 ${activeIndex === index ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-semibold text-lg flex items-center gap-2">
                            {exp.company}
                            <ChevronRight className={`w-4 h-4 transition-transform ${activeIndex === index ? "rotate-90" : ""}`} />
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.type === "current" && (
                          <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 animate-pulse">
                            Current
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50">
                        <MapPin className="w-4 h-4 text-primary" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Expandable content */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {exp.highlights.map((highlight, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-3 text-muted-foreground animate-slide-in-left"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Collapsed preview */}
                    {activeIndex !== index && (
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

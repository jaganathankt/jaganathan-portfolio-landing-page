"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Bluekode Solutions",
    location: "Coimbatore, Tamil Nadu",
    role: "Data Analyst & Data Analytics & Science Trainer",
    period: "June 2025 – Present",
    type: "current",
    responsibilities: [
      "Managed end-to-end real-time data analysis operations for the academy — from student performance tracking to operational metrics.",
      "Designed and delivered Data Science and Analytics curriculum covering Python, SQL, Excel, Power BI, and Tableau.",
      "Led a team of 5 interns on the Kovai Palamuthir Nilayam analysis project — covering price forecasting, food cost analysis, sales analysis, product analysis, and competitive analysis.",
      "Built an automated performance evaluation report system for Bluekode Consulting — generating post-evaluation reports for interview candidates based on aptitude, technical, and HR round scores.",
      "Guided and mentored 50+ students toward Data Analyst placements in MNC companies — providing resume building, interview prep, and portfolio guidance.",
      "Conducted hands-on training sessions with real-world business datasets, enabling students to build production-quality analytical workflows.",
    ],
  },
  {
    company: "Edureka Learning Centre",
    location: "RS Puram, Coimbatore",
    role: "Data Science & Analytics Trainer",
    period: "June 2022 – May 2025",
    type: "past",
    responsibilities: [
      "Delivered Data Science and Analytics training via classroom sessions, webinars, seminars, and informal Q&A — engaging participants across diverse departments and skill levels.",
      "Partnered with managers to assess training requirements and designed impactful programs aligned to industry demand for SQL, Python, and BI tools.",
      "Built hands-on exercises around real datasets — including data cleaning, pivot analysis, and dashboard building using Excel and Power BI.",
      "Guided 200+ learners through capstone analytics projects emphasizing analytical thinking and business problem-solving.",
      "Performed EDA and created visualizations using Matplotlib, Seaborn, Power BI, and Tableau on real-world business datasets.",
    ],
  },
  {
    company: "Vilfresh (Laymen Agro Ventures)",
    location: "Coimbatore",
    role: "Distribution Agent",
    period: "June 2018 – May 2022",
    type: "past",
    responsibilities: [
      "Managed timely delivery of goods to customers across Coimbatore — developing strong organizational and time-management skills.",
      "Maintained clear communication with dispatch and team members to optimize delivery coordination and resolve issues proactively.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            My journey through various roles in data analytics, training, and team leadership.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="bg-card border-border hover:border-accent/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-accent" />
                            {exp.role}
                          </h3>
                          <p className="text-accent font-medium mt-1">{exp.company}</p>
                        </div>
                        {exp.type === "current" && (
                          <Badge className="bg-accent/20 text-accent border-accent/30">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

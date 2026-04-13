"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Folder, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projectImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80",
]

const projects = [
  {
    title: "Automated Interview Performance Report System",
    company: "Bluekode Consulting",
    description: "Built an automated report generation system that evaluates candidate performance across aptitude, technical, and HR rounds. System processes evaluation scores and instantly generates structured performance reports — reducing manual reporting time by 80%.",
    tools: ["Python", "Excel", "Power BI"],
    featured: true,
    highlights: [
      "Automated report generation",
      "80% reduction in manual work",
      "Multi-round evaluation tracking",
    ],
  },
  {
    title: "Kovai Palamuthir Nilayam Analysis",
    company: "Team Lead Project",
    description: "Led a team of 5 interns; executed parallel analysis across price forecasting, food cost, sales, product, and competitive dimensions. Developed Power BI dashboards for each analysis arm — enabling real-time tracking of KPIs by the management team.",
    tools: ["Python", "Pandas", "SQL", "Power BI", "Matplotlib"],
    featured: true,
    highlights: [
      "Led team of 5 interns",
      "Multi-domain analysis",
      "Real-time KPI dashboards",
    ],
  },
  {
    title: "Zomato Sales & Operations Dashboard",
    company: "Analytics Project",
    description: "Analyzed Zomato order data to identify top-selling categories, peak order hours, and delivery performance across branches. Built Excel pivot dashboards and Power BI reports — highlighting revenue trends, customer ratings, and product performance.",
    tools: ["Excel", "Power BI", "SQL"],
    featured: true,
    highlights: [
      "Order data analysis",
      "Revenue trend visualization",
      "Branch performance comparison",
    ],
  },
  {
    title: "Supermarket Sales Analytics",
    company: "EDA Project",
    description: "Performed EDA on 1,000+ transaction records: revenue by branch, product line, gender, and payment method. Built pivot tables and interactive charts to visualize sales performance across multiple dimensions.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Excel"],
    featured: false,
    highlights: [
      "1,000+ transactions analyzed",
      "Multi-dimensional analysis",
      "Actionable recommendations",
    ],
  },
  {
    title: "Movie Recommendation System",
    company: "ML Project",
    description: "Built a movie recommendation engine integrating content-based and collaborative filtering algorithms. Cleaned and preprocessed movie metadata and user ratings datasets; performed EDA to understand viewing patterns.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
    featured: false,
    highlights: [
      "Hybrid recommendation engine",
      "Content & collaborative filtering",
      "Interactive dashboard",
    ],
  },
]

export function Projects() {
  const [bgIndex, setBgIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState<"all" | "featured">("all")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % projectImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const filteredProjects = activeFilter === "featured" 
    ? projects.filter(p => p.featured) 
    : projects

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {projectImages.map((img, index) => (
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

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 border border-primary/10 rounded-full animate-float opacity-20" />
      <div className="absolute bottom-20 left-20 w-48 h-48 border border-primary/10 rounded-full animate-float opacity-30" style={{ animationDelay: "-4s" }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-xl">
            Data analytics projects that demonstrate my expertise in transforming data into insights.
          </p>

          {/* Filter buttons */}
          <div className="flex gap-3 mb-12">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("all")}
              className={activeFilter === "all" 
                ? "bg-primary text-primary-foreground" 
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              All Projects
            </Button>
            <Button
              variant={activeFilter === "featured" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("featured")}
              className={activeFilter === "featured" 
                ? "bg-primary text-primary-foreground" 
                : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              <Star className="w-4 h-4 mr-1" />
              Featured
            </Button>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group glass border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Folder className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <p className="text-primary text-sm font-medium mb-2">{project.company}</p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary/80 text-muted-foreground border border-border group-hover:border-primary/30 group-hover:text-foreground transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Hover overlay effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl`} 
                />
              </div>
            ))}
          </div>

          {/* View more link */}
          <div className="flex justify-center mt-12">
            <a
              href="https://github.com/jaganathankt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium group"
            >
              <Github className="w-5 h-5" />
              View more on GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Phone } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-accent text-lg mb-4 font-medium">Hello, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
          <span className="text-balance">Jaganathan K T</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-8 text-pretty">
          Data Analyst & Trainer
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Data Analyst with 4+ years of experience transforming raw data into actionable 
          business insights. Proficient in Python, SQL, Excel, Power BI, and Tableau. 
          Skilled at communicating complex data findings to diverse audiences.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            onClick={() => scrollToSection("about")}
            className="border-border text-foreground hover:bg-secondary"
          >
            Learn More
          </Button>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://github.com/jaganathankt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/jaganathankt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:jaganathankt542@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="tel:+919952734175"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Phone"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}

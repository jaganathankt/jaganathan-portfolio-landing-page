"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight leading-none">
            <span className="text-balance">Jaganathan K T</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-8">
            Data Analyst & Trainer
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Transforming raw data into <span className="text-foreground font-medium">actionable business insights</span>. 
            4+ years of experience in data analytics with expertise in Python, SQL, Power BI, and Tableau.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-medium"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="border-border text-foreground hover:bg-secondary hover:border-primary/50 px-8 h-12 text-base"
            >
              View Experience
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Connect</span>
            <div className="h-px w-12 bg-border" />
            <div className="flex gap-4">
              <a 
                href="https://github.com/jaganathankt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jaganathankt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:jaganathankt542@gmail.com"
                className="w-11 h-11 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+919952734175"
                className="w-11 h-11 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  )
}

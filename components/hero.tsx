"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, ChevronDown, Sparkles } from "lucide-react"
import { BackgroundCarousel } from "./background-carousel"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background carousel */}
      <BackgroundCarousel overlay="mesh" speed={5000} />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.28_0.02_240)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.28_0.02_240)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
            <span className="text-foreground text-balance">Jaganathan</span>
            <span className="block text-gradient">K T</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-8 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            Data Analyst & Trainer
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Transforming raw data into <span className="text-foreground font-medium">actionable business insights</span>. 
            4+ years of experience in data analytics with expertise in Python, SQL, Power BI, and Tableau.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="border-border text-foreground hover:bg-secondary hover:border-primary/50 px-8 h-12 text-base backdrop-blur-sm hover:scale-105 transition-all"
            >
              View Experience
            </Button>
          </div>

          <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Connect</span>
            <div className="h-px w-12 bg-gradient-to-r from-border to-primary/50" />
            <div className="flex gap-4">
              {[
                { href: "https://github.com/jaganathankt", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/jaganathankt", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:jaganathankt542@gmail.com", icon: Mail, label: "Email" },
                { href: "tel:+919952734175", icon: Phone, label: "Phone" },
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-11 h-11 rounded-lg glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all"
                  aria-label={social.label}
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors group"
        aria-label="Scroll to About section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </div>
      </button>
    </section>
  )
}

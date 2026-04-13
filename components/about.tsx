"use client"

import { BarChart3, GraduationCap, Users, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 4, suffix: "+", label: "Years Experience", icon: TrendingUp },
  { value: 500, suffix: "+", label: "Students Trained", icon: GraduationCap },
  { value: 50, suffix: "+", label: "MNC Placements", icon: Users },
  { value: 10, suffix: "+", label: "Projects Delivered", icon: BarChart3 },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = value / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref}>{count}{suffix}</span>
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
          
          <p className="text-muted-foreground mb-16 max-w-xl">
            A glimpse into my background and what drives me.
          </p>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a <span className="text-foreground font-medium">Data Analyst</span> with 4+ years of combined 
                experience in data analytics, data science training, and real-time data analysis. My journey started 
                with a passion for uncovering insights hidden in numbers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently at <span className="text-primary font-medium">Bluekode Solutions</span>, I manage end-to-end 
                data analysis operations while training the next generation of data professionals. I&apos;ve led teams 
                on complex analysis projects including price forecasting, sales analysis, and competitive analysis.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe in the power of <span className="text-foreground font-medium">data storytelling</span> and 
                making complex findings accessible to everyone — from students to business stakeholders.
              </p>
              
              <div className="pt-4">
                <p className="text-foreground font-medium mb-4">Technologies I work with:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Python", "SQL", "Excel", "Power BI", "Tableau", "Pandas"].map((tech, index) => (
                    <div 
                      key={tech} 
                      className="flex items-center gap-2 text-muted-foreground group hover:text-foreground transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 animate-pulse-glow" />
                  <div className="absolute inset-4 rounded-xl glass flex items-center justify-center overflow-hidden">
                    <span className="text-8xl font-bold text-gradient">JK</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/30 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all group hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

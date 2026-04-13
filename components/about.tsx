import { BarChart3, GraduationCap, Users, TrendingUp } from "lucide-react"

const stats = [
  { value: "4+", label: "Years Experience", icon: TrendingUp },
  { value: "200+", label: "Learners Trained", icon: GraduationCap },
  { value: "50+", label: "MNC Placements", icon: Users },
  { value: "10+", label: "Projects Delivered", icon: BarChart3 },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
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
                  {["Python", "SQL", "Excel", "Power BI", "Tableau", "Pandas"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20" />
                  <div className="absolute inset-4 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-8xl font-bold text-primary/30">JK</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/30 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <stat.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

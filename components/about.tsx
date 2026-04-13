import { BarChart3, GraduationCap, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Data Analyst with 4+ years of combined experience in data analytics, 
              data science training, and real-time data analysis. My journey in data started 
              with a passion for uncovering insights hidden in numbers, and I&apos;ve been 
              transforming raw data into actionable business intelligence ever since.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently working at Bluekode Solutions, I manage end-to-end data analysis 
              operations while also training the next generation of data professionals. I&apos;ve 
              led teams on complex analysis projects including price forecasting, sales analysis, 
              and competitive analysis for real businesses.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in the power of data storytelling and making complex findings accessible 
              to everyone — from students to business stakeholders. I&apos;ve guided 200+ learners 
              through their data analytics journey and mentored 50+ students toward successful 
              placements in MNC companies.
            </p>
          </div>

          <div className="flex justify-center items-start">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg bg-secondary overflow-hidden border-2 border-accent/30">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent/50">JK</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-48 h-48 md:w-56 md:h-56 border-2 border-accent rounded-lg -z-10" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
            <BarChart3 className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-foreground font-semibold mb-2">Data Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Transforming complex datasets into clear, actionable business insights.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
            <GraduationCap className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-foreground font-semibold mb-2">Training & Mentorship</h3>
            <p className="text-muted-foreground text-sm">
              Guided 200+ learners and mentored 50+ students toward MNC placements.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
            <Users className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-foreground font-semibold mb-2">Team Leadership</h3>
            <p className="text-muted-foreground text-sm">
              Led intern teams on multi-domain analysis projects with real business impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

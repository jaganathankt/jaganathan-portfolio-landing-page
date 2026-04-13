import { Code, BookOpen, Lightbulb } from "lucide-react"

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
              I&apos;m a third-year Computer Science student at Stanford University with a passion 
              for building software that makes a difference. My journey in tech started when I 
              built my first website at 14, and I&apos;ve been hooked ever since.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently, I&apos;m exploring the intersection of web development and machine learning, 
              working on projects that leverage AI to enhance user experiences. When I&apos;m not 
              coding, you&apos;ll find me contributing to open-source projects or mentoring 
              fellow students in our university&apos;s coding club.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in writing clean, maintainable code and creating products that are 
              accessible to everyone. My goal is to join a team where I can continue learning 
              while making meaningful contributions to impactful projects.
            </p>
          </div>

          <div className="flex justify-center items-start">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg bg-secondary overflow-hidden border-2 border-accent/30">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent/50">AC</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-48 h-48 md:w-56 md:h-56 border-2 border-accent rounded-lg -z-10" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
            <Code className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-foreground font-semibold mb-2">Development</h3>
            <p className="text-muted-foreground text-sm">
              Full-stack development with modern frameworks and best practices.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
            <BookOpen className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-foreground font-semibold mb-2">Research</h3>
            <p className="text-muted-foreground text-sm">
              Exploring machine learning applications in web accessibility.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
            <Lightbulb className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-foreground font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground text-sm">
              Building creative solutions to complex technical challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

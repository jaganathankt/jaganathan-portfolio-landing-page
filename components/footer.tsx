import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          Designed & Built by Jaganathan K T
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/jaganathankt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/jaganathankt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:jaganathankt542@gmail.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

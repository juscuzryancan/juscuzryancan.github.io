import { Button } from "./ui/button"
import { Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="h-full flex items-center justify-center bg-gradient-to-r from-primary to-primary-foreground text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Jane Doe</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Full Stack Software Engineer passionate about creating innovative and efficient web solutions.
        </p>
        <div className="space-x-4">
          <Button variant="secondary" size="lg" asChild>
            <a href="mailto:jane.doe@example.com">Contact Me</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "./ui/button"
import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    demoLink: "https://ecommerce-demo.example.com",
    codeLink: "https://github.com/janedoe/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with a Django backend.",
    image: "/placeholder.svg?height=200&width=300",
    demoLink: "https://tasks-demo.example.com",
    codeLink: "https://github.com/janedoe/task-management-app",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard using React and integrating with a third-party weather API.",
    image: "/placeholder.svg?height=200&width=300",
    demoLink: "https://weather-demo.example.com",
    codeLink: "https://github.com/janedoe/weather-dashboard",
  },
]

export default function Projects() {
  return (
    <section className="h-full flex items-center justify-center bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <Button asChild variant="secondary">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Code, Server, Database, Globe } from "lucide-react"

const skills = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Frontend Development",
    description: "React, Next.js, JavaScript, Tailwind CSS",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Backend Development",
    description: "Node.js, Express, Python, Django",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Database Management",
    description: "PostgreSQL",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "DevOps & Cloud",
    description: "Docker, Kubernetes, AWS, CI/CD",
  },
]

export default function Skills() {
  return (
    <section className="h-full flex items-center justify-center bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description:
      "Lead development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    period: "2017 - 2020",
    description:
      "Developed and maintained multiple client projects using various technologies including React, Angular, and Django.",
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Co.",
    period: "2015 - 2017",
    description:
      "Assisted in the development of responsive websites and implemented design mockups using HTML, CSS, and JavaScript.",
  },
]

export default function Experience() {
  return (
    <section className="h-full flex items-center justify-center bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {exp.title} at {exp.company}
                </CardTitle>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import SkillCard from "@/components/skill-card"
import { Server, Wrench, Layout } from "lucide-react"

export default function Skills() {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Vue.js",
    "Tailwind CSS",
    "Bootstrap",
    "SCSS",
    "Responsive Design",
    "Web Accessibility (WCAG)",
    "UI/UX principles",
    "Figma collaboration",
  ]

  const backendSkills = [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "JWT Authentication",
    "MongoDB",
    "Mongoose",
    "MySQL / PostgreSQL (basic)",
    "MVC Architecture",
  ]

  const toolsSkills = [
    "Git",
    "GitHub",
    "GitLab",
    "VS Code",
    "Postman",
    "Docker (basic)",
    "Agile/Scrum methodologies",
    "CI/CD pipelines (introductory)",
    "Basic testing with Katalon Studio, Jest",
  ]

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">Skills & Technologies</h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            A comprehensive toolkit that enables me to build complete, modern web applications
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard title="Frontend" skills={frontendSkills} icon={<Layout className="h-5 w-5 text-teal-600" />} />

            <SkillCard title="Backend" skills={backendSkills} icon={<Server className="h-5 w-5 text-emerald-600" />} />

            <SkillCard
              title="Tools & Workflow"
              skills={toolsSkills}
              icon={<Wrench className="h-5 w-5 text-cyan-600" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

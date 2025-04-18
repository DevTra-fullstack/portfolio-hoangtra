import ProjectCard from "@/components/project-card"

export default function Projects() {
  // Sample projects (placeholders)
  const projects = [
    /*{
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with product management, cart functionality, and secure checkout process.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, user authentication, and team workspaces.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Vue.js", "Tailwind CSS", "Express", "Socket.io", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },*/
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with a modern, clean design.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      demoUrl: "#",
      githubUrl: "https://github.com/DevTra-fullstack/portfolio-hoangtra",
    },
    /*{
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time forecasts, historical data, and location-based weather information.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description:
        "A content management system for creating and managing blog posts with user authentication and markdown support.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Finder",
      description:
        "An application that helps users discover recipes based on available ingredients, dietary restrictions, and preferences.",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Vue.js", "Vuex", "Food API", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },*/
  ]

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            A selection of my recent work, showcasing my technical skills and creative approach
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

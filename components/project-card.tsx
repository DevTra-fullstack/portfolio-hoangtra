import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, image, technologies, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        {demoUrl && (
          <Button variant="default" size="sm" asChild>
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

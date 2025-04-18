import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Welcome to the portfolio of{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Hoang Trong Tra
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 md:text-xl">
            A space where technical precision meets aesthetic sensibility, reflecting a deep passion for technology and
            software development.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="group h-12 px-6 text-base" asChild>
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" className="h-12 px-6 text-base" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-teal-100 opacity-20 blur-3xl"></div>
      <div className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
    </section>
  )
}

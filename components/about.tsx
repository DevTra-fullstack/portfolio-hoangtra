import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Server } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-lg text-gray-700">
                I&apos;m Hoang Trong Tra, a passionate Full-stack Developer who builds efficient, scalable, and
                user-friendly web applications.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                With a solid technical foundation and a strong eye for design, I strive to create digital experiences
                that are not only functional but also intuitive and visually engaging.
              </p>
              <p className="text-lg text-gray-700">
                I believe technology is more than just code—it&apos;s a bridge to better, smarter solutions. I
                continuously seek to grow my skill set and adapt to the evolving tech landscape, always aiming to
                deliver meaningful impact through development.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-64 w-64 overflow-hidden rounded-full bg-gradient-to-br from-teal-400 to-emerald-500">
                <img
                  src="/koroshiya-logo.jpg?height=256&width=256"
                  alt="Hoang Trong Tra"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-teal-100 p-3">
                  <Layout className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Frontend</h3>
                <p className="text-gray-600">
                  Crafting user-centric, elegant, and responsive interfaces with modern frameworks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-emerald-100 p-3">
                  <Server className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Backend</h3>
                <p className="text-gray-600">Building robust architecture with emphasis on performance and security.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-cyan-100 p-3">
                  <Code className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Full Stack</h3>
                <p className="text-gray-600">
                  Delivering complete, scalable, and high-quality solutions with modern technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

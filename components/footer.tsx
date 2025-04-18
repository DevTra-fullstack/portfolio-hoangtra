import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">Get In Touch</h2>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="bg-gray-800 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-800 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="bg-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[120px] bg-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">Contact Information</h2>
              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-teal-400" />
                  <p>Ho Chi Minh City, Vietnam</p>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 h-5 w-5 text-teal-400" />
                  <p>hoangtra@example.com</p>
                </div>
              </div>

              <h3 className="mb-4 text-xl font-medium text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Hoang Trong Tra. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-teal-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-teal-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

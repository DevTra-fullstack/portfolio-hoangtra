"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Hoang Trong Tra
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="#home" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-sm font-medium hover:text-primary">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-sm font-medium hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-md md:hidden">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="#home" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

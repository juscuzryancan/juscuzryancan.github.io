'use client'
import { Button } from "./ui/button"
import Link from "next/link"

export default function Header({ setActiveSection }) {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold text-primary cursor-pointer" >
          <Link href="/">Ryan Riley Puzon</Link>
        </span>
        <nav className="flex space-x-4">
          <Button variant="ghost">
            <Link href="/skills">Skills</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/experience">Experience</Link>
          </Button>
          <Button asChild>
            <Link href="/resume">Resume</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

"use client"
import { Button } from "./components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function Home() {

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow overflow-hidden">
        <section className="h-full flex items-center justify-center bg-gradient-to-r from-primary to-primary-foreground text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Ryan Riley Puzon</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Software Engineer
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
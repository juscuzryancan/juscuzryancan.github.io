"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectsListModal, { Project } from "./projects-list-modal";

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Sample Project",
    category: "web",
    description: "A sample project for demonstration",
    technologies: ["React", "TypeScript", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
    completed: "2024",
    teamSize: 1,
    difficulty: 3,
  }
];

export default function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>
        View Projects
      </Button>
      
      <ProjectsListModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        projects={projects}
        onProjectSelect={(project) => console.log("Selected:", project)}
      />
    </div>
  );
}

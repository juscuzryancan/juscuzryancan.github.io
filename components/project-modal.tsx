"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectsListModal from "./projects-list-modal";

export default function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <ProjectsListModal />
    </div>
  );
}

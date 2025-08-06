"use client";

import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  } from "@/components/ui/dialog";

interface ProjectsListModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  projects: Project[];
  onProjectSelect?: (project: Project) => void;
}

export default function ProjectsListModal({
  isOpen,
  onOpenChange,
  projects,
  onProjectSelect,
}: ProjectsListModalProps) {
  const { toast } = useToast();

  return <Dialog open={isOpen} ></Dialog>;
}


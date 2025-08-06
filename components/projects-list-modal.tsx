"use client";

import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogOverlay } from "@radix-ui/react-dialog";

interface ProjectsListModalProps {}

const projects = [
  {
    title: "Project 1",
  },
  {
    title: "Project 2",
  },
  {
    title: "Project 3",
  },
  {
    title: "Project 4",
  },
  {
    title: "Project 5",
  },
];

export default function ProjectsListModal() {
  return (
    <Dialog>
      <DialogTrigger className="flex flex-1" asChild>
        <Button>View All Projects</Button>
      </DialogTrigger>
      <DialogOverlay>
        <DialogContent className="max-w-[800px] w-[65vw] max-h-[500px] flex-1 overflow-scroll">
          <DialogHeader>
            <DialogTitle>Projects</DialogTitle>
          </DialogHeader>
          <DialogDescription>List of all projects</DialogDescription>
          <div className="flex flex-wrap gap-8 justify-start">
            {projects.map(({ title }) => (
              <Card className="flex-grow max-w-[200px]" key={title}>
                <CardTitle>{title}</CardTitle>
                <CardContent>Description Here</CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}

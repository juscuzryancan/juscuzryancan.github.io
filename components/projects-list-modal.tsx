"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { GithubIcon, ExternalLink } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  deploymentLink: string;
  githubLink: string;
  description: string;
  technology: string[];
};

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod vulputate pharetra. Sed accumsan dapibus justo, aliquet posuere augue consectetur.";

const projects: Project[] = [
  {
    title: "Virtual Traders",
    deploymentLink: "https://virtual-trader-44d67a97b643.herokuapp.com/",
    githubLink: "https://github.com/juscuzryancan/virtual-velocity",
    description: "An Ecommerce site to trade rare vintage trading cards",
    technology: ["React", "Postgres"],
  },
  {
    title: "Fitness Tracker",
    deploymentLink: "https://lit-tor-21021-b8c9417056cb.herokuapp.com/",
    githubLink: "https://github.com/juscuzryancan",
    description: loremIpsum,
    technology: ["React", "Postgres"],
  },
  {
    title: "Project 3",
    deploymentLink: "https:google.com",
    githubLink: "https://github.com/juscuzryancan",
    description: loremIpsum,
    technology: ["React", "Postgres"],
  },
  {
    title: "Project 4",
    deploymentLink: "https:google.com",
    githubLink: "https://github.com/juscuzryancan",
    description: loremIpsum,
    technology: ["React", "Postgres"],
  },
  {
    title: "Project 5",
    deploymentLink: "https:google.com",
    githubLink: "https://github.com/juscuzryancan",
    description: loremIpsum,
    technology: ["React", "Postgres"],
  },
];

type ProjectsListModalProps = {};

export default function ProjectsListModal({}: ProjectsListModalProps) {
  return (
    <Dialog>
      <DialogTrigger className="flex flex-1" asChild>
        <Button>View All Projects</Button>
      </DialogTrigger>
      <DialogOverlay>
        <DialogContent className="max-w-[1300px] min-[400px] max-h-[500px] flex-1 overflow-scroll">
          <DialogHeader>
            <DialogTitle>Projects</DialogTitle>
          </DialogHeader>
          <DialogDescription>List of all projects</DialogDescription>
          <div className="flex flex-wrap gap-8 md:justify-start justify-center">
            {projects.map(
              ({
                title,
                githubLink,
                deploymentLink,
                description,
                technology,
              }) => (
                <Card
                  className="flex flex-col basis-[300px] flex-grow md:min-w-[260w]"
                  key={title}
                >
                  <CardTitle className="p-6 pb-3">{title}</CardTitle>
                  <CardContent className="flex-grow">{description}</CardContent>
                  <CardContent>
                    Techonlogy: {technology?.join(", ")}
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link href={githubLink} target="_blank">
                        <GithubIcon />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={deploymentLink} target="_blank">
                        <ExternalLink />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ),
            )}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}

"use client";

import { useState } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Star,
  Search,
  X,
  Calendar,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

// Project data
const projects = [
  {
    id: 1,
    title: "adsfjio",
    category: "ajsdif",
    description: "ajsdifo",
    technologies: ["adifoj", "jasiodfj"],
    difficulty: 5,
    completed: "2023",
    teamSize: 3,
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    details: "jasdifojasdoifjaosdfij",
  },
];

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Virtual Traders",
    category: "web",
    description:
      "A fullstack application for a trading card shop with a full frontend and backend",
    longDescription:
      "Complete e-commerce solution built with React and Express.js",
    technologies: ["React", "Express", "Node.js", "PostgreSQL"],
    imageUrl: "/virtual-traders.png",
    demoUrl: "https://virtual-trader-44d67a97b643.herokuapp.com/",
    githubUrl: "https://github.com/juscuzryancan/virtual-velocity",
    color: "from-blue-600 to-violet-600",
    featured: true,
    completed: "2020",
    teamSize: 4,
    difficulty: 5,
    achievements: ["Created full-stack e-commerce platform"],
    categories: ["web", "fullstack"],
  },
  {
    id: 2,
    title: "Fitness Tracker",
    category: "web",
    description: "Fullstack application for a fitness tracker",
    longDescription:
      "Personal fitness tracking application with data visualization",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/placeholder.svg",
    demoUrl: "https://lit-tor-21021-b8c9417056cb.herokuapp.com/",
    githubUrl: "https://github.com/juscuzryancan/strangers-react",
    color: "from-green-600 to-teal-600",
    featured: false,
    completed: "2020",
    teamSize: 1,
    difficulty: 3,
    achievements: ["Built personal fitness tracking system"],
    categories: ["web", "health"],
  },
  {
    id: 3,
    title: "Voice Cloning Suite",
    category: "ai",
    description: "Real-time voice cloning and audio processing system",
    longDescription:
      "Advanced AI system for voice synthesis and audio manipulation",
    technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI"],
    imageUrl: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    color: "from-purple-600 to-pink-600",
    featured: true,
    completed: "2023",
    teamSize: 3,
    difficulty: 5,
    achievements: ["Achieved 95% voice similarity", "Real-time processing"],
    categories: ["ai", "audio"],
  },
  {
    id: 4,
    title: "Data Analytics Platform",
    category: "data",
    description: "Comprehensive data analysis and visualization platform",
    longDescription: "Business intelligence platform with advanced analytics",
    technologies: ["Python", "Pandas", "D3.js", "PostgreSQL"],
    imageUrl: "/placeholder.svg",
    demoUrl: "#",
    githubUrl: "#",
    color: "from-orange-600 to-red-600",
    featured: false,
    completed: "2022",
    teamSize: 2,
    difficulty: 4,
    achievements: ["Processed 1M+ data points", "Real-time dashboards"],
    categories: ["data", "analytics"],
  },
];

// Filter types
type CategoryFilter = string | null;
type DifficultyFilter = number | null;
type TeamSizeFilter = number | null;

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>(null);
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>(null);
  const [teamSizeFilter, setTeamSizeFilter] = useState<TeamSizeFilter>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const { toast } = useToast();

  const featuredProject = projects.find((project) => project.featured);

  // Filter projects based on search and filters
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      !categoryFilter || project.category === categoryFilter;
    const matchesDifficulty =
      !difficultyFilter || project.difficulty === difficultyFilter;
    const matchesTeamSize =
      !teamSizeFilter || project.teamSize === teamSizeFilter;

    return (
      matchesSearch && matchesCategory && matchesDifficulty && matchesTeamSize
    );
  });

  // Get unique categories for filter
  const categories = Array.from(
    new Set(projects.map((project) => project.category)),
  );

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter(null);
    setDifficultyFilter(null);
    setTeamSizeFilter(null);
  };

  // Handle demo click
  const handleDemoClick = (url: string) => {
    toast({
      title: "Demo Link",
      description: "Opening demo in a new tab...",
      duration: 3000,
    });
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"></p>
      </motion.div>

      {featuredProject && (
        <div className="mb-12">
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Project
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none bg-gradient-to-br from-blue-900/30 to-purple-900/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl">
                  <Image
                    src={featuredProject.images[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <Badge className="mb-2">{featuredProject.category}</Badge>
                      <h3 className="text-xl font-bold">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Completed: {featuredProject.completed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Team Size: {featuredProject.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 group"
                      onClick={() => handleDemoClick(featuredProject.demoUrl)}
                    >
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => {
                        setSelectedProject(featuredProject);
                        setIsDialogOpen(true);
                      }}
                    >
                      <Code className="h-4 w-4" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )}

      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Select
              value={categoryFilter || ""}
              onValueChange={(value) => setCategoryFilter(value || null)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={difficultyFilter?.toString() || ""}
              onValueChange={(value) =>
                setDifficultyFilter(value ? Number.parseInt(value) : null)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem key={level} value={level.toString()}>
                    {level} {level === 1 ? "Star" : "Stars"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="icon"
              onClick={resetFilters}
              className="shrink-0"
              aria-label="Reset filters"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects match your filters. Try adjusting your search
              criteria.
            </p>
            <Button variant="link" onClick={resetFilters} className="mt-2">
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="project-card"
                  >
                    <div className="p-6">
                      <Badge className="mb-3">{project.category}</Badge>
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            />
                          ))}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Team: {project.teamSize}
                        </div>
                      </div>

                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          setSelectedProject(project);
                          setIsDialogOpen(true);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          {selectedProject && (
            <div className="flex flex-col h-full">
              <DialogHeader className="px-6 pt-6 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2">{selectedProject.category}</Badge>
                    <DialogTitle className="text-2xl">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs defaultValue="overview" className="flex-1 overflow-hidden">
                <TabsList className="px-6 justify-start border-b rounded-none">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
                </TabsList>

                <ScrollArea className="flex-1 p-6">
                  <TabsContent value="overview" className="mt-0 h-full">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-3">
                          Project Details
                        </h4>
                        <p className="mb-6">{selectedProject.details}</p>

                        <h4 className="text-lg font-semibold mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                          <Button variant="outline" className="gap-2" asChild>
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">
                          Project Info
                        </h4>
                        <div className="space-y-4">
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">
                              Completed
                            </span>
                            <span>{selectedProject.completed}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">
                              Team Size
                            </span>
                            <span>{selectedProject.teamSize} people</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">
                              Difficulty
                            </span>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center p-6">
                        <h4 className="text-lg font-semibold mb-2">
                          Interactive Demo
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          Experience the project firsthand with our interactive
                          demo.
                        </p>
                        <Button
                          onClick={() =>
                            handleDemoClick(selectedProject.demoUrl)
                          }
                          className="gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Launch Demo
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Button onClick={() => setShowProjectsModal(true)} className="w-full">
        View All Projects ({sampleProjects.length})
      </Button>

      <ProjectsListModal
        isOpen={showProjectsModal}
        onOpenChange={setShowProjectsModal}
        projects={sampleProjects}
        onProjectSelect={handleProjectSelect}
      />
    </section>
  );
}

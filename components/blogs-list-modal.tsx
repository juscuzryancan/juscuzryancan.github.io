"use client";

import GenericListModal, { ListItem } from "./generic-list-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  BookOpen,
  Brain,
  Users,
  Code,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export interface BlogPost extends ListItem {
  id: number;
  title: string;
  excerpt?: string;
  coverImage?: string;
  date: string;
  readTime: string;
  views: number;
  categories: string[];
  featured?: boolean;
  author?: string;
  content?: string;
}

interface BlogsListModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  blogPosts: BlogPost[];
  onBlogSelect?: (blog: BlogPost) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  ai: <Brain className="h-4 w-4" />,
  community: <Users className="h-4 w-4" />,
  education: <BookOpen className="h-4 w-4" />,
  mlops: <Code className="h-4 w-4" />,
  devops: <Code className="h-4 w-4" />,
  diversity: <Users className="h-4 w-4" />,
  "ai ethics": <Brain className="h-4 w-4" />,
  "edge computing": <Brain className="h-4 w-4" />,
  default: <Lightbulb className="h-4 w-4" />,
};

const categoryLabels: Record<string, string> = {
  ai: "Artificial Intelligence",
  community: "Community Building",
  education: "Education & Learning",
  mlops: "MLOps & Infrastructure",
  devops: "DevOps & Deployment",
  diversity: "Diversity & Inclusion",
  "ai ethics": "AI Ethics",
  "edge computing": "Edge Computing",
};

export default function BlogsListModal({
  isOpen,
  onOpenChange,
  blogPosts,
  onBlogSelect,
}: BlogsListModalProps) {
  const { toast } = useToast();

  const handleReadMore = (blog: BlogPost, e?: React.MouseEvent) => {
    e?.stopPropagation();
    toast({
      title: "Blog Post",
      description:
        "This would navigate to the full blog post in a real implementation.",
      duration: 3000,
    });
  };

  // Get unique categories for filter
  const categories = Array.from(
    new Set(
      blogPosts.flatMap((post) =>
        post.categories.map((cat) => cat.toLowerCase()),
      ),
    ),
  ).map((cat) => ({
    value: cat,
    label: categoryLabels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1),
  }));

  // Get read time ranges for filter
  const readTimeRanges = [
    { value: "short", label: "Quick Read (< 5 min)" },
    { value: "medium", label: "Medium Read (5-10 min)" },
    { value: "long", label: "Long Read (> 10 min)" },
  ];

  const renderBlogItem = (blog: BlogPost, onSelect: () => void) => (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
      onClick={onSelect}
    >
      <div className="relative aspect-video overflow-hidden">
        {blog.coverImage ? (
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
        )}

        {/* Featured badge */}
        {blog.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}

        {/* Read time overlay */}
        <div className="absolute bottom-4 right-4">
          <Badge variant="secondary" className="bg-black/70 text-white">
            {blog.readTime}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {blog.categories.slice(0, 2).map((category, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {categoryLabels[category.toLowerCase()] || category}
            </Badge>
          ))}
          {blog.categories.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{blog.categories.length - 2}
            </Badge>
          )}
        </div>

        <h3 className="font-bold mb-2 line-clamp-2 flex-1">{blog.title}</h3>

        {blog.excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {blog.excerpt}
          </p>
        )}

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mt-auto">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{blog.views.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-full gap-2 group/btn"
          onClick={(e) => handleReadMore(blog, e)}
        >
          Read Article
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );

  // Custom filter function for read time
  const filteredBlogPosts = blogPosts.map((blog) => ({
    ...blog,
    readTimeCategory: (() => {
      const minutes = parseInt(blog.readTime.split(" ")[0]);
      if (minutes < 5) return "short";
      if (minutes <= 10) return "medium";
      return "long";
    })(),
  }));

  return (
    <GenericListModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="All Blog Posts"
      items={filteredBlogPosts}
      itemsPerPage={12}
      onItemSelect={onBlogSelect}
      renderItem={renderBlogItem}
      searchFields={["title", "excerpt", "categories"]}
      filterOptions={[
        {
          key: "categories",
          label: "Category",
          values: categories,
        },
        {
          key: "readTimeCategory",
          label: "Read Time",
          values: readTimeRanges,
        },
      ]}
      sortOptions={[
        { key: "title", label: "Title" },
        { key: "date", label: "Date" },
        { key: "views", label: "Views" },
        { key: "readTime", label: "Read Time" },
      ]}
      viewModes={["grid", "list"]}
      className="max-w-7xl"
    />
  );
}


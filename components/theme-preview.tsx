"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useExtendedTheme, type ColorTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Palette, Check } from "lucide-react";

interface ThemePreviewProps {
  className?: string;
}

interface ColorOption {
  value: ColorTheme;
  label: string;
  color: string;
  darkColor: string;
}

const colorOptions: ColorOption[] = [
  {
    value: "default",
    label: "Default",
    color: "from-[#d6665d] to-[#db8b40]",
    darkColor: "from-[#d6665d] to-[#db8b40]",
  },
  {
    value: "ocean",
    label: "Ocean",
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-600 to-cyan-600",
  },
  {
    value: "forest",
    label: "Forest",
    color: "from-green-500 to-emerald-500",
    darkColor: "from-green-600 to-emerald-600",
  },
  {
    value: "sunset",
    label: "Sunset",
    color: "from-orange-500 to-red-500",
    darkColor: "from-orange-600 to-red-600",
  },
  {
    value: "lavender",
    label: "Lavender",
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-600 to-pink-600",
  },
  {
    value: "monochrome",
    label: "Monochrome",
    color: "from-gray-400 to-gray-600",
    darkColor: "from-gray-600 to-gray-800",
  },
];

export function ThemePreview({ className }: ThemePreviewProps) {
  const { theme, setTheme, resolvedTheme, colorTheme, setColorTheme } =
    useExtendedTheme();
  const [hoveredTheme, setHoveredTheme] = useState<ColorTheme | null>(null);
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely access theme information
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card
        className={cn(
          "border-none bg-background/50 backdrop-blur-sm",
          className,
        )}
      >
        <CardContent className="p-4">
          <div className="h-[150px] flex items-center justify-center">
            <div className="animate-pulse">Loading theme options...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Card
      className={cn("border-none bg-background/50 backdrop-blur-sm", className)}
    >
      <CardContent className="p-4"></CardContent>
    </Card>
  );
}

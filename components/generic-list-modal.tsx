"use client";

import { useState, useMemo, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Grid3X3,
  List,
  SortAsc,
  SortDesc,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface ListItem {
  id: string | number;
  title: string;
  description?: string;
  categories?: string[];
  date?: string;
  imageUrl?: string;
  [key: string]: any;
}

export interface ListModalProps<T extends ListItem> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  items: T[];
  itemsPerPage?: number;
  onItemSelect?: (item: T) => void;
  renderItem?: (item: T, onSelect: () => void) => React.ReactNode;
  searchFields?: (keyof T)[];
  filterOptions?: {
    key: keyof T;
    label: string;
    values: { value: any; label: string }[];
  }[];
  sortOptions?: {
    key: keyof T;
    label: string;
    direction?: "asc" | "desc";
  }[];
  viewModes?: ("grid" | "list")[];
  className?: string;
}

export default function GenericListModal<T extends ListItem>({
  isOpen,
  onOpenChange,
  title,
  items,
  itemsPerPage = 9,
  onItemSelect,
  renderItem,
  searchFields = ["title", "description"],
  filterOptions = [],
  sortOptions = [],
  viewModes = ["grid", "list"],
  className,
}: ListModalProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    viewModes[0] || "grid",
  );
  const [showFilters, setShowFilters] = useState(false);

  // Filter and search items
  const filteredItems = useMemo(() => {
    let result = items.filter((item) => {
      // Search filter
      const searchMatch =
        searchQuery === "" ||
        searchFields.some((field) => {
          const value = item[field];
          if (typeof value === "string") {
            return value.toLowerCase().includes(searchQuery.toLowerCase());
          }
          if (Array.isArray(value)) {
            return value.some(
              (v) =>
                typeof v === "string" &&
                v.toLowerCase().includes(searchQuery.toLowerCase()),
            );
          }
          return false;
        });

      if (!searchMatch) return false;

      // Additional filters
      for (const [key, value] of Object.entries(filters)) {
        if (value && value !== "all") {
          const itemValue = item[key as keyof T];
          if (Array.isArray(itemValue)) {
            if (!itemValue.includes(value)) return false;
          } else if (itemValue !== value) {
            return false;
          }
        }
      }

      return true;
    });

    // Sort items
    if (sortBy) {
      result.sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (typeof aValue === "string" && typeof bValue === "string") {
          const comparison = aValue.localeCompare(bValue);
          return sortDirection === "asc" ? comparison : -comparison;
        }

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
        }

        return 0;
      });
    }

    return result;
  }, [items, searchQuery, searchFields, filters, sortBy, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Reset pagination when filters change
  const resetPagination = () => {
    setCurrentPage(1);
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    resetPagination();
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery("");
    setSortBy(null);
    resetPagination();
  };

  const handleSort = (key: keyof T) => {
    if (sortBy === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(key);
      setSortDirection("asc");
    }
    resetPagination();
  };

  const defaultRenderItem = (item: T, onSelect: () => void) => (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group"
      onClick={onSelect}
    >
      {item.imageUrl && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold line-clamp-1 flex-1">{item.title}</h3>
          {item.date && (
            <span className="text-xs text-muted-foreground ml-2">
              {item.date}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {item.description}
          </p>
        )}
        {item.categories &&
          Array.isArray(item.categories) &&
          item.categories.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {item.categories.slice(0, 3).map((category, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
              {item.categories.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{item.categories.length - 3}
                </Badge>
              )}
            </div>
          )}
      </CardContent>
    </Card>
  );

  const ItemRenderer = renderItem || defaultRenderItem;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={cn("max-w-7xl max-h-[90vh] p-0", className)}>
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>

        {/* Search and Filters */}
        <div className="px-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                resetPagination();
              }}
            />
          </div>

          {/* Filter and View Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {filterOptions.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {Object.values(filters).some((v) => v && v !== "all") && (
                    <Badge
                      variant="secondary"
                      className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      {
                        Object.values(filters).filter((v) => v && v !== "all")
                          .length
                      }
                    </Badge>
                  )}
                </Button>
              )}

              {sortOptions.length > 0 && (
                <Select
                  value={sortBy ? `${String(sortBy)}-${sortDirection}` : ""}
                  onValueChange={(value) => {
                    if (value) {
                      const [key, direction] = value.split("-");
                      setSortBy(key as keyof T);
                      setSortDirection(direction as "asc" | "desc");
                      resetPagination();
                    }
                  }}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option, index) => (
                      <Fragment key={index}>
                        <SelectItem
                          key={`${String(option.key)}-asc`}
                          value={`${String(option.key)}-asc`}
                        >
                          <div className="flex items-center gap-2">
                            <SortAsc className="h-4 w-4" />
                            {option.label} (A-Z)
                          </div>
                        </SelectItem>
                        <SelectItem
                          key={`${String(option.key)}-desc`}
                          value={`${String(option.key)}-desc`}
                        >
                          <div className="flex items-center gap-2">
                            <SortDesc className="h-4 w-4" />
                            {option.label} (Z-A)
                          </div>
                        </SelectItem>
                      </Fragment>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {(Object.values(filters).some((v) => v && v !== "all") ||
                searchQuery ||
                sortBy) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {viewModes.length > 1 && (
                <div className="flex border rounded-md">
                  {viewModes.includes("grid") && (
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                  )}
                  {viewModes.includes("list") && (
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}

              <span className="text-sm text-muted-foreground">
                {filteredItems.length}{" "}
                {filteredItems.length === 1 ? "item" : "items"}
              </span>
            </div>
          </div>

          {/* Expandable Filters */}
          <AnimatePresence>
            {showFilters && filterOptions.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t">
                  {filterOptions.map((option) => (
                    <div key={String(option.key)}>
                      <label className="text-sm font-medium mb-2 block">
                        {option.label}
                      </label>
                      <Select
                        value={filters[String(option.key)] || "all"}
                        onValueChange={(value) =>
                          handleFilterChange(
                            String(option.key),
                            value === "all" ? null : value,
                          )
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">
                            All {option.label}
                          </SelectItem>
                          {option.values.map((valueOption) => (
                            <SelectItem
                              key={String(valueOption.value)}
                              value={String(valueOption.value)}
                            >
                              {valueOption.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Separator />

        {/* Content Area */}
        <ScrollArea className="flex-1 px-6">
          {paginatedItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Search className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search query or filters
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                "pb-6",
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4",
              )}
            >
              <AnimatePresence mode="wait">
                {paginatedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ItemRenderer
                      item={item}
                      onSelect={() => onItemSelect?.(item)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </ScrollArea>

        {/* Pagination */}
        {totalPages > 1 && (
          <>
            <Separator />
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages} ({filteredItems.length} total
                items)
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum: number;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={
                          currentPage === pageNum ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="w-10 h-10 p-0"
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

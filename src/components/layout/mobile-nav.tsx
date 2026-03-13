"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getAnatomiesByCategory } from "@/lib/anatomies";
import { categoryLabels, categoryOrder } from "@/types/anatomy";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const grouped = getAnatomiesByCategory();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
      >
        <Menu className="size-5" />
      </Button>

      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="px-6 py-6 border-b border-border">
          <SheetTitle>
            <span className="text-xl font-bold tracking-tight">Le Labo IA</span>
            <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">
              Anatomies
            </span>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 h-[calc(100vh-100px)]">
          <nav className="px-3 py-4">
            {categoryOrder.map((category) => {
              const items = grouped.get(category);
              if (!items?.length) return null;

              return (
                <div key={category} className="mb-4">
                  <h2 className="px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {categoryLabels[category]}
                  </h2>
                  <ul className="space-y-0.5">
                    {items.map((anatomy) => {
                      const isActive = pathname === `/anatomie/${anatomy.slug}`;
                      const Icon = getIcon(anatomy.icon);

                      return (
                        <li key={anatomy.slug}>
                          <Link
                            href={`/anatomie/${anatomy.slug}`}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted",
                            )}
                          >
                            <Icon className="size-4 shrink-0" />
                            <span className="truncate">{anatomy.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

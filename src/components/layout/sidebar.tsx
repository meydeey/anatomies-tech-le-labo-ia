"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getAnatomiesByCategory } from "@/lib/anatomies";
import { categoryLabels, categoryOrder } from "@/types/anatomy";

export function Sidebar() {
  const pathname = usePathname();
  const grouped = getAnatomiesByCategory();

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 border-r border-border bg-muted/30 z-30">
      <div className="px-6 py-5">
        <Link href="/" className="block group">
          <h1 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            Le Labo IA
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
            Anatomies
          </p>
        </Link>
      </div>

      <Separator />

      <ScrollArea className="flex-1 overflow-hidden">
        <nav className="px-3 py-4">
          {categoryOrder.map((category) => {
            const items = grouped.get(category);
            if (!items?.length) return null;

            return (
              <div key={category} className="mb-5">
                <h2 className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70">
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
                          className={cn(
                            "flex items-center gap-2.5 rounded-md px-3 py-1.5 text-sm transition-all",
                            isActive
                              ? "bg-primary text-primary-foreground font-medium shadow-sm"
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

      <Separator />
      <div className="px-6 py-3">
        <p className="text-[10px] text-muted-foreground/60 text-center">
          Le Labo IA — ELITE
        </p>
      </div>
    </aside>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAnatomiesByCategory } from "@/lib/anatomies";
import { categoryLabels, categoryOrder } from "@/types/anatomy";

export function Sidebar() {
  const pathname = usePathname();
  const grouped = getAnatomiesByCategory();

  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 border-r border-border bg-background z-30">
      <div className="px-6 py-6">
        <Link href="/" className="block">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Le Labo IA
          </h1>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1">
            Anatomies
          </p>
        </Link>
      </div>

      <ScrollArea className="flex-1 overflow-hidden">
        <nav className="px-3 pb-6">
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
    </aside>
  );
}

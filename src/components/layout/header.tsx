"use client";

import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center h-14 border-b border-border bg-background px-4 lg:hidden">
      <div className="flex-none">
        <MobileNav />
      </div>
      <div className="flex-1 text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-foreground">
          Anatomies
        </span>
      </div>
      <div className="flex-none w-8" />
    </header>
  );
}

"use client";

import { Accordion } from "@/components/ui/accordion";

interface LayerStackProps {
  children: React.ReactNode;
}

export default function LayerStack({ children }: LayerStackProps) {
  return (
    <Accordion className="flex w-full flex-col-reverse gap-2">
      {children}
    </Accordion>
  );
}

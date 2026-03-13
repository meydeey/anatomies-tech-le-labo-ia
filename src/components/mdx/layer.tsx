"use client";

import { getIcon } from "@/lib/icons";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const layerBorderColors = [
  "border-l-slate-700",
  "border-l-slate-600",
  "border-l-indigo-700",
  "border-l-indigo-600",
  "border-l-indigo-500",
  "border-l-sky-500",
  "border-l-emerald-500",
  "border-l-emerald-400",
];

const layerBadgeBgColors = [
  "bg-slate-700",
  "bg-slate-600",
  "bg-indigo-700",
  "bg-indigo-600",
  "bg-indigo-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-emerald-400",
];

interface LayerProps {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  icon: string;
  children: React.ReactNode;
}

export default function Layer({
  id,
  order,
  title,
  subtitle,
  icon,
  children,
}: LayerProps) {
  const colorIndex = Math.min(order - 1, layerBorderColors.length - 1);
  const borderColor = layerBorderColors[colorIndex];
  const badgeBg = layerBadgeBgColors[colorIndex];
  const IconComponent = getIcon(icon);

  return (
    <AccordionItem
      value={id}
      className={cn(
        "border-l-4 rounded-lg bg-card ring-1 ring-foreground/5 overflow-hidden",
        borderColor,
      )}
    >
      <AccordionTrigger className="px-4 py-3 gap-3 hover:no-underline">
        <span
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white",
            badgeBg,
          )}
        >
          {order}
        </span>
        <IconComponent className="size-5 shrink-0 text-muted-foreground" />
        <span className="flex flex-col items-start gap-0.5 text-left">
          <span className="font-semibold leading-tight">{title}</span>
          <span className="text-xs text-muted-foreground font-normal leading-tight">
            {subtitle}
          </span>
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4">
        <div className="prose prose-sm max-w-none pl-10">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}

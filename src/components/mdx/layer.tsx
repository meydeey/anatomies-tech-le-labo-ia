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

const layerHoverBg = [
  "hover:bg-slate-50",
  "hover:bg-slate-50",
  "hover:bg-indigo-50/50",
  "hover:bg-indigo-50/50",
  "hover:bg-indigo-50/30",
  "hover:bg-sky-50/30",
  "hover:bg-emerald-50/30",
  "hover:bg-emerald-50/30",
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
  const hoverBg = layerHoverBg[colorIndex];
  const IconComponent = getIcon(icon);

  return (
    <AccordionItem
      value={id}
      className={cn(
        "border-l-4 rounded-lg bg-card shadow-sm ring-1 ring-border/50 overflow-hidden transition-shadow hover:shadow-md",
        borderColor,
      )}
    >
      <AccordionTrigger
        className={cn(
          "px-4 py-3.5 gap-3 hover:no-underline transition-colors rounded-t-lg cursor-pointer",
          hoverBg,
        )}
      >
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm",
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
      <AccordionContent className="px-4 pb-5 pt-1">
        <div className="prose prose-sm prose-slate max-w-none pl-11 prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-muted-foreground">
          {children}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

import { Info, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const calloutConfig = {
  info: {
    wrapper: "border-l-blue-400 bg-blue-50/80 text-blue-950",
    icon: Info,
    iconColor: "text-blue-500",
    label: "Info",
    labelColor: "text-blue-500",
  },
  warning: {
    wrapper: "border-l-orange-400 bg-orange-50/80 text-orange-950",
    icon: AlertTriangle,
    iconColor: "text-orange-500",
    label: "Attention",
    labelColor: "text-orange-500",
  },
  tip: {
    wrapper: "border-l-emerald-400 bg-emerald-50/80 text-emerald-950",
    icon: Lightbulb,
    iconColor: "text-emerald-500",
    label: "Astuce",
    labelColor: "text-emerald-500",
  },
} as const;

interface CalloutProps {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}

export default function Callout({ type = "info", children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-5 flex gap-3 rounded-lg border-l-4 p-4 shadow-sm",
        config.wrapper,
      )}
    >
      <Icon className={cn("mt-0.5 size-5 shrink-0", config.iconColor)} />
      <div className="flex flex-col gap-1.5">
        <span
          className={cn(
            "text-[11px] font-bold uppercase tracking-wider",
            config.labelColor,
          )}
        >
          {config.label}
        </span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

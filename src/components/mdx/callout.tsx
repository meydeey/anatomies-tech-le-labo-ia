import { Info, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const calloutConfig = {
  info: {
    bg: "bg-blue-50 ring-blue-200 text-blue-900",
    icon: Info,
    iconColor: "text-blue-500",
  },
  warning: {
    bg: "bg-orange-50 ring-orange-200 text-orange-900",
    icon: AlertTriangle,
    iconColor: "text-orange-500",
  },
  tip: {
    bg: "bg-green-50 ring-green-200 text-green-900",
    icon: Lightbulb,
    iconColor: "text-green-500",
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
    <div className={cn("my-4 flex gap-3 rounded-lg p-4 ring-1", config.bg)}>
      <Icon className={cn("mt-0.5 size-5 shrink-0", config.iconColor)} />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

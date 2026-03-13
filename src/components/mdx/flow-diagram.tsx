"use client";

import { getIcon } from "@/lib/icons";

const stepColors = [
  { bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-700" },
  { bg: "bg-slate-50", border: "border-indigo-300", text: "text-indigo-700" },
  { bg: "bg-indigo-50", border: "border-indigo-400", text: "text-indigo-700" },
  { bg: "bg-indigo-50", border: "border-sky-400", text: "text-sky-700" },
  { bg: "bg-sky-50", border: "border-sky-400", text: "text-sky-700" },
  { bg: "bg-sky-50", border: "border-emerald-400", text: "text-emerald-700" },
  {
    bg: "bg-emerald-50",
    border: "border-emerald-400",
    text: "text-emerald-700",
  },
  {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    text: "text-emerald-600",
  },
];

interface FlowStep {
  label: string;
  icon?: string;
  description?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  title?: string;
}

export default function FlowDiagram({ steps, title }: FlowDiagramProps) {
  return (
    <div className="my-6 rounded-xl border border-border bg-card p-4 shadow-sm">
      {title && (
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
      )}

      {/* Desktop: horizontal */}
      <div className="hidden sm:flex sm:items-center sm:gap-1 sm:overflow-x-auto sm:pb-2">
        {steps.map((step, i) => {
          const color = stepColors[i % stepColors.length];
          const Icon = step.icon ? getIcon(step.icon) : null;

          return (
            <div key={i} className="flex items-center gap-1 shrink-0">
              <div
                className={`flex flex-col items-center gap-1 rounded-lg border ${color.border} ${color.bg} px-3 py-2 min-w-[90px]`}
              >
                {Icon && <Icon className={`size-4 ${color.text}`} />}
                <span
                  className={`text-[11px] font-semibold leading-tight text-center ${color.text}`}
                >
                  {step.label}
                </span>
                {step.description && (
                  <span className="text-[9px] text-muted-foreground text-center leading-tight">
                    {step.description}
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  className="shrink-0 text-muted-foreground/50"
                >
                  <path
                    d="M0 6h16m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical */}
      <div className="flex sm:hidden flex-col items-center gap-1">
        {steps.map((step, i) => {
          const color = stepColors[i % stepColors.length];
          const Icon = step.icon ? getIcon(step.icon) : null;

          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className={`flex items-center gap-2 rounded-lg border ${color.border} ${color.bg} px-4 py-2 w-full max-w-[260px]`}
              >
                {Icon && <Icon className={`size-4 shrink-0 ${color.text}`} />}
                <div className="flex flex-col">
                  <span
                    className={`text-[11px] font-semibold leading-tight ${color.text}`}
                  >
                    {step.label}
                  </span>
                  {step.description && (
                    <span className="text-[9px] text-muted-foreground leading-tight">
                      {step.description}
                    </span>
                  )}
                </div>
              </div>
              {i < steps.length - 1 && (
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  className="shrink-0 text-muted-foreground/50"
                >
                  <path
                    d="M6 0v16m0 0l-4-4m4 4l4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

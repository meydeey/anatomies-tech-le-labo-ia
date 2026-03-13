const layerColors = [
  {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    text: "text-emerald-700",
    bar: "bg-emerald-400",
  },
  {
    bg: "bg-emerald-50/70",
    border: "border-emerald-200",
    text: "text-emerald-600",
    bar: "bg-emerald-300",
  },
  {
    bg: "bg-sky-50",
    border: "border-sky-300",
    text: "text-sky-700",
    bar: "bg-sky-400",
  },
  {
    bg: "bg-sky-50/70",
    border: "border-sky-200",
    text: "text-sky-600",
    bar: "bg-sky-300",
  },
  {
    bg: "bg-indigo-50",
    border: "border-indigo-300",
    text: "text-indigo-700",
    bar: "bg-indigo-400",
  },
  {
    bg: "bg-indigo-50/70",
    border: "border-indigo-200",
    text: "text-indigo-600",
    bar: "bg-indigo-300",
  },
  {
    bg: "bg-slate-100",
    border: "border-slate-300",
    text: "text-slate-700",
    bar: "bg-slate-400",
  },
  {
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-600",
    bar: "bg-slate-300",
  },
];

interface StackLayer {
  label: string;
  description?: string;
}

interface StackDiagramProps {
  layers: StackLayer[];
  title?: string;
}

export default function StackDiagram({ layers, title }: StackDiagramProps) {
  return (
    <div className="my-6 rounded-xl border border-border bg-card p-4 shadow-sm">
      {title && (
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
      )}

      <div className="flex flex-col gap-0">
        {layers.map((layer, i) => {
          const color = layerColors[i % layerColors.length];
          const isFirst = i === 0;
          const isLast = i === layers.length - 1;

          return (
            <div
              key={i}
              className={`flex items-center border ${color.border} ${color.bg} px-4 py-2.5 ${
                isFirst ? "rounded-t-lg" : ""
              } ${isLast ? "rounded-b-lg" : ""} ${!isFirst ? "-mt-px" : ""}`}
            >
              <div
                className={`w-1 h-6 rounded-full ${color.bar} mr-3 shrink-0`}
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 min-w-0">
                <span
                  className={`text-xs font-semibold ${color.text} shrink-0`}
                >
                  {layer.label}
                </span>
                {layer.description && (
                  <span className="text-[10px] text-muted-foreground leading-tight truncate">
                    {layer.description}
                  </span>
                )}
              </div>
              <span className="ml-auto text-[9px] text-muted-foreground/50 font-mono shrink-0 pl-2">
                {i === 0 ? "HAUT" : i === layers.length - 1 ? "BAS" : ""}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

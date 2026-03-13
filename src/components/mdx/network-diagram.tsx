const exchangeColors: Record<
  string,
  { arrow: string; label: string; bg: string }
> = {
  blue: { arrow: "text-blue-400", label: "text-blue-600", bg: "bg-blue-50" },
  green: {
    arrow: "text-emerald-400",
    label: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  orange: {
    arrow: "text-orange-400",
    label: "text-orange-600",
    bg: "bg-orange-50",
  },
  red: { arrow: "text-red-400", label: "text-red-600", bg: "bg-red-50" },
  purple: {
    arrow: "text-purple-400",
    label: "text-purple-600",
    bg: "bg-purple-50",
  },
  slate: {
    arrow: "text-slate-400",
    label: "text-slate-600",
    bg: "bg-slate-50",
  },
};

interface Exchange {
  from: "left" | "right";
  label: string;
  color?: string;
}

interface NetworkDiagramProps {
  left: string;
  right: string;
  exchanges: Exchange[];
  title?: string;
}

export default function NetworkDiagram({
  left,
  right,
  exchanges,
  title,
}: NetworkDiagramProps) {
  return (
    <div className="my-6 rounded-xl border border-border bg-card p-4 shadow-sm overflow-x-auto">
      {title && (
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
      )}

      <div className="min-w-[320px]">
        {/* Entities header */}
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2 rounded-lg border border-indigo-300 bg-indigo-50 px-3 py-1.5">
            <div className="size-2 rounded-full bg-indigo-400" />
            <span className="text-xs font-semibold text-indigo-700">
              {left}
            </span>
          </div>
          <div className="flex-1 border-t border-dashed border-border mx-3" />
          <div className="flex items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5">
            <div className="size-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-emerald-700">
              {right}
            </span>
          </div>
        </div>

        {/* Exchanges */}
        <div className="flex flex-col gap-1.5 px-2">
          {exchanges.map((exchange, i) => {
            const color =
              exchangeColors[exchange.color || "blue"] || exchangeColors.blue;
            const isLeftToRight = exchange.from === "left";

            return (
              <div key={i} className="flex items-center gap-2 py-1">
                {/* Left side indicator */}
                <div className="w-6 flex justify-center">
                  {isLeftToRight && (
                    <div className="size-1.5 rounded-full bg-indigo-400" />
                  )}
                </div>

                {/* Arrow + label */}
                <div className="flex-1 flex items-center gap-1">
                  {isLeftToRight ? (
                    <>
                      <div className="flex-1 flex items-center">
                        <div
                          className={`flex-1 border-t-2 border-dashed ${color.arrow.replace("text-", "border-")}`}
                        />
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          className={color.arrow}
                        >
                          <path d="M0 0l8 4-8 4z" fill="currentColor" />
                        </svg>
                      </div>
                      <span
                        className={`text-[10px] font-medium ${color.label} ${color.bg} px-2 py-0.5 rounded-full whitespace-nowrap`}
                      >
                        {exchange.label}
                      </span>
                    </>
                  ) : (
                    <>
                      <span
                        className={`text-[10px] font-medium ${color.label} ${color.bg} px-2 py-0.5 rounded-full whitespace-nowrap`}
                      >
                        {exchange.label}
                      </span>
                      <div className="flex-1 flex items-center">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          className={color.arrow}
                        >
                          <path d="M8 0l-8 4 8 4z" fill="currentColor" />
                        </svg>
                        <div
                          className={`flex-1 border-t-2 border-dashed ${color.arrow.replace("text-", "border-")}`}
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Right side indicator */}
                <div className="w-6 flex justify-center">
                  {!isLeftToRight && (
                    <div className="size-1.5 rounded-full bg-emerald-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

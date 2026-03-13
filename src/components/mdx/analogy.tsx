import { Lightbulb } from "lucide-react";

interface AnalogyProps {
  children: React.ReactNode;
}

export default function Analogy({ children }: AnalogyProps) {
  return (
    <div className="my-4 flex gap-3 rounded-lg bg-amber-50 p-4 text-amber-900 ring-1 ring-amber-200">
      <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-500" />
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">
          Analogie
        </span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

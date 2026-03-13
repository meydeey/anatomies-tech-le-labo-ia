import { Lightbulb } from "lucide-react";

interface AnalogyProps {
  children: React.ReactNode;
}

export default function Analogy({ children }: AnalogyProps) {
  return (
    <div className="my-5 flex gap-3 rounded-lg border-l-4 border-l-amber-400 bg-amber-50/80 p-4 text-amber-950 shadow-sm">
      <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-500" />
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
          Analogie
        </span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

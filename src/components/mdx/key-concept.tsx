import { BookOpen } from "lucide-react";

interface KeyConceptProps {
  term: string;
  children: React.ReactNode;
}

export default function KeyConcept({ term, children }: KeyConceptProps) {
  return (
    <div className="my-5 flex gap-3 rounded-lg border-l-4 border-l-blue-400 bg-blue-50/80 p-4 text-blue-950 shadow-sm">
      <BookOpen className="mt-0.5 size-5 shrink-0 text-blue-500" />
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-500">
          Concept clé
        </span>
        <span className="text-sm font-bold text-blue-900">{term}</span>
        <div className="text-sm leading-relaxed text-blue-800">{children}</div>
      </div>
    </div>
  );
}

import { BookOpen } from "lucide-react";

interface KeyConceptProps {
  term: string;
  children: React.ReactNode;
}

export default function KeyConcept({ term, children }: KeyConceptProps) {
  return (
    <div className="my-4 flex gap-3 rounded-lg bg-blue-50 p-4 text-blue-900 ring-1 ring-blue-200">
      <BookOpen className="mt-0.5 size-5 shrink-0 text-blue-500" />
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-500">
          Concept clé
        </span>
        <span className="text-sm font-bold">{term}</span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

import { Building2 } from "lucide-react";

interface ExampleProps {
  brand: string;
  children: React.ReactNode;
}

export default function Example({ brand, children }: ExampleProps) {
  return (
    <div className="my-4 flex gap-3 rounded-lg bg-slate-50 p-4 text-slate-900 ring-1 ring-slate-200">
      <Building2 className="mt-0.5 size-5 shrink-0 text-slate-500" />
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Exemple concret
        </span>
        <span className="text-sm font-bold">{brand}</span>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

import { Building2 } from "lucide-react";

interface ExampleProps {
  brand: string;
  children: React.ReactNode;
}

export default function Example({ brand, children }: ExampleProps) {
  return (
    <div className="my-5 flex gap-3 rounded-lg border-l-4 border-l-slate-300 bg-slate-50/80 p-4 text-slate-900 shadow-sm">
      <Building2 className="mt-0.5 size-5 shrink-0 text-slate-400" />
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Exemple concret
        </span>
        <span className="text-sm font-bold text-slate-800">{brand}</span>
        <div className="text-sm leading-relaxed text-slate-700">{children}</div>
      </div>
    </div>
  );
}

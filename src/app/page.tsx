import Link from "next/link";
import { getIcon } from "@/lib/icons";
import { getAnatomiesByCategory } from "@/lib/anatomies";
import {
  categoryLabels,
  categoryOrder,
  type AnatomyCategory,
  type AnatomyMeta,
} from "@/types/anatomy";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const categoryColors: Record<AnatomyCategory, string> = {
  infrastructure: "border-l-slate-400",
  reseau: "border-l-indigo-400",
  developpement: "border-l-emerald-400",
  securite: "border-l-amber-400",
  donnees: "border-l-blue-400",
  automatisation: "border-l-purple-400",
};

const categoryBadgeColors: Record<AnatomyCategory, string> = {
  infrastructure: "bg-slate-100 text-slate-700",
  reseau: "bg-indigo-100 text-indigo-700",
  developpement: "bg-emerald-100 text-emerald-700",
  securite: "bg-amber-100 text-amber-700",
  donnees: "bg-blue-100 text-blue-700",
  automatisation: "bg-purple-100 text-purple-700",
};

function AnatomyCard({
  anatomy,
  category,
}: {
  anatomy: AnatomyMeta;
  category: AnatomyCategory;
}) {
  const IconComponent = getIcon(anatomy.icon);

  return (
    <Link href={`/anatomie/${anatomy.slug}`}>
      <Card
        className={`h-full border-l-4 ${categoryColors[category]} transition-all hover:shadow-md hover:-translate-y-0.5`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10">
              <IconComponent className="size-5 text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-base">{anatomy.title}</CardTitle>
              <Badge
                variant="secondary"
                className="w-fit text-[10px] px-1.5 py-0"
              >
                {anatomy.layers.length} couches
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-xs leading-relaxed">
            {anatomy.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Home() {
  const grouped = getAnatomiesByCategory();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <Badge
          variant="outline"
          className="w-fit text-xs font-semibold tracking-wide"
        >
          Le Labo IA — ELITE
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          ANATOMIES
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
          Comprends en profondeur les technologies que tu utilises tous les
          jours. Chaque anatomie décompose un concept couche par couche — du
          hardware jusqu&apos;à l&apos;application.
        </p>
      </div>

      {categoryOrder.map((category) => {
        const items = grouped.get(category);
        if (!items?.length) return null;
        return (
          <section key={category} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold tracking-tight">
                {categoryLabels[category]}
              </h2>
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${categoryBadgeColors[category]}`}
              >
                {items.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((anatomy) => (
                <AnatomyCard
                  key={anatomy.slug}
                  anatomy={anatomy}
                  category={category}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

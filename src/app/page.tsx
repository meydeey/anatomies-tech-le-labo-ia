import Link from "next/link";
import { getIcon } from "@/lib/icons";
import { getAnatomiesByCategory } from "@/lib/anatomies";
import {
  categoryLabels,
  categoryOrder,
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

function AnatomyCard({ anatomy }: { anatomy: AnatomyMeta }) {
  const IconComponent = getIcon(anatomy.icon);

  return (
    <Link href={`/anatomie/${anatomy.slug}`}>
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <IconComponent className="size-5 text-primary" />
            </div>
            <div className="flex flex-col gap-0.5">
              <CardTitle>{anatomy.title}</CardTitle>
              <Badge variant="secondary" className="w-fit">
                {anatomy.layers.length} couches
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{anatomy.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Home() {
  const grouped = getAnatomiesByCategory();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <Badge variant="outline" className="w-fit">
          Le Labo IA — ELITE
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          ANATOMIES
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Comprends en profondeur les technologies que tu utilises tous les
          jours.
        </p>
      </div>

      {categoryOrder.map((category) => {
        const items = grouped.get(category);
        if (!items?.length) return null;
        return (
          <section key={category} className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {categoryLabels[category]}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((anatomy) => (
                <AnatomyCard key={anatomy.slug} anatomy={anatomy} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

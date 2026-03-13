import { getIcon } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface AnatomyHeaderProps {
  title: string;
  description: string;
  icon: string;
  layerCount: number;
}

export default function AnatomyHeader({
  title,
  description,
  icon,
  layerCount,
}: AnatomyHeaderProps) {
  const IconComponent = getIcon(icon);

  return (
    <div className="mb-10">
      <div className="flex items-start gap-5">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 shadow-sm">
          <IconComponent className="size-7 text-primary" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h1>
            <Badge variant="secondary" className="font-semibold">
              {layerCount} couches
            </Badge>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <Separator className="mt-8" />
    </div>
  );
}

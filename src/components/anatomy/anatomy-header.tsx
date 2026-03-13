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
    <div className="mb-8">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <IconComponent className="size-6 text-primary" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h1>
            <Badge variant="secondary">{layerCount} couches</Badge>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <Separator className="mt-6" />
    </div>
  );
}

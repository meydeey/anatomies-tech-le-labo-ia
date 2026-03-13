import { anatomies, getAnatomyBySlug } from "@/lib/anatomies";
import { contentMap } from "@/lib/content-map";
import { notFound } from "next/navigation";
import AnatomyHeader from "@/components/anatomy/anatomy-header";

export function generateStaticParams() {
  return anatomies.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const anatomy = getAnatomyBySlug(slug);
  if (!anatomy) return {};
  return {
    title: `${anatomy.fullTitle} — ANATOMIES`,
    description: anatomy.description,
  };
}

export default async function AnatomyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const anatomy = getAnatomyBySlug(slug);
  if (!anatomy) notFound();

  const loader = contentMap[slug];
  if (!loader) notFound();

  const Content = (await loader()).default;

  return (
    <div>
      <AnatomyHeader
        title={anatomy.fullTitle}
        description={anatomy.description}
        icon={anatomy.icon}
        layerCount={anatomy.layers.length}
      />
      <Content />
    </div>
  );
}

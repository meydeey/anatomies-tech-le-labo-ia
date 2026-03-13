export type AnatomyCategory =
  | "infrastructure"
  | "reseau"
  | "developpement"
  | "securite"
  | "donnees"
  | "automatisation";

export interface AnatomyLayer {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface AnatomyMeta {
  slug: string;
  title: string;
  fullTitle: string;
  description: string;
  icon: string;
  category: AnatomyCategory;
  layers: AnatomyLayer[];
}

export const categoryLabels: Record<AnatomyCategory, string> = {
  infrastructure: "Infrastructure",
  reseau: "Réseau",
  developpement: "Développement",
  securite: "Sécurité",
  donnees: "Données",
  automatisation: "Automatisation",
};

export const categoryOrder: AnatomyCategory[] = [
  "infrastructure",
  "reseau",
  "developpement",
  "securite",
  "donnees",
  "automatisation",
];

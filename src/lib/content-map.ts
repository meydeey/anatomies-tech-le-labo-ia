import type { ComponentType } from "react";

export const contentMap: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  vps: () => import("@/content/vps.mdx"),
  terminal: () => import("@/content/terminal.mdx"),
  "hebergement-web": () => import("@/content/hebergement-web.mdx"),
  serveur: () => import("@/content/serveur.mdx"),
  "requete-http": () => import("@/content/requete-http.mdx"),
  api: () => import("@/content/api.mdx"),
  dns: () => import("@/content/dns.mdx"),
  "nom-de-domaine": () => import("@/content/nom-de-domaine.mdx"),
  docker: () => import("@/content/docker.mdx"),
  "git-versioning": () => import("@/content/git-versioning.mdx"),
  json: () => import("@/content/json.mdx"),
  "process-linux": () => import("@/content/process-linux.mdx"),
  authentification: () => import("@/content/authentification.mdx"),
  "certificat-ssl-tls": () => import("@/content/certificat-ssl-tls.mdx"),
  "base-de-donnees": () => import("@/content/base-de-donnees.mdx"),
  "workflow-n8n": () => import("@/content/workflow-n8n.mdx"),
};

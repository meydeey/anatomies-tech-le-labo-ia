import type { MDXComponents } from "mdx/types";
import { mdxCustomComponents } from "@/components/mdx/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxCustomComponents,
  };
}

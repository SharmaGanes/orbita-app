import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
  rootDir: ".",
  schema: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});

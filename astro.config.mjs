// @ts-check
import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: 'https://loo0d.github.io',
  base: '/high-fidelity-ai-collective',
  output: "static",
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});

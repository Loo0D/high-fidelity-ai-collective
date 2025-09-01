// @ts-check
import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: 'https://loo0d.github.io/high-fidelity-ai-collective/',
  base: '/the-high-fidelity-ai-collective',
  output: "static",
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});

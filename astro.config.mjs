// @ts-check
import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});

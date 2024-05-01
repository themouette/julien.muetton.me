import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import markdownIntegration from "@astropub/md";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://julien.muetton.me",
  integrations: [mdx(), tailwind(), markdownIntegration()],
});

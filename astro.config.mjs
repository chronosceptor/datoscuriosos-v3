import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro-imagetools-docs.vercel.app/en
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
// import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://datoscuriosos.org",
  integrations: [
    tailwind(),
    astroImageTools,
    mdx(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
});

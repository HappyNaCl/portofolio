import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yuyudhistira.my.id",
  build: { inlineStylesheets: "auto" },
  integrations: [
    icon(),
    sitemap({ filter: (page) => !page.endsWith("/404/") }),
  ],
});

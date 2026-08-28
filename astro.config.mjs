import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://yuyudhistira.my.id",
  build: { inlineStylesheets: "auto" },
  integrations: [icon()],
});

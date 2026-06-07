import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base` must match the GitHub Pages sub-path (https://<user>.github.io/<repo>/).
// Override it at build time with `BASE_PATH` if you rename the repo or use a custom domain.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? "/linktree/",
});

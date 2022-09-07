import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://livechat-frontend.pages.dev/",
  server: {
    port: 3000,
  },
});

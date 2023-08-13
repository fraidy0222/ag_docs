import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ag_docs/',
  plugins: [vue()],
  server: {
    open: true,
  },
});

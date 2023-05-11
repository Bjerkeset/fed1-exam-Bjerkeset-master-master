/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: './', // Specify the root directory for your project
  server: {
    host: 'localhost', // Set the host for the development server
    port: 3000, // Set the port for the development server (optional)
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // ADD YOUR PAGES HERE
        // contact: resolve(__dirname, "contact.html"),
        // blog: resolve(__dirname, "blogs.html"),
        // blogDetail: resolve(__dirname, "blog-detail.html"),
      },
    },
  },
});

/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./fed1-exam-Bjerkeset-master-master/fed1-exam-Bjerkeset", // Specify the root directory for your project
  server: {
    host: "localhost", // Set the host for the development server
    port: 3000, // Set the port for the development server (optional)
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // ADD YOUR PAGES HERE
        contact: resolve(__dirname, "./pages/contact.html"),
        contact: resolve(__dirname, "./pages/about.html"),
        blog: resolve(__dirname, "./pages/blogs.html"),
        blogDetail: resolve(__dirname, "./pages/blog-detail.html"),
      },
    },
  },
});

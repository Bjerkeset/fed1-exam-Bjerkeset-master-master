import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./fed1-exam-Bjerkeset-master-master/fed1-exam-Bjerkeset",
  server: {
    host: "localhost",
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve("index.html"),
        contact: path.resolve("pages/contact.html"),
        about: path.resolve("pages/about.html"),
        blog: path.resolve("pages/blogs.html"),
        blogDetail: path.resolve("pages/blog-detail.html"),
      },
    },
  },
});

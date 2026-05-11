import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import Sitemap from "vite-plugin-sitemap";

const blogDataContent = fs.readFileSync(path.resolve(__dirname, "./src/data/blogData.ts"), "utf-8");
const courseDataContent = fs.readFileSync(path.resolve(__dirname, "./src/data/coursesData.ts"), "utf-8");

const courseIds = [];
const courseRegex = /"([^"]+)":\s*\{\n\s*name/g;
let match;
while ((match = courseRegex.exec(courseDataContent)) !== null) {
  courseIds.push(match[1]);
}

const blogIds = [];
const blogRegex = /"([^"]+)":\s*\{\n\s*id/g;
while ((match = blogRegex.exec(blogDataContent)) !== null) {
  blogIds.push(match[1]);
}

const dynamicRoutes = [
  ...courseIds.map(id => `/course/${id}`),
  ...blogIds.map(id => `/blog/${id}`),
  "/blogs"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    Sitemap({
      hostname: "https://www.jbonlinetuitions.in/",
      dynamicRoutes,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));

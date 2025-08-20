import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { type Server } from "http";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // Temporary workaround - serve static files in development
  log("Vite development server temporarily disabled - serving static files");
  serveStatic(app);
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    // Create a basic HTML response if no build exists
    log("No build directory found, serving basic HTML");
    app.use("*", (_req, res) => {
      res.status(200).set({ "Content-Type": "text/html" }).send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Agent Blueprint</title>
          <meta charset="UTF-8">
        </head>
        <body>
          <h1>Agent Blueprint Server Running</h1>
          <p>Development server is running. Frontend build needed.</p>
          <p>API endpoints are available at <a href="/api">/api</a></p>
        </body>
        </html>
      `);
    });
    return;
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
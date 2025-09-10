// server/index.ts
import express from "express";

export function createServer() {
  const app = express();

  // Example API route
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from API" });
  });

  // Health check route
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return app;
}

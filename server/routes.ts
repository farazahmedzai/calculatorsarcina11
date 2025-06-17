import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPensionCalculationSchema, insertPregnancyCalculationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Pension calculation endpoint
  app.post("/api/calculate-pension", async (req, res) => {
    try {
      const validatedData = insertPensionCalculationSchema.parse(req.body);
      const calculation = await storage.createPensionCalculation(validatedData);
      res.json(calculation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input data", details: error.errors });
        return;
      }
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get pension calculations
  app.get("/api/pension-calculations", async (req, res) => {
    try {
      const calculations = await storage.getPensionCalculations();
      res.json(calculations);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Pregnancy calculation endpoint
  app.post("/api/calculate-pregnancy", async (req, res) => {
    try {
      const validatedData = insertPregnancyCalculationSchema.parse(req.body);
      const calculation = await storage.createPregnancyCalculation(validatedData);
      res.json(calculation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid input data", details: error.errors });
        return;
      }
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get pregnancy calculations
  app.get("/api/pregnancy-calculations", async (req, res) => {
    try {
      const calculations = await storage.getPregnancyCalculations();
      res.json(calculations);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get blog posts
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get single blog post
  app.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.slug);
      if (!post) {
        res.status(404).json({ error: "Blog post not found" });
        return;
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Security headers and CSP configuration
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googletagmanager.com https://www.google-analytics.com https://google-analytics.com https://ssl.google-analytics.com https://replit.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https: https://www.google-analytics.com https://analytics.google.com https://ssl.google-analytics.com; " +
    "manifest-src 'self';"
  );
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mock storage for production
const mockStorage = {
  getBlogPosts: () => Promise.resolve([
    {
      id: 1,
      title: "Top 5 Greșeli de Evitat în Planificarea Pensiei",
      slug: "top-5-greseli-planificare-pensie",
      excerpt: "Descoperă cele mai comune greșeli pe care le fac românii când își planifică pensia și cum să le eviți.",
      category: "Planificare",
      published: true,
      createdAt: "2024-01-01T10:00:00.000Z"
    }
  ]),
  createPensionCalculation: (data) => Promise.resolve({ id: Date.now(), ...data, amount: 2500 }),
  createPregnancyCalculation: (data) => Promise.resolve({ id: Date.now(), ...data, dueDate: "2024-12-25" })
};

// API Routes
app.get("/api/blog-posts", async (req, res) => {
  try {
    const posts = await mockStorage.getBlogPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog posts" });
  }
});

app.post("/api/calculate-pension", async (req, res) => {
  try {
    const calculation = await mockStorage.createPensionCalculation(req.body);
    res.json(calculation);
  } catch (error) {
    res.status(500).json({ message: "Failed to calculate pension" });
  }
});

app.post("/api/calculate-pregnancy", async (req, res) => {
  try {
    const calculation = await mockStorage.createPregnancyCalculation(req.body);
    res.json(calculation);
  } catch (error) {
    res.status(500).json({ message: "Failed to calculate pregnancy" });
  }
});

// Static files serving
const staticPath = path.resolve(__dirname, 'dist/public');
console.log('Serving static files from:', staticPath);

if (fs.existsSync(staticPath)) {
  app.use(express.static(staticPath));
  
  // SPA fallback - serve index.html for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(staticPath, 'index.html'));
  });
} else {
  console.error('Static files directory not found:', staticPath);
  app.get('*', (req, res) => {
    res.status(500).json({ error: 'Static files not found' });
  });
}

const server = createServer(app);
const port = 5000;

server.listen({
  port,
  host: "0.0.0.0",
  reusePort: true,
}, () => {
  console.log(`✅ Calculator Sarcina production server running on port ${port}`);
  console.log(`📁 Static files: ${staticPath}`);
  console.log(`🌐 Ready at http://localhost:${port}`);
});
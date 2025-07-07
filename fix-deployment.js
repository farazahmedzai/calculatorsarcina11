#!/usr/bin/env node
import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

console.log('🔧 Fixing deployment file structure...');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }
  
  const files = readdirSync(src);
  for (const file of files) {
    const srcPath = join(src, file);
    const destPath = join(dest, file);
    
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Copy static files to server/public for production serving
if (existsSync('dist/public')) {
  console.log('📁 Copying static files to server/public...');
  copyDir('dist/public', 'server/public');
  console.log('✅ Static files copied successfully');
  
  // Also create a symlink for better compatibility
  try {
    execSync('ln -sf ../dist/public server/dist-public 2>/dev/null || true');
    console.log('🔗 Created symlink for better path resolution');
  } catch (e) {
    console.log('⚠️ Could not create symlink, but continuing...');
  }
} else {
  console.log('❌ dist/public directory not found');
}

// Create a corrected server file that uses the right static path
console.log('🔧 Creating deployment-ready server...');
try {
  const serverContent = `
// Deployment-ready server configuration
import express from "express";
import { registerRoutes } from "./server/routes.js";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Security headers and CSP configuration
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googletagmanager.com https://replit.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https: https://www.google-analytics.com https://analytics.google.com; " +
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

(async () => {
  const server = await registerRoutes(app);
  
  // Serve static files from dist/public
  const staticPath = path.resolve(__dirname, 'dist/public');
  console.log('Serving static files from:', staticPath);
  app.use(express.static(staticPath));
  
  // Fallback to index.html for SPA routing
  app.use('*', (_req, res) => {
    res.sendFile(path.resolve(staticPath, 'index.html'));
  });

  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    console.log('✅ Calculator Sarcina serving on port', port);
  });
})();
`;
  
  writeFileSync('deployment-server.js', serverContent);
  console.log('✅ Deployment server created');
} catch (e) {
  console.log('❌ Could not create deployment server:', e.message);
}

console.log('🚀 Deployment fix complete!');
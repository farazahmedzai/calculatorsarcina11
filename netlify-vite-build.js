#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building React application with Vite for Netlify...');

process.env.NODE_ENV = 'production';

try {
  // Clean directories
  execSync('rm -rf dist/', { stdio: 'inherit' });
  
  // Build frontend with Vite
  console.log('Building frontend with Vite...');
  execSync('npx vite build --outDir dist/public', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  // Copy static files from public directory
  if (fs.existsSync('public')) {
    console.log('Copying static files...');
    execSync('cp -r public/* dist/public/ 2>/dev/null || true', { stdio: 'inherit' });
  }
  
  // Create _redirects file for SPA routing
  const redirects = `/* /index.html 200`;
  fs.writeFileSync('dist/public/_redirects', redirects);
  
  console.log('Vite build completed successfully!');
  console.log('Created optimized build for Netlify deployment');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
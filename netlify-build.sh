#!/bin/bash

echo "Starting Netlify build for Calculator Sarcina..."

# Ensure Node.js and npm are available
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build frontend
echo "Building frontend with Vite..."
./node_modules/.bin/vite build --mode production

# Build backend
echo "Building backend with ESBuild..."
./node_modules/.bin/esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Build completed successfully!"
echo "Frontend files in: dist/public"
echo "Backend files in: dist"

# List output directory
ls -la dist/
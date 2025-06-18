#!/bin/bash

# Production build script for Calculator Sarcina
echo "Building Calculator Sarcina for production..."

# Set production environment
export NODE_ENV=production

# Clean previous builds
rm -rf dist/
rm -rf server/public/

# Create directories
mkdir -p server/public/

# Build the frontend with optimizations
echo "Building frontend..."
npx vite build --mode production

# Build the server
echo "Building server..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist --minify

# Copy static files if build succeeded
if [ -d "dist/public" ]; then
    echo "Copying static files..."
    cp -r dist/public/* server/public/
    echo "Build completed successfully!"
else
    echo "Frontend build failed - dist/public not found"
    exit 1
fi

echo "Production build ready. Server files in dist/, static files in server/public/"
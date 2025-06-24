#!/bin/bash

# Build the frontend with Netlify config
echo "Building frontend for Netlify deployment..."
vite build --config vite.config.netlify.ts

# Ensure public files are copied to build output
echo "Copying public files to build output..."
cp -r public/* dist/public/

echo "Build complete. Contents of dist/public:"
ls -la dist/public/

echo "Checking if sitemap.xml exists:"
if [ -f "dist/public/sitemap.xml" ]; then
    echo "✓ sitemap.xml found in build output"
    head -5 dist/public/sitemap.xml
else
    echo "✗ sitemap.xml missing from build output"
fi
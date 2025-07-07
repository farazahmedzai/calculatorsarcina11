#!/bin/bash

echo "Testing build process..."
echo "Building frontend..."
npx vite build --mode production

echo "Building backend..."
npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Checking output..."
ls -la dist/
echo "Build test complete!"
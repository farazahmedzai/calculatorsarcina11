#!/bin/bash

echo "🚀 Starting Calculator Sarcina Production Server..."

# Kill any existing servers on port 5000
echo "🔄 Stopping existing servers..."
pkill -f "tsx server/index.ts" 2>/dev/null || true
pkill -f "node production-server.js" 2>/dev/null || true
pkill -f "node dist/index.js" 2>/dev/null || true

# Wait for ports to be freed
sleep 2

# Ensure build is complete
echo "🔨 Building application..."
npm run build
node fix-deployment.js

# Verify static files exist
if [ ! -f "dist/public/index.html" ]; then
    echo "❌ Error: Static files not found!"
    exit 1
fi

echo "📁 Static files verified: $(ls -la dist/public/)"

# Start production server
echo "🌐 Starting production server on port 5000..."
NODE_ENV=production node production-server.js
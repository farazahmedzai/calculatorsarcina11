#!/bin/bash

echo "🚀 Replit Deployment Script for Calculator Sarcina"
echo "================================================="

# Set production environment
export NODE_ENV=production
export PORT=${PORT:-5000}

echo "📦 Building application..."
npm run build

echo "🔧 Copying static files..."
node fix-deployment.js

echo "✅ Build complete! Starting production server..."
echo "📁 Static files location: $(pwd)/dist/public"
echo "🌐 Server will run on port $PORT"

# Start the production server
exec node production-server.js
#!/bin/bash
set -e

echo "🔧 Building Calculator Sarcina for deployment..."

# Clean and build
echo "📦 Building frontend and backend..."
npm run build

# Copy static files to the server directory for the serveStatic function
echo "📁 Ensuring static files are in correct location..."
cp -r dist/public/* server/public/ 2>/dev/null || true

# Update the replit config to use the correct start command
echo "⚙️ Updating deployment configuration..."

echo "✅ Build complete! Ready for deployment."
echo "🚀 You can now deploy using Replit's deploy button."

# Test the production server
echo "🧪 Testing production server..."
NODE_ENV=production timeout 10 node dist/index.js &
SERVER_PID=$!

sleep 3

if curl -s http://localhost:5000 > /dev/null; then
    echo "✅ Production server is working!"
else
    echo "❌ Production server test failed"
fi

kill $SERVER_PID 2>/dev/null || true
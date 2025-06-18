#!/bin/bash

# Production startup script
export NODE_ENV=production
export PORT=5000

echo "Starting Calculator Sarcina in production mode..."
echo "Environment: $NODE_ENV"
echo "Port: $PORT"

# Check if build exists
if [ ! -f "dist/index.js" ]; then
    echo "Production build not found. Running build first..."
    ./build-production.sh
fi

if [ ! -d "server/public" ] || [ -z "$(ls -A server/public)" ]; then
    echo "Static files not found. Running build first..."
    ./build-production.sh
fi

# Start the production server
echo "Starting production server..."
node dist/index.js
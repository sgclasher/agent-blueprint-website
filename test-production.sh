#!/bin/bash

echo "Testing production build and server..."

# Clean previous builds
rm -rf server/public dist

# Run production build
./build.sh

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check that static files exist
if [ ! -f "server/public/index.html" ]; then
    echo "❌ Production HTML file not found"
    exit 1
fi

if [ ! -d "server/public/assets" ]; then
    echo "❌ Production assets directory not found"
    exit 1
fi

echo "✅ Static files are in correct location"

# Check that server bundle exists
if [ ! -f "dist/index.js" ]; then
    echo "❌ Server bundle not found"
    exit 1
fi

echo "✅ Server bundle created successfully"

# Start production server in background for testing
NODE_ENV=production node dist/index.js &
SERVER_PID=$!

# Wait for server to start
sleep 3

# Test server response
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000)

# Stop the test server
kill $SERVER_PID 2>/dev/null

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Production server responds correctly (HTTP $HTTP_STATUS)"
    echo "🎉 Production build is ready for deployment!"
else
    echo "❌ Production server test failed (HTTP $HTTP_STATUS)"
    exit 1
fi
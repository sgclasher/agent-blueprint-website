#!/bin/bash

# Production build script
echo "Building frontend with Vite..."
vite build

echo "Building backend with ESBuild..."
esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

echo "Copying static assets to server/public..."
mkdir -p server/public
cp -r dist/public/* server/public/

echo "Build complete! Static files are ready for production."
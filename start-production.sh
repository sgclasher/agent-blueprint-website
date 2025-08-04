#!/bin/bash

# Production startup script
echo "Starting production server..."

# Set production environment variables
export NODE_ENV=production
export PORT=${PORT:-5000}

# Run the production server
node dist/index.js
# Production Deployment Guide

## Issue
The deployment failed because it was configured to use `npm run dev` which is a development command, not suitable for production deployment.

## Solution

### 1. Manual Deployment Configuration Update Required

Since the `.replit` file cannot be edited programmatically, you need to manually update your deployment settings in Replit:

1. Go to your Replit project
2. Click on the "Deploy" tab
3. In the deployment settings, change the run command from:
   ```
   npm run dev
   ```
   to:
   ```
   ./build.sh && npm start
   ```

### 2. Production Build Process

The project now includes a `build.sh` script that handles the complete production build:

- Builds the frontend with Vite (optimized for production)
- Builds the backend with ESBuild
- Copies static assets to the correct server location

### 3. Production Scripts Available

The following production-ready scripts are available in `package.json`:

- `npm run build` - Builds both frontend and backend
- `npm start` - Starts the production server with NODE_ENV=production
- `./build.sh` - Complete build script (recommended for deployment)

### 4. Production Server Features

When running in production mode (`NODE_ENV=production`), the server:

- Serves pre-built static assets from `server/public/`
- Uses optimized, minified JavaScript and CSS
- Disables development-only features like hot module replacement
- Serves on port 5000 with proper host binding (0.0.0.0)

### 5. Environment Variables

Ensure the following environment variables are set for production:

- `NODE_ENV=production`
- `PORT=5000` (default, can be overridden)

### 6. Deployment Command Options

You can use any of these commands for deployment:

**Option 1 (Recommended):**
```bash
./build.sh && npm start
```

**Option 2:**
```bash
npm run build && npm start
```

**Option 3:**
```bash
vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist && cp -r dist/public server/ && npm start
```

## Verification

After deployment, your application will:

1. Build optimized production assets
2. Start the Express server in production mode
3. Serve the React application with proper static asset handling
4. Be accessible via your Replit deployment URL

The production build includes all necessary optimizations:
- Minified JavaScript and CSS
- Optimized asset bundling
- Proper static file serving
- Production-ready Express server configuration
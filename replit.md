# Agent Blueprint

## Overview

Agent Blueprint is a web application for NowGentic, a boutique AI advisory firm seeking VC funding. The platform helps companies link their corporate strategic initiatives and key business problems to actionable AI opportunities. It serves as a multi-model AI-powered solution that identifies what agentic AI solutions companies should build, why they should build them, and connects those agents to appropriate enterprise platforms for implementation.

The application features a marketing landing page with sections for hero messaging, platform capabilities, contact forms, and company information. It's designed to showcase Agent Blueprint's ability to integrate with popular enterprise platforms like ServiceNow, Salesforce, N8N, and Pega, while providing visualization tools for AI agent construction and management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for end-to-end type safety
- **API Design**: RESTful endpoints with JSON communication
- **Request Logging**: Custom middleware for API request/response logging
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Storage Interface**: Abstract storage interface (IStorage) with in-memory implementation for development

### Data Storage Solutions
- **Database**: PostgreSQL configured for production use with Neon Database serverless
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Shared schema definitions between client and server using Drizzle-Zod integration
- **Development Storage**: In-memory storage implementation for rapid development and testing
- **Migrations**: Drizzle Kit for database schema migrations and management

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **User Schema**: Basic user authentication structure with username/password fields
- **Security**: Prepared for session-based authentication with secure cookie handling

### Build and Development Tools
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Hot Module Replacement (HMR) and development middleware integration
- **Production Build**: ESBuild for server-side bundling with ES modules support
- **TypeScript**: Strict type checking across client, server, and shared code
- **Path Aliases**: Configured import aliases for clean code organization

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database for production deployment
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect support
- **Drizzle Kit**: Database migration and schema management tools

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Lucide React**: Consistent icon library for UI elements
- **Framer Motion**: Animation library for smooth user interactions

### Development and Runtime
- **Vite**: Modern build tool with React plugin support
- **React Query**: Server state management and data fetching
- **React Hook Form**: Performant form library with validation
- **Zod**: TypeScript-first schema validation
- **Wouter**: Lightweight routing for single-page applications

### Platform Integrations
- **Replit**: Development environment integration with error overlay and cartographer plugins
- **Enterprise Platforms**: Designed to integrate with ServiceNow, Salesforce, N8N, Pega (integration endpoints to be implemented)

The architecture supports the platform's goal of connecting strategic business initiatives to AI opportunities while maintaining flexibility for future enterprise platform integrations and multi-model AI capabilities.

## Production Deployment Configuration

### Deployment Scripts Created
- **build.sh**: Complete production build script that builds frontend with Vite, backend with ESBuild, and copies static assets to correct server location
- **test-production.sh**: Automated testing script to verify production build integrity and server functionality
- **DEPLOYMENT_GUIDE.md**: Comprehensive guide for manual deployment configuration updates

### Production Build Process
The production build process handles:
1. Frontend optimization with Vite (minified JS/CSS, asset bundling)
2. Backend bundling with ESBuild for Node.js deployment
3. Static asset placement in `server/public/` for proper serving
4. Environment configuration for production mode

### Manual Configuration Required
Since `.replit` file editing is restricted, deployment configuration must be updated manually in Replit's deployment interface:
- Change run command from `npm run dev` to `./build.sh && npm start`
- Ensures production environment variables are set (NODE_ENV=production)

### Deployment Status
- ✅ Production build scripts functional and tested
- ✅ Static asset serving configured correctly
- ✅ Server bundle creation and execution verified
- ⏳ Manual deployment configuration update pending (user action required)

Last updated: August 4, 2025
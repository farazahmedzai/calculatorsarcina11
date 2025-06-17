# Romanian Pension Calculator - replit.md

## Overview

This is a Romanian pension calculator web application built with React and Express.js. The application helps users calculate their pension benefits based on Romanian pension laws and regulations. It features a modern UI with shadcn/ui components, supports multiple pension types, and includes educational content about the Romanian pension system.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Basic session handling (no authentication system implemented)

### Directory Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── lib/            # Utility functions and configurations
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express.js application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database abstraction layer
│   └── vite.ts            # Vite development integration
├── shared/                 # Shared code between frontend and backend
│   └── schema.ts          # Database schema and validation
└── migrations/            # Database migration files
```

## Key Components

### Database Schema
The application uses three main database tables:
- **users**: Basic user management (currently unused)
- **pension_calculations**: Stores pension calculation results
- **blog_posts**: Content management for educational articles

### Pension Calculator
- Implements Romanian pension calculation logic based on 2024 regulations
- Supports multiple pension types (standard, early partial, early complete)
- Calculates pension points based on salary ratio to national average
- Applies penalties and bonuses based on pension type and timing

### Content Management
- Educational blog posts about Romanian pension system
- Static pages explaining pension types, legislation, and planning strategies
- SEO-optimized content with proper meta tags

### UI Components
- Comprehensive set of shadcn/ui components
- Responsive design optimized for mobile and desktop
- Accessible components following WCAG guidelines
- Custom Romanian-language content and terminology

## Data Flow

1. **User Input**: Users enter pension calculation parameters via React forms
2. **Client Validation**: Zod schemas validate input on the frontend
3. **API Request**: Validated data sent to Express.js backend
4. **Server Processing**: Backend performs pension calculations and stores results
5. **Database Storage**: Calculation results saved to PostgreSQL via Drizzle ORM
6. **Response**: Calculated pension amount returned to frontend
7. **UI Update**: Results displayed in user-friendly format with breakdown

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, ReactDOM, React Hook Form)
- UI components (Radix UI primitives, Lucide icons)
- Styling (Tailwind CSS, class-variance-authority)
- State management (TanStack Query)
- Routing (Wouter)
- Validation (Zod)

### Backend Dependencies
- Express.js with TypeScript support
- Database (Drizzle ORM, Neon Database connector)
- Development tools (tsx for TypeScript execution)
- Build tools (esbuild for production builds)

### Development Tools
- Vite for frontend development and HMR
- TypeScript for type safety
- Tailwind CSS for styling
- PostCSS for CSS processing

## Deployment Strategy

### Development Environment
- Uses Replit's development environment with Node.js 20
- PostgreSQL 16 module for database functionality
- Vite dev server with HMR for frontend development
- TSX for TypeScript execution in development

### Production Build
- Frontend built with Vite to static assets in `dist/public`
- Backend bundled with esbuild to `dist/index.js`
- Serves static frontend files from Express.js in production
- Environment-aware configuration for development vs production

### Database Management
- Drizzle Kit for schema management and migrations
- Environment variable-based database connection
- Schema-first approach with TypeScript types generated from database schema

## Changelog

Changelog:
- June 17, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
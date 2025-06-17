# Calculator Sarcina - Replit Configuration

## Project Overview

This is Calculator Sarcina, a comprehensive Romanian pregnancy and pension calculator web application designed to help Romanian citizens with pregnancy calculations and pension benefit calculations based on current Romanian laws and regulations. The application combines accurate calculations with educational content and SEO optimization for maximum accessibility.

### Key Features
- Pregnancy calculators for due dates and milestones
- Accurate pension calculations based on 2024 Romanian regulations
- Support for multiple calculator types
- Educational content about pregnancy and pension planning
- SEO-optimized pages for better search visibility
- Responsive design optimized for all devices
- Accessibility features following WCAG guidelines

## Replit-Specific Configuration

### Environment Setup
- **Runtime**: Node.js 20
- **Database**: PostgreSQL 16 (optional - uses in-memory storage by default)
- **Package Manager**: npm
- **Development Server**: Vite with Hot Module Replacement

### Replit Features Utilized
- **Deployments**: Configured for one-click deployment
- **Database**: PostgreSQL integration ready
- **Environment Variables**: Secure secret management
- **Live Preview**: Real-time development preview
- **Workflows**: Automated development server management

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

## Replit Deployment Configuration

### Environment Variables Required

For production deployment on Replit:

```bash
# Required for production
NODE_ENV=production
PORT=5000

# Optional - Database configuration
DATABASE_URL=postgresql://user:password@host:port/database

# Optional - Analytics and monitoring
ANALYTICS_KEY=your-analytics-key
```

### Replit Secrets Setup

Configure these secrets in Replit's environment:
1. `DATABASE_URL` - PostgreSQL connection string (if using external database)
2. `SESSION_SECRET` - Secure session secret for production
3. Any external API keys for future integrations

### Deployment Workflow

1. **Development Phase:**
   - Code changes trigger automatic server restart
   - Vite provides hot module replacement for frontend
   - In-memory storage for rapid prototyping

2. **Production Deployment:**
   - Click "Deploy" button in Replit
   - Environment variables automatically applied
   - Static assets served optimized
   - Database connections established if configured

### Performance Optimization for Replit

- **Bundle Optimization:** Vite automatically optimizes bundles for production
- **Asset Caching:** Static assets served with appropriate cache headers
- **Database Pooling:** Connection pooling configured for PostgreSQL
- **Memory Management:** In-memory storage with automatic cleanup

### Monitoring and Debugging

**Development Monitoring:**
- Real-time console logs in Replit terminal
- Browser developer tools for frontend debugging
- Network tab for API request monitoring

**Production Monitoring:**
- Application health endpoint: `/health`
- Error logging to console (viewable in Replit)
- Performance metrics via browser tools

## Development Best Practices

### Code Organization

**Frontend Structure:**
```
client/src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   ├── pension-calculator.tsx
│   ├── header.tsx
│   └── footer.tsx
├── pages/            # Route-based page components
├── lib/              # Utility functions and config
├── hooks/            # Custom React hooks
└── main.tsx          # Application entry point
```

**Backend Structure:**
```
server/
├── index.ts          # Express server setup
├── routes.ts         # API route definitions
├── storage.ts        # Database abstraction layer
└── vite.ts           # Development server integration
```

### TypeScript Integration

- **Shared Types:** All data models defined in `shared/schema.ts`
- **Strict Mode:** TypeScript strict mode enabled for better type safety
- **Validation:** Zod schemas provide runtime type checking
- **IDE Support:** Full IntelliSense and error checking in Replit

### Database Strategy

**Development:**
- In-memory storage for immediate development
- No external dependencies required
- Automatic data reset on server restart

**Production:**
- PostgreSQL via environment variable
- Drizzle ORM for type-safe database operations
- Migration system ready for schema changes

## Romanian Pension System Integration

### Calculation Accuracy

The pension calculator implements current Romanian pension regulations:

**Legal Framework:**
- Law 263/2010 - Romanian pension system law
- Government decisions on pension point values
- Annual updates to national average salary

**Calculation Parameters:**
- Current pension point value: 1,785 RON (2024)
- National average salary: ~6,500 RON (estimated)
- Retirement ages: 65 (men), 63+ (women, gradually increasing)

**Validation Rules:**
- Minimum contribution period: 15 years
- Age limits: 18-70 years for calculations
- Salary ranges: Realistic Romanian salary bounds

### Content Localization

**Language Support:**
- Primary language: Romanian
- Technical terms: Authentic Romanian pension terminology
- User interface: Romanian-first design

**Cultural Adaptation:**
- Romanian pension system specifics
- Local currency (RON) throughout
- Romanian legal references and resources

## Technical Implementation Details

### Frontend Architecture

**React Setup:**
- React 18 with concurrent features
- TypeScript for type safety
- Wouter for lightweight routing
- TanStack Query for server state

**UI Framework:**
- shadcn/ui components for consistency
- Radix UI primitives for accessibility
- Tailwind CSS for utility-first styling
- Lucide React for iconography

**Form Management:**
- React Hook Form for performance
- Zod integration for validation
- Real-time validation feedback
- Accessible form design

### Backend Architecture

**Express.js Setup:**
- TypeScript throughout backend
- Modular route organization
- Middleware for security and logging
- Error handling and validation

**Data Layer:**
- Storage interface abstraction
- In-memory implementation for development
- PostgreSQL ready for production
- Drizzle ORM for type-safe queries

### Build and Development

**Vite Configuration:**
- Frontend development server
- Hot module replacement
- Optimized production builds
- Asset optimization and bundling

**Development Workflow:**
- Automatic server restart on changes
- TypeScript compilation checking
- Real-time error reporting
- Integrated debugging support

## Security Considerations

### Input Validation

- All user inputs validated with Zod schemas
- SQL injection prevention via ORM
- XSS protection through React's built-in sanitization
- CSRF protection ready for authentication

### Data Protection

- Minimal personal data storage
- Calculation results stored temporarily
- No authentication system (currently)
- Privacy-focused design approach

### Production Security

- Environment variable protection
- Secure session handling preparation
- HTTPS enforcement ready
- Security headers configuration

## Future Development Roadmap

### Immediate Priorities

1. **Database Migration:** PostgreSQL integration and testing
2. **Mobile Optimization:** Enhanced responsive design
3. **Performance:** Caching and optimization improvements
4. **Error Handling:** Comprehensive error boundary implementation

### Medium-term Goals

1. **Advanced Calculations:** Inflation adjustment and projections
2. **User Features:** Calculation history and PDF export
3. **Content Management:** Admin interface for blog posts
4. **Analytics:** Usage tracking and performance monitoring

### Long-term Vision

1. **Multi-language Support:** English version for international users
2. **API Integration:** Connection with official Romanian pension APIs
3. **Mobile Apps:** Native iOS and Android applications
4. **AI Features:** Intelligent retirement planning suggestions

## Changelog

### Version 1.0.0 - June 17, 2025
- **Initial Release:** Calculator Sarcina with pregnancy and pension calculators
- **Features:** Multi-type calculations, educational content
- **Architecture:** React + Express.js with TypeScript
- **Deployment:** Replit-optimized configuration at calculatorsarcina.com
- **Documentation:** Comprehensive documentation suite
- **Branding Update:** Complete rebrand from "Calculator Pensie" to "Calculator Sarcina"

### Development History
- **Project Setup:** Modern full-stack TypeScript architecture
- **UI Implementation:** shadcn/ui component integration
- **Calculation Logic:** Romanian pension system implementation
- **Content Creation:** Educational blog posts and guides
- **SEO Optimization:** Meta tags and structured content
- **Branding Consistency:** Updated all references from "Calculator Pensie" to "Calculator Sarcina"
- **Domain Updates:** Standardized domain references to calculatorsarcina.com

## Support and Maintenance

### Issue Reporting
- Use GitHub issues for bug reports
- Include environment details and reproduction steps
- Check existing documentation before reporting

### Contributing
- Follow contribution guidelines in CONTRIBUTING.md
- Maintain code quality and TypeScript types
- Include tests for new features
- Update documentation with changes

### Community
- Romanian developers welcome to contribute
- Medical and pension experts invited for calculation validation
- UX designers for accessibility improvements
- Content creators for pregnancy and pension educational materials

---

*This Replit configuration document is maintained alongside the project. Last updated: June 17, 2025*

## Recent Changes - June 17, 2025

### ✓ Professional UI Complete Redesign Completed

**Latest Updates (June 17, 2025 - 2:00 PM):**
- **Complete Professional Makeover:** Transformed entire website with modern, corporate-grade design
- **Purple & Indigo Color Scheme:** Premium gradient color palette using purple-600 to indigo-600
- **CSS System Overhaul:** Updated all CSS variables to professional hsl values with proper contrast
- **Hero Section Redesign:** Modern geometric backgrounds, glassmorphism badges, premium gradients
- **Feature Cards Revolution:** Completely redesigned with gradient backgrounds, shadow effects, and micro-interactions
- **Header Modernization:** Streamlined navigation, updated logo, professional color scheme
- **Footer Complete Redesign:** Modern gradient backgrounds, improved layout, enhanced social links

**New Professional Theme Specifications:**
- **Primary:** hsl(262, 83%, 58%) - Purple gradient primary for buttons and highlights
- **Secondary:** hsl(220, 14%, 96%) - Clean light backgrounds and subtle elements
- **Accent Colors:** Pink-500 to Purple-600 gradients for pregnancy features
- **Background Gradients:** Purple to Indigo with modern blur effects and geometric shapes
- **Typography:** Enhanced with proper font weights and improved readability
- **Shadows:** Premium shadow system with multiple elevation levels

### ✓ UI Optimization and Spacing Improvements Completed

**Previous Updates (June 17, 2025 - 12:48 PM):**
- **UI Redesign:** Completely optimized layout with reduced spacing and cleaner design
- **Home Page:** Reduced excessive padding from py-24 to py-12, improved section spacing
- **Header:** Streamlined navigation with compact h-16 header height and smaller icons
- **Pension Calculator:** Simplified form design with standard spacing and cleaner styling
- **Footer:** Reduced padding and improved content organization
- **Results Display:** Clean alert-based results with proper color coding
- **Button Styling:** Standardized button sizes and consistent spacing
- **Typography:** Improved font sizes and reduced unnecessary gradient text effects

**Component Improvements:**
- **Header Component:** Reduced height, simplified logo, improved mobile navigation
- **Pension Calculator:** Removed complex glass effects, standardized form spacing
- **Footer:** Compact design with organized links and reduced vertical spacing
- **Home Page Sections:** Consistent py-12 spacing, improved grid layouts
- **Cards:** Standardized padding and hover effects

### ✓ Pregnancy Calculator Implementation Completed

**Fully Implemented Features:**
- **Complete Pregnancy Calculator System:** Full working pregnancy calculator with 3 calculation methods
  - Last Menstrual Period (LMP) calculation
  - Conception date calculation  
  - Ultrasound-based calculation
- **Pregnancy Tracking Features:** Week-by-week milestones, trimester information, due date estimation
- **Full Pension Calculator System:** Romanian 2024 regulations with all pension types
- **Dual Calculator Architecture:** Both pregnancy and pension calculators fully functional
- **Modern UI Infrastructure:** React + TypeScript with shadcn/ui components
- **Complete API Integration:** Pregnancy and pension calculation endpoints working
- **Updated Navigation:** Header includes pregnancy calculator navigation
- **SEO Optimization:** Updated meta tags for both calculator types

**Technical Implementation:**
- **Database Schema:** Added pregnancy_calculations table with proper validation
- **Storage Layer:** In-memory storage supporting both calculator types
- **API Endpoints:** /api/calculate-pregnancy and /api/pregnancy-calculations functional
- **Form Validation:** Zod schemas for pregnancy calculation inputs
- **Error Handling:** Comprehensive validation and error states

**Current Functional Status:**
- **Application:** Running successfully on port 5000 with optimized UI
- **Pregnancy Calculator:** Fully operational at /calculator-sarcina with milestone tracking
- **Pension Calculator:** Fully operational with clean, compact design
- **Home Page:** Optimized layout with proper spacing and improved readability
- **Blog System:** Working with 3 sample educational posts
- **All Pages:** Complete navigation with improved mobile responsiveness
- **UI Consistency:** Standardized spacing and design patterns throughout

## Quick Replit Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run database migrations
npm run db:generate && npm run db:migrate

# View database schema
npm run db:studio
```
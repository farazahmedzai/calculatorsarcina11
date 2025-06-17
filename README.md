# Calculator Sarcina

A professional Romanian pregnancy calculator and pension calculator web application with educational content and SEO optimization.

[Calculator Sarcina](https://img.shields.io/badge/Status-Active-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18-blue)
![Express](https://img.shields.io/badge/Express-4.18-green)

## Overview

Calculator Sarcina helps Romanian citizens with pregnancy calculations and pension benefit calculations based on current Romanian laws and regulations. It features a modern, responsive interface with comprehensive educational content.

## Features

- **Pregnancy Calculator**: Calculate pregnancy milestones and due dates
- **Pension Calculator**: Calculate pension benefits based on Romanian regulations
- **Multiple Calculator Types**: Support for various pregnancy and pension calculations
- **Educational Content**: Blog posts and guides about pregnancy and pension planning
- **SEO Optimized**: Structured content for better search engine visibility
- **Responsive Design**: Mobile-first design with accessibility features
- **Real-time Calculations**: Instant pension calculations with detailed breakdowns

## Quick Start

### Prerequisites

- Node.js 20 or higher
- PostgreSQL database (optional - uses in-memory storage by default)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd calculator-sarcina
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5000` or visit https://calculatorsarcina.com

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Wouter** for routing
- **shadcn/ui** components with Radix UI
- **Tailwind CSS** for styling
- **TanStack Query** for state management
- **React Hook Form** with Zod validation

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** (with fallback to in-memory storage)
- **Zod** for schema validation

### Development Tools
- **Vite** for frontend bundling
- **TSX** for TypeScript execution
- **ESBuild** for production builds

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express.js application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database layer
│   └── vite.ts            # Development server
├── shared/                 # Shared TypeScript schemas
│   └── schema.ts          # Database and validation schemas
└── docs/                  # Documentation files
```

## Usage

### Calculating Pensions

1. Navigate to the pension calculator page
2. Enter your personal information:
   - Current age
   - Monthly salary
   - Years of contribution
   - Pension type preference
3. Click "Calculate" to see your estimated pension
4. Review the detailed breakdown of calculations

### Educational Content

- Browse pension types and regulations
- Read planning guides and tips
- Access legislation and resources
- Stay updated with latest changes

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database (optional - uses in-memory storage if not provided)
DATABASE_URL=postgresql://user:password@localhost:5432/pension_db

# Development
NODE_ENV=development
PORT=5000
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue on GitHub or contact the development team.

## Acknowledgments

- Romanian Ministry of Labor for pension regulations
- shadcn/ui for the component library
- The React and TypeScript communities
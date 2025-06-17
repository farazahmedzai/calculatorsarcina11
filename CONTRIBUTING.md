# Contributing to Calculator Sarcina

Thank you for your interest in contributing to Calculator Sarcina! This document provides guidelines and information for contributors.

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- Git
- Basic knowledge of React and TypeScript
- Understanding of Romanian pregnancy and pension systems (helpful but not required)

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/your-username/calculator-sarcina.git
cd calculator-sarcina
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open `http://localhost:5000` to see the application

## Project Structure

Understanding the codebase structure will help you contribute effectively:

### Frontend (`client/`)
- `src/components/` - Reusable UI components
- `src/pages/` - Page components for routing
- `src/lib/` - Utility functions and configurations
- `src/hooks/` - Custom React hooks

### Backend (`server/`)
- `index.ts` - Server entry point
- `routes.ts` - API route definitions
- `storage.ts` - Database abstraction layer
- `vite.ts` - Development server integration

### Shared (`shared/`)
- `schema.ts` - Database schemas and validation

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Use Prettier for code formatting
- Write meaningful commit messages

### React Components

- Use functional components with hooks
- Implement proper TypeScript types
- Follow shadcn/ui patterns for consistency
- Ensure components are accessible

### Backend Development

- Keep API routes thin - logic should be in storage layer
- Use Zod schemas for request validation
- Handle errors appropriately
- Follow RESTful API conventions

### Database Changes

- Use Drizzle ORM for all database operations
- Update the storage interface when adding new operations
- Create migrations for schema changes
- Test database operations thoroughly

## Types of Contributions

### Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and system information
- Screenshots if applicable

### Feature Requests

For new features, please provide:
- Clear description of the proposed feature
- Use cases and benefits
- Potential implementation approach
- Mockups or wireframes if applicable

### Code Contributions

#### Before Starting
- Check existing issues and pull requests
- Discuss major changes in an issue first
- Ensure your changes align with project goals

#### Development Process
1. Create a feature branch from main:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes following the guidelines
3. Test your changes thoroughly
4. Commit your changes with clear messages
5. Push to your fork and create a pull request

### Documentation

Help improve documentation by:
- Fixing typos and unclear explanations
- Adding examples and use cases
- Translating content
- Creating tutorials and guides

## Pull Request Process

### Before Submitting
- Ensure your code follows the style guidelines
- Test your changes in different browsers
- Update documentation if needed
- Add or update tests as appropriate

### PR Requirements
- Clear title and description
- Reference related issues
- Include screenshots for UI changes
- Ensure CI checks pass

### Review Process
- All PRs require review before merging
- Address feedback promptly
- Be open to suggestions and changes
- Maintain respectful communication

## Specific Contribution Areas

### Calculator Logic

When contributing to pregnancy or pension calculations:
- Verify accuracy against official Romanian regulations and medical guidelines
- Include source references for calculation methods
- Test with various scenarios and edge cases
- Document any assumptions or limitations

### UI/UX Improvements

For interface contributions:
- Maintain consistency with existing design
- Ensure accessibility compliance
- Test on mobile devices
- Consider Romanian language and cultural context for pregnancy and pension topics

### Content and Education

When adding educational content:
- Ensure accuracy of pregnancy and pension information
- Use clear, accessible language
- Include sources and references
- Consider SEO optimization

### Translation and Localization

For language contributions:
- Maintain consistency in terminology
- Consider cultural context
- Test UI layout with translated text
- Follow established translation patterns

## Testing

### Manual Testing
- Test calculator with various input combinations
- Verify responsive design on different devices
- Check accessibility with screen readers
- Test browser compatibility

### Automated Testing
- Write unit tests for utility functions
- Add integration tests for API endpoints
- Include component tests for complex UI logic
- Maintain good test coverage

## Security Considerations

When contributing code:
- Validate all user inputs
- Avoid exposing sensitive information
- Follow secure coding practices
- Report security issues privately

## Getting Help

### Communication Channels
- GitHub Issues for bugs and feature requests
- Pull Request discussions for code review
- Documentation for implementation guidance

### Resources
- Romanian pension authority websites
- Project documentation and guides
- Existing codebase for patterns and conventions

## Recognition

Contributors are recognized through:
- GitHub contributor lists
- Acknowledgments in documentation
- Credit in release notes

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to the Romanian Pension Calculator! Your efforts help make pension planning more accessible and accurate for Romanian citizens.
# Taj India Tour and Travel - Web Application

## Overview

This is a full-stack web application for Taj India Tour and Travel, a travel agency specializing in Indian tourism packages. The application provides a modern, responsive interface for browsing tour packages, destinations, and booking services with a focus on the Golden Triangle tours (Delhi, Agra, Jaipur) and spiritual journeys.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **API Design**: RESTful API with JSON responses

## Key Components

### Frontend Components
- **Header**: Sticky navigation with logo, menu, and responsive mobile hamburger
- **Footer**: Company information, social links, and payment methods
- **TourCard**: Reusable component for displaying tour packages with pricing and highlights
- **TestimonialCard**: Customer review cards with ratings and avatars
- **BookingForm**: Multi-step form with validation for tour bookings

### Backend Services
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **API Routes**: CRUD operations for bookings with validation
- **Schema**: Type-safe database schema with Zod validation

### Data Models
- **Users**: Basic user management (username, password)
- **Bookings**: Comprehensive booking information including personal details, tour preferences, and special requests

## Data Flow

1. **User Interaction**: Users browse tours and destinations through the React frontend
2. **Form Submission**: Booking forms are validated client-side with React Hook Form and Zod
3. **API Communication**: TanStack Query manages API calls to the Express backend
4. **Data Validation**: Server validates incoming data using shared Zod schemas
5. **Data Persistence**: Drizzle ORM handles database operations with PostgreSQL
6. **Response Handling**: Success/error states are managed through the query client

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component suite
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Development**: Vite with React plugin and TypeScript support
- **Fonts**: Google Fonts (Inter and Playfair Display)
- **Icons**: Font Awesome for consistent iconography

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL with connection pooling
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Build**: ESBuild for production bundling
- **Development**: TSX for TypeScript execution

### Shared Dependencies
- **Validation**: Zod for runtime type checking and form validation
- **Type Safety**: TypeScript across the entire stack
- **Date Handling**: date-fns for date formatting and manipulation

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server with HMR for frontend
- **Backend**: TSX with nodemon-like behavior for automatic restarts
- **Database**: Drizzle Kit for schema migrations and database management

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles the Express server to `dist/index.js`
- **Database**: Drizzle Kit pushes schema changes to production PostgreSQL

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Build Process**: Separate build commands for frontend and backend
- **Asset Serving**: Express serves static frontend assets in production

The application is designed to be deployed on platforms like Replit, Vercel, or traditional VPS hosting with minimal configuration changes.

## Changelog
```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```
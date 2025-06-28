# React + Vite + Vitest Demo

A simple React project with TypeScript, Vite, and Vitest for testing.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Fast build tool
- ⚛️ [React 19](https://react.dev/) - UI library
- 🔷 [TypeScript](https://www.typescriptlang.org/) - Type safety
- 🧪 [Vitest](https://vitest.dev/) - Unit testing framework
- 🎯 [Testing Library](https://testing-library.com/) - React testing utilities

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Testing

Run tests in watch mode:

```bash
npm test
```

Run tests once:

```bash
npm run test:run
```

Run tests with UI:

```bash
npm run test:ui
```

### Building

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Counter.tsx          # Simple counter component
│   └── Counter.test.tsx     # Tests for counter component
├── test/
│   └── setup.ts             # Test setup configuration
├── App.tsx                  # Main app component
└── main.tsx                 # App entry point
```

## Example Component

The project includes a simple `Counter` component that demonstrates:

- React hooks (useState)
- TypeScript interfaces
- Event handling
- Component testing

## Test Examples

The test suite demonstrates:

- Component rendering tests
- User interaction tests
- Props testing
- DOM element queries
- Event simulation

All tests use Vitest and React Testing Library for modern, accessible testing practices.

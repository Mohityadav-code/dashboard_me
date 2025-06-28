# React Admin Dashboard

A modern, responsive admin dashboard built with React, TypeScript, and Tailwind CSS. This application demonstrates strong skills in component architecture, UI/UX design, state management, performance, and accessibility.

## 🚀 Live Demo

**[View Live Dashboard](https://dashboard-me-su1h.vercel.app/)**

## ✨ Features

- 📊 **Dashboard Overview** - Real-time statistics and quick actions
- 👥 **User Management** - Complete CRUD operations with filtering and pagination
- 📈 **Analytics & Reports** - Data visualization and reporting tools
- ⚙️ **Settings Management** - Theme switching, notifications, and preferences
- 🌙 **Dark Mode** - Toggle between light, dark, and system themes
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔍 **Advanced Filtering** - Search, sort, and filter functionality
- 📄 **Pagination** - Dynamic pagination with customizable page sizes
- ⚡ **Performance Optimized** - React hooks and efficient state management

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel

### Project Structure
```
src/
├── components/
│   ├── dashboard/          # Dashboard-specific components
│   │   └── StatsCard.tsx   # Statistics display cards
│   ├── layout/             # Layout components
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Navbar.tsx      # Top navigation bar
│   │   └── Sidebar.tsx     # Side navigation
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx      # Button component
│   │   ├── Card.tsx        # Card wrapper
│   │   ├── Input.tsx       # Input fields
│   │   ├── Tooltip.tsx     # Tooltip component
│   │   └── Skeleton.tsx    # Loading skeletons
│   └── users/              # User management components
│       ├── UserTable.tsx   # User data table
│       ├── UserFilters.tsx # Search and filter controls
│       └── UserPagination.tsx # Pagination controls
├── hooks/                  # Custom React hooks
│   ├── useUsers.ts         # User data management
│   ├── useDashboardStats.ts # Dashboard statistics
│   └── useTheme.ts         # Theme management
├── pages/                  # Page components
│   ├── Dashboard.tsx       # Main dashboard
│   ├── Users.tsx          # User management
│   ├── Reports.tsx        # Reports page
│   ├── Analytics.tsx      # Analytics page
│   └── Settings.tsx       # Settings page
├── services/               # API services
│   └── api.ts             # API client for reqres.in
├── types/                  # TypeScript type definitions
│   └── index.ts           # Shared types
└── test/                   # Test configuration
    └── setup.ts           # Test setup
```

### Key Design Patterns

1. **Component Architecture**: Modular, reusable components with clear separation of concerns
2. **Custom Hooks**: Encapsulated business logic in custom hooks (useUsers, useTheme, useDashboardStats)
3. **Type Safety**: Comprehensive TypeScript implementation with proper interfaces
4. **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
5. **State Management**: Local state with React hooks, no external state management needed
6. **API Integration**: Clean service layer for external API communication

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard_me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint

## 📊 API Integration

The dashboard integrates with [reqres.in](https://reqres.in/) API for user data:

- **Base URL**: `https://reqres.in/api`
- **Endpoints**:
  - `GET /users` - Fetch paginated user list
  - `GET /users/:id` - Fetch individual user details

### API Features
- Real-time data fetching
- Error handling and loading states
- Pagination support
- Search and filtering capabilities

## 🎨 Design System

### Color Palette
- **Primary**: Blue shades for main actions
- **Secondary**: Gray shades for text and borders
- **Success**: Green for positive actions
- **Warning**: Yellow for caution states
- **Error**: Red for error states

### Components
- **Cards**: Consistent card layouts with hover effects
- **Buttons**: Multiple variants (primary, outline, ghost)
- **Inputs**: Form inputs with proper focus states
- **Tables**: Responsive data tables with sorting
- **Tooltips**: Contextual help and information

## 🔧 Customization

### Theme Configuration
The dashboard supports three theme modes:
- **Light**: Default light theme
- **Dark**: Dark theme for low-light environments
- **System**: Automatically follows system preference

### Styling
All styles are built with Tailwind CSS. Custom styles can be added in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles

## 🧪 Testing

The project includes comprehensive testing setup with:
- **Vitest**: Fast unit testing framework
- **React Testing Library**: Component testing utilities
- **Jest DOM**: Custom DOM matchers for enhanced assertions

### Test Coverage

Currently, the following components have comprehensive test coverage:

#### UI Components (`src/components/ui/__tests__/`)
- **Button.test.tsx** (12 tests) - Tests all button variants, sizes, states, and interactions
- **Card.test.tsx** (11 tests) - Tests card rendering, styling, and ref forwarding
- **Input.test.tsx** (13 tests) - Tests input types, validation, accessibility, and controlled inputs
- **Tooltip.test.tsx** (10 tests) - Tests tooltip positioning, visibility, and complex content

#### Test Features
- **Component Rendering**: Verifies components render correctly with default and custom props
- **User Interactions**: Tests click events, keyboard events, and form interactions
- **Accessibility**: Ensures proper ARIA attributes and keyboard navigation
- **Styling**: Validates CSS classes and responsive behavior
- **Ref Forwarding**: Tests ref forwarding for DOM manipulation
- **Error States**: Verifies error handling and validation states

### Running Tests
```bash
npm test          # Run tests in watch mode
npm run test:run  # Run tests once (46 tests total)
npm run test:ui   # Run tests with UI interface
```

### Test Structure
```
src/
├── components/ui/__tests__/    # UI component tests
│   ├── Button.test.tsx         # Button component tests
│   ├── Card.test.tsx           # Card component tests
│   ├── Input.test.tsx          # Input component tests
│   └── Tooltip.test.tsx        # Tooltip component tests
└── test/                       # Test configuration
    ├── setup.ts               # Test setup and configuration
    └── types.d.ts             # TypeScript declarations for test matchers
```

### Test Configuration
- **Setup**: `src/test/setup.ts` - Configures testing environment
- **Types**: `src/test/types.d.ts` - Extends expect interface with custom matchers
- **Coverage**: Tests focus on component behavior, user interactions, and accessibility

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible sidebar navigation
- Touch-friendly interface
- Optimized table layouts
- Responsive card grids

## 🚀 Deployment

The dashboard is deployed on Vercel for optimal performance and reliability.

### Deployment Features
- **Automatic builds** on git push
- **Global CDN** for fast loading
- **HTTPS** enabled by default
- **Custom domain** support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool
- [reqres.in](https://reqres.in/) - API for testing

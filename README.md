# sebarmeli.com

Personal website for Sebastiano Armeli-Battana, built with Next.js 16 and React 19.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

### Running Production Build

Start the production server:

```bash
npm start
```

This serves the optimized build created by `npm run build`.

### Bundle Analysis

Analyze the production bundle size:

```bash
npm run analyze
```

This generates an interactive visualization of the bundle composition.

## Available Scripts

- `npm run dev` - Start development server on [http://localhost:3000](http://localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run analyze` - Analyze bundle size with visual report
- `npm run sass` - Watch and compile SCSS files
- `npm run lint` - Run ESLint checks
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode
- `npm run test:coverage` - Generate test coverage report

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Font Awesome](https://fontawesome.com/) - Icons
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [TSParticles](https://particles.js.org/) - Particle effects
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights) - Performance monitoring

## Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

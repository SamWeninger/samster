# Samster — Travel Journals in Motion

A cinematic, image-led travel website showcasing journeys through photography and video.

## About

This is a personal travel portfolio website featuring:
- Photo galleries from destinations around the world
- Cinematic travel vlogs and YouTube content
- Minimalist, artistic design inspired by contemporary photography portfolios

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Frontend library
- **React Router** - Client-side routing
- **shadcn/ui** - Modern UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd samster
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── cards/          # Card components
│   ├── filters/        # Filter and search components
│   ├── gallery/        # Image gallery components
│   ├── hero/           # Hero section components
│   ├── layout/         # Layout components (header, footer)
│   ├── media/          # Media components (images, video)
│   └── ui/             # shadcn/ui components
├── data/               # Static data (destinations, vlogs)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── styles/             # Global styles
```

## Content Management

Content is managed through JSON files:
- `src/data/destinations.json` - Destination information and galleries
- `src/data/vlogs.json` - Video content and metadata

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder contains the production-ready files that can be deployed to any static hosting service.

## Contributing

This is a personal portfolio project, but feel free to fork it for your own travel website!

## License

Private project - All rights reserved.
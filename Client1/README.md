# YouTube Clone

A React-based YouTube clone frontend with modern UI components and routing.

## Features

- **Home Page**: Video grid with category filtering
- **Video Player**: Watch page with video player and related videos
- **Search**: Search functionality with results page
- **Navigation**: Sidebar with menu items and user avatar
- **Responsive Design**: Mobile-friendly layout
- **Routing**: React Router for navigation

## Components

- `Navbar`: Top navigation with search and menu
- `Sidebar`: Left sidebar with navigation links
- `VideoCard`: Individual video thumbnail and info
- `VideoGrid`: Grid layout for video cards
- `VideoPlayer`: Video player with controls
- `CategoryChips`: Filter chips for video categories
- `SearchBar`: Search input with voice search option

## Pages

- `Home`: Main video feed
- `Watch`: Video playback page
- `SearchResults`: Search results page
- `Subscriptions`: User subscriptions
- `History`: Watch history
- `Upload`: Video upload page
- `Profile`: User profile
- `Login/Register`: Authentication pages

## Tech Stack

- React 18
- React Router DOM
- Vite
- CSS Modules
- Mock data for demonstration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Mock Data

The app uses mock video data stored in `src/utils/mockData.js`. In a real application, this would be replaced with API calls to a backend service.

## Future Enhancements

- Backend API integration
- User authentication
- Video upload functionality
- Comments system
- User profiles and channels
- Live streaming
- Recommendations algorithm

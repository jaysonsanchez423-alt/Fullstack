# Backend Server

This folder contains a simple Express backend for the Fullstack project.

## Setup

1. Open a terminal in `Server`
2. Run `npm install`
3. Run `npm run dev`

The API will start on `http://localhost:4000`.

## Available routes

- `GET /api` - health check
- `GET /api/videos` - list all videos
- `GET /api/videos/:id` - get a single video
- `GET /api/categories` - get available categories
- `GET /api/comments` - list all comments
- `GET /api/comments?videoId=<id>` - list comments for a video
- `POST /api/comments` - add a comment (`videoId`, `author`, `text`)

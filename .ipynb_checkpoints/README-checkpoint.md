# Peach State Fabrication

A small full-stack web app using FastAPI, React, Stripe, and PostgreSQL.

## Run locally with Docker

1. Copy `.env.example` to `.env` and update the values.
2. Start the app:

```bash
docker-compose up --build
```

3. Open `http://localhost:8000`

## Deployment

- Live deployment: `https://senior-capstone-project-delta.vercel.app`

## Backend

- FastAPI app in `backend/app`
- API endpoints under `/api`
- Serves the React frontend build when available

## Frontend

- React app in `frontend`
- Uses Material UI and React Router

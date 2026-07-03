# IGNITO 2026

IGNITO 2026 is a polished full-stack experience for a student innovation festival, combining a React/Vite frontend with a FastAPI backend. The frontend is intentionally mock-first by default, while the backend is fully wired for future API use and local development.

## Tech stack
- Frontend: React, TypeScript, Vite, Tailwind CSS v4, Framer Motion, GSAP, React Router
- Backend: FastAPI, SQLAlchemy, Pydantic, JWT auth, Swagger/OpenAPI

## Project structure
- frontend/: Vite app, pages, components, hooks, services, styles
- backend/app/: FastAPI app, routes, schemas, models, database helpers
- backend/app/seed.py: seed data for initial development

## Frontend setup
```powershell
cd frontend
npm install
npm run dev
```

### Frontend environment
- VITE_API_BASE_URL: backend base URL, default is http://localhost:8000
- VITE_DATA_SOURCE: set to mock (default) or api
- VITE_ENABLE_API_FALLBACK: set to false to disable fallback to mock data

### Frontend commands
```powershell
npm run build
npm run lint
npm run preview
```

## Backend setup
```powershell
cd backend
py -3 -m venv .venv
.\.venv\Scripts\Activate.ps1
py -3 -m pip install -r requirements.txt
```

### Run backend
```powershell
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Seed data
```powershell
py -3 -c "from app.seed import *"
```

## Backend environment
- DATABASE_URL: PostgreSQL URL or SQLite fallback path
- SECRET_KEY: JWT signing secret
- ALGORITHM: JWT algorithm, default HS256

## Deployment
- Frontend: deploy the Vite app to Vercel and set VITE_API_BASE_URL to the deployed backend URL.
- Backend: deploy the FastAPI app with the Dockerfile or a Python service on Render.

## Production notes
- The frontend defaults to mock data so it remains fully usable without the backend.
- The shared content service centralizes data access and lets the app switch between mock and API modes with a configuration change.
- The backend boots successfully even when a PostgreSQL instance is unavailable by falling back to a local SQLite database.

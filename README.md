# starter scaffold

FastAPI + React + Postgres starter.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Tilt](https://docs.tilt.dev/install.html)

## Quick start

```bash
# Start everything
tilt up

# Or without Tilt
docker compose up --build
```

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000/docs
- **Tilt UI:** http://localhost:10350

## Running migrations

```bash
docker compose exec backend alembic revision --autogenerate -m "describe change"
docker compose exec backend alembic upgrade head
```

## Project structure

```
backend/
  app/
    main.py          # FastAPI app, middleware, router registration
    config.py        # Pydantic settings (env vars)
    database.py      # Async SQLAlchemy engine + session
    models/          # SQLAlchemy ORM models
    schemas/         # Pydantic request/response schemas
    routers/         # Route handlers
  alembic/           # Migration scripts
  tests/

frontend/
  src/
    components/      # React components
    hooks/           # Custom hooks
    services/        # API client
    types/           # TypeScript interfaces
```

## Adding a new feature

1. **Model** — add SQLAlchemy model in `backend/app/models/`
2. **Migration** — `alembic revision --autogenerate -m "add thing"`
3. **Schema** — add request/response models in `backend/app/schemas/`
4. **Router** — wire it up in `backend/app/routers/`, register in `main.py`
5. **Frontend** — add types, API call, hook, component

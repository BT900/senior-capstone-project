import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .routers import users, projects, quotes, payments, messages

Base.metadata.create_all(bind=engine)
app = FastAPI(title="Peach State Fabrication API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(users.router)
app.include_router(projects.router)
app.include_router(quotes.router)
app.include_router(payments.router)
app.include_router(messages.router)

FRONTEND_BUILD_DIR = os.path.join(os.path.dirname(__file__), "../../frontend/build")
if os.path.exists(FRONTEND_BUILD_DIR):
    app.mount("/", StaticFiles(directory=FRONTEND_BUILD_DIR, html=True), name="frontend")

@app.get("/api")
def api_status():
    return {"status": "ok", "app": "Peach State Fabrication"}

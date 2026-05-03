from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from ..auth import get_db
from ..models import Project

router = APIRouter(prefix="/api/projects", tags=["projects"])

class ProjectCreate(BaseModel):
    name: str
    description: str

@router.get("/")
def list_projects(db: Session = Depends(get_db)):
    return db.query(Project).all()

@router.post("/")
def create_project(project_in: ProjectCreate, db: Session = Depends(get_db)):
    project = Project(name=project_in.name, description=project_in.description)
    db.add(project)
    db.commit()
    db.refresh(project)
    return project

@router.get("/{project_id}")
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from ..auth import get_db
from ..models import Quote

router = APIRouter(prefix="/api/quotes", tags=["quotes"])

class QuoteCreate(BaseModel):
    name: str
    details: str

class QuoteUpdate(BaseModel):
    status: str

@router.get("/")
def list_quotes(db: Session = Depends(get_db)):
    return db.query(Quote).all()

@router.post("/")
def create_quote(quote_in: QuoteCreate, db: Session = Depends(get_db)):
    quote = Quote(name=quote_in.name, details=quote_in.details)
    db.add(quote)
    db.commit()
    db.refresh(quote)
    return quote

@router.patch("/{quote_id}")
def update_quote(quote_id: int, update: QuoteUpdate, db: Session = Depends(get_db)):
    quote = db.query(Quote).filter(Quote.id == quote_id).first()
    if not quote:
        raise HTTPException(status_code=404, detail="Quote not found")
    quote.status = update.status
    db.commit()
    db.refresh(quote)
    return quote

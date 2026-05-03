# backend/app/routers/messages.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..auth import get_db, get_current_user
from ..models import Message

router = APIRouter(prefix="/api/messages", tags=["messages"])

@router.get("/{channel_id}")
def get_channel_messages(channel_id: int, db: Session = Depends(get_db)):
    return db.query(Message).filter(Message.channel_id == channel_id).all()

@router.post("/{channel_id}")
def send_message(channel_id: int, payload: dict, db: Session = Depends(get_db), user=Depends(get_current_user)):
    msg = Message(channel_id=channel_id, user_id=user.id, content=payload.get("content"))
    db.add(msg)
    db.commit()
    return {"success": True}
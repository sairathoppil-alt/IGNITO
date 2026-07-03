from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.contact_message import ContactMessage
from app.schemas.contact import ContactMessageCreate, ContactMessageOut

router = APIRouter()


@router.get('/', response_model=list[ContactMessageOut])
def list_messages(db: Session = Depends(get_db)):
    return db.query(ContactMessage).all()


@router.post('/', response_model=ContactMessageOut)
def create_message(payload: ContactMessageCreate, db: Session = Depends(get_db)):
    msg = ContactMessage(**payload.model_dump())
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg

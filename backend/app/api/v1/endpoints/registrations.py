from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.registration import Registration
from app.schemas.registration import RegistrationCreate, RegistrationOut

router = APIRouter()


@router.get('/', response_model=list[RegistrationOut])
def list_registrations(db: Session = Depends(get_db)):
    return db.query(Registration).all()


@router.post('/', response_model=RegistrationOut)
def create_registration(payload: RegistrationCreate, db: Session = Depends(get_db)):
    reg = Registration(**payload.model_dump())
    db.add(reg)
    db.commit()
    db.refresh(reg)
    return reg


@router.get('/{registration_id}', response_model=RegistrationOut)
def get_registration(registration_id: int, db: Session = Depends(get_db)):
    reg = db.query(Registration).filter(Registration.id == registration_id).first()
    if not reg:
        raise HTTPException(status_code=404, detail='Registration not found')
    return reg

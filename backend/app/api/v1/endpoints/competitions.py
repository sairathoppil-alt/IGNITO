from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.competition import Competition
from app.schemas.competition import CompetitionCreate, CompetitionOut

router = APIRouter()


@router.get('/', response_model=list[CompetitionOut])
def list_competitions(db: Session = Depends(get_db)):
    return db.query(Competition).all()


@router.post('/', response_model=CompetitionOut)
def create_competition(payload: CompetitionCreate, db: Session = Depends(get_db)):
    comp = Competition(**payload.model_dump())
    db.add(comp)
    db.commit()
    db.refresh(comp)
    return comp


@router.get('/{slug}', response_model=CompetitionOut)
def get_competition(slug: str, db: Session = Depends(get_db)):
    comp = db.query(Competition).filter(Competition.slug == slug).first()
    if not comp:
        raise HTTPException(status_code=404, detail='Competition not found')
    return comp


@router.post('/{slug}/register')
def register_competition(slug: str):
    return {'message': f'Registered for {slug}'}

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.event import Event
from app.schemas.event import EventCreate, EventOut

router = APIRouter()


@router.get('/', response_model=list[EventOut])
def list_events(
    q: str | None = None,
    category: str | None = None,
    featured: bool | None = None,
    upcoming: bool | None = None,
    sort: str = 'latest',
    db: Session = Depends(get_db),
):
    query = db.query(Event)
    if q:
        query = query.filter(Event.title.ilike(f'%{q}%'))
    if category:
        query = query.filter(Event.category == category)
    if featured is not None:
        query = query.filter(Event.featured == featured)
    if upcoming is not None:
        query = query.filter(Event.is_upcoming == upcoming)
    if sort == 'latest':
        query = query.order_by(Event.created_at.desc())
    elif sort == 'title':
        query = query.order_by(Event.title.asc())
    return query.all()


@router.post('/', response_model=EventOut)
def create_event(payload: EventCreate, db: Session = Depends(get_db)):
    event = Event(**payload.model_dump())
    db.add(event)
    db.commit()
    db.refresh(event)
    return event


@router.get('/{slug}', response_model=EventOut)
def get_event(slug: str, db: Session = Depends(get_db)):
    event = db.query(Event).filter(Event.slug == slug).first()
    if not event:
        raise HTTPException(status_code=404, detail='Event not found')
    return event


@router.post('/{slug}/register')
def register_event(slug: str):
    return {'message': f'Registered for {slug}'}

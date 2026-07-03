from pydantic import BaseModel
from typing import Optional


class EventCreate(BaseModel):
    title: str
    slug: str
    description: str
    short_description: Optional[str] = None
    category: str
    venue: str
    duration: str
    difficulty: str
    featured: bool = False
    is_upcoming: bool = True


class EventOut(EventCreate):
    id: int
    coordinator_id: Optional[int] = None

    class Config:
        from_attributes = True

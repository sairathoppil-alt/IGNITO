from pydantic import BaseModel
from typing import Optional


class CompetitionCreate(BaseModel):
    title: str
    slug: str
    description: str
    category: str
    prize_pool: str
    duration: str
    featured: bool = False


class CompetitionOut(CompetitionCreate):
    id: int
    organizer_id: Optional[int] = None

    class Config:
        from_attributes = True

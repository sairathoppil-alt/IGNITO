from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, ForeignKey, Table
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.db.session import Base


class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    slug = Column(String(255), unique=True, index=True, nullable=False)
    description = Column(Text, nullable=False)
    short_description = Column(String(500), nullable=True)
    category = Column(String(100), nullable=False)
    venue = Column(String(255), nullable=False)
    duration = Column(String(100), nullable=False)
    difficulty = Column(String(100), nullable=False)
    featured = Column(Boolean, default=False)
    is_upcoming = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    coordinator_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    coordinator = relationship("User", foreign_keys=[coordinator_id])

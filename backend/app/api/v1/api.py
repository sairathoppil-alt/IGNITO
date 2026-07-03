from fastapi import APIRouter
from app.api.v1.endpoints import auth, events, competitions, contact, admin, registrations

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(events.router, prefix="/events", tags=["events"])
api_router.include_router(competitions.router, prefix="/competitions", tags=["competitions"])
api_router.include_router(contact.router, prefix="/contact", tags=["contact"])
api_router.include_router(registrations.router, prefix="/registrations", tags=["registrations"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])

from fastapi import APIRouter

router = APIRouter()


@router.get('/dashboard')
def dashboard():
    return {
        'events': 0,
        'competitions': 0,
        'registrations': 0,
        'contact_messages': 0,
        'coordinators': 0,
    }

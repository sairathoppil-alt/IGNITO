from pydantic import BaseModel, EmailStr


class RegistrationCreate(BaseModel):
    entity_type: str
    entity_slug: str
    name: str
    email: EmailStr
    phone: str | None = None
    notes: str | None = None


class RegistrationOut(RegistrationCreate):
    id: int
    status: str

    class Config:
        from_attributes = True

from pydantic import BaseModel, EmailStr


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str | None = None
    message: str


class ContactMessageOut(ContactMessageCreate):
    id: int
    is_read: bool
    is_spam: bool

    class Config:
        from_attributes = True

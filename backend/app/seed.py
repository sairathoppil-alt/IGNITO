from app.db.session import SessionLocal, engine
from app.db.session import Base
from app.models.user import User, UserRole
from app.models.event import Event
from app.models.competition import Competition
from app.models.contact_message import ContactMessage
from app.core.security import get_password_hash

Base.metadata.create_all(bind=engine)

db = SessionLocal()
try:
    if not db.query(User).filter(User.email == 'admin@ignito.org').first():
        admin = User(
            email='admin@ignito.org',
            username='admin',
            full_name='Admin User',
            hashed_password=get_password_hash('admin123'),
            role=UserRole.admin,
            is_verified=True,
        )
        db.add(admin)
    if not db.query(Event).first():
        db.add_all([
            Event(title='Autonomous Systems Sprint', slug='autonomous-systems-sprint', description='Build a campus bot', short_description='Robot challenge', category='Robotics', venue='Innovation Lab', duration='3 days', difficulty='Advanced', featured=True, is_upcoming=True),
            Event(title='Future Interfaces Challenge', slug='future-interfaces-challenge', description='Explore futuristic UI concepts', short_description='UI hackathon', category='Hackathon', venue='Tech Pavilion', duration='24 hrs', difficulty='Intermediate', featured=True, is_upcoming=True),
        ])
    if not db.query(Competition).first():
        db.add_all([
            Competition(title='Space UX Studio', slug='space-ux-studio', description='Design immersive experiences', category='Design', prize_pool='50,000₹', duration='2 days', featured=True),
            Competition(title='Security Capture the Flag', slug='security-capture-the-flag', description='Solve cyber security challenges', category='Cyber', prize_pool='75,000₹', duration='12 hrs', featured=True),
        ])
    if not db.query(ContactMessage).first():
        db.add(ContactMessage(name='Sample User', email='sample@ignito.org', subject='Hello', message='Welcome to IGNITO.'))
    db.commit()
finally:
    db.close()

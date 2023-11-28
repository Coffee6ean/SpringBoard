"""Models for Blogly."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

DEFAULT_IMAGE_URL = "https://www.freeiconspng.com/uploads/icon-user-blue-symbol-people-person-generic--public-domain--21.png"

def connect_db(app):
    """Connect to database"""

    db.app = app
    db.init_app(app)

class User(db.Model):
    """Users."""

    __tablename__ = 'users'

    id = db.Column(db.Integer, 
                   primary_key=True, 
                   autoincrements=True)
    first_name = db.Column(db.String(20), 
                           nullable=False, 
                           unique=True)
    last_name = db.Column(db.String(20), 
                          nullable=False)
    image_url = db.Column(db.String, 
                          nullable=False, 
                          default=DEFAULT_IMAGE_URL)
    
    @property
    def full_name(self):
        """Return full name of user."""

        return f"{self.first_name} {self.last_name}"
from sqlalchemy import Column, Integer, String, DateTime, Boolean, Foreignkey
from sqlalchemy.dialects.sql import LONGTEXT
from sqlalchemy.orm import relationship
from Config.db import Base

class User(Base):
    
    __Table__ = "users"

    id= Column (Integer, primary_key=True, index= True),
    usuario = Column(String(255)),
    password = Column(LONGTEXT),
    created_at = Column(DateTime),
    estatus = Column(Boolean, default=False),
    Id_persona = Column(Integer),
    #items = relationship("Item", back_popúlates="owner") Clave Foranea

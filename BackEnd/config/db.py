from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmarker

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:1234@localhost:3307/test.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

sessionLocal = sessionmarker(autocommit= False, autoflush=False, bind=engine)

 Base = declarative_base()



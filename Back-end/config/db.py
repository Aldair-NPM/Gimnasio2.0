from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#SQLALCHEMY_DATABASE_URL = 'mysql+pymysql://avnadmin:AVNS_DDFyfHbQ3t8OkXRLYc_@mysql-23d7c3b-amadoraldair794-5b4b.l.aivencloud.com:21641/defaultdb'
SQLALCHEMY_DATABASE_URL = 'mysql+pymysql://root:Sagitario96@localhost:3306/test'  #Conexión local

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
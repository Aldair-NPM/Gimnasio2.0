from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://root:Sagitario96@localhost:3306/test.db")
meta= MetaData()

conn = engine.connect()
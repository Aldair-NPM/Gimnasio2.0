from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String, DateTime, Date, Float, Boolean
from config.db import meta,engine
from datetime import datetime

tb_user= Table("users", meta,
               Column("id", Integer, primary_key=True),
               Column("usuario", String(255)),
               Column("password", String(255)),
               Column("created_at", DateTime = DateTime.now()),
               Column("estatus", bool=False),
               Column("Id_persona", Integer),
               )
meta.create_all(engine)
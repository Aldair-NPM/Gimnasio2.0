from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime 

user = APIRouter()
users = []

#userModels
class model_users(BaseModel):
    id:str
    usurio:str
    contrasena:str
    created_at:datetime = datetime.now()
    estatus:bool=False

@user.get("/")

def bienvenida():
    return "Bienvenido al sistema de apis"

@user.get("/users")
     
def get_usuarios():
    return users

@user.post("/users")

def save_usuarios(insert_users:model_users):
    users.append(insert_users)
    return "Datos guardados"
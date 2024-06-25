from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

user = APIRouter()
users = []


# Modelo de usuario
class model_user(BaseModel):
    id: str
    usuario: str
    contrasena: str
    created_at: datetime = datetime.now()
    estatus: bool = False

# Modelo de usuario para actualización
class update_user(BaseModel):
    usuario: Optional[str] = None
    contrasena: Optional[str] = None
    estatus: Optional[bool] = None

@user.get("/")
def bienvenida():
    return "Bienvenido al sistema de APIs"

@user.get("/users", response_model=List[model_user], tags=["Usuarios"])
def get_usuarios():
    return users

@user.post('/users', response_model=model_user, tags=["Usuarios"])
def save_usuarios(insert_user: model_user):
    users.append(insert_user)
    return insert_user

@user.put('/users/{user_id}', response_model=model_user, tags=["Usuarios"])
def update_usuario(user_id: str, update_data: update_user):
    for user in users:
        if user.id == user_id:
            if update_data.usuario is not None:
                user.usuario = update_data.usuario
            if update_data.contrasena is not None:
                user.contrasena = update_data.contrasena
            if update_data.estatus is not None:
                user.estatus = update_data.estatus
            return user
    raise HTTPException(status_code=404, detail="Usuario no encontrado")



@user.delete('/users/{user_id}', response_model=model_user, tags=["Usuarios"])
def delete_usuario(user_id: str):
    for i, user in enumerate(users):
        if user.id == user_id:
            return users.pop(i)
    raise HTTPException(status_code=404, detail="Usuario no encontrado")
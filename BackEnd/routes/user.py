from fastapi import APIRouter

user = APIRouter()
@user.get("/user")
def hellowwordid():
    return "Hola 9b"
from fastapi import FastAPI
from routes.user import user
from routes.person import person

app=FastAPI(
    title="Gimnasio 9B",
    description="API para el almacenamiento de informacipn de un gimnasio"
)
app.include_router(user)
app.include_router(person)

print ("Hola bienvenido a mi backend")
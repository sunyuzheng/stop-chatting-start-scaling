import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI(title="Stop Chatting, Start Scaling")

deck_dir = os.path.join(os.path.dirname(__file__), "deck")
app.mount("/", StaticFiles(directory=deck_dir, html=True), name="deck")

from fastapi import FastAPI, Request, File, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
import os
import logging

app = FastAPI()

# Set up logging
logging.basicConfig(level=logging.INFO)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the static directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up Jinja2 templates
templates = Jinja2Templates(directory="template")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    logging.info(f"Received request: {request}")  # Log the incoming request
    try:
        return templates.TemplateResponse("index.html", {"request": request})
    except Exception as e:
        logging.error(f"Error rendering template: {e}")
        return HTMLResponse(content="Error rendering template", status_code=500)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_size = file.file.seek(0, os.SEEK_END)
    file.file.seek(0)  # Reset file pointer to the beginning
    
    return {
        "filename": file.filename,
        "filesize": file_size,
        "filetype": file.content_type
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

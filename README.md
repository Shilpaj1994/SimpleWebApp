# WebApp

This project is a web application that allows users to select and view animal images, as well as upload files. 

## Features

- Select and display images of different animals (cat, dog, elephant)
- File upload functionality with size and type information display

## Technologies Used

- Backend: FastAPI (Python)
- Frontend: HTML, CSS, JavaScript

## Prerequisites

- Python 3.7+
- uv (for environment management)

## Setup and Installation

1. Clone the repository:   ```
   git clone https://github.com/Shilpaj1994/SimpleWebApp.git
   cd SimpleWebApp   ```

2. Set up a virtual environment using uv:   ```
   uv venv   ```

3. Activate the virtual environment:
   - On Windows:     ```
     .venv\Scripts\activate     ```
   - On macOS and Linux:     ```
     source .venv/bin/activate     ```

4. Install the required dependencies:   ```
   uv pip install fastapi uvicorn python-multipart jinja2   ```

5. Run the application:   ```
   uvicorn app:app --reload   ```

6. Open a web browser and navigate to `http://127.0.0.1:8000/`


## Project Structure

- `app.py`: Main FastAPI application
- `template/index.html`: HTML template for the web page
- `static/`: Directory for static files (CSS, JavaScript)


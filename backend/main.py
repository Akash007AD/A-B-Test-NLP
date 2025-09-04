import csv
import os
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app
app = FastAPI()

# --- CORS Configuration ---
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Data Model ---
class QuizResult(BaseModel):
    group: str
    score: int

# --- Data Storage ---
# MODIFICATION: Use a different path for Vercel vs. local development
# Vercel's environment provides a 'VERCEL' environment variable.
# We check if it exists to determine the correct file path.
if os.getenv('VERCEL'):
    # In Vercel's serverless environment, we can only write to the /tmp directory
    RESULTS_FILE = "/tmp/quiz_results.csv"
else:
    # Locally (on your Windows PC), save the file in the current backend directory
    RESULTS_FILE = "quiz_results.csv"


# --- API Endpoints ---
@app.get("/")
def read_root():
    return {"message": "Newton's Laws A/B Test API is running."}

@app.post("/submit_quiz")
def submit_quiz(result: QuizResult):
    """
    Receives a quiz result and saves it to a CSV file.
    """
    file_exists = os.path.isfile(RESULTS_FILE)

    with open(RESULTS_FILE, mode='a', newline='') as csv_file:
        fieldnames = ['group', 'score']
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        if not file_exists:
            writer.writeheader()
        
        writer.writerow({'group': result.group, 'score': result.score})

    return {"status": "success", "data_received": result}

@app.get("/get_results")
def get_results():
    """
    A simple utility to check the contents of the results file.
    """
    if not os.path.isfile(RESULTS_FILE):
        return {"error": "No results have been submitted yet."}
    
    with open(RESULTS_FILE, mode='r') as csv_file:
        reader = csv.reader(csv_file)
        # Skip header
        next(reader, None)
        # Read all rows into a list of lists
        data = [row for row in reader]
        return {"results": data}


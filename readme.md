A/B Test: Text vs. Visual Learning for Newton's Laws
This project is a web application designed to conduct an A/B test to determine the more effective learning format for Newton's Three Laws of Motion: a traditional text-based explanation versus a visual infographic.

The application presents one of two learning formats to a user, quizzes them on the material, and records their performance for analysis. The entire process is tracked using PostHog for robust A/B test analysis.

🧪 Core Hypothesis
The null hypothesis (H_0) for this experiment is:

There is no significant difference in the mean quiz scores between the group that receives a text-based explanation and the group that receives a visual explanation.

Treatment: The format of the learning material (Text vs. Visual).

Outcome Metric: The user's score on a 4-question quiz.

🛠️ Tech Stack
Frontend: React (built with Vite)

Backend: FastAPI (Python)

Analytics: PostHog (for event tracking and A/B test analysis)

Deployment: Vercel

📁 Project Structure
The project is a monorepo with two main directories:

/frontend: Contains the React application that users interact with.

/backend: Contains the FastAPI application that serves as a simple API to log results.

🚀 Running the Project Locally
Prerequisites
Node.js and npm

Python and pip

1. Backend Setup
# Navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python -m venv venv
# On macOS/Linux:
source venv/bin/activate
# On Windows:
.\venv\Scripts\activate

# Install the required packages
pip install -r requirements.txt

# Start the backend server
uvicorn main:app --reload

The backend API will now be running at http://127.0.0.1:8000.

2. Frontend Setup
# Navigate to the frontend directory
cd frontend

# Install the required packages
npm install

# Create an environment variables file
# Create a new file named .env.local in the frontend/ directory
# and add your PostHog credentials:
VITE_POSTHOG_KEY=phc_YourProjectApiKey
VITE_POSTHOG_HOST=[https://your-host-url.i.posthog.com](https://your-host-url.i.posthog.com)

# Start the frontend development server
npm run dev

The frontend application will now be running at http://localhost:5173.

🔬 How the A/B Test Works
User Assignment
When a user visits the site, the React application randomly assigns them to one of two groups with a 50/50 split: text or visual. This assignment is then sent to PostHog as a user_assigned_group event.

Forcing a Variant for Testing
During development, you can force a specific variant by using a URL query parameter:

Text Version: http://localhost:5173/?group=text

Visual Version: http://localhost:5173/?group=visual

Data Collection
When a user submits the quiz, a quiz_submitted event is sent to PostHog containing their final score and the group they were assigned to. This allows for direct comparison of the outcome metric between the two groups.

A backup of the raw data is also sent to the FastAPI backend, which stores it in a .csv file.

📈 Viewing Analytics
All A/B test analysis is conducted within PostHog.

Live Events: Go to the "Activity" tab in PostHog to see events as they arrive in real-time.

A/B Test Results: Go to the "Experiments" tab to see a complete dashboard comparing the average quiz scores, statistical significance, and other metrics for the 'text' vs. 'visual' groups.

🌐 Deployment
This project is configured for easy deployment on Vercel. Both the frontend and backend are deployed from this single repository. The following environment variables need to be set in the Vercel project settings:

VITE_POSTHOG_KEY: Your PostHog Project API Key.

VITE_POSTHOG_HOST: Your PostHog Host URL.

VITE_API_URL: The production URL of the deployed application.
A/B Test: Visual vs. Text-Based Learning for Newton's LawsThis project is a full-stack web application built to conduct a rigorous A/B test comparing the effectiveness of two different educational formats for teaching Newton's Laws of Motion.Live Demo: https://a-b-test-nlp.vercel.app/🏆 Final Results & ConclusionThe A/B test was conducted with 48 participants and yielded a statistically significant result, providing a clear winner.Group (Learning Format)Number of ParticipantsAverage Quiz Score (out of 4)Visual (Treatment)243.14Text (Control)242.82Conclusion: The visual learning format led to a significant 11.3% improvement in quiz scores. We reject the null hypothesis and conclude that for this topic, the visual infographic is a more effective teaching method than the traditional text-based explanation.🧪 The A/B TestHypothesis: A visual infographic will lead to higher comprehension and better quiz scores than a standard text-based explanation. The null hypothesis (H_0) is that there will be no significant difference in the mean quiz scores.Control (Group A): A webpage presenting Newton's Laws in plain text.Treatment (Group B): A webpage presenting the same concepts using an infographic.Outcome Metric: The user's score on a 4-question quiz.🛠️ Tech StackFrontend: React (bootstrapped with Vite)Backend: FastAPI (Python)Analytics & A/B Testing: PostHog for event tracking and analysis.Deployment: Vercel📁 Project StructureThis project is a monorepo containing both the frontend and backend applications../frontend/: Contains the React application that users interact with../backend/: Contains the simple FastAPI data-logging API.🚀 Running LocallyPrerequisitesNode.js and npmPython and pip1. Backend Setup# Navigate to the backend directory
cd backend

# Create and activate a Python virtual environment
python -m venv venv
# On macOS/Linux: source venv/bin/activate
# On Windows: .\\venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload
The backend will run on http://127.0.0.1:8000.2. Frontend Setup# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create a local environment file named .env.local and add your PostHog keys:
# VITE_POSTHOG_KEY=phc_YourProjectApiKey
# VITE_POSTHOG_HOST=[https://your-host-url.i.posthog.com](https://your-host-url.i.posthog.com)

# Start the development server
npm run dev
The frontend will run on http://localhost:5173.🔬 How the A/B Test WorksUser Assignment: When a user visits the site, the React application randomly assigns them to one of two groups with a 50/50 split: text or visual.Forcing a Variant: During development, a specific variant can be forced using a URL query parameter (e.g., /?group=visual).Data Collection: A quiz_submitted event is sent to PostHog containing the user's final score and assigned group, allowing for direct comparison of the outcome metric.📈 Viewing AnalyticsAll A/B test analysis is conducted within the PostHog platform.Live Events: The "Activity" tab in PostHog shows events as they arrive in real-time for debugging and monitoring.A/B Test Results: The "Dashboards" and "Experiments" tabs provide a complete dashboard comparing the average quiz scores, statistical significance, and other metrics for the two groups.🌐 DeploymentThis application is deployed on Vercel, configured to build both the frontend (/frontend) and backend (/backend) from this single repository.The following environment variables are required for the live deployment:VITE_POSTHOG_KEY: The public API key for the PostHog project.VITE_POSTHOG_HOST: The host URL for the PostHog instance.VITE_API_URL: The production URL of the deployed Vercel application.Any push to the main branch automatically triggers a new deployment.
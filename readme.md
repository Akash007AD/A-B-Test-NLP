# 📊 A/B Test: Visual vs. Text-Based Learning for Newton's Laws

This project is a **full-stack web application** designed to conduct a rigorous A/B test comparing the effectiveness of **visual infographics** vs. **text-based explanations** in teaching Newton's Laws of Motion.

🔗 **Live Demo:** [https://a-b-test-nlp.vercel.app/](https://a-b-test-nlp.vercel.app/)

---

## 🏆 Final Results & Conclusion

The experiment involved **48 participants** and produced statistically significant results.

| Group (Learning Format) | Participants | Avg. Quiz Score (out of 4) |
| ----------------------- | ------------ | -------------------------- |
| **Visual (Treatment)**  | 24           | 3.14                       |
| **Text (Control)**      | 24           | 2.82                       |

**Conclusion:**

* The **visual learning format** led to an **11.3% improvement** in quiz scores.
* ✅ We **reject the null hypothesis** and conclude that, for this topic, **visual infographics are more effective** than text explanations.

---

## 🧪 Experiment Design

* **Hypothesis (H₁):** A visual infographic will improve comprehension and quiz performance compared to text-based explanations.
* **Null Hypothesis (H₀):** There will be no significant difference in mean quiz scores.

**Setup:**

* **Control (Group A):** Newton's Laws presented as plain text.
* **Treatment (Group B):** Newton's Laws presented using an infographic.
* **Outcome Metric:** Quiz score (4 multiple-choice questions).

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Backend:** FastAPI (Python)
* **Analytics & A/B Testing:** PostHog (event tracking & analysis)
* **Deployment:** Vercel

---

## 📁 Project Structure

```
./
├── frontend/   # React application (user interface)
└── backend/    # FastAPI server (data logging API)
```

---

## 🚀 Running Locally

### Prerequisites

* [Node.js](https://nodejs.org/) & npm
* [Python](https://www.python.org/) & pip

### 1. Backend Setup

```bash
# Navigate to backend
cd backend

# Create & activate virtual environment
python -m venv venv
# macOS/Linux: source venv/bin/activate
# Windows: .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start server
uvicorn main:app --reload
```

Backend runs on: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

### 2. Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env.local file with PostHog credentials
VITE_POSTHOG_KEY=phc_YourProjectApiKey
VITE_POSTHOG_HOST=https://your-host-url.i.posthog.com
VITE_API_URL=http://127.0.0.1:8000

# Start dev server
npm run dev
```

Frontend runs on: **[http://localhost:5173](http://localhost:5173)**

---

## 🔬 How the A/B Test Works

1. **User Assignment:**

   * On first visit, users are randomly assigned to **text** or **visual** groups (50/50 split).

2. **Forcing Variants (Dev Mode):**

   * Append a query parameter to URL:

     * `/ ?group=visual` → forces visual version
     * `/ ?group=text` → forces text version

3. **Data Collection:**

   * On quiz submission, a `quiz_submitted` event is sent to **PostHog** with:

     * Assigned group
     * Final score

---

## 📈 Analytics & Results

* **Live Events:** Viewable in PostHog under **Activity** (for debugging & monitoring).
* **Experiment Dashboard:**

  * Average quiz scores by group
  * Statistical significance testing
  * Engagement metrics

---

## 🌐 Deployment

Deployed with **Vercel** (monorepo setup: `/frontend` + `/backend`).

### Required Environment Variables

* `VITE_POSTHOG_KEY` → Public API key for PostHog
* `VITE_POSTHOG_HOST` → Host URL for PostHog instance
* `VITE_API_URL` → Production API endpoint (backend)

> Any push to the `main` branch triggers an **automatic deployment**.

---

## 📚 References

* [Newton’s Laws of Motion](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
* [PostHog Documentation](https://posthog.com/docs)
* [FastAPI Documentation](https://fastapi.tiangolo.com/)


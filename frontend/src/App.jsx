import { useState, useEffect } from 'react';
import axios from 'axios';
import posthog from 'posthog-js';
import LearningPage from './LearningPage';
import Quiz from './Quiz';
import ResultsPage from './ResultsPage';
import ThankYou from './ThankYou'; // --- 1. Import the ThankYou component ---

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const quizQuestions = [
  // ... (your quiz questions remain the same)
  {
    question: "Which law is known as the Law of Inertia?",
    options: ["First Law", "Second Law", "Third Law"],
    correctAnswer: "First Law",
  },
  {
    question: "The formula F = ma represents which of Newton's laws?",
    options: ["First Law", "Second Law", "Third Law"],
    correctAnswer: "Second Law",
  },
  {
    question: "If you push against a wall, the wall pushes back at you with an equal force. This is an example of which law?",
    options: ["First Law", "Second Law", "Third Law"],
    correctAnswer: "Third Law",
  },
  {
    question: "An object in motion will stay in motion unless acted upon by an external force. This is part of the...",
    options: ["First Law", "Second Law", "Third Law"],
    correctAnswer: "First Law",
  },
];

function App() {
  const [userGroup, setUserGroup] = useState(null);
  // --- 2. Add 'thankyou' as a possible page state ---
  const [page, setPage] = useState('learning'); // States: 'learning', 'quiz', 'results', 'thankyou'
  const [finalScore, setFinalScore] = useState(null);
  const [userAnswers, setUserAnswers] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const forcedGroup = urlParams.get('group');
    let group;

    if (forcedGroup === 'text' || forcedGroup === 'visual') {
      group = forcedGroup;
    } else {
      group = Math.random() < 0.5 ? 'text' : 'visual';
    }
    
    setUserGroup(group);

    posthog.capture('user_assigned_group', { group_name: group });
    posthog.identify(posthog.get_distinct_id(), {
      ab_test_group: group
    });

  }, []);

  const handleStartQuiz = () => {
    setPage('quiz');
  };

  const handleQuizSubmit = async (score, answers) => {
    setFinalScore(score);
    setUserAnswers(answers);
    
    posthog.capture('quiz_submitted', { 
      score: score,
      group_name: userGroup 
    });

    try {
      const resultData = { group: userGroup, score: score };
      await axios.post(`${API_URL}/submit_quiz`, resultData);
    } catch (error) {
      console.error('Error submitting quiz results to backend:', error);
    } finally {
      setPage('results');
    }
  };

  // --- 3. Add a new function to handle moving from results to thank you page ---
  const handleContinueToThankYou = () => {
    setPage('thankyou');
  };

  if (!userGroup) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {page === 'learning' && (
        <LearningPage group={userGroup} onStartQuiz={handleStartQuiz} />
      )}
      {page === 'quiz' && <Quiz quizQuestions={quizQuestions} onSubmit={handleQuizSubmit} />}
      {page === 'results' && (
        <ResultsPage
          userAnswers={userAnswers}
          quizQuestions={quizQuestions}
          finalScore={finalScore}
          onContinue={handleContinueToThankYou} // --- 4. Pass the new function as a prop ---
        />
      )}
      {/* --- 5. Add the ThankYou page to the render logic --- */}
      {page === 'thankyou' && <ThankYou />}
    </div>
  );
}

export default App;
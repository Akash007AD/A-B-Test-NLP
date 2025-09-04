import { useState } from 'react';

// The questions are now passed in as props, so we remove the constant from this file.

function Quiz({ quizQuestions, onSubmit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleOptionSelect = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // --- MODIFICATION: Calculate score and pass BOTH score and answers ---
      let score = 0;
      quizQuestions.forEach((q, index) => {
        if (answers[index] === q.correctAnswer) {
          score++;
        }
      });
      // Pass both the final score and the answers object to the App component
      onSubmit(score, answers);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <div className="question">
        <h3>{`Question ${currentQuestionIndex + 1}/${quizQuestions.length}`}</h3>
        <p>{currentQuestion.question}</p>
        <div className="options">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={answers[currentQuestionIndex] === option ? 'selected' : ''}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleNext} disabled={!answers[currentQuestionIndex]}>
        {currentQuestionIndex < quizQuestions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
}

export default Quiz;
import React from 'react';

const styles = {
  question: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
  },
  option: {
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '4px',
  },
  correct: {
    backgroundColor: '#c6f6d5', // green-200
    border: '2px solid #38a169', // green-600
  },
  incorrect: {
    backgroundColor: '#fed7d7', // red-200
    border: '2px solid #c53030', // red-600
  },
};

// --- 1. Add 'onContinue' to the props ---
function ResultsPage({ userAnswers, quizQuestions, finalScore, onContinue }) {
  return (
    <div>
      <h1>Quiz Results</h1>
      <h2>You scored {finalScore} out of {quizQuestions.length}</h2>
      <hr />
      <h3>Review Your Answers:</h3>
      {quizQuestions.map((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correctAnswer;

        return (
          <div key={index} style={styles.question}>
            <h4>{`${index + 1}. ${q.question}`}</h4>
            <div>
              {q.options.map((option) => {
                let style = styles.option;
                if (option === q.correctAnswer) {
                  style = { ...style, ...styles.correct };
                } else if (option === userAnswer && !isCorrect) {
                  style = { ...style, ...styles.incorrect };
                }
                
                return (
                  <div key={option} style={style}>
                    {option} {option === userAnswer ? <strong>(Your Answer)</strong> : ''}
                  </div>
                );
              })}
            </div>
            {!isCorrect && <p style={{ color: '#c53030', marginTop: '10px' }}>Your answer was incorrect.</p>}
          </div>
        );
      })}
      {/* --- 2. Add a button that calls the onContinue function --- */}
      <button onClick={onContinue} style={{ marginTop: '2rem' }}>
        Continue
      </button>
    </div>
  );
}

export default ResultsPage;
import React from 'react';

// --- Improved CSS Styles ---
const styles = {
  container: {
    textAlign: 'center',
  },
  header: {
    marginBottom: '2rem',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '1.5rem',
  },
  title: {
    fontSize: '2.25rem', // Larger, more impactful title
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.5',
  },
  contentBox: {
    backgroundColor: '#f7fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '2rem',
    textAlign: 'left',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  lawTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2d3748',
    borderBottom: '2px solid #4299e1',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  lawText: {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '8px',
    marginTop: '1rem',
  },
  buttonContainer: {
    marginTop: '2rem',
  },
};

// --- Content Components ---

const TextContent = () => (
  <div style={styles.contentBox}>
    <h3 style={styles.lawTitle}>First Law: The Law of Inertia</h3>
    <p style={styles.lawText}>
      An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.
    </p>
    <h3 style={styles.lawTitle}>Second Law: Force Equals Mass Times Acceleration (F=ma)</h3>
    <p style={styles.lawText}>
      The acceleration of an object is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object.
    </p>
    <h3 style={styles.lawTitle}>Third Law: Action and Reaction</h3>
    <p style={styles.lawText}>
      For every action, there is an equal and opposite reaction. This means that in every interaction, there is a pair of forces acting on the two interacting objects.
    </p>
  </div>
);

const VisualContent = () => (
  <div style={styles.contentBox}>
    <p style={styles.lawText}>Please study the infographic below to understand the three laws of motion.</p>
    <img 
      src="/visual-explanation.png" 
      alt="Infographic of Newton's Laws" 
      style={styles.image}
    />
  </div>
);

// --- Main Learning Page Component ---

function LearningPage({ group, onStartQuiz }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Understanding Newton's Laws of Motion</h1>
        <p style={styles.subtitle}>
          You are participating in the <strong>{group === 'text' ? 'Text-Based' : 'Visual'} Explanation</strong> group. 
          Please review the material carefully before starting the quiz.
        </p>
      </div>
      
      {group === 'text' ? <TextContent /> : <VisualContent />}
      
      <div style={styles.buttonContainer}>
        <button onClick={onStartQuiz}>I'm Ready, Start Quiz</button>
      </div>
    </div>
  );
}

export default LearningPage;

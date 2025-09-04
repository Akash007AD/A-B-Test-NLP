const TextContent = () => (
  <div>
    <h2>Newton's Laws of Motion (Text Explanation)</h2>
    <h3>First Law: The Law of Inertia</h3>
    <p>
      An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.
    </p>
    <h3>Second Law: F = ma</h3>
    <p>
      The acceleration of an object as produced by a net force is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object. The formula is Force = Mass × Acceleration.
    </p>
    <h3>Third Law: Action and Reaction</h3>
    <p>
      For every action, there is an equal and opposite reaction. This means that in every interaction, there is a pair of forces acting on the two interacting objects.
    </p>
  </div>
);

const VisualContent = () => (
  <div>
    <h2>Newton's Laws of Motion (Visual Explanation)</h2>
    <p>Please study the infographic below to understand the three laws.</p>
    {/* This image must be in the `frontend/public` folder */}
    <img src="/visual-explanation.png" alt="Infographic of Newton's Laws" style={{ maxWidth: '100%', borderRadius: '8px' }}/>
  </div>
);


function LearningPage({ group, onStartQuiz }) {
  return (
    <div className="learning-content">
      <h1>Learning Module</h1>
      <p>Please review the following material carefully. You will be quizzed on it afterward.</p>
      <hr />
      {group === 'text' ? <TextContent /> : <VisualContent />}
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
}

export default LearningPage;
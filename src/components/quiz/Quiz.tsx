
// src/components/quiz/Quiz.tsx
import React from 'react';

const Quiz = () => {
  // Placeholder questions
  const questions = [
    {
      question: 'Which aesthetic category best reflects your brand?',
      options: ['Bold', 'Elegant', 'Creative', 'Minimalist'],
    },
    {
      question: 'Which archetype does your brand align with?',
      options: ['Innovator', 'Sage', 'Creator', 'Connector'],
    },
    // Add more questions
  ];

  return (
    <div>
      {questions.map((q, index) => (
        <div key={index}>
          <h3>{q.question}</h3>
          {q.options.map((option, i) => (
            <button key={i}>{option}</button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quiz;

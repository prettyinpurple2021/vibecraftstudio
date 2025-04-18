// src/app/vibe-check/page.tsx
import React from 'react';
import Quiz from '@/components/quiz/Quiz';

const VibeCheckPage = () => {
  return (
    <div>
      <h1>Vibe Check Quiz</h1>
      <p>Answer the following questions to define your brand's visual identity.</p>
      <Quiz />
    </div>
  );
};

export default VibeCheckPage;

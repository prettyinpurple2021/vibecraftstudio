// src/components/quiz/Quiz.tsx
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Question {
  question: string;
  options: string[];
  id: string;
}

const Quiz = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const questions: Question[] = [
    {
      id: 'question1',
      question: 'Which aesthetic category best reflects the visual foundation you envision for your brand?',
      options: [
        'Bold & Dynamic (High contrast, strong typography, energetic feel)',
        'Elegant & Refined (Sophisticated details, premium feel, graceful elements)',
        'Creative & Approachable (Handcrafted touches, relatable style, personality-driven)',
        'Minimalist & Modern (Clean lines, essential elements, clarity-focused)',
      ],
    },
    {
      id: 'question2',
      question: 'If your brand operated based on a core personality archetype, which would it most closely align with?',
      options: [
        'The Innovator (Pioneering, forward-thinking, challenges norms)',
        'The Sage (Guiding, knowledgeable, trustworthy source)',
        'The Creator (Expressive, imaginative, values aesthetics)',
        'The Connector (Community-builder, supportive, relationship-focused)',
      ],
    },
    {
      id: 'question3',
      question: 'What is the primary emotional response you want your brand\'s overall color palette to evoke?',
      options: [
        'Energy & Excitement (Suggests vibrant, warm, or high-contrast palettes)',
        'Trust & Stability (Suggests cooler tones, blues, greens, dependable neutrals)',
        'Calmness & Sophistication (Suggests muted tones, pastels, refined neutrals)',
        'Warmth & Creativity (Suggests earthy tones, rich hues, welcoming palettes)',
      ],
    },
    {
      id: 'question4',
      question: 'Which typographic direction best aligns with your brand\'s primary communication style?',
      options: [
        'Strong & Assertive (e.g., Bold sans-serifs, impactful display fonts)',
        'Elegant & Articulate (e.g., Classic serifs, refined scripts)',
        'Friendly & Expressive (e.g., Rounded sans-serifs, unique character fonts)',
        'Clear & Direct (e.g., Clean, highly legible sans-serifs, minimalist feel)',
      ],
    },
    {
      id: 'question5',
      question: 'In terms of presentation and process, where does your brand place emphasis?',
      options: [
        'Intricate Detail & Craftsmanship (Focus on layers, precision, artistry)',
        'Streamlined Efficiency & Simplicity (Focus on ease, clarity, minimalism)',
        'Bold Impact & Overall Impression (Focus on strong statements, memorability)',
        'Balanced Approach (A thoughtful mix of detail and clarity)',
      ],
    },
    {
      id: 'question6',
      question: 'What style best describes the desired relationship between your brand and its customers?',
      options: [
        'Collaborative Partner (Working alongside clients towards shared goals)',
        'Trusted Advisor (Provides expert guidance and reliable solutions)',
        'Inspiring Leader (Sets a vision and motivates action)',
        'Welcoming Host (Creates a sense of community and belonging)',
      ],
    },
    {
      id: 'question7',
      question: 'What lasting impression or key feeling do you want clients to associate with your brand after an interaction?',
      options: [
        'Empowered & Capable',
        'Understood & Connected',
        'Inspired & Creative',
        'Confident & Assured',
      ],
    },
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <h3>{q.question}</h3>
          <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)} className="flex flex-col gap-2">
            {q.options.map((option, i) => (
              <div key={i} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${q.id}-${i}`} />
                <Label htmlFor={`${q.id}-${i}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </div>
  );
};

export default Quiz;

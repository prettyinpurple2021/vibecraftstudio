
// src/app/moodboard/page.tsx
import React from 'react';

const MoodBoardPage = () => {
  // Placeholder data
  const colorPalette = ['#8A2BE2', '#00CED1', '#FF69B4', '#FFFFFF', '#333333'];
  const fontPairing = {
    headlineFont: 'Playfair Display',
    bodyFont: 'Montserrat',
  };
  const keywords = ['Glamorous', 'Creative', 'Empowering', 'Modern'];

  return (
    <div>
      <h1>Your Mood Board</h1>

      <section>
        <h2>Color Palette</h2>
        <div className="flex">
          {colorPalette.map((color, index) => (
            <div
              key={index}
              style={{backgroundColor: color, width: '50px', height: '50px'}}
            ></div>
          ))}
        </div>
      </section>

      <section>
        <h2>Font Pairing</h2>
        <p>Headline: {fontPairing.headlineFont}</p>
        <p>Body: {fontPairing.bodyFont}</p>
      </section>

      <section>
        <h2>Keywords</h2>
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </section>

      <button>Download Style Kit</button>
    </div>
  );
};

export default MoodBoardPage;

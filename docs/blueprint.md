# **App Name**: VibeCraft Studio

## Core Features:

- User Authentication: User Authentication: Simple Signup/Login with Google and email options.
- User Dashboard: User Dashboard: Display saved Mood Boards with a clear CTA to start or generate a new one.
- Vibe Check Quiz: Vibe Check Quiz: Multi-step interactive quiz with multiple-choice questions and progress indicator.
- AI Analysis & Generation: AI Analysis & Generation: Use quiz answers as a tool to generate a color palette, font pairings, and style keywords.
- Mood Board Display: Mood Board Display: Display generated color palette, font pairings, and style keywords in a visually appealing layout.

## Style Guidelines:

- Primary color: Vibrant Purple (#8A2BE2).
- Secondary color: Bright Teal (#00CED1).
- Accent color: Hot Pink (#FF69B4) for CTAs and highlights.
- Backgrounds: Use white/off-white and potentially a dark grey/charcoal for text and backgrounds as needed for readability.
- Glamorous fonts: Use a stylish sans-serif for body paired with a more glamorous script or serif for headlines.
- Flowing icons: Icons with smooth lines, slightly rounded or with a touch of elegance.
- Subtle glitter overlay effect on key elements.
- Use paint splatter graphics (in brand colors) strategically as background elements, borders, or decorative accents.
- Empowering, positive, slightly fun, and encouraging language for all UI text.

## Original User Request:
Prompt for Firebase Studio AI Prototyper: VibeCraft Studio MVP
1. Overall Goal:
Generate a functional web app prototype using Next.js for "VibeCraft Studio". This app is designed to help female creative entrepreneurs define their brand's visual identity through an interactive quiz and AI-powered suggestions, resulting in a personalized mood board and style kit.

2. Target Audience for VibeCraft Studio:
Female creative entrepreneurs, including designers, artists, coaches, bloggers, influencers, makers, and small business owners who need help establishing a cohesive and authentic brand aesthetic but may lack extensive design knowledge or resources.

3. Core Concept & Value Proposition:
VibeCraft Studio provides a fun, empowering, and insightful experience ("Vibe Check") that translates a user's brand personality and vision into tangible visual style elements (colors, fonts, keywords) using AI analysis. It simplifies the initial branding process, providing a foundational mood board and style kit.

4. Key Features & Screens (MVP):
a. User Authentication:
Simple Signup/Login page with a forgotten credentials feature
Prioritize Google Account integration for easy sign-in.
Basic email/password option as secondary.
b. User Dashboard:
Simple landing page after login.
Area to display previously saved/generated Mood Boards. 
Clear Call-to-Action button: "Start Your Vibe Check!" for a first time user or "Generate New Mood Board" for returning users.
c. "Vibe Check" Quiz:
Multi-step interactive quiz interface (display one question per screen).
Use the 7 professional-yet-creative questions selected previously (or the user's final choice).
Input type: Multiple choice (A, B, C, D) for each question.
Visually engaging design for quiz pages, incorporating the brand aesthetic.
Progress indicator (e.g., "Step 3 of 7").
d. Inspiration Image Upload (Optional):
A step after the quiz where users can optionally upload 1-3 inspirational images (.jpg, .png).
Simple drag-and-drop or file selection interface.
Option to skip this step.
e. AI Analysis & Generation (Backend Logic Representation):
Input Processing: The app needs to securely store quiz answers and temporarily handle uploaded images (if provided) for analysis.
AI Integration Points: Simulate calls to Google Cloud AI:
Send image(s) to Vision AI (or similar) to extract dominant colors and potentially object/theme keywords.
Send quiz answers (and image analysis results) to Gemini (or similar LLM) to generate:
Suggested Color Palette (e.g., 5-6 hex codes).
Suggested Font Pairings (e.g., names of 1 headline font + 1 body font from Google Fonts).
List of 5-10 relevant Style Keywords.
Logic Mapping: Implement the logic discussed previously where specific quiz answers strongly influence the tags used to filter/generate AI suggestions (e.g., mapping quiz answers for color feeling directly to palette temperature suggestions).
f. Mood Board Display Page:
The primary output screen, displaying the generated results in a visually appealing layout.
Dedicated sections for:
Generated Color Palette (display color swatches with hex codes).
Suggested Font Pairing (showcase headline and body font with sample text like "Headline Font / Body Font Example").
Style Keywords list.
Small thumbnails of uploaded inspiration images (if provided).
Apply the overall VibeCraft Studio aesthetic to this page design.
g. Basic Style Kit Output:
A "Download Style Kit" button on the Mood Board page.
MVP functionality: Generate a simple, clean PDF document containing the displayed color palette (with hex codes), font names, and keywords. (Alternatively, initially, just making the mood board page itself easily printable might suffice for MVP).

5. User Flow (MVP):
* User signs up or logs in.
* Lands on Dashboard.
* Clicks "Start Vibe Check!".
* Progresses through the 7 quiz questions, selecting one answer per question.
* Optionally uploads inspiration images.
* Clicks "Generate My Vibe!".
* Sees a brief "Generating..." or loading state animation (incorporate brand aesthetic).
* Views the generated Mood Board Display page.
* Optionally clicks "Download Style Kit".
* Can navigate back to Dashboard (where the board should ideally be accessible later).

6. Aesthetic & Branding ("Girl Boss" Theme):
Color Palette: Strictly use the defined palette: Primary: Vibrant Purple (#HexCode e.g., #8A2BE2), Secondary: Bright Teal (#HexCode e.g., #00CED1), Accent: Hot Pink (#HexCode e.g., #FF69B4). Use white/off-white and potentially a dark grey/charcoal for text and backgrounds as needed for readability. 
Fonts: Use "glamorous fonts" as specified. Select specific fonts (e.g., a stylish sans-serif for body like Montserrat or Lato, paired with a more glamorous script or serif for headlines like Playfair Display or a specific script font – ensure readability). Use these consistently.
Visual Effects:
Glitter Overlay: Apply a subtle, non-distracting glitter overlay effect on key elements like headers, buttons, or background sections where appropriate. Ensure it doesn't hinder usability.
Paint Splatters: Use paint splatter graphics (in brand colors) strategically as background elements, borders, or decorative accents. Ensure they look intentional and professional, not messy. Use Kittl assets if suitable.
Icons: Use "flowing icons" – icons with smooth lines, perhaps slightly rounded or with a touch of elegance. Ensure consistency.
Imagery/Illustrations: Any supporting graphics should fit the empowering, creative, slightly glamorous theme.
Tone of Voice: All UI text (buttons, instructions, headings) should use empowering, positive, slightly fun, and encouraging language aligned with the "Girl Boss" persona.
7. Technology Stack Context:
Generate this as a Next.js web application prototype.
Show placeholders or descriptions where API calls to Google Cloud AI services (Vision AI, Gemini/LLM) would occur to process quiz answers/images and generate the suggestions.
Simulate basic data storage for user accounts and generated mood boards (representing Firebase Firestore or similar).
8. Specific Instructions for AI Prototyper:
Prioritize creating a functional flow for the Vibe Check quiz leading to the Mood Board display.
Ensure the aesthetic details (colors, fonts, glitter, splatters) are implemented consistently across all generated screens.
Focus on generating the visual components and layout for the Mood Board display page accurately based on the desired sections (colors, fonts, keywords).
Implement the basic user authentication flow.
Generate clean, well-structured Next.js code components where possible.

Vibe Check Quiz Questions
Which aesthetic category best reflects the visual foundation you envision for your brand?
A) Bold & Dynamic (High contrast, strong typography, energetic feel)
B) Elegant & Refined (Sophisticated details, premium feel, graceful elements)
C) Creative & Approachable (Handcrafted touches, relatable style, personality-driven)
D) Minimalist & Modern (Clean lines, essential elements, clarity-focused)

If your brand operated based on a core personality archetype, which would it most closely align with?
A) The Innovator (Pioneering, forward-thinking, challenges norms)
B) The Sage (Guiding, knowledgeable, trustworthy source)
C) The Creator (Expressive, imaginative, values aesthetics)
D) The Connector (Community-builder, supportive, relationship-focused)

What is the primary emotional response you want your brand's overall color palette to evoke?
A) Energy & Excitement (Suggests vibrant, warm, or high-contrast palettes)
B) Trust & Stability (Suggests cooler tones, blues, greens, dependable neutrals)
C) Calmness & Sophistication (Suggests muted tones, pastels, refined neutrals)
D) Warmth & Creativity (Suggests earthy tones, rich hues, welcoming palettes)

Which typographic direction best aligns with your brand's primary communication style?
A) Strong & Assertive (e.g., Bold sans-serifs, impactful display fonts)
B) Elegant & Articulate (e.g., Classic serifs, refined scripts)
C) Friendly & Expressive (e.g., Rounded sans-serifs, unique character fonts)
D) Clear & Direct (e.g., Clean, highly legible sans-serifs, minimalist feel)

In terms of presentation and process, where does your brand place emphasis?
A) Intricate Detail & Craftsmanship (Focus on layers, precision, artistry)
B) Streamlined Efficiency & Simplicity (Focus on ease, clarity, minimalism)
C) Bold Impact & Overall Impression (Focus on strong statements, memorability)
D) Balanced Approach (A thoughtful mix of detail and clarity)

When communicating complex ideas or information, what is your brand's preferred style?
A) Data-Rich & Analytical (Uses charts, evidence, details)
B) Visually Driven Storytelling (Uses imagery, metaphors, narrative)
C) Concise & Action-Oriented (Uses bullet points, clear calls-to-action)
D) Interactive & Conversational (Uses questions, dialogue, engagement)

What lasting impression or key feeling do you want clients to associate with your brand after an interaction?
A) Empowered & Capable
B) Understood & Connected
C) Inspired & Creative
D) Confident & Assured
Quiz Logic & AI Integration Mapping Instructions:
"When generating the VibeCraft Studio Next.js application, please implement the following logic for handling the 'Vibe Check' quiz results to generate personalized style suggestions:
Quiz Data Handling:
The multi-step quiz component should capture the user's selection (A, B, C, or D) for each of the 7 questions.
Store these answers temporarily or associate them with the user session/request.
Backend Processing (Genkit Flow / Cloud Function):
Generate a backend function (e.g., a Genkit flow deployable via Firebase Functions) that accepts the 7 quiz answers as input.
This function's primary role is to translate the combination of quiz answers into a detailed request profile for generating visual style elements.
Mapping Quiz Answers to AI Request Profile (Backend Logic):
Implement logic within the backend function to interpret the quiz answers based on the following guidelines:
Question 1 (Core Aesthetic): Use the answer (A: Bold, B: Elegant, C: Creative, D: Minimalist) to set the primary aesthetic_style parameter for AI generation.
Question 2 (Archetype): Use the answer (A: Innovator, B: Sage, C: Creator, D: Connector) to add corresponding personality_tags (e.g., ['Innovator', 'ForwardThinking']) to the request profile.
Question 3 (Color Feeling): Use the answer (A: Energy, B: Trust, C: Calm, D: Warmth) to strongly define the desired color_emotion parameter. The AI call for colors should prioritize palettes matching this feeling explicitly.
Question 4 (Typographic Direction): Use the answer (A: Strong, B: Elegant, C: Friendly, D: Clear) to set the primary typography_style parameter. The AI call for fonts should focus on pairings matching this style.
Question 5 (Presentation Emphasis): Use the answer (A: Detail, B: Simplicity, C: Impact, D: Balanced) to add visual_complexity tags (e.g., ['DetailHigh'], ['Minimal'], ['Impactful']) to the request profile, potentially influencing font weight or density suggestions.
Question 6 (Customer Relationship): Use the answer (A: Partner, B: Advisor, C: Leader, D: Host) to add relationship_tone tags (e.g., ['Collaborative'], ['Expert'], ['Confident'], ['Welcoming']) influencing keyword generation and potentially font formality.
Question 7 (Client Impression): Use the answer (A: Empowered, B: Connected, C: Inspired, D: Confident) to add desired_feeling tags (e.g., ['Empowered'], ['Connected'], ['Creative'], ['Assured']) primarily for keyword generation and overall tone consistency.
AI Generation Calls (Backend Logic):
The backend function, using the constructed request profile (containing parameters like aesthetic_style, personality_tags, color_emotion, typography_style, etc.), should make calls to the appropriate AI model (likely Gemini via Genkit):
One call structured to request Color Palettes: "Generate 3 color palettes (5-6 hex codes each) matching these profile attributes: [Insert Profile Parameters]".
One call structured to request Font Pairings: "Suggest 3 font pairings (Google Fonts preferred) matching profile attributes: [Insert Profile Parameters]".
One call structured to request Keywords: "Generate 10-15 style keywords reflecting profile attributes: [Insert Profile Parameters]".
The function should receive and format these results (e.g., into a JSON object).
Frontend Display (Next.js):
The generated Next.js frontend page ('Mood Board Display') should call the backend function after the quiz is submitted.
It should then receive the JSON response containing the AI-generated palettes, font names, and keywords.
Dynamically render this information: Display color swatches from hex codes, show font names with examples, and list the keywords clearly, all presented within the defined 'Girl Boss' aesthetic."
  
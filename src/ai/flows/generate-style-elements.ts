// src/ai/flows/generate-style-elements.ts
'use server';
/**
 * @fileOverview Generates style elements (color palette, font pairings, keywords) based on quiz answers.
 *
 * - generateStyleElements - A function that handles the style element generation process.
 * - GenerateStyleElementsInput - The input type for the generateStyleElements function.
 * - GenerateStyleElementsOutput - The return type for the generateStyleElements function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {getFontPairings} from '@/services/font-suggestions';

const GenerateStyleElementsInputSchema = z.object({
  question1: z
    .enum(['A', 'B', 'C', 'D'])
    .describe(
      'Core Aesthetic: A) Bold, B) Elegant, C) Creative, D) Minimalist'
    ),
  question2: z
    .enum(['A', 'B', 'C', 'D'])
    .describe(
      'Archetype: A) Innovator, B) Sage, C) Creator, D) Connector'
    ),
  question3: z
    .enum(['A', 'B', 'C', 'D'])
    .describe(
      'Color Feeling: A) Energy, B) Trust, C) Calm, D) Warmth'
    ),
  question4: z
    .enum(['A', 'B', 'C', 'D'])
    .describe(
      'Typographic Direction: A) Strong, B) Elegant, C) Friendly, D) Clear'
    ),
  question5: z
    .enum(['A', 'B', 'C', 'D'])
    .describe(
      'Presentation Emphasis: A) Detail, B) Simplicity, C) Impact, D) Balanced'
    ),
  question6: z
    .enum(['A', 'B', 'C', 'D'])
    .describe(
      'Customer Relationship: A) Partner, B) Advisor, C) Leader, D) Host'
    ),
  question7: z
    .enum(['A', 'B', 'C', 'D'])
    .describe(
      'Client Impression: A) Empowered, B) Connected, C) Inspired, D) Confident'
    ),
});
export type GenerateStyleElementsInput = z.infer<
  typeof GenerateStyleElementsInputSchema
>;

const GenerateStyleElementsOutputSchema = z.object({
  colorPalette: z
    .array(z.string())
    .describe('An array of hex codes representing the color palette.'),
  fontPairings: z
    .array(z.object({
      headlineFont: z.string(),
      bodyFont: z.string(),
    }))
    .describe('An array of font pairings.'),
  keywords: z.array(z.string()).describe('An array of style keywords.'),
});
export type GenerateStyleElementsOutput = z.infer<
  typeof GenerateStyleElementsOutputSchema
>;

export async function generateStyleElements(
  input: GenerateStyleElementsInput
): Promise<GenerateStyleElementsOutput> {
  return generateStyleElementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStyleElementsPrompt',
  input: {
    schema: z.object({
      question1: z
        .enum(['A', 'B', 'C', 'D'])
        .describe(
          'Core Aesthetic: A) Bold, B) Elegant, C) Creative, D) Minimalist'
        ),
      question2: z
        .enum(['A', 'B', 'C', 'D'])
        .describe(
          'Archetype: A) Innovator, B) Sage, C) Creator, D) Connector'
        ),
      question3: z
        .enum(['A', 'B', 'C', 'D'])
        .describe(
          'Color Feeling: A) Energy, B) Trust, C) Calm, D) Warmth'
        ),
      question4: z
        .enum(['A', 'B', 'C', 'D'])
        .describe(
          'Typographic Direction: A) Strong, B) Elegant, C) Friendly, D) Clear'
        ),
      question5: z
        .enum(['A', 'B', 'C', 'D'])
        .describe(
          'Presentation Emphasis: A) Detail, B) Simplicity, C) Impact, D) Balanced'
        ),
      question6: z
        .enum(['A', 'B', 'C', 'D'])
        .describe(
          'Customer Relationship: A) Partner, B) Advisor, C) Leader, D) Host'
        ),
      question7: z
        .enum(['A', 'B', 'C', 'D'])
        .describe(
          'Client Impression: A) Empowered, B) Connected, C) Inspired, D) Confident'
        ),
    }),
  },
  output: {
    schema: z.object({
      colorPalette: z
        .array(z.string())
        .describe('An array of hex codes representing the color palette.'),
      fontPairings: z
        .array(z.object({
          headlineFont: z.string(),
          bodyFont: z.string(),
        }))
        .describe('An array of font pairings.'),
      keywords: z.array(z.string()).describe('An array of style keywords.'),
    }),
  },
  prompt: `You are a branding expert who helps creative entrepreneurs define their visual identity.

  Based on the following quiz answers, generate a color palette, font pairings, and style keywords that reflect the brand's visual identity.

  Quiz Answers:
  Question 1 (Core Aesthetic): {{{question1}}}
  Question 2 (Archetype): {{{question2}}}
  Question 3 (Color Feeling): {{{question3}}}
  Question 4 (Typographic Direction): {{{question4}}}
  Question 5 (Presentation Emphasis): {{{question5}}}
  Question 6 (Customer Relationship): {{{question6}}}
  Question 7 (Client Impression): {{{question7}}}

  Color Palette: Generate 5-6 hex codes.
  Font Pairings: Suggest 2 font pairings (headline and body font).
  Keywords: Generate 10-15 style keywords.
  `,
});

const generateStyleElementsFlow = ai.defineFlow<
  typeof GenerateStyleElementsInputSchema,
  typeof GenerateStyleElementsOutputSchema
>(
  {
    name: 'generateStyleElementsFlow',
    inputSchema: GenerateStyleElementsInputSchema,
    outputSchema: GenerateStyleElementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);

    // Use the font suggestion service
    const fontStyle = input.question4 === 'A' ? 'strong' : input.question4 === 'B' ? 'elegant' : input.question4 === 'C' ? 'friendly' : 'clear';
    const suggestedFonts = await getFontPairings(fontStyle);

    output!.fontPairings = suggestedFonts;

    return output!;
  }
);

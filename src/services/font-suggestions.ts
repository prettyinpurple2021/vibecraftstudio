/**
 * Represents a font pairing with a headline and body font.
 */
export interface FontPairing {
  /**
   * The name of the headline font.
   */
  headlineFont: string;
  /**
   * The name of the body font.
   */
  bodyFont: string;
}

/**
 * Asynchronously retrieves font pairings based on the provided style.
 *
 * @param style A string describing the desired font style.
 * @returns A promise that resolves to an array of FontPairing objects.
 */
export async function getFontPairings(style: string): Promise<FontPairing[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      headlineFont: 'Playfair Display',
      bodyFont: 'Montserrat',
    },
    {
      headlineFont: 'Oswald',
      bodyFont: 'Roboto',
    },
  ];
}

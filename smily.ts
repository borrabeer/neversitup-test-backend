/**
 *
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */
export function countSmilyFace(texts: string[]): number {
  const smileMouths = new Set([')', 'D']);

  return texts.filter((text) => smileMouths.has(text.charAt(text.length - 1)))
    .length;
}

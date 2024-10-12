/**
 *
 * @param numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns one number that odd number
 */
export function findOddNumber(numbers: number[]): number {
  const countMap = new Map<number, number>();
  for (const number of numbers) {
    countMap.set(number, (countMap.get(number) || 0) + 1);
  }

  for (const [key, value] of countMap) {
    if (value % 2 === 1) {
      return key;
    }
  }

  return -1; // Just in case if there is no odd number
}

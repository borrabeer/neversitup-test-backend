import { findOddNumber } from './odd-number';

describe('findOddNumber', () => {
  it('should return 7 for input [7]', () => {
    expect(findOddNumber([7])).toBe(7);
  });

  it('should return 0 for input [0]', () => {
    expect(findOddNumber([0])).toBe(0);
  });

  it('should return 1 for input [1, 1, 2]', () => {
    expect(findOddNumber([1, 1, 2])).toBe(2);
  });

  it('should return 0 for input [0, 1, 0, 0, 1]', () => {
    expect(findOddNumber([0, 1, 0, 0, 1])).toBe(0);
  });

  it('should return 4 for input [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
    expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
  });

  it('should return 5 for input [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 6, 7, 8, 9, 0]', () => {
    expect(
      findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 6, 7, 8, 9, 0])
    ).toBe(5);
  });

  it('should return -1 for input with no odd occurrences', () => {
    expect(findOddNumber([2, 2, 4, 4])).toBe(-1);
  });
});

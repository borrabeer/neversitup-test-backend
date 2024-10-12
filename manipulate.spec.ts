import { manipulate } from './manipulate';

describe('manipulate', () => {
  it('should return ["a"] for input "a"', () => {
    expect(manipulate('a')).toEqual(['a']);
  });

  it('should return ["ab", "ba"] for input "ab"', () => {
    expect(manipulate('ab')).toEqual(['ab', 'ba']);
  });

  it('should return all permutations for input "abc"', () => {
    const result = manipulate('abc');
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    expect(result.sort()).toEqual(expected.sort());
  });

  it('should return all permutations for input "aabb"', () => {
    const result = manipulate('aabb');
    const expected = ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'];
    expect(result.sort()).toEqual(expected.sort());
  });

  it('should return all permutations for input "abcd"', () => {
    const result = manipulate('abcd');
    const expected = [
      'abcd',
      'abdc',
      'acbd',
      'acdb',
      'adbc',
      'adcb',
      'bacd',
      'badc',
      'bcad',
      'bcda',
      'bdac',
      'bdca',
      'cabd',
      'cadb',
      'cbad',
      'cbda',
      'cdab',
      'cdba',
      'dabc',
      'dacb',
      'dbac',
      'dbca',
      'dcab',
      'dcba',
    ];
    expect(result.sort()).toEqual(expected.sort());
  });
});

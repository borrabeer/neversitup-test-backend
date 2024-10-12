import { countSmilyFace } from './smily';

describe('countSmilyFace', () => {
  it('should return 2 for input [":)", ";(", ";}", ":-D"]', () => {
    expect(countSmilyFace([':)', ';(', ';}', ':-D'])).toBe(2);
  });

  it('should return 3 for input [";D", ":-(", ":-)", ";~)"]', () => {
    expect(countSmilyFace([';D', ':-(', ':-)', ';~)'])).toBe(3);
  });

  it('should return 1 for input [";]", ":[", ";*", ":$", ";-D"]', () => {
    expect(countSmilyFace([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });

  it('should return 0 for input [";(", ":>", ":}", ":]"]', () => {
    expect(countSmilyFace([';(', ':>', ':}', ':]'])).toBe(0);
  });

  it('should return 0 for an empty input', () => {
    expect(countSmilyFace([])).toBe(0);
  });

  it('should return 0 for input with no smiley faces', () => {
    expect(countSmilyFace([':(', ':|', ':<', ':['])).toBe(0);
  });

  it('should return the correct count for input with mixed smiley and non-smiley faces', () => {
    expect(countSmilyFace([':)', ':(', ':D', ':P', ':-D', ':-)'])).toBe(4);
  });
});

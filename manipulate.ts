/**
 *
 * @param text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
export function manipulate(text: string): string[] {
  const result: Set<string> = new Set();
  const used: boolean[] = new Array(text.length).fill(false);
  const current: string[] = [];

  function permute(depth: number) {
    if (depth === text.length) {
      result.add(current.join(''));
      return;
    }
    for (let i = 0; i < text.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      current.push(text[i]);
      permute(depth + 1);
      current.pop();
      used[i] = false;
    }
  }

  permute(0);
  return Array.from(result);
}

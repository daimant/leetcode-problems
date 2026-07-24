// Accepted 783 / 783 testcases passed Sergey Pomortsev submitted at Apr 01, 2026 22:50
// Solution Runtime 6 ms Beats 66.67% Memory 63.24 MB Beats 47.62%

function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
  const obj = { electronics: [], grocery: [], pharmacy: [], restaurant: [] };

  outer: for (let i = 0; i < code.length; i++) {
    if (isActive[i] && code[i].length && obj[businessLine[i]]) {
      for (let j = 0; j < code[i].length; j++) {
        const currCode = code[i].charCodeAt(j);
        if (!(currCode >= 65 && currCode <= 90 || currCode >= 97 && currCode <= 122 || currCode === 95 || currCode >= 48 && currCode <= 57)) continue outer;
      }
      obj[businessLine[i]].push(code[i]);
    }
  }

  return [obj.electronics, obj.grocery, obj.pharmacy, obj.restaurant].map(el => el.sort((a, b) => a > b ? 1 : -1)).flat(1);
};
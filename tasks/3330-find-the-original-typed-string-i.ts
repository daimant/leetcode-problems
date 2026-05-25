// Accepted 780 / 780 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 22:50
// Solution Runtime 47 ms Beats 55.56% Analyze Complexity Memory 56.14 MB Beats 88.89%

function possibleStringCount(word: string): number {
  const map = new Map();

  for (let i = 0; i < word.length; i++) {
    if (word[i - 1] === word[i]) map.set(word[i], map.has(word[i]) ? map.get(word[i]) + 1 : 2);
  }

  return Array.from(map.values()).reduce((acc, curr) => acc + curr - 1, 0) + 1;
};

// optimized
// Accepted 780 / 780 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 22:50
// Solution Runtime 47 ms Beats 55.56% Analyze Complexity Memory 55.85 MB Beats 88.89%

function possibleStringCount(word: string): number {
  let count = 0;
  let sub = 0;

  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) sub += 1;
    else if (sub) {
      count += sub;
      sub = 0;
    }
  }

  return count + sub + 1;
};
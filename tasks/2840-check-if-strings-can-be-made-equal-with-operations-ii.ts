// Accepted 752 / 752 testcases passed Sergey Pomortsev submitted at Mar 30, 2026 11:39
// Solution Runtime 222 ms Beats -% Memory 76.66 MB Beats -%

function checkStrings(s1: string, s2: string): boolean {
  const odd1 = [];
  const even1 = [];
  const odd2 = [];
  const even2 = [];

  for (let i = 0; i < s2.length; i++) {
    if (i % 2) {
      odd1.push(s1[i]);
      odd2.push(s2[i]);
    } else {
      even1.push(s1[i]);
      even2.push(s2[i]);
    }
  }

  return odd1.sort().join('') + even1.sort().join('') === odd2.sort().join('') + even2.sort().join('');
};

// optimized 1
// Accepted 752 / 752 testcases passed Sergey Pomortsev submitted at Mar 30, 2026 11:49
// Solution Runtime 77 ms Beats -% Memory 64.83 MB Beats -%

function checkStrings(s1: string, s2: string): boolean {
  const odd1 = new Map();
  const even1 = new Map();
  const odd2 = new Map();
  const even2 = new Map();

  for (let i = 0; i < s2.length; i++) {
    if (i % 2) {
      odd1.set(s1[i], odd1.has(s1[i]) ? odd1.get(s1[i]) + 1 : 1);
      odd2.set(s2[i], odd2.has(s2[i]) ? odd2.get(s2[i]) + 1 : 1);
    } else {
      even1.set(s1[i], even1.has(s1[i]) ? even1.get(s1[i]) + 1 : 1);
      even2.set(s2[i], even2.has(s2[i]) ? even2.get(s2[i]) + 1 : 1);
    }
  }

  return Array.from(odd1.entries()).sort().join('') + Array.from(even1.entries()).sort().join('') === Array.from(odd2.entries()).sort().join('') + Array.from(even2.entries()).sort().join('');
};

// optimized 2
// Accepted 752 / 752 testcases passed Sergey Pomortsev submitted at Mar 30, 2026 12:12
// Solution Runtime 7 ms Beats 25.00% Memory 62.12 MB Beats 25.00%

function checkStrings(s1: string, s2: string): boolean {
  const odd1 = new Array(26).fill(0);
  const even1 = new Array(26).fill(0);
  const odd2 = new Array(26).fill(0);
  const even2 = new Array(26).fill(0);

  for (let i = 0; i < s2.length; i++) {
    if (i % 2) {
      odd1[s1[i].charCodeAt(0) - 97]++;
      odd2[s2[i].charCodeAt(0) - 97]++;
    } else {
      even1[s1[i].charCodeAt(0) - 97]++;
      even2[s2[i].charCodeAt(0) - 97]++;
    }
  }

  return JSON.stringify(odd1) + JSON.stringify(even1) === JSON.stringify(odd2) + JSON.stringify(even2);
};
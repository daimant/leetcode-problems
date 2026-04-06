// Accepted 103 / 103 testcases passed Sergey Pomortsev submitted at Mar 02, 2026 23:13
// Solution Runtime 7 ms Beats 97.14% Analyze Complexity Memory 55.72 MB Beats 88.57%

const pickGifts = (gifts: number[], k: number): number => {
  for (let i = 0; i < k; i++) {
    let max = gifts[0];
    let maxI = 0;

    for (let j = 0; j < gifts.length; j++) {
      if (gifts[j] > max) {
        max = gifts[j]
        maxI = j
      }
    }

    gifts[maxI] = Math.trunc(Math.sqrt(gifts[maxI]))
  }

  return gifts.reduce((acc, curr) => acc + curr, 0);
}
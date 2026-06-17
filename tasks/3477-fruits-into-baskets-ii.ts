// Accepted 904 / 904 testcases passed Sergey Pomortsev submitted at Mar 19, 2026 14:19
// Solution Runtime 1 ms Beats 97.14% Memory 56.59 MB Beats 94.29%

function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let result = 0;

  outer: for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
        baskets.splice(j, 1);
        continue outer;
      }
    }

    result++;
  }

  return result;
};
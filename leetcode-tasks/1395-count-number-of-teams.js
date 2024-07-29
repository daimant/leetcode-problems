// Accepted
// Runtime 4268 ms Beats 5.36%
// Memory 38.84 MB Beats 100.00%

/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function(rating) {
  const { length: len } = rating;
  let result = 0;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (
          (rating[i] < rating[j] && rating[j] < rating[k]) ||
          (rating[i] > rating[j] && rating[j] > rating[k])
        )
          result++;
      }
    }
  }

  return result;
};

/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = function(widths, S) {
  let symbols = 0,
    page = 1;

  for (let i = 0; i < S.length; i++) {
    const curr = widths[S[i].charCodeAt() - 97];

    if (symbols + curr > 100 || symbols === 100) {
      symbols = 0;
      page++;
    }
    symbols += curr;
  }

  return [page, symbols];
};

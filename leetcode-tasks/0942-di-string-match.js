/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {
  const result = S.split("");
  let inc = 0,
    dec = result.length;

  for (let i = 0; i < S.length; i++) {
    if (result[i] === "D") {
      result[i] = dec--;
    } else result[i] = inc++;
  }

  if (result[result.length - 1] === "D") {
    result.push(dec - 1);
  } else result.push(inc + 1);

  return result;
};

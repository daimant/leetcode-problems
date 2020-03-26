/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let table = new Map();
  let arr = [...A.split(" "), ...B.split(" ")];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (table.has(arr[i])) table.set(arr[i], table.get(arr[i]) + 1);
    if (!table.has(arr[i])) table.set(arr[i], 1);
  }
  table = Array.from(table);

  for (let i = 0; i < table.length; i++) {
    if (table[i][1] === 1) result.push(table[i][0]);
  }

  return result;
};

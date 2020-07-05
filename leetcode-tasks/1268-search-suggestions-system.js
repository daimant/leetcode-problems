/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function(products, searchWord) {
  const result = [];

  products.sort();

  for (let i = 0; i < searchWord.length; i++) {
    const currWord = searchWord.slice(0, i + 1);

    result[i] = [];

    for (let j = 0; j < products.length && result[i].length < 3; j++) {
      if (products[j].indexOf(currWord) === 0) result[i].push(products[j]);
    }
  }

  return result;
};

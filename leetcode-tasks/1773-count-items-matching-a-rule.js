/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
  const col = ruleKey === "type" ? 0 : ruleKey === "color" ? 1 : 2;
  let count = 0;

  for (let item of items) {
    if (item[col] === ruleValue) count++;
  }

  return count;
};

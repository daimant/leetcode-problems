/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = text => {
  const words = text.split(" ").filter(el => el);
  const len = words.length;
  let countSpaces = text.replace(/[^ ]/g, "").length;
  let result = "";

  if (len === 1)
    return `${words[0]}${new Array(countSpaces).fill(" ").join("")}`;
  if (len - 1 === countSpaces) return words.join(" ");

  for (let word of words) {
    const currWord =
      word === words[len - 1]
        ? countSpaces % (len - 1)
        : Math.trunc(countSpaces / (len - 1));

    result += `${word}${new Array(currWord).fill(" ").join("")}`;
  }

  return result;
};

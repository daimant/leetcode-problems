/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = function(number) {
  const digits = [...number.replace(/[ -]/g, "")];
  let result = "";

  for (let i = 0, { length: len } = digits; i < len; i++) {
    if (i === len - 3 || i === len - 2) {
      result += digits.slice(i).join("");
      break;
    } else if (i === len - 4) {
      result += `${digits.slice(i, i + 2).join("")}-${digits
        .slice(i + 2)
        .join("")}`;
      break;
    }

    result += `${digits.slice(i, i + 3).join("")}`;
    i += 2;
    if (i !== len - 1) result += "-";
  }

  return result;
};

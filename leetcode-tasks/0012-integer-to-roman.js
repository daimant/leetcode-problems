/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  const nums = [...(num + "")];
  const letters = new Map([
    ["1", "I"],
    ["5", "V"],
    ["10", "X"],
    ["50", "L"],
    ["100", "C"],
    ["500", "D"],
    ["1000", "M"]
  ]);
  let result = "";

  for (let i = 0; i < nums.length; i++) {
    let curr;

    if (nums[i] === "9") curr = ["1", "10"];
    else if (nums[i] === "8") curr = ["5", "1", "1", "1"];
    else if (nums[i] === "7") curr = ["5", "1", "1"];
    else if (nums[i] === "6") curr = ["5", "1"];
    else if (nums[i] === "5") curr = ["5"];
    else if (nums[i] === "4") curr = ["1", "5"];
    else if (nums[i] === "3") curr = ["1", "1", "1"];
    else if (nums[i] === "2") curr = ["1", "1"];
    else if (nums[i] === "1") curr = ["1"];

    for (let j = 0; curr && j < curr.length; j++) {
      for (let k = 0; k < nums.length - i - 1; k++) {
        curr[j] += "0";
      }

      result += letters.get(curr[j]);
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// mergeSort
const sortArray = function(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i += 2) {
    const [curr, next] = [nums[i], nums[i + 1]];
    if (isFinite(next)) arr.push(curr < next ? [curr, next] : [next, curr]);
    else arr.push([nums[i]]);
  }

  while (true) {
    const newArr = [];

    while (arr.length) {
      const currArr = [];
      const [curr, next] = arr.splice(0, 2);

      while ((curr && curr.length) || (next && next.length)) {
        if (!next || (next && !isFinite(next[0]))) currArr.push(curr.shift());
        else if (!isFinite(curr[0])) currArr.push(next.shift());
        else if (curr[0] < next[0]) currArr.push(curr.shift());
        else currArr.push(next.shift());
      }
      newArr.push(currArr);
    }

    if (newArr.length === 1) return newArr[0];
    arr = newArr;
  }
};

const bubbleSort = function(nums) {
  let change = true;
  while (change) {
    let currChange = false;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        if (!currChange) currChange = true;
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }

    change = currChange;
  }

  return nums;
};
const choiceSort = function(nums) {
  const arr = [];

  while (nums.length) {
    let min = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < nums[min]) min = i;
    }

    arr.push(nums.splice(min, 1));
  }

  return arr;
};

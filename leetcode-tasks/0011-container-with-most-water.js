/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const volume = Math.min(height[j], height[i]) * (j - i);
      if (volume > max) max = volume;
    }
  }

  return max;
};

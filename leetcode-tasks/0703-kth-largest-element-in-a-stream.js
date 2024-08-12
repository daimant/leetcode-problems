// Accepted
// Runtime 212 ms Beats 31.14%
// Memory 45.01 MB Beats 100.00%

/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
  this.arr = nums.sort((a, b) => a - b);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const len = this.arr.length;

  for (let i = 0; i < len; i++) {
    if (val <= this.arr[i]) {
      this.arr.splice(i, 0, val);
      break;
    } else if (i === len - 1) {
      this.arr.push(val);
      break;
    }
  }
  if (!len) this.arr.push(val);

  return this.arr[this.arr.length - this.k];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

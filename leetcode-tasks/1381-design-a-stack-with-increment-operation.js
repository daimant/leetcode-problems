/**
 * @param {number} maxSize
 */
const CustomStack = function(maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.stack.length === this.maxSize) return;
  this.stack[this.stack.length] = x;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (!this.stack.length) return -1;

  const len = this.stack.length;
  const popEl = this.stack[len - 1];

  this.stack.length = len - 1;
  return popEl;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < k && i < this.stack.length; i++) {
    this.stack[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

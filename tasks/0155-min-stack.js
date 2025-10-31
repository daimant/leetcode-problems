/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr.length = this.arr.length + 1;
  this.arr[this.arr.length - 1] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const deleteElement = this.arr[this.arr.length - 1];
  this.arr.length = this.arr.length - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let minimalElement = Infinity;
  this.arr.forEach(el => {
    if (el < minimalElement) minimalElement = el;
  });
  return minimalElement;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

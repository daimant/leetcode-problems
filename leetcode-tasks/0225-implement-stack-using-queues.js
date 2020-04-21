"use strict";

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.arr = new Array();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.arr.length = this.arr.length + 1;
  this.arr[this.arr.length - 1] = x;
  return this.arr.length;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let popElement = this.arr[this.arr.length - 1];
  this.arr.length = this.arr.length - 1;
  return popElement;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.arr[this.arr.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.arr.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

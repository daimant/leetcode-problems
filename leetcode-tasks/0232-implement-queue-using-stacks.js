"use strict";

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.queue = {};
  this.size = 0;
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue[this.size] = x;
  this.size++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let temp = {};
  let popEl = this.queue[0];
  for (let i = 1; i < this.size; i++) {
    temp[i - 1] = this.queue[i];
  }
  this.queue = temp;
  this.size--;
  return popEl;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.size;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

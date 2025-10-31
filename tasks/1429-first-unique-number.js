"use strict";

/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
  this.unique = new Set();
  this.repeat = new Set();

  for (let num of nums) {
    if (this.repeat.has(num)) continue;
    else if (this.unique.has(num)) {
      this.repeat.add(num);
      this.unique.delete(num);
    } else this.unique.add(num);
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  if (!this.unique.size) return -1;
  for (let el of this.unique.values()) return el;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (this.repeat.has(value)) return;
  else if (this.unique.has(value)) {
    this.repeat.add(value);
    this.unique.delete(value);
  } else this.unique.add(value);
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

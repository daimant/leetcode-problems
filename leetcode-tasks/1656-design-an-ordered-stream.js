/**
 * @param {number} n
 */
const OrderedStream = function(n) {
  this.pointer = 0;
  this.queue = [];
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
  this.queue[--id] = value;
  const currGive = [];

  while (this.queue[this.pointer]) {
    currGive.push(this.queue[this.pointer]);
    this.pointer++;
  }

  return currGive;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */

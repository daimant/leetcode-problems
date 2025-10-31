var StockSpanner = function() {
  this.arr = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let count = 1;

  for (let i = this.arr.length - 1; i >= 0; i--) {
    if (this.arr[i] <= price) count++;
    else break;
  }

  this.arr.push(price);
  return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

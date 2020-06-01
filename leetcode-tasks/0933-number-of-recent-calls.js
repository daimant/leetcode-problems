const RecentCounter = function() {
  this.calls = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  let count = 1;

  for (let i = this.calls.length - 1; i >= 0; i--) {
    if (this.calls[i] >= t - 3000) count++;
    else break;
  }

  this.calls.push(t);
  return count;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

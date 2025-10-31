const UndergroundSystem = function() {
  this.inRoad = {};
  this.routes = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.inRoad[id] = { stationName, t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const currRoute = `${this.inRoad[id]["stationName"]} ${stationName}`;

  if (!this.routes[currRoute]) this.routes[currRoute] = [];

  this.routes[currRoute] = [
    ...this.routes[currRoute],
    t - this.inRoad[id]["t"]
  ];

  this.inRoad[id] = {};
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(
  startStation,
  endStation
) {
  const curr = `${startStation} ${endStation}`;
  return (
    this.routes[curr].reduce((acc, curr) => acc + curr) /
    this.routes[curr].length
  );
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

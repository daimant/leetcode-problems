"use strict";

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
  let [rows, cols] = binaryMatrix.dimensions(),
    currRow = 0,
    currCol = cols - 1;

  while (currRow < rows) {
    if (binaryMatrix.get(currRow, currCol) === 1) {
      currCol--;
    } else currRow++;
  }
  currCol++;
  return currCol === cols && binaryMatrix.get(rows - 1, cols - 1) === 0
    ? -1
    : currCol;
};

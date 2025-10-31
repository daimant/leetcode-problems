/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @param deep
 * @return {number}
 */
const maxDepth = (root, deep = 1) =>
  root ? Math.max(deep, ...root.children.map(el => maxDepth(el, deep + 1))) : 0;

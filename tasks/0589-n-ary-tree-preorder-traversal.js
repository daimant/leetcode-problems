/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function(root) {
  if (!root) return [];
  const check = [root],
    result = [];

  while (check.length) {
    const curr = check.shift();
    result.unshift(curr.val);
    if (curr.children.length) check.unshift(...curr.children);
  }

  return result.reverse();
};

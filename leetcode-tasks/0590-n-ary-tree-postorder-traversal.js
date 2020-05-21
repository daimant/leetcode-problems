/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const postOrder = function(root) {
  if (!root) return [];
  const check = [root],
    result = [];

  while (check.length) {
    const curr = check.pop();
    result.push(curr.val);
    if (curr.children.length) check.push(...curr.children);
  }

  return result.reverse();
};

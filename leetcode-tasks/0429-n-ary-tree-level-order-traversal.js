/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const result = [];
  const canCheck = [[0, root]];

  while (canCheck.length) {
    const [currLevel, curr] = canCheck.shift();

    if (!curr) continue;
    if (!result[currLevel]) result[currLevel] = [];

    result[currLevel].push(curr.val);
    canCheck.push(...curr.children.map(el => [currLevel + 1, el]));
  }

  return result;
};

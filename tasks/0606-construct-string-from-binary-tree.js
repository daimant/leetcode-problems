/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function(t) {
  return !t
    ? ""
    : t.left && t.right
    ? `${t.val}(${tree2str(t.left)})(${tree2str(t.right)})`
    : t.left
    ? `${t.val}(${tree2str(t.left)})`
    : t.right
    ? `${t.val}()(${tree2str(t.right)})`
    : `${t.val}`;
};

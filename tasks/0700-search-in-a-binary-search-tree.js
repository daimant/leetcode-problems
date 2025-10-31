/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  while (root) {
    let direction = "";
    if (root.val > val) direction = "left";
    else if (root.val < val) direction = "right";
    else return root;
    root = root[direction];
  }

  return null;
};

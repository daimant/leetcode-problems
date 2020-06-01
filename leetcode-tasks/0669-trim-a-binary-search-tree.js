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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  if (!root) return null;

  const nodes = [root];
  const values = [];

  while (nodes.length) {
    const curr = nodes.shift();
    if (curr.val >= L && curr.val <= R) values.push(curr.val);

    if (curr.left) nodes.push(curr.left);
    if (curr.right) nodes.push(curr.right);
  }

  let tree = values.length ? new TreeNode(values.shift()) : 0;
  const head = tree;

  while (values.length) {
    const curr = values.shift();
    tree = head;

    while (true) {
      const direction = tree.val >= curr ? "left" : "right";

      if (!tree[direction]) {
        tree[direction] = new TreeNode(curr);
        break;
      } else tree = tree[direction];
    }
  }

  return head;
};

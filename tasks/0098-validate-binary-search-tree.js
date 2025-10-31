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
 * @return {boolean}
 */
const isValidBST = function(root) {
  const open = tree => {
    if (!tree) return;
    values.add(tree.val);
    countValues++;
    if (tree.left) open(tree.left);
    if (tree.right) open(tree.right);
  };
  const head = root;
  let values = new Set();
  let isValid = true;
  let countValues = 0;

  if (!root) return isValid;
  open(root);
  if (countValues !== values.size) isValid = false;
  values = [...values];

  while (values.length && isValid) {
    const curr = values.shift();
    root = head;

    while (isValid) {
      if (root && root.val === curr) break;
      else if (!root || (!root.left && !root.right)) {
        isValid = false;
        break;
      } else if (root.val > curr) root = root.left;
      else root = root.right;
    }
  }

  return isValid;
};

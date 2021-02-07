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
 */
const FindElements = function(root) {
  this.change = (tree, curr = 0) => {
    if (!tree) return;

    tree.val = curr;
    this.unique.add(curr);

    if (tree.left) this.change(tree.left, curr * 2 + 1);
    if (tree.right) this.change(tree.right, curr * 2 + 2);
  };
  this.unique = new Set();

  this.change(root);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.unique.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const arr = [];
  open(root1, root2);
  return arr.sort((a, b) => a - b);

  function open(t1, t2) {
    if (!t1 && !t2) return;
    if (t1) arr.push(t1.val);
    if (t2) arr.push(t2.val);

    open(t1 && t1.left ? t1.left : null, t2 && t2.left ? t2.left : null);
    open(t1 && t1.right ? t1.right : null, t2 && t2.right ? t2.right : null);
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  let tree = new TreeNode(preorder.shift());
  const head = tree;

  while (preorder.length) {
    const curr = preorder.shift();
    tree = head;

    while (true) {
      const next = tree.val > curr ? "left" : "right";

      if (!tree[next]) {
        tree[next] = new TreeNode(curr);
        break;
      }

      tree = tree[next];
    }
  }

  return head;
};

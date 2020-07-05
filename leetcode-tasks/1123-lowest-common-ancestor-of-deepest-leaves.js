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
 * @return {TreeNode}
 */
const lcaDeepestLeaves = function(root) {
  const searchMaxDeep = (tree, deep = 0) => {
    if (!tree) return;
    if (deep > maxDeep) maxDeep = deep;
    if (tree.left) searchMaxDeep(tree.left, deep + 1);
    if (tree.right) searchMaxDeep(tree.right, deep + 1);
  };
  const search = (tree, parents = [], deep = 0) => {
    if (!tree) return;

    const curr = [...parents, tree];

    if (deep === maxDeep) links.push(curr);
    if (tree.left) search(tree.left, curr, deep + 1);
    if (tree.right) search(tree.right, curr, deep + 1);
  };
  const links = [];
  let maxDeep = 0;
  searchMaxDeep(root);
  search(root);

  if (links.length === 1) return links[0][links[0].length - 1];

  for (let i = 0; i < links[0].length; i++) {
    const currLink = links[0][i];
    for (let j = 1; j < links.length; j++) {
      if (links[j][i] !== currLink) return links[j][i - 1];
    }
  }
};

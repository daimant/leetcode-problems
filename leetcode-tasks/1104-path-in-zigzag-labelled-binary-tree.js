/**
 * @param {number} label
 * @return {number[]}
 */
const pathInZigZagTree = function(label) {
  const addBranch = (direction, value, deep, tree) => {
    const curr = !(deep % 2)
      ? value - 1 + 2 ** deep
      : Math.abs(2 ** deep - value) + 2 ** deep;
    tree[direction] = curr <= label ? new TreeNode(curr) : null;
  };
  const make = (tree, curr = 1, parents = [], deep = 1) => {
    if (result.length) return;

    const right = curr * 2;
    const left = right - 1;

    addBranch("left", left, deep, tree);
    addBranch("right", right, deep, tree);

    parents = [...parents, tree.val];
    if (tree.val === label) result = parents;

    if (tree["left"]) make(tree["left"], left, parents, deep + 1);
    if (tree["right"]) make(tree["right"], right, parents, deep + 1);
  };

  const root = new TreeNode(1);
  let result = [];

  make(root);

  return result;
};

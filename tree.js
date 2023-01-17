/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = this.root.val;

    function findSum(node) {
      // go through all the children for a node
      for (let child of node.children) {
        // accumalte all values
        sum += child.val;
        // if children
        if (child.children.length > 0) {
          findSum(child);
        }
      }
    }
    findSum(this.root);
    return sum;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvensHelper(node) {
      // go through all the children for node
      for (let child of node.children) {
        // count the child if the value is even
        if (child.val % 2 === 0) count++;
        // if children
        if (child.children.length > 0) {
          // recurse with the child as the root
          countEvensHelper(child);
        }
      }
    }
    countEvensHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function countEvensHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // count the child if the value is greather than lowerBound
        if (child.val > lowerBound) count++;
        // if it has any children
        if (child.children.length > 0) {
          countEvensHelper(child);
        }
      }
    }

    countEvensHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };

class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
    // postOrder
  DFS() {
    if(!this.root) {
      return false;
    }
    let result = [];
    let root = this.root;
    const traverse = root => {
    // result.push(root.val) << preOrder
      if(root.left){  
        traverse(root.left)
        }
        //result.push(root.val) << inOrder
      if (root.right) 
      { 
        traverse(root.right)
      }
      // postOrder 
      result.push(root.val)
    }
    traverse(root);
    return result;
  }
}

const tree = new BST();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.right = new Node(8);
tree.root.right.left = new Node(12);



tree.DFS()


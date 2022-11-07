class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// BST
class BST { 
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
        } else {
                let theRoot = this.root;
            while(true) {
                if (val > theRoot.val) {
                    if (!theRoot.right) {
                        theRoot.right = newNode;
                        return this;
                    }
                    theRoot = theRoot.right;
                }  else if (val < theRoot.val) {
                    if (!theRoot.left) {
                        theRoot.left = newNode;
                        return this;
                    }
                    theRoot = theRoot.left;
                }

            }
        }
    }
}

// instance for BST 
const tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.root.left.left = new Node(5);

tree.insert(3)
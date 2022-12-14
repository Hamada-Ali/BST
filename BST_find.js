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
    find(val) {
        if (!this.root) {
            return false;
        }
        let theRoot = this.root;
        if (val === theRoot.val) {
            return theRoot;
        } else if(val < theRoot.val) {
            while(true) {
                if (theRoot.val === val) {
                return theRoot;
                } else if(theRoot.left === null) {
                    return undefined
                }
                theRoot = theRoot.left;
            }
        } else if(val > theRoot.val) {
            while(true) {
                if(theRoot.val === val) {
                    return theRoot;
                } else if(!theRoot.right) {
                    return undefined
                } 
                theRoot = theRoot.right;
            }
        }
    }
}

// instance for BST 
const tree = new BST();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.left.left = new Node(5);

tree.insert(3)

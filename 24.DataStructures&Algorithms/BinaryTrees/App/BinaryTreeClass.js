class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    //Static Methods
    find(sought) {
        let currentNode = this;
        while(currentNode) {
            console.log("VISITING:", currentNode);
            if(currentNode.val === sought) return currentNode;

            /*
            if(currentNode.val > sought) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            */

            currentNode = sought < currentNode.val 
                ? currentNode.left 
                : currentNode.right
        }
    }
}

class BinarySearchTree {
    constructor(root=null) {
        this.root = root;
    }

    //Static Methods
    traverse(node=this.root) {
        if(node.left) this.traverse(node.left);
        //In-Order traversal
        console.log(node.val);
        if(node.right) this.traverse(node.right);
    }
}

//Instanciate Node Class - Objects
const E = new Node('E');
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const F = new Node('F');
const G = new Node('G');

//Connect nodes
E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;

//Create Binary Tree
const tree = new BinarySearchTree(E);

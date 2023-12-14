/*
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const firstPage = new Node('google.com');
const secondPage = new Node('reddit.com');
const thridPage = new Node('youtube.com');

firstPage.next = secondPage;
secondPage.next = thridPage;
*/

class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}

/*
const firstPage = new Node('google.com', 
    new Node('reddit.com', 
        new Node('youtube.com', 
            new Node('amazon.com'))));

firstPage.next.next.next.next = new Node('twitter.com');
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Traversing LinkedList
    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    // Search Node 
    find(val) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.val === val) return true;
            currentNode = currentNode.next;
        }
        return false
    }

    // Append Node
    /*
    append(val) {
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(val);
    }
    */

    append(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

}

/*
const history = new LinkedList();
history.head = firstPage;
*/

const train = new LinkedList();
train.append('Engine');
train.append('Freight Car 1');
train.append('Freight Car 2');
train.append('Caboose');
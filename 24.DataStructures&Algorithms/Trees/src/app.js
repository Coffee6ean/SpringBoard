class Node {
    constructor(val, children = []) {
        this.val = val;
        this.left = null;
        this.children = children;
    }

    // Tree methods
    findDFS(val) {
        const toVisitSatck = [this];
        while(toVisitSatck.length) {
            const current = toVisitSatck.pop();
            console.log('Visiting:', current.val);
            if(current.val === val) {
                return current;
            }

            for(let child of current.children) {
                toVisitSatck.push(child);
            }
        }
    }

    findBFS(val) {
        const toVisitQueue = [this];
        while(toVisitQueue.length) {
            const current = toVisitQueue.shift();
            console.log('Visiting:', current.val);
            if(current.val === val) {
                return current;
            }

            for(let child of current.children) {
                toVisitQueue.push(child);
            }
        }
    }
}

class Tree {
    constructor(root) {
        this.root = root;
    }

    findInTreeDFS(val) {
        return this.root.findDFS(val);
    }
    findInTreeBFS(val) {
        return this.root.findBFS(val);
    }
}
/*
// Root Node - Parent
let amy = new Node('amy');
// Nodes - Children
let bob = new Node('bob');
let barb = new Node('barb');
let barry = new Node('barry');

amy.children.push(bob, barb, barry);
*/
/*
let amy = new Node('amy', [
    new Node('bob'), 
    new Node('barb'), 
    new Node('barry')
]);
*/

let htmlEl = new Node('html', [
    new Node('head', [
        new Node('title')
    ]), 
    new Node('body', [
        new Node('ul', [
            new Node('li'), 
            new Node('li')
        ])
    ])
])
/*
            html
    head            body
title                    ul
                      li    li
*/

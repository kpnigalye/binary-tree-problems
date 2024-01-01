/*
depth first values
==================
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root)=>{
    let arr = [];
    depthFirst(root, arr);
    return arr;
}

const depthFirst = (root,arr)=>{
    if (root === null)
        return;
    arr.push(root.val);
    depthFirst(root.left, arr);
    depthFirst(root.right, arr);
}

/*
// Test cases

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

*/

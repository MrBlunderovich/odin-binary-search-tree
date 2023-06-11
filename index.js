import Tree from "./BinarySearchTree.js";

const myTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 77]);
myTree.prettyPrint();
console.log(myTree.insert(6));
console.log(myTree.insert(10));
myTree.prettyPrint();

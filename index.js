import Tree from "./BinarySearchTree.js";

const myTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 77, 77]);
//const myTree = Tree([9]);
//console.log(myTree.insert(6));
//console.log(myTree.insert(10));
//myTree.prettyPrint();
/* myTree.insertNode({
    data: 44,
    left: { data: 42, left: null, right: { data: 43, left: null, right: null } },
    right: null,
}); */
/* myTree.prettyPrint();
myTree.remove(5);
myTree.remove(43);
myTree.prettyPrint();
myTree.remove(9); */
/* [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 77, 77].forEach((element) => {
    console.log(`-------------------removing ${element}`);
    myTree.remove(element);
    myTree.prettyPrint();
}); */
/* console.log(myTree.inorder(console.log));
console.log(myTree.preorder(console.log));
console.log(myTree.postorder(console.log)); */
/* console.log("height: ", myTree.height());
console.log("depth of #67: ", myTree.depth(myTree.find(67)));
console.log("depth of #4: ", myTree.depth(myTree.find(4)));
console.log("depth of #88: ", myTree.depth(myTree.find(88)));
console.log("depth of #9: ", myTree.depth(myTree.find(9)));
console.log("depth of null: ", myTree.depth(null)); */
myTree.insert(323);
myTree.insert(0);
myTree.prettyPrint();
console.log(myTree.isBalancedBFS());
myTree.rebalance();
myTree.prettyPrint();

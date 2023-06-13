import Tree from "./BinarySearchTree.js";

//const myTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 77, 77]);
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
/* myTree.insert(323);
myTree.insert(0);
myTree.prettyPrint();
console.log(myTree.isBalancedBFS());
myTree.rebalance();
myTree.prettyPrint(); */

function randomArray(length, cap) {
  const outputArray = [];
  for (let i = 0; i < length; i++) {
    const newElement = Math.floor(Math.random() * cap);
    outputArray.push(newElement);
  }
  return outputArray;
}
const bigTree = Tree(randomArray(30, 100));
bigTree.prettyPrint();
console.log("isBalanced: ", bigTree.isBalancedBFS());
console.log("inorder:");
bigTree.inorder(console.log);
console.log("preorder:");
bigTree.preorder(console.log);
console.log("postorder:");
bigTree.postorder(console.log);
console.log("levelOrder:");
bigTree.levelOrder(console.log);
[101, 102, 103, 104, 105].forEach((element) => {
  bigTree.insert(element);
});
bigTree.prettyPrint();
console.log("isBalanced: ", bigTree.isBalancedBFS());
bigTree.rebalance();
bigTree.prettyPrint();
console.log("isBalanced: ", bigTree.isBalancedBFS());
console.log("inorder:");
console.log(bigTree.inorder());
console.log("preorder:");
console.log(bigTree.preorder());
console.log("postorder:");
console.log(bigTree.postorder());
console.log("levelOrder:");
console.log(bigTree.levelOrder());

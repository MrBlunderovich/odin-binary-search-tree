import Tree from "./BinarySearchTree.js";

const myTree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 77, 77]);
//const myTree = Tree([9]);
myTree.prettyPrint();
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
myTree.levelOrder(console.log);
console.log(myTree.levelOrder());

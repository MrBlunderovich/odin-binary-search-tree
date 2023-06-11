export default function Tree(array = undefined) {
  const sortedArray = array
    ? removeDuplicates([...array].sort((a, b) => a - b))
    : undefined;

  let root = buildTree(sortedArray);
  //prettyPrint(root);

  function buildTree(array) {
    if (!array || array.length === 0) {
      return null;
    }
    const midIndex = Math.floor(array.length / 2);
    const midElement = array[midIndex];
    const leftSubarray = array.slice(0, midIndex);
    const rightSubarray = array.slice(midIndex + 1);
    //console.log({ array, midIndex, midElement, leftSubarray, rightSubarray });
    return Node(midElement, buildTree(leftSubarray), buildTree(rightSubarray));
  }

  function Node(data = undefined, left = null, right = null) {
    if (data === undefined) {
      return null;
    }
    return { data, left, right };
  }

  function removeDuplicates(sortedArray) {
    let previousElement = null;
    const deduplicatedArray = [];
    for (let element of sortedArray) {
      if (element != previousElement) {
        deduplicatedArray.push(element);
        previousElement = element;
      }
    }
    return deduplicatedArray;
  }

  function prettyPrint(node = root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  return { root, prettyPrint };
}

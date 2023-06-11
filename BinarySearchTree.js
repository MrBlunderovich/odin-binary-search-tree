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

  function insert(value, currentNode = root) {
    console.log(currentNode.data);
    if (value === currentNode.data) {
      console.error("Cannot insert duplicate value.");
      return;
    } else if (value < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = Node(value);
        return;
      }
      insert(value, (currentNode = currentNode.left));
    } else if (value > currentNode.data) {
      if (currentNode.right === null) {
        currentNode.right = Node(value);
        return;
      }
      insert(value, (currentNode = currentNode.right));
    }
  }

  function remove(value) {
    //
  }

  function find(value, currentNode = root) {
    console.log(currentNode.data);
    if (currentNode.data === value) {
      return currentNode;
    } else if (value < currentNode.data && currentNode.left) {
      return find(value, currentNode.left);
    } else if (value > currentNode.data && currentNode.right) {
      return find(value, currentNode.right);
    }
    return null;
  }

  return { root, prettyPrint, insert, find };
}

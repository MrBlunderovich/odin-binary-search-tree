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

  function insertNode(newNode, currentNode = root) {
    //console.log("currentNodeValue: ", currentNode.data);
    if (newNode.data === currentNode.data) {
      console.error("Cannot insert duplicate value.");
      return;
    } else if (newNode.data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return;
      }
      insertNode(newNode, (currentNode = currentNode.left));
    } else if (newNode.data > currentNode.data) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return;
      }
      insertNode(newNode, (currentNode = currentNode.right));
    }
  }

  function remove(value) {
    root = removeRecursive(value, root);

    function removeRecursive(value, currentNode) {
      //base case:
      if (currentNode === null) {
        console.log(`Value ${value} was not found.`);
        return currentNode;
      }
      if (value < currentNode.data) {
        currentNode.left = removeRecursive(value, currentNode.left);
      }
      if (value > currentNode.data) {
        currentNode.right = removeRecursive(value, currentNode.right);
      }
      if (currentNode.data === value) {
        //delete this node
        if (!currentNode.left) {
          return currentNode.right;
        } else if (!currentNode.right) {
          return currentNode.left;
        } else {
          currentNode.data = findMinValue(currentNode.right);
          currentNode.right = removeRecursive(
            currentNode.data,
            currentNode.right
          );
        }
      }

      return currentNode;
    }
    function findMinValue(currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      }
      return findMinValue(currentNode.left);
    }
  }

  function find(value, currentNode = root) {
    if (currentNode.data === value) {
      return currentNode;
    } else if (value < currentNode.data && currentNode.left) {
      return find(value, currentNode.left);
    } else if (value > currentNode.data && currentNode.right) {
      return find(value, currentNode.right);
    }
    return null;
  }

  function levelOrder(callback = undefined) {
    if (!root) {
      return;
    }
    const array = [];
    const queue = [root];
    while (queue.length > 0) {
      const front = queue[0];
      if (front.left) {
        queue.push(front.left);
      }
      if (front.right) {
        queue.push(front.right);
      }
      const currentValue = queue.shift().data;
      if (callback) {
        callback(currentValue);
      }
      array.push(currentValue);
    }
    return array;
  }

  function inorder(callback = undefined, currentNode = root, array = []) {
    if (currentNode === null) {
      return;
    }
    inorder(callback, currentNode.left, array);
    array.push(currentNode.data);
    if (callback) {
      callback(currentNode.data);
    }
    inorder(callback, currentNode.right, array);
  }

  return {
    root,
    prettyPrint,
    insert,
    find,
    insertNode,
    remove,
    levelOrder,
    inorder,
  };
}

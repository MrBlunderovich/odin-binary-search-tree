export default function Tree(array = undefined) {
  const sortedArray = array ? [...array].sort((a, b) => a - b) : undefined;
  //todo: check for duplicates
  let root = buildTree(sortedArray);

  function buildTree(array) {
    if (!array || array.length === 0) {
      return null;
    }
    const midIndex = Math.floor(array.length / 2);
    const midElement = array[midIndex];
    const leftSubarray = array.slice(0, midIndex);
    const rightSubarray = array.slice(midIndex + 1);
    console.table([
      { array, midIndex, midElement, leftSubarray, rightSubarray },
    ]);
    return {};
  }

  function Node(value) {
    return { value, left: null, right: null };
  }

  return {};
}

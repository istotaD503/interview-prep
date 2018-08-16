const swap = (array, first, second) => {
  let temp;
  if (array[first] > array[second]) {
    temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }
};

const bubbleSort = array => {
  // number of sorted items; start with 0
  for (let i = 0; i < array.length; i++) {
    // scan the array for each value
    for (let j = 0; j < array.length - i - 1; j++) {
      swap(array, j, j + 1);
    }
  }
};

module.exports = bubbleSort;

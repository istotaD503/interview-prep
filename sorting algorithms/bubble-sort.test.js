const bubbleSort = require('./bubble-sort');

describe('bubble sort', () => {
  let arr;
  test('function given SORTED array of numbers', () => {
    arr = [1, 2, 3, 4, 5, 6];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);

    arr = [-100, -50, 0, 3, 4, 5, 6];
    bubbleSort(arr);
    expect(arr).toEqual([-100, -50, 0, 3, 4, 5, 6]);
  });
  test('function given almost sorted array of numbers', () => {
    arr = [1, 2, 3, 4, 6, 5];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);

    arr = [2, 1, 3, 4, 6, 5];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('function given an reversed array of numbers', () => {
    arr = [6, 5, 4, 3, 0, -1, -2];
    bubbleSort(arr);
    expect(arr).toEqual([-2, -1, 0, 3, 4, 5, 6]);
  });
  test('function given an empty array of numbers', () => {
    arr = [];
    bubbleSort(arr);
    expect(arr).toEqual([]);
  });
});

const bubbleSort = require('./bubble-sort')

test('function given an array', () => {
    expect(bubbleSort([1,2,3])).toEqual([1,2,3])
})
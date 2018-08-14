// test jest
const sum = require('./')

test('test jest. Add 1 + 2 = 3', () => {
    expect(sum(1,2)).toBe(3)
})
const moveZeros = require('./moveZeros.js');

test("it should move all zeros in the string to the end", () => {
  expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).toBe([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
})

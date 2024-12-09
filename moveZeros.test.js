const moveZeros = require('./moveZeros.js');

test("it should move all zeros in the array to the end", () => {
  expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
})

test("it should move all zeros in the array to the end", () => {
  expect(moveZeros([false,1,0,1,2,0,1,3,"a"])).toEqual([false,1,1,2,1,3,"a",0,0])
})

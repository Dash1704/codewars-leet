const total = require('./primeNumberIndex.js')

test('it should give the sum of all numbers with a prime index', () => {
  expect(total([1,2,3,4])).toEqual(7);

  // [3, 4]
})

test('it should give the sum of all numbers with a prime index', () => {
  expect(total([1,2,3,4,5,6])).toEqual(13);
  //            0,1,2,3,4,5

  // [3, 4, 6]
})
const twistedSum = require('./twistedSum.js');

test("it should add all the numbers up and splitting if more than 1 digit", () => {
  expect(twistedSum(3)).toBe(6)
})

test("it should add all the numbers up and splitting if more than 1 digit", () => {
  expect(twistedSum(4)).toBe(10)
})

test("it should add all the numbers up and splitting if more than 1 digit", () => {
  expect(twistedSum(10)).toBe(46)
})
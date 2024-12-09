const permutations = require('./permutations.js');

test('it should return the string', () => {
  expect(permutations("ab")).toBe(["ab", "ba"]);
})


test('it should return the string', () => {
  expect(permutations("a")).toBe(["a"]);
})


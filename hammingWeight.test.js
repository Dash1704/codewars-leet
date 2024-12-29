const hammingWeight = require("./hammingWeight")

test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(10)).toEqual(2)
})


test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(21)).toEqual(3)
})
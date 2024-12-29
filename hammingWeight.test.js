const hammingWeight = require("./hammingWeight")

test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(10)).toEqual(2)
})


test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(21)).toEqual(3)
})

test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(0)).toEqual(0)
})

test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(1)).toEqual(1)
})

test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(2)).toEqual(1)
})


test("it should count how mant 1s in a numbers binary form", () => {
  expect(hammingWeight(2048)).toEqual(1)
})
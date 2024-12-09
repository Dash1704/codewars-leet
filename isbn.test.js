const validISBN10 = require('./isbn.js');

test("it should test a validISBN10 number", () => {
  expect(validISBN10("1112223339")).toBe(true)
})

test("it should test a validISBN10 number", () => {
  expect(validISBN10("048665088X")).toBe(true)
})

test("it should test a validISBN10 number", () => {
  expect(validISBN10("1293000000")).toBe(true)
})

test("it should test a validISBN10 number", () => {
  expect(validISBN10("1234554321")).toBe(true)
})

test("it should test a validISBN10 number", () => {
  expect(validISBN10("1293")).toBe(false)
})

test("it should test a validISBN10 number", () => {
  expect(validISBN10("ABCDEFGHIJ")).toBe(false)
})


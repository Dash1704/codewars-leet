const josephusSurvivor = require('./josephusSurvivor.js');

test("it should test that the last survivor survies", () => {
  expect(josephusSurvivor(7, 3)).toBe(4)
})

test("it should test that the last survivor survies", () => {
  expect(josephusSurvivor(11, 19)).toBe(10)
})

test("it should test that the last survivor survies", () => {
  expect(josephusSurvivor(1, 300)).toBe(1)
})

test("it should test that the last survivor survies", () => {
  expect(josephusSurvivor(14, 2)).toBe(13)
})
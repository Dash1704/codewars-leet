const funnelOut = require('./funnelOut.js')

test('it should funnel out the smallest letter', () => {
  expect(funnelOut([["q"]])).toBe("q")
})

test('it should funnel out the smallest letter', () => {
  expect(funnelOut([["b","c"],["a"]])).toBe("abc")
})
const bitsBattle = require('./bitsBattle.js')

// test('it should declare the winner based on odds and evens count', () => {
//   expect(bitsBattle([5, 3, 14])).toEqual('odds win')
// })

// test('it should declare the winner based on odds and evens count', () => {
//   expect(bitsBattle([3, 8, 22, 15, 78])).toEqual('evens win')
// })

// test('it should declare the winner based on odds and evens count', () => {
//   expect(bitsBattle([])).toEqual('tie')
// })

// test('it should declare the winner based on odds and evens count', () => {
//   expect(bitsBattle([1, 13, 16])).toEqual('tie')
// })

test('it should declare the winner based on odds and evens count', () => {
  expect(bitsBattle([177,85,198,189,62,0,136,174])).toEqual('tie')
})


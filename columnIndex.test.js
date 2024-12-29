const columnIndex = require('./columnIndex.js')

test('it should put specified letter at specified index', () => {
  expect(columnIndex(2, 'A')).toEqual('| | |A| | | | | | |')
})
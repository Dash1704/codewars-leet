const noDuplicates = require('./stringArrayDuplicates.js')

test('the string should return no duplicates in the string', () => {
  expect(noDuplicates(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])).toEqual(['codewars','picaniny','hubububo'])
})
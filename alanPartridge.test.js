const alanPartridge = require('./alanPartridge.js')

test('it should return one of two phrases if containing one of his words', () => {
  expect(alanPartridge(['Grouse', 'Partridge', 'Pheasant'])).toEqual("Mine's a Pint!")
})

test('it should return one of two phrases if containing one of his words', () => {
  expect(alanPartridge(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 
    'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster'])).toEqual("Mine's a Pint!!!!!!!!")
})

test('it should return one of two phrases if containing one of his words', () => {
  expect(alanPartridge(['Pheasant', 'Goose', 'Starling', 'Robin'])).toEqual("Lynn, I've pierced my foot on a spike!!")
})
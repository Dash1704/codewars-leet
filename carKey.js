const carKey = (message) => {
  const name = []

  for(let i = 0; i < message.length; i++){
    const decimalValue = parseInt(message[i], 2)
    const letter = String.fromCharCode(decimalValue)
    name.push(letter)
  }

  return name.join('')
}

module.exports = carKey;
function hamming(string1, string2) {
  const oneArray = string1.split('')
  const twoArray = string2.split('')

  const differentLetters = []

  for(let i = 0; i < oneArray.length; i++){
    if(oneArray[i] !== twoArray[i]){
      differentLetters.push(oneArray[i])
    }
  }

  return differentLetters.length
}

module.exports = hamming;
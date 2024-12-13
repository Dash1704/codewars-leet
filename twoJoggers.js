function twoJoggers(joggerOne, joggerTwo){
  joggerLapArray = [joggerOne, joggerTwo]

  if(joggerLapArray[0] === joggerLapArray[1]){
    return [1, 1]
  }

  const multiplyResult = joggerOne * joggerTwo

  const newArray = []

  joggerLapArray.map((number) => {
    newArray.push(multiplyResult / number)
  })

  while(newArray[0] % 2 === 0 && newArray[1] % 2 === 0){
    for(let i = 0; i < newArray.length; i++){
      newArray[i] = newArray[i] / 2
    }
  }

  return newArray
}

module.exports = twoJoggers;
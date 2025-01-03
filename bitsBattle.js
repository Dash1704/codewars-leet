function bitsBattle(list) {
  if(list === 0) return "tie"

  let evensCount = 0
  let oddsCount = 0

  list.forEach((number) => {
    const binary = number.toString(2).split('')

    if(number % 2 == 0 && number != 0){
      binary.forEach((string) => {
        if(string === "0"){
          evensCount++
        }
      })
    }
    if(number % 2 != 0){
      binary.forEach((string) => {
        if(string === "1"){
          oddsCount++
        }
      })
    }
  })

  return evensCount > oddsCount ? "evens win" : oddsCount > evensCount ? "odds win" 
    : "tie" 
}

module.exports = bitsBattle;

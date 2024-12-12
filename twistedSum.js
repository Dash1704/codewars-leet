function twistedSum(number) {
  const numbersArray = []

  let count = 0

  for(let i = 1; i <= number; i++){
    numbersArray.push(i)
  }

  numbersArray.forEach((number) => {
    if(number < 10){
      count += number
    }
    else{
      moreThanOneDigitNum = number.toString().split("")
      addedSplitNums = moreThanOneDigitNum.reduce((acc, number) => acc + Number(number), 0)
      count += addedSplitNums
    }
  })

  return count
}

module.exports = twistedSum;
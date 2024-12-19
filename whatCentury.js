function whatCentury(year){
  const numberYear = Math.ceil(Number(year) / 100).toString()
  const finalResult = [numberYear]

  const yearArray = numberYear.split('')
  const arrayLastIndex = yearArray.slice(-1)
  const arrayLastTwoIndexes = yearArray.slice(-2).join('')

  if(arrayLastTwoIndexes == "11" || arrayLastTwoIndexes == "12" || arrayLastTwoIndexes == "13"){
    finalResult.push('th')
  }
  else if(arrayLastIndex == "1"){
    finalResult.push("st")
  } else if(arrayLastIndex == "2"){
    finalResult.push("nd")
  } else if(arrayLastIndex == "3"){
    finalResult.push("rd")
  } else {
    finalResult.push('th')
  }

  return finalResult.join('')
}

module.exports = whatCentury;
function whatCentury(year){
  // const numberYear = Math.ceil(Number(year) / 100).toString()
  // const finalResult = [numberYear]

  // const yearArray = numberYear.split('')
  // const arrayLastIndex = yearArray.slice(-1)
  // const arrayLastTwoIndexes = yearArray.slice(-2).join('')

  // if(arrayLastTwoIndexes == "11" || arrayLastTwoIndexes == "12" || arrayLastTwoIndexes == "13"){
  //   finalResult.push('th')
  // }
  // else if(arrayLastIndex == "1"){
  //   finalResult.push("st")
  // } else if(arrayLastIndex == "2"){
  //   finalResult.push("nd")
  // } else if(arrayLastIndex == "3"){
  //   finalResult.push("rd")
  // } else {
  //   finalResult.push('th')
  // }

  // return finalResult.join('')

  const century = Math.ceil(Number(year) / 100)
  const lastDigit = century % 10
  const lastTwoDigits = century % 100
  
  let suffix = 'th'

  if(lastTwoDigits < 11 || lastTwoDigits > 13){
    if(lastDigit == 1){
      suffix = 'st'
    } else if(lastDigit == 2){
      suffix = "nd"
    } else if(lastDigit == 3){
      suffix = "rd"
    }
  }
  return `${century}${suffix}`
}

module.exports = whatCentury;
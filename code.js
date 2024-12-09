function incrementString(string) {
  const reversedString = string.split('').reverse()

  const lastNaNIndex = reversedString.findIndex(value => isNaN(Number(value)))
  const numbersString = reversedString
    .slice(0, lastNaNIndex !== -1 ? lastNaNIndex : reversedString.length)
    .reverse()
    .join('')

   
  
  const lettersString = reversedString
    .slice(lastNaNIndex)
    .reverse()
    .join('')

    
  const number = numbersString ? Number(numbersString) + 1 : 1

  const newNumberString = numbersString
    ? number.toString().padStart(numbersString.length, '0')
    : number.toString();

    console.log("reversedString:", reversedString.join(""))
    console.log("numbersString:", numbersString)
    console.log("lettersString:", lettersString)
    console.log("number:", number)
    console.log("newNumberString:", newNumberString)
   
  return  !isNaN(Number(reversedString.join(''))) ? 
    newNumberString : lettersString + newNumberString
}

module.exports = incrementString;

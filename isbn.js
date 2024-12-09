function validISBN10(isbn) {
  const ISBNArray = isbn.split('')
  
  if(ISBNArray.length === 10 && ISBNArray[9] === "X"){
    ISBNArray[9] = "10"
  }

  const calculation = ISBNArray.map((number, index) => {
    const realIndex = index + 1
    return Number(number * realIndex)
  })

  const sum = calculation.reduce((acc, sum) => acc + sum, 0)

  return sum % 11 === 0 && ISBNArray.length == 10 ? true : false
}

module.exports = validISBN10
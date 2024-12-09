function orderWeight(string){
  const numberArray = string.split(" ").map((num) => Number(num))

  const rankings = {}

  numberArray.forEach((num) => {
    const sum = num.reduce((acc, digit => acc + digit), 0)

    rankings[num] = sum
  })

  //go through the number array and add into the rankings as a key value pair the number and its new value

  //return the numbers in their ranking order

  return stringSplit
}

module.exports = orderWeight;
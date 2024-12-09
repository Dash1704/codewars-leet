function orderWeight(string){
  const numberArray = string.split(" ")
  console.log("numberArray:", numberArray)

  const rankings = []

  numberArray.forEach((num) => {
    const sum = num.split("").reduce((acc, number) => acc + Number(number), 0)
    rankings.push([num, sum])
  })

  rankings.sort((a, b) => a[1] - b[1])

  const newArray = []
  rankings.map((sortedPair) => {
    newArray.push(sortedPair[0])
  })

  return newArray.join(" ")

  //go through the number array and add into the rankings as a key value pair the number and its new value
  //{123: 6, 100: 1}

  //Sort the object by ascending order of the value

  //return the keys and join
  

  
}

module.exports = orderWeight;
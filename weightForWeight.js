function orderWeight(string){
  const numberArray = string.split(" ")

  const rankings = []

  numberArray.forEach((num) => {
    const sum = num.split("").reduce((acc, number) => acc + Number(number), 0)
    rankings.push({number: num, weight: sum})
  })

  rankings.sort((a, b) => {
    if(a.weight === b.weight){
      return a.number.toString().localeCompare(b.number.toString());
    }
    return a.weight - b.weight
  })

  return rankings.map((entry) => entry.number).join(" ")
}

module.exports = orderWeight;
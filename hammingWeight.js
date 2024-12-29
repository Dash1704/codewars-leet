function hammingWeight(number){
  let count = 0
  let binary = number.toString(2).split('')

  for(let i = 0; i < binary.length; i++){
    if(binary[i] === "1"){
      count++
    }
  }

  return count
}

module.exports = hammingWeight;
// function hammingWeight(number){
//   let count = 0
//   let binary = number.toString(2).split('')

//   for(let i = 0; i < binary.length; i++){
//     if(binary[i] === "1"){
//       count++
//     }
//   }

//   return count
// }

//same task but without string operation

function hammingWeight(number){
  let count = 0
  const binaryArray = []

  while (number > 0){
    const remainder = number % 2
    binaryArray.push(remainder)
    number = Math.floor(number / 2)
  }

  for(let i = 0; i < binaryArray.length; i++){
    if(binaryArray[i] === 1){
      count++
    }
  }

  return count
}

module.exports = hammingWeight;
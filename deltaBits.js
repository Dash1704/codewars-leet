function deltaBits(a, b){
  let binaryA = getBinary(a)
  let binaryB = getBinary(b)

  let biggerArray = undefined
  let smallerArray = undefined

  if(binaryA.length - binaryB.length > 0){
    biggerArray = binaryA 
   smallerArray = binaryB
  } else {
    biggerArray = binaryB
    smallerArray = binaryA
  }

  while(smallerArray.length < biggerArray.length){
    smallerArray.push(0)
  }

  let count = 0

  for(let i = 0; i < biggerArray.length; i++){
    if(binaryA[i] !== binaryB[i]){
      count++
    }
  }

  return count
}

function getBinary(num) {
  binaryArray = []
  while(num > 0){
    const remainder = num % 2
    binaryArray.push(remainder)
    num = Math.floor(num / 2)
  }

  return binaryArray
}

module.exports = deltaBits;

//change both to binary
//initalise a count
//iterate over the two arrays add increment count when a change is needed
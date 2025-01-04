function sortByBinaryOnes(list) {
  return list.sort((a, b) => {
    const binaryA = a.toString(2)
    const binaryB = b.toString(2)

    const countOfOnesA = binaryA.split("1").length - 1
    const countOfOnesB = binaryB.split("1").length - 1

    if(countOfOnesA !== countOfOnesB){
      return countOfOnesB - countOfOnesA
    }

    if(countOfOnesA === countOfOnesB && binaryA.length !== binaryB.length){
      return binaryA.length - binaryB.length
    }

    return a - b

  })
}

module.exports = sortByBinaryOnes;

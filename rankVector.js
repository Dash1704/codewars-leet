function ranks(array){
  const decendingOrder = [...array].sort((a, b) => b - a)

  const rankMap = {}
  let rank = 1;

  decendingOrder.forEach((num) => {
    if (rankMap[num] === undefined) {
      rankMap[num] = rank;
    }
    rank++; 
  })

  return array.map(num => rankMap[num])
}



module.exports = ranks;
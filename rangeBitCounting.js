function rangeBitCount(a, b) {
  // const array = []
  let count = 0
  //1
  //3
  //

  // for(let i = a; i < b + 1; i++){
  //   array.push(i)
  // }

  for(let i = a; i <= b; i++){
    count += i.toString(2).split('1').length - 1
  }

  // for(let i = 0; i < array.length; i++){
  //   const binary = array[i].toString(2).split('')
  //   for(let i = 0; i < binary.length; i++){
  //     if(binary[i] === '1') count++
  //   }
  // }

  return count
}

module.exports = rangeBitCount;


function total(array){
  const filteredArray = array.filter((_, index) => isPrime(index))
  console.log(filteredArray)
  return filteredArray.reduce((acc, num) => acc + num, 0)
}

function isPrime(number){
  if(number < 2) return false;
  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      return false
    }
  }
  return true
}

module.exports = total;
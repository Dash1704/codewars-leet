function singleDigit(num){
  if(num < 10) return num

  let result = num
  let binary = result.toString(2).split("")

  while(result.toString().split("").length > 1){
    result = binary.reduce((acc, num) => acc + Number(num), 0)
    binary = result.toString(2).split("")
  }

  return result
}

module.exports = singleDigit;

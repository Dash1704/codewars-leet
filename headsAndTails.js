function coin(n) {
  if (n === 0) return [""]; 

  const smallerFlips = coin(n - 1); 
  const result = [];

  for (const flip of smallerFlips) {
    
    result.push(flip + "H"); 
    result.push(flip + "T"); 
    console.log(flip)
  }

  return result;
}

module.exports = coin;
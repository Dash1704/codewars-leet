function countDeafRats(town){
  const joinedString = town.split('').map((element) => {
    return element.trim()
  }).join('')
  
  const beforeAndAfterP = joinedString.split("P")
  
  let count = 0

  beforeAndAfterP[0].match(/.{1,2}/g).forEach((element) => {
    if(element === "O~"){
      count++
    }
    return;
  })

  beforeAndAfterP[1].match(/.{1,2}/g).forEach((element) => {
    if(element === "~O"){
      count++
    }
    return;
  })

  return count
}

module.exports = countDeafRats;
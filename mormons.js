function mormons(startingNumber, reach, target){
  let missions = 0
  let followers = startingNumber

  while(followers < target){
    followers += followers * reach
    missions++
  }

  return missions
}

module.exports = mormons;
function mormons(mormons, reach, target){
  let missions = 0

  while(mormons < target){
    mormons += mormons * reach
    missions++
  }

  return missions
}

module.exports = mormons;
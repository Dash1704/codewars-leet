function leaderB(user, userScore, yourScore){
  if(yourScore > userScore) return "Winning!"
  if(yourScore == userScore) return "Only need one!"
  
  let difference = userScore - yourScore
  let betaCount = Math.floor(difference / 3)
  let eightCount = difference % 3

  const result = `To beat ${user}'s score, I must complete ${betaCount} Beta kata and ${eightCount} 8kyu kata.`
  
  return betaCount + eightCount > 1000 ? result + " Dammit!" : result
}

module.exports = leaderB;
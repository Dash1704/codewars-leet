function alanPartridge(words) {
  let exclamationCount = 0
  const partridgeWords = [
    "Partridge",
    "PearTree",
    "Chat",
    "Dan",
    "Toblerone",
    "Lynn",
    "AlphaPapa",
    "Nomad"
  ]

  words.forEach((word) => {
    if(partridgeWords.includes(word)){
      exclamationCount++
    }
  })

  return exclamationCount > 0 ? `Mine's a Pint` + "!".repeat(exclamationCount) :
    "Lynn, I've pierced my foot on a spike!!"
}

module.exports = alanPartridge;
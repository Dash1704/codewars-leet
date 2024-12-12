function noDuplicates(string){
  const newArray = []
  string.forEach((word) => {
    const array = []
    const wordSplit = word.split("")
    for(let i = 0; i < wordSplit.length; i++){
      if(wordSplit[i] !== wordSplit[i + 1]){
        array.push(wordSplit[i])
      }
    }
    newArray.push(array.join(""))
    
  })
  return newArray
}

module.exports = noDuplicates;